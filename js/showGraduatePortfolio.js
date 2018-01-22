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



// ========================================= Set initial Graduate Portfolio Modal =========================================
  txt = "";
  $('#GraduatePortfolioName').val("");
  $('#GraduatePortfolioDetail').val("");
  $('#GraduatePortfolioGroup').val("");
  $("#GraduatePortfolioHallOfFame").prop("checked", false);
  $('#GraduatePortfolioYear').val("");
  $('#GraduatePortfolioPicture').val("");
  // document.getElementById("GraduateDemo").innerHTML = txt;
// ========================================= End Code =====================================================================
// ========================================= Set Button Add Graduate Portfolio type =========================================

  $('#AddGraduatePortfolioType').hide();
  $('#SaveGraduatePortfolioGroup').hide();
  $('#CancelAddGraduatePortfolioGroup').hide();

  $('#CancelAddGraduatePortfolioGroup').on('click',function(e){
      $('#AddGraduatePortfolioType').hide();
      $('#CancelAddGraduatePortfolioGroup').hide();
      $('#SaveGraduatePortfolioGroup').hide();
      $('#AddGraduatePortfolioGroup').show();

    });

    $('#AddGraduatePortfolioGroup').on('click',function(e){
        $('#AddGraduatePortfolioType').show();
        $('#CancelAddGraduatePortfolioGroup').show();
        $('#SaveGraduatePortfolioGroup').show();
        $('#AddGraduatePortfolioGroup').hide();

      });

// ========================================= End Code =====================================================================
// ========================================= Add Graduate Portfolio Type =========================================
  $('#SaveGraduatePortfolioGroup').on('click',function(e){

       var data = {
        port_GroupType:$('#AddGraduatePortfolioType').val(),
      };

      firebase.database().ref('website/student').child('portfolioGroup').child('graduate').push().set(data).then(function(){
       console.log("Graduate portfolio Group Saved:");
      });

      $('#AddGraduatePortfolioType').val("");
      $('#AddGraduatePortfolioType').hide();
      $('#CancelAddGraduatePortfolioGroup').hide();
      $('#SaveGraduatePortfolioGroup').hide();
      $('#AddGraduatePortfolioGroup').show();


    });
// ========================================= End Add Graduate Portfolio Type =========================================
// ========================================= Get Graduate Portfolio Type Dropdown =========================================

// var Auth = firebase.auth();
  var portfolioGroupRef = dbRef.ref("website/student/portfolioGroup/graduate");
  var rootGroupRef = portfolioGroupRef;

  select = document.getElementById('GraduatePortfolioGroup');

    rootGroupRef.on("child_added",snap => {
      var Type = snap.child('port_GroupType').val();

      $('#GraduatePortfolioGroup').append("<option>"+ Type +"</option>");

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


      $('#list_GraduatePortfolio').append("<tr  id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox_BecPort'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                                "<label for='"+'md_checkbox_BecPort'+"'></label></td>" + "<td class='"+'txtName'+"'>" + Name + "</td>" + "<td class='"+'txtDetail'+"'>" + Detail + "</td>"+ "<td class='"+'txtType'+"'>" + Type + "</td>"+ "<td class='"+'txtStatus'+"'>" + Status + "</td>"
                                + "<td class='"+'txtYear'+"'>"+ Year + "</td>"+ "<td ><img class='"+'txtPicture'+"' src='"+Picture+"'  width='"+'60'+"' height='"+'60'+"'></td>"+
                               "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                               " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

// ========================================= End Code =============================================================================
// ========================================= Delete Portfolio =====================================================================

$('#list_GraduatePortfolio').on('click','.btn-delete-port',function(){
  var id = $(this).closest('tr').attr("id");
  rootRef.child(id).remove().then(function(){
      $('#deletePortModal').modal('show');
  });
    $(this).closest('tr').remove();
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
     if(Status == "Hall Of Fame"){
       // $('#GraduatePortfolioHallOfFame').prop('checked',true);
       // $("#GraduatePortfolioHallOfFame").prop("checked") == true
       document.getElementById("GraduatePortfolioHallOfFame").checked = true;
     }else if(Status == "General") {
       // $('#GraduatePortfolioHallOfFame').prop('checked',false);
       // $("#GraduatePortfolioHallOfFame").prop("checked") == false
       document.getElementById("GraduatePortfolioHallOfFame").checked = false;
     }
     // $('#GraduatePortfolioHallOfFame').prop("checked") == currentStatus;
     $('#GraduatePortfolioYear').val(Year);
     $('#GraduatePortfolioPicturePreview').attr('src',Picture);
     $('#editGraduatePortfolio').modal('show');



     });

     // ========================================= Graduate Portfolio Script =========================================

     $('#GraduatePortfolioPicture').on('change',function(event){
       selectedFile = event.target.files[0];

     });


       // <!-- <=========================================================== Save Edit Graduate Portfolio ===========================================================> -->

     $('#btSubmitEditGraduatePortfolio').on('click',function(){

         clickBtEditPort= clickBtEditPort+1;

       $('#editGraduatePortfolio').modal('hide');

       var filename= selectedFile.name;
       var storageRef = firebase.storage().ref('/Portfolio/Graduate/' + filename);
       var uplodadTask = storageRef.put(selectedFile);
       var Status;

       if ($("#GraduatePortfolioHallOfFame").prop("checked") == true) {
          Status = "Hall Of Fame"

       }else if ($("#GraduatePortfolioHallOfFame").prop("checked") == false){
         Status = "General"
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

          // $('#alreadyPicturePortModal').modal('show');

          var deleteRef;
          deleteRef = firebase.storage().refFromURL(currentPicture);
          deleteRef.delete().then(function() {
          }).catch(function(error) {
          });




        rootRef.child(idPort).update(updatePortdata);

        $('#list_GraduatePortfolio').empty();

        rootRef.on("child_added",snap => {
          var Name = snap.child('port_name').val();
          var Detail = snap.child('port_detail').val();
          var Type = snap.child('port_type').val();
          var Status = snap.child('port_status').val();
          var Year = snap.child('port_years').val();
          var Picture = snap.child('port_image').val();


          $('#list_GraduatePortfolio').append("<tr  id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'md_checkbox_BecPort'+"' class='"+'filled-in chk-col-red'+"' checked='"+'true'+"'>"+
                                    "<label for='"+'md_checkbox_BecPort'+"'></label></td>" + "<td class='"+'txtName'+"'>" + Name + "</td>" + "<td class='"+'txtDetail'+"'>" + Detail + "</td>"+ "<td class='"+'txtType'+"'>" + Type + "</td>"+ "<td class='"+'txtStatus'+"'>" + Status + "</td>"
                                    + "<td class='"+'txtYear'+"'>"+ Year + "</td>"+ "<td ><img class='"+'txtPicture'+"' src='"+Picture+"'  width='"+'60'+"' height='"+'60'+"'></td>"+
                                   "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
        });


        txt = "";

        $('#GraduatePortfolioName').val("");
        $('#GraduatePortfolioDetail').val("");
        $('#GraduatePortfolioGroup').val("");
        $("#GraduatePortfolioHallOfFame").prop('checked', false);
        $('#GraduatePortfolioYear').val("");
        $('#GraduatePortfolioPicture').val("");
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

});
