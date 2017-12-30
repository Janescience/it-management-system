$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var selectedFile;
 var indexSelect;

$('#btOpenModalEdu').on('click',function(){
  $('#addHisEduModal').modal('show');
});

$('#btOpenModalExpert').on('click',function(){
  $('#addExpertModal').modal('show');
});

  var rootRef = usersRef.child(sessionStorage.getItem("userId")).child('education').child('his_education');

  rootRef.on("child_added",snap => {
    var i = 1;
    i=i+1;
    var degree = snap.child("degree").val();
    var faculty = snap.child("faculty").val();
    var university = snap.child("university").val();
    var year = snap.child("year").val();

    $('#list_his_education').append("<tr><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox'+"'></label></td>"+"<td>" + degree + "</td>" +
                              "<td>" + faculty + "</td>" + "<td>" + university + "</td>" + "<td>" + year + "</td>"+
                             "<td><button id='"+'editUser'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                             "  <button id='"+'removeUser'+"' class='"+'btn btn-danger'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
  });

  var rootRef = usersRef.child(sessionStorage.getItem("userId")).child('education').child('expertise');

  rootRef.on("child_added",snap => {
    var detail = snap.child('detail').val();

    $('#list_expertise').append("<tr><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox'+"'></label></td><td>" + detail + "</td>" +
                             "<td><button id='"+'editUser'+"' class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                             "  <button id='"+'removeUser'+"' class='"+'btn btn-danger'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
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
