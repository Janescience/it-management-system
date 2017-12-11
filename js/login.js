$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4WVo9ZjdTKHW1ALNRwbuoqx5uxP8gsWM",
    authDomain: "itms-management-system.firebaseapp.com",
    databaseURL: "https://itms-management-system.firebaseio.com",
    projectId: "itms-management-system",
    storageBucket: "itms-management-system.appspot.com",
    messagingSenderId: "131587290108"
  };
  firebase.initializeApp(config);

  //create firebase references
 var Auth = firebase.auth();
 var dbRef = firebase.database();
var contactsRef = dbRef.ref('contacts')
 var usersRef = dbRef.ref('users')
 var auth = null;



 $('#password').keypress(function(e){
      if(e.keyCode==13)
      $('#btLogin').click();
    });

 var rootRef = dbRef.ref().child("users");

 rootRef.on("child_added",snap => {
   var name = snap.child("name").val();
   var status = snap.child("status").val();


   $('#list_user').append("<tr><td>" + name + "</td><td>" + status +
                          "</td><td><button id='"+'editUser'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                          "  <button id='"+'removeUser'+"' class='"+'btn btn-danger'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
 });

$('#btCreateUser').on('click',function(e){
  e.preventDefault();
  $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
   $('#messageModal').modal('show');

   var data = {
    name:$('#nameCreateUser').val(),
    email: $('#emailCreateUser').val(),
    telephone: $('#phoneCreateUser').val(),
    image: "no image",
    status: $('#rankCreateUser').val(),
    academic_work :{
      academic:"-",
      research:"-"
    },
    education:{
      expertise:"-",
      his_education:"-"
    },
    work:{
      hiswork:"-",
      more_info:"-",
    }
  };

  var passwords = {
    password : $('#passwordCreateUser').val(), //get the pass from Form
  }

  if( data.email != '' && passwords.password != ''){
    firebase.auth().createUserWithEmailAndPassword(data.email, passwords.password).then(function(user){

         console.log("Authenticated successfully with payload:", user);
         auth = user;
         usersRef
              .child(user.uid)
              .set(data)
              .then(function(){
                console.log("User Information Saved:", user.uid);
              })
           $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))

           setTimeout(function() {
              $('#messageModal').modal('hide');
              $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');

          },500);

        }).catch(function(error){
            console.log("Error creating user:", error);
            $('#messageModalLabel').html(spanText(error.code, ['danger']))
          });
        }else {
        //password and confirm password didn't match
        $('#messageModalLabel').html(spanText("Create user failed!", ['danger']))
    }

});

 $('#btLogin').on('click',function (e) {
   e.preventDefault();
   if($('#email').val() != '' && $('#password').val() != ''){

     $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i> Please wait...' , ['center', 'info']))
     $('#messageModal').modal('show');

     var data = {
       email: $('#email').val(),
       password : $('#password').val()
     };

     firebase.auth().signInWithEmailAndPassword(data.email,data.password).then(function(authData){
       auth = authData;
        setTimeout(function () {
          $('#messageModal').modal('hide');
          $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
          contactsRef.child(auth.uid)
           .on("child_added", function(snap) {
             console.log("added", snap.key(), snap.val());
           });
          window.location.href = "index.php";
        })
     })
     .catch(function(error) {
          console.log("Login Failed!", error);
          $('#messageModalLabel').html(spanText(error.code, ['danger']))
          $('#messageModal').modal('show');
        });
   }else if($('#email').val() == '' || $('#password').val() == ''){
     $('#messageModalLabel').html(spanText('login failed!' , ['danger']))
     $('#messageModal').modal('show');
   }else{
     $('#messageModalLabel').html(spanText('login failed!' , ['danger']))
     $('#messageModal').modal('show');
   }
 });

 $('#btLogout').on('click',function(){
   $('#logoutModal').modal('show');
    $('#confirmLogout').on('click',function(){
   Auth.signOut().then(function() {
  window.location.href = "login.php"
}, function(error) {
  // An error happened.
  window.location.href = "index.php"
});
});
 });

})

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
