$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var auth = null;
 var selectedFile;

 /*------------------------ Bachelor Studyplan (2560) -----------------------------------*/

 $('#btAddStudyplan').on('click',function(e){
      e.preventDefault();
        $('#addStudyplan').modal('show');
    });

 /*======================= END Bachelor Studyplan  ======================*/


/*------------------------ Ic textDetailtitle (2560) -----------------------------------*/

/*======================= Ic Edit Text ======================*/
document.getElementById("textDetailtitle").disabled = true;
document.getElementById("textDetailsubtitle").disabled = true;
  $('#btTitleSave').hide();
  $('#btTitleCancel').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textTopic1');
  db.on('value',snap => {
    $('#textDetailtitle').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textTopic2');
  db.on('value',snap => {
    $('#textDetailsubtitle').val(snap.val());
  });

  $('#btTitleEdit').on('click',function(){
    EditIc2560();
  });

  $('#btTitleSave').on('click',function(){
    SaveIc2560();
  });

  $('#btTitleCancel').on('click',function(){
    CancelIc2560();
  });

  function EditIc2560() {
      document.getElementById("textDetailtitle").disabled = false;
      document.getElementById("textDetailsubtitle").disabled = false;
      $('#btTitleSave').show();
      $('#btTitleCancel').show();

    }

  function SaveIc2560(){

      var data = {
       textTopicBachelorEs:$('#textDetailtitle').val(),
       textDetailBachelorEs:$('#textDetailsubtitle').val()
     
    };

    firebase.database().ref('website').child('course').child('bachelor').child('yearIc2560').update(data);

    $('#btTitleSave').hide();
    $('#btTitleCancel').hide();
    document.getElementById("textDetailtitle").disabled = true;
    document.getElementById("textDetailsubtitle").disabled = true;

    }

  function CancelIc2560() {
        document.getElementById("textDetailtitle").disabled = true;
        document.getElementById("textDetailsubtitle").disabled = true;
        $('#btTitleSave').hide();
        $('#btTitleCancel').hide();
        document.getElementById("textDetailtitle").disabled = true;
        document.getElementById("textDetailsubtitle").disabled = true;
  }


 /*======================= END Ic textDetailtitle (2560)  ======================*/



/*------------------------  Ic Topics 1 (2560) -----------------------------------*/

/*======================= Ic Topics Edit Text ======================*/

  document.getElementById("textTopicSubjects").disabled = true;
  document.getElementById("textDetailSubjects").disabled = true;
  $('#btIcSaveSubjects').hide();
  $('#btIcCancelSubjects').hide();

  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textTopicSubjects');
  db.on('value',snap => {
    $('#textTopicSubjects').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textDetailSubjects');
  db.on('value',snap => {
    $('#textDetailSubjects').val(snap.val());
  });

  $('#btIcEditSubjects').on('click',function(){
    EditBachelorEs2560();
  });

  $('#btIcSaveSubjects').on('click',function(){
    SaveBachelorEs2560();
  });

  $('#btIcCancelSubjects').on('click',function(){
    CancelEditBachelorEs2560();
  });

  function EditBachelorEs2560() {
      document.getElementById("textTopicSubjects").disabled = false;
      document.getElementById("textDetailSubjects").disabled = false;
      $('#btIcSaveSubjects').show();
      $('#btIcCancelSubjects').show();

    }

  function SaveBachelorEs2560(){

      var data = {
       textTopicSubjects:$('#textTopicSubjects').val(),
       textDetailSubjects:$('#textDetailSubjects').val()
     
    };

    firebase.database().ref('website').child('course').child('bachelor').child('yearIc2560').update(data);

    $('#btIcSaveSubjects').hide();
    $('#btIcCancelSubjects').hide();
    document.getElementById("textTopicSubjects").disabled = true;
    document.getElementById("textDetailSubjects").disabled = true;

    }

  function CancelEditBachelorEs2560() {
        document.getElementById("textTopicSubjects").disabled = true;
        document.getElementById("textDetailSubjects").disabled = true;
        $('#btIcSaveSubjects').hide();
        $('#btIcCancelSubjects').hide();
        document.getElementById("textTopicSubjects").disabled = true;
        document.getElementById("textDetailSubjects").disabled = true;
  }


/*=======================  Edit Image ======================*/

 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('yearIc2560').child('imageIc1');
 dbImage.on('value',snap => {
   $('#imgTopic1').attr("src",snap.val());
 });

 $('#btUploadImageTopic1').hide();

 $('#fileUploadImageTopic1').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageTopic1').show();
 });

 $('#btUploadImageTopic1').on('click',function(event){
   uploadImagebachelorEs2560();
 });

 function uploadImagebachelorEs2560(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/IcImage2560/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelorEs:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('yearIc2560').child('imageIc1');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('yearIc2560').update(postImage);
       $('#fileUploadImageTopic1').val("");
       $('#btBachelorEs').hide();
     });
 }

/*======================= End  Edit Image ======================*/

/*======================= End Ic Topics 1 (2560) ======================*/





/*=======================  Ic Topics 2 (2560) ======================*/


/*=======================  Edit Text ======================*/

  document.getElementById("textTopicQualifications").disabled = true;
  document.getElementById("textDetailQualifications").disabled = true;
  document.getElementById("textTopicStructure").disabled = true;
  document.getElementById("textDetailStructure").disabled = true;
  $('#btIcSaveQualifications').hide();
  $('#btIcCancelQualifications').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textTopicQualifications');
  db.on('value',snap => {
    $('#textTopicQualifications').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textDetailQualifications');
  db.on('value',snap => {
    $('#textDetailQualifications').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textTopicStructure');
  db.on('value',snap => {
    $('#textTopicStructure').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textDetailStructure');
  db.on('value',snap => {
    $('#textDetailStructure').val(snap.val());
  });

  $('#btIcEditQualifications').on('click',function(){
    EditBachelorBida2560();
  });

  $('#btIcSaveQualifications').on('click',function(){
    SaveBachelorBida2560();
  });

    $('#btIcCancelQualifications').on('click',function(){
    CancelBachelorBida2560();
  });

  function EditBachelorBida2560() {

      document.getElementById("textTopicQualifications").disabled = false;
      document.getElementById("textDetailQualifications").disabled = false;
      document.getElementById("textTopicStructure").disabled = false;
      document.getElementById("textDetailStructure").disabled = false;
      $('#btIcSaveQualifications').show();
      $('#btIcCancelQualifications').show();
  }

  function SaveBachelorBida2560(){

    var data = {
     textTopicQualifications:$('#textTopicQualifications').val(),
     textDetailQualifications:$('#textDetailQualifications').val(),
     textTopicStructure:$('#textTopicStructure').val(),
     textDetailStructure:$('#textDetailStructure').val()
  };

  firebase.database().ref('website').child('course').child('bachelor').child('yearIc2560').update(data);

  $('#btIcSaveQualifications').hide();
  $('#btIcCancelQualifications').hide();
  document.getElementById("textTopicQualifications").disabled = true;
  document.getElementById("textDetailQualifications").disabled = true;
  document.getElementById("textTopicStructure").disabled = true;
  document.getElementById("textDetailStructure").disabled = true;

  }

  function CancelBachelorBida2560() {

        document.getElementById("textTopicQualifications").disabled = true;
        document.getElementById("textDetailQualifications").disabled = true;
        document.getElementById("textTopicStructure").disabled = true;
        document.getElementById("textDetailStructure").disabled = true;
        $('#btIcSaveQualifications').hide();
        $('#btIcCancelQualifications').hide();
        document.getElementById("textTopicQualifications").disabled = true;
        document.getElementById("textDetailQualifications").disabled = true;
        document.getElementById("textTopicStructure").disabled = true;
        document.getElementById("textDetailStructure").disabled = true;
  }

  /*======================= End  Edit Text ======================*/


  /*=======================  Edit Image  ======================*/


  var dbImage = dbRef.ref("website").child('course').child('bachelor').child('yearIc2560').child('imageIc2');
  dbImage.on('value',snap => {
   $('#imgTopic2').attr("src",snap.val());
 });

  $('#btIcSaveQualifications').hide();
  $('#btIcCancelQualifications').hide();
  $('#btUploadImageTopic2').hide();

 $('#fileUploadImageTopic2').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageTopic2').show();
 });

 $('#btUploadImageTopic2').on('click',function(event){
   uploadImageBachelorBida();
 });


 function uploadImageBachelorBida(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/IcImage2560/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelorBida:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('yearIc2560').child('imageIc2');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('yearIc2560').update(postImage);
       $('#fileUploadImageTopic2').val("");
       $('#btUploadImageTopic2').hide();
     });
 }
 
   /*======================= End Bachelor Edit Image  ======================*/

/*======================= END Ic Topics 2 (2560) ======================*/





/*=======================  Ic Topics 3 (2560) ======================*/


 /*=======================  Edit Text  ======================*/


 document.getElementById("textTopicGraduates").disabled = true;
  document.getElementById("textDetailGraduates").disabled = true;
  $('#btIcSaveGraduates').hide();
  $('#btIcCancelGraduates').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textTopicGraduates');
  db.on('value',snap => {
    $('#textTopicGraduates').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textDetailGraduates');
  db.on('value',snap => {
    $('#textDetailGraduates').val(snap.val());
  });

  $('#btIcEditGraduates').on('click',function(){
    EditGraduatesIs2560();
  });

  $('#btIcSaveGraduates').on('click',function(){
    SaveGraduatesIs2560();
  });

    $('#btIcCancelGraduates').on('click',function(){
    CancelGraduatesIs2560();
  });

  function EditGraduatesIs2560() {

      document.getElementById("textTopicGraduates").disabled = false;
      document.getElementById("textDetailGraduates").disabled = false;
      $('#btIcSaveGraduates').show();
      $('#btIcCancelGraduates').show();
  }

  function SaveGraduatesIs2560(){

    var data = {
     textTopicBachelorMis:$('#textTopicGraduates').val(),
     textDetailBachelorMis:$('#textDetailGraduates').val()
  };

  firebase.database().ref('website').child('course').child('bachelor').child('yearIc2560').update(data);

  $('#btIcSaveGraduates').hide();
  $('#btIcCancelGraduates').hide();
  document.getElementById("textTopicGraduates").disabled = true;
  document.getElementById("textDetailGraduates").disabled = true;

  }

  function CancelGraduatesIs2560() {

        document.getElementById("textTopicGraduates").disabled = true;
        document.getElementById("textDetailGraduates").disabled = true;
        $('#btIcSaveGraduates').hide();
        $('#btIcCancelGraduates').hide();
        document.getElementById("textTopicGraduates").disabled = true;
        document.getElementById("textDetailGraduates").disabled = true;
  }

  /*======================= End  Edit Text ======================*/


/*=======================  Edit Image  ======================*/

 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('yearIc2560').child('imageIc3');
  dbImage.on('value',snap => {
   $('#imgTopic3').attr("src",snap.val());
 });

  $('#btIcSaveGraduates').hide();
  $('#btIcCancelGraduates').hide();

  $('#btUploadImageTopic3').hide();

 $('#fileUploadImageTopic3').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageTopic3').show();
 });

 $('#btUploadImageTopic3').on('click',function(event){
   uploadImagebachelorIs();
 });

 function uploadImagebachelorIs(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/IcImage2560/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageIc3:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('yearIc2560').child('imageIc3');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('yearIc2560').update(postImage);
       $('#fileUploadImageTopic3').val("");
       $('#btUploadImageTopic3').hide();
     });
   }

   /*======================= End Edit Image  ======================*/


 /*======================= END Ic Topics 3 (2560) ======================*/




/*=======================  Ic Topics 4 (2560) ======================*/


 /*=======================  Edit Text  ======================*/


 document.getElementById("textTopicLaboratory").disabled = true;
  document.getElementById("textDetailLaboratory").disabled = true;
  $('#btSaveLaboratory').hide();
  $('#btCancelLaboratory').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textTopicLaboratory');
  db.on('value',snap => {
    $('#textTopicLaboratory').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('yearIc2560').child('textDetailLaboratory');
  db.on('value',snap => {
    $('#textDetailLaboratory').val(snap.val());
  });

  $('#btEditLaboratory').on('click',function(){
    EditLaboratoryIc2560();
  });

  $('#btSaveLaboratory').on('click',function(){
    SaveLaboratoryIc2560();
  });

    $('#btCancelLaboratory').on('click',function(){
    CancelLaboratoryIc2560();
  });

  function EditLaboratoryIc2560() {

      document.getElementById("textTopicLaboratory").disabled = false;
      document.getElementById("textDetailLaboratory").disabled = false;
      $('#btSaveLaboratory').show();
      $('#btCancelLaboratory').show();
  }

  function SaveLaboratoryIc2560(){

    var data = {
     textTopicBachelorMis:$('#textTopicLaboratory').val(),
     textDetailBachelorMis:$('#textDetailLaboratory').val()
  };

  firebase.database().ref('website').child('course').child('bachelor').child('yearIc2560').update(data);

  $('#btSaveLaboratory').hide();
  $('#btCancelLaboratory').hide();
  document.getElementById("textTopicLaboratory").disabled = true;
  document.getElementById("textDetailLaboratory").disabled = true;

  }

  function CancelLaboratoryIc2560() {

        document.getElementById("textTopicLaboratory").disabled = true;
        document.getElementById("textDetailLaboratory").disabled = true;
        $('#btSaveLaboratory').hide();
        $('#btCancelLaboratory').hide();
        document.getElementById("textTopicLaboratory").disabled = true;
        document.getElementById("textDetailLaboratory").disabled = true;
  }

  /*======================= End  Edit Text ======================*/


/*=======================  Edit Image  ======================*/

 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('yearIc2560').child('imageIc4');
  dbImage.on('value',snap => {
   $('#imgTopic4').attr("src",snap.val());
 });

  $('#btSaveLaboratory').hide();
  $('#btCancelLaboratory').hide();

  $('#btUploadImageTopic4').hide();

 $('#fileUploadImageTopic4').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageTopic4').show();
 });

 $('#btUploadImageTopic4').on('click',function(event){
   uploadImageTopic4();
 });

 function uploadImageTopic4(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/IcImage2560/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageIc4:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('yearIc2560').child('imageIc4');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('yearIc2560').update(postImage);
       $('#fileUploadImageTopic4').val("");
       $('#btUploadImageTopic4').hide();
     });
   }

   /*======================= End Edit Image  ======================*/


 /*======================= END Ic Topics 4 (2560) ======================*/









  /*------------------------ Dowload Bachelor (2555) -----------------------------------*/

  $('#btUploadPdfBachelor').hide();

 $('#fileUploadPdfBachelor').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadPdfBachelor').show();
 });

 $('#btUploadPdfBachelor').on('click',function(event){
   uploadPdfBachelor();
 });

  function uploadPdfBachelor(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/CoursePDF_Bachelor2555/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelorMis:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('DowloadPDF2555');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('DowloadPDF2555').update(postImage);
       $('#fileUploadPdfBachelor').val("");
       $('#btUploadPdfBachelor').hide();
     });
   }
   

  /*------------------------ End Dowload Bachelor (2555) -----------------------------------*/

})
