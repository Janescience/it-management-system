$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var selectedFile;
 var indexSelect;
 var idEducation;
 var idExpert;
 var idWork;
 var clickBtEditEdu = 0;
 var clickBtEditExpert = 0;
 var clickBtEditWork = 0;
 var latitude;
 var longitude;

 var dbDay = usersRef.child(sessionStorage.getItem("userId")).child('office_hour');
 dbDay.on('child_added',snap =>{
   var day = snap.child('day').val();

   var h1 = snap.child('hour_1').val();
   var h2 = snap.child('hour_2').val();
   var h3 = snap.child('hour_3').val();
   var h4 = snap.child('hour_4').val();
   var h5 = snap.child('hour_5').val();
   var h6 = snap.child('hour_6').val();
   var h7 = snap.child('hour_7').val();
   var h8 = snap.child('hour_8').val();

   $('#list_day').append("<tr id='"+snap.key+"'><td >"+day+"</td><td width='"+'120px'+"' id='"+'h1'+"' bgcolor='"+h1+"'></td><td id='"+'h2'+"' width='"+'120px'+"' bgcolor='"+h2+"'></td><td id='"+'h3'+"' width='"+'120px'+"' bgcolor='"+h3+"'>"+
                                            "</td><td id='"+'h4'+"' width='"+'120px'+"' bgcolor='"+h4+"' ></td>"+
                                            "<td id='"+'h5'+"' width='"+'120px'+"' bgcolor='"+h5+"'></td><td id='"+'h6'+"' width='"+'120px'+"' bgcolor='"+h6+"'></td><td id='"+'h7'+"' width='"+'120px'+"' bgcolor='"+h7+"'></td>"+
                                            "<td id='"+'h8'+"' width='"+'120px'+"' bgcolor='"+h8+"'></td></tr>");
 });


 $('#list_day').on('click','td',function(){

   var id = $(this).closest('tr').attr('id');
   var color = $(this).closest('td').attr('bgcolor');
   var date = $(this).siblings(":first").text();


   if(color == "#40FF00"){
     $(this).closest('td').attr('bgcolor',"#ebebe0");
   }else if(color == "#ebebe0"){
     $(this).closest('td').attr('bgcolor',"#40FF00");
   }

   var dataDay = {
     day:date,
     hour_1:$(this).closest('tr').find('#h1').attr('bgcolor'),
     hour_2:$(this).closest('tr').find('#h2').attr('bgcolor'),
     hour_3:$(this).closest('tr').find('#h3').attr('bgcolor'),
     hour_4:$(this).closest('tr').find('#h4').attr('bgcolor'),
     hour_5:$(this).closest('tr').find('#h5').attr('bgcolor'),
     hour_6:$(this).closest('tr').find('#h6').attr('bgcolor'),
     hour_7:$(this).closest('tr').find('#h7').attr('bgcolor'),
     hour_8:$(this).closest('tr').find('#h8').attr('bgcolor')
   };

   usersRef.child(sessionStorage.getItem("userId")).child('office_hour').child(id).update(dataDay);

   var time = $(this).closest('table').find('th').eq($(this).index()).text();


 });

$('#showUpload').on('click',function(){
  $('#showUpload').attr('hidden',"true");
  $('#fileUploadImageProfile').removeAttr('hidden');

  $('#cancelUpload').removeAttr('hidden');
});

$('#cancelUpload').on('click',function(){
  $('#fileUploadImageProfile').attr('hidden',"true");

  $('#cancelUpload').attr('hidden',"true");
    $('#showUpload').removeAttr('hidden');
});


$('#openMap').on('click',function(){
  if (navigator.geolocation){
   navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
   latitudeAndLongitude.innerHTML="Geolocation is not supported by this browser.";
  }

  function showPosition(position){
     location.latitude=position.coords.latitude;
     location.longitude=position.coords.longitude;
     var geocoder = new google.maps.Geocoder();
     var latLng = new google.maps.LatLng(location.latitude, location.longitude);

     var initMap = function() {
         var map = new google.maps.Map(document.getElementById('map'), {
             center: { lat: location.latitude, lng: location.longitude},
             scrollwheel: false,
             zoom: 20
         });
         var geocoder = new google.maps.Geocoder;
         var infowindow = new google.maps.InfoWindow;
         geocodeLatLng(geocoder, map, infowindow);
     }

     var geocodeLatLng = function(geocoder, map, infowindow) {
       var input = ""+location.latitude+","+ location.longitude+"";
       var latlngStr = input.split(',', 2);
       var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
       geocoder.geocode({'location': latlng}, function(results, status) {
         if (status === 'OK') {
           if (results[0]) {
             map.setZoom(17);
             var marker = new google.maps.Marker({
               position: latlng,
               map: map
             });
             infowindow.setContent(results[0].formatted_address);
             infowindow.open(map, marker);
           } else {
             window.alert('No results found');
           }
         } else {
           window.alert('Geocoder failed due to: ' + status);
         }
       });
     }
     initMap();
  } //showPositi
  $('#mapModal').modal('show');
});


 $('#available').click(function(){
   var color={
     office:"border:8px solid #00ff00;"
   };
   usersRef.child(sessionStorage.getItem("userId")).update(color);
 });
 $('#notintheoffice').click(function(){
   var color={
     office:"border:8px solid #0099ff;"
   };
   usersRef.child(sessionStorage.getItem("userId")).update(color);
 });
 $('#beback').click(function(){
   var color={
     office:"border:8px solid #ffcc00;"
   };
   usersRef.child(sessionStorage.getItem("userId")).update(color);
 });
 $('#dontdisturb').click(function(){
   var color={
     office:"border:8px solid #ff3300;"
   };
   usersRef.child(sessionStorage.getItem("userId")).update(color);
 });



 $('#headInterWork').hide();
 $('#tableInterWork').hide();
 $('#headNationJour').hide();
 $('#tableNationJour').hide();
 $('#headInterJourNotDatabase').hide();
 $('#tableInterJourNotDatabase').hide();
 $('#headNationWork').hide();
 $('#tableNationWork').hide();

 $('#interWork').on('click',function(){

   $('#iconNationJour').attr("class","fa fa-chevron-right");
   $('#iconInterWork').attr("class","fa fa-check text-info");
   $('#iconInterJourNotDatabase').attr("class","fa fa-chevron-right");
   $('#iconNationWork').attr("class","fa fa-chevron-right");

   $('#headInterWork').show();
   $('#tableInterWork').show();
   $('#headNationJour').hide();
   $('#tableNationJour').hide();
   $('#headNationWork').hide();
   $('#tableNationWork').hide();
   $('#headInterJourNotDatabase').hide();
   $('#tableInterJourNotDatabase').hide();
 });

 $('#nationJour').on('click',function(){
   $('#iconNationJour').attr("class","fa fa-check text-info");
   $('#iconInterWork').attr("class","fa fa-chevron-right");
   $('#iconInterJourNotDatabase').attr("class","fa fa-chevron-right");
   $('#iconNationWork').attr("class","fa fa-chevron-right");

   $('#headNationJour').show();
   $('#tableNationJour').show();
   $('#headInterWork').hide();
   $('#tableInterWork').hide();
   $('#headNationWork').hide();
   $('#tableNationWork').hide();
   $('#headInterJourNotDatabase').hide();
   $('#tableInterJourNotDatabase').hide();
 });

 $('#interJourNotDatabase').on('click',function(){
   $('#iconNationJour').attr("class","fa fa-chevron-right");
   $('#iconInterWork').attr("class","fa fa-chevron-right");
   $('#iconInterJourNotDatabase').attr("class","fa fa-check text-info");
   $('#iconNationWork').attr("class","fa fa-chevron-right");

   $('#headNationJour').hide();
   $('#tableNationJour').hide();
   $('#headInterWork').hide();
   $('#tableInterWork').hide();
   $('#headNationWork').hide();
   $('#tableNationWork').hide();
   $('#headInterJourNotDatabase').show();
   $('#tableInterJourNotDatabase').show();
 });

 $('#nationWork').on('click',function(){
   $('#iconNationJour').attr("class","fa fa-chevron-right");
   $('#iconInterWork').attr("class","fa fa-chevron-right");
   $('#iconInterJourNotDatabase').attr("class","fa fa-chevron-right");
   $('#iconNationWork').attr("class","fa fa-check text-info");

   $('#headNationJour').hide();
   $('#tableNationJour').hide();
   $('#headInterWork').hide();
   $('#tableInterWork').hide();
   $('#headInterJourNotDatabase').hide();
   $('#tableInterJourNotDatabase').hide();
   $('#headNationWork').show();
   $('#tableNationWork').show();
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

    $('#list_his_education').append("<tr id='"+snap.key+"' ><td><input type='"+'checkbox'+"'  class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox'+"'></label></td>"+"<td class='"+'txtdegree'+"'>" + degree + "</td>" +
                              "<td class='"+'txtfaculty'+"'>" + faculty + "</td>" + "<td class='"+'txtuniversity'+"'>" + university + "</td>" + "<td class='"+'txtyear'+"'>" + year + "</td>"+
                             "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-education'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                             " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-education'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>"
                           );
          console.log("Table : ",snap.key);
  });



  $('#list_his_education').on('click','.btn-delete-education',function(){
    var id = $(this).closest('tr').attr("id");
    rootRefEducation.child(id).remove().then(function(){
        $('#deleteProfileModal').modal('show');
    });
      $(this).closest('tr').remove();
  });

  $('#list_his_education').on('click','.btn-edit-education',function(){
    idEducation = $(this).closest('tr').attr("id");
    var degree = $(this).closest('tr').find('.txtdegree').text();
    var faculty = $(this).closest('tr').find('.txtfaculty').text();
    var university = $(this).closest('tr').find('.txtuniversity').text();
    var year = $(this).closest('tr').find('.txtyear').text();
    $('#degreeEditHisEdu').val(degree);
    $('#facultyEditHisEdu').val(faculty);
    $('#universityEditHisEdu').val(university);
    $('#yearEditHisEdu').val(year);
    $('#editHisEduModal').modal('show');
  });

  $('#btEditEdu').on('click',function(){
    clickBtEditEdu= clickBtEditEdu+1;
    $('#editHisEduModal').modal('hide');
    var dataUpdateEducation = {
      degree:$('#degreeEditHisEdu').val(),
      faculty:$('#facultyEditHisEdu').val(),
      university:$('#universityEditHisEdu').val(),
      year:$('#yearEditHisEdu').val()
    };
    rootRefEducation.child(idEducation).update(dataUpdateEducation);

    $('#list_his_education').empty();

        rootRefEducation.on("child_added",snap => {

          var degree = snap.child("degree").val();
          var faculty = snap.child("faculty").val();
          var university = snap.child("university").val();
          var year = snap.child("year").val();

          $('#list_his_education').append("<tr id='"+snap.key +"' ><td><input type='"+'checkbox'+"'  class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                                    "<label for='"+'md_checkbox'+"'></label></td>"+"<td class='"+'txtdegree'+"'>" + degree + "</td>" +
                                    "<td class='"+'txtfaculty'+"'>" + faculty + "</td>" + "<td class='"+'txtuniversity'+"'>" + university + "</td>" + "<td class='"+'txtyear'+"'>" + year + "</td>"+
                                   "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-education'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-education'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>"
                                 );
            console.log("Edit and Add To Table : ",snap.key);
        });

  });



  var rootRefExpert = usersRef.child(sessionStorage.getItem("userId")).child('education').child('expertise');

  rootRefExpert.on("child_added",snap => {
    var snapkey = snap.key;
    var detail = snap.child('detail').val();

    $('#list_expertise').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox'+"'></label></td><td class='"+'txtdetail'+"'>" + detail + "</td>" +
                              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
  });

  $('#list_expertise').on('click','.btn-delete-expert',function(){
    var id = $(this).closest('tr').attr("id");
    rootRefExpert.child(id).remove().then(function(){
        $('#deleteProfileModal').modal('show');
    });
      $(this).closest('tr').remove();
  });

  $('#list_expertise').on('click','.btn-edit-expert',function(){
    idExpert = $(this).closest('tr').attr("id");
    var id = $(this).closest('tr').attr("id");
    var detail = $(this).closest('tr').find('.txtdetail').text();
    $('#detailExpert').val(detail);
    $('#editExpertModal').modal('show');
  });

  $('#btEditExpert').on('click',function(){

      clickBtEditExpert= clickBtEditExpert+1;

    $('#editExpertModal').modal('hide');

    var dataUpdateExpert = {
      detail:$('#detailExpert').val(),
    };

    rootRefExpert.child(idExpert).update(dataUpdateExpert);

    $('#list_expertise').empty();

    rootRefExpert.on("child_added",snap => {
      var snapkey = snap.key;
      var detail = snap.child('detail').val();

      $('#list_expertise').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                                "<label for='"+'md_checkbox'+"'></label></td><td class='"+'txtdetail'+"'>" + detail + "</td>" +
                                "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
    });

  });

  var rootRefWork = usersRef.child(sessionStorage.getItem("userId")).child('work').child('his_work');

  rootRefWork.on("child_added",snap => {

    var start_time = snap.child("start_time").val();
    var finish_time = snap.child("finish_time").val();
    var address = snap.child("address").val();
    var work = snap.child("work").val();

    $('#list_his_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox_work'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox_work'+"'></label></td>"+"<td class='"+'txttime'+"'>" + start_time +" ถึง "+ finish_time +"</td>" +
                              "<td class='"+'txtaddress'+"'>" + address + "</td>" + "<td class='"+'txtwork'+"'>" + work + "</td>"+
                              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
  });

  $('#list_his_work').on('click','.btn-delete-work',function(){
    var id = $(this).closest('tr').attr("id");
    rootRefWork.child(id).remove().then(function(){
        $('#deleteProfileModal').modal('show');
    });
      $(this).closest('tr').remove();
  });

  $('#list_his_work').on('click','.btn-edit-work',function(){
    idWork = $(this).closest('tr').attr("id");
    var id = $(this).closest('tr').attr("id");
    var time = $(this).closest('tr').find('.txttime').text();
    var splitSTime = time.split("ถึง")[0];
    var splitFTime = time.split("ถึง")[1];
    var address = $(this).closest('tr').find('.txtaddress').text();
    var work = $(this).closest('tr').find('.txtwork').text();
    $('#timeStartHisEditWork').val(splitSTime);
    $('#timeFinishHisEditWork').val(splitFTime);
    $('#addressHisEditWork').val(address);
    $('#workHisEditWork').val(work);
    $('#editWorkModal').modal('show');
  });

  $('#btEditWork').on('click',function(){

      clickBtEditWork= clickBtEditWork+1;

    $('#editWorkModal').modal('hide');

    var dataUpdateWork = {
      start_time:$('#timeStartHisEditWork').val(),
      finish_time:$('#timeFinishHisEditWork').val(),
      address:$('#addressHisEditWork').val(),
      work:$('#workHisEditWork').val()
    };

    rootRefWork.child(idWork).update(dataUpdateWork);

    $('#list_his_work').empty();

    rootRefWork.on("child_added",snap => {
      var start_time = snap.child("start_time").val();
      var finish_time = snap.child("finish_time").val();
      var address = snap.child("address").val();
      var work = snap.child("work").val();

      $('#list_his_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox_work'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                                "<label for='"+'md_checkbox_work'+"'></label></td>"+"<td class='"+'txttime'+"'>" + start_time +" ถึง "+ finish_time +"</td>" +
                                "<td class='"+'txtaddress'+"'>" + address + "</td>" + "<td class='"+'txtwork'+"'>" + work + "</td>"+
                                "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
    });
  });




  var rootRefExp = usersRef.child(sessionStorage.getItem("userId")).child('work').child('experience');

  rootRefExp.on("child_added",snap => {
    var exp = snap.child("exp").val();
    var start_time = snap.child("start_time").val();
    var finish_time = snap.child("finish_time").val();
    var detail = snap.child("detail").val();

    $('#list_exp').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox_exp'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                              "<label for='"+'md_checkbox_exp'+"'></label></td><td >" + exp + "</td>" + "<td>" +start_time +" ถึง "+ finish_time + "</td>"+"<td>" + detail + "</td>"+
                             "<td><button  class='"+'btn btn-success'+"'><i class='"+'mdi mdi-border-color'+"'></i></button>"+
                             "  <button  class='"+'btn btn-inverse '+"' onclick='"+'delExpert()'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");
  });




$('#btSubmitEdu').on('click',function(){

if($('#facultyHisEdu').val()==""){

  }else if($('#universityHisEdu').val()==""){

  }else if($('#yearHisEdu').val()==""){

  }else{
  $('#addHisEduModal').modal('hide');

  var data = {
    degree:$('#degreeHisEdu').val(),
    faculty:$('#facultyHisEdu').val(),
    university:$('#universityHisEdu').val(),
    year:$('#yearHisEdu').val()
  };

 usersRef.child(sessionStorage.getItem("userId")).child('education').child('his_education').push().set(data).then(function(){
   console.log("User Information Saved:", sessionStorage.getItem("userId"));
     $('#facultyHisEdu').val("");
     $('#universityHisEdu').val("");
     $('#yearHisEdu').val("");
 });
}
for(var i = 0;i< clickBtEditEdu;i++){
  $('#list_his_education tr:last').remove();
}

});

$('#btSubmitExpert').on('click',function(){
if($('#expertHisEdu').val() == ""){

}else{
  $('#addExpertModal').modal('hide');
  var data = {
    detail:$('#expertHisEdu').val()
  };
  usersRef.child(sessionStorage.getItem("userId")).child('education').child('expertise').push().set(data).then(function(){
    console.log("User Information Saved:", sessionStorage.getItem("userId"));
    $('#expertHisEdu').val("");
  });
}

for(var i = 0;i< clickBtEditExpert;i++){
  $('#list_expertise tr:last').remove();
}

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
     $('#timeStartHisWork').val("");
     $('#timeFinishHisWork').val("");
     $('#addressHisWork').val("");
     $('#workHisWork').val("");
 });
 for(var i = 0;i< clickBtEditWork;i++){
   $('#list_his_work tr:last').remove();
 }
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

 var dbStatus = usersRef.child(sessionStorage.getItem("userId")).child('office');
 dbStatus.on('value',snap => {
   $('#imageProfile').attr("style",snap.val());
   if(snap.val() == "border:8px solid #00ff00;"){
     document.getElementById('showStatus').innerText = "Available";
   }else if(snap.val() == "border:8px solid #0099ff;"){
     document.getElementById('showStatus').innerText = "Not in the office";
   }else if(snap.val() == "border:8px solid #ffcc00;"){
     document.getElementById('showStatus').innerText = "Be back";
   }else if(snap.val() == "border:8px solid #ff3300;"){
     document.getElementById('showStatus').innerText = "Don't Disturb";

   }
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
    var user = firebase.auth().currentUser;
    var newEmail = $('#emailProfile').val();
    user.updateEmail(newEmail).then(function() {

    }).catch(function(error) {
      // An error happened.
   });
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
