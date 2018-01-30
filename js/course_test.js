$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var topicRef = dbRef.ref('website')
 var idBody;
 var auth = null;
 var selectedFile;
 var indexSelect;
 var i = 0;
 var a = 0;
 var idcourse;


/*------------------------ Add Course -----------------------------------*/
 $('#btOpenModalCourse').on('click',function(e){
      e.preventDefault();
        $('#addCourse').modal('show');
    });

    $('#btUploadCourse').on('click',function(){
      uploadCourse();
    });

    function uploadCourse(){

          var post = {
            topic:$('#TopicCourse').val(),

          };

          firebase.database().ref('website').child('course').child('test').push().set(post);
          $('#addCourse').modal('hide');
          $('#addCourse2').modal('show')

        };

/*------------------------END Add Course -----------------------------------*/


/*------------------------ Append Course -----------------------------------*/
        var rootRefExpert = topicRef.child("course").child("test");
        rootRefExpert.on("child_added",snap => {
          var snapkey = snap.key;
          var topic = snap.child('topic').val();

          a=a+1;
          $('#addCourse_work').append("<tr id='"+snap.key+"'> <td class='"+'txttopic'+"'>"+

          "<div class='"+'panel-heading'+"'>" +
          "<h4 class='"+'panel-title'+"'>" +
          "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse3'+ a +"'><i class='"+'ti-arrow-circle-down icon1-1'+"'></i><i hidden class='"+'ti-arrow-circle-up icon1-2'+"'></i>"+" "+ topic +"</a>" +
          "</h4>" + "</div>" + "<div id='"+'collapse3'+ a +"' class='"+'panel-collapse collapse'+"''>" +
          "<div class='"+'panel-body'+"'>" +
          "<div id='"+'headSuggestion'+"' class='"+'card-block bg-info test_header'+"'>" +
                                    "<h4 class='"+'text-white card-title'+"'>รายละเอียดหลักสูตร</h4>" +
                                    "<div class='"+'message-box contact-box'+"'>" +
                                    "<h2 class='"+'add-ct-btn'+"'>" +
                                    "<button type='"+'button'+"' id='"+'btOpenModalSuggestion'+"' class='"+'btn btn-circle btn-lg btn-success waves-effect waves-dark'+"'>+</button>" +
                                    "</h2>" +
                                    "</div>" +
                                    "</div>" +

                                    "<form class='"+'form-horizontal form-material'+"'>" +
                                    "<div class='"+'table-responsive'+"'>" +
                                    "<table  id='"+'tableSuggestion'+"' class='"+'table text-center color-bordered-table success-bordered-table test_table'+"'>" +
                                    "<thead>" + "<tr>" +
                                    "<th class='"+'text-center'+"'>รูป</th>" +
                                    "<th class='"+'text-center'+"'>ชื่อหัวข้อ</th>" +
                                    "<th class='"+'text-center'+"'>ชื่อปริญญา</th>" +
                                    "<th class='"+'text-center'+"'>ลักษณะวิชาชีพ</th>" +
                                    "<th class='"+'text-center'+"'>ลักษณะวิชาที่ศึกษา</th>" +
                                    "<th class='"+'text-center'+"'>แก้ไข</th>" +
                                    "</tr>" +
                                    "</thead>" +
                                    "<tbody id='"+' '+"'>" +

                                    "</tbody>" +
                                    "</table>" +
                                    "</div>" +
                                    "</form>" +

                                    "</div>" + "</div>" +


                                    "</td></tr>");
                                    $('#loaderHeader').hide();



        });

        $('#addCourse_work').on('click','.icon1-1',function(){
          $(this).closest('td').find('.icon1-1').attr('hidden',"true");
           $(this).closest('td').find('.icon1-2').removeAttr('hidden');
        });
        $('#addCourse_work').on('click','.icon1-2',function(){
          $(this).closest('td').find('.icon1-2').attr('hidden',"true");
          $(this).closest('td').find('.icon1-1').removeAttr('hidden');
        });


        $('#addCourse_work').on('click','#btOpenModalSuggestion',function(){
          idcourse = $(this).closest('tr').attr('id');
          $('#addSuggestion').modal('show');

        });


/*------------------------ End Append Course -----------------------------------*/




/*------------------------ Add Course -----------------------------------*/
$('#btUploadSuggestion').on('click',function(){
  uploadSuggestion();
});

$('#btUploadSuggestion').hide();

$('#fileUploadSuggestion').on('change',function(event){
  selectedFile = event.target.files[0];

  $('#btUploadSuggestion').show();
});

function uploadSuggestion(){
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
        topic:$('#TopicSuggestion').val(),
        topic2:$('#TopicSuggestion2').val(),
        detail:$('#detailSuggestion').val(),
        detail2:$('#detailSuggestion2').val()

      };

      firebase.database().ref('website').child("course").child('test').child(idcourse).push().set(post);
      $('#fileUploadSuggestion').val("");
      $('#addSuggestion').modal('hide');
      $('#addSuggestion3').modal('show')

    });

  }else {
    $('#addSuggestion').modal('hide');
    $('#addSuggestion2').modal('show');
  }


}


/*------------------------ End Course -----------------------------------*/

});
