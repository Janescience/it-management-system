$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var auth = null;
 var selectedFile;
 var indexSelect;

 /*------------------------ select page -----------------------------------*/

 $('#selectHeaderSlide').on('change',function(){
  indexSelect = document.getElementById("selectHeaderSlide").selectedIndex;
  if(indexSelect==0){
    window.location.href = "course.php";
  }else if(indexSelect==1){
    window.location.href = "bachelor2560.php";
  }else if(indexSelect==2){
    window.location.href = "bachelorIc2560.php";
  }else if(indexSelect==3){
    window.location.href = "master2553.php";
  }else if(indexSelect==4){
    window.location.href = "master2558.php";
  }else if(indexSelect==5){
    window.location.href = "doctorate2553.php";
  }else if(indexSelect==6){
    window.location.href = "doctorate2558.php";
  }else if(indexSelect==7){
    window.location.href = "doctorate.php";
  }
});


/*------------------------ End select page -----------------------------------*/

 /*------------------------ Bachelor Studyplan (2555) -----------------------------------*/

 $('#btAddStudyplan').on('click',function(e){
      e.preventDefault();
        $('#addStudyplan').modal('show');
    });

 /*======================= END Bachelor Studyplan  ======================*/



 /*------------------------ Bachelor OpenCourses (2555) -----------------------------------*/

 $('#btAddOpenCourses').on('click',function(e){
      e.preventDefault();
        $('#addOpenCourses').modal('show');
    });

 /*======================= END Bachelor OpenCourses  ======================*/


 /*------------------------ Bachelor ModifyEs (2555) -----------------------------------*/

 $('#btBachelorModifyEs').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyEs').modal('show');
    });

 /*======================= END Bachelor ModifyEs  ======================*/


 /*------------------------ Bachelor ModifyIc (2555) -----------------------------------*/

 $('#btBachelorModifyIc').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyIc').modal('show');
    });

 /*======================= END Bachelor ModifyIc  ======================*/


 /*------------------------ Bachelor ModifyMis (2555) -----------------------------------*/

 $('#btBachelorModifyMis').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyMis').modal('show');
    });

 /*======================= END Bachelor ModifyMis  ======================*/


  /*------------------------ Bachelor ModifyIs (2555) -----------------------------------*/

 $('#btBachelorModifyIs').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyIs').modal('show');
    });

 /*======================= END Bachelor ModifyIs  ======================*/






/*------------------------ Bachelor Es (2555) -----------------------------------*/

/*======================= Bachelor Edit Text ======================*/

  document.getElementById("textTopicBachelorEs").disabled = true;
  document.getElementById("textDetailBachelorEs").disabled = true;
  $('#btBachelorSaveEs').hide();
  $('#btBachelorCancelEs').hide();

  var db = dbRef.ref('website/course').child('bachelor').child('year2555').child('textTopicBachelorEs');
  db.on('value',snap => {
    $('#textTopicBachelorEs').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('year2555').child('textDetailBachelorEs');
  db.on('value',snap => {
    $('#textDetailBachelorEs').val(snap.val());
  });

  $('#btBachelorEditEs').on('click',function(){
    EditBachelorEs2555();
  });

  $('#btBachelorSaveEs').on('click',function(){
    SaveBachelorEs2555();
  });

  $('#btBachelorCancelEs').on('click',function(){
    CancelEditBachelorEs2555();
  });

  function EditBachelorEs2555() {
      document.getElementById("textTopicBachelorEs").disabled = false;
      document.getElementById("textDetailBachelorEs").disabled = false;
      $('#btBachelorSaveEs').show();
      $('#btBachelorCancelEs').show();

    }

  function SaveBachelorEs2555(){

      var data = {
       textTopicBachelorEs:$('#textTopicBachelorEs').val(),
       textDetailBachelorEs:$('#textDetailBachelorEs').val()
     
    };

    firebase.database().ref('website').child('course').child('bachelor').child('year2555').update(data);

    $('#btBachelorSaveEs').hide();
    $('#btBachelorCancelEs').hide();
    document.getElementById("textTopicBachelorEs").disabled = true;
    document.getElementById("textDetailBachelorEs").disabled = true;

    }

  function CancelEditBachelorEs2555() {
        document.getElementById("textTopicBachelorEs").disabled = true;
        document.getElementById("textDetailBachelorEs").disabled = true;
        $('#btBachelorSaveEs').hide();
        $('#btBachelorCancelEs').hide();
        document.getElementById("textTopicBachelorEs").disabled = true;
        document.getElementById("textDetailBachelorEs").disabled = true;
  }

/*======================= End Bachelor Edit Text ======================*/


/*======================= Bachelor Edit Image ======================*/

 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('year2555').child('imageBachelorEs');
 dbImage.on('value',snap => {
   $('#imgBachelorEs').attr("src",snap.val());
 });

 $('#btUploadImageBachelorEs').hide();

 $('#fileUploadImageBachelorEs').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageBachelorEs').show();
 });

 $('#btUploadImageBachelorEs').on('click',function(event){
   uploadImagebachelorEs2555();
 });

 function uploadImagebachelorEs2555(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
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
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('imageBachelorEs');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('year2555').update(postImage);
       $('#fileUploadImageBachelorEs').val("");
       $('#btBachelorEs').hide();
     });
 }

/*======================= End Bachelor Edit Image ======================*/


/*------------------------ End Bachelor Es (2555) -----------------------------------*/





/*------------------------ Bachelor Ic (2555) -----------------------------------*/


/*======================= Bachelor Edit Text ======================*/

 document.getElementById("textTopicBachelorIc").disabled = true;
  document.getElementById("textDetailBachelorIc").disabled = true;
  $('#btBachelorSaveIc').hide();
  $('#btBachelorCancelIc').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('year2555').child('textTopicBachelorIc');
  db.on('value',snap => {
    $('#textTopicBachelorIc').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('year2555').child('textDetailBachelorIc');
  db.on('value',snap => {
    $('#textDetailBachelorIc').val(snap.val());
  });

  $('#btBachelorEditIc').on('click',function(){
    EditBachelorIc2555();
  });

  $('#btBachelorSaveIc').on('click',function(){
    SaveBachelorIc2555();
  });

    $('#btBachelorCancelIc').on('click',function(){
    CancelBachelorIc2555();
  });

  function EditBachelorIc2555() {

      document.getElementById("textTopicBachelorIc").disabled = false;
      document.getElementById("textDetailBachelorIc").disabled = false;
      $('#btBachelorSaveIc').show();
      $('#btBachelorCancelIc').show();
  }

  function SaveBachelorIc2555(){

    var data = {
     textTopicBachelorIc:$('#textTopicBachelorIc').val(),
     textDetailBachelorIc:$('#textDetailBachelorIc').val()
  };

  firebase.database().ref('website').child('course').child('bachelor').child('year2555').update(data);

  $('#btBachelorSaveIc').hide();
  $('#btBachelorCancelIc').hide();
  document.getElementById("textTopicBachelorIc").disabled = true;
  document.getElementById("textDetailBachelorIc").disabled = true;

  }

  function CancelBachelorIc2555() {

        document.getElementById("textTopicBachelorIc").disabled = true;
        document.getElementById("textDetailBachelorIc").disabled = true;
        $('#btBachelorSaveIc').hide();
        $('#btBachelorCancelIc').hide();
        document.getElementById("textTopicBachelorIc").disabled = true;
        document.getElementById("textDetailBachelorIc").disabled = true;
  }

  /*======================= End Bachelor Edit Text ======================*/


  /*======================= Bachelor Edit Image  ======================*/


  var dbImage = dbRef.ref("website").child('course').child('bachelor').child('year2555').child('imageBachelorIc');
  dbImage.on('value',snap => {
   $('#imgBachelorIc').attr("src",snap.val());
 });

  $('#btBachelorSaveIc').hide();
  $('#btBachelorCancelIc').hide();
  $('#btUploadImageBachelorIc').hide();

 $('#fileUploadImageBachelorIc').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageBachelorIc').show();
 });

 $('#btUploadImageBachelorIc').on('click',function(event){
   uploadImageBachelorIc();
 });


 function uploadImageBachelorIc(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelorIc:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('imageBachelorIc');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('year2555').update(postImage);
       $('#fileUploadImageBachelorIc').val("");
       $('#btUploadImageBachelorIc').hide();
     });
 }
 
   /*======================= End Bachelor Edit Image  ======================*/

   /*------------------------ End Bachelor Ic (2555) -----------------------------------*/




/*------------------------ Bachelor Mis (2555) -----------------------------------*/


/*======================= Bachelor Edit Text ======================*/

 document.getElementById("textTopicBachelorMis").disabled = true;
  document.getElementById("textDetailBachelorMis").disabled = true;
  $('#btBachelorSaveMis').hide();
  $('#btBachelorCancelMis').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('year2555').child('textTopicBachelorMis');
  db.on('value',snap => {
    $('#textTopicBachelorMis').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('year2555').child('textDetailBachelorMis');
  db.on('value',snap => {
    $('#textDetailBachelorMis').val(snap.val());
  });

  $('#btBachelorEditMis').on('click',function(){
    EditBachelorMis2555();
  });

  $('#btBachelorSaveMis').on('click',function(){
    SaveBachelorMis2555();
  });

    $('#btBachelorCancelMis').on('click',function(){
    CancelBachelorMis2555();
  });

  function EditBachelorMis2555() {

      document.getElementById("textTopicBachelorMis").disabled = false;
      document.getElementById("textDetailBachelorMis").disabled = false;
      $('#btBachelorSaveMis').show();
      $('#btBachelorCancelMis').show();
  }

  function SaveBachelorMis2555(){

    var data = {
     textTopicBachelorMis:$('#textTopicBachelorMis').val(),
     textDetailBachelorMis:$('#textDetailBachelorMis').val()
  };

  firebase.database().ref('website').child('course').child('bachelor').child('year2555').update(data);

  $('#btBachelorSaveMis').hide();
  $('#btBachelorCancelMis').hide();
  document.getElementById("textTopicBachelorMis").disabled = true;
  document.getElementById("textDetailBachelorMis").disabled = true;

  }

  function CancelBachelorMis2555() {

        document.getElementById("textTopicBachelorMis").disabled = true;
        document.getElementById("textDetailBachelorMis").disabled = true;
        $('#btBachelorSaveMis').hide();
        $('#btBachelorCancelMis').hide();
        document.getElementById("textTopicBachelorMis").disabled = true;
        document.getElementById("textDetailBachelorMis").disabled = true;
  }

  /*======================= End Bachelor Edit Text ======================*/



   /*======================= Bachelor Edit Image  ======================*/



 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('year2555').child('imageBachelorMis');
  dbImage.on('value',snap => {
   $('#imgBachelorMis').attr("src",snap.val());
 });

  $('#btBachelorSaveMis').hide();
  $('#btBachelorCancelMis').hide();
  $('#btUploadImageBachelorMis').hide();

 $('#fileUploadImageBachelorMis').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageBachelorMis').show();
 });

 $('#btUploadImageBachelorMis').on('click',function(event){
   uploadImagebachelorMis();
 });

 function uploadImagebachelorMis(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
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
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('imageBachelorMis');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('year2555').update(postImage);
       $('#fileUploadImageBachelorMis').val("");
       $('#btUploadImageBachelorMis').hide();
     });
   }

   /*======================= End Bachelor Edit Image  ======================*/

/*------------------------ End Bachelor Mis (2555) -----------------------------------*/




/*------------------------ Bachelor Is (2555) -----------------------------------*/


 /*======================= Bachelor Edit Text IS ======================*/


 document.getElementById("textTopicBachelorIs").disabled = true;
  document.getElementById("textDetailBachelorIs").disabled = true;
  $('#btBachelorSaveIs').hide();
  $('#btBachelorCancelIs').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('year2555').child('textTopicBachelorIs');
  db.on('value',snap => {
    $('#textTopicBachelorIs').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('year2555').child('textDetailBachelorIs');
  db.on('value',snap => {
    $('#textDetailBachelorIs').val(snap.val());
  });

  $('#btBachelorEditIs').on('click',function(){
    EditBachelorIs2555();
  });

  $('#btBachelorSaveIs').on('click',function(){
    SaveBachelorIs2555();
  });

    $('#btBachelorCancelIs').on('click',function(){
    CancelBachelorIs2555();
  });

  function EditBachelorIs2555() {

      document.getElementById("textTopicBachelorIs").disabled = false;
      document.getElementById("textDetailBachelorIs").disabled = false;
      $('#btBachelorSaveIs').show();
      $('#btBachelorCancelIs').show();
  }

  function SaveBachelorIs2555(){

    var data = {
     textTopicBachelorMis:$('#textTopicBachelorIs').val(),
     textDetailBachelorMis:$('#textDetailBachelorIs').val()
  };

  firebase.database().ref('website').child('course').child('bachelor').child('year2555').update(data);

  $('#btBachelorSaveIs').hide();
  $('#btBachelorCancelIs').hide();
  document.getElementById("textTopicBachelorIs").disabled = true;
  document.getElementById("textDetailBachelorIs").disabled = true;

  }

  function CancelBachelorIs2555() {

        document.getElementById("textTopicBachelorIs").disabled = true;
        document.getElementById("textDetailBachelorIs").disabled = true;
        $('#btBachelorSaveIs').hide();
        $('#btBachelorCancelIs').hide();
        document.getElementById("textTopicBachelorIs").disabled = true;
        document.getElementById("textDetailBachelorIs").disabled = true;
  }

  /*======================= End Bachelor Edit Text ======================*/


/*======================= Bachelor Edit Image IS ======================*/

 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('year2555').child('imageBachelorIs');
  dbImage.on('value',snap => {
   $('#imgBachelorIs').attr("src",snap.val());
 });

  $('#btBachelorSaveIs').hide();
  $('#btBachelorCancelIs').hide();

  $('#btUploadImageBachelorIs').hide();

 $('#fileUploadImageBachelorIs').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageBachelorIs').show();
 });

 $('#btUploadImageBachelorIs').on('click',function(event){
   uploadImagebachelorIs();
 });

 function uploadImagebachelorIs(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         imageBachelorIs:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('imageBachelorIs');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('year2555').update(postImage);
       $('#fileUploadImageBachelorIs').val("");
       $('#btUploadImageBachelorIs').hide();
     });
   }

   /*======================= End Bachelor Edit Image  IS ======================*/


  /*------------------------ End Bachelor IS (2555) -----------------------------------*/



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
