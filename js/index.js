$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var user;
 var selectedFile;
 var indexSelect;

<!-- การทำงานของ Form Select ส่วนแก้ไข Header-->
<!--====================================================================================-->


 indexSelect = document.getElementById("selectHeaderSlide").selectedIndex;

   var dbTopicSlideFirst = dbRef.ref('website/index/header').child('textTopicFirst');
   dbTopicSlideFirst.on('value',snap => {
     $('#textTopic').val(snap.val());
   });
   var dbDetailSlideFirst = dbRef.ref('website/index/header').child('textDetailFirst');
   dbDetailSlideFirst.on('value',snap => {
     $('#textDetail').val(snap.val());
   });

$('#selectHeaderSlide').on('change',function(){
  indexSelect = document.getElementById("selectHeaderSlide").selectedIndex;
if(indexSelect==0){
  var dbTopicSlideFirst = dbRef.ref('website/index/header').child('textTopicFirst');
  dbTopicSlideFirst.on('value',snap => {
    $('#textTopic').val(snap.val());
  });
  var dbDetailSlideFirst = dbRef.ref('website/index/header').child('textDetailFirst');
  dbDetailSlideFirst.on('value',snap => {
    $('#textDetail').val(snap.val());
  });
}else if(indexSelect==1){
  var dbTopicSlideSecond = dbRef.ref('website/index/header').child('textTopicSecond');
  dbTopicSlideSecond.on('value',snap => {
    $('#textTopic').val(snap.val());
  });
  var dbDetailSlideSecond = dbRef.ref('website/index/header').child('textDetailSecond');
  dbDetailSlideSecond.on('value',snap => {
    $('#textDetail').val(snap.val());
  });
}
});

<!--====================================================================================-->

 $('#btEditHeader').on('click',function(){
    $('#editHeaderModal').modal('show');
 });

 <!-- เรียกข้อมูลทั้งหมดของ Header จาก Firebase ออกมาโชว์เมื่อเปิดหน้า-->
 <!--====================================================================================-->

 var dbImageSlideFirst = dbRef.ref('website/index/header').child('imageSlideFirst');
 dbImageSlideFirst.on('value',snap => {
   $('#imageHeaderSlideFirst').attr("src",snap.val());
});
var dbImageSlideSecond = dbRef.ref('website/index/header').child('imageSlideSecond');
dbImageSlideSecond.on('value',snap => {
  $('#imageHeaderSlideSecond').attr("src",snap.val());
});
var dbTopicSlideFirst = dbRef.ref('website/index/header').child('textTopicFirst');
dbTopicSlideFirst.on('value',snap => {
  document.getElementById('showTopicFirst').innerText =snap.val();
});
var dbDetailSlideFirst = dbRef.ref('website/index/header').child('textDetailFirst');
dbDetailSlideFirst.on('value',snap => {
 document.getElementById('showDetailFirst').innerText =snap.val();
});

var dbTopicSlideSecond = dbRef.ref('website/index/header').child('textTopicSecond');
dbTopicSlideSecond.on('value',snap => {
document.getElementById('showTopicSecond').innerText =snap.val();
});
var dbDetailSlideSecond = dbRef.ref('website/index/header').child('textDetailSecond');
dbDetailSlideSecond.on('value',snap => {
document.getElementById('showDetailSecond').innerText =snap.val();
});

 <!--====================================================================================-->

 <!-- การแก้ไข Header ทั้งหมด รูปภาพและข้อความ -->
 <!--====================================================================================-->

$('#btUploadImageHeader').hide();
$('#btClearTextFile').hide();
$('#btLoading').hide();

$('#fileUploadImageHeader').on('change',function(event){
  selectedFile = event.target.files[0];
  document.getElementById("textTopic").disabled = false;
  document.getElementById("textDetail").disabled = false;
  $('#btUploadImageHeader').show();
  $('#btClearTextFile').show();
});

$('#btUploadImageHeader').on('click',function(e){
  e.preventDefault();
  $('#btUploadImageHeader').hide();
  $('#btClearTextFile').hide();
  $('#btClose').hide();
  $('#btLoading').show();
  uploadImage();
  document.getElementById("textTopic").disabled = true;
  document.getElementById("textDetail").disabled = true;
});

$('#btClearTextFile').on('click',function(){
  document.getElementById("textTopic").disabled = true;
  document.getElementById("textDetail").disabled = true;
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
    var updatesTopic = {};
    var updatesDetail = {};
    var postData = {
      imageSlideFirst:downloadURL,
      imageSlideSecond:downloadURL,
      textTopicFirst:$('#textTopic').val(),
      textDetailFirst:$('#textDetail').val(),
      textTopicSecond:$('#textTopic').val(),
      textDetailSecond:$('#textDetail').val()

    };
    var deleteRef;

if(indexSelect==0){
    var deleteImageSlideFirst = firebase.database().ref('website/index/header').child('imageSlideFirst');
    deleteImageSlideFirst.on('value',snap => {
      deleteRef = firebase.storage().refFromURL(snap.val());
    });

}else if(indexSelect==1){
  var deleteImageSlideSecond = firebase.database().ref('website/index/header').child('imageSlideSecond');
  deleteImageSlideSecond.on('value',snap => {
    deleteRef = firebase.storage().refFromURL(snap.val());
  });

}

deleteRef.delete().then(function() {
}).catch(function(error) {

});

  if(indexSelect==0){
    updates['website/index/header/imageSlideFirst'] = postData.imageSlideFirst;
    updatesTopic['website/index/header/textTopicFirst'] = postData.textTopicFirst;
    updatesDetail['website/index/header/textDetailFirst'] = postData.textDetailFirst;
  }else if(indexSelect==1){
    updates['website/index/header/imageSlideSecond'] = postData.imageSlideSecond;
    updatesTopic['website/index/header/textTopicSecond'] = postData.textTopicSecond;
    updatesDetail['website/index/header/textDetailSecond'] = postData.textDetailSecond;
  }
    firebase.database().ref().update(updates);
    firebase.database().ref().update(updatesTopic);
    firebase.database().ref().update(updatesDetail);
    console.log(downloadURL);
    $('#fileUploadImageHeader').val("");
    $('#btLoading').hide();
    $('#btClose').show();
  });
}
 <!--====================================================================================-->
})
