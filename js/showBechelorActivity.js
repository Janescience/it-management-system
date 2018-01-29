$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var activityRef = dbRef.ref("website/student/bechelor/activity");
  var auth = null;


  var rootRef = activityRef;
  var selectedFile;

  var nameAct;
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

// ========================================= Get Bechelor Portfolio Type Dropdown =========================================

  select = document.getElementById('selectActivity');

    rootRef.on("child_added",snap => {
      var key = snap.key;
      var Name = snap.child('activity_name').val();

      // image = snap.child('activity_image').val();


      $('#selectActivity').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Name +"</option>");

      $('#selectActivity').val("");

    });


// ========================================= End Bechelor Portfolio Type =========================================

  $('#selectActivity').on('change',function(){
   actName = $(this).children(":selected").attr("id");
   $('#ActvImage').empty();
   $('#ActvVideo').empty();
   $('#viewActImage').show();
   $('#viewActVideo').show();

   $('#BechelorActivityName').prop('disabled', true);
   $('#BechelorActivityDetail').prop('disabled', true);
   $('#BechelorActivityDateFrom').prop('disabled', true);
   $('#BechelorActivityDateTo').prop('disabled', true);
   $('#ShowActivityStatus').prop('disabled', true);

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

  $('#EditBechelorActivity').on('click',function(e){
      e.preventDefault();

      $('#BechelorActivityName').prop('disabled', false);
      $('#BechelorActivityDetail').prop('disabled', false);
      $('#BechelorActivityDateFrom').prop('disabled', false);
      $('#BechelorActivityDateTo').prop('disabled', false);
      $('#ShowActivityStatus').prop('disabled', false);
      $('#selectActivity').prop('disabled', true);


      $('#EditBechelorActivity').hide();
      $('#SaveEditBechelorActivity').show();
      $('#CancelEditBechelorActivity').show();
    });

  $('#CancelEditBechelorActivity').on('click',function(e){
      e.preventDefault();

      $('#BechelorActivityName').prop('disabled', true);
      $('#BechelorActivityDetail').prop('disabled', true);
      $('#BechelorActivityDateFrom').prop('disabled', true);
      $('#BechelorActivityDateTo').prop('disabled', true);
      $('#ShowActivityStatus').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);


      $('#SaveEditBechelorActivity').hide();
      $('#CancelEditBechelorActivity').hide();
      $('#EditBechelorActivity').show();

    });

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
      $('#ShowActivityStatus').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);


      $('#SaveEditBechelorActivity').hide();
      $('#CancelEditBechelorActivity').hide();
      $('#EditBechelorActivity').show();

      $('#selectActivity').empty();

          rootRef.on("child_added",snap => {
            var key = snap.key;
            var Name = snap.child('activity_name').val();

            $('#selectActivity').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Name +"</option>");

            $('#selectActivity').val("");

          });
    });

    $('#EditBechelorActivityImage').on('click',function(e){
        e.preventDefault();

        $('#BechelorActivityImage').prop('disabled', false);
        $('#selectActivity').prop('disabled', true);


        $('#EditBechelorActivityImage').hide();
        $('#SaveEditBechelorActivityImage').show();
        $('#CancelEditBechelorActivityImage').show();
      });

    $('#CancelEditBechelorActivityImage').on('click',function(e){
        e.preventDefault();

        $('#BechelorActivityImage').prop('disabled', true);
        $('#selectActivity').prop('disabled', false);

        $('#SaveEditBechelorActivityImage').hide();
        $('#CancelEditBechelorActivityImage').hide();
        $('#EditBechelorActivityImage').show();

      });


  document.getElementById("BechelorActivityImage").addEventListener('change', function(p){
    $('#SaveEditBechelorActivityImage').on('click',function(e){
        e.preventDefault();




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
          $('#EditBechelorActivityImage').show();

        });
      });

    $('#EditBechelorActivityVideo').on('click',function(e){
        e.preventDefault();

        $('#BechelorActivityVideo').prop('disabled', false);
        $('#selectActivity').prop('disabled', true);


        $('#EditBechelorActivityVideo').hide();
        $('#SaveEditBechelorActivityVideo').show();
        $('#CancelEditBechelorActivityVideo').show();
      });

  $('#CancelEditBechelorActivityVideo').on('click',function(e){
      e.preventDefault();

      $('#BechelorActivityVideo').prop('disabled', true);
      $('#selectActivity').prop('disabled', false);

      $('#SaveEditBechelorActivityVideo').hide();
      $('#CancelEditBechelorActivityVideo').hide();
      $('#EditBechelorActivityVideo').show();

    });

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
          $('#SaveEditBechelorActivityVideo').hide();
          $('#CancelEditBechelorActivityVideo').hide();
          $('#EditBechelorActivityVideo').show();

        });
      });

    $('#DeleteBechelorActivity').on('click',function(e){
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
