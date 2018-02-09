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
var status;

 $('#password').keypress(function(e){
      if(e.keyCode==13)
      $('#btLogin').click();
    });

$('#btClose').on('click',function (e){
  $('#messageModal').modal('hide');
});

 $('#btLogin').on('click',function (e) {
   e.preventDefault();
   if($('#email').val() != '' && $('#password').val() != ''){

     $('#messageModalLabel').html("กำลังเข้าสู่ระบบ...  "+ spanText('<i class="fa fa-circle-o-notch fa-spin fa-lg"</i>' , ['center', 'info']));
     $('#messageModal').modal('show');

     var data = {
       email: $('#email').val(),
       password : $('#password').val()
     };

     firebase.auth().signInWithEmailAndPassword(data.email,data.password).then(function(authData){
       auth = authData;
       user = authData.user;
       sessionStorage.setItem("userId",authData.uid);
        setTimeout(function () {
          $('#messageModal').modal('hide');
          $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
          window.location.href = "pages-profile.php";
        })
     })
     .catch(function(error) {
          $('#messageModalLabel').html(spanText(error.code, ['danger']))
        });
   }else if($('#email').val() == '' || $('#password').val() == ''){
     $('#messageModalLabel').html(spanText('ไม่สามารถเข้าสู่ระบบได้' , ['danger']))
     $('#messageModal').modal('show');
   }else{
     $('#messageModalLabel').html(spanText('ไม่สามารถเข้าสู่ระบบได้' , ['danger']))
     $('#messageModal').modal('show');
   }
 });



})

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
