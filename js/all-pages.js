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

});

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
