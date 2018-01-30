$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var portfolioRef = dbRef.ref("website/student/bechelor/portfolio");
  var auth = null;


  var rootRef = portfolioRef;
  var idPort;
  var selectedFile;
  var currentPicture;
  var  currentStatus;
  var clickBtEditPort = 0;




// ========================================= Set initial Bechelor Portfolio Modal =========================================
  txt = "";
  $('#BechelorPortfolioName').val("");
  $('#BechelorPortfolioDetail').val("");
  $('#BechelorPortfolioGroup').val("");
  $("#BechelorPortfolioHallOfFame").prop("checked", false);
  $('#BechelorPortfolioYear').val("");
  $('#BechelorPortfolioPicture').val("");
  // document.getElementById("BechelorDemo").innerHTML = txt;
// ========================================= End Code =====================================================================
// ========================================= Set Button Add Bechelor Portfolio type =========================================

  $('#AddBechelorPortfolioType').hide();
  $('#SaveBechelorPortfolioGroup').hide();
  $('#CancelAddBechelorPortfolioGroup').hide();

  $('#CancelAddBechelorPortfolioGroup').on('click',function(e){
      $('#AddBechelorPortfolioType').hide();
      $('#CancelAddBechelorPortfolioGroup').hide();
      $('#SaveBechelorPortfolioGroup').hide();
      $('#AddBechelorPortfolioGroup').show();

    });

    $('#AddBechelorPortfolioGroup').on('click',function(e){
        $('#AddBechelorPortfolioType').show();
        $('#CancelAddBechelorPortfolioGroup').show();
        $('#SaveBechelorPortfolioGroup').show();
        $('#AddBechelorPortfolioGroup').hide();

      });

// ========================================= End Code =====================================================================
// ========================================= Add Bechelor Portfolio Type =========================================
  $('#SaveBechelorPortfolioGroup').on('click',function(e){

       var data = {
        port_GroupType:$('#AddBechelorPortfolioType').val(),
      };

      firebase.database().ref('website/student').child('portfolioGroup').child('bechelor').push().set(data).then(function(){
       console.log("Bechelor portfolio Group Saved:");
      });

      $('#AddBechelorPortfolioType').val("");
      $('#AddBechelorPortfolioType').hide();
      $('#CancelAddBechelorPortfolioGroup').hide();
      $('#SaveBechelorPortfolioGroup').hide();
      $('#AddBechelorPortfolioGroup').show();


    });
// ========================================= End Add Bechelor Portfolio Type =========================================
// ========================================= Get Bechelor Portfolio Type Dropdown =========================================

// var Auth = firebase.auth();
  var portfolioGroupRef = dbRef.ref("website/student/portfolioGroup/bechelor");
  var rootGroupRef = portfolioGroupRef;

  select = document.getElementById('BechelorPortfolioGroup');

    rootGroupRef.on("child_added",snap => {
      var Type = snap.child('port_GroupType').val();

      $('#BechelorPortfolioGroup').append("<option>"+ Type +"</option>");

    });

// ========================================= End Bechelor Portfolio Type =========================================

// ========================================= Get Bechelor Portfolio Table  =========================================

    rootRef.on("child_added",snap => {
      var Name = snap.child('port_name').val();
      var Detail = snap.child('port_detail').val();
      var Type = snap.child('port_type').val();
      var Status = snap.child('port_status').val();
      var Year = snap.child('port_years').val();
      var Picture = snap.child('port_image').val();
      var showStatus = snap.child('port_show_status').val();

      if(Status == "Hall Of Fame"){
        $('#list_BechelorHallOfFame').append("<tr  id='"+snap.key+"'><td class='"+'txtName'+"'>" + Name + "</td>" + "<td class='"+'txtDetail'+"'>" + Detail + "</td>"+ "<td class='"+'txtType'+"'>" + Type + "</td>"+ "<td class='"+'txtStatus'+"'>" + Status + "</td>"
                                  + "<td class='"+'txtYear'+"'>"+ Year + "</td>"+ "<td ><img class='"+'txtPicture'+"' src='"+Picture+"' style='"+'border-radius: 25px'+"' width='"+'100'+"' height='"+'100'+"'></td>"+
                                 "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                 " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                               }
// ========================================= End Code =============================================================================

// ========================================= Checked Portfolio =====================================================================

$('#list_BechelorHallOfFame').on('click','.chk-select-port',function(e){

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

$('#list_BechelorHallOfFame').on('click','.btn-delete-port',function(){
  var id = $(this).closest('tr').attr("id");
  rootRef.child(id).remove().then(function(){
      $('#deletePortModal').modal('show');
  });
    $(this).closest('tr').remove();
});
// ========================================= End Code =============================================================================

// ========================================= Edit Bechelor Portfolio ==============================================================


   $('#list_BechelorHallOfFame').on('click','.btn-edit-port',function(e){

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




     $('#BechelorPortfolioName').val(Name);
     $('#BechelorPortfolioDetail').val(Detail);
     $('#BechelorPortfolioGroup').val(Type);
     if(Status == "Hall Of Fame"){
       // $('#BechelorPortfolioHallOfFame').prop('checked',true);
       // $("#BechelorPortfolioHallOfFame").prop("checked") == true
       document.getElementById("BechelorPortfolioHallOfFame").checked = true;
     }else if(Status == "General") {
       // $('#BechelorPortfolioHallOfFame').prop('checked',false);
       // $("#BechelorPortfolioHallOfFame").prop("checked") == false
       document.getElementById("BechelorPortfolioHallOfFame").checked = false;
     }
     // $('#BechelorPortfolioHallOfFame').prop("checked") == currentStatus;
     $('#BechelorPortfolioYear').val(Year);
     $('#BechelorPortfolioPicturePreview').attr('src',Picture);
     $('#editBechelorPortfolio').modal('show');



     });

     // ========================================= Bechelor Portfolio Script =========================================

     $('#BechelorPortfolioPicture').on('change',function(event){
       selectedFile = event.target.files[0];

     });


       // <!-- <=========================================================== Save Edit Bechelor Portfolio ===========================================================> -->

     $('#btSubmitEditBechelorPortfolio').on('click',function(){

         clickBtEditPort= clickBtEditPort+1;

       $('#editBechelorPortfolio').modal('hide');

       var filename= selectedFile.name;
       var storageRef = firebase.storage().ref('/Portfolio/Bechelor/' + filename);
       var uplodadTask = storageRef.put(selectedFile);
       var Status;

       if ($("#BechelorPortfolioHallOfFame").prop("checked") == true) {
          Status = "Hall Of Fame"

       }else if ($("#BechelorPortfolioHallOfFame").prop("checked") == false){
         Status = "General"
       }

       uplodadTask.on('state_changed',function(snapshot){

       },function(error){

       },function(){
         var downloadURL = uplodadTask.snapshot.downloadURL;
         var updates = {};

         var updatePortdata = {
          port_name:$('#BechelorPortfolioName').val(),
          port_detail:$('#BechelorPortfolioDetail').val(),
          port_type:$('#BechelorPortfolioGroup').val(),
          port_status:Status,
          port_years:$('#BechelorPortfolioYear').val(),
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

        $('#list_BechelorPortfolio').empty();

        rootRef.on("child_added",snap => {
          var Name = snap.child('port_name').val();
          var Detail = snap.child('port_detail').val();
          var Type = snap.child('port_type').val();
          var Status = snap.child('port_status').val();
          var Year = snap.child('port_years').val();
          var Picture = snap.child('port_image').val();
          var showStatus = snap.child('port_show_status').val();

          if(Status == "Hall Of Fame"){
            $('#list_BechelorHallOfFame').append("<tr  id='"+snap.key+"'><td class='"+'txtName'+"'>" + Name + "</td>" + "<td class='"+'txtDetail'+"'>" + Detail + "</td>"+ "<td class='"+'txtType'+"'>" + Type + "</td>"+ "<td class='"+'txtStatus'+"'>" + Status + "</td>"
                                      + "<td class='"+'txtYear'+"'>"+ Year + "</td>"+ "<td ><img class='"+'txtPicture'+"' src='"+Picture+"' style='"+'border-radius: 25px'+"' width='"+'100'+"' height='"+'100'+"'></td>"+
                                     "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                     " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-port'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                                   }
        });


        txt = "";

        $('#BechelorPortfolioName').val("");
        $('#BechelorPortfolioDetail').val("");
        $('#BechelorPortfolioGroup').val("");
        $("#BechelorPortfolioHallOfFame").prop('checked', false);
        $('#BechelorPortfolioYear').val("");
        $('#BechelorPortfolioPicture').val("");
        // document.getElementById("BechelorDemo").innerHTML = txt;
      });

      for(var i = 0;i< clickBtEditPort;i++){
        $('#list_expertise tr:last').remove();
      }

     });
// <========================================= End Add Bechelor Portfolio Type =========================================
// <!-- <=========================================================== Close Button Edit Bechelor Portfolio ===========================================================> -->

$('#btCloseEditBechelorPortfolio').on('click',function(){

  txt = "";

  $('#BechelorPortfolioName').val("");
  $('#BechelorPortfolioDetail').val("");
  $('#BechelorPortfolioGroup').val("");
  $("#BechelorPortfolioHallOfFame").prop('checked', false);
  $('#BechelorPortfolioYear').val("");
  $('#BechelorPortfolioPicture').val("");
  // document.getElementById("BechelorDemo").innerHTML = txt;

});
// <========================================= Close Button Edit Bechelor Portfolio Type =========================================
// <=========================================================== BechelorPortfolioYear ===========================================================> -->
               var min = 2500,
                   max = min + 100,
                   select = document.getElementById('BechelorPortfolioYear');

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