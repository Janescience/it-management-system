$(document).ready(function(){

 $('#password').keypress(function(e){
      if(e.keyCode==13)
      $('#btLogin').click();
    });


 $('#btLogin').on('click',function (e) {
   e.preventDefault();
   if($('#email').val() != '' && $('#password').val() != ''){

     $('#messageModalLabel').html("Please wait..."+ spanText('<i class="fa fa-circle-o-notch fa-spin fa-lg"</i>' , ['center', 'info']));
     $('#messageModal').modal('show');

     var data = {
       email: $('#email').val(),
       password : $('#password').val()
     };

     firebase.auth().signInWithEmailAndPassword(data.email,data.password).then(function(authData){
       auth = authData;
       user = authData.user;
        setTimeout(function () {
          $('#messageModal').modal('hide');
          $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
          window.location.href = "index.php";
        })
     })
     .catch(function(error) {
          console.log("Login Failed!", error);
          $('#messageModalLabel').html(spanText(error.code, ['danger']))
          $('#messageModal').modal('show');
        });
   }else if($('#email').val() == '' || $('#password').val() == ''){
     $('#messageModalLabel').html(spanText('login failed!' , ['danger']))
     $('#messageModal').modal('show');
   }else{
     $('#messageModalLabel').html(spanText('login failed!' , ['danger']))
     $('#messageModal').modal('show');
   }
 });


})
