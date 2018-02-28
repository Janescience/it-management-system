$(document).ready(function(){
  //create firebase references
 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var selectedFile,selectFileEdit;
 var btClickEditUser=0;
var idUpdate;
  $.LoadingOverlay("show");

 $("#searchTeacher").keyup(function () {
   var searchTerm = $("#searchTeacher").val();
   var listItem = $('.results-teacher tbody').children('tr');
   var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

   $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
       return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
     }
     });
   $(".results-teacher tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
   $(this).attr('visible','false');
   });

   $(".results-teacher tbody tr:containsi('" + searchSplit + "')").each(function(e){
   $(this).attr('visible','true');
   });

 var jobCount = $('.results-teacher tbody tr[visible="true"]').length;
   $('.counter-teacher').text(jobCount + ' item');

 if(jobCount == '0') {$('.no-result-teacher').show();}
   else {$('.no-result-teacher').hide();}

  });

  $("#searchStaff").keyup(function () {
    var searchTerm = $("#searchStaff").val();
    var listItem = $('.results-staff tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

    $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
      }
      });
    $(".results-staff tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
    });

    $(".results-staff tbody tr:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
    });

  var jobCount = $('.results-staff tbody tr[visible="true"]').length;
    $('.counter-staff').text(jobCount + ' item');

  if(jobCount == '0') {$('.no-result-staff').show();}
    else {$('.no-result-staff').hide();}

   });

   $("#searchTa").keyup(function () {
     var searchTerm = $("#searchTa").val();
     var listItem = $('.results-ta tbody').children('tr');
     var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

     $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
         return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
       }
       });
     $(".results-ta tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
     $(this).attr('visible','false');
     });

     $(".results-ta tbody tr:containsi('" + searchSplit + "')").each(function(e){
     $(this).attr('visible','true');
     });

   var jobCount = $('.results-ta tbody tr[visible="true"]').length;
     $('.counter-ta').text(jobCount + ' item');

   if(jobCount == '0') {$('.no-result-ta').show();}
     else {$('.no-result-ta').hide();}

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
   idUpdate = $(this).closest('tr').attr("id");
   $('#positionForEdit').removeAttr('hidden');
   var image = $(this).closest('tr').find(".avatar").attr("src");
   var name =  $(this).closest('tr').find(".txtname").text();
   var email =  $(this).closest('tr').find(".txtemail").text();
   var phone =  $(this).closest('tr').find(".txtphone").text();
   var position = usersRef.child(idUpdate).child('position');
   position.on('value',snap=>{
     $('#positionEditUser').val(snap.val());
   });
   var leader = usersRef.child(idUpdate).child('leader');
   leader.on('value',snap=>{
     if(snap.val() =="หัวหน้าสาขา"){
       $("#leaderEditUser").prop("checked",true);
     }else{
       $("#leaderEditUser").prop("checked",false);
     }
   });
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
   $('#confrimDeleteTeacherModal').modal('show');
     rowDeleteTeacher = $(this).closest('tr');
 });

 $('#btConfrimTeacherDelete').on('click',function(){
   rootRef.child(idDeleteTeacher).remove().then(function(){
       $('#deleteUserModal').modal('show');
       rowDeleteTeacher.remove();
   });
 })


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

var idDeleteStaff;
var rowDeleteStaff;
$('#list_staff').on('click','.btn-delete-user',function(){
  idDeleteStaff = $(this).closest('tr').attr("id");
  $('#confrimDeleteStaffModal').modal('show');
    rowDeleteStaff = $(this).closest('tr');
});

$('#btConfrimStaffDelete').on('click',function(){
  rootRef.child(idDeleteStaff).remove().then(function(){
      $('#deleteUserModal').modal('show');
      rowDeleteStaff.remove();
  });
})


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
  $('#urlUploadImageCreateUser').val("");
  $('#editUserModal').modal('show');
});

var idDeleteTa;
var rowDeleteTa;
$('#list_ta').on('click','.btn-delete-user',function(){
  idDeleteTa = $(this).closest('tr').attr("id");
  $('#confrimDeleteTaModal').modal('show');
    rowDeleteTa = $(this).closest('tr');
});

$('#btConfrimTaDelete').on('click',function(){
  rootRef.child(idDeleteTa).remove().then(function(){
      $('#deleteUserModal').modal('show');
      rowDeleteTa.remove();
  });
})


 $('#btAddUser').on('click',function(e){
   e.preventDefault();
   $('#urlUploadImageCreateUser').val("");
   $('#imgShowCreate').removeAttr('src');
   usersRef.on('child_added',snap=>{
     var leader = snap.child('leader').val();
     if(leader=="หัวหน้าสาขา"){
        $('#leader').remove();
     }
   });
    $('#addUserModal').modal('show');
 });

 $('#fileUploadImageCreateUser').on('change',function(event){
   selectedFile = event.target.files[0];
 });

 $('#rankCreateUser').on('change',function(){
   var indexRank = document.getElementById('rankCreateUser').selectedIndex;
   if(indexRank==0){
     $('#position').attr('hidden','true');
     $('#leader').attr('hidden','true');
     $('#nameCreateUser').prop('disabled',true);
     $('#emailCreateUser').prop('disabled',true);
     $('#ageCreateUser').prop('disabled',true);
     $('#passwordCreateUser').prop('disabled',true);
     $('#phoneCreateUser').prop('disabled',true);
     $('#btCreateUser').attr('hidden','true');
   }else if(indexRank==1){
     $('#position').removeAttr('hidden');
     $('#leader').removeAttr('hidden');
     $('#nameCreateUser').prop('disabled',false);
     $('#emailCreateUser').prop('disabled',false);
     $('#ageCreateUser').prop('disabled',false);
     $('#passwordCreateUser').prop('disabled',false);
     $('#phoneCreateUser').prop('disabled',false);
     $('#btCreateUser').removeAttr('hidden');
   }else if(indexRank==2){
     $('#position').attr('hidden','true');
     $('#leader').attr('hidden','true');
     $('#nameCreateUser').prop('disabled',false);
     $('#emailCreateUser').prop('disabled',false);
     $('#ageCreateUser').prop('disabled',false);
     $('#passwordCreateUser').prop('disabled',false);
     $('#phoneCreateUser').prop('disabled',false);
     $('#btCreateUser').removeAttr('hidden');
   }else if(indexRank==3){
     $('#position').attr('hidden','true');
     $('#leader').attr('hidden','true');
     $('#nameCreateUser').prop('disabled',false);
     $('#emailCreateUser').prop('disabled',false);
     $('#ageCreateUser').prop('disabled',false);
     $('#passwordCreateUser').prop('disabled',false);
     $('#phoneCreateUser').prop('disabled',false);
     $('#btCreateUser').removeAttr('hidden');
   }
 });


 $('#btCreateUser').on('click',function(e){
   e.preventDefault();
   if($('#nameCreateUser').val() == "" || $('#emailCreateUser').val() == "" || $('#phoneCreateUser').val() == "" || $('#passwordCreateUser').val() == "" || $('#fileUploadImageCreateUser').val() == ""){
     $('#notifyInput').modal('show');
   }else{
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
      if ($("#leaderCreateUser").prop("checked") == true) {
         var leaderText = "หัวหน้าสาขา";
      }
      var data = {
           position:$('#positionCreateUser').val(),
           name:$('#nameCreateUser').val(),
           email: $('#emailCreateUser').val(),
           age:$('#ageCreateUser').val(),
           telephone: $('#phoneCreateUser').val(),
           image: downloadURL,
           leader:leaderText,
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
          for(var i;i<btClickEditUser;i++){
            $('#list_teacher tr:last').remove();
            $('#list_staff tr:last').remove();
            $('#list_ta tr:last').remove();
          }
        }
       });

  $('#fileUploadImageEditUser').on('change',function(event){
    selectFileEdit = event.target.files[0];
  });

  function pushImageEdit(){
    var filename= selectFileEdit.name;
    var storageRef = firebase.storage().ref('/ProfileImage/' + filename);
    var uplodadTask = storageRef.put(selectFileEdit);

    uplodadTask.on('state_changed',function(sanpshot){

    },function(error){

    },function(){
      var downloadURL = uplodadTask.snapshot.downloadURL;
      var postImage = {
        image:downloadURL
      };
      var deleteRef;
      var deleteImageProfile = usersRef.child(idUpdate).child('image');
      deleteImageProfile.on('value',snap => {
        deleteRef = firebase.storage().refFromURL(snap.val());
      });
      deleteRef.delete().then(function() {
      }).catch(function(error) {

      });
      usersRef.child(idUpdate).update(postImage);
      btClickEditUser = btClickEditUser+1;
      $('#list_teacher').empty();
      $('#list_staff').empty();
      $('#list_ta').empty();

      usersRef.on("child_added",snap => {

        var key = snap.key;
        var level = snap.child("level").val();
        var email = snap.child("email").val();
        var phone = snap.child("telephone").val();
        var image = snap.child("image").val();
        var name = snap.child("name").val();
        var office = snap.child("office").val();
        var level = snap.child("level").val();


      if(key != sessionStorage.getItem("userId")){

        if(level == "คณาจารย์และบุคลากร"){
        $('#list_teacher').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
            "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
            " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
          }

        if(level == "เจ้าหน้าที่บริหารงานทั่วไป"){
        $('#list_staff').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
              "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
            }

        if(level == "ผู้ช่วยสอนและวิจัย"){
        $('#list_ta').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
                "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
                "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
              }

      }
     });
    });

  };

  $('#btEditUser').on('click',function(){

    btClickEditUser = btClickEditUser+1;
    if(selectFileEdit!="" && selectFileEdit!=null){
      pushImageEdit();
    }

    if($("#leaderEditUser").prop("checked")==true){
      var leaderEditText = "หัวหน้าสาขา";
    }else{
      var leaderEditText = "";
    }

    $('#editUserModal').modal('hide');
    var dataUpdate = {
      name:$('#nameEditUser').val(),
      leader:leaderEditText,
      position:$('#positionEditUser').val(),
      email:$('#emailEditUser').val(),
      telephone:$('#phoneEditUser').val()
    };
    usersRef.child(idUpdate).update(dataUpdate);



    $('#list_teacher').empty();
    $('#list_staff').empty();
    $('#list_ta').empty();

    usersRef.on("child_added",snap => {

      var key = snap.key;
      var level = snap.child("level").val();
      var email = snap.child("email").val();
      var phone = snap.child("telephone").val();
      var image = snap.child("image").val();
      var name = snap.child("name").val();
      var office = snap.child("office").val();
      var level = snap.child("level").val();


    if(key != sessionStorage.getItem("userId")){

      if(level == "คณาจารย์และบุคลากร"){
      $('#list_teacher').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
          "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
          "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
          " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
        }

      if(level == "เจ้าหน้าที่บริหารงานทั่วไป"){
      $('#list_staff').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
            "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
            " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
          }

      if(level == "ผู้ช่วยสอนและวิจัย"){
      $('#list_ta').append("<tr id='"+snap.key+"'><td ><div id='"+'container'+"'><img id='"+'imageListProfile'+"'src='"+image+"' class='"+'avatar'+"' style='"+office+"'></td>"+
              "<td class='"+'txtname'+"'>" + name + "</td><td  class='"+'txtemail'+"'>" + email +"</td><td class='"+'txtphone'+"'>" + phone +"</td>"+
              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-user'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
            }

    }
   });

  });

});

function spanText(textStr, textClasses) {
  var classNames = textClasses.map(c => 'text-'+c).join(' ');
  return '<span class="'+classNames+'">'+ textStr + '</span>';
}
