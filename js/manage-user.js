$(document).ready(function(){
  //create firebase references
 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;


  var rootRef = dbRef.ref().child("users");

  rootRef.on("child_added",snap => {

    var key = snap.key;
    var status = snap.child("status").val();
    var name = snap.child("name").val();

  if(key != sessionStorage.getItem("userId")){
    if(sessionStorage.getItem("status") == "Admin"){
      if(status == "User"){

    $('#list_user').append("<tr><td>" + name + "</td><td>" + status +"</td>"+
                           "<td><button id='"+'editUser'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                           "<button id='"+'removeUser'+"' class='"+'btn btn-danger'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
      }
    }else if(sessionStorage.getItem("status") == "SuperAdmin"){

    $('#list_user').append("<tr><td>" + name + "</td><td>" + status +"</td>"+
                               "<td><button id='"+'editUser'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                               "<button id='"+'removeUser'+"' class='"+'btn btn-danger'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");

        }
  }
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

});
