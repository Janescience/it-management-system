$(document).ready(function(){

  <!--===============================upload====================================-->
   var $dropzone = $('.image_picker'),
      $droptarget = $('.drop_target'),
      $dropinput = $('.upload'),
      $dropimg = $('.image_preview'),
      $remover = $('[data-action="remove_current_image"]');

   $dropzone.on('dragover', function() {
    $droptarget.addClass('dropping');
    return false;
   });

   $dropzone.on('dragend dragleave', function() {
    $droptarget.removeClass('dropping');
    return false;
   });

   $dropzone.on('drop', function(e) {
    $droptarget.removeClass('dropping');
    $droptarget.addClass('dropped');
    $remover.removeClass('disabled');
    e.preventDefault();

    var file = e.originalEvent.dataTransfer.files[0],
        reader = new FileReader();

    reader.onload = function(event) {
      $dropimg.css('background-image', 'url(' + event.target.result + ')');
    };

    console.log(file);
    reader.readAsDataURL(file);

    return false;
   });

   $dropinput.change(function(e) {
    $droptarget.addClass('dropped');
    $remover.removeClass('disabled');
    $('.image_title input').val('');

    var file = $dropinput.get(0).files[0],
        reader = new FileReader();

    reader.onload = function(event) {
      $dropimg.css('background-image', 'url(' + event.target.result + ')');
    }

    reader.readAsDataURL(file);
   });

   $remover.on('click', function() {
    $dropimg.css('background-image', '');
    $droptarget.removeClass('dropped');
    $remover.addClass('disabled');
    $('.image_title input').val('');
   });

   $('.image_title input').blur(function() {
    if ($(this).val() != '') {
      $droptarget.removeClass('dropped');
    }
   });
<!--===========================================================================-->


 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var user;
 var selectedFile;
 var selectedIndex;
 var selectedFileEdit;
 var selectImageCourse;
 var selectImageInfo;
 var indexSelect;
 var indexSelectCourse;
 var indexSelectInfoLevel;
 var indexSelectLevel;
 var idHeader;
 var clickBtEditHeader = 0;


<!--============================== ส่วนหัว ===================================-->

var dbHeader = dbRef.ref('website/index/header');
dbHeader.on('child_added',snap =>{
  var bg = snap.child('bg').val();
  var topic = snap.child('topic').val();
  var detail = snap.child('detail').val();
  var link = snap.child('link').val();
  var txt_bt = snap.child('txt_bt').val();

  $('#list_header').append("<tr id='"+snap.key+"'><td><img src='"+bg+"' width='"+'200px'+"' style='"+'border-radius:10px'+"' class='"+'header-bg'+"'></td><td class='"+'txttopic'+"'>"+topic+"</td><td class='"+'txtdetail'+"'>"+detail+"</td><td><a class='"+'txtlink'+"' href='"+link+"'>URL</a></td>"+
                        "<td><button class='"+'btn btn-info txtbt'+"'>"+txt_bt+"</button></td>"+
                        "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-header'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                        " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-header'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
$('#loaderHeader').hide();
});

$('#list_header').on('click','.btn-edit-header',function(){
  idHeader = $(this).closest('tr').attr("id");
  var bg = $(this).closest('tr').find(".header-bg").attr("src");
  var topic =  $(this).closest('tr').find(".txttopic").text();
  var detail =  $(this).closest('tr').find(".txtdetail").text();
  var link =  $(this).closest('tr').find(".txtlink").attr("href");
  var txt_bt =  $(this).closest('tr').find(".txtbt").text();
  $('#bgHeaderEdit').attr("src",bg);
  $('#textTopicEdit').val(topic);
  $('#textDetailEdit').val(detail);
  $('#textLinkHeaderEdit').val(link);
  $('#textButtonEdit').val(txt_bt);
  $('#editHeaderModal').modal('show');
});

$('#list_header').on('click','.btn-delete-header',function(){
  var id = $(this).closest('tr').attr("id");
  dbHeader.child(id).remove().then(function(){
      $('#deleteHeaderModal').modal('show');
  });
    $(this).closest('tr').remove();
});



$('#btEditHeader').on('click',function(){
  clickBtEditHeader= clickBtEditHeader+1;
  $('#btEditHeader').hide();
  $('#btCloseEdit').hide();
  $('#btLoadingEdit').removeAttr("hidden");
  editHeader();
});

$('#fileUploadImageHeaderEdit').on('change',function(event){
  selectedFileEdit = event.target.files[0];
});

function editHeader(){
  var filename= selectedFileEdit.name;
  var storageRef = firebase.storage().ref('/HeaderSlideImages/' + filename);
  var uplodadTask = storageRef.put(selectedFileEdit);

  uplodadTask.on('state_changed',function(sanpshot){

  },function(error){

  },function(){
    var downloadURL = uplodadTask.snapshot.downloadURL;
    var updateHeader = {
      bg:downloadURL,
      topic:  $('#textTopicEdit').val(),
      detail:  $('#textDetailEdit').val(),
      link:  $('#textLinkHeaderEdit').val(),
      txt_bt:  $('#textButtonEdit').val()
    };
    var deleteRef;
    var deleteImageProfile = firebase.database().ref('website/index/header').child(idHeader).child('bg');
    deleteImageProfile.on('value',snap => {
      deleteRef = firebase.storage().refFromURL(snap.val());
    });
    deleteRef.delete().then(function() {
    }).catch(function(error) {

    });
    firebase.database().ref('website/index/header').child(idHeader).update(updateHeader);
    $('#fileUploadImageHeaderEdit').val("");
    $('#textTopicEdit').val("");
    $('#textDetailEdit').val("");
    $('#textLinkHeaderEdit').val("");
    $('#textButtonEdit').val("");

    $('#btLoadingEdit').attr("hidden","true");
    $('#btEditHeader').show();
    $('#btCloseEdit').show();
    $('#editHeaderModal').modal('hide');

      $('#list_header').empty();

      dbHeader.on('child_added',snap =>{
        var bg = snap.child('bg').val();
        var topic = snap.child('topic').val();
        var detail = snap.child('detail').val();
        var link = snap.child('link').val();
        var txt_bt = snap.child('txt_bt').val();

        $('#list_header').append("<tr id='"+snap.key+"'><td><img src='"+bg+"' width='"+'200px'+"' style='"+'border-radius:10px'+"' class='"+'header-bg'+"'></td><td class='"+'txttopic'+"'>"+topic+"</td><td class='"+'txtdetail'+"'>"+detail+"</td><td><a class='"+'txtlink'+"' href='"+link+"'>URL</a></td>"+
                              "<td><button class='"+'btn btn-info txtbt'+"'>"+txt_bt+"</button></td>"+
                              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-header'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-header'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

      });

  });
};

 $('#btAddHeader').on('click',function(){
    $('#addHeaderModal').modal('show');
 });


 $('#btLoading').hide();

 $('#fileUploadImageHeader').on('change',function(event){
   selectedFile = event.target.files[0];
 });

 $('#btUploadImageHeader').on('click',function(e){
   e.preventDefault();
   $('#btUploadImageHeader').hide();
   $('#btClearTextFile').hide();
   $('#btClose').hide();
   $('#btLoading').show();
   addHerder();
   pushHeaderHistory();
 });

 $('#btClearTextFile').on('click',function(){
   $('#fileUploadImageHeader').val("");
   $('#btUploadImageHeader').hide();
   $('#btClearTextFile').hide();
 });


 function addHerder(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/HeaderSlideImages/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

   uplodadTask.on('state_changed',function(sanpshot){

   },function(error){

   },function(){
     var downloadURL = uplodadTask.snapshot.downloadURL;
     var postHeader = {
       bg:downloadURL,
       topic:$('#textTopic').val(),
       detail:$('#textDetail').val(),
       link:$('#textLinkHeader').val(),
       txt_bt:$('#textButton').val()
     };

     firebase.database().ref('website/index/header').push().set(postHeader);
     $('#fileUploadImageHeader').val("");
     $('#btLoading').hide();
     $('#btClose').show();
     $('#addHeaderModal').modal('hide');

     for(var i = 0;i< clickBtEditHeader;i++){
       $('#list_header tr:last').remove();
     }
   });

 }

 function pushHeaderHistory(){
   var nameValue;
   var dateTimeCurrent = new Date();

   var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
   nameHistory.on('value',snap => {
     nameValue = snap.val();
   });

   var dataHistory = {
     id:sessionStorage.getItem("userId"),
     name:nameValue,
     page:$('#indexPage').text(),
     topic:$('#selectHeaderSlide').val(),
     date:dateTimeCurrent.toDateString(),
     time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
   };

   firebase.database().ref('history').push().set(dataHistory);
 }
<!--========================================================================-->





<!--============================= หลักสูตรที่เปิดสอน ============================-->
$('#selectCourse').on('change',function(){
  indexSelectCourse = document.getElementById("selectCourse").selectedIndex;
});

$('#btEditCourse').on('click',function(){
  $('#editCourseModal').modal('show');
});

 var dbImageBachelor = dbRef.ref('website/index/courseoffered').child('imageBachelor');
 dbImageBachelor.on('value',snap => {
   $('#imageBachelor').attr("src",snap.val());
});
var dbImageMaster = dbRef.ref('website/index/courseoffered').child('imageMaster');
dbImageMaster.on('value',snap => {
  $('#imageMaster').attr("src",snap.val());
});
var dbImageDoctor = dbRef.ref('website/index/courseoffered').child('imageDoctor');
dbImageDoctor.on('value',snap => {
  $('#imageDoctor').attr("src",snap.val());
});

$('#btUploadImageCourse').hide();
$('#btClearTextFileCourse').hide();
$('#btLoadingCourse').hide();

$('#fileUploadImageCourse').on('change',function(event){
  selectImageCourse = event.target.files[0];
$('#btUploadImageCourse').show();
$('#btClearTextFileCourse').show();
});

$('#btUploadImageCourse').on('click',function(e){
  e.preventDefault();
$('#btUploadImageCourse').hide();
$('#btClearTextFileCourse').hide();
$('#btCloseCourse').hide();
$('#btLoadingCourse').show();
  uploadImageCourse();
});

$('#btClearTextFileCourse').on('click',function(){
  $('#fileUploadImageCourse').val("");
  $('#btUploadImageCourse').hide();
  $('#btClearTextFileCourse').hide();
});

function uploadImageCourse(){
  var filename= selectImageCourse.name;
  var storageRef = firebase.storage().ref('/CourseOfferedImages/' + filename);
  var uplodadTask = storageRef.put(selectImageCourse);


  uplodadTask.on('state_changed',function(sanpshot){

  },function(error){

  },function(){
    var downloadURL = uplodadTask.snapshot.downloadURL;
    var update = {};
    var postData = {
      imageBachelor:downloadURL,
      imageMaster:downloadURL,
      imageDoctor:downloadURL
    };
    var deleteRefCourse;


  if(indexSelectCourse==0){
    var deleteImageBachelor = firebase.database().ref('website/index/courseoffered').child('imageBachelor');
    deleteImageBachelor.on('value',snap => {
      deleteRefCourse = firebase.storage().refFromURL(snap.val());
    });
  }else if(indexSelectCourse==1){
    var deleteImageMaster= firebase.database().ref('website/index/courseoffered').child('imageMaster');
    deleteImageMaster.on('value',snap => {
    deleteRefCourse = firebase.storage().refFromURL(snap.val());
    });
  }else if(indexSelectCourse==2){
    var deleteImageDoctor = firebase.database().ref('website/index/courseoffered').child('imageDoctor');
    deleteImageDoctor.on('value',snap => {
    deleteRefCourse = firebase.storage().refFromURL(snap.val());
    });
  }

    deleteRefCourse.delete().then(function() {
    }).catch(function(error) {

    });

  if(indexSelectCourse==0){
    update['website/index/courseoffered/imageBachelor'] = postData.imageBachelor;
  }else if(indexSelectCourse==1){
    update['website/index/courseoffered/imageMaster'] = postData.imageMaster;
  }else if(indexSelectCourse==2){
    update['website/index/courseoffered/imageDoctor'] = postData.imageDoctor;
  }

    firebase.database().ref().update(update);

    $('#fileUploadImageCourse').val("");
    $('#btLoadingCourse').hide();
    $('#btCloseCourse').show();
  });
}
<!--========================================================================-->




<!--=============================== ข่าวสาร =================================-->
$('#btInfoUploadImg').hide();
$('#btInfoCancelUploadImg').hide();
$('#btInfoSave').hide();
$('#btInfoCancel').hide();
$('#btLoadingInfo').hide();

$('#btInfoEdit').on('click',function(){
  $('#btInfoEdit').hide();
  $('#btInfoSave').show();
  $('#btInfoCancel').show();
  document.getElementById("textTopicInfo").disabled = false;
  document.getElementById("textLinkInfo").disabled = false;
});

$('#btInfoCancel').on('click',function(){
  document.getElementById("textTopicInfo").disabled = true;
  document.getElementById("textLinkInfo").disabled = true;
  $('#btInfoEdit').show();
  $('#btInfoSave').hide();
  $('#btInfoCancel').hide();
});

$('#fileUploadImageInfo').on('change',function(event){
  selectImageInfo = event.target.files[0];
  $('#btInfoUploadImg').show();
  $('#btInfoCancelUploadImg').show();
});

$('#btInfoCancelUploadImg').on('click',function(){
  $('#fileUploadImageInfo').val("");
  $('#fileUploadImageInfo').show();
  $('#btInfoUploadImg').hide();
  $('#btInfoCancelUploadImg').hide();
});


 indexSelectCourse = document.getElementById("selectCourse").selectedIndex;
 indexSelectInfoLevel = document.getElementById("selectInfoLevel").selectedIndex;
 indexSelectLevel = document.getElementById("selectLevel").selectedIndex;

 if(indexSelectInfoLevel==0){
   var dbInfoBachelor = dbRef.ref('website/index/info/infobachelor');
   if(indexSelectLevel==0){
     dbInfoBachelor.child('topic_first').on('value',snap => {
       $('#textTopicInfo').val(snap.val());
     });
     dbInfoBachelor.child('link_first').on('value',snap => {
       $('#textLinkInfo').val(snap.val());
     });
     dbInfoBachelor.child('img_first').on('value',snap => {
       $('#imgInfo').attr("src",snap.val());
     });
   }else if(indexSelectLevel==1){
     dbInfoBachelor.child('topic_second').on('value',snap => {
       $('#textTopicInfo').val(snap.val());
     });
     dbInfoBachelor.child('link_second').on('value',snap => {
       $('#textLinkInfo').val(snap.val());
     });
     dbInfoBachelor.child('img_second').on('value',snap => {
       $('#imgInfo').attr("src",snap.val());
     });
   }else if(indexSelectLevel==2){
     dbInfoBachelor.child('topic_third').on('value',snap => {
       $('#textTopicInfo').val(snap.val());
     });
     dbInfoBachelor.child('link_third').on('value',snap => {
       $('#textLinkInfo').val(snap.val());
     });
     dbInfoBachelor.child('img_third').on('value',snap => {
       $('#imgInfo').attr("src",snap.val());
     });
   }
 }else if(indexSelectInfoLevel==1){
   var dbInfoGraduate = dbRef.ref('website/index/info/infograduate');
   if(indexSelectLevel==0){
     dbInfoGraduate.child('topic_first').on('value',snap => {
       $('#textTopicInfo').val(snap.val());
     });
     dbInfoGraduate.child('link_first').on('value',snap => {
       $('#textLinkInfo').val(snap.val());
     });
     dbInfoGraduate.child('img_first').on('value',snap => {
       $('#imgInfo').attr("src",snap.val());
     });
   }else if(indexSelectLevel==1){
     dbInfoGraduate.child('topic_second').on('value',snap => {
       $('#textTopicInfo').val(snap.val());
     });
     dbInfoGraduate.child('link_second').on('value',snap => {
       $('#textLinkInfo').val(snap.val());
     });
     dbInfoGraduate.child('img_second').on('value',snap => {
       $('#imgInfo').attr("src",snap.val());
     });
   }else if(indexSelectLevel==2){
     dbInfoGraduate.child('topic_third').on('value',snap => {
       $('#textTopicInfo').val(snap.val());
     });
     dbInfoGraduate.child('link_third').on('value',snap => {
       $('#textLinkInfo').val(snap.val());
     });
     dbInfoGraduate.child('img_third').on('value',snap => {
       $('#imgInfo').attr("src",snap.val());
     });
   }
 }

 $('#selectInfoLevel').on('change',function(){
   indexSelectInfoLevel = document.getElementById("selectInfoLevel").selectedIndex;
   if(indexSelectInfoLevel==0){
     var dbInfoBachelor = dbRef.ref('website/index/info/infobachelor');
     if(indexSelectLevel==0){
       dbInfoBachelor.child('topic_first').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoBachelor.child('link_first').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoBachelor.child('img_first').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }else if(indexSelectLevel==1){
       dbInfoBachelor.child('topic_second').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoBachelor.child('link_second').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoBachelor.child('img_second').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }else if(indexSelectLevel==2){
       dbInfoBachelor.child('topic_third').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoBachelor.child('link_third').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoBachelor.child('img_third').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }
   }else if(indexSelectInfoLevel==1){
     var dbInfoGraduate = dbRef.ref('website/index/info/infograduate');
     if(indexSelectLevel==0){
       dbInfoGraduate.child('topic_first').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoGraduate.child('link_first').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoGraduate.child('img_first').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }else if(indexSelectLevel==1){
       dbInfoGraduate.child('topic_second').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoGraduate.child('link_second').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoGraduate.child('img_second').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }else if(indexSelectLevel==2){
       dbInfoGraduate.child('topic_third').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoGraduate.child('link_third').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoGraduate.child('img_third').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }
   }
 });

 $('#selectLevel').on('change',function(){
   indexSelectLevel = document.getElementById("selectLevel").selectedIndex;
   if(indexSelectInfoLevel==0){
     var dbInfoBachelor = dbRef.ref('website/index/info/infobachelor');
     if(indexSelectLevel==0){
       dbInfoBachelor.child('topic_first').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoBachelor.child('link_first').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoBachelor.child('img_first').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }else if(indexSelectLevel==1){
       dbInfoBachelor.child('topic_second').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoBachelor.child('link_second').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoBachelor.child('img_second').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }else if(indexSelectLevel==2){
       dbInfoBachelor.child('topic_third').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoBachelor.child('link_third').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoBachelor.child('img_third').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }
   }else if(indexSelectInfoLevel==1){
     var dbInfoGraduate = dbRef.ref('website/index/info/infograduate');
     if(indexSelectLevel==0){
       dbInfoGraduate.child('topic_first').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoGraduate.child('link_first').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoGraduate.child('img_first').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }else if(indexSelectLevel==1){
       dbInfoGraduate.child('topic_second').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoGraduate.child('link_second').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoGraduate.child('img_second').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }else if(indexSelectLevel==2){
       dbInfoGraduate.child('topic_third').on('value',snap => {
         $('#textTopicInfo').val(snap.val());
       });
       dbInfoGraduate.child('link_third').on('value',snap => {
         $('#textLinkInfo').val(snap.val());
       });
       dbInfoGraduate.child('img_third').on('value',snap => {
         $('#imgInfo').attr("src",snap.val());
       });
     }
   }
 });

 $('#btInfoSave').on('click',function(){
   var updateTopic={};
   var updateLink={};
   var dbInfo = firebase.database().ref('website/index/info');

   var postData = {
     topic_first:$('#textTopicInfo').val(),
     topic_second:$('#textTopicInfo').val(),
     topic_third:$('#textTopicInfo').val(),
     link_first:$('#textLinkInfo').val(),
     link_second:$('#textLinkInfo').val(),
     link_third:$('#textLinkInfo').val()
   };

   if(indexSelectInfoLevel==0){
     var dbInfoBachelor = dbInfo.child('infobachelor');
     if(indexSelectLevel==0){
       updateTopic['topic_first'] = postData.topic_first;
       updateLink['link_first'] = postData.link_first;
       dbInfoBachelor.update(updateTopic);
       dbInfoBachelor.update(updateLink);
     }else if(indexSelectLevel==1){
       updateTopic['topic_second'] = postData.topic_second;
       updateLink['link_second'] = postData.link_second;
       dbInfoBachelor.update(updateTopic);
       dbInfoBachelor.update(updateLink);
     }else if(indexSelectLevel==2){
       updateTopic['topic_third'] = postData.topic_third;
       updateLink['link_third'] = postData.link_third;
       dbInfoBachelor.update(updateTopic);
       dbInfoBachelor.update(updateLink);
     }
   }else if(indexSelectInfoLevel==1){
     var dbInfoGraduate = dbInfo.child('infograduate');
     if(indexSelectLevel==0){
       updateTopic['topic_first'] = postData.topic_first;
       updateLink['link_first'] = postData.link_first;
       dbInfoGraduate.update(updateTopic);
       dbInfoGraduate.update(updateLink);
     }else if(indexSelectLevel==1){
       updateTopic['topic_second'] = postData.topic_second;
       updateLink['link_second'] = postData.link_second;
       dbInfoGraduate.update(updateTopic);
       dbInfoGraduate.update(updateLink);
     }else if(indexSelectLevel==2){
       updateTopic['topic_third'] = postData.topic_third;
       updateLink['link_third'] = postData.link_third;
       dbInfoGraduate.update(updateTopic);
       dbInfoGraduate.update(updateLink);
     }
   }

   $('#btInfoEdit').show();
   $('#btInfoSave').hide();
   $('#btInfoCancel').hide();
   document.getElementById("textTopicInfo").disabled = true;
   document.getElementById("textLinkInfo").disabled = true;
 });

 $('#btInfoUploadImg').on('click',function(){
   $('#btInfoUploadImg').hide();
   $('#btInfoCancelUploadImg').hide();
   $('#btLoadingInfo').show();
   uploadImageInfo();
 });

 function uploadImageInfo(){
   var filename= selectImageInfo.name;
   var storageRef = firebase.storage().ref('/InfoImage/' + filename);
   var uplodadTask = storageRef.put(selectImageInfo);

   uplodadTask.on('state_changed',function(sanpshot){

   },function(error){

   },function(){
     var downloadURL = uplodadTask.snapshot.downloadURL;
     var update = {};
     var postData = {
       img_first:downloadURL,
       img_second:downloadURL,
       img_third:downloadURL
     };
     var deleteRefInfo;
     var dbRefInfo = firebase.database().ref('website/index/info');

     if(indexSelectInfoLevel==0){
       var dbInfoBachelor = dbRefInfo.child('infobachelor');
       if(indexSelectLevel==0){
         var dbImgFirst = dbInfoBachelor.child('img_first');
           dbImgFirst.on('value',snap => {
             deleteRefInfo = firebase.storage().refFromURL(snap.val());
           });
       }else if(indexSelectLevel==1){
         var dbImgSecond = dbInfoBachelor.child('img_second');
           dbImgSecond.on('value',snap => {
             deleteRefInfo = firebase.storage().refFromURL(snap.val());
           });
       }else if(indexSelectLevel==2){
         var dbImgThird = dbInfoBachelor.child('img_third');
           dbImgThird.on('value',snap => {
             deleteRefInfo = firebase.storage().refFromURL(snap.val());
           });
       }
     }else if(indexSelectInfoLevel==1){
       var dbInfoGraduate = dbRefInfo.child('infograduate');
       if(indexSelectLevel==0){
         var dbImgFirst = dbInfoGraduate.child('img_first');
           dbImgFirst.on('value',snap => {
             deleteRefInfo = firebase.storage().refFromURL(snap.val());
           });
       }else if(indexSelectLevel==1){
         var dbImgSecond = dbInfoGraduate.child('img_second');
           dbImgSecond.on('value',snap => {
             deleteRefInfo = firebase.storage().refFromURL(snap.val());
           });
       }else if(indexSelectLevel==2){
         var dbImgThird = dbInfoGraduate.child('img_third');
           dbImgThird.on('value',snap => {
             deleteRefInfo = firebase.storage().refFromURL(snap.val());
           });
       }
     }

     deleteRefInfo.delete().then(function() {
     }).catch(function(error) {

     });

     if(indexSelectInfoLevel==0){
       var dbInfoBachelor = dbRefInfo.child('infobachelor');
       if(indexSelectLevel==0){
         update['img_first'] = postData.img_first;
         dbInfoBachelor.update(update);
       }else if(indexSelectLevel==1){
         update['img_second'] = postData.img_second;
         dbInfoBachelor.update(update);
       }else if(indexSelectLevel==2){
         update['img_third'] = postData.img_third;
         dbInfoBachelor.update(update);
       }
     }else if(indexSelectInfoLevel==1){
       var dbInfoGraduate = dbRefInfo.child('infograduate');
       if(indexSelectLevel==0){
         update['img_first'] = postData.img_first;
         dbInfoGraduate.update(update);
       }else if(indexSelectLevel==1){
         update['img_second'] = postData.img_second;
         dbInfoGraduate.update(update);
       }else if(indexSelectLevel==2){
         update['img_third'] = postData.img_third;
         dbInfoGraduate.update(update);
       }
     }
     $('#fileUploadImageInfo').val("");
     $('#btInfoUploadImg').hide();
     $('#btInfoCancelUploadImg').hide();
     $('#btLoadingInfo').hide();
   });
 }

   /*------------------------ End -----------------------------------*/


<!--========================================================================-->
})
