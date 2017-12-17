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
var usersRef = dbRef.ref('users')

var dbName = usersRef.child(sessionStorage.getItem("userId")).child('name');
dbName.on('value',snap => {
  document.getElementById('userProfile').innerText = snap.val();
});

var dbEmail = usersRef.child(sessionStorage.getItem("userId")).child('email');
dbEmail.on('value',snap => {
  document.getElementById('emailUser').innerText = snap.val();
});

var dbNameUser = usersRef.child(sessionStorage.getItem("userId")).child('name');
dbNameUser.on('value',snap => {
  document.getElementById('nameUser').innerText = snap.val();
});

 $('#btLogout').on('click',function(){
   $('#logoutModal').modal('show');
    $('#confirmLogout').on('click',function(){

     firebase.auth().onAuthStateChanged(function(user) {
       if (sessionStorage.getItem("userId")) {
         Auth.signOut().then(function() {
         window.location = "login.php"
       }, function(error) {

         });
       } else {

       }
     });
   });
 });

});

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
