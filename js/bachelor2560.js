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
    window.location.href = "bachelor2560.php";
  }else if(indexSelect==1){
    window.location.href = "course.php";
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




 /*------------------------ Bachelor Studyplan (2560) -----------------------------------*/

 $('#btAddStudyplan').on('click',function(e){
      e.preventDefault();
        $('#addStudyplan').modal('show');
    });

 /*======================= END Bachelor Studyplan  ======================*/



 /*------------------------ Bachelor OpenCourses (2560) -----------------------------------*/

 $('#btAddOpenCourses').on('click',function(e){
      e.preventDefault();
        $('#addOpenCourses').modal('show');
    });

 /*======================= END Bachelor OpenCourses  ======================*/


 /*------------------------ Bachelor ModifyEs (2560) -----------------------------------*/

 $('#btBachelorModifyEs').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyEs').modal('show');
    });

 /*======================= END Bachelor ModifyEs  ======================*/


 /*------------------------ Bachelor ModifyBida (2560) -----------------------------------*/

 $('#btBachelorModifyBida').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyBida').modal('show');
    });

 /*======================= END Bachelor ModifyIc  ======================*/


 /*------------------------ Bachelor ModifyMis (2560) -----------------------------------*/

 $('#btBachelorModifyMis').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyMis').modal('show');
    });

 /*======================= END Bachelor ModifyMis  ======================*/


  /*------------------------ Bachelor ModifyIs (2560) -----------------------------------*/

 $('#btBachelorModifyIs').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyIs').modal('show');
    });

 /*======================= END Bachelor ModifyIs  ======================*/






/*------------------------ Bachelor Es (2560) -----------------------------------*/

/*======================= Bachelor Edit Text ======================*/

  document.getElementById("textTopicBachelorEs").disabled = true;
  document.getElementById("textDetailBachelorEs").disabled = true;
  $('#btBachelorSaveEs').hide();
  $('#btBachelorCancelEs').hide();

  var db = dbRef.ref('website/course').child('bachelor').child('year2560').child('textTopicBachelorEs');
  db.on('value',snap => {
    $('#textTopicBachelorEs').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('year2560').child('textDetailBachelorEs');
  db.on('value',snap => {
    $('#textDetailBachelorEs').val(snap.val());
  });

  $('#btBachelorEditEs').on('click',function(){
    EditBachelorEs2560();
  });

  $('#btBachelorSaveEs').on('click',function(){
    SaveBachelorEs2560();
  });

  $('#btBachelorCancelEs').on('click',function(){
    CancelEditBachelorEs2560();
  });

  function EditBachelorEs2560() {
      document.getElementById("textTopicBachelorEs").disabled = false;
      document.getElementById("textDetailBachelorEs").disabled = false;
      $('#btBachelorSaveEs').show();
      $('#btBachelorCancelEs').show();

    }

  function SaveBachelorEs2560(){

      var data = {
       textTopicBachelorEs:$('#textTopicBachelorEs').val(),
       textDetailBachelorEs:$('#textDetailBachelorEs').val()
     
    };

    firebase.database().ref('website').child('course').child('bachelor').child('year2560').update(data);

    $('#btBachelorSaveEs').hide();
    $('#btBachelorCancelEs').hide();
    document.getElementById("textTopicBachelorEs").disabled = true;
    document.getElementById("textDetailBachelorEs").disabled = true;

    }

  function CancelEditBachelorEs2560() {
        document.getElementById("textTopicBachelorEs").disabled = true;
        document.getElementById("textDetailBachelorEs").disabled = true;
        $('#btBachelorSaveEs').hide();
        $('#btBachelorCancelEs').hide();
        document.getElementById("textTopicBachelorEs").disabled = true;
        document.getElementById("textDetailBachelorEs").disabled = true;
  }

/*======================= End Bachelor Edit Text ======================*/


/*======================= Bachelor Edit Image ======================*/

 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('year2560').child('imageBachelorEs');
 dbImage.on('value',snap => {
   $('#imgBachelorEs').attr("src",snap.val());
 });

 $('#btUploadImageBachelorEs').hide();

 $('#fileUploadImageBachelorEs').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageBachelorEs').show();
 });

 $('#btUploadImageBachelorEs').on('click',function(event){
   uploadImagebachelorEs2560();
 });

 function uploadImagebachelorEs2560(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/BachelorImage2560/' + filename);
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
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('year2560').child('imageBachelorEs');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('year2560').update(postImage);
       $('#fileUploadImageBachelorEs').val("");
       $('#btBachelorEs').hide();
     });
 }

/*======================= End Bachelor Edit Image ======================*/


/*------------------------ End Bachelor Es (2560) -----------------------------------*/





/*------------------------ Bachelor Bida (2560) -----------------------------------*/


/*======================= Bachelor Edit Text ======================*/

 document.getElementById("textTopicBachelorBida").disabled = true;
  document.getElementById("textDetailBachelorBida").disabled = true;
  $('#btBachelorSaveBida').hide();
  $('#btBachelorCancelBida').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('year2560').child('textTopicBachelorBida');
  db.on('value',snap => {
    $('#textTopicBachelorBida').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('year2560').child('textDetailBachelorBida');
  db.on('value',snap => {
    $('#textDetailBachelorBida').val(snap.val());
  });

  $('#btBachelorEditBida').on('click',function(){
    EditBachelorBida2560();
  });

  $('#btBachelorSaveBida').on('click',function(){
    SaveBachelorBida2560();
  });

    $('#btBachelorCancelBida').on('click',function(){
    CancelBachelorBida2560();
  });

  function EditBachelorBida2560() {

      document.getElementById("textTopicBachelorBida").disabled = false;
      document.getElementById("textDetailBachelorBida").disabled = false;
      $('#btBachelorSaveBida').show();
      $('#btBachelorCancelBida').show();
  }

  function SaveBachelorBida2560(){

    var data = {
     textTopicBachelorIc:$('#textTopicBachelorBida').val(),
     textDetailBachelorIc:$('#textDetailBachelorBida').val()
  };

  firebase.database().ref('website').child('course').child('bachelor').child('year2560').update(data);

  $('#btBachelorSaveBida').hide();
  $('#btBachelorCancelBida').hide();
  document.getElementById("textTopicBachelorBida").disabled = true;
  document.getElementById("textDetailBachelorBida").disabled = true;

  }

  function CancelBachelorBida2560() {

        document.getElementById("textTopicBachelorBida").disabled = true;
        document.getElementById("textDetailBachelorBida").disabled = true;
        $('#btBachelorSaveBida').hide();
        $('#btBachelorCancelBida').hide();
        document.getElementById("textTopicBachelorBida").disabled = true;
        document.getElementById("textDetailBachelorBida").disabled = true;
  }

  /*======================= End Bachelor Edit Text ======================*/


  /*======================= Bachelor Edit Image  ======================*/


  var dbImage = dbRef.ref("website").child('course').child('bachelor').child('year2560').child('imageBachelorBida');
  dbImage.on('value',snap => {
   $('#imgBachelorBida').attr("src",snap.val());
 });

  $('#btBachelorSaveBida').hide();
  $('#btBachelorCancelBida').hide();
  $('#btUploadImageBachelorBida').hide();

 $('#fileUploadImageBachelorBida').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageBachelorBida').show();
 });

 $('#btUploadImageBachelorBida').on('click',function(event){
   uploadImageBachelorBida();
 });


 function uploadImageBachelorBida(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/BachelorImage2560/' + filename);
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
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('year2560').child('imageBachelorBida');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('bachelor').child('year2560').update(postImage);
       $('#fileUploadImageBachelorBida').val("");
       $('#btUploadImageBachelorBida').hide();
     });
 }
 
   /*======================= End Bachelor Edit Image  ======================*/

   /*------------------------ End Bachelor Ic (2560) -----------------------------------*/





/*------------------------ Bachelor Is (2560) -----------------------------------*/


 /*======================= Bachelor Edit Text IS ======================*/


 document.getElementById("textTopicBachelorIs").disabled = true;
  document.getElementById("textDetailBachelorIs").disabled = true;
  $('#btBachelorSaveIs').hide();
  $('#btBachelorCancelIs').hide();


  var db = dbRef.ref('website/course').child('bachelor').child('year2560').child('textTopicBachelorIs');
  db.on('value',snap => {
    $('#textTopicBachelorIs').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('bachelor').child('year2560').child('textDetailBachelorIs');
  db.on('value',snap => {
    $('#textDetailBachelorIs').val(snap.val());
  });

  $('#btBachelorEditIs').on('click',function(){
    EditBachelorIs2560();
  });

  $('#btBachelorSaveIs').on('click',function(){
    SaveBachelorIs2560();
  });

    $('#btBachelorCancelIs').on('click',function(){
    CancelBachelorIs2560();
  });

  function EditBachelorIs2560() {

      document.getElementById("textTopicBachelorIs").disabled = false;
      document.getElementById("textDetailBachelorIs").disabled = false;
      $('#btBachelorSaveIs').show();
      $('#btBachelorCancelIs').show();
  }

  function SaveBachelorIs2560(){

    var data = {
     textTopicBachelorMis:$('#textTopicBachelorIs').val(),
     textDetailBachelorMis:$('#textDetailBachelorIs').val()
  };

  firebase.database().ref('website').child('course').child('bachelor').child('year2560').update(data);

  $('#btBachelorSaveIs').hide();
  $('#btBachelorCancelIs').hide();
  document.getElementById("textTopicBachelorIs").disabled = true;
  document.getElementById("textDetailBachelorIs").disabled = true;

  }

  function CancelBachelorIs2560() {

        document.getElementById("textTopicBachelorIs").disabled = true;
        document.getElementById("textDetailBachelorIs").disabled = true;
        $('#btBachelorSaveIs').hide();
        $('#btBachelorCancelIs').hide();
        document.getElementById("textTopicBachelorIs").disabled = true;
        document.getElementById("textDetailBachelorIs").disabled = true;
  }

  /*======================= End Bachelor Edit Text ======================*/


/*======================= Bachelor Edit Image IS ======================*/

 var dbImage = dbRef.ref("website").child('course').child('bachelor').child('year2560').child('imageBachelorIs');
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
       var deleteImageProfile = firebase.database().ref('website').child("course").child('bachelor').child('year2560').child('imageBachelorIs');
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
