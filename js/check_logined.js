$(document).ready(function(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // window.location ="index.php";
    } else {

    }
  });
});
