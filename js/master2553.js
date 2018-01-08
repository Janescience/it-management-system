$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var auth = null;
 var selectedFile;

 /*------------------------ Master OpenCourses (2553) -----------------------------------*/

 $('#btAddOpenCourses').on('click',function(e){
      e.preventDefault();
        $('#addOpenCourses').modal('show');
    });

 /*======================= END Master OpenCourses  ======================*/



 /*------------------------  Modify Digital (2553) -----------------------------------*/

 $('#btModifyDigital').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyDigital').modal('show');
    });

 /*======================= END Modify Digital  ======================*/


  /*------------------------  Modify Enterprise (2553) -----------------------------------*/

 $('#btModifyEnterprise').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyEnterprise').modal('show');
    });

 /*======================= END Enterprise Digital  ======================*/


  /*------------------------  Modify Knowledge (2553) -----------------------------------*/

 $('#btModifyKnowledge').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyKnowledge').modal('show');
    });

 /*======================= END Knowledge Digital  ======================*/




 /*------------------------ Master textDetailtitle (2553) -----------------------------------*/

/*======================= Master Edit Text ======================*/
document.getElementById("textDetailtitle").disabled = true;
document.getElementById("textDetailsubtitle").disabled = true;
  $('#btTitleSave').hide();
  $('#btTitleCancel').hide();


  var db = dbRef.ref('website/course').child('master').child('year2553').child('textTopic1');
  db.on('value',snap => {
    $('#textDetailtitle').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('master').child('year2553').child('textTopic2');
  db.on('value',snap => {
    $('#textDetailsubtitle').val(snap.val());
  });

  $('#btTitleEdit').on('click',function(){
    EditMaster553();
  });

  $('#btTitleSave').on('click',function(){
    SaveMaster2553();
  });

  $('#btTitleCancel').on('click',function(){
    CancelMaster2553();
  });

  function EditMaster553() {
      document.getElementById("textDetailtitle").disabled = false;
      document.getElementById("textDetailsubtitle").disabled = false;
      $('#btTitleSave').show();
      $('#btTitleCancel').show();

    }

  function SaveMaster2553(){

      var data = {
       textDetailtitle:$('#textDetailtitle').val(),
       textDetailsubtitle:$('#textDetailsubtitle').val()
     
    };

    firebase.database().ref('website').child('course').child('master').child('year2553').update(data);

    $('#btTitleSave').hide();
    $('#btTitleCancel').hide();
    document.getElementById("textDetailtitle").disabled = true;
    document.getElementById("textDetailsubtitle").disabled = true;

    }

  function CancelMaster2553() {
        document.getElementById("textDetailtitle").disabled = true;
        document.getElementById("textDetailsubtitle").disabled = true;
        $('#btTitleSave').hide();
        $('#btTitleCancel').hide();
        document.getElementById("textDetailtitle").disabled = true;
        document.getElementById("textDetailsubtitle").disabled = true;
  }


 /*======================= END Master textDetailtitle (2553)  ======================*/



 /*------------------------  Digital (2553) -----------------------------------*/

/*======================= Digital Edit Text ======================*/

  document.getElementById("textTopicDigital").disabled = true;
  document.getElementById("textDetailDigital").disabled = true;
  $('#btSaveDigital').hide();
  $('#btCancelDigital').hide();

  var db = dbRef.ref('website/course').child('master').child('year2553').child('textTopicDigital');
  db.on('value',snap => {
    $('#textTopicDigital').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('master').child('year2553').child('textDetailDigital');
  db.on('value',snap => {
    $('#textDetailDigital').val(snap.val());
  });

  $('#btEditDigital').on('click',function(){
    EditMaster2553();
  });

  $('#btSaveDigital').on('click',function(){
    SaveMaster2553();
  });

  $('#btCancelDigital').on('click',function(){
    CancelEditMaster2553();
  });

  function EditMaster2553() {
      document.getElementById("textTopicDigital").disabled = false;
      document.getElementById("textDetailDigital").disabled = false;
      $('#btSaveDigital').show();
      $('#btCancelDigital').show();

    }

  function SaveMaster2553(){

      var data = {
       textTopicDigital:$('#textTopicDigital').val(),
       textDetailDigital:$('#textDetailDigital').val()
     
    };

    firebase.database().ref('website').child('course').child('bachelor').child('yearIc2560').update(data);

    $('#btSaveDigital').hide();
    $('#btCancelDigital').hide();
    document.getElementById("textTopicDigital").disabled = true;
    document.getElementById("textDetailDigital").disabled = true;

    }

  function CancelEditMaster2553() {
        document.getElementById("textTopicDigital").disabled = true;
        document.getElementById("textDetailDigital").disabled = true;
        $('#btSaveDigital').hide();
        $('#btCancelDigital').hide();
        document.getElementById("textTopicDigital").disabled = true;
        document.getElementById("textDetailDigital").disabled = true;
  }


/*=======================  Edit Image ======================*/

 var dbImage = dbRef.ref("website").child('course').child('master').child('year2553').child('imageDigital');
 dbImage.on('value',snap => {
   $('#imgDigital').attr("src",snap.val());
 });

 $('#btUploadImageDigital').hide();

 $('#fileUploadImageDigital').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageDigital').show();
 });

 $('#btUploadImageDigital').on('click',function(event){
   uploadImageDigital();
 });

 function uploadImageDigital(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/Master/Master2553/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageDigital:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('master').child('year2553').child('imageDigital');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('master').child('year2553').update(postImage);
       $('#fileUploadImageDigital').val("");
       $('#btUploadImageDigital').hide();
     });
 }

/*======================= End  Edit Image ======================*/

/*======================= End Digital (2553) ======================*/



/*------------------------  Enterprise (2553) -----------------------------------*/

/*======================= Enterprise Edit Text ======================*/

  document.getElementById("textTopicEnterprise").disabled = true;
  document.getElementById("textDetailEnterprise").disabled = true;
  $('#btSaveEnterprise').hide();
  $('#btCancelEnterprise').hide();

  var db = dbRef.ref('website/course').child('master').child('year2553').child('textTopicEnterprise');
  db.on('value',snap => {
    $('#textTopicEnterprise').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('master').child('year2553').child('textDetailEnterprise');
  db.on('value',snap => {
    $('#textDetailEnterprise').val(snap.val());
  });

  $('#btEditEnterprise').on('click',function(){
    EditEnterprise2553();
  });

  $('#btSaveEnterprise').on('click',function(){
    SaveEnterprise2553();
  });

  $('#btCancelEnterprise').on('click',function(){
    CancelEditEnterprise2553();
  });

  function EditEnterprise2553() {
      document.getElementById("textTopicEnterprise").disabled = false;
      document.getElementById("textDetailEnterprise").disabled = false;
      $('#btSaveEnterprise').show();
      $('#btCancelEnterprise').show();

    }

  function SaveEnterprise2553(){

      var data = {
       textTopicDigital:$('#textTopicEnterprise').val(),
       textDetailDigital:$('#textDetailEnterprise').val()
     
    };

    firebase.database().ref('website').child('course').child('bachelor').child('yearIc2560').update(data);

    $('#btSaveDigital').hide();
    $('#btCancelDigital').hide();
    document.getElementById("textTopicEnterprise").disabled = true;
    document.getElementById("textDetailEnterprise").disabled = true;

    }

  function CancelEditEnterprise2553() {
        
        $('#btSaveEnterprise').hide();
        $('#btCancelEnterprise').hide();
        document.getElementById("textTopicEnterprise").disabled = true;
        document.getElementById("textDetailEnterprise").disabled = true;
  }


/*=======================  Edit Image ======================*/

 var dbImage = dbRef.ref("website").child('course').child('master').child('year2553').child('imageEnterprise');
 dbImage.on('value',snap => {
   $('#imgEnterprise').attr("src",snap.val());
 });

 $('#btUploadImageEnterprise').hide();

 $('#fileUploadImageEnterprise').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageEnterprise').show();
 });

 $('#btUploadImageEnterprise').on('click',function(event){
   uploadImageEnterprise();
 });

 function uploadImageEnterprise(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/Master/Master2553/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageEnterprise:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('master').child('year2553').child('imageEnterprise');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('master').child('year2553').update(postImage);
       $('#fileUploadImageEnterprise').val("");
       $('#btUploadImageEnterprise').hide();
     });
 }

/*======================= End  Edit Image ======================*/

/*======================= End Enterprise (2553) ======================*/



/*------------------------  Knowledge (2553) -----------------------------------*/

/*======================= Knowledge Edit Text ======================*/

  document.getElementById("textTopicKnowledge").disabled = true;
  document.getElementById("textDetailKnowledge").disabled = true;
  $('#btSaveKnowledge').hide();
  $('#btCancelKnowledge').hide();

  var db = dbRef.ref('website/course').child('master').child('year2553').child('textTopicKnowledge');
  db.on('value',snap => {
    $('#textTopicKnowledge').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('master').child('year2553').child('textDetailKnowledge');
  db.on('value',snap => {
    $('#textDetailKnowledge').val(snap.val());
  });

  $('#btEditKnowledge').on('click',function(){
    EditKnowledge2553();
  });

  $('#btSaveKnowledge').on('click',function(){
    SaveKnowledge2553();
  });

  $('#btCancelKnowledge').on('click',function(){
    CancelEditKnowledge2553();
  });

  function EditKnowledge2553() {
      document.getElementById("textTopicKnowledge").disabled = false;
      document.getElementById("textDetailKnowledge").disabled = false;
      $('#btSaveKnowledge').show();
      $('#btCancelKnowledge').show();

    }

  function SaveKnowledge2553(){

      var data = {
       textTopicDigital:$('#textTopicKnowledge').val(),
       textDetailDigital:$('#textDetailKnowledge').val()
     
    };

    firebase.database().ref('website').child('course').child('bachelor').child('yearIc2560').update(data);

    $('#btSaveKnowledge').hide();
    $('#btCancelKnowledge').hide();
    document.getElementById("textTopicKnowledge").disabled = true;
    document.getElementById("textDetailKnowledge").disabled = true;

    }

  function CancelEditKnowledge2553() {
        document.getElementById("textTopicKnowledge").disabled = true;
        document.getElementById("textDetailKnowledge").disabled = true;
        $('#btSaveKnowledge').hide();
        $('#btCancelKnowledge').hide();
        document.getElementById("textTopicKnowledge").disabled = true;
        document.getElementById("textDetailKnowledge").disabled = true;
  }


/*=======================  Edit Image ======================*/

 var dbImage = dbRef.ref("website").child('course').child('master').child('year2553').child('imageKnowledge');
 dbImage.on('value',snap => {
   $('#imgKnowledge').attr("src",snap.val());
 });

 $('#btUploadImageKnowledge').hide();

 $('#fileUploadImageKnowledge').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageKnowledge').show();
 });

 $('#btUploadImageKnowledge').on('click',function(event){
   uploadImageKnowledge();
 });

 function uploadImageKnowledge(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/Master/Master2553/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageEnterprise:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('master').child('year2553').child('imageKnowledge');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('master').child('year2553').update(postImage);
       $('#fileUploadImageKnowledge').val("");
       $('#btUploadImageKnowledge').hide();
     });
 }

/*======================= End  Edit Image ======================*/

/*======================= End Enterprise (2553) ======================*/






})