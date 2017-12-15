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
 var user;
 var selectedFile;

 $('#btEditHeader').on('click',function(){
    $('#editHeaderModal').modal('show');
 });

 var dbImageSlideFirst = dbRef.ref('website').child('index').child('header').child('imageSlideFirst');
 dbImageSlideFirst.on('value',snap => {
   $('#imageHeaderSlideFirst').attr("src",snap.val());
});

$('#btUploadImageHeader').hide();
$('#btClearTextFile').hide();

$('#fileUploadImageHeader').on('change',function(event){
  selectedFile = event.target.files[0];
  $('#btUploadImageHeader').show();
  $('#btClearTextFile').show();
});
$('#btUploadImageHeader').on('click',function(e){
  e.preventDefault();
  $('#messageModalLabel').html(spanText('<i class="fa fa-circle-o-notch fa-spin fa-lg"</i>',['center', 'info']));
  $('#uploadModal').modal('show');
  uploadImage();
});

$('#btClearTextFile').on('click',function(){
  $('#fileUploadImageHeader').val("");
  $('#btUploadImageHeader').hide();
  $('#btClearTextFile').hide();
});

function uploadImage(){
  var filename= selectedFile.name;
  var storageRef = firebase.storage().ref('/HeaderSlideImages/' + filename);
  var uplodadTask = storageRef.put(selectedFile);

  uplodadTask.on('state_changed',function(sanpshot){

  },function(error){

  },function(){
    var downloadURL = uplodadTask.snapshot.downloadURL;
    var updates = {};
    var postData = {
      imageSlideFirst:downloadURL
    };
    var deleteRef;

    var deleteImageSlideFirst = firebase.database().ref('website/index/header').child('imageSlideFirst');
    deleteImageSlideFirst.on('value',snap => {
      deleteRef = firebase.storage().refFromURL(snap.val());
    });

    deleteRef.delete().then(function() {
    $('#uploadModal').modal('hide');
    $('#deletedModal').modal('show');
    }).catch(function(error) {

    });
    updates['website/index/header'] = postData;
    firebase.database().ref().update(updates);
    console.log(downloadURL);
    $('#deletedModal').modal('hide');
    $('#fileUploadImageHeader').val("");
    $('#btUploadImageHeader').hide();
    $('#btClearTextFile').hide();
  });
}


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

$('#btAddUser').on('click',function(e){
  e.preventDefault();
   $('#addUserModal').modal('show');
});

$('#btCreateUser').on('click',function(e){
  e.preventDefault();
  $('#addUserModal').modal('hide');
  $('#messageModalLabel').html("Processing...  "+ spanText('<i class="fa fa-circle-o-notch fa-spin fa-lg"</i>', ['center', 'info']));
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

     $('#messageModalLabel').html("Please wait..."+ spanText('<i class="fa fa-circle-o-notch fa-spin fa-lg"</i>' , ['center', 'info']));
     $('#messageModal').modal('show');

     var data = {
       email: $('#email').val(),
       password : $('#password').val()
     };

     firebase.auth().signInWithEmailAndPassword(data.email,data.password).then(function(authData){
       auth = authData;
       user = authData.user;
        setTimeout(function () {
          $('#messageModal').modal('hide');
          $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
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
  window.location.href = "index.php"
    });
  });
 });

})

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
