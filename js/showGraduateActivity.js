$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var activityRef = dbRef.ref("website/student/graduate/activity");
  var auth = null;


  var rootRef = activityRef;
  var selectedFile;

  var nameAct;
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

   var dbImage = rootRef.child(actName).child('activity_image');
   dbImage.on('child_added',snap => {
     var Image = snap.child('images').val();
     $('#ActvImage').append("<img src='"+Image+"' style='"+'border-radius: 25px'+"' class='"+'col-md-2'+"' border='"+'2'+"'/>");
   });
 // width='"+'80'+"' height='"+'80'+"'
   var dbVideo = rootRef.child(actName).child('activity_video');
   dbVideo.on('child_added',snap => {
     var Video = snap.child('videos').val();
     $('#ActvVideo').append("<video width='"+'220'+"'  height='"+'140'+"' controls class='"+'col-md-2'+""+""+'inset'+"'><source src='"+Video+"' type='"+'video/WebM'+"'></video>");
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

        $('#SaveEditGraduateActivityImage').hide();
        $('#CancelEditGraduateActivityImage').hide();
        $('#EditGraduateActivityImage').show();

      });
  // ========================================= End Cancel Edit Image Graduate Activity Button =========================================

  // ========================================= Save Edit Image Graduate Activity Button =========================================
  document.getElementById("GraduateActivityImage").addEventListener('change', function(p){
    $('#SaveEditGraduateActivityImage').on('click',function(e){
        e.preventDefault();




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
          $('#EditGraduateActivityImage').show();

        });
      });

  // ========================================= End Save Edit Image Graduate Activity Button =========================================

  // =========================================  Edit Video Graduate Activity Button =========================================

    $('#EditGraduateActivityVideo').on('click',function(e){
        e.preventDefault();

        $('#GraduateActivityVideo').prop('disabled', false);
        $('#selectActivity').prop('disabled', true);


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
          $('#SaveEditGraduateActivityVideo').hide();
          $('#CancelEditGraduateActivityVideo').hide();
          $('#EditGraduateActivityVideo').show();

        });
      });

  // ========================================= End Save Edit Video Graduate Activity Button =========================================

  // =========================================  Delete Graduate Activity Button =========================================

    $('#DeleteGraduateActivity').on('click',function(e){
        e.preventDefault();

        rootRef.child(actName).remove().then(function(){
            $('#deletePortModal').modal('show');
        });

        $('#selectActivity').empty();

            rootRef.on("child_added",snap => {
              var key = snap.key;
              var Name = snap.child('activity_name').val();

              $('#selectActivity').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Name +"</option>");

              $('#selectActivity').val("");

            });
      });
  // ========================================= End Delete Graduate Activity Button =========================================

});




    // $("#searchPort").keyup(function () {
    //   var searchTerm = $("#searchPort").val();
    //   var listItem = $('.results tbody').children('tr');
    //   var searchSplit = searchTerm.replace(/ /g, "'):containsi('");
    //
    //   $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
    //       return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    //     }
    //     });
    //   $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
    //   $(this).attr('visible','false');
    //   });
    //
    //   $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
    //   $(this).attr('visible','true');
    //   });
    //
    // var jobCount = $('.results tbody tr[visible="true"]').length;
    //   $('.counter').text(jobCount + ' item');
    //
    // if(jobCount == "0") {$('.no-result').show();
    // }else {$('.no-result').hide();}
    //
    //  });
