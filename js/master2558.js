$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var topicRef = dbRef.ref('website')
 var auth = null;
 var selectedFile;
 var indexSelect;
 var i=0;
 var j=0;


/*------------------------ select page -----------------------------------*/

 $('#selectHeaderSlide').on('change',function(){
  indexSelect = document.getElementById("selectHeaderSlide").selectedIndex;
  if(indexSelect==0){
    window.location.href = "master2558.php";
  }else if(indexSelect==1){
    window.location.href = "master2553.php";
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


 /*------------------------ Master OpenCourses (2558) -----------------------------------*/

 $('#btAddOpenCourses').on('click',function(e){
      e.preventDefault();
        $('#addOpenCourses').modal('show');
    });

 /*======================= END Master OpenCourses  ======================*/



 /*------------------------ Master Topic1 (2558) -----------------------------------*/

 $('#btModifyTopic1').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyTopic1').modal('show');
    });

 /*======================= END Master Topic1  ======================*/


 /*------------------------ Master Topic2 (2558) -----------------------------------*/

 $('#btModifyTopic2').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyTopic2').modal('show');
    });

 /*======================= END Master Topic2  ======================*/



 /*------------------------ Master textDetailtitle (2558) -----------------------------------*/

/*======================= Master Edit Text ======================*/
document.getElementById("textDetailtitle").disabled = true;
  $('#btTitleSave').hide();
  $('#btTitleCancel').hide();


  var db = dbRef.ref('website/course').child('master').child('year2558').child('textTopic1');
  db.on('value',snap => {
    $('#textDetailtitle').val(snap.val());
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
      $('#btTitleSave').show();
      $('#btTitleCancel').show();

    }

  function SaveMaster2553(){

      var data = {
       textTopicBachelorEs:$('#textDetailtitle').val(),

    };

    firebase.database().ref('website').child('course').child('master').child('year2558').update(data);

    $('#btTitleSave').hide();
    $('#btTitleCancel').hide();
    document.getElementById("textDetailtitle").disabled = true;

    }

  function CancelMaster2553() {
        document.getElementById("textDetailtitle").disabled = true;
        $('#btTitleSave').hide();
        $('#btTitleCancel').hide();
        document.getElementById("textDetailtitle").disabled = true;
  }


 /*======================= END Master textDetailtitle (2558)  ======================*/



 $('#headeditCourse').hide();
 $('#tableeditCourse').hide();

 /*------------------------  editCourse (2560) -----------------------------------*/


 $('#editCourse').on('click',function(){

   if(i == 0){
      $('#iconeditCourse').attr("class","fa fa-check text-info");
      $('#headeditCourse').show();
      $('#tableeditCourse').show();
      i = 1;
    }else{
      $('#iconeditCourse').attr("class","fa fa-chevron-right");
      $('#headeditCourse').hide();
      $('#tableeditCourse').hide();
      i = 0;
    }

 });



 var rootRefExpert = topicRef.child("course").child('master').child('year2558').child('body');
 var a=0;
 rootRefExpert.on("child_added",snap => {
   var snapkey = snap.key;
   var img = snap.child('file').val();
   var detail = snap.child('topic').val();
   var detail2 = snap.child('topic2').val();

   a=a+1;

   $('#editCourse_work').append("<tr id='"+snap.key+"'><td><img src='"+ img +"' width='"+'150px'+"' style='"+'border-radius:10px'+"' class='"+'header-bg'+"'></td><td class='"+'txttopic'+"' width='"+'250px'+"'>" + detail + "</td><td class='"+'txtdetail'+"'>" + "<div class='"+'panel-heading'+"'>" +
   "<h4 class='"+'panel-title'+"'>" + "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse'+ a +"'>ดูรายละเอียด</a>" + "</h4>" + "</div>" + "<div id='"+'collapse'+ a +"' class='"+'panel-collapse collapse'+"''>" + "<div class='"+'panel-body'+"'>" + detail2 + "</div>" + "</div>" + "</td>" +
                             "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                             " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

 });




 $('#editCourse_work').on('click','.btn-delete-expert',function(){
   var id = $(this).closest('tr').attr("id");
   rootRefExpert.child(id).remove().then(function(){
       $('#deleteProfileModal').modal('show');
   });
     $(this).closest('tr').remove();
 });

 $('#editCourse_work').on('click','.btn-edit-expert',function(){
   idBody = $(this).closest('tr').attr("id");
   var bg = $(this).closest('tr').find(".header-bg").attr("src");
   var topic =  $(this).closest('tr').find(".txttopic").text();
   var detail = $(this).closest('tr').find('.txtdetail').text();
   $('#bgHeaderEdit').attr("src",bg);
   $('#TopicExpert').val(topic);
   $('#detailExpert').val(detail);
   $('#editExpertModal').modal('show');
 });

 $('#btEditExpert').on('click',function(){
   editHeader();
 });

 $('#fileUploadExpert').on('change',function(event){
   selectedFileEdit = event.target.files[0];
 });

 function editHeader(){
   var filename= selectedFileEdit.name;
   var storageRef = firebase.storage().ref('/CourseImage/Master/Master2558/' + filename);
   var uplodadTask = storageRef.put(selectedFileEdit);

   uplodadTask.on('state_changed',function(sanpshot){

   },function(error){

   },function(){
     var downloadURL = uplodadTask.snapshot.downloadURL;
     var updatebachelor = {
       file:downloadURL,
       topic:  $('#TopicExpert').val(),
       topic2:  $('#detailExpert').val(),
     };
     var deleteRef;
     var deleteImageProfile = firebase.database().ref('website/course/master/year2558/body').child(idBody).child('file');
     deleteImageProfile.on('value',snap => {
       deleteRef = firebase.storage().refFromURL(snap.val());
     });
     deleteRef.delete().then(function() {
     }).catch(function(error) {

     });
     firebase.database().ref('website/course/master/year2558/body').child(idBody).update(updatebachelor);
     $('#fileUploadExpert').val("");
     $('#TopicExpert').val("");
     $('#detailExpert').val("");


       $('#list_header').empty();

       var a=0;
       rootRefExpert.on("child_added",snap => {
         var snapkey = snap.key;
         var img = snap.child('file').val();
         var detail = snap.child('topic').val();
         var detail2 = snap.child('topic2').val();

         a=a+1;

         $('#Suggestion_work').append("<tr id='"+snap.key+"'><td><img src='"+ img +"' width='"+'150px'+"' style='"+'border-radius:10px'+"' class='"+'header-bg'+"'></td><td class='"+'txttopic'+"' width='"+'250px'+"'>" + detail + "</td><td class='"+'txtdetail'+"'>" + "<div class='"+'panel-heading'+"'>" +
         "<h4 class='"+'panel-title'+"'>" + "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse'+ a +"'>ดูรายละเอียด</a>" + "</h4>" + "</div>" + "<div id='"+'collapse'+ a +"' class='"+'panel-collapse collapse'+"''>" + "<div class='"+'panel-body'+"'>" + detail2 + "</div>" + "</div>" + "</td>" +
                                   "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

       });

       $('#addEditExpert2').modal('show');

   });
 };


 $('#btOpenModaleditCourse').on('click',function(e){
      e.preventDefault();
        $('#addeditCourse').modal('show');
    });

    $('#btUploadeditCourse').hide();

    $('#fileUploadeditCourse').on('change',function(event){
      selectedFile = event.target.files[0];

      $('#btUploadeditCourse').show();
    });

    $('#btUploadeditCourse').on('click',function(){
      uploadeditCourse();
    });

    function uploadeditCourse(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "jpg" || filesurename == "JPG" || filesurename == "png" || filesurename == "PNG"){
        var storageRef = firebase.storage().ref('/CourseImage/Master/Master2553/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var post = {
            file:downloadURL,
            topic:$('#TopiceditCourse').val(),
            topic2:$('#TopiceditCourse2').val()

          };

          firebase.database().ref('website').child("course").child('master').child('year2558').child('body').push().set(post);
          $('#fileUploadeditCourse').val("");
          $('#addeditCourse').modal('hide');
          $('#addeditCourse3').modal('show')

        });

      }else {
        $('#addeditCourse').modal('hide');
        $('#addeditCourse2').modal('show');
      }


    }

      /*------------------------ End  editCourse (2560) -----------------------------------*/




/*======================= Dowload Suggestion (2558) ======================*/

$('#headSuggestion').hide();
$('#tableSuggestion').hide();
$('#headEducation').hide();
$('#tableEducation').hide();
$('#headCourse').hide();
$('#tableCourse').hide();


/*------------------------  Dowload Suggestion (2558) -----------------------------------*/


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



var rootRefExpert = topicRef.child("course").child('master').child('year2558').child('filePDF').child('suggestion');

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
       var storageRef = firebase.storage().ref('/CoursePDF/master2558/' + filename);
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

         firebase.database().ref('website').child("course").child('master').child('year2558').child('filePDF').child('suggestion').push().set(postPDF);
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

var rootRefExpert2 = topicRef.child("course").child('master').child('year2558').child('filePDF').child('education');

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
       var storageRef = firebase.storage().ref('/CoursePDF/master2558/' + filename);
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

         firebase.database().ref('website').child("course").child('master').child('year2558').child('filePDF').child('education').push().set(postPDF);
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

var rootRefExpert3 = topicRef.child("course").child('master').child('year2558').child('filePDF').child('course');

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

         firebase.database().ref('website').child("course").child('master').child('year2558').child('filePDF').child('course').push().set(postPDF);
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
