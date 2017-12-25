$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var auth = null;
 var selectedFile;

 
 //Bachepor1

 // Bechelor text1
 document.getElementById("textTopicBachelor1").disabled = true;
  document.getElementById("textDetailBachelor1").disabled = true;
  $('#BachelorPhilosophySave').hide();
  $('#BachelorPhilosophyCancel').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('textTopicBachelor1');
  db.on('value',snap => {
    $('#textTopicBachelor1').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('textDetailBachelor1');
  db.on('value',snap => {
    $('#textDetailBachelor1').val(snap.val());
  });

  $('#BachelorPhilosophyEdit').on('click',function(){
    EditBachelorPhilosophy();
  });

  function EditBachelorPhilosophy() {
      document.getElementById("textTopicBachelor1").disabled = false;
      document.getElementById("textDetailBachelor1").disabled = false;
      $('#BachelorPhilosophySave').show();
      $('#BachelorPhilosophyCancel').show();

    }

   $('#BachelorPhilosophySave').on('click',function(){
    SaveBachelorPhilosophy();
  });


function SaveBachelorPhilosophy(){

    var data = {


   bachelor :{
     textTopicBachelor1:$('#textTopicBachelor1').val(),
     textDetailBachelor1:$('#textDetailBachelor1').val()
   }
  };
  firebase.database().ref('website').child('course').child('bachelor').update(data);

  $('#BachelorPhilosophySave').hide();
  $('#BachelorPhilosophyCancel').hide();
  document.getElementById("textTopicBachelor1").disabled = true;
  document.getElementById("textDetailBachelor1").disabled = true;

  }

  $('#BachelorPhilosophyCancel').on('click',function(){
    CancelEditBachelorPhilosophy();
  });

  function CancelEditBachelorPhilosophy() {
        document.getElementById("textTopicBachelor1").disabled = true;
        document.getElementById("textDetailBachelor1").disabled = true;
        $('#BachelorPhilosophySave').hide();
        $('#BachelorPhilosophyCancel').hide();
        document.getElementById("textTopicBachelor1").disabled = true;
        document.getElementById("textDetailBachelor1").disabled = true;


      }

      // Bechelor Purpose
      document.getElementById("textTopicBachelor1").disabled = true;
      document.getElementById("textDetailBachelor1").disabled = true;
      $('#BachelorPurposeSave').hide();
      $('#BachelorPurposeCancel').hide();


      var dbRef = firebase.database();

      var db = dbRef.ref('website/course').child('bachelor').child('textTopicBachelor1');
      db.on('value',snap => {
        $('#textTopicBachelor1').val(snap.val());
      });

      var db = dbRef.ref('website/course').child('bachelor').child('textDetailBachelor1');
      db.on('value',snap => {
        $('#textDetailBachelor1').val(snap.val());
      });

      $('#BachelorPurposeEdit').on('click',function(){
        EditBachelorPurpose();
      });

      function EditBachelorPurpose() {
        document.getElementById("textTopicBachelor1").disabled = false;
          document.getElementById("textDetailBachelor1").disabled = false;
          $('#BachelorPurposeSave').show();
          $('#BachelorPurposeCancel').show();

        }


      $('#BachelorPurposeSave').on('click',function(){
        SaveBachelorPurpose();
      });




//image1

 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('imageBachelor1');
 dbImage.on('value',snap => {
   $('#imgBachelor1').attr("src",snap.val());
 });


 $('#btBachelor1').hide();

 $('#fileUploadImageBachelor1').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btBachelor1').show();
 });

 $('#btBachelor1').on('click',function(event){
   uploadImagebachelor1();
 });


 function uploadImagebachelor1(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelor1:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('imageBachelor1');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').update(postImage);
       $('#fileUploadImageBachelor1').val("");
       $('#btBachelor1').hide();
     });
 }


//Bachepor2


  var dbImage = dbRef.ref("website").child('course').child('bachelor').child('imageBachelor2');
  dbImage.on('value',snap => {
   $('#imgBachelor2').attr("src",snap.val());
 });


  $('#btBachelor2').hide();

 $('#fileUploadImageBachelor2').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btBachelor2').show();
 });

 $('#btBachelor2').on('click',function(event){
   uploadImagebachelor2();
 });


 function uploadImagebachelor2(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelor2:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('imageBachelor2');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').update(postImage);
       $('#fileUploadImageBachelor2').val("");
       $('#btBachelor2').hide();
     });
 }
 

 //Bachelor3


 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('imageBachelor3');
  dbImage.on('value',snap => {
   $('#imgBachelor3').attr("src",snap.val());
 });


  $('#btBachelor3').hide();

 $('#fileUploadImageBachelor3').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btBachelor3').show();
 });

 $('#btBachelor3').on('click',function(event){
   uploadImagebachelor3();
 });

 function uploadImagebachelor3(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelor3:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('imageBachelor3');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').update(postImage);
       $('#fileUploadImageBachelor3').val("");
       $('#btBachelor3').hide();
     });
   }

  //Bachelor4

  var dbImage = dbRef.ref("website").child('course').child('bachelor').child('imageBachelor4');
  dbImage.on('value',snap => {
   $('#imgBachelor4').attr("src",snap.val());
 });


  $('#btBachelor4').hide();

 $('#fileUploadImageBachelor4').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btBachelor4').show();
 });

 $('#btBachelor4').on('click',function(event){
   uploadImagebachelor4();
 });

 function uploadImagebachelor4(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelor4:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('imageBachelor4');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').update(postImage);
       $('#fileUploadImageBachelor4').val("");
       $('#btBachelor4').hide();
     });
   }

})
