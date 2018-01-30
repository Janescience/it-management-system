$(document).ready(function(){

  $(document).on('change', '.btn-file :file', function() {
  var input = $(this),
    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [label]);
  });

  $('.btn-file :file').on('fileselect', function(event, label) {

      var input = $(this).parents('.input-group').find(':text'),
          log = label;

      if( input.length ) {
          input.val(log);
      } else {
          if( log ) alert(log);
      }

  });
  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('.img-show').attr('src', e.target.result);
          }

          reader.readAsDataURL(input.files[0]);
      }
  }

  $(".file-upload").change(function(){
      readURL(this);
  });

  <!--===============================upload====================================-->
   var $dropzone = $('.image_picker'),
      $droptarget = $('.drop_target'),
      $dropinput = $('.upload'),
      $dropimg = $('.image_preview'),
      $remover = $('[data-action="remove_current_image"]');

   $dropzone.on('dragover', function() {
    $droptarget.addClass('dropping');
    return false;
   });

   $dropzone.on('dragend dragleave', function() {
    $droptarget.removeClass('dropping');
    return false;
   });

   $dropzone.on('drop', function(e) {
    $droptarget.removeClass('dropping');
    $droptarget.addClass('dropped');
    $remover.removeClass('disabled');
    e.preventDefault();

    var file = e.originalEvent.dataTransfer.files[0],
        reader = new FileReader();

    reader.onload = function(event) {
      $dropimg.css('background-image', 'url(' + event.target.result + ')');
    };

    console.log(file);
    reader.readAsDataURL(file);

    return false;
   });

   $dropinput.change(function(e) {
    $droptarget.addClass('dropped');
    $remover.removeClass('disabled');
    $('.image_title input').val('');

    var file = $dropinput.get(0).files[0],
        reader = new FileReader();

    reader.onload = function(event) {
      $dropimg.css('background-image', 'url(' + event.target.result + ')');
    }

    reader.readAsDataURL(file);
   });

   $remover.on('click', function() {
    $dropimg.css('background-image', '');
    $droptarget.removeClass('dropped');
    $remover.addClass('disabled');
    $('.image_title input').val('');
   });

   $('.image_title input').blur(function() {
    if ($(this).val() != '') {
      $droptarget.removeClass('dropped');
    }
   });
<!--===========================================================================-->
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

$('#notifyClick').on('click',function(){
$('.dropdown-menu').removeAttr("hidden");
});
$('#profileNavbar').on('click',function(){
$('.dropdown-menu').removeAttr("hidden");
});
 //create firebase references
var Auth = firebase.auth();
var dbRef = firebase.database();
var usersRef = dbRef.ref('users')
var status;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    window.location.href="login.php";
  }
});



var historyRef = dbRef.ref('history');

var rootRefHistory = historyRef.limitToLast(3);
var i=0;
  rootRefHistory.on("child_added",snap => {
    var id = snap.child('id').val();
    var name = snap.child('name').val();
    var page = snap.child('page').val();
    var topic = snap.child('topic').val();
    var date = snap.child('date').val();
    var time = snap.child('time').val();
if(id !=  sessionStorage.getItem("userId")){

    $('#notify').prepend("<a href='"+'#'+"'><div class='"+'btn btn-success btn-circle'+"'><i class='"+'fa fa-pencil'+"'></i></div>"+
                        " <div class='"+'mail-contnet'+"'><h5>"+ name +"</h5><span class='"+'mail-desc'+"'>"+page+ ":" +topic+"</span>"+
                        "<span class='"+'time'+"'>"+date+ "  "+time+"</span></div></a>");

}

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

var dbStatus = usersRef.child(sessionStorage.getItem("userId")).child('level');
dbStatus.on('value',snap => {
  sessionStorage.setItem("level",snap.val());
  if(sessionStorage.getItem("level") != "คณาจารย์และบุคลากร"){
    $('#manageUserMenu').removeAttr('hidden');
  }else{
    $('#tabOfficeHour').removeAttr('hidden');
    $('#manageUserMenu').attr('hidden',"true");
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

 $('#btLogoutFooter').on('click',function(){
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
