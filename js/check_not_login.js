$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

    } else {
      window.location.href="login.php";
    }
  });
});
