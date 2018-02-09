$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var activityRef = dbRef.ref("website/student/graduate/activity");
  var auth = null;


  var rootRef = activityRef;
  var selectedFile;

  var nameAct;

  var del;

  // var clickBtEditAct = 0;




// ========================================= Set initial Graduate Activity Modal =========================================
$('#GraduateActivityName').prop('disabled', true);
$('#GraduateActivityDetail').prop('disabled', true);
$('#GraduateActivityImage').prop('disabled', true);
$('#GraduateActivityVideo').prop('disabled', true);
$('#GraduateActivityDateFrom').prop('disabled', true);
$('#GraduateActivityDateTo').prop('disabled', true);
$('#ShowActivityStatus').prop('disabled', true);
$('#viewActImage').hide();
$('#viewActVideo').hide();

$('#SaveEditGraduateActivity').hide();
$('#CancelEditGraduateActivity').hide();

$('#SaveEditGraduateActivityImage').hide();
$('#CancelEditGraduateActivityImage').hide();

$('#SaveEditGraduateActivityVideo').hide();
$('#CancelEditGraduateActivityVideo').hide();


// ========================================= End Code =====================================================================

// ========================================= Get Graduate Activity Dropdown =========================================

  select = document.getElementById('selectActivity');

    rootRef.on("child_added",snap => {
      var key = snap.key;
      var Name = snap.child('activity_name').val();

      // image = snap.child('activity_image').val();


      $('#selectActivity').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Name +"</option>");

      $('#selectActivity').val("");

    });
// ========================================= End Graduate Activity Type =========================================

// ========================================= Put Graduate Activity To Input =========================================
  $('#selectActivity').on('change',function(){
    actName = $(this).children(":selected").attr("id");
   del = $(this).children(":selected");
   $('#ActvImage').empty();
   $('#ActvVideo').empty();
   $('#viewActImage').show();
   $('#viewActVideo').show();

   $('#GraduateActivityName').prop('disabled', true);
   $('#GraduateActivityDetail').prop('disabled', true);
   $('#GraduateActivityDateFrom').prop('disabled', true);
   $('#GraduateActivityDateTo').prop('disabled', true);
   $('#ShowActivityStatus').prop('disabled', false);

   $('#SaveEditGraduateActivity').hide();
   $('#CancelEditGraduateActivity').hide();

   var dbStatus = rootRef.child(actName).child('activity_show_status');
   dbStatus.on('value',snap => {
     var Status = snap.val();
     if (Status == 'checked'){
       // $("#ShowActivityStatus").prop("checked") == true;
       $("#ShowActivityStatus").prop('checked', true);

     }else if(Status == 'unchecked'){
       // $("#ShowActivityStatus").prop("checked") == false;
       $("#ShowActivityStatus").prop('checked', false);

     }

     $('#ShowActivityStatus').on('click',function(e){
       var check = $('#ShowActivityStatus').prop('checked');
       if(check){
         Status="checked";
       }else{
         Status="unchecked";
       }
       var stat = {
         activity_show_status:Status
       };
       rootRef.child(actName).update(stat);
       });
   });

   var dbName = rootRef.child(actName).child('activity_name');
   dbName.on('value',snap => {
     $('#GraduateActivityName').val(snap.val());
   });

   var dbDetail = rootRef.child(actName).child('activity_detail');
   dbDetail.on('value',snap => {
     $('#GraduateActivityDetail').val(snap.val());
   });

   var dbStart = rootRef.child(actName).child('activity_start');
   dbStart.on('value',snap => {
     $('#GraduateActivityDateFrom').val(snap.val());
   });

   var dbEnd = rootRef.child(actName).child('activity_end');
   dbEnd.on('value',snap => {
     $('#GraduateActivityDateTo').val(snap.val());
   });

    $('#ActvImage').empty();

   var dbImage = rootRef.child(actName).child('activity_image');
   dbImage.on('child_added',snap => {
      Image = snap.child('images').val();
      key = snap.key;

     $('#ActvImage').append("<div  class='"+'col-lg-3 col-md-3 col-sm-4'+"'>"+
             "<div  class='"+'el-card-item'+"'>"+
                 "<div class='"+'el-card-avatar el-overlay-1'+"'> <img src='"+Image+"' style='"+'border-radius: 10px;width:100%;'+"' alt='"+'user'+"'>"+
                     "<div class='"+'el-overlay'+"'>"+
                         "<ul id='"+key+"' class='"+'el-info'+"'>"+
                             "<a class='"+'image-popup-vertical-fit delete'+"'><i class='"+'fa fa-minus-circle btn btn-danger'+"'></i></a>"+
                         "</ul>"+
                     "</div>"+
                 "</div>"+
             "</div>"+
     "</div>");

   });

   $('#ActvImage').on('click','.delete',function(e){


     var id = $(this).closest('ul').attr("id");

     var dbImage = rootRef.child(actName).child('activity_image').child(id).child('images');
     dbImage.on('value',snap => {
      currentPicture =  snap.val();
     });

     // alert(currentPicture);

     var deleteRef;
     deleteRef = firebase.storage().refFromURL(currentPicture);
     deleteRef.delete().then(function() {
     }).catch(function(error) {
     });

     rootRef.child(actName).child('activity_image').child(id).remove().then(function(){
         $('#deletePortModal').modal('show');
     });
       // $(this).closest('ul').remove();

       $('#ActvImage').empty();

       var dbImage = rootRef.child(actName).child('activity_image');
       dbImage.on('child_added',snap => {
          Image = snap.child('images').val();
          key = snap.key;

          $('#ActvImage').append("<div  class='"+'col-lg-3 col-md-3 col-sm-4'+"'>"+
                  "<div  class='"+'el-card-item'+"'>"+
                      "<div class='"+'el-card-avatar el-overlay-1'+"'> <img src='"+Image+"' style='"+'border-radius: 10px;width:100%;'+"' alt='"+'user'+"'>"+
                          "<div class='"+'el-overlay'+"'>"+
                              "<ul id='"+key+"' class='"+'el-info'+"'>"+
                              "<a class='"+'image-popup-vertical-fit delete'+"'><i class='"+'fa fa-minus-circle btn btn-danger'+"'></i></a>"+
                              "</ul>"+
                          "</div>"+
                      "</div>"+
                  "</div>"+
          "</div>");

       });


     });

   var dbVideo = rootRef.child(actName).child('activity_video');
   dbVideo.on('child_added',snap => {
     var Video = snap.child('videos').val();
     key = snap.key;

     $('#ActvVideo').append("<div  class='"+'col-lg-3 col-md-3 col-sm-6'+"'>"+
                 "<video   style='"+'border-radius: 10px;'+"' width='"+'300px'+"' controls><source src='"+Video+"' type='"+'video/WebM'+"'></video>"+
                         "<ul id='"+key+"' class='"+'el-info'+"'>"+
                             "<a class='"+' video-popup-vertical-fit delete'+"'><i class='"+'fa fa-minus-circle btn btn-danger'+"'></i></a>"+
                         "</ul>"+
                       "</div>");
   });

   $('#ActvVideo').on('click','.delete',function(e){

     var id = $(this).closest('ul').attr("id");

     // alert(actName);

     var dbVideo = rootRef.child(actName).child('activity_video').child(id).child('videos');
     dbVideo.on('value',snap=> {
      currentVideo =  snap.val();
     });

     var deleteRef;
     deleteRef = firebase.storage().refFromURL(currentVideo);
     deleteRef.delete().then(function() {
     }).catch(function(error) {
     });

     rootRef.child(actName).child('activity_video').child(id).remove().then(function(){
         $('#deletePortModal').modal('show');
     });
       // $(this).closest('ul').remove();

       $('#ActvVideo').empty();

       var dbVideo = rootRef.child(actName).child('activity_video');
       dbVideo.on('child_added',snap => {
          Video = snap.child('videos').val();
          key = snap.key;

          $('#ActvVideo').append("<div  class='"+'col-lg-4 col-md-4 col-sm-6'+"'>"+
                      "<video  style='"+'height:150px;margin-left:35px'+"' controls><source src='"+Video+"' type='"+'video/WebM'+"'></video>"+
                              "<ul id='"+key+"' class='"+'el-info'+"'>"+
                                  "<a class='"+' video-popup-vertical-fit delete'+"'><i class='"+'fa fa-minus-circle btn btn-danger'+"'></i></a>"+
                              "</ul>"+
                            "</div>");

       });


     });
});

// ========================================= End Put Graduate Activity To Input =========================================

// =========================================  Edit Text Graduate Activity Button =========================================
  $('#EditGraduateActivity').on('click',function(e){
      e.preventDefault();

      $('#GraduateActivityName').prop('disabled', false);
      $('#GraduateActivityDetail').prop('disabled', false);
      $('#GraduateActivityDateFrom').prop('disabled', false);
      $('#GraduateActivityDateTo').prop('disabled', false);
      $('#selectActivity').prop('disabled', true);


      $('#EditGraduateActivity').hide();
      $('#SaveEditGraduateActivity').show();
      $('#CancelEditGraduateActivity').show();
    });

// ========================================= End Edit Text Graduate Activity Button =========================================

// =========================================  Cancel Edit Text Graduate Activity Button =========================================

  $('#CancelEditGraduateActivity').on('click',function(e){
      e.preventDefault();

      $('#GraduateActivityName').prop('disabled', true);
      $('#GraduateActivityDetail').prop('disabled', true);
      $('#GraduateActivityDateFrom').prop('disabled', true);
      $('#GraduateActivityDateTo').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);


      $('#SaveEditGraduateActivity').hide();
      $('#CancelEditGraduateActivity').hide();
      $('#EditGraduateActivity').show();

    });
// ========================================= End  Cancel Edit Text Graduate Activity Button =========================================

// ========================================= Save Edit Text Graduate Activity Button =========================================
  $('#SaveEditGraduateActivity').on('click',function(e){
      e.preventDefault();

      // clickBtEditAct = clickBtEditAct+1;


      var updateActdata = {

       activity_name:$('#GraduateActivityName').val(),
       activity_detail:$('#GraduateActivityDetail').val(),
       activity_start:$('#GraduateActivityDateFrom').val(),
       activity_end:$('#GraduateActivityDateTo').val()
     };

     rootRef.child(actName).update(updateActdata);

      $('#GraduateActivityName').prop('disabled', true);
      $('#GraduateActivityDetail').prop('disabled', true);
      $('#GraduateActivityDateFrom').prop('disabled', true);
      $('#GraduateActivityDateTo').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);


      $('#SaveEditGraduateActivity').hide();
      $('#CancelEditGraduateActivity').hide();
      $('#EditGraduateActivity').show();
      $('#EditActModal').modal('show');


      $('#selectActivity').empty();

          rootRef.on("child_added",snap => {
            var key = snap.key;
            var Name = snap.child('activity_name').val();

            $('#selectActivity').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Name +"</option>");

            $('#selectActivity').val("");

          });
    });

  // ========================================= End Save Edit Text Graduate Activity Button =========================================


  // =========================================  Edit Image Graduate Activity Button =========================================

    $('#EditGraduateActivityImage').on('click',function(e){
        e.preventDefault();

        $('#GraduateActivityImage').prop('disabled', false);
        $('#selectActivity').prop('disabled', true);
        $('#GraduateActivityImage').val("");
  			$('#GraduateActivityImageText').val("");


        $('#EditGraduateActivityImage').hide();
        $('#SaveEditGraduateActivityImage').show();
        $('#CancelEditGraduateActivityImage').show();
      });

  // ========================================= End Edit Image Graduate Activity Button =========================================

  // ========================================= Cancel Edit Image Graduate Activity Button =========================================
    $('#CancelEditGraduateActivityImage').on('click',function(e){
        e.preventDefault();

        $('#GraduateActivityImage').prop('disabled', true);
        $('#selectActivity').prop('disabled', false);
        $('#GraduateActivityImage').val("");
  			$('#GraduateActivityImageText').val("");

        $('#SaveEditGraduateActivityImage').hide();
        $('#CancelEditGraduateActivityImage').hide();
        $('#EditGraduateActivityImage').show();

      });
  // ========================================= End Cancel Edit Image Graduate Activity Button =========================================

  // ========================================= Save Edit Image Graduate Activity Button =========================================
  document.getElementById("GraduateActivityImage").addEventListener('change', function(p){
    $('#SaveEditGraduateActivityImage').on('click',function(e){
        e.preventDefault();

        // clickBtEditAct= clickBtEditAct+1;

                for (var i = 0; i < p.target.files.length; i++) {
                    var imageFile = p.target.files[i];
                    uploadImageAsPromise(imageFile);
                }

            //Handle waiting to upload each file using promise
            function uploadImageAsPromise (imageFile) {
                return new Promise(function (resolve, reject) {
                  var storageImagesRef = firebase.storage().ref("/Activity/Graduate/Image/"+actName+"/"+imageFile.name);
                    // var storageRef = firebase.storage().ref("/Activity/"+imageFile.name);

                    var ImagesTask = storageImagesRef.put(imageFile);

                    ImagesTask.on('state_changed',function(snapshot){

                    },function(error){

                    },function(){
                      var downloadImageURL = ImagesTask.snapshot.downloadURL;

                      // GraduateActivityImage.push(downloadImageURL);

                    //   qActImage = {
                    //     activity_image:GraduateActivityImage
                    // };
                    // firebase.database().ref('website/student').child('graduate').child('activity').child('image').push().set(downloadImageURL);
                    firebase.database().ref('website/student').child('graduate').child('activity').child(actName).child('activity_image').push().child('images').set(downloadImageURL).then(function(){
                     console.log("Added Graduate Activity Images :");
                    });
                });
            });
          }

          $('#GraduateActivityImage').prop('disabled',true);
          $('#selectActivity').prop('disabled', false);

          $('#GraduateActivityImage').val("");
          $('#SaveEditGraduateActivityImage').hide();
          $('#CancelEditGraduateActivityImage').hide();
          $('#GraduateActivityImage').val("");
    			$('#GraduateActivityImageText').val("");
          $('#EditGraduateActivityImage').show();
          $('#AddPicture').modal('show');


          // for(var i = 0;i< clickBtEditAct;i++){
          //   $('#list_expertise tr:last').remove();
          // }
        });
      });

  // ========================================= End Save Edit Image Graduate Activity Button =========================================

  // =========================================  Edit Video Graduate Activity Button =========================================

    $('#EditGraduateActivityVideo').on('click',function(e){
        e.preventDefault();

        $('#GraduateActivityVideo').prop('disabled', false);
        $('#selectActivity').prop('disabled', true);
        $('#GraduateActivityVideo').val("");
  			$('#GraduateActivityVideoText').val("");


        $('#EditGraduateActivityVideo').hide();
        $('#SaveEditGraduateActivityVideo').show();
        $('#CancelEditGraduateActivityVideo').show();
      });

  // ========================================= End Edit Video Graduate Activity Button =========================================

  // ========================================= Cancel Edit Video Graduate Activity Button =========================================

  $('#CancelEditGraduateActivityVideo').on('click',function(e){
      e.preventDefault();

      $('#GraduateActivityVideo').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);
      $('#GraduateActivityVideo').val("");
			$('#GraduateActivityVideoText').val("");

      $('#SaveEditGraduateActivityVideo').hide();
      $('#CancelEditGraduateActivityVideo').hide();
      $('#EditGraduateActivityVideo').show();

    });

  // ========================================= End Cancel Edit Video Graduate Activity Button =========================================

  // ========================================= Save Edit Video Graduate Activity Button =========================================

  document.getElementById("GraduateActivityVideo").addEventListener('change', function(v){
    $('#SaveEditGraduateActivityVideo').on('click',function(e){
        e.preventDefault();




              for (var i = 0; i < v.target.files.length; i++) {
                  var videoFile = v.target.files[i];

                  uploadVideoAsPromise(videoFile);
              }

            //Handle waiting to upload each file using promise
            function uploadVideoAsPromise (videoFile) {
                return new Promise(function (resolve, reject) {
                  var storageVideosRef = firebase.storage().ref("/Activity/Graduate/Video/"+actName+"/"+videoFile.name);

                    // var storageRef = firebase.storage().ref("/Activity/"+imageFile.name);

                    var VideosTask = storageVideosRef.put(videoFile);

                    VideosTask.on('state_changed',function(snapshot){

                    },function(error){

                    },function(){
                      var downloadVideoURL = VideosTask.snapshot.downloadURL;

                      // GraduateActivityImage.push(downloadImageURL);

                    //   qActImage = {
                    //     activity_image:GraduateActivityImage
                    // };
                    // firebase.database().ref('website/student').child('graduate').child('activity').child('image').push().set(downloadImageURL);
                    firebase.database().ref('website/student').child('graduate').child('activity').child(actName).child('activity_video').push().child('videos').set(downloadVideoURL).then(function(){
                     console.log("Added Graduate Activity Video :");
                    });
                });
            });
          }

          $('#GraduateActivityVideo').prop('disabled',true);
          $('#selectActivity').prop('disabled', false);
          $('#GraduateActivityVideo').val("");
    			$('#GraduateActivityVideoText').val("");

          $('#GraduateActivityVideo').val("");
          $('#SaveEditGraduateActivityVideo').hide();
          $('#CancelEditGraduateActivityVideo').hide();
          $('#EditGraduateActivityVideo').show();
          $('#AddVideo').modal('show');


        });
      });

  // ========================================= End Save Edit Video Graduate Activity Button =========================================

  // =========================================  Delete Graduate Activity Button =========================================

    $('#DeleteGraduateActivity').on('click',function(e){
        e.preventDefault();

        $('#BeforeDeleteActModal').modal('show');

        $('#btDeleteActConfirm').on('click',function(e){

          rootRef.child(actName).remove().then(function(){
              del.remove();

          $('#selectActivity').empty();

              rootRef.on("child_added",snap => {
                var key = snap.key;
                var Name = snap.child('activity_name').val();

                $('#selectActivity').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Name +"</option>");

                $('#selectActivity').val("");

              });


                        $('#GraduateActivityName').prop('disabled', true);
                        $('#GraduateActivityDetail').prop('disabled', true);
                        $('#GraduateActivityImage').prop('disabled', true);
                        $('#GraduateActivityVideo').prop('disabled', true);
                        $('#GraduateActivityDateFrom').prop('disabled', true);
                        $('#GraduateActivityDateTo').prop('disabled', true);
                        $('#ShowActivityStatus').prop('disabled', true);
                        $('#viewActImage').hide();
                        $('#viewActVideo').hide();

                        $('#SaveEditGraduateActivity').hide();
                        $('#CancelEditGraduateActivity').hide();

                        $('#SaveEditGraduateActivityImage').hide();
                        $('#CancelEditGraduateActivityImage').hide();

                        $('#SaveEditGraduateActivityVideo').hide();
                        $('#CancelEditGraduateActivityVideo').hide();



          });

          $('#deleteActModal').modal('show');

        });



      });
  // ========================================= End Delete Graduate Activity Button =========================================
});
