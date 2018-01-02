$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var selectedFile;
 var indexSelect;

 $('#headInterWork').hide();
 $('#tableInterWork').hide();
 $('#headNationJour').hide();
 $('#tableNationJour').hide();

 $('#interWork').on('click',function(){
   $('#iconNationJour').attr("class","fa fa-chevron-right");
   $('#iconInterWork').attr("class","fa fa-check text-info");

   $('#headInterWork').show();
   $('#tableInterWork').show();
   $('#headNationJour').hide();
   $('#tableNationJour').hide();
 });

 $('#nationJour').on('click',function(){
   $('#iconNationJour').attr("class","fa fa-check text-info");
   $('#iconInterWork').attr("class","fa fa-chevron-right");

   $('#headNationJour').show();
   $('#tableNationJour').show();
   $('#headInterWork').hide();
   $('#tableInterWork').hide();
 });

$('#btOpenModalEdu').on('click',function(){
  $('#addHisEduModal').modal('show');
});

$('#btOpenModalExpert').on('click',function(){
  $('#addExpertModal').modal('show');
});

$('#btOpenModalWork').on('click',function(){
  $('#addWorkModal').modal('show');
});

$('#btOpenModalExp').on('click',function(){
  $('#addExpModal').modal('show');
});

  var rootRefEducation = usersRef.child(sessionStorage.getItem("userId")).child('education').child('his_education');

  rootRefEducation.on("child_added",snap => {

    var degree = snap.child("degree").val();
    var faculty = snap.child("faculty").val();
    var university = snap.child("university").val();
    var year = snap.child("year").val();

    $('#list_his_education').append("<tr><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox'+"'></label></td>"+"<td>" + degree + "</td>" +
                              "<td>" + faculty + "</td>" + "<td>" + university + "</td>" + "<td>" + year + "</td>"+
                             "<td><button id='"+'editHisEdu'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                             " <button id='"+'removeHisEdu'+"' class='"+'btn btn-inverse'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
  });

  var rootRefExpert = usersRef.child(sessionStorage.getItem("userId")).child('education').child('expertise');

  rootRefExpert.on("child_added",snap => {
    var snapkey = snap.key;
    var detail = snap.child('detail').val();

    $('#list_expertise').append("<tr><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox'+"'></label></td><td>" + detail + "</td>" +
                             "<td><button id='"+'editExpert'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                             "  <button id='"+'removeExpert'+"' class='"+'btn btn-inverse'+"' onclick='"+'delExpert()'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
  });

  var rootRefWork = usersRef.child(sessionStorage.getItem("userId")).child('work').child('his_work');

  rootRefWork.on("child_added",snap => {

    var start_time = snap.child("start_time").val();
    var finish_time = snap.child("finish_time").val();
    var address = snap.child("address").val();
    var work = snap.child("work").val();

    $('#list_his_work').append("<tr><td><input type='"+'checkbox'+"' id='"+'md_checkbox_work'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox_work'+"'></label></td>"+"<td>" + start_time +" ถึง "+ finish_time +"</td>" +
                              "<td>" + address + "</td>" + "<td>" + work + "</td>"+
                             "<td><button id='"+'editHisWork'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                             " <button id='"+'removeHisWork'+"' class='"+'btn btn-inverse'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
  });

  var rootRefExp = usersRef.child(sessionStorage.getItem("userId")).child('work').child('experience');

  rootRefExp.on("child_added",snap => {
    var exp = snap.child("exp").val();
    var start_time = snap.child("start_time").val();
    var finish_time = snap.child("finish_time").val();
    var detail = snap.child("detail").val();

    $('#list_exp').append("<tr><td><input type='"+'checkbox'+"' id='"+'md_checkbox_exp'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox_exp'+"'></label></td><td>" + exp + "</td>" + "<td>" +start_time +" ถึง "+ finish_time + "</td>"+"<td>" + detail + "</td>"+
                             "<td><button id='"+'editExp'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                             "  <button id='"+'removeExp'+"' class='"+'btn btn-inverse'+"' onclick='"+'delExpert()'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
  });




$('#btSubmitEdu').on('click',function(){
  $('#addHisEduModal').modal('hide');

  var data = {
    degree:$('#degreeHisEdu').val(),
    faculty:$('#facultyHisEdu').val(),
    university:$('#universityHisEdu').val(),
    year:$('#yearHisEdu').val()
  };

 usersRef.child(sessionStorage.getItem("userId")).child('education').child('his_education').push().set(data).then(function(){
   console.log("User Information Saved:", sessionStorage.getItem("userId"));
 });

});

$('#btSubmitExpert').on('click',function(){
  $('#addExpertModal').modal('hide');
  var data = {
    detail:$('#expertHisEdu').val()
  };
  usersRef.child(sessionStorage.getItem("userId")).child('education').child('expertise').push().set(data).then(function(){
    console.log("User Information Saved:", sessionStorage.getItem("userId"));
  });
});



$('#btSubmitWork').on('click',function(){
  $('#addWorkModal').modal('hide');

  var data = {
    start_time:$('#timeStartHisWork').val(),
    finish_time:$('#timeFinishHisWork').val(),
    address:$('#addressHisWork').val(),
    work:$('#workHisWork').val()
  };

 usersRef.child(sessionStorage.getItem("userId")).child('work').child('his_work').push().set(data).then(function(){
   console.log("Information Saved:", sessionStorage.getItem("userId"));
 });

});

$('#btSubmitExp').on('click',function(){
  $('#addExpModal').modal('hide');
  var data = {
    exp:$('#expExp').val(),
    start_time:$('#timeStartExp').val(),
    finish_time:$('#timeFinishExp').val(),
    detail:$('#detailExp').val()
  };
  usersRef.child(sessionStorage.getItem("userId")).child('work').child('experience').push().set(data).then(function(){
    console.log("Information Saved:", sessionStorage.getItem("userId"));
  });
});




 var dbName = usersRef.child(sessionStorage.getItem("userId")).child('name');
 dbName.on('value',snap => {
   $('#nameProfile').val(snap.val());
 });

 var dbEmail = usersRef.child(sessionStorage.getItem("userId")).child('email');
 dbEmail.on('value',snap => {
   $('#emailProfile').val(snap.val());
 });

 var dbPhone = usersRef.child(sessionStorage.getItem("userId")).child('telephone');
 dbPhone.on('value',snap => {
   $('#phoneProfile').val(snap.val());
 });

 var dbImage = usersRef.child(sessionStorage.getItem("userId")).child('image');
 dbImage.on('value',snap => {
   $('#imageProfile').attr("src",snap.val());
 });

 $('#btSetPassword').on('click',function(){
   var user = firebase.auth().currentUser;
   user.updatePassword($('#passwordUpdate').val()).then(function() {

         window.location = "login.php"

   }).catch(function(error) {
  // An error happened.
  });

 });


 $('#btUploadImageProfile').hide();
 $('#btClearTextFile').hide();

 $('#fileUploadImageProfile').on('change',function(event){
   selectedFile = event.target.files[0];
   $('#btUploadImageProfile').show();
   $('#btClearTextFile').show();
 });

 $('#btUploadImageProfile').on('click',function(event){
   $('#btUploadImageProfile').hide();
   $('#btClearTextFile').hide();
  $('#btLoadingProfile').show();
   uploadImageProfile();
 });

  $('#btClearTextFile').on('click',function(){
    $('#fileUploadImageProfile').val("");
    $('#btUploadImageProfile').hide();
    $('#btClearTextFile').hide();
  });

  $('#btUpdatePassword').on('click',function(){
    $('#changePassModal').modal('show');

  });

 function uploadImageProfile(){
   var filename= selectedFile.name;
   var storageRef = firebase.storage().ref('/ProfileImage/' + filename);
   var uplodadTask = storageRef.put(selectedFile);


     uplodadTask.on('state_changed',function(sanpshot){

     },function(error){

     },function(){
       var downloadURL = uplodadTask.snapshot.downloadURL;
       var updates = {};
       var postImage = {
         image:downloadURL
       };
       var deleteRef;
       var deleteImageProfile = firebase.database().ref('users').child(sessionStorage.getItem("userId")).child('image');
       deleteImageProfile.on('value',snap => {
         deleteRef = firebase.storage().refFromURL(snap.val());
       });
       deleteRef.delete().then(function() {
       }).catch(function(error) {

       });
       firebase.database().ref('users').child(sessionStorage.getItem("userId")).update(postImage);
       $('#fileUploadImageProfile').val("");
       $('#btLoadingProfile').hide();
     });
 }

 $('#btSubmitUpdateProfile').hide();
 $('#btCancelUpdateProfile').hide();
 $('#btLoadingProfile').hide();

 $('#btUpdateProfile').on('click',function(e){
   e.preventDefault();
   $('#btSubmitUpdateProfile').show();
   $('#btCancelUpdateProfile').show();
   document.getElementById("nameProfile").disabled = false;
   document.getElementById("emailProfile").disabled = false;
   document.getElementById("phoneProfile").disabled = false;
 });

 $('#btCancelUpdateProfile').on('click',function(){
   document.getElementById("nameProfile").disabled = true;
   document.getElementById("emailProfile").disabled = true;
   document.getElementById("phoneProfile").disabled = true;
   $('#btSubmitUpdateProfile').hide();
   $('#btCancelUpdateProfile').hide();
 });

 $('#btSubmitUpdateProfile').on('click',function(){
   document.getElementById("nameProfile").disabled = true;
   document.getElementById("emailProfile").disabled = true;
   document.getElementById("phoneProfile").disabled = true;
   $('#btSubmitUpdateProfile').hide();
   $('#btCancelUpdateProfile').hide();
    $('#btLoadingProfile').show();
    updateProfile();
 });

 function updateProfile(){

   var postData = {
     name:$('#nameProfile').val(),
     email:$('#emailProfile').val(),
     telephone:$('#phoneProfile').val()
   };
   firebase.database().ref('users').child(sessionStorage.getItem("userId")).update(postData);
   $('#btLoadingProfile').hide();
 }


})
