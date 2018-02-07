$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var topicRef = dbRef.ref('website')
 var idBody;
 var idCourses;
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

        TypeCourseStudyplan = $("#SelectTypeCourse").val();
        $('#AddTypeCourseStudyplan').val(TypeCourseStudyplan);

        TypeCourseStudyplan2 = $("#SelectAddCourses").val();
        $('#TopicSuggestionStudyplan').val(TypeCourseStudyplan2);

        document.getElementById("AddTypeCourseStudyplan").disabled = true;
        document.getElementById("TopicSuggestionStudyplan").disabled = true;
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
        var storageRef = firebase.storage().ref('/CoursePDF/' + filename);
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

          TypeCourseStudyplan = $("#AddTypeCourseStudyplan").val();
          TopicNameCouresStudyplan = $('#TopicSuggestionStudyplan').val();

          firebase.database().ref('website/course/AddStudyplan').child(TypeCourseStudyplan).child(TopicNameCouresStudyplan).child('Studyplan').set(postPDF);
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




 /*======================= View  course Option ======================*/

$('#SelectTypeCourse').on('change',function(){
  var TypeCourse = $("#SelectTypeCourse").val();


  $('#SelectAddCourses').empty();
  var AddCoursesDb = dbRef.ref("website/course/AddCourses").child(TypeCourse);
  var AddCoursesRootRef = AddCoursesDb;


AddCoursesRootRef.on("child_added",snap => {
    var snapkey = snap.key;


    $('#SelectAddCourses').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ snap.key +"</option>");
    $('#SelectAddCourses').val("");

  });



});







  /*======================= End  View  course Option  ======================*/

    /*=======================  Add  course Option  ======================*/
  $('#btAddDeitlCourses').on('click',function(e){
         e.preventDefault();
         $('#EditCourse').modal('show');

     });

     $('#btUploadEditCourse').hide();

     $('#fileUploadEdetailCourse').on('change',function(event){
       selectedFile = event.target.files[0];

       $('#btUploadEditCourse').show();
     });

     $('#btUploadEditCourse').on('click',function(){
       uploadEditCourse();
     });

     function uploadEditCourse(){
       var filename= selectedFile.name;
       var filesurename = filename.split(".")[1];
       if(filesurename == "jpg" || filesurename == "JPG" || filesurename == "png" || filesurename == "PNG"){
         var storageRef = firebase.storage().ref('/CourseImage/' + filename);
         var uplodadTask = storageRef.put(selectedFile);

         uplodadTask.on('state_changed',function(sanpshot){

         },function(error){

         },function(){
           var downloadURL = uplodadTask.snapshot.downloadURL;
           var updates = {};
           var post = {
             file:downloadURL,

             topic:$('#TopicEditCourse').val(),
             topic2:$('#TopicEditCourse2').val(),
             detail:$('#detailEditCourse').val(),
             detail2:$('#detailEditCourse2').val()

           };


           TopicNameCoures = $("#typeCourse").val();
           TopicNameEditCourseCoures = $("#TopicNameEditCourse").val();

           firebase.database().ref('website/course/AddCourses').child(TopicNameCoures).child(TopicNameEditCourseCoures).push().set(post);
           $('#fileUploadEdetailCourse').val("");
           $('#EditCourse').modal('hide');
           $('#addSuggestion3').modal('show')

         });

       }else {
         $('#EditCourse').modal('hide');
         $('#addSuggestion2').modal('show');
       }


     }

  /*======================= add Edit course  ======================*/

  /*======================= end add Edit course  ======================*/


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



 $('#SelectAddCourses').on('change',function(){

 $('#Suggestion_work').empty();
 $('#TitleAddOpenCourses').empty();
 var Type = $("#SelectTypeCourse").val();
 var View= $("#SelectAddCourses").val();

 TypeOpenCourses = $("#SelectAddCourses").val();
 $('#TitleAddStudyplan').text(TypeOpenCourses);
 $('#TitleAddOpenCourses').text(TypeOpenCourses);

 var a=0;
 var ViewCoursesDb = dbRef.ref("website/course/AddCourses").child(Type).child(View);

 var ViewDowloadCoursesDb = dbRef.ref("website/course/AddDownload").child(Type).child(View);



 ViewCoursesDb.on("child_added",snap => {

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


                           $('#AddDownload_work').empty();
                           ViewDowloadCoursesDb.on("child_added",snap => {

                             var snapkey = snap.key;
                             var topic = snap.child('topic').val();
                             var topic2 = snap.child('topic2').val();
                             var link = snap.child('file').val();


                             $('#AddDownload_work').append("<tr id='"+snap.key+"'> <td class='"+'txttopic'+"' >" + topic + "</td><td class='"+'txttopic2'+"'><a class='"+'txtlink'+"' href='"+link+"'>" + topic2 + "</a></td>"+

                                 "<td>"+
                                 " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                                  $('#loaderHeader2').hide();
                                 });

                                 $('#Suggestion_work').on('click','.btn-delete-expert',function(){
                                   var id = $(this).closest('tr').attr("id");
                                   ViewCoursesDb.child(id).remove().then(function(){
                                       $('#deleteModal').modal('show');
                                   });
                                     $(this).closest('tr').remove();
                                 });

                                 $('#AddDownload_work').on('click','.btn-delete-expert',function(){
                                   var id = $(this).closest('tr').attr("id");
                                   ViewDowloadCoursesDb.child(id).remove().then(function(){
                                       $('#deleteModal').modal('show');
                                   });
                                     $(this).closest('tr').remove();
                                 });

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

     var Type = $("#SelectTypeCourse").val();
     var View= $("#SelectAddCourses").val();

     $('#Suggestion_work').empty();
     var deleteRef2;
     var deleteImageProfile2 = firebase.database().ref("website/course/AddCourses").child(Type).child(View).child(idBody).child('file');

     deleteImageProfile2.on('value',snap => {
       deleteRef2 = firebase.storage().refFromURL(snap.val());
     });
     deleteRef2.delete().then(function() {
     }).catch(function(error) {

     });
     firebase.database().ref("website/course/AddCourses").child(Type).child(View).child(idBody).update(updatebachelor);
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




       $('#addEditExpert2').modal('show');

   });
 };


 $('#btOpenModalSuggestion').on('click',function(e){
      e.preventDefault();
        $('#addSuggestion').modal('show');
        TypeCourse2 = $("#SelectTypeCourse").val();
        $('#AddTypeCourse').val(TypeCourse2);

        TypeCourse3 = $("#SelectAddCourses").val();
        $('#AddTypeCourse2').val(TypeCourse3);

        document.getElementById("AddTypeCourse").disabled = true;
        document.getElementById("AddTypeCourse2").disabled = true;
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

          TypeCourse = $("#AddTypeCourse").val();
          TopicNameCoures = $('#SelectAddCourses').val();

          firebase.database().ref('website/course/AddCourses').child(TypeCourse).child(TopicNameCoures).push().set(post);

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







       /*------------------------  Dowload Course -----------------------------------*/

       $('#btOpenModalEditDownload').on('click',function(e){
            e.preventDefault();
              $('#editDowload').modal('show');

              TypeCourse2 = $("#SelectTypeCourse").val();
              $('#TypeEducationEditDownload').val(TypeCourse2);

              TypeCourse3 = $("#SelectAddCourses").val();
              $('#TypeCourseEditDownload').val(TypeCourse3);

              document.getElementById("TypeEducationEditDownload").disabled = true;
              document.getElementById("TypeCourseEditDownload").disabled = true;

          });

          $('#btUploadEditDownload').hide();

          $('#fileUploadEditDownload').on('change',function(event){
            selectedFile = event.target.files[0];

            $('#btUploadEditDownload').show();
          });

          $('#btUploadEditDownload').on('click',function(){
            uploadEditDownload();
          });

          function uploadEditDownload(){
            var filename= selectedFile.name;
            var filesurename = filename.split(".")[1];
            if(filesurename == "pdf" || filesurename == "PDF"){
              var storageRef = firebase.storage().ref('/CoursePDF/' + filename);
              var uplodadTask = storageRef.put(selectedFile);

              uplodadTask.on('state_changed',function(sanpshot){

              },function(error){

              },function(){
                var downloadURL = uplodadTask.snapshot.downloadURL;
                var updates = {};
                var post = {
                  file:downloadURL,

                  topic:$('#typeDownload').val(),
                  topic2:$('#TopicEditDownload').val(),

                };

                TypeCourseDownload = $("#TypeEducationEditDownload").val();
                TopicNameDownload = $('#TypeCourseEditDownload').val();

                firebase.database().ref('website/course/AddDownload').child(TypeCourseDownload).child(TopicNameDownload).push().set(post);
                $('#fileUploadEdetailCourse').val("");
                $('#editDowload').modal('hide');
                $('#addSuggestion3').modal('show');

              });

            }else {
              $('#editDowload').modal('hide');
              $('#addSuggestion2').modal('show');
            }


          }



        /*------------------------  END Dowload Course -----------------------------------*/
})
