$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var activityRef = dbRef.ref("website/student/bechelor/activity");
  var auth = null;

  var countDeleteImage=0;
  var rootRef = activityRef;
  var selectedFile;

  var nameAct;

  var del;

  // var clickBtEditAct = 0;




// ========================================= Set initial Bechelor Activity Modal =========================================
$('#BechelorActivityName').prop('disabled', true);
$('#BechelorActivityDetail').prop('disabled', true);
$('#BechelorActivityImage').prop('disabled', true);
$('#BechelorActivityVideo').prop('disabled', true);
$('#BechelorActivityDateFrom').prop('disabled', true);
$('#BechelorActivityDateTo').prop('disabled', true);
$('#ShowActivityStatus').prop('disabled', true);
$('#viewActImage').hide();
$('#viewActVideo').hide();

$('#SaveEditBechelorActivity').hide();
$('#CancelEditBechelorActivity').hide();

$('#SaveEditBechelorActivityImage').hide();
$('#CancelEditBechelorActivityImage').hide();

$('#SaveEditBechelorActivityVideo').hide();
$('#CancelEditBechelorActivityVideo').hide();


// ========================================= End Code =====================================================================

// ========================================= Get Bechelor Activity Dropdown =========================================

  select = document.getElementById('selectActivity');

    rootRef.on("child_added",snap => {
      var key = snap.key;
      var Name = snap.child('activity_name').val();

      // image = snap.child('activity_image').val();


      $('#selectActivity').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Name +"</option>");

      $('#selectActivity').val("");

    });
// ========================================= End Bechelor Activity Type =========================================

// ========================================= Put Bechelor Activity To Input =========================================
  $('#selectActivity').on('change',function(){
    actName = $(this).children(":selected").attr("id");
   del = $(this).children(":selected");
   $('#ActvImage').empty();
   $('#ActvVideo').empty();
   $('#viewActImage').show();
   $('#viewActVideo').show();

   $('#BechelorActivityName').prop('disabled', true);
   $('#BechelorActivityDetail').prop('disabled', true);
   $('#BechelorActivityDateFrom').prop('disabled', true);
   $('#BechelorActivityDateTo').prop('disabled', true);
   $('#ShowActivityStatus').prop('disabled', false);

   $('#SaveEditBechelorActivity').hide();
   $('#CancelEditBechelorActivity').hide();

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
     $('#BechelorActivityName').val(snap.val());
   });

   var dbDetail = rootRef.child(actName).child('activity_detail');
   dbDetail.on('value',snap => {
     $('#BechelorActivityDetail').val(snap.val());
   });

   var dbStart = rootRef.child(actName).child('activity_start');
   dbStart.on('value',snap => {
     $('#BechelorActivityDateFrom').val(snap.val());
   });

   var dbEnd = rootRef.child(actName).child('activity_end');
   dbEnd.on('value',snap => {
     $('#BechelorActivityDateTo').val(snap.val());
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
     countDeleteImage = countDeleteImage+1;

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
                      "<div class='"+'el-card-avatar el-overlay-1'+"'> <img src='"+Image+"' width='"+'100px'+"' style='"+'border-radius: 10px;'+"' alt='"+'user'+"'>"+
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

     $('#ActvVideo').append("<div class='"+'card-block'+"'><div  class='"+'col-lg-3 col-md-3 col-sm-6'+"'>"+
                 "<video   style='"+'border-radius:10px;'+"' width='"+'200px'+"' controls><source src='"+Video+"' type='"+'video/WebM'+"'></video>"+
                         "<ul id='"+key+"' class='"+'el-info'+"'>"+
                             "<a class='"+' video-popup-vertical-fit delete'+"'><i class='"+'fa fa-minus-circle btn btn-danger'+"'></i></a>"+
                         "</ul>"+
                       "</div></div>");
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

// ========================================= End Put Bechelor Activity To Input =========================================

// =========================================  Edit Text Bechelor Activity Button =========================================
  $('#EditBechelorActivity').on('click',function(e){
      e.preventDefault();

      $('#BechelorActivityName').prop('disabled', false);
      $('#BechelorActivityDetail').prop('disabled', false);
      $('#BechelorActivityDateFrom').prop('disabled', false);
      $('#BechelorActivityDateTo').prop('disabled', false);
      $('#selectActivity').prop('disabled', true);


      $('#EditBechelorActivity').hide();
      $('#SaveEditBechelorActivity').show();
      $('#CancelEditBechelorActivity').show();
    });

// ========================================= End Edit Text Bechelor Activity Button =========================================

// =========================================  Cancel Edit Text Bechelor Activity Button =========================================

  $('#CancelEditBechelorActivity').on('click',function(e){
      e.preventDefault();

      $('#BechelorActivityName').prop('disabled', true);
      $('#BechelorActivityDetail').prop('disabled', true);
      $('#BechelorActivityDateFrom').prop('disabled', true);
      $('#BechelorActivityDateTo').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);


      $('#SaveEditBechelorActivity').hide();
      $('#CancelEditBechelorActivity').hide();
      $('#EditBechelorActivity').show();

    });
// ========================================= End  Cancel Edit Text Bechelor Activity Button =========================================

// ========================================= Save Edit Text Bechelor Activity Button =========================================
  $('#SaveEditBechelorActivity').on('click',function(e){
      e.preventDefault();

      // clickBtEditAct = clickBtEditAct+1;


      var updateActdata = {

       activity_name:$('#BechelorActivityName').val(),
       activity_detail:$('#BechelorActivityDetail').val(),
       activity_start:$('#BechelorActivityDateFrom').val(),
       activity_end:$('#BechelorActivityDateTo').val()
     };

     rootRef.child(actName).update(updateActdata);

      $('#BechelorActivityName').prop('disabled', true);
      $('#BechelorActivityDetail').prop('disabled', true);
      $('#BechelorActivityDateFrom').prop('disabled', true);
      $('#BechelorActivityDateTo').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);


      $('#SaveEditBechelorActivity').hide();
      $('#CancelEditBechelorActivity').hide();
      $('#EditBechelorActivity').show();
      $('#EditActModal').modal('show');


      $('#selectActivity').empty();

          rootRef.on("child_added",snap => {
            var key = snap.key;
            var Name = snap.child('activity_name').val();

            $('#selectActivity').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Name +"</option>");

            $('#selectActivity').val("");

          });
    });

  // ========================================= End Save Edit Text Bechelor Activity Button =========================================


  // =========================================  Edit Image Bechelor Activity Button =========================================

    $('#EditBechelorActivityImage').on('click',function(e){
        e.preventDefault();

        $('#BechelorActivityImage').prop('disabled', false);
        $('#selectActivity').prop('disabled', true);
        $('#BechelorActivityImage').val("");
  			$('#BechelorActivityImageText').val("");


        $('#EditBechelorActivityImage').hide();
        $('#SaveEditBechelorActivityImage').show();
        $('#CancelEditBechelorActivityImage').show();
      });

  // ========================================= End Edit Image Bechelor Activity Button =========================================

  // ========================================= Cancel Edit Image Bechelor Activity Button =========================================
    $('#CancelEditBechelorActivityImage').on('click',function(e){
        e.preventDefault();

        $('#BechelorActivityImage').prop('disabled', true);
        $('#selectActivity').prop('disabled', false);
        $('#BechelorActivityImage').val("");
  			$('#BechelorActivityImageText').val("");

        $('#SaveEditBechelorActivityImage').hide();
        $('#CancelEditBechelorActivityImage').hide();
        $('#EditBechelorActivityImage').show();

      });
  // ========================================= End Cancel Edit Image Bechelor Activity Button =========================================

  // ========================================= Save Edit Image Bechelor Activity Button =========================================
  document.getElementById("BechelorActivityImage").addEventListener('change', function(p){
    $('#SaveEditBechelorActivityImage').on('click',function(e){
        e.preventDefault();

        // clickBtEditAct= clickBtEditAct+1;

                for (var i = 0; i < p.target.files.length; i++) {
                    var imageFile = p.target.files[i];
                    uploadImageAsPromise(imageFile);
                }

            //Handle waiting to upload each file using promise
            function uploadImageAsPromise (imageFile) {
                return new Promise(function (resolve, reject) {
                  var storageImagesRef = firebase.storage().ref("/Activity/Bechelor/Image/"+actName+"/"+imageFile.name);
                    // var storageRef = firebase.storage().ref("/Activity/"+imageFile.name);

                    var ImagesTask = storageImagesRef.put(imageFile);

                    ImagesTask.on('state_changed',function(snapshot){

                    },function(error){

                    },function(){
                      var downloadImageURL = ImagesTask.snapshot.downloadURL;

                      // BechelorActivityImage.push(downloadImageURL);

                    //   qActImage = {
                    //     activity_image:BechelorActivityImage
                    // };
                    // firebase.database().ref('website/student').child('bechelor').child('activity').child('image').push().set(downloadImageURL);
                    firebase.database().ref('website/student').child('bechelor').child('activity').child(actName).child('activity_image').push().child('images').set(downloadImageURL).then(function(){

                     console.log("Added Bechelor Activity Images :");
                    });



                });

            });
          }

          $('#BechelorActivityImage').prop('disabled',true);
          $('#selectActivity').prop('disabled', false);

          $('#BechelorActivityImage').val("");
          $('#SaveEditBechelorActivityImage').hide();
          $('#CancelEditBechelorActivityImage').hide();
          $('#BechelorActivityImage').val("");
    			$('#BechelorActivityImageText').val("");
          $('#EditBechelorActivityImage').show();
          $('#AddPicture').modal('show');



        });
      });

  // ========================================= End Save Edit Image Bechelor Activity Button =========================================

  // =========================================  Edit Video Bechelor Activity Button =========================================

    $('#EditBechelorActivityVideo').on('click',function(e){
        e.preventDefault();

        $('#BechelorActivityVideo').prop('disabled', false);
        $('#selectActivity').prop('disabled', true);
        $('#BechelorActivityVideo').val("");
  			$('#BechelorActivityVideoText').val("");


        $('#EditBechelorActivityVideo').hide();
        $('#SaveEditBechelorActivityVideo').show();
        $('#CancelEditBechelorActivityVideo').show();
      });

  // ========================================= End Edit Video Bechelor Activity Button =========================================

  // ========================================= Cancel Edit Video Bechelor Activity Button =========================================

  $('#CancelEditBechelorActivityVideo').on('click',function(e){
      e.preventDefault();

      $('#BechelorActivityVideo').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);
      $('#BechelorActivityVideo').val("");
			$('#BechelorActivityVideoText').val("");

      $('#SaveEditBechelorActivityVideo').hide();
      $('#CancelEditBechelorActivityVideo').hide();
      $('#EditBechelorActivityVideo').show();

    });

  // ========================================= End Cancel Edit Video Bechelor Activity Button =========================================

  // ========================================= Save Edit Video Bechelor Activity Button =========================================

  document.getElementById("BechelorActivityVideo").addEventListener('change', function(v){
    $('#SaveEditBechelorActivityVideo').on('click',function(e){
        e.preventDefault();

              for (var i = 0; i < v.target.files.length; i++) {
                  var videoFile = v.target.files[i];

                  uploadVideoAsPromise(videoFile);
              }

            //Handle waiting to upload each file using promise
            function uploadVideoAsPromise (videoFile) {
                return new Promise(function (resolve, reject) {
                  var storageVideosRef = firebase.storage().ref("/Activity/Bechelor/Video/"+actName+"/"+videoFile.name);

                    // var storageRef = firebase.storage().ref("/Activity/"+imageFile.name);

                    var VideosTask = storageVideosRef.put(videoFile);

                    VideosTask.on('state_changed',function(snapshot){

                    },function(error){

                    },function(){
                      var downloadVideoURL = VideosTask.snapshot.downloadURL;

                      // BechelorActivityImage.push(downloadImageURL);

                    //   qActImage = {
                    //     activity_image:BechelorActivityImage
                    // };
                    // firebase.database().ref('website/student').child('bechelor').child('activity').child('image').push().set(downloadImageURL);
                    firebase.database().ref('website/student').child('bechelor').child('activity').child(actName).child('activity_video').push().child('videos').set(downloadVideoURL).then(function(){
                     console.log("Added Bechelor Activity Video :");
                    });
                });
            });
          }

          $('#BechelorActivityVideo').prop('disabled',true);
          $('#selectActivity').prop('disabled', false);
          $('#BechelorActivityVideo').val("");
    			$('#BechelorActivityVideoText').val("");

          $('#BechelorActivityVideo').val("");
          $('#SaveEditBechelorActivityVideo').hide();
          $('#CancelEditBechelorActivityVideo').hide();
          $('#EditBechelorActivityVideo').show();
          $('#AddVideo').modal('show');


        });
      });

  // ========================================= End Save Edit Video Bechelor Activity Button =========================================

  // =========================================  Delete Bechelor Activity Button =========================================

    $('#DeleteBechelorActivity').on('click',function(e){
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

              $('#BechelorActivityName').prop('disabled', true);
              $('#BechelorActivityDetail').prop('disabled', true);
              $('#BechelorActivityImage').prop('disabled', true);
              $('#BechelorActivityVideo').prop('disabled', true);
              $('#BechelorActivityDateFrom').prop('disabled', true);
              $('#BechelorActivityDateTo').prop('disabled', true);
              $('#ShowActivityStatus').prop('disabled', true);
              $('#viewActImage').hide();
              $('#viewActVideo').hide();

              $('#SaveEditBechelorActivity').hide();
              $('#CancelEditBechelorActivity').hide();

              $('#SaveEditBechelorActivityImage').hide();
              $('#CancelEditBechelorActivityImage').hide();

              $('#SaveEditBechelorActivityVideo').hide();
              $('#CancelEditBechelorActivityVideo').hide();

          });

          $('#deleteActModal').modal('show');


        });


      });
  // ========================================= End Delete Bechelor Activity Button =========================================
});
