$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var auth = null;
 var selectedFile;



 /*------------------------ doctorate OpenCourses (2558) -----------------------------------*/

 $('#btAddOpenCourses').on('click',function(e){
      e.preventDefault();
        $('#addOpenCourses').modal('show');
    });

 /*======================= END doctorate OpenCourses  ======================*/

 /*------------------------ doctorate Topic1 (2558) -----------------------------------*/

 $('#btModifyTopic1').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyTopic1').modal('show');
    });

 /*======================= END doctorate Topic1  ======================*/

  /*------------------------ doctorate Topic2 (2558) -----------------------------------*/

 $('#addOpenModifyTopic2').on('click',function(e){
      e.preventDefault();
        $('#btModifyTopic2Detail1').modal('show');
    });

 /*======================= END doctorate Topic2  ======================*/


 /*------------------------ doctorate textDetailtitle (2558) -----------------------------------*/

/*======================= doctorate Edit Text ======================*/
document.getElementById("textDetailtitle").disabled = true;
  $('#btTitleSave').hide();
  $('#btTitleCancel').hide();


  var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('TitleDegree').child('Topic');
  db.on('value',snap => {
    $('#textDetailtitle').val(snap.val());
  });


  $('#btTitleEdit').on('click',function(){
    EditDoctorate2558();
  });

  $('#btTitleSave').on('click',function(){
    SaveDoctorate2558();
  });

  $('#btTitleCancel').on('click',function(){
    CancelDoctorate2558();
  });

  function EditDoctorate2558() {
      document.getElementById("textDetailtitle").disabled = false;
      $('#btTitleSave').show();
      $('#btTitleCancel').show();

    }

  function SaveDoctorate2558(){

      var data = {
       textTopicBachelorEs:$('#textDetailtitle').val(),
           
    };

    firebase.database().ref('website').child('course').child('doctorate').child('year2558').child('TitleDegree').child('Topic').update(data);

    $('#btTitleSave').hide();
    $('#btTitleCancel').hide();
    document.getElementById("textDetailtitle").disabled = true;

    }

  function CancelDoctorate2558() {
        document.getElementById("textDetailtitle").disabled = true;
        $('#btTitleSave').hide();
        $('#btTitleCancel').hide();
        document.getElementById("textDetailtitle").disabled = true;
  }


 /*======================= END Master textDetailtitle (2558)  ======================*/


 /*------------------------  Topic1 (2558) -----------------------------------*/

/*======================= Topic1 Edit Text ======================*/

  
  document.getElementById("textCouresTileThai1").disabled = true;
  document.getElementById("textCouresTileEnglish1").disabled = true;
  document.getElementById("textDegreeTileFullNameThai").disabled = true;
  document.getElementById("textDegreeTileFullNameEnglish").disabled = true;
  document.getElementById("textDegreeTileInitialsThai").disabled = true;
  document.getElementById("textDegreeTileInitialsEnglish").disabled = true;
  
  $('#btSaveTopic1').hide();
  $('#btCancelTopic1').hide();

 

   var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('Coursetitle').child('thai');
  db.on('value',snap => {
    $('#textCouresTileThai1').val(snap.val());
  });

   var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('Coursetitle').child('English');
  db.on('value',snap => {
    $('#textCouresTileEnglish1').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('DegreeTitle').child('FullName').child('thai');
  db.on('value',snap => {
    $('#textDegreeTileFullNameThai').val(snap.val());
  });

   var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('DegreeTitle').child('FullName').child('English');
  db.on('value',snap => {
    $('#textDegreeTileFullNameEnglish').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('DegreeTitle').child('Intials').child('thai');
  db.on('value',snap => {
    $('#textDegreeTileInitialsThai').val(snap.val());
  });

   var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('DegreeTitle').child('Intials').child('English');
  db.on('value',snap => {
    $('#textDegreeTileInitialsEnglish').val(snap.val());
  });

 

  $('#btEditTopic1').on('click',function(){
    EditMaster2558();
  });

  $('#btSaveTopic1').on('click',function(){
    SaveMaster2558();
  });

  $('#btCancelTopic1').on('click',function(){
    CancelEditMaster2558();
  });

  function EditMaster2558() {
     
      document.getElementById("textCouresTileThai1").disabled = false;
      document.getElementById("textCouresTileEnglish1").disabled = false;
      document.getElementById("textDegreeTileFullNameThai").disabled = false;
      document.getElementById("textDegreeTileFullNameEnglish").disabled = false;
      document.getElementById("textDegreeTileInitialsThai").disabled = false;
      document.getElementById("textDegreeTileInitialsEnglish").disabled = false;
      $('#btSaveTopic1').show();
      $('#btCancelTopic1').show();

    }

  function SaveMaster2558(){

    

    var data2 = {  
       textCouresTileThai1:$('#textCouresTileThai1').val(), 
    };

    var data3 = {         
       textCouresTileEnglish1:$('#textCouresTileEnglish1').val(),       
    };

    var data4 = {                
       textDegreeTileFullNameThai:$('#textDegreeTileFullNameThai').val(),  
    };

    var data5 = {         
       textDegreeTileFullNameEnglish:$('#textDegreeTileFullNameEnglish').val(),
    };

    var data6 = {         
       textDegreeTileInitialsThai:$('#textDegreeTileInitialsThai').val(),  
    };

    var data7 = {         
       textDegreeTileInitialsEnglish:$('#textDegreeTileInitialsEnglish').val()  
    };

    
    firebase.database().ref('website').child('course').child('doctorate').child('year2558').child('Coursetitle').child('thai').update(data2);
    firebase.database().ref('website').child('course').child('doctorate').child('year2558').child('Coursetitle').child('English').update(data3);
    firebase.database().ref('website').child('course').child('doctorate').child('year2558').child('DegreeTitle').child('FullName').child('thai').update(data4);
   	firebase.database().ref('website').child('course').child('doctorate').child('year2558').child('DegreeTitle').child('FullName').child('English').update(data5);
   	firebase.database().ref('website').child('course').child('doctorate').child('year2558').child('DegreeTitle').child('Intials').child('thai').update(data6);
   	firebase.database().ref('website').child('course').child('doctorate').child('year2558').child('DegreeTitle').child('Intials').child('English').update(data7);

    $('#btSaveTopic1').hide();
    $('#btCancelTopic1').hide();
   
    document.getElementById("textCouresTileThai1").disabled = true;
 	  document.getElementById("textCouresTileEnglish1").disabled = true;
  	document.getElementById("textDegreeTileFullNameThai").disabled = true;
  	document.getElementById("textDegreeTileFullNameEnglish").disabled = true;
  	document.getElementById("textDegreeTileInitialsThai").disabled = true;
  	document.getElementById("textDegreeTileInitialsEnglish").disabled = true;

   
    }

  function CancelEditMaster2558() {
      
        $('#btSaveTopic1').hide();
        $('#btCancelTopic1').hide();
    
    document.getElementById("textCouresTileThai1").disabled = true;
 	  document.getElementById("textCouresTileEnglish1").disabled = true;
  	document.getElementById("textDegreeTileFullNameThai").disabled = true;
  	document.getElementById("textDegreeTileFullNameEnglish").disabled = true;
  	document.getElementById("textDegreeTileInitialsThai").disabled = true;
  	document.getElementById("textDegreeTileInitialsEnglish").disabled = true;
  }



/*=======================  Edit Image ======================*/

 var dbImage = dbRef.ref("website").child('course').child('doctorate').child('year2558').child('image1');
 dbImage.on('value',snap => {
   $('#imgTopic1').attr("src",snap.val());
 });

 $('#btUploadImageTopic1').hide();

 $('#fileUploadImageTopic1').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageTopic1').show();
 });

 $('#btUploadImageTopic1').on('click',function(event){
   uploadImageTopic1();
 });

 function uploadImageTopic1(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/Master/Master2558/' + filename);
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
       var deleteImageProfile = firebase.database().ref('website').child("course").child('doctorate').child('year2558').child('image1');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('doctorate').child('year2558').update(postImage);
       $('#fileUploadImageTopic1').val("");
       $('#btUploadImageTopic1').hide();
     });
 }

/*======================= End  Edit Image ======================*/

/*======================= End Topic (2558) ======================*/


/*------------------------  Topic2 (2558) -----------------------------------*/

/*======================= Topic2 Edit Text ======================*/


document.getElementById("textMasterDegreeDetail1").disabled = true;
document.getElementById("textMasterDegreeDetail2").disabled = true;
document.getElementById("textMasterDegreePlan1Topic").disabled = true;
document.getElementById("textMasterDegreePlan1Detail").disabled = true;
document.getElementById("textMasterDegreePlan2Topic").disabled = true;
document.getElementById("textMasterDegreePlan2Detail").disabled = true;
document.getElementById("textMasterDegreePlan2Detail2").disabled = true;
document.getElementById("textMasterDegreePlan2Detail3").disabled = true;

$('#btSaveTopic2').hide();
$('#btCancelTopic2').hide();

   var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('MasterDegree').child('Plan1').child('Topic');
  db.on('value',snap => {
    $('#textMasterDegreeDetail1').val(snap.val());
  });

   var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('MasterDegree').child('Plan1').child('Detail1');
  db.on('value',snap => {
    $('#textMasterDegreeDetail2').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('MasterDegree').child('Plan1').child('Detail2');
  db.on('value',snap => {
    $('#textMasterDegreePlan1Topic').val(snap.val());
  });

   var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('MasterDegree').child('Plan1').child('Detail3');
  db.on('value',snap => {
    $('#textMasterDegreePlan1Detail').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('MasterDegree').child('Plan2').child('Topic');
  db.on('value',snap => {
    $('#textMasterDegreePlan2Topic').val(snap.val());
  });

   var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('MasterDegree').child('Plan2').child('Detail1');
  db.on('value',snap => {
    $('#textMasterDegreePlan2Detail').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('MasterDegree').child('Plan2').child('Detail2');
  db.on('value',snap => {
    $('#textMasterDegreePlan2Detail2').val(snap.val());
  });

  var db = dbRef.ref('website/course').child('doctorate').child('year2558').child('MasterDegree').child('Plan2').child('Detail3');
  db.on('value',snap => {
    $('#textMasterDegreePlan2Detail3').val(snap.val());
  });

  $('#btEditTopic2').on('click',function(){
    EditMasterDegree();
  });

  $('#btSaveTopic2').on('click',function(){
    SaveMasterDegree();
  });

  $('#btCancelTopic2').on('click',function(){
    CancelMasterDegree();
  });

  function EditMasterDegree() {
      document.getElementById("textMasterDegreeTopic").disabled = false;
      document.getElementById("textMasterDegreeDetail1").disabled = false;
      document.getElementById("textMasterDegreeDetail2").disabled = false;
      document.getElementById("textMasterDegreePlan1Topic").disabled = false;
      document.getElementById("textMasterDegreePlan1Detail").disabled = false;
      document.getElementById("textMasterDegreePlan2Topic").disabled = false;
      document.getElementById("textMasterDegreePlan2Detail").disabled = false; 
      $('#btSaveTopic2').show();
      $('#btCancelTopic2').show();

    }

  function SaveMasterDegree(){

      var data1 = {
       Topic:$('#textMasterDegreeTopic').val(),
  
    };

    var data2 = {
       Detail1:$('#textMasterDegreeDetail1').val(),
  
    };

    var data3 = {
       Detail2:$('#textMasterDegreeDetail2').val(),
  
    };

    var data4 = {
       Topic:$('#textMasterDegreePlan1Topic').val(),
  
    };

    var data5 = {
       Detail:$('#textMasterDegreePlan1Detail').val(),
  
    };

    var data6 = {
       Topic:$('#textMasterDegreePlan2Topic').val(),
  
    };

    var data7 = {
       Detail:$('#textMasterDegreePlan2Detail').val(),
  
    };

    firebase.database().ref('website').child('course').child('master').child('year2558').child('DegreeTitle').child('MasterDegree ').update(data1);
    firebase.database().ref('website').child('course').child('master').child('year2558').child('DegreeTitle').child('MasterDegree ').update(data2);
    firebase.database().ref('website').child('course').child('master').child('year2558').child('DegreeTitle').child('MasterDegree ').update(data3);
    firebase.database().ref('website').child('course').child('master').child('year2558').child('DegreeTitle').child('MasterDegree ').child('Plan1').update(data4);
    firebase.database().ref('website').child('course').child('master').child('year2558').child('DegreeTitle').child('MasterDegree ').child('Plan1').update(data5);
    firebase.database().ref('website').child('course').child('master').child('year2558').child('DegreeTitle').child('MasterDegree ').child('Plan2').update(data6);
    firebase.database().ref('website').child('course').child('master').child('year2558').child('DegreeTitle').child('MasterDegree ').child('Plan2').update(data7);

    $('#btSaveTopic2').hide();
    $('#btCancelTopic2').hide();
    document.getElementById("textMasterDegreeTopic").disabled = true;
    document.getElementById("textMasterDegreeDetail1").disabled = true;
    document.getElementById("textMasterDegreeDetail2").disabled = true;
    document.getElementById("textMasterDegreePlan1Topic").disabled = true;
    document.getElementById("textMasterDegreePlan1Detail").disabled = true;
    document.getElementById("textMasterDegreePlan2Topic").disabled = true;
    document.getElementById("textMasterDegreePlan2Detail").disabled = true

    }

    function CancelMasterDegree() {
        
        $('#btSaveTopic2').hide();
        $('#btCancelTopic2').hide();
    document.getElementById("textMasterDegreeTopic").disabled = true;
    document.getElementById("textMasterDegreeDetail1").disabled = true;
    document.getElementById("textMasterDegreeDetail2").disabled = true;
    document.getElementById("textMasterDegreePlan1Topic").disabled = true;
    document.getElementById("textMasterDegreePlan1Detail").disabled = true;
    document.getElementById("textMasterDegreePlan2Topic").disabled = true;
    document.getElementById("textMasterDegreePlan2Detail").disabled = true
  }


 
/*=======================  Edit Image ======================*/

 var dbImage = dbRef.ref("website").child('course').child('doctorate').child('year2558').child('image2');
 dbImage.on('value',snap => {
   $('#imgTopic2').attr("src",snap.val());
 });

 $('#btUploadImageTopic2').hide();

 $('#fileUploadImageTopic2').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageTopic2').show();
 });

 $('#btUploadImageTopic2').on('click',function(event){
   uploadImageTopic2();
 });

 function uploadImageTopic2(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/CourseImage/Master/Master2558/' + filename);
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
       var deleteImageProfile = firebase.database().ref('website').child("course").child('master').child('year2553').child('image2');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('website').child("course").child('master').child('year2558').update(postImage);
       $('#fileUploadImageTopic2').val("");
       $('#btUploadImageTopic2').hide();
     });
 }

/*======================= End  Edit Image ======================*/

/*======================= End Topic 2 (2558) ======================*/


})