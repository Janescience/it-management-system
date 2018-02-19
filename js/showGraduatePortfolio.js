$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var portfolioRef = dbRef.ref("website/student/graduate/portfolio");
  var auth = null;


  var rootRef = portfolioRef;
  var idPort;
  var selectedFile;
  var currentPicture;
  var  currentStatus;
  var clickBtEditPort = 0;

  var GraTypeEdit = "";
	var GroupGraId = "";
	var clickBtEditGraPortGroup = 0;

  var del;
   $.LoadingOverlay("show");

   var usersRef = dbRef.ref("users");

   var  page,topic,action,type;

// ========================================= Set initial Graduate Portfolio Modal =========================================
  txt = "";
  $('#GraduatePortfolioName').val("");
  $('#GraduatePortfolioDetail').val("");
  $('#GraduatePortfolioGroup').val("");
  $("#GraduatePortfolioHallOfFame").prop("checked", false);
  $('#GraduatePortfolioYear').val("");
  $('#GraduatePortfolioPicture').val("");
  $('#GraduatePortfolioPictureText').val("");
  $('#GraduatePortfolioPictureView').removeAttr('src');
  // document.getElementById("GraduateDemo").innerHTML = txt;
// ========================================= End Code =====================================================================

// ========================================= Get Graduate Portfolio Type From Database =========================================

var dbRef = firebase.database();
var GraduatePortfolioGroupRef = dbRef.ref("website/student/graduate/portfolioGroup");
var GraduateRootRef = GraduatePortfolioGroupRef;
// ========================================= End Code =====================================================================

// ========================================= Set initial Graduate Portfolio Type =========================================
$('#AddGraduatePortfolioType').hide();
$('#EditGraduatePortfolioType').hide();
$('#SaveAddGraduatePortfolioGroup').hide();
$('#CancelAddGraduatePortfolioGroup').hide();

$('#SaveEditGraduatePortfolioGroup').hide();
$('#CancelEditGraduatePortfolioGroup').hide();
// ========================================= End Code =====================================================================

// ========================================= Add Graduate Portfolio Group =========================================

$('#AddGraduatePortfolioGroup').on('click',function(e){
    $('#AddGraduatePortfolioType').show();
    $('#AddGraduatePortfolioType').val("");
    $('#CancelAddGraduatePortfolioGroup').show();
    $('#SaveAddGraduatePortfolioGroup').show();
    $('#AddGraduatePortfolioGroup').hide();
    $('#EditGraduatePortfolioGroup').hide();
    $('#DeleteGraduatePortfolioGroup').hide();

    $('#GraduatePortfolioGroup').val("");

  });
// ========================================= End Code =====================================================================

// ========================================= Cancel Add Graduate Portfolio Group =========================================

$('#CancelAddGraduatePortfolioGroup').on('click',function(e){
$('#AddGraduatePortfolioType').hide();
$('#AddGraduatePortfolioType').val("");
$('#CancelAddGraduatePortfolioGroup').hide();
$('#SaveAddGraduatePortfolioGroup').hide();
$('#AddGraduatePortfolioGroup').show();
$('#EditGraduatePortfolioGroup').show();
$('#DeleteGraduatePortfolioGroup').show();

$('#GraduatePortfolioGroup').val("");

});
// ========================================= End Code =====================================================================

// ========================================= Edit Graduate Portfolio Group =========================================

$('#EditGraduatePortfolioGroup').on('click',function(e){
  $('#EditGraduatePortfolioType').val("");
  $('#EditGraduatePortfolioType').show();
  $('#SaveEditGraduatePortfolioGroup').show();
  $('#CancelEditGraduatePortfolioGroup').show();
  $('#AddGraduatePortfolioGroup').hide();
  $('#EditGraduatePortfolioGroup').hide();
  $('#DeleteGraduatePortfolioGroup').hide();

  $('#GraduatePortfolioGroup').val("");

  $('#GraduatePortfolioGroup').on('change',function(){
  GroupGraId = $(this).children(":selected").attr("id");
    // alert(GroupBecId);
  GraTypeEdit = $("#GraduatePortfolioGroup option:selected" ).text();
  // alert($("#GraduatePortfolioGroup option:selected" ).text());
  $('#EditGraduatePortfolioType').val(GraTypeEdit);
  });

});
// ========================================= End Code =====================================================================

// ========================================= Delete Graduate Portfolio Group =========================================

$('#GraduatePortfolioGroup').on('change',function(){
GroupGraId = $(this).children(":selected").attr("id");


$('#DeleteGraduatePortfolioGroup').on('click',function(){
  // GroupGraId = $(this).children(":selected").attr("id");
  clickBtEditGraPortGroup = clickBtEditGraPortGroup+1;

  GraduateRootRef.child(GroupGraId).remove().then(function(){
      $('#DeletePortTypeModal').modal('show');

      $('#GraduatePortfolioGroup').empty();

      GraduateRootRef.on("child_added",snap => {
        var Type = snap.child('port_GroupType').val();

        $('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

        $('#GraduatePortfolioGroup').val("");
      });
  });
    $(this).children(":selected").remove();
});
});
// ========================================= End Code =====================================================================
// ========================================= Cancel Edits Graduate Portfolio Group =========================================

$('#CancelEditGraduatePortfolioGroup').on('click',function(e){
  $('#EditGraduatePortfolioType').hide();
  $('#EditGraduatePortfolioType').val("");
  $('#SaveEditGraduatePortfolioGroup').hide();
  $('#CancelEditGraduatePortfolioGroup').hide();
  $('#AddGraduatePortfolioGroup').show();
  $('#EditGraduatePortfolioGroup').show();
  $('#DeleteGraduatePortfolioGroup').show();

  $('#GraduatePortfolioGroup').val("");

});
// ========================================= End Code =====================================================================
// ========================================= Add Graduate Portfolio Type =========================================
$('#SaveAddGraduatePortfolioGroup').on('click',function(e){

     var data = {
      port_GroupType:$('#AddGraduatePortfolioType').val(),
    };

    firebase.database().ref('website/student').child('graduate').child('portfolioGroup').push().set(data).then(function(){
     console.log("Graduate portfolio Group Saved:");
    });

    $('#AddGraduatePortfolioType').val("");
    $('#AddGraduatePortfolioType').hide();
    $('#CancelAddGraduatePortfolioGroup').hide();
    $('#SaveAddGraduatePortfolioGroup').hide();
    $('#AddGraduatePortfolioGroup').show();
    $('#EditGraduatePortfolioGroup').show();
    $('#DeleteGraduatePortfolioGroup').show();
    $('#AddPortTypeModal').modal('show');


    for(var i = 0;i< clickBtEditGraPortGroup;i++){
      $('#GraduatePortfolioGroup option:last').remove();
    }
  });
// ========================================= End Add Graduate Portfolio Type =========================================

// ========================================= Edit Graduate Portfolio Type =========================================

$('#SaveEditGraduatePortfolioGroup').on('click',function(e){

  clickBtEditGraPortGroup = clickBtEditGraPortGroup+1;

  var dataUpdateGraduatePortGroup = {
    port_GroupType:$('#EditGraduatePortfolioType').val()
  };

  GraduateRootRef.child(GroupGraId).update(dataUpdateGraduatePortGroup);

    $('#EditGraduatePortfolioType').val("");
    $('#EditGraduatePortfolioType').hide();
    $('#SaveEditGraduatePortfolioGroup').hide();
    $('#CancelEditGraduatePortfolioGroup').hide();
    $('#AddGraduatePortfolioGroup').show();
    $('#EditGraduatePortfolioGroup').show();
    $('#DeleteGraduatePortfolioGroup').show();
    $('#EditPortTypeModal').modal('show');


    $('#GraduatePortfolioGroup').empty();

    GraduateRootRef.on("child_added",snap => {
      var Type = snap.child('port_GroupType').val();

      $('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

      $('#GraduatePortfolioGroup').val("");
    });

  });
// ================================================================= End Code =================================================================
// ========================================= Get Graduate Portfolio Type Dropdown =========================================

select = document.getElementById('GraduatePortfolioGroup');

  GraduateRootRef.on("child_added",snap => {
    var Type = snap.child('port_GroupType').val();

    $('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

    $('#GraduatePortfolioGroup').val("");
  });
// ========================================= End Graduate Portfolio Type =========================================


// ========================================= Get Graduate Portfolio Table  =========================================

    rootRef.on("child_added",snap => {
      var Name = snap.child('port_name').val();
      var Detail = snap.child('port_detail').val();
      var Type = snap.child('port_type').val();
      var Status = snap.child('port_status').val();
      var Year = snap.child('port_years').val();
      var Picture = snap.child('port_image').val();
      var showStatus = snap.child('port_show_status').val();


      $('#list_GraduatePortfolio').append("<tr  id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox_'+snap.key+"' class='"+'filled-in chk-col-red chk-select-port checkbox'+"'"+showStatus+">"+
                                "<label for='"+'md_checkbox_'+snap.key+"'></label></td>" + "<td class='"+'txtName'+"'>" + Name + "</td>" + "<td class='"+'txtDetail'+"'>" + Detail + "</td>"+ "<td class='"+'txtType'+"'>" + Type + "</td>"+ "<td class='"+'txtStatus'+"'>" + Status + "</td>"
                                + "<td class='"+'txtYear'+"'>"+ Year + "</td>"+ "<td ><img class='"+'txtPicture'+"' src='"+Picture+"' style='"+'border-radius: 10px;width:200px;'+"' ></td>"+
                               "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                               " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

// ========================================= End Code =============================================================================

// ========================================= Checked Portfolio =====================================================================

$('#list_GraduatePortfolio').on('click','.chk-select-port',function(e){

  var id = $(this).closest('tr').attr("id");
  var check = $(this).closest('input[type=checkbox]').prop('checked');
  var status;

  if(check){
    status="checked";
  }else{
    status="unchecked";
  }

  var stat = {
    port_show_status:status
  };

  portfolioRef.child(id).update(stat);
  });
// ========================================= End Code =============================================================================

// ========================================= Delete Portfolio =====================================================================
  var id;

$('#list_GraduatePortfolio').on('click','.btn-delete-port',function(){

        id = $(this).closest('tr').attr("id");

        del = $(this).closest('tr');
    $('#BeforeDeletePortModal').modal('show');



});

  $('#btConfirm').on('click',function(){
    rootRef.child(id).remove().then(function(){
        $('#deletePortModal').modal('show');
        del.remove();

    });
});
// ========================================= End Code =============================================================================

// ========================================= Edit Graduate Portfolio ==============================================================


   $('#list_GraduatePortfolio').on('click','.btn-edit-port',function(e){

     idPort = $(this).closest('tr').attr("id");
     var id = $(this).closest('tr').attr("id");
     var Name = $(this).closest('tr').find('.txtName').text();
     var Detail = $(this).closest('tr').find('.txtDetail').text();
     var Type = $(this).closest('tr').find('.txtType').text();
     var Status = $(this).closest('tr').find('.txtStatus').text();
     // var Status = $(this).closest('tr').find('.txtStatus').attr( 'checked', 'checked' )
     var Year = $(this).closest('tr').find('.txtYear').text();
     var Picture = $(this).closest('tr').find(".txtPicture").attr("src");
     // $(this).closest('tr').find(".txtPicture").attr("src");

     currentPicture = Picture;
     // currentStatus  = Status;




     $('#GraduatePortfolioName').val(Name);
     $('#GraduatePortfolioDetail').val(Detail);
     $('#GraduatePortfolioGroup').val(Type);
     $('#GraduatePortfolioPicturey').val("");

     if(Status == "ผลงานดีเด่น"){
       // $('#GraduatePortfolioHallOfFame').prop('checked',true);
       // $("#GraduatePortfolioHallOfFame").prop("checked") == true
       document.getElementById("GraduatePortfolioHallOfFame").checked = true;
     }else if(Status == "ผลงานทั่วไป") {
       // $('#GraduatePortfolioHallOfFame').prop('checked',false);
       // $("#GraduatePortfolioHallOfFame").prop("checked") == false
       document.getElementById("GraduatePortfolioHallOfFame").checked = false;
     }
     // $('#GraduatePortfolioHallOfFame').prop("checked") == currentStatus;
     $('#GraduatePortfolioYear').val(Year);
     $('#GraduatePortfolioPicturePreview').attr('src',Picture);
     $('#GraduatePortfolioPicture').val("");
     $('#GraduatePortfolioPictureText').val("");
     $('#GraduatePortfolioPictureView').removeAttr('src');
     selectedFile = "";
     $('#editGraduatePortfolio').modal("show");


     });

     // ========================================= Graduate Portfolio Script =========================================

     $('#GraduatePortfolioPicture').on('change',function(event){
       selectedFile = "";
       selectedFile = event.target.files[0];

     });


       // <!-- <=========================================================== Save Edit Graduate Portfolio ===========================================================> -->

     $('#btSubmitGraduatePortfolio').on('click',function(){

         clickBtEditPort= clickBtEditPort+1;

       $('#editGraduatePortfolio').modal('hide');

       var filename= selectedFile.name;
       var storageRef = firebase.storage().ref('/Portfolio/Graduate/' + filename);
       var uplodadTask = storageRef.put(selectedFile);
       var Status;

       if ($("#GraduatePortfolioHallOfFame").prop("checked") == true) {
          Status = "ผลงานดีเด่น"

       }else if ($("#GraduatePortfolioHallOfFame").prop("checked") == false){
         Status = "ผลงานทั่วไป"
       }

       uplodadTask.on('state_changed',function(snapshot){

       },function(error){

       },function(){
         var downloadURL = uplodadTask.snapshot.downloadURL;
         var updates = {};

         var updatePortdata = {
          port_name:$('#GraduatePortfolioName').val(),
          port_detail:$('#GraduatePortfolioDetail').val(),
          port_type:$('#GraduatePortfolioGroup').val(),
          port_status:Status,
          port_years:$('#GraduatePortfolioYear').val(),
          port_image:downloadURL
        };

        // if (currentPicture = downloadURL) {
          // $('#alreadyPicturePortModal').modal('show');
        // }else {
          var deleteRef;
          deleteRef = firebase.storage().refFromURL(currentPicture);
          deleteRef.delete().then(function() {
          }).catch(function(error) {
          });
        // }



        rootRef.child(idPort).update(updatePortdata);

        $('#list_GraduatePortfolio').empty();

        rootRef.on("child_added",snap => {
          var Name = snap.child('port_name').val();
          var Detail = snap.child('port_detail').val();
          var Type = snap.child('port_type').val();
          var Status = snap.child('port_status').val();
          var Year = snap.child('port_years').val();
          var Picture = snap.child('port_image').val();
          var showStatus = snap.child('port_show_status').val();


          $('#list_GraduatePortfolio').append("<tr  id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox_'+snap.key+"' class='"+'filled-in chk-col-red chk-select-port checkbox'+"'"+showStatus+">"+
                                    "<label for='"+'md_checkbox_'+snap.key+"'></label></td>" + "<td class='"+'txtName'+"'>" + Name + "</td>" + "<td class='"+'txtDetail'+"'>" + Detail + "</td>"+ "<td class='"+'txtType'+"'>" + Type + "</td>"+ "<td class='"+'txtStatus'+"'>" + Status + "</td>"
                                    + "<td class='"+'txtYear'+"'>"+ Year + "</td>"+ "<td ><img class='"+'txtPicture'+"' src='"+Picture+"' style='"+'border-radius: 10px;width:200px;'+"'></td>"+
                                   "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
        });


        txt = "";

        page = $('#studentPage').text();
        topic = $('#GraduatePortfolioName').val();
        action = "แก้ไขรายละเอียดของผลงานนักศึกษาระดับบัณฑิตศึกษา";
        type = "ผลงานระดับบัณฑิตศึกษา"
        pushHistory();

        $('#GraduatePortfolioName').val("");
        $('#GraduatePortfolioDetail').val("");
        $('#GraduatePortfolioGroup').val("");
        $("#GraduatePortfolioHallOfFame").prop('checked', false);
        $('#GraduatePortfolioYear').val("");
        $('#GraduatePortfolioPicture').val("");
        $('#EditPortModal').modal('show');
        $('#GraduatePortfolioPictureText').val("");
        $('#GraduatePortfolioPictureView').removeAttr('src');
        selectedFile = "";

        // document.getElementById("GraduateDemo").innerHTML = txt;
      });

      for(var i = 0;i< clickBtEditPort;i++){
        $('#list_expertise tr:last').remove();
      }

     });
// <========================================= End Add Graduate Portfolio Type =========================================
// <!-- <=========================================================== Close Button Edit Graduate Portfolio ===========================================================> -->

$('#btCloseEditGraduatePortfolio').on('click',function(){

  txt = "";

  $('#GraduatePortfolioName').val("");
  $('#GraduatePortfolioDetail').val("");
  $('#GraduatePortfolioGroup').val("");
  $("#GraduatePortfolioHallOfFame").prop('checked', false);
  $('#GraduatePortfolioYear').val("");
  $('#GraduatePortfolioPicture').val("");
  $('#GraduatePortfolioPictureText').val("");
  $('#GraduatePortfolioPictureView').removeAttr('src');
  selectedFile = "";

  // document.getElementById("GraduateDemo").innerHTML = txt;

});
// <========================================= Close Button Edit Graduate Portfolio Type =========================================
// <=========================================================== GraduatePortfolioYear ===========================================================> -->
               var min = 2500,
                   max = min + 100,
                   select = document.getElementById('GraduatePortfolioYear');

               for (var i = min; i<=max; i++){
                   var opt = document.createElement('option');
                   opt.value = i;
                   opt.innerHTML = i;
                   select.appendChild(opt);
               }
// <!-- <=================================================================== End Code ==================================================================> -->

    });




    $("#searchPort").keyup(function () {
      var searchTerm = $("#searchPort").val();
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

    if(jobCount == "0") {$('.no-result').show();
    }else {$('.no-result').hide();}

     });


          function pushHistory(){
             var nameValue;
             var dateTimeCurrent = new Date();

             var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
             nameHistory.on('value',snap => {
               nameValue = snap.val();
             });

             var dataHistory = {
               id:sessionStorage.getItem("userId"),
               name:nameValue,
               page:page,
               topic:topic,
               action:action,
               date:dateTimeCurrent.toDateString(),
               time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
             };

             firebase.database().ref('history').push().set(dataHistory);

             var message =  nameValue+" "+action+" ในหน้า ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
             var txtpage = page;
             var txttype = type;

            window.location.href = "notify.php?message=" + message + "&page="+ txtpage + "&type=" + txttype;
           }

});
