$(document).ready(function(){
  //create firebase references
 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var selectedFile;

  $.LoadingOverlay("show");

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
    if(level == "คณาจารย์และบุคลากร"){
    $('#list_teacher').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
        "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
        "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
        " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
      }
  }
   $.LoadingOverlay("hide");

 });

 $('#list_teacher').on('click','.btn-edit-user',function(){
   var image = $(this).closest('tr').find(".avatar").attr("src");
   var name =  $(this).closest('tr').find(".txtname").text();
   var email =  $(this).closest('tr').find(".txtemail").text();
   var phone =  $(this).closest('tr').find(".txtphone").text();
   $('#imgShowEdit').attr("src",image);
   $('#nameEditUser').val(name);
   $('#emailEditUser').val(email);
   $('#phoneEditUser').val(phone);
   $('#editUserModal').modal('show');
 });

 var idDeleteTeacher;
 var rowDeleteTeacher;
 $('#list_teacher').on('click','.btn-delete-user',function(){
   idDeleteTeacher = $(this).closest('tr').attr("id");
   $('#confrimDeleteUserModal').modal('show');
     rowDeleteTeacher = $(this).closest('tr');
 });

 // $('#btConfrimDelete').on('click',function(){
 //   rootRef.child(idDeleteTeacher).remove().then(function(){
 //       $('#deleteUserModal').modal('show');
 //       rowDeleteTeacher.remove();
 //   });
 // })


 rootRef.on("child_added",snap => {

   var key = snap.key;
   var level = snap.child("level").val();
   var email = snap.child("email").val();
   var phone = snap.child("telephone").val();
   var image = snap.child("image").val();
   var name = snap.child("name").val();
   var office = snap.child("office").val();


 if(key != sessionStorage.getItem("userId")){
   if(level == "เจ้าหน้าที่บริหารงานทั่วไป"){
   $('#list_staff').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
       "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
       "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
       " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
     }
 }

});

$('#list_staff').on('click','.btn-edit-user',function(){
  var image = $(this).closest('tr').find(".avatar").attr("src");
  var name =  $(this).closest('tr').find(".txtname").text();
  var email =  $(this).closest('tr').find(".txtemail").text();
  var phone =  $(this).closest('tr').find(".txtphone").text();
  $('#imgShowEdit').attr("src",image);
  $('#nameEditUser').val(name);
  $('#emailEditUser').val(email);
  $('#phoneEditUser').val(phone);
  $('#editUserModal').modal('show');
});

var idDeleteStaff;
var rowDeleteStaff;
$('#list_staff').on('click','.btn-delete-user',function(){
  idDeleteStaff = $(this).closest('tr').attr("id");
  $('#confrimDeleteUserModal').modal('show');
    rowDeleteStaff = $(this).closest('tr');
});

// $('#btConfrimDelete').on('click',function(){
//   rootRef.child(idDeleteStaff).remove().then(function(){
//       $('#deleteUserModal').modal('show');
//       rowDeleteStaff.remove();
//   });
// })


rootRef.on("child_added",snap => {

 var key = snap.key;
 var level = snap.child("level").val();
 var email = snap.child("email").val();
 var phone = snap.child("telephone").val();
 var image = snap.child("image").val();
 var name = snap.child("name").val();
 var office = snap.child("office").val();


if(key != sessionStorage.getItem("userId")){
 if(level == "ผู้ช่วยสอนและวิจัย"){
 $('#list_ta').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
     "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
     "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
     " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
   }
}
});
var idUpdate;
$('#list_ta').on('click','.btn-edit-user',function(){
  idUpdate = $(this).closest('tr').attr("id");
  var image = $(this).closest('tr').find(".avatar").attr("src");
  var name =  $(this).closest('tr').find(".txtname").text();
  var email =  $(this).closest('tr').find(".txtemail").text();
  var phone =  $(this).closest('tr').find(".txtphone").text();
  $('#imgShowEdit').attr("src",image);
  $('#nameEditUser').val(name);
  $('#emailEditUser').val(email);
  $('#phoneEditUser').val(phone);
  $('#editUserModal').modal('show');
});

var idDeleteTa;
var rowDeleteTa;
$('#list_ta').on('click','.btn-delete-user',function(){
  idDeleteTa = $(this).closest('tr').attr("id");
  $('#confrimDeleteTaModal').modal('show');
    rowDeleteTa = $(this).closest('tr');
});

$('#btConfrimDelete').on('click',function(){
  rootRef.child(idDeleteTa).remove().then(function(){
      $('#deleteUserModal').modal('show');
      rowDeleteTa.remove();
  });
})


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
   $('#messageModalWait').html("กำลังบันทึกข้อมูล...  "+ spanText('<i class="fa fa-circle-o-notch fa-spin fa-lg"</i>', ['center', 'info']));
    $('#waitModal').modal('show');

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
           office:"border:8px solid #BDBDBD;",
           status:"",
           latitude:"",
           longitude:"",
           office_hour:{
             day_1:{
               day:"Monday",
               hour_1:"#ebebe0",
               hour_2:"#ebebe0",
               hour_3:"#ebebe0",
               hour_4:"#ebebe0",
               hour_5:"#ebebe0",
               hour_6:"#ebebe0",
               hour_7:"#ebebe0",
               hour_8:"#ebebe0"
             },
             day_2:{
               day:"Tuesday",
               hour_1:"#ebebe0",
               hour_2:"#ebebe0",
               hour_3:"#ebebe0",
               hour_4:"#ebebe0",
               hour_5:"#ebebe0",
               hour_6:"#ebebe0",
               hour_7:"#ebebe0",
               hour_8:"#ebebe0"
             },
             day_3:{
               day:"Wednesday",
               hour_1:"#ebebe0",
               hour_2:"#ebebe0",
               hour_3:"#ebebe0",
               hour_4:"#ebebe0",
               hour_5:"#ebebe0",
               hour_6:"#ebebe0",
               hour_7:"#ebebe0",
               hour_8:"#ebebe0"
             },
             day_4:{
               day:"Thursday",
               hour_1:"#ebebe0",
               hour_2:"#ebebe0",
               hour_3:"#ebebe0",
               hour_4:"#ebebe0",
               hour_5:"#ebebe0",
               hour_6:"#ebebe0",
               hour_7:"#ebebe0",
               hour_8:"#ebebe0"
             },
             day_5:{
               day:"Friday",
               hour_1:"#ebebe0",
               hour_2:"#ebebe0",
               hour_3:"#ebebe0",
               hour_4:"#ebebe0",
               hour_5:"#ebebe0",
               hour_6:"#ebebe0",
               hour_7:"#ebebe0",
               hour_8:"#ebebe0"
             }
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
                          $('#nameCreateUser').val("");
                          $('#emailCreateUser').val("");
                          $('#phoneCreateUser').val("");
                          $('#passwordCreateUser').val("");
                          $('#fileUploadImageCreateUser').val("");
                        })
                     $('#messageModalWait').html(spanText('บันทึกข้อมูลสำเร็จ', ['center', 'success']))

                     setTimeout(function() {
                        $('#waitModal').modal('hide');
                        $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');

                    },500);

                  }).catch(function(error){
                      console.log("Error creating user:", error);
                      $('#messageModalLabel').html(spanText(error.code, ['danger']))
                    });
                  }else {
                  //password and confirm password didn't match
                  $('#messageModalLabel').html(spanText("ไม่สามารถเพิ่มผู้ใช้ได้", ['danger']))
              }
          });
       });

  $('#btEditUser').on('click',function(){
    $('#editUserModal').modal('hide');
    var dataUpdate = {
      name:$('#nameEditUser').val(),
      email:$('#emailEditUser').val(),
      telephone:$('#phoneEditUser').val()
    };
    usersRef.child(idUpdate).update(dataUpdate);

  });

});

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
