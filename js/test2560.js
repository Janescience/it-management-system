$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
  var topicRef = dbRef.ref('website')
 var auth = null;
 var selectedFile;
 var indexSelect;

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



var rootRefExpert = topicRef.child("course").child('bachelor').child('testyear2560');

rootRefExpert.on("child_added",snap => {
  var snapkey = snap.key;
  var img = snap.child('file').val();
  var detail = snap.child('topic').val();
  var detail2 = snap.child('topic2').val();

  $('#Suggestion_work').append("<tr id='"+snap.key+"'><td><img src='"+ img +"' width='"+'150px'+"'></td><td class='"+'txtdetail'+"'>" + detail + "</td><td class='"+'txtdetail'+"'>" + detail2 + "</td>" +
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
     if(filesurename == "jpg" || filesurename == "JPG"){
       var storageRef = firebase.storage().ref('/CoursePDF/bachelor2560/' + filename);
       var uplodadTask = storageRef.put(selectedFile);

       uplodadTask.on('state_changed',function(sanpshot){

       },function(error){

       },function(){
         var downloadURL = uplodadTask.snapshot.downloadURL;
         var updates = {};
         var postPDF = {
           file:downloadURL,
           topic:$('#TopicSuggestion').val(),
           topic2:$('#TopicSuggestion2').val()

         };

         firebase.database().ref('website').child("course").child('bachelor').child('testyear2560').push().set(postPDF);
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
  })
