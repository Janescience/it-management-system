$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var topicRef = dbRef.ref('website')
 var auth = null;
 var selectedFile;
 var indexSelect;


/*------------------------ select page -----------------------------------*/

 $('#selectHeaderSlide').on('change',function(){
  indexSelect = document.getElementById("selectHeaderSlide").selectedIndex;
  if(indexSelect==0){
    window.location.href = "master2553.php";
  }else if(indexSelect==1){
    window.location.href = "master2558.php";
  }else if(indexSelect==2){
    window.location.href = "course.php";
  }else if(indexSelect==3){
    window.location.href = "bachelor2560.php";
  }else if(indexSelect==4){
    window.location.href = "bachelorIc2560.php";
  }else if(indexSelect==5){
    window.location.href = "doctorate2553.php";
  }else if(indexSelect==6){
    window.location.href = "doctorate2558.php";
  }else if(indexSelect==7){
    window.location.href = "doctorate.php";
  }
});

 /*------------------------ Master OpenCourses (2553) -----------------------------------*/

 $('#btAddOpenCourses').on('click',function(e){
      e.preventDefault();
        $('#addOpenCourses').modal('show');
    });

    $('#fileUploadOpenCourses').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadOpenCourses').on('click',function(){
      uploadOpenCourses();
    });

    function uploadOpenCourses(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/master2553/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicOpenCourses').val()
          };

          firebase.database().ref('website').child("course").child('master').child('year2553').child('filePDF').child('openCourses').push().set(postPDF);
          $('#fileUploadOpenCourses').val("");
          $('#addOpenCourses').modal('hide');
          $('#addOpenCourses3').modal('show');

        });

      }else {
        $('#addOpenCourses').modal('hide');
        $('#addOpenCourses2').modal('show');
      }


    }

 /*======================= END Master OpenCourses  ======================*/



 /*------------------------  Modify Digital (2553) -----------------------------------*/

 $('#btModifyDigital').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyDigital').modal('show');
    });

    $('#fileUploadModifyDigital').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadModifyDigital').on('click',function(){
      uploaddigital();
    });

    function uploaddigital(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/master2553/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicDigital').val()
          };

          firebase.database().ref('website').child("course").child('master').child('year2553').child('filePDF').child('digital').push().set(postPDF);
          $('#fileUploadModifyDigital').val("");
          $('#addOpenModifyDigital').modal('hide');
          $('#addOpenModifyDigital3').modal('show');

        });

      }else {
        $('#addOpenModifyDigital').modal('hide');
        $('#addOpenModifyDigital2').modal('show');
      }


    }



 /*======================= END Modify Digital  ======================*/


  /*------------------------  Modify Enterprise (2553) -----------------------------------*/

 $('#btModifyEnterprise').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyEnterprise').modal('show');
    });

    $('#fileUploadModifyEnterprise').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadModifyEnterprise').on('click',function(){
      uploadEnterprise();
    });

    function uploadEnterprise(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/master2553/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicEnterprise').val()
          };

          firebase.database().ref('website').child("course").child('master').child('year2553').child('filePDF').child('enterprise').push().set(postPDF);
          $('#fileUploadModifyEnterprise').val("");
          $('#addOpenModifyEnterprise').modal('hide');
          $('#addOpenModifyEnterprise3').modal('show');

        });

      }else {
        $('#addOpenModifyEnterprise').modal('hide');
        $('#addOpenModifyEnterprise2').modal('show');
      }


    }

 /*======================= END Enterprise Digital  ======================*/


  /*------------------------  Modify Knowledge (2553) -----------------------------------*/

 $('#btModifyKnowledge').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyKnowledge').modal('show');
    });

    $('#fileUploadModifyKnowledge').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadModifyKnowledge').on('click',function(){
      uploadKnowledge();
    });

    function uploadKnowledge(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/master2553/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicKnowledge').val()
          };

          firebase.database().ref('website').child("course").child('master').child('year2553').child('filePDF').child('knowledge').push().set(postPDF);
          $('#fileUploadModifyKnowledge').val("");
          $('#addOpenModifyKnowledge').modal('hide');
          $('#addOpenModifyKnowledge3').modal('show');

        });

      }else {
        $('#addOpenModifyKnowledge').modal('hide');
        $('#addOpenModifyKnowledge2').modal('show');
      }


    }

 /*======================= END Knowledge ======================*/




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


$('#headSuggestion').hide();
$('#tableSuggestion').hide();
$('#headEducation').hide();
$('#tableEducation').hide();
$('#headCourse').hide();
$('#tableCourse').hide();


/*------------------------  Dowload Suggestion (2560) -----------------------------------*/


$('#Suggestion').on('click',function(){

  $('#iconEducation').attr("class","fa fa-chevron-right");
  $('#iconSuggestion').attr("class","fa fa-check text-info");
  $('#iconCourse').attr("class","fa fa-chevron-right");
  $('#iconLearning').attr("class","fa fa-chevron-right");

  $('#headSuggestion').show();
  $('#tableSuggestion').show();
  $('#headEducation').hide();
  $('#tableEducation').hide();
  $('#headCourse').hide();
  $('#tableCourse').hide();
  $('#headLearning').hide();
  $('#tableLearning').hide();

});



var rootRefExpert = topicRef.child("course").child('master').child('year2553').child('filePDF').child('suggestion');

rootRefExpert.on("child_added",snap => {
  var snapkey = snap.key;
  var detail = snap.child('topic').val();

  $('#Suggestion_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                            "<label for='"+'md_checkbox'+"'></label></td><td class='"+'txtdetail'+"'>" + detail + "</td>" +
                            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                            " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
});

$('#Suggestion_work').on('click','.btn-delete-expert',function(){
  var id = $(this).closest('tr').attr("id");
  rootRefExpert.child(id).remove().then(function(){
      $('#deleteProfileModal').modal('show');
  });
    $(this).closest('tr').remove();
});

$('#Suggestion_work').on('click','.btn-edit-expert',function(){
  var id = $(this).closest('tr').attr("id");
  var detail = $(this).closest('tr').find('.txtdetail').text();
  $('#detailExpert').val(detail);
  $('#editExpertModal').modal('show');
});


$('#btOpenModalSuggestion').on('click',function(e){
     e.preventDefault();
       $('#addSuggestion').modal('show');
   });

   $('#btUploadSuggestion').hide();

   $('#fileUploadSuggestion').on('change',function(event){
     selectedFile = event.target.files[0];

     $('#btUploadSuggestion').show();
   });

   $('#btUploadSuggestion').on('click',function(){
     uploadSuggestion();
   });

   function uploadSuggestion(){
     var filename= selectedFile.name;
     var filesurename = filename.split(".")[1];
     if(filesurename == "PDF" || filesurename == "pdf"){
       var storageRef = firebase.storage().ref('/CoursePDF/master2553/' + filename);
       var uplodadTask = storageRef.put(selectedFile);

       uplodadTask.on('state_changed',function(sanpshot){

       },function(error){

       },function(){
         var downloadURL = uplodadTask.snapshot.downloadURL;
         var updates = {};
         var postPDF = {
           file:downloadURL,
           topic:$('#TopicSuggestion').val()
         };

         firebase.database().ref('website').child("course").child('master').child('year2553').child('filePDF').child('suggestion').push().set(postPDF);
         $('#fileUploadSuggestion').val("");
         $('#addSuggestion').modal('hide');
         $('#addSuggestion3').modal('show')

       });

     }else {
       $('#addSuggestion').modal('hide');
       $('#addSuggestion2').modal('show');
     }


   }

     /*------------------------ End Dowload Suggestion (2560) -----------------------------------*/

/*------------------------  Dowload Education (2560) -----------------------------------*/

$('#Education').on('click',function(){
  $('#iconEducation').attr("class","fa fa-check text-info");
  $('#iconSuggestion').attr("class","fa fa-chevron-right");
  $('#iconCourse').attr("class","fa fa-chevron-right");
  $('#iconLearning').attr("class","fa fa-chevron-right");

  $('#headEducation').show();
  $('#tableEducation').show();
  $('#headSuggestion').hide();
  $('#tableSuggestion').hide();
  $('#headCourse').hide();
  $('#tableCourse').hide();
  $('#headLearning').hide();
  $('#tableLearning').hide();
;
});

var rootRefExpert2 = topicRef.child("course").child('master').child('year2553').child('filePDF').child('education');

rootRefExpert2.on("child_added",snap => {
  var snapkey = snap.key;
  var detail = snap.child('topic').val();

  $('#Education_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                            "<label for='"+'md_checkbox'+"'></label></td><td class='"+'txtdetail'+"'>" + detail + "</td>" +
                            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                            " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
});

$('#Education_work').on('click','.btn-delete-expert',function(){
  var id = $(this).closest('tr').attr("id");
  rootRefExpert2.child(id).remove().then(function(){
      $('#deleteModal2').modal('show');
  });
    $(this).closest('tr').remove();
});

$('#Education_work').on('click','.btn-edit-expert',function(){
  var id = $(this).closest('tr').attr("id");
  var detail = $(this).closest('tr').find('.txtdetail').text();
  $('#detailExpert2').val(detail);
  $('#editExpertModal2').modal('show');
});


$('#btOpenModalEducation').on('click',function(e){
     e.preventDefault();
       $('#addEducation').modal('show');
   });

   $('#btUploadEducation').hide();

   $('#fileUploadEducation').on('change',function(event){
     selectedFile = event.target.files[0];
     $('#btUploadEducation').show();
   });

   $('#btUploadEducation').on('click',function(){
     uploadEducation();
   });

   function uploadEducation(){
     var filename= selectedFile.name;
     var filesurename = filename.split(".")[1];
     if(filesurename == "PDF" || filesurename == "pdf"){
       var storageRef = firebase.storage().ref('/CoursePDF/master2553/' + filename);
       var uplodadTask = storageRef.put(selectedFile);

       uplodadTask.on('state_changed',function(sanpshot){

       },function(error){

       },function(){
         var downloadURL = uplodadTask.snapshot.downloadURL;
         var updates = {};
         var postPDF = {
           file:downloadURL,
           topic:$('#TopicEducation').val()
         };

         firebase.database().ref('website').child("course").child('master').child('year2553').child('filePDF').child('education').push().set(postPDF);
         $('#fileUploadEducation').val("");
         $('#addEducation').modal('hide');
         $('#addEducation3').modal('show');

       });

     }else {
       $('#addEducation').modal('hide');
       $('#addEducation2').modal('show');
     }


   }

   /*------------------------ End Dowload Education (2560) -----------------------------------*/

     /*------------------------  Dowload Course (2560) -----------------------------------*/

$('#Course').on('click',function(){
  $('#iconSuggestion').attr("class","fa fa-chevron-right");
  $('#iconEducation').attr("class","fa fa-chevron-right");
  $('#iconCourse').attr("class","fa fa-check text-info");
  $('#iconLearning').attr("class","fa fa-chevron-right");

  $('#headCourse').show();
  $('#tableCourse').show();
  $('#headSuggestion').hide();
  $('#tableSuggestion').hide();
  $('#headEducation').hide();
  $('#tableEducation').hide();
  $('#headLearning').hide();
  $('#tableLearning').hide();
});

var rootRefExpert3 = topicRef.child("course").child('master').child('year2553').child('filePDF').child('course');

rootRefExpert3.on("child_added",snap => {
  var snapkey = snap.key;
  var detail = snap.child('topic').val();

  $('#Course_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                            "<label for='"+'md_checkbox'+"'></label></td><td class='"+'txtdetail'+"'>" + detail + "</td>" +
                            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                            " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
});

$('#Course_work').on('click','.btn-delete-expert',function(){
  var id = $(this).closest('tr').attr("id");
  rootRefExpert3.child(id).remove().then(function(){
      $('#deleteModal3').modal('show');
  });
    $(this).closest('tr').remove();
});

$('#Course_work').on('click','.btn-edit-expert',function(){
  var id = $(this).closest('tr').attr("id");
  var detail = $(this).closest('tr').find('.txtdetail').text();
  $('#detailExpert3').val(detail);
  $('#editExpertModal3').modal('show');
});


$('#btOpenModalCourse').on('click',function(e){
     e.preventDefault();
       $('#addCourse').modal('show');
   });

   $('#btUploadCourse').hide();

   $('#fileUploadCourse').on('change',function(event){
     selectedFile = event.target.files[0];
     $('#btUploadCourse').show();
   });

   $('#btUploadCourse').on('click',function(){
     uploadCourse();
   });

   function uploadCourse(){
     var filename= selectedFile.name;
     var filesurename = filename.split(".")[1];
     if(filesurename == "PDF" || filesurename == "pdf"){
       var storageRef = firebase.storage().ref('/CoursePDF/master2553/' + filename);
       var uplodadTask = storageRef.put(selectedFile);

       uplodadTask.on('state_changed',function(sanpshot){

       },function(error){

       },function(){
         var downloadURL = uplodadTask.snapshot.downloadURL;
         var updates = {};
         var postPDF = {
           file:downloadURL,
           topic:$('#TopicCourse').val()
         };

         firebase.database().ref('website').child("course").child('master').child('year2553').child('filePDF').child('course').push().set(postPDF);
         $('#fileUploadCourse').val("");
         $('#addCourse').modal('hide');
         $('#addCourse3').modal('show');

       });

     }else {
       $('#addCourse').modal('hide');
       $('#addCourse2').modal('show');
     }


   }

   /*------------------------ End Dowload Course (2560) -----------------------------------*/





})
