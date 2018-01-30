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
 var selectImageInfoBachelor,selectImageInfoGraduate,selectedInforBachelorEdit;
 var indexSelect;
 var indexSelectCourse;
 var indexSelectInfoLevel;
 var indexSelectLevel;
 var idHeader;
 var clickBtEditHeader = 0,clickBtEditInfoBachelor=0,clickBtEditInfoGraduate=0;
 var page,topic,action;


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
      $('#deleteModal').modal('show');
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
      page = $('#indexPage').text();
      topic = $('#textTopicEdit').val();
      action = "แก้ไขรูปภาพไสลด์";
      pushHistory();
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
     page = $('#indexPage').text();
     topic = $('#textTopic').val();
     action = "เพิ่มรูปภาพไสลด์";
     pushHistory();
   });

 }

 function pushHistory(){
   var nameValue;
   var dateTimeCurrent = new Date();

   var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
   nameHistory.on('value',snap => {
     nameValue = snap.val();
   });

   var dataHistory = {
     id:sessionStorage.getItem("userId"),
     name:nameValue,
     page:page,
     topic:topic,
     action:action,
     date:dateTimeCurrent.toDateString(),
     time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
   };

   firebase.database().ref('history').push().set(dataHistory);

   var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ "+"''"+topic+"''";
  window.location.href = "notify.php?message=" + message;
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
    page = $('#indexPage').text();
    topic = $('#selectCourse').val();
    action = "แก้ไขรูปภาพระดับการศึกษา";
    pushHistory();
  });
}
<!--========================================================================-->




<!--=============================== ข่าวสาร =================================-->
$('#btOpenModalBachelor').on('click',function(){
  $('#addInfoBachelorModal').modal('show');
});

$('#btOpenModalGraduate').on('click',function(){
  $('#addInfoGraduateModal').modal('show');
});

$('#fileUploadImageInfoBachelorAdd').on('change',function(event){
  selectImageInfoBachelor = event.target.files[0];
});

$('#fileUploadImageInfoGraduateAdd').on('change',function(event){
  selectImageInfoGraduate = event.target.files[0];
});

$('#btInfoBachelorAdd').on('click',function(){

  $('#addInfoBachelorModal').modal('hide');

  var filename = selectImageInfoBachelor.name;
  var storageRef = firebase.storage().ref('/InfoImage/' + filename);
  var uplodadTask = storageRef.put(selectImageInfoBachelor);

  uplodadTask.on('state_changed',function(sanpshot){

  },function(error){

  },function(){

    var downloadURL = uplodadTask.snapshot.downloadURL;

    var postInfoBachelor = {
      photo:downloadURL,
      topic:$('#textTopicInfoBachelorAdd').val(),
      url:$('#textLinkInfoBachelorAdd').val()
    };

    firebase.database().ref('website/index/info/infobachelor').push().set(postInfoBachelor);

    for(var i = 0;i< clickBtEditInfoBachelor;i++){
      $('#list_info_bachelor tr:last').remove();
    }
    page = $('#indexPage').text();
    topic = $('#textTopicInfoBachelorAdd').val();
    action = "เพิ่มข่าวสารระดับปริญญาตรี";
    pushHistory();
  });
});

var dbInfoBachelor =   firebase.database().ref('website/index/info/infobachelor');

dbInfoBachelor.on('child_added',snap=>{
  var photo = snap.child('photo').val();
  var topic = snap.child('topic').val();
  var url = snap.child('url').val();

  $('#list_info_bachelor').append("<tr id='"+snap.key+"'><td><img class='"+'img-info-bachelor'+"'src='"+photo+"' width='"+'120px'+"' style='"+'border-radius:10px'+"'></td>"+
                                  "<td class='"+'txttopic'+"'>"+topic+"</td><td ><a class='"+'txturl'+"' href='"+url+"'>"+'click me'+"</a></td>"+
                                  "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-info-bachelor'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                  " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-info-bachelor'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

$('#loaderInforBachelor').hide();
});

var idInfoBachelor;

$('#list_info_bachelor').on('click','.btn-edit-info-bachelor',function(){
  idInfoBachelor = $(this).closest('tr').attr('id');
  var photo = $(this).closest('tr').find(".img-info-bachelor").attr("src");
  var topic =  $(this).closest('tr').find(".txttopic").text();
  var url =  $(this).closest('tr').find(".txturl").attr("href");
  $('#imgInfoBachelorShow').attr("src",photo);
  $('#textTopicInfoBachelorEdit').val(topic);
  $('#textLinkInfoBachelorEdit').val(url);
  $('#editInfoBachelorModal').modal('show');
});

$('#list_info_bachelor').on('click','.btn-delete-info-bachelor',function(){
  var id = $(this).closest('tr').attr('id');
  dbInfoBachelor.child(id).remove().then(function(){
      $('#deleteModal').modal('show');
  });
    $(this).closest('tr').remove();
});

$('#btInfoBachelorEdit').on('click',function(){
  clickBtEditInfoBachelor= clickBtEditInfoBachelor+1;
  $('#btInfoBachelorEdit').hide();
  $('#btCloseInfoBachelorEdit').hide();
  $('#btLoadingInfoBachelorEdit').removeAttr("hidden");
  editInfoBachelor();
});

$('#fileUploadImageInfoBachelorEdit').on('change',function(event){
  selectedInforBachelorEdit = event.target.files[0];
});

function editInfoBachelor(){
  var filename= selectedInforBachelorEdit.name;
  var storageRef = firebase.storage().ref('/InfoImage/' + filename);
  var uplodadTask = storageRef.put(selectedInforBachelorEdit);

  uplodadTask.on('state_changed',function(sanpshot){

  },function(error){

  },function(){
    var downloadURL = uplodadTask.snapshot.downloadURL;
    var updateInfoBachelor = {
      photo:downloadURL,
      topic:  $('#textTopicInfoBachelorEdit').val(),
      url:  $('#textLinkInfoBachelorEdit').val(),

    };
    var deleteRef;
    var deleteImageInfoBachelor = firebase.database().ref('website/index/info/infobachelor').child(idInfoBachelor).child('photo');
    deleteImageInfoBachelor.on('value',snap => {
      deleteRef = firebase.storage().refFromURL(snap.val());
    });
    deleteRef.delete().then(function() {
    }).catch(function(error) {

    });
    firebase.database().ref('website/index/info/infobachelor').child(idInfoBachelor).update(updateInfoBachelor);
    $('#fileUploadImageInfoBachelorEdit').val("");
    $('.img-show').removeAttr("src");
    $('#textTopicInfoBachelorEdit').val("");
    $('#textLinkInfoBachelorEdit').val("");


    $('#btLoadingInfoBachelorEdit').attr("hidden","true");
    $('#btInfoBachelorEdit').show();
    $('#btCloseInfoBachelorEdit').show();
    $('#editInfoBachelorModal').modal('hide');

      $('#list_info_bachelor').empty();

      dbInfoBachelor.on('child_added',snap=>{
        var photo = snap.child('photo').val();
        var topic = snap.child('topic').val();
        var url = snap.child('url').val();

        $('#list_info_bachelor').append("<tr id='"+snap.key+"'><td><img class='"+'img-info-bachelor'+"'src='"+photo+"' width='"+'120px'+"' style='"+'border-radius:10px'+"'></td>"+
                                        "<td class='"+'txttopic'+"'>"+topic+"</td><td ><a class='"+'txturl'+"' href='"+url+"'>"+'click me'+"</a></td>"+
                                        "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-info-bachelor'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                        " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-info-bachelor'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
      });
      page = $('#indexPage').text();
      topic = $('#textTopicInfoBachelorEdit').val();
      action = "แก้ไขข่าวสารระดับปริญญาตรี";
      pushHistory();
  });
};


$('#btInfoGraduateAdd').on('click',function(){

  $('#addInfoGraduateModal').modal('hide');

  var filename = selectImageInfoGraduate.name;
  var storageRef = firebase.storage().ref('/InfoImage/' + filename);
  var uplodadTask = storageRef.put(selectImageInfoGraduate);

  uplodadTask.on('state_changed',function(sanpshot){

  },function(error){

  },function(){

    var downloadURL = uplodadTask.snapshot.downloadURL;

    var postInfoGraduate = {
      photo:downloadURL,
      topic:$('#textTopicInfoGraduateAdd').val(),
      url:$('#textLinkInfoGraduateAdd').val()
    };

    firebase.database().ref('website/index/info/infograduate').push().set(postInfoGraduate);
    page = $('#indexPage').text();
    topic = $('#textTopicInfoGraduateAdd').val();
    action = "เพิ่มข่าวสารระดับบัณฑิตศึกษา";
    pushHistory();
  });
});

var dbInfoGraduate =   firebase.database().ref('website/index/info/infograduate');

dbInfoGraduate.on('child_added',snap=>{

  var photo = snap.child('photo').val();
  var topic = snap.child('topic').val();
  var url = snap.child('url').val();

  $('#list_info_graduate').append("<tr id='"+snap.key+"'><td><img src='"+photo+"' class='"+'img-info-graduate'+"' width='"+'120px'+"' style='"+'border-radius:10px'+"'></td>"+
                                  "<td class='"+'txttopic'+"'>"+topic+"</td><td ><a class='"+'txturl'+"' href='"+url+"'>"+'click me'+"</a></td>"+
                                  "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-info-graduate'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                  " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-info-graduate'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

$('#loaderInforGraduate').hide();

});


var idInfoGraduate;

$('#list_info_graduate').on('click','.btn-edit-info-graduate',function(){
  idInfoGraduate = $(this).closest('tr').attr('id');
  var photo = $(this).closest('tr').find(".img-info-graduate").attr("src");
  var topic =  $(this).closest('tr').find(".txttopic").text();
  var url =  $(this).closest('tr').find(".txturl").attr("href");
  $('#imgInfoGraduateShow').attr("src",photo);
  $('#textTopicInfoGraduateEdit').val(topic);
  $('#textLinkInfoGraduateEdit').val(url);
  $('#editInfoGraduateModal').modal('show');
});

$('#list_info_graduate').on('click','.btn-delete-info-graduate',function(){
  var id = $(this).closest('tr').attr('id');
  dbInfoGraduate.child(id).remove().then(function(){
      $('#deleteModal').modal('show');
  });
    $(this).closest('tr').remove();
});

$('#btInfoGraduateEdit').on('click',function(){
  clickBtEditInfoGraduate= clickBtEditInfoGraduate+1;
  $('#btInfoGraduateEdit').hide();
  $('#btCloseInfoGraduateEdit').hide();
  $('#btLoadingInfoGraduateEdit').removeAttr("hidden");
  editInfoGraduate();
});

$('#fileUploadImageInfoGraduateEdit').on('change',function(event){
  selectedInforGraduateEdit = event.target.files[0];
});

function editInfoGraduate(){
  var filename= selectedInforGraduateEdit.name;
  var storageRef = firebase.storage().ref('/InfoImage/' + filename);
  var uplodadTask = storageRef.put(selectedInforGraduateEdit);

  uplodadTask.on('state_changed',function(sanpshot){

  },function(error){

  },function(){
    var downloadURL = uplodadTask.snapshot.downloadURL;
    var updateInfoGraduate = {
      photo:downloadURL,
      topic:  $('#textTopicInfoGraduateEdit').val(),
      url:  $('#textLinkInfoGraduateEdit').val(),

    };
    var deleteRef;
    var deleteImageInfoGraduate = firebase.database().ref('website/index/info/infograduate').child(idInfoGraduate).child('photo');
    deleteImageInfoGraduate.on('value',snap => {
      deleteRef = firebase.storage().refFromURL(snap.val());
    });
    deleteRef.delete().then(function() {
    }).catch(function(error) {

    });
    firebase.database().ref('website/index/info/infograduate').child(idInfoGraduate).update(updateInfoGraduate);
    $('#fileUploadImageInfoGraduateEdit').val("");
    $('.img-show').removeAttr("src");
    $('#textTopicInfoGraduateEdit').val("");
    $('#textLinkInfoGraduateEdit').val("");


    $('#btLoadingInfoGraduateEdit').attr("hidden","true");
    $('#btInfoGraduateEdit').show();
    $('#btCloseInfoGraduateEdit').show();
    $('#editInfoGraduateModal').modal('hide');

      $('#list_info_graduate').empty();

      dbInfoGraduate.on('child_added',snap=>{
        var photo = snap.child('photo').val();
        var topic = snap.child('topic').val();
        var url = snap.child('url').val();

        $('#list_info_graduate').append("<tr id='"+snap.key+"'><td><img class='"+'img-info-graduate'+"'src='"+photo+"' width='"+'120px'+"' style='"+'border-radius:10px'+"'></td>"+
                                        "<td class='"+'txttopic'+"'>"+topic+"</td><td ><a class='"+'txturl'+"' href='"+url+"'>"+'click me'+"</a></td>"+
                                        "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-info-graduate'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                        " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-info-graduate'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
      });

      page = $('#indexPage').text();
      topic =  $('#textTopicInfoGraduateEdit').val();
      action = "แก้ไขข่าวสารระดับบัณฑิตศึกษา";
      pushHistory();
  });
};





   /*------------------------ End -----------------------------------*/


<!--========================================================================-->
})
