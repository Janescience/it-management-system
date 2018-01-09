$(document).ready(function(){
  //create firebase references
 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var selectedFile;

 $("#searchUser").keyup(function () {
   var searchTerm = $("#searchUser").val();
   var listItem = $('.results tbody').children('tr');
   var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

   $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
       return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
     }
     });
   $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
   $(this).attr('visible','false');
   });

   $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
   $(this).attr('visible','true');
   });

 var jobCount = $('.results tbody tr[visible="true"]').length;
   $('.counter').text(jobCount + ' item');

 if(jobCount == '0') {$('.no-result').show();}
   else {$('.no-result').hide();}

  });


  var rootRef = dbRef.ref().child("users");

  rootRef.on("child_added",snap => {

    var key = snap.key;
    var level = snap.child("level").val();
    var email = snap.child("email").val();
    var phone = snap.child("telephone").val();
    var image = snap.child("image").val();
    var name = snap.child("name").val();
    var office = snap.child("office").val();


  if(key != sessionStorage.getItem("userId")){

    $('#list_user').append("<tr id='"+snap.key+"'valign='"+'middle'+"'><td><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'img-circle'+"' width='"+'60'+"' height='"+'60'+"'>"+
    "<svg width='"+'90'+"' height='"+'90'+"'>"+
      "<circle cx='"+'45'+"' cy='"+'45'+"' r='"+'35'+"'  fill='"+office+"' stroke-width='"+'3'+"'/></svg></div></td>"+
        "<td>" + name + "</td><td>" + email +"</td><td>" + phone +"</td><td><span class='"+'label label-success'+"'>"+level+"</span></td>"+
        "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
        " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
      
  }
 });


 $('#btAddUser').on('click',function(e){
   e.preventDefault();
    $('#addUserModal').modal('show');
 });

 $('#fileUploadImageCreateUser').on('change',function(event){
   selectedFile = event.target.files[0];
 });

 $('#btCreateUser').on('click',function(e){
   e.preventDefault();
   $('#addUserModal').modal('hide');
   $('#messageModalLabel').html("Processing...  "+ spanText('<i class="fa fa-circle-o-notch fa-spin fa-lg"</i>', ['center', 'info']));
    $('#messageModal').modal('show');

    var filename= selectedFile.name;
    var storageRef = firebase.storage().ref('/ProfileImage/' + filename);
    var uplodadTask = storageRef.put(selectedFile);

    uplodadTask.on('state_changed',function(sanpshot){

    },function(error){

    },function(){
      var downloadURL = uplodadTask.snapshot.downloadURL;
      var data = {
           name:$('#nameCreateUser').val(),
           email: $('#emailCreateUser').val(),
           telephone: $('#phoneCreateUser').val(),
           image: downloadURL,
           level: $('#rankCreateUser').val(),
           office:"",
           status:"",
           academic_work :{
             academic:"-",
             research:"-"
           },
           education:{
             expertise:"-",
             his_education:"-"
           },
           work:{
             hiswork:"-",
             more_info:"-",
           }
         };

         var passwords = {
           password : $('#passwordCreateUser').val(), //get the pass from Form
         }


            if( data.email != '' && passwords.password != ''){
              firebase.auth().createUserWithEmailAndPassword(data.email, passwords.password).then(function(user){

                   console.log("Authenticated successfully with payload:", user);
                   auth = user;
                   usersRef
                        .child(user.uid)
                        .set(data)
                        .then(function(){
                          console.log("User Information Saved:", user.uid);
                        })
                     $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))

                     setTimeout(function() {
                        $('#messageModal').modal('hide');
                        $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');

                    },500);

                  }).catch(function(error){
                      console.log("Error creating user:", error);
                      $('#messageModalLabel').html(spanText(error.code, ['danger']))
                    });
                  }else {
                  //password and confirm password didn't match
                  $('#messageModalLabel').html(spanText("Create user failed!", ['danger']))
              }
          });
       });

});

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
