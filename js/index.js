$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var user;
 var selectedFile;
 var selectImageCourse;
 var selectImageInfo;
 var indexSelect;
 var indexSelectCourse;
 var indexSelectInfoLevel;
 var indexSelectLevel;




<!--============================== ส่วนหัว ===================================-->
var dbTopicSlideFirst = dbRef.ref('website/index/header').child('textTopicFirst');
dbTopicSlideFirst.on('value',snap => {
  $('#textTopic').val(snap.val());
});
var dbDetailSlideFirst = dbRef.ref('website/index/header').child('textDetailFirst');
dbDetailSlideFirst.on('value',snap => {
  $('#textDetail').val(snap.val());
});

$('#selectHeaderSlide').on('change',function(){
  indexSelect = document.getElementById("selectHeaderSlide").selectedIndex;
if(indexSelect==0){
  var dbTopicSlideFirst = dbRef.ref('website/index/header').child('textTopicFirst');
  dbTopicSlideFirst.on('value',snap => {
    $('#textTopic').val(snap.val());
  });
  var dbDetailSlideFirst = dbRef.ref('website/index/header').child('textDetailFirst');
  dbDetailSlideFirst.on('value',snap => {
    $('#textDetail').val(snap.val());
  });
}else if(indexSelect==1){
  var dbTopicSlideSecond = dbRef.ref('website/index/header').child('textTopicSecond');
  dbTopicSlideSecond.on('value',snap => {
    $('#textTopic').val(snap.val());
  });
  var dbDetailSlideSecond = dbRef.ref('website/index/header').child('textDetailSecond');
  dbDetailSlideSecond.on('value',snap => {
    $('#textDetail').val(snap.val());
  });
 }
});

 $('#btEditHeader').on('click',function(){
    $('#editHeaderModal').modal('show');
 });

 var dbImageSlideFirst = dbRef.ref('website/index/header').child('imageSlideFirst');
  dbImageSlideFirst.on('value',snap => {
    $('#imageHeaderSlideFirst').attr("src",snap.val());
 });
 var dbImageSlideSecond = dbRef.ref('website/index/header').child('imageSlideSecond');
 dbImageSlideSecond.on('value',snap => {
   $('#imageHeaderSlideSecond').attr("src",snap.val());
 });
 var dbTopicSlideFirst = dbRef.ref('website/index/header').child('textTopicFirst');
 dbTopicSlideFirst.on('value',snap => {
   document.getElementById('showTopicFirst').innerText =snap.val();
 });
 var dbDetailSlideFirst = dbRef.ref('website/index/header').child('textDetailFirst');
 dbDetailSlideFirst.on('value',snap => {
  document.getElementById('showDetailFirst').innerText =snap.val();
 });

 var dbTopicSlideSecond = dbRef.ref('website/index/header').child('textTopicSecond');
 dbTopicSlideSecond.on('value',snap => {
 document.getElementById('showTopicSecond').innerText =snap.val();
 });
 var dbDetailSlideSecond = dbRef.ref('website/index/header').child('textDetailSecond');
 dbDetailSlideSecond.on('value',snap => {
 document.getElementById('showDetailSecond').innerText =snap.val();
 });

 $('#btUploadImageHeader').hide();
 $('#btClearTextFile').hide();
 $('#btLoading').hide();

 $('#fileUploadImageHeader').on('change',function(event){
   selectedFile = event.target.files[0];
   document.getElementById("textTopic").disabled = false;
   document.getElementById("textDetail").disabled = false;
   $('#btUploadImageHeader').show();
   $('#btClearTextFile').show();
 });

 $('#btUploadImageHeader').on('click',function(e){
   e.preventDefault();
   $('#btUploadImageHeader').hide();
   $('#btClearTextFile').hide();
   $('#btClose').hide();
   $('#btLoading').show();
   uploadImage();
   pushHeaderHistory();
   document.getElementById("textTopic").disabled = true;
   document.getElementById("textDetail").disabled = true;

 });

 $('#btClearTextFile').on('click',function(){
   document.getElementById("textTopic").disabled = true;
   document.getElementById("textDetail").disabled = true;
   $('#fileUploadImageHeader').val("");
   $('#btUploadImageHeader').hide();
   $('#btClearTextFile').hide();
 });


 function uploadImage(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/HeaderSlideImages/' + filename);
   var uplodadTask = storageRef.put(selectedFile);

   uplodadTask.on('state_changed',function(sanpshot){

   },function(error){

   },function(){
     var downloadURL = uplodadTask.snapshot.downloadURL;
     var updates = {};
     var updatesTopic = {};
     var updatesDetail = {};
     var postData = {
       imageSlideFirst:downloadURL,
       imageSlideSecond:downloadURL,
       textTopicFirst:$('#textTopic').val(),
       textDetailFirst:$('#textDetail').val(),
       textTopicSecond:$('#textTopic').val(),
       textDetailSecond:$('#textDetail').val()

     };
     var deleteRef;

 if(indexSelect==0){
     var deleteImageSlideFirst = firebase.database().ref('website/index/header').child('imageSlideFirst');
     deleteImageSlideFirst.on('value',snap => {
       deleteRef = firebase.storage().refFromURL(snap.val());
     });

 }else if(indexSelect==1){
   var deleteImageSlideSecond = firebase.database().ref('website/index/header').child('imageSlideSecond');
   deleteImageSlideSecond.on('value',snap => {
     deleteRef = firebase.storage().refFromURL(snap.val());
   });

 }

 deleteRef.delete().then(function() {
 }).catch(function(error) {

 });

   if(indexSelect==0){
     updates['website/index/header/imageSlideFirst'] = postData.imageSlideFirst;
     updatesTopic['website/index/header/textTopicFirst'] = postData.textTopicFirst;
     updatesDetail['website/index/header/textDetailFirst'] = postData.textDetailFirst;
   }else if(indexSelect==1){
     updates['website/index/header/imageSlideSecond'] = postData.imageSlideSecond;
     updatesTopic['website/index/header/textTopicSecond'] = postData.textTopicSecond;
     updatesDetail['website/index/header/textDetailSecond'] = postData.textDetailSecond;
   }

     firebase.database().ref().update(updates);
     firebase.database().ref().update(updatesTopic);
     firebase.database().ref().update(updatesDetail);
     console.log(downloadURL);
     $('#fileUploadImageHeader').val("");
     $('#btLoading').hide();
     $('#btClose').show();
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

 indexSelect = document.getElementById("selectHeaderSlide").selectedIndex;
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
<!--========================================================================-->
})
