$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var topicRef = dbRef.ref('website')
 var idBody;
 var auth = null;
 var selectedFile;
 var indexSelect;
 var i = 0;
 var j = 0;

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

    $('#fileUploadStudyplan').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadStudyplan').on('click',function(){
      uploadStudyplan();
    });

    function uploadStudyplan(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/bachelor2555/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicStudyplan').val()
          };

          firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('filePDF').child('studyplan').push().set(postPDF);
          $('#fileUploadStudyplan').val("");
          $('#addStudyplan').modal('hide');
          $('#addStudyplan3').modal('show');

        });

      }else {
        $('#addStudyplan').modal('hide');
        $('#addStudyplan2').modal('show');
      }


    }

 /*======================= END Bachelor Studyplan  ======================*/



 /*------------------------ Bachelor OpenCourses (2555) -----------------------------------*/

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
        var storageRef = firebase.storage().ref('/CoursePDF/bachelor2555/' + filename);
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

          firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('filePDF').child('openCourses').push().set(postPDF);
          $('#fileUploadOpenCourses').val("");
          $('#addOpenCourses').modal('hide');
          $('#addOpenCourses3').modal('show');

        });

      }else {
        $('#addOpenCourses').modal('hide');
        $('#addOpenCourses2').modal('show');
      }


    }

 /*======================= END Bachelor OpenCourses  ======================*/


 /*------------------------ Bachelor ModifyEs (2555) -----------------------------------*/

 $('#btBachelorModifyEs').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyEs').modal('show');
    });

    $('#fileUploadModifyEs').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadModifyEs').on('click',function(){
      uploadEs();
    });

    function uploadEs(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/bachelor2555/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicEs').val()
          };

          firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('filePDF').child('Es').push().set(postPDF);
          $('#fileUploadModifyEs').val("");
          $('#addOpenModifyEs').modal('hide');
          $('#addOpenModifyEs3').modal('show');

        });

      }else {
        $('#addOpenModifyEs').modal('hide');
        $('#addOpenModifyEs2').modal('show');
      }


    }

 /*======================= END Bachelor ModifyEs  ======================*/


 /*------------------------ Bachelor ModifyIc (2555) -----------------------------------*/

 $('#btBachelorModifyIc').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyIc').modal('show');
    });

    $('#fileUploadModifyIc').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadModifyIc').on('click',function(){
      uploadIc();
    });

    function uploadIc(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/bachelor2555/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicIc').val()
          };

          firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('filePDF').child('Ic').push().set(postPDF);
          $('#fileUploadModifyIc').val("");
          $('#addOpenModifyIc').modal('hide');
          $('#addOpenModifyIc3').modal('show');

        });

      }else {
        $('#addOpenModifyIc').modal('hide');
        $('#addOpenModifyIc2').modal('show');
      }


    }

 /*======================= END Bachelor ModifyIc  ======================*/


 /*------------------------ Bachelor ModifyMis (2555) -----------------------------------*/

 $('#btBachelorModifyMis').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyMis').modal('show');
    });

    $('#fileUploadModifyMis').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadModifyMis').on('click',function(){
      uploadMis();
    });

    function uploadMis(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/bachelor2555/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicMis').val()
          };

          firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('filePDF').child('Mis').push().set(postPDF);
          $('#fileUploadModifyMis').val("");
          $('#addOpenModifyMis').modal('hide');
          $('#addOpenModifyMis3').modal('show');

        });

      }else {
        $('#addOpenModifyMis').modal('hide');
        $('#addOpenModifyMis2').modal('show');
      }


    }

 /*======================= END Bachelor ModifyMis  ======================*/


  /*------------------------ Bachelor ModifyIs (2555) -----------------------------------*/

 $('#btBachelorModifyIs').on('click',function(e){
      e.preventDefault();
        $('#addOpenModifyIs').modal('show');
    });

    $('#fileUploadModifyIs').on('change',function(event){
      selectedFile = event.target.files[0];

    });

    $('#btUploadModifyIs').on('click',function(){
      uploadIs();
    });

    function uploadIs(){
      var filename= selectedFile.name;
      var filesurename = filename.split(".")[1];
      if(filesurename == "PDF" || filesurename == "pdf"){
        var storageRef = firebase.storage().ref('/CoursePDF/bachelor2555/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var postPDF = {
            file:downloadURL,
            topic:$('#TopicIs').val()
          };

          firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('filePDF').child('Is').push().set(postPDF);
          $('#fileUploadModifyIs').val("");
          $('#addOpenModifyIs').modal('hide');
          $('#addOpenModifyIs3').modal('show');

        });

      }else {
        $('#addOpenModifyIs').modal('hide');
        $('#addOpenModifyIs2').modal('show');
      }


    }

 /*======================= END Bachelor ModifyIs  ======================*/


 /*------------------------  Dowload Suggestion (2560) -----------------------------------*/


 $('#Suggestion').on('click',function(){

   if(i == 0){
      $('#iconSuggestion').attr("class","fa fa-check text-info");
      $('#headSuggestion').show();
      $('#tableSuggestion').show();
      i = 1;
    }else{
      $('#iconSuggestion').attr("class","fa fa-chevron-right");
      $('#headSuggestion').hide();
      $('#tableSuggestion').hide();
      i = 0;
    }

 });



 var rootRefExpert = topicRef.child("course").child('bachelor').child('year2555').child('body');
 var a=0;
 rootRefExpert.on("child_added",snap => {
   var snapkey = snap.key;
   var img = snap.child('file').val();
   var topic = snap.child('topic').val();
   var topic2 = snap.child('topic2').val();
   var detail = snap.child('detail').val();
   var detail2 = snap.child('detail2').val();

   a=a+1;

   $('#Suggestion_work').append("<tr id='"+snap.key+"'><td><img src='"+ img +"' width='"+'150px'+"' style='"+'border-radius:10px'+"' class='"+'header-bg'+"'></td> <td class='"+'txttopic'+"' width='"+'200px'+"'>" + topic + "</td><td class='"+'txttopic2'+"' width='"+'220px'+"'>" + topic2 + "</td><td class='"+'txtdetail'+"'>" + "<div class='"+'panel-heading'+"'>" +
   "<h4 class='"+'panel-title'+"'>" +
   "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse2'+ a +"'><i class='"+'ti-arrow-circle-down icon1-1'+"'></i><i hidden class='"+'ti-arrow-circle-up icon1-2'+"'></i></a>" +
   "</h4>" + "</div>" + "<div id='"+'collapse2'+ a +"' class='"+'panel-collapse collapse'+"''>" +
   "<div class='"+'panel-body'+"'>" + detail + "</div>" + "</div>" + "</td><td class='"+'txtdetail2'+"'>" +
   "<div class='"+'panel-heading'+"'>" +
   "<h4 class='"+'panel-title'+"'>" +
   "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse3'+ a +"'><i class='"+'ti-arrow-circle-down icon2-1'+"'></i><i hidden class='"+'ti-arrow-circle-up icon2-2'+"'></i></a>" +
   "</h4>" + "</div>" + "<div id='"+'collapse3'+ a +"' class='"+'panel-collapse collapse'+"''>" +
   "<div class='"+'panel-body'+"'>" + detail2 + "</div>" + "</div>" + "</td>" +

                             "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                             " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                             $('#loaderHeader').hide();

 });


 $('#Suggestion_work').on('click','.icon1-1',function(){
   $(this).closest('td').find('.icon1-1').attr('hidden',"true");
    $(this).closest('td').find('.icon1-2').removeAttr('hidden');
 });
 $('#Suggestion_work').on('click','.icon1-2',function(){
   $(this).closest('td').find('.icon1-2').attr('hidden',"true");
   $(this).closest('td').find('.icon1-1').removeAttr('hidden');
 });

 $('#Suggestion_work').on('click','.icon2-1',function(){
   $(this).closest('td').find('.icon2-1').attr('hidden',"true");
    $(this).closest('td').find('.icon2-2').removeAttr('hidden');
 });
 $('#Suggestion_work').on('click','.icon2-2',function(){
   $(this).closest('td').find('.icon2-2').attr('hidden',"true");
   $(this).closest('td').find('.icon2-1').removeAttr('hidden');
 });

 $('#Suggestion_work').on('click','.btn-delete-expert',function(){
   var id = $(this).closest('tr').attr("id");
   rootRefExpert.child(id).remove().then(function(){
       $('#deleteProfileModal').modal('show');
   });
     $(this).closest('tr').remove();
 });

 $('#Suggestion_work').on('click','.btn-edit-expert',function(){
   idBody = $(this).closest('tr').attr("id");
   var bg = $(this).closest('tr').find(".header-bg").attr("src");
   var topic =  $(this).closest('tr').find(".txttopic").text();
   var topic2 =  $(this).closest('tr').find(".txttopic2").text();
   var detail = $(this).closest('tr').find('.txtdetail').text();
   var detail2 = $(this).closest('tr').find('.txtdetail2').text();
   $('#bgHeaderEdit').attr("src",bg);
   $('#TopicExpert').val(topic);
   $('#TopicExpert2').val(topic2);
   $('#detailExpert').val(detail);
   $('#detailExpert2').val(detail2);
   $('#editExpertModal').modal('show');
 });

 $('#btEditExpert').on('click',function(){
   editExpert();
 });

 $('#fileUploadExpert').on('change',function(event){
   selectedFileEdit = event.target.files[0];
 });

 function editExpert(){
   var filename= selectedFileEdit.name;
   var storageRef = firebase.storage().ref('/CourseImage/' + filename);
   var uplodadTask = storageRef.put(selectedFileEdit);

   uplodadTask.on('state_changed',function(sanpshot){

   },function(error){

   },function(){
     var downloadURL = uplodadTask.snapshot.downloadURL;
     var updatebachelor = {
       file:downloadURL,
       topic:  $('#TopicExpert').val(),
       topic2:  $('#TopicExpert2').val(),
       detail:  $('#detailExpert').val(),
       detail2:  $('#detailExpert2').val(),
     };
     var deleteRef;
     var deleteImageProfile = firebase.database().ref('website/course/bachelor/year2555/body').child(idBody).child('file');
     deleteImageProfile.on('value',snap => {
       deleteRef = firebase.storage().refFromURL(snap.val());
     });
     deleteRef.delete().then(function() {
     }).catch(function(error) {

     });
     firebase.database().ref('website/course/bachelor/year2555/body').child(idBody).update(updatebachelor);
     $('#fileUploadExpert').val("");
     $('#TopicExpert').val("");
     $('#TopicExpert2').val("");
     $('#detailExpert').val("");
     $('#detailExpert2').val("");


       $('#list_header').empty();

       var a=0;
       rootRefExpert.on("child_added",snap => {
         var snapkey = snap.key;
         var img = snap.child('file').val();
         var topic = snap.child('topic').val();
         var topic2 = snap.child('topic2').val();
         var detail = snap.child('detail').val();
         var detail2 = snap.child('detail2').val();

         a=a+1;

         $('#Suggestion_work').append("<tr id='"+snap.key+"'><td><img src='"+ img +"' width='"+'150px'+"' style='"+'border-radius:10px'+"' class='"+'header-bg'+"'></td> <td class='"+'txttopic'+"' width='"+'200px'+"'>" + topic + "</td><td class='"+'txttopic2'+"' width='"+'220px'+"'>" + topic2 + "</td><td class='"+'txtdetail'+"'>" + "<div class='"+'panel-heading'+"'>" +
         "<h4 class='"+'panel-title'+"'>" + "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse2'+ a +"'><i class='"+'ti-arrow-circle-down icon1-1'+"'></i><i hidden class='"+'ti-arrow-circle-up icon1-2'+"'></i></a>" + "</h4>" + "</div>" + "<div id='"+'collapse2'+ a +"' class='"+'panel-collapse collapse'+"''>" + "<div class='"+'panel-body'+"'>" + detail + "</div>" + "</div>" + "</td><td class='"+'txtdetail2'+"'>" + "<div class='"+'panel-heading'+"'>" +
         "<h4 class='"+'panel-title'+"'>" + "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse3'+ a +"'><i class='"+'ti-arrow-circle-down icon2-1'+"'></i><i hidden class='"+'ti-arrow-circle-up icon2-2'+"'></i></a>" + "</h4>" + "</div>" + "<div id='"+'collapse3'+ a +"' class='"+'panel-collapse collapse'+"''>" + "<div class='"+'panel-body'+"'>" + detail2 + "</div>" + "</div>" + "</td>" +
                                   "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                                   $('#loaderHeader').hide();

       });

       $('#addEditExpert2').modal('show');

   });
 };


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
      if(filesurename == "jpg" || filesurename == "JPG" || filesurename == "png" || filesurename == "PNG"){
        var storageRef = firebase.storage().ref('/CoursePDF/bachelor2560/' + filename);
        var uplodadTask = storageRef.put(selectedFile);

        uplodadTask.on('state_changed',function(sanpshot){

        },function(error){

        },function(){
          var downloadURL = uplodadTask.snapshot.downloadURL;
          var updates = {};
          var post = {
            file:downloadURL,
            topic:$('#TopicSuggestion').val(),
            topic2:$('#TopicSuggestion2').val(),
            detail:$('#detailSuggestion').val(),
            detail2:$('#detailSuggestion2').val()

          };

          firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('body').push().set(post);
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

  $('#headDownload').hide();
  $('#tableDownload').hide();


  /*------------------------  Dowload (2555) -----------------------------------*/


  $('#Download').on('click',function(){

if(j == 0){
    $('#iconDownload').attr("class","fa fa-check text-info");
    $('#headDownload').show();
    $('#tableDownload').show();
    j = 1;
  }else {
    $('#iconDownload').attr("class","fa fa-chevron-right");
    $('#headDownload').hide();
    $('#tableDownload').hide();
    j = 0;
  }

  });

  var rootRefExpert = topicRef.child("course").child('bachelor').child('year2555').child('filePDF').child('Download');

   rootRefExpert.on("child_added",snap => {
     var snapkey = snap.key;
     var detail = snap.child('topic').val();

     $('#Download_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                               "<label for='"+'md_checkbox'+"'></label></td><td class='"+'txtdetail'+"'>" + detail + "</td>" +
                               "<td>"+
                               " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
   });

   $('#Download_work').on('click','.btn-delete-expert',function(){
     var id = $(this).closest('tr').attr("id");
     rootRefExpert.child(id).remove().then(function(){
         $('#deleteProfileModal').modal('show');
     });
       $(this).closest('tr').remove();
   });

   $('#Download_work').on('click','.btn-edit-expert',function(){
     var id = $(this).closest('tr').attr("id");
     var detail = $(this).closest('tr').find('.txtdetail').text();
     $('#detailExpert').val(detail);
     $('#editExpertModal').modal('show');
   });


  $('#btOpenModalDownload').on('click',function(e){
       e.preventDefault();
         $('#addDownload').modal('show');
     });

     $('#btUploadDownload').hide();

     $('#fileUploadDownload').on('change',function(event){
       selectedFile = event.target.files[0];

       $('#btUploadDownload').show();
     });

     $('#btUploadDownload').on('click',function(){
       uploadDownload();
     });

     function uploadDownload(){
       var filename= selectedFile.name;
       var filesurename = filename.split(".")[1];
       if(filesurename == "PDF" || filesurename == "pdf"){
         var storageRef = firebase.storage().ref('/CoursePDF/bachelor2555/' + filename);
         var uplodadTask = storageRef.put(selectedFile);

         uplodadTask.on('state_changed',function(sanpshot){

         },function(error){

         },function(){
           var downloadURL = uplodadTask.snapshot.downloadURL;
           var updates = {};
           var postPDF = {
             file:downloadURL,
             topic:$('#TopicDownload').val()
           };

           firebase.database().ref('website').child("course").child('bachelor').child('year2555').child('filePDF').child('Download').push().set(postPDF);
           $('#fileUploadDownload').val("");
           $('#addDownload').modal('hide');
           $('#addDownload3').modal('show')

         });

       }else {
         $('#addDownload').modal('hide');
         $('#addDownload2').modal('show');
       }


     }



       /*------------------------ End Dowload (2555) -----------------------------------*/

})
