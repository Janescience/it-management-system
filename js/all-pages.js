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

var historyRef = dbRef.ref('history');

var rootRefHistory = historyRef;

  rootRefHistory.on("child_added",snap => {
    var name = snap.child('name').val();
    var topic = snap.child('topic').val();
    var date = snap.child('date').val();
    var time = snap.child('time').val();

    $('#notify').append("<a href='"+'#'+"'><div class='"+'btn btn-success btn-circle'+"'><i class='"+'fa fa-pencil'+"'></i></div>"+
                        " <div class='"+'mail-contnet'+"'><h5>"+ name +"</h5><span class='"+'mail-desc'+"'>"+topic+"</span>"+
                        "<span class='"+'time'+"'>"+date+ "  "+time+"</span></div></a>");

  });

$('#btUploadImageHeader').on('click',function(e){
  var notify = {
    id : sessionStorage.getItem("userId")
  };
  firebase.database().ref('notify').set(notify);
});



var idNotify;

var dbNotify = firebase.database().ref('notify').child('id');
dbNotify.on('value',snap => {
  idNotify = snap.val();

  if(idNotify!= "" && idNotify != null){
    if(idNotify !=  sessionStorage.getItem("userId")){
      $('#heartBit').attr("class","heartbit");
      $('#point').attr("class","point");
    }
  }

});

$('#notifyClick').on('click',function(e){
  dbNotify.remove();
  $('#heartBit').removeAttr("class");
  $('#point').removeAttr("class");
});



$('#manageUserMenu').hide();

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

var dbUserImage = usersRef.child(sessionStorage.getItem("userId")).child('image');
dbUserImage.on('value',snap => {
  $('#userImageProfile').attr('src',snap.val());
  $('#userImage').attr('src',snap.val());
});

var dbStatus = usersRef.child(sessionStorage.getItem("userId")).child('status');
dbStatus.on('value',snap => {
  sessionStorage.setItem("status",snap.val());
  if(sessionStorage.getItem("status")=="Admin"){
    $('#manageUserMenu').show();
  }else if(sessionStorage.getItem("status")=="SuperAdmin"){
    $('#manageUserMenu').show();
  }
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
