$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
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

})
