$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var selectedFile;

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

   var updates = {};
   var postData = {
     name:$('#nameProfile').val(),
     email:$('#emailProfile').val(),
     telephone:$('#phoneProfile').val()
   };
   firebase.database().ref('users').child(sessionStorage.getItem("userId")).update(postData);
   $('#btLoadingProfile').hide();
 }


})
