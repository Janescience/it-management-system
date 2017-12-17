$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;

 $('#btSubmitUpdateProfile').hide();
 $('#btCancelUpdateProfile').hide();
 $('#btLoading').hide();

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

})
