$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var usersRef = dbRef.ref('users')
 var auth = null;
 var selectedFile;
 var indexSelectAcademicWork,indexSelectYearPrevious;
 var idEducation;
 var idExpert;
 var idWork,idExperience;
 var clickBtEditEdu = 0;
 var clickBtEditExpert = 0;
 var clickBtEditWork = 0,clickBtEditExperience = 0,clickBtEditInterWork=0;
 var latitude;
 var longitude;
 var dateTimeCurrent = new Date();
 var date = dateTimeCurrent.toDateString();
 var yearCurrent = date.split(" ")[3];

 $.LoadingOverlay("show");


 var txtlevel = usersRef.child(sessionStorage.getItem("userId")).child('level');
 txtlevel.on('value',snap=>{
   if(snap.val() == "คณาจารย์และบุคลากร"){
     $('#switchMap').removeAttr('hidden');
     $('#tabWorkingPerson').hide();
   }else{
     $('#tabWorkingTeacher').hide();
   }
 });


 $('#btOpenModalWorkingPerson').on('click',function(){
   $('#addPersonWorkModal').modal('show');
 });

 var dbPersonWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
 var clickBtEditPersonWork=0;

 $('#btAddPersonWork').on('click',function(){
   $('#addPersonWorkModal').modal('hide');

   var dateSplit = $('#datePersonWorkAdd').val();
   var year = dateSplit.split('-')[0];
   var month = dateSplit.split('-')[1];
   var day = dateSplit.split('-')[2];

   var pushPersonWork = {
     name_award:$('#nameAwardPersonWorkAdd').val(),
     name_work:$('#nameWorkPersonWorkAdd').val(),
     detail:$('#detailPersonWorkAdd').val(),
     department:$('#departmentPersonWorkAdd').val(),
     date: day+"-"+month+"-"+year,
     status:"checked"
   };
   usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').push().set(pushPersonWork);

   for(var i=0;i<clickBtEditPersonWork;i++){
     $('#list_work_person tr:last').remove();
   }

 });


 $('#btEditPersonWork').on('click',function(){
   $('#editPersonWorkModal').modal('hide');

   clickBtEditPersonWork = clickBtEditPersonWork+1;

   var dateSplit = $('#datePersonWorkEdit').val();
   var year = dateSplit.split('-')[0];
   var month = dateSplit.split('-')[1];
   var day = dateSplit.split('-')[2];

   var updatePersonWork = {
     name_award:$('#nameAwardPersonWorkEdit').val(),
     name_work:$('#nameWorkPersonWorkEdit').val(),
     detail:$('#detailPersonWorkEdit').val(),
     department:$('#departmentPersonWorkEdit').val(),
     date: day+"-"+month+"-"+year
   };
   usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').child(idPersonWork).update(updatePersonWork);

    $('#list_work_person').empty();

    dbPersonWork.on('child_added',snap=>{
      var name_award = snap.child('name_award').val();
      var name_work = snap.child('name_work').val();
      var detail = snap.child('detail').val();
      var department = snap.child('department').val();
      var date = snap.child('date').val();
      var status = snap.child('status').val();

      $('#list_work_person').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-work'+"'"+status+" >"+
                                "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                   "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                   "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-person-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                    " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-person-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

    });
 });

 dbPersonWork.on('child_added',snap=>{
   var name_award = snap.child('name_award').val();
   var name_work = snap.child('name_work').val();
   var detail = snap.child('detail').val();
   var department = snap.child('department').val();
   var date = snap.child('date').val();
   var status = snap.child('status').val();

   $('#list_work_person').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-person-work'+"'"+status+" >"+
                             "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-person-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                 " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-person-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

 });

 $('#list_work_person').on('click','.checkbox-person-work',function(){
   var id = $(this).closest('tr').attr("id");
   var check = $(this).closest('input[type=checkbox]').prop('checked');
   var status;

   if(check){
     status="checked";
   }else{
     status="check";
   }

   var dbStatus = {
     status:status
   };

   dbPersonWork.child(id).update(dbStatus);
 });

 $('#list_work_person').on('click','.btn-edit-person-work',function(){
 idPersonWork = $(this).closest('tr').attr('id');
 var name_award = $(this).closest('tr').find('.txtnameaward').text();
 var name_work = $(this).closest('tr').find('.txtnamework').text();
 var detail = $(this).closest('tr').find('.txtdetail').text();
 var department = $(this).closest('tr').find('.txtdepartment').text();
 var date = $(this).closest('tr').find('.txtdate').text();
 var day = date.split('-')[0];
 var month = date.split('-')[1];
 var year = date.split('-')[2];
 $('#nameAwardPersonWorkEdit').val(name_award);
 $('#nameWorkPersonWorkEdit').val(name_work);
 $('#detailPersonWorkEdit').val(detail);
 $('#departmentPersonWorkEdit').val(department);
 $('#datePersonWorkEdit').val(year+"-"+month+"-"+day);
 $('#editPersonWorkModal').modal('show');
 });

 $('#list_work_person').on('click','.btn-delete-person-work',function(){
 var id = $(this).closest('tr').attr("id");
 dbPersonWork.child(id).remove().then(function(){
     $('#deleteProfileModal').modal('show');
 });
    $(this).closest('tr').remove();
 });




 $("#searchInterWork").keyup(function () {
   var searchTerm = $("#searchInterWork").val();
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

 $('#selectWorkInterPrevious').on('change',function(){

    var i = 0;
   indexSelectYearPrevious = document.getElementById('selectWorkInterPrevious').selectedIndex ;

   if(indexSelectYearPrevious == 0){

     clickBtEditInterWork = clickBtEditInterWork+1;
     var yearInterWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

     $('#list_inter_work').empty();
    yearInterWork.on('child_added',snap=>{
      var name_award = snap.child('name_award').val();
      var name_work = snap.child('name_work').val();
      var detail = snap.child('detail').val();
      var department = snap.child('department').val();
      var date = snap.child('date').val();
      var status = snap.child('status').val();
      var type = snap.child('type').val();
      if(type == "inter_work"){
      $('#list_inter_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-work'+"'"+status+" >"+
                                "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                   "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                   "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                    " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

       }
    });
   }else if(indexSelectYearPrevious == 1){

     var yearSum = yearCurrent-1;
    clickBtEditInterWork = clickBtEditInterWork+1;
     var yearInterWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

     $('#list_inter_work').empty();
    yearInterWork.on('child_added',snap=>{
      var name_award = snap.child('name_award').val();
      var name_work = snap.child('name_work').val();
      var detail = snap.child('detail').val();
      var department = snap.child('department').val();
      var date = snap.child('date').val();
      var status = snap.child('status').val();
      var type = snap.child('type').val();
      var year = date.split("-")[2];

      if(type == "inter_work"){
        if(year >= yearSum){
      $('#list_inter_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-work'+"'"+status+" >"+
                                "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                   "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                   "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                    " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

       }
     }

    });

   }else if(indexSelectYearPrevious == 2){

    var yearSum = yearCurrent-5;
    clickBtEditInterWork = clickBtEditInterWork+1;
    var yearInterWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

    $('#list_inter_work').empty();
   yearInterWork.on('child_added',snap=>{
     var name_award = snap.child('name_award').val();
     var name_work = snap.child('name_work').val();
     var detail = snap.child('detail').val();
     var department = snap.child('department').val();
     var date = snap.child('date').val();
     var status = snap.child('status').val();
     var type = snap.child('type').val();
     var year = date.split("-")[2];

     if(type == "inter_work"){
       if(year >= yearSum){
     $('#list_inter_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-work'+"'"+status+" >"+
                               "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                  "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                  "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

      }
    }
   });
   }
 });


  $("#searchNationWork").keyup(function () {
    var searchTerm = $("#searchNationWork").val();
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
    $('.counter-nation-work').text(jobCount + ' item');

  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}

   });

  $('#selectWorkNationPrevious').on('change',function(){

     var i = 0;
    indexSelectYearPrevious = document.getElementById('selectWorkNationPrevious').selectedIndex ;

    if(indexSelectYearPrevious == 0){

      clickBtEditNationWork = clickBtEditNationWork+1;
      var yearNationWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

      $('#list_nation_work').empty();
     yearNationWork.on('child_added',snap=>{
       var name_award = snap.child('name_award').val();
       var name_work = snap.child('name_work').val();
       var detail = snap.child('detail').val();
       var department = snap.child('department').val();
       var date = snap.child('date').val();
       var status = snap.child('status').val();
       var type = snap.child('type').val();
       if(type == "nation_work"){
       $('#list_nation_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-work'+"'"+status+" >"+
                                 "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                    "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                    "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                     " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

        }
     });
    }else if(indexSelectYearPrevious == 1){

      var yearSum = yearCurrent-1;
     clickBtEditNationWork = clickBtEditNationWork+1;
      var yearNationWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

      $('#list_nation_work').empty();
     yearNationWork.on('child_added',snap=>{
       var name_award = snap.child('name_award').val();
       var name_work = snap.child('name_work').val();
       var detail = snap.child('detail').val();
       var department = snap.child('department').val();
       var date = snap.child('date').val();
       var status = snap.child('status').val();
       var type = snap.child('type').val();
       var year = date.split("-")[2];

       if(type == "nation_work"){
         if(year >= yearSum){
       $('#list_nation_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-work'+"'"+status+" >"+
                                 "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                    "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                    "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                     " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

        }
      }

     });

    }else if(indexSelectYearPrevious == 2){

     var yearSum = yearCurrent-5;
     clickBtEditNationWork = clickBtEditNationWork+1;
     var yearNationWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

     $('#list_nation_work').empty();
    yearNationWork.on('child_added',snap=>{
      var name_award = snap.child('name_award').val();
      var name_work = snap.child('name_work').val();
      var detail = snap.child('detail').val();
      var department = snap.child('department').val();
      var date = snap.child('date').val();
      var status = snap.child('status').val();
      var type = snap.child('type').val();
      var year = date.split("-")[2];

      if(type == "nation_work"){
        if(year >= yearSum){
      $('#list_nation_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-work'+"'"+status+" >"+
                                "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                   "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                   "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                    " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

       }
     }
    });
    }
  });

 $("#searchNationJour").keyup(function () {
   var searchTerm = $("#searchNationJour").val();
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


  $('#selectJourNationPrevious').on('change',function(){

     var i = 0;
    indexSelectYearPrevious = document.getElementById('selectJourNationPrevious').selectedIndex ;

    if(indexSelectYearPrevious == 0){

      clickBtEditNationJournal = clickBtEditNationJournal+1;
      var dbNationJournal = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
      $('#list_nation_jour').empty();

     dbNationJournal.on('child_added',snap=>{
       var article = snap.child('article').val();
       var status_author = snap.child('status_author').val();
       var code_research = snap.child('code_research').val();
       var name = snap.child('name').val();
       var type_journal = snap.child('type_journal').val();
       var year = snap.child('year').val();
       var no = snap.child('no').val();
       var type = snap.child('type').val();
       var status = snap.child('status').val();

       if(type == "nation_journal"){
       $('#list_nation_jour').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-jour'+"'"+status+" >"+
                                 "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                    "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                    "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                    "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                     " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
        }
     });
    }else if(indexSelectYearPrevious == 1){

      var yearSum = yearCurrent-1;
     clickBtEditNationJournal = clickBtEditNationJournal+1;
      var dbNationJournal = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
      $('#list_nation_jour').empty();

     dbNationJournal.on('child_added',snap=>{
       var article = snap.child('article').val();
       var status_author = snap.child('status_author').val();
       var code_research = snap.child('code_research').val();
       var name = snap.child('name').val();
       var type_journal = snap.child('type_journal').val();
       var year = snap.child('year').val();
       var no = snap.child('no').val();
       var type = snap.child('type').val();
       var status = snap.child('status').val();

       if(type == "nation_journal"){
         if(year >= yearSum){
       $('#list_nation_jour').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-jour'+"'"+status+" >"+
                                 "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                    "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                    "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                    "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                     " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
        }
      }
     });

    }else if(indexSelectYearPrevious == 2){

     var yearSum = yearCurrent-5;
     clickBtEditNationJournal = clickBtEditNationJournal+1;
     var dbNationJournal = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

     $('#list_nation_jour').empty();

    dbNationJournal.on('child_added',snap=>{
      var article = snap.child('article').val();
      var status_author = snap.child('status_author').val();
      var code_research = snap.child('code_research').val();
      var name = snap.child('name').val();
      var type_journal = snap.child('type_journal').val();
      var year = snap.child('year').val();
      var no = snap.child('no').val();
      var type = snap.child('type').val();
      var status = snap.child('status').val();

      if(type == "nation_journal"){
        if(year >= yearSum){
      $('#list_nation_jour').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-jour'+"'"+status+" >"+
                                "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                   "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                   "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                   "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                    " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
       }
     }
    });
    }
  });


   $("#searchInterJourNotBase").keyup(function () {
     var searchTerm = $("#searchInterJourNotBase").val();
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


    $('#selectJourInterNotBasePrevious').on('change',function(){

       var i = 0;
      indexSelectYearPrevious = document.getElementById('selectJourInterNotBasePrevious').selectedIndex ;

      if(indexSelectYearPrevious == 0){

        clickBtEditInterJournalNotDatabase = clickBtEditInterJournalNotDatabase+1;
        var dbInterJournalNotBase = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
        $('#list_inter_jour_not_database').empty();

       dbInterJournalNotBase.on('child_added',snap=>{
         var article = snap.child('article').val();
         var status_author = snap.child('status_author').val();
         var code_research = snap.child('code_research').val();
         var name = snap.child('name').val();
         var type_journal = snap.child('type_journal').val();
         var year = snap.child('year').val();
         var no = snap.child('no').val();
         var type = snap.child('type').val();
         var status = snap.child('status').val();

         if(type == "inter_journal_not_database"){
         $('#list_inter_jour_not_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-not-database'+"'"+status+" >"+
                                   "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                      "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                      "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                      "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                       " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
          }
       });
      }else if(indexSelectYearPrevious == 1){

        var yearSum = yearCurrent-1;
       clickBtEditInterJournalNotDatabase = clickBtEditInterJournalNotDatabase+1;
        var dbInterJournalNotBase = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
        $('#list_inter_jour_not_database').empty();

       dbInterJournalNotBase.on('child_added',snap=>{
         var article = snap.child('article').val();
         var status_author = snap.child('status_author').val();
         var code_research = snap.child('code_research').val();
         var name = snap.child('name').val();
         var type_journal = snap.child('type_journal').val();
         var year = snap.child('year').val();
         var no = snap.child('no').val();
         var type = snap.child('type').val();
         var status = snap.child('status').val();

         if(type == "inter_journal_not_database"){
           if(year >= yearSum){
         $('#list_inter_jour_not_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-not-database'+"'"+status+" >"+
                                   "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                      "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                      "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                      "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                       " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
          }
        }
       });

      }else if(indexSelectYearPrevious == 2){

        var yearSum = yearCurrent-5;
       clickBtEditInterJournalNotDatabase = clickBtEditInterJournalNotDatabase+1;
        var dbInterJournalNotBase = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
        $('#list_inter_jour_not_database').empty();

       dbInterJournalNotBase.on('child_added',snap=>{
         var article = snap.child('article').val();
         var status_author = snap.child('status_author').val();
         var code_research = snap.child('code_research').val();
         var name = snap.child('name').val();
         var type_journal = snap.child('type_journal').val();
         var year = snap.child('year').val();
         var no = snap.child('no').val();
         var type = snap.child('type').val();
         var status = snap.child('status').val();

         if(type == "inter_journal_not_database"){
           if(year >= yearSum){
         $('#list_inter_jour_not_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-not-database'+"'"+status+" >"+
                                   "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                      "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                      "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                      "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                       " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
          }
        }
       });
      }
    });


       $("#searchInterJourInBase").keyup(function () {
         var searchTerm = $("#searchInterJourInBase").val();
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
         $('.counter-inter-jour-in-base').text(jobCount + ' item');

       if(jobCount == '0') {$('.no-result').show();}
         else {$('.no-result').hide();}

        });


        $('#selectJourInterInBasePrevious').on('change',function(){

           var i = 0;
          indexSelectYearPrevious = document.getElementById('selectJourInterInBasePrevious').selectedIndex ;

          if(indexSelectYearPrevious == 0){

            clickBtEditInterJournalInDatabase = clickBtEditInterJournalInDatabase+1;
            var dbInterJournalInBase = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
            $('#list_inter_jour_in_database').empty();

           dbInterJournalInBase.on('child_added',snap=>{
             var article = snap.child('article').val();
             var status_author = snap.child('status_author').val();
             var code_research = snap.child('code_research').val();
             var name = snap.child('name').val();
             var type_journal = snap.child('type_journal').val();
             var year = snap.child('year').val();
             var no = snap.child('no').val();
             var type = snap.child('type').val();
             var status = snap.child('status').val();

             if(type == "inter_journal_in_database"){
             $('#list_inter_jour_in_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-not-database'+"'"+status+" >"+
                                       "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                          "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                          "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                          "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                           " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
              }
           });
          }else if(indexSelectYearPrevious == 1){

            var yearSum = yearCurrent-1;
           clickBtEditInterJournalInDatabase = clickBtEditInterJournalInDatabase+1;
            var dbInterJournalInBase = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
            $('#list_inter_jour_in_database').empty();

           dbInterJournalInBase.on('child_added',snap=>{
             var article = snap.child('article').val();
             var status_author = snap.child('status_author').val();
             var code_research = snap.child('code_research').val();
             var name = snap.child('name').val();
             var type_journal = snap.child('type_journal').val();
             var year = snap.child('year').val();
             var no = snap.child('no').val();
             var type = snap.child('type').val();
             var status = snap.child('status').val();

             if(type == "inter_journal_in_database"){
               if(year >= yearSum){
             $('#list_inter_jour_in_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-not-database'+"'"+status+" >"+
                                       "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                          "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                          "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                          "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                           " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
              }
            }
           });

          }else if(indexSelectYearPrevious == 2){

            var yearSum = yearCurrent-5;
           clickBtEditInterJournalInDatabase = clickBtEditInterJournalInDatabase+1;
            var dbInterJournalInBase = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
            $('#list_inter_jour_in_database').empty();

           dbInterJournalInBase.on('child_added',snap=>{
             var article = snap.child('article').val();
             var status_author = snap.child('status_author').val();
             var code_research = snap.child('code_research').val();
             var name = snap.child('name').val();
             var type_journal = snap.child('type_journal').val();
             var year = snap.child('year').val();
             var no = snap.child('no').val();
             var type = snap.child('type').val();
             var status = snap.child('status').val();

             if(type == "inter_journal_in_database"){
               if(year >= yearSum){
             $('#list_inter_jour_in_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-not-database'+"'"+status+" >"+
                                       "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                          "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                          "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                          "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                           " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
              }
            }
           });
          }

        });


        $("#searchNationConference").keyup(function () {
          var searchTerm = $("#searchNationConference").val();
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
          $('.counter-nation-conference').text(jobCount + ' item');

        if(jobCount == '0') {$('.no-result').show();}
          else {$('.no-result').hide();}

         });


         $('#selectConferenceNationPrevious').on('change',function(){

            var i = 0;
           indexSelectYearPrevious = document.getElementById('selectConferenceNationPrevious').selectedIndex ;

           if(indexSelectYearPrevious == 0){

             clickBtEditNationConference = clickBtEditNationConference+1;
             var dbNationConference = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
             $('#list_nation_conference').empty();

            dbNationConference.on('child_added',snap=>{
              var type_article = snap.child('type_article').val();
              var name_thai = snap.child('name_thai').val();
              var name_eng = snap.child('name_eng').val();
              var name = snap.child('name').val();
              var year = snap.child('year').val();
              var code_research = snap.child('code_research').val();
              var date_start = snap.child('date_start').val();
              var date_finish = snap.child('date_finish').val();
              var location = snap.child('location').val();
              var country = snap.child('country').val();
              var status = snap.child('status').val();
              var type = snap.child('type').val();

              if(type == "nation_conference"){
              $('#list_nation_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-conference'+"'"+status+" >"+
                                        "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                           "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                           "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                           "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                           "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                          "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
               }
            });
           }else if(indexSelectYearPrevious == 1){

             var yearSum = yearCurrent-1;
            clickBtEditNationConference = clickBtEditNationConference+1;
             var dbNationConference = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
             $('#list_nation_conference').empty();

            dbNationConference.on('child_added',snap=>{
              var type_article = snap.child('type_article').val();
              var name_thai = snap.child('name_thai').val();
              var name_eng = snap.child('name_eng').val();
              var name = snap.child('name').val();
              var year = snap.child('year').val();
              var code_research = snap.child('code_research').val();
              var date_start = snap.child('date_start').val();
              var date_finish = snap.child('date_finish').val();
              var location = snap.child('location').val();
              var country = snap.child('country').val();
              var status = snap.child('status').val();
              var type = snap.child('type').val();

              if(type == "nation_conference"){
                     if(year >= yearSum){
              $('#list_nation_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-conference'+"'"+status+" >"+
                                        "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                           "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                           "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                           "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                           "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                          "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                  }
               }
            });

           }else if(indexSelectYearPrevious == 2){

             var yearSum = yearCurrent-5;
            clickBtEditNationConference = clickBtEditNationConference+1;
             var dbNationConference = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
             $('#list_nation_conference').empty();

            dbNationConference.on('child_added',snap=>{
              var type_article = snap.child('type_article').val();
              var name_thai = snap.child('name_thai').val();
              var name_eng = snap.child('name_eng').val();
              var name = snap.child('name').val();
              var year = snap.child('year').val();
              var code_research = snap.child('code_research').val();
              var date_start = snap.child('date_start').val();
              var date_finish = snap.child('date_finish').val();
              var location = snap.child('location').val();
              var country = snap.child('country').val();
              var status = snap.child('status').val();
              var type = snap.child('type').val();

              if(type == "nation_conference"){
                     if(year >= yearSum){
              $('#list_nation_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-conference'+"'"+status+" >"+
                                        "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                           "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                           "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                           "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                           "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                          "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
               }
             }
            });
           }

         });


         $("#searchInterConference").keyup(function () {
           var searchTerm = $("#searchInterConference").val();
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
           $('.counter-inter-conference').text(jobCount + ' item');

         if(jobCount == '0') {$('.no-result').show();}
           else {$('.no-result').hide();}

          });


          $('#selectConferenceInterPrevious').on('change',function(){

             var i = 0;
            indexSelectYearPrevious = document.getElementById('selectConferenceInterPrevious').selectedIndex ;

            if(indexSelectYearPrevious == 0){

              clickBtEditInterConference = clickBtEditInterConference+1;
              var dbInterConference = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
              $('#list_inter_conference').empty();

             dbInterConference.on('child_added',snap=>{
               var type_article = snap.child('type_article').val();
               var name_thai = snap.child('name_thai').val();
               var name_eng = snap.child('name_eng').val();
               var name = snap.child('name').val();
               var year = snap.child('year').val();
               var code_research = snap.child('code_research').val();
               var date_start = snap.child('date_start').val();
               var date_finish = snap.child('date_finish').val();
               var location = snap.child('location').val();
               var country = snap.child('country').val();
               var status = snap.child('status').val();
               var type = snap.child('type').val();

               if(type == "inter_conference"){
               $('#list_inter_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-conference'+"'"+status+" >"+
                                         "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                            "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                            "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                            "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                           "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                }
             });
            }else if(indexSelectYearPrevious == 1){

              var yearSum = yearCurrent-1;
             clickBtEditInterConference = clickBtEditInterConference+1;
              var dbInterConference = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
              $('#list_inter_conference').empty();

             dbInterConference.on('child_added',snap=>{
               var type_article = snap.child('type_article').val();
               var name_thai = snap.child('name_thai').val();
               var name_eng = snap.child('name_eng').val();
               var name = snap.child('name').val();
               var year = snap.child('year').val();
               var code_research = snap.child('code_research').val();
               var date_start = snap.child('date_start').val();
               var date_finish = snap.child('date_finish').val();
               var location = snap.child('location').val();
               var country = snap.child('country').val();
               var status = snap.child('status').val();
               var type = snap.child('type').val();

               if(type == "inter_conference"){
                if(year >= yearSum){
               $('#list_inter_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-conference'+"'"+status+" >"+
                                         "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                            "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                            "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                            "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                           "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                   }
                }
             });

            }else if(indexSelectYearPrevious == 2){

              var yearSum = yearCurrent-5;
             clickBtEditInterConference = clickBtEditInterConference+1;
              var dbInterConference = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');
              $('#list_inter_conference').empty();

             dbInterConference.on('child_added',snap=>{
               var type_article = snap.child('type_article').val();
               var name_thai = snap.child('name_thai').val();
               var name_eng = snap.child('name_eng').val();
               var name = snap.child('name').val();
               var year = snap.child('year').val();
               var code_research = snap.child('code_research').val();
               var date_start = snap.child('date_start').val();
               var date_finish = snap.child('date_finish').val();
               var location = snap.child('location').val();
               var country = snap.child('country').val();
               var status = snap.child('status').val();
               var type = snap.child('type').val();

               if(type == "inter_conference"){
                if(year >= yearSum){
               $('#list_inter_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-conference'+"'"+status+" >"+
                                         "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                            "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                            "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                            "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                           "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                }
              }
             });
            }

          });

 $('#headNationJour').hide();
 $('#tableNationJour').hide();
 $('#headInterJourNotDatabase').hide();
 $('#tableInterJourNotDatabase').hide();
 $('#headInterJourInDatabase').hide();
 $('#tableInterJourInDatabase').hide();
 $('#headNationWork').hide();
 $('#tableNationWork').hide();
 $('#headNationConference').hide();
 $('#tableNationConference').hide();
 $('#headInterConference').hide();
 $('#tableInterConference').hide();


 $('#selectAcdemicWork').on('change',function(){
    indexSelectAcademicWork = document.getElementById('selectAcdemicWork').selectedIndex ;

if(indexSelectAcademicWork == 0){

  $('#headInterWork').show();
  $('#tableInterWork').show();
  $('#headNationJour').hide();
  $('#tableNationJour').hide();
  $('#headInterJourNotDatabase').hide();
  $('#tableInterJourNotDatabase').hide();
  $('#headInterJourInDatabase').hide();
  $('#tableInterJourInDatabase').hide();
  $('#headNationWork').hide();
  $('#tableNationWork').hide();
  $('#headNationConference').hide();
  $('#tableNationConference').hide();
  $('#headInterConference').hide();
  $('#tableInterConference').hide();

}else if(indexSelectAcademicWork == 1){

  $('#headNationWork').show();
  $('#tableNationWork').show();
  $('#headInterWork').hide();
  $('#tableInterWork').hide();
  $('#headNationJour').hide();
  $('#tableNationJour').hide();
  $('#headInterJourNotDatabase').hide();
  $('#tableInterJourNotDatabase').hide();
  $('#headNationConference').hide();
  $('#tableNationConference').hide();
  $('#headInterConference').hide();
  $('#tableInterConference').hide();
  $('#headInterJourInDatabase').hide();
  $('#tableInterJourInDatabase').hide();

}else if(indexSelectAcademicWork == 2){

  $('#headNationJour').show();
  $('#tableNationJour').show();
  $('#headInterWork').hide();
  $('#tableInterWork').hide();
  $('#headInterJourNotDatabase').hide();
  $('#tableInterJourNotDatabase').hide();
  $('#headNationWork').hide();
  $('#tableNationWork').hide();
  $('#headNationConference').hide();
  $('#tableNationConference').hide();
  $('#headInterConference').hide();
  $('#tableInterConference').hide();
  $('#headInterJourInDatabase').hide();
  $('#tableInterJourInDatabase').hide();

}else if(indexSelectAcademicWork == 3){

  $('#headInterJourNotDatabase').show();
  $('#tableInterJourNotDatabase').show();
  $('#headInterJourInDatabase').hide();
  $('#tableInterJourInDatabase').hide();
  $('#headNationWork').hide();
  $('#tableNationWork').hide();
   $('#headInterWork').hide();
   $('#tableInterWork').hide();
   $('#headNationJour').hide();
   $('#tableNationJour').hide();
   $('#headNationConference').hide();
   $('#tableNationConference').hide();
   $('#headInterConference').hide();
   $('#tableInterConference').hide();

}else if(indexSelectAcademicWork == 4){

  $('#headInterJourInDatabase').show();
  $('#tableInterJourInDatabase').show();
  $('#headInterWork').hide();
  $('#tableInterWork').hide();
  $('#headNationJour').hide();
  $('#tableNationJour').hide();
  $('#headInterJourNotDatabase').hide();
  $('#tableInterJourNotDatabase').hide();
  $('#headNationWork').hide();
  $('#tableNationWork').hide();
  $('#headNationConference').hide();
  $('#tableNationConference').hide();
  $('#headInterConference').hide();
  $('#tableInterConference').hide();

}else if(indexSelectAcademicWork == 5){

  $('#headNationConference').show();
  $('#tableNationConference').show();
  $('#headInterConference').hide();
  $('#tableInterConference').hide();
  $('#headInterJourInDatabase').hide();
  $('#tableInterJourInDatabase').hide();
  $('#headInterWork').hide();
  $('#tableInterWork').hide();
  $('#headNationJour').hide();
  $('#tableNationJour').hide();
  $('#headInterJourNotDatabase').hide();
  $('#tableInterJourNotDatabase').hide();
  $('#headNationWork').hide();
  $('#tableNationWork').hide();

}else if(indexSelectAcademicWork == 6){
  $('#headInterConference').show();
  $('#tableInterConference').show();
  $('#headNationConference').hide();
  $('#tableNationConference').hide();
  $('#headInterJourInDatabase').hide();
  $('#tableInterJourInDatabase').hide();
  $('#headInterWork').hide();
  $('#tableInterWork').hide();
  $('#headNationJour').hide();
  $('#tableNationJour').hide();
  $('#headInterJourNotDatabase').hide();
  $('#tableInterJourNotDatabase').hide();
  $('#headNationWork').hide();
  $('#tableNationWork').hide();
}
 });

 $('#btOpenModalInterWork').on('click',function(){
   $('#addInterWorkModal').modal('show');
 });

 $('#btOpenModalNationWork').on('click',function(){
   $('#addNationWorkModal').modal('show');
 });

 $('#btOpenModalNationJournal').on('click',function(){
   $('#addNationJournalModal').modal('show');
 });

 $('#btOpenModalInterJournalNotDatabase').on('click',function(){
   $('#addInterJournalNotDatabaseModal').modal('show');
 });

 $('#btOpenModalInterJournalInDatabase').on('click',function(){
   $('#addInterJournalInDatabaseModal').modal('show');
 });

 $('#btOpenModalNationConference').on('click',function(){
   $('#addNationConferenceModal').modal('show');
 });

 $('#btOpenModalInterConference').on('click',function(){
   $('#addInterConferenceModal').modal('show');
 });


$('#btOpenModalSubjectAdd').on('click',function(){
  $('#addSubjectModal').modal('show');
});

var idSubject;
var clickBtEditSubject=0;

$('#btAddSubject').on('click',function(){
  var dataSubject = {
    semester:$('#semesterSubjectAdd').val(),
    subject:$('#nameSubjectAdd').val(),
    code:$('#codeSubjectAdd').val(),
    credit:$('#creditSubjectAdd').val()
  }
  usersRef.child(sessionStorage.getItem("userId")).child('subject').push().set(dataSubject);
  for(i=0;i<clickBtEditSubject;i++){
    $('#list_subject tr:last').remove();
  }
  $('#semesterSubjectAdd').val("");
  $('#nameSubjectAdd').val("");
  $('#codeSubjectAdd').val("");
  $('#creditSubjectAdd').val("");
});

var roofSubject = usersRef.child(sessionStorage.getItem("userId")).child('subject');
roofSubject.on('child_added',snap=>{
  var semester = snap.child('semester').val();
  var subject = snap.child('subject').val();
  var code = snap.child('code').val();
  var credit = snap.child('credit').val();

  $('#list_subject').append("<tr id='"+snap.key+"'><td class='"+'txtsemester'+"'>"+semester+"</td><td  class='"+'txtcode'+"' >"+code+"</td><td  class='"+'txtsubject'+"'>"+subject+"</td><td  class='"+'txtcredit'+"'>"+credit+"</td>"+
                            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-subject'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                            "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-subject'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");

});

  $('#list_subject').on('click','.btn-edit-subject',function(){
    idSubject = $(this).closest('tr').attr('id');
    var semester = $(this).closest('tr').find('.txtsemester').text();
    var  code = $(this).closest('tr').find('.txtcode').text();
    var subject = $(this).closest('tr').find('.txtsubject').text();
    var credit = $(this).closest('tr').find('.txtcredit').text();
    $('#semesterSubjectEdit').val(semester);
    $('#nameSubjectEdit').val(subject);
    $('#codeSubjectEdit').val(code);
    $('#creditSubjectEdit').val(credit);
    $('#editSubjectModal').modal('show');
  });

  $('#list_subject').on('click','.btn-delete-subject',function(){
    var id = $(this).closest('tr').attr("id");
    roofSubject.child(id).remove().then(function(){
        $('#deleteProfileModal').modal('show');
    });
      $(this).closest('tr').remove();
  });

  $('#btEditSubject').on('click',function(){
    clickBtEditSubject=clickBtEditSubject+1;
    var updateSubject = {
      semester:$('#semesterSubjectEdit').val(),
      subject:$('#nameSubjectEdit').val(),
      code:$('#codeSubjectEdit').val(),
      credit:$('#creditSubjectEdit').val()
    };

    usersRef.child(sessionStorage.getItem("userId")).child('subject').child(idSubject).update(updateSubject);
      $('#list_subject').empty();
    roofSubject.on('child_added',snap=>{
      var semester = snap.child('semester').val();
      var subject = snap.child('subject').val();
      var code = snap.child('code').val();
      var credit = snap.child('credit').val();

      $('#list_subject').append("<tr id='"+snap.key+"'><td class='"+'txtsemester'+"'>"+semester+"</td><td  class='"+'txtcode'+"' >"+code+"</td><td  class='"+'txtsubject'+"'>"+subject+"</td><td  class='"+'txtcredit'+"'>"+credit+"</td>"+
                                "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-subject'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-subject'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
        });
    $('#editSubjectModal').modal('hide');

    $('#semesterSubjectEdit').val("");
    $('#nameSubjectEdit').val("");
    $('#codeSubjectEdit').val("");
    $('#creditSubjectEdit').val("");

  });


<!--=========================== Add And Edit Inter Work =============================-->

var idInterWork;
var dbInterWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

 $('#btEditInterWork').on('click',function(){
   clickBtEditInterWork = clickBtEditInterWork+1;

   var dateSplit = $('#dateInterWorkEdit').val();
   var year = dateSplit.split('-')[0];
   var month = dateSplit.split('-')[1];
   var day = dateSplit.split('-')[2];

   var updateInterWork = {
     name_award:$('#nameAwardInterWorkEdit').val(),
     name_work:$('#nameWorkInterWorkEdit').val(),
     detail:$('#detailInterWorkEdit').val(),
     department:$('#departmentInterWorkEdit').val(),
     date: day+"-"+month+"-"+year
   };
   usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').child(idInterWork).update(updateInterWork);

    $('#list_inter_work').empty();

   dbInterWork.on('child_added',snap=>{
     var name_award = snap.child('name_award').val();
     var name_work = snap.child('name_work').val();
     var detail = snap.child('detail').val();
     var department = snap.child('department').val();
     var date = snap.child('date').val();
     var status = snap.child('status').val();
     var type = snap.child('type').val();
     if(type == "inter_work"){

     $('#list_inter_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-work'+"'"+status+" >"+
                               "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                  "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                  "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
      }
   });
   $('#nameAwardInterWorkEdit').val("");
   $('#nameWorkInterWorkEdit').val("");
   $('#detailInterWorkEdit').val("");
   $('#departmentInterWorkEdit').val("");
   $('#dateInterWorkEdit').val("");
   $('#editInterWorkModal').modal('hide');
 });


 $('#btAddInterWork').on('click',function(){
   $('#addInterWorkModal').modal('hide');

   var dateSplit = $('#dateInterWorkAdd').val();
   var year = dateSplit.split('-')[0];
   var month = dateSplit.split('-')[1];
   var day = dateSplit.split('-')[2];

   var dataInterWork = {
     type:"inter_work",
     name_award:$('#nameAwardInterWorkAdd').val(),
     name_work:$('#nameWorkInterWorkAdd').val(),
     detail:$('#detailInterWorkAdd').val(),
     department:$('#departmentInterWorkAdd').val(),
     date:  day+"-"+month+"-"+year,
     status:"checked"
   }

   usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').push().set(dataInterWork);

   for(i=0;i<clickBtEditInterWork;i++){
     $('#list_inter_work tr:last').remove();
   }
   $('#nameAwardInterWorkAdd').val("");
   $('#nameWorkInterWorkAdd').val("");
   $('#detailInterWorkAdd').val("");
   $('#departmentInterWorkAdd').val("");
   $('#dateInterWorkAdd').val("");
 });


 dbInterWork.on('child_added',snap=>{
   var name_award = snap.child('name_award').val();
   var name_work = snap.child('name_work').val();
   var detail = snap.child('detail').val();
   var department = snap.child('department').val();
   var date = snap.child('date').val();
   var status = snap.child('status').val();
   var type = snap.child('type').val();
   if(type == "inter_work"){
   $('#list_inter_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-work'+"'"+status+" >"+
                             "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                 " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
      }
 });


   $('#list_inter_work').on('click','.checkbox-inter-work',function(){
     var id = $(this).closest('tr').attr("id");
     var check = $(this).closest('input[type=checkbox]').prop('checked');
     var status;

     if(check){
       status="checked";
     }else{
       status="check";
     }

     var dbStatus = {
       status:status
     };

     dbInterWork.child(id).update(dbStatus);
   });

 $('#list_inter_work').on('click','.btn-edit-inter-work',function(){
   idInterWork = $(this).closest('tr').attr('id');
   var name_award = $(this).closest('tr').find('.txtnameaward').text();
   var name_work = $(this).closest('tr').find('.txtnamework').text();
   var detail = $(this).closest('tr').find('.txtdetail').text();
   var department = $(this).closest('tr').find('.txtdepartment').text();
   var date = $(this).closest('tr').find('.txtdate').text();
   var day = date.split('-')[0];
   var month = date.split('-')[1];
   var year = date.split('-')[2];
   $('#nameAwardInterWorkEdit').val(name_award);
   $('#nameWorkInterWorkEdit').val(name_work);
   $('#detailInterWorkEdit').val(detail);
   $('#departmentInterWorkEdit').val(department);
   $('#dateInterWorkEdit').val(year+"-"+month+"-"+day);
   $('#editInterWorkModal').modal('show');
 });

 $('#list_inter_work').on('click','.btn-delete-inter-work',function(){
   var id = $(this).closest('tr').attr("id");
   dbInterWork.child(id).remove().then(function(){
       $('#deleteProfileModal').modal('show');
   });
     $(this).closest('tr').remove();
 });

 <!--============================================================================-->


 <!--=========================== Add And Edit Nation Work =============================-->

 var idNationWork;
 var clickBtEditNationWork=0;
 var dbNationWork = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

  $('#btEditNationWork').on('click',function(){
    clickBtEditNationWork = clickBtEditNationWork+1;

    var dateSplit = $('#dateNationWorkEdit').val();
    var year = dateSplit.split('-')[0];
    var month = dateSplit.split('-')[1];
    var day = dateSplit.split('-')[2];

    var updateNationWork = {
      name_award:$('#nameAwardNationWorkEdit').val(),
      name_work:$('#nameWorkNationWorkEdit').val(),
      detail:$('#detailNationWorkEdit').val(),
      department:$('#departmentNationWorkEdit').val(),
      date: day+"-"+month+"-"+year
    };
    usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').child(idNationWork).update(updateNationWork);

     $('#list_nation_work').empty();

    dbNationWork.on('child_added',snap=>{
      var name_award = snap.child('name_award').val();
      var name_work = snap.child('name_work').val();
      var detail = snap.child('detail').val();
      var department = snap.child('department').val();
      var date = snap.child('date').val();
      var status = snap.child('status').val();
      var type = snap.child('type').val();

      if(type == "nation_work"){
      $('#list_nation_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-work'+"'"+status+" >"+
                                "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                   "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                   "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                    " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
      }
    });

    $('#nameAwardNationWorkEdit').val("");
    $('#nameWorkNationWorkEdit').val("");
    $('#detailNationWorkEdit').val("");
    $('#departmentNationWorkEdit').val("");
    $('#dateNationWorkEdit').val("");
    $('#editNationWorkModal').modal('hide');
  });


  $('#btAddNationWork').on('click',function(){
    $('#addNationWorkModal').modal('hide');

    var dateSplit = $('#dateNationWorkAdd').val();
    var year = dateSplit.split('-')[0];
    var month = dateSplit.split('-')[1];
    var day = dateSplit.split('-')[2];

    var dataNationWork = {
      type:"nation_work",
      name_award:$('#nameAwardNationWorkAdd').val(),
      name_work:$('#nameWorkNationWorkAdd').val(),
      detail:$('#detailNationWorkAdd').val(),
      department:$('#departmentNationWorkAdd').val(),
      date:  day+"-"+month+"-"+year,
      status:"checked"
    }

    usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').push().set(dataNationWork);

    for(i=0;i<clickBtEditNationWork;i++){
      $('#list_nation_work tr:last').remove();
    }
    $('#nameAwardNationWorkAdd').val("");
    $('#nameWorkNationWorkAdd').val("");
    $('#detailNationWorkAdd').val("");
    $('#departmentNationWorkAdd').val("");
    $('#dateNationWorkAdd').val("");
  });


  dbNationWork.on('child_added',snap=>{
    var name_award = snap.child('name_award').val();
    var name_work = snap.child('name_work').val();
    var detail = snap.child('detail').val();
    var department = snap.child('department').val();
    var date = snap.child('date').val();
    var status = snap.child('status').val();
    var type = snap.child('type').val();

    if(type == "nation_work"){
    $('#list_nation_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-work'+"'"+status+" >"+
                              "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtnameaward'+"'>"+name_award+"</td><td class='"+'txtnamework'+"'>"+name_work+"</td>"+
                                 "<td class='"+'txtdetail'+"' >"+detail+"</td><td class='"+'txtdepartment'+"'>"+department+"</td>"+
                                 "<td class='"+'txtdate'+"'>"+date+"</td><td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                  " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
    }
  });


    $('#list_nation_work').on('click','.checkbox-nation-work',function(){
      var id = $(this).closest('tr').attr("id");
      var check = $(this).closest('input[type=checkbox]').prop('checked');
      var status;

      if(check){
        status="checked";
      }else{
        status="check";
      }

      var dbStatus = {
        status:status
      };

      dbNationWork.child(id).update(dbStatus);
    });

  $('#list_nation_work').on('click','.btn-edit-nation-work',function(){
    idNationWork = $(this).closest('tr').attr('id');
    var name_award = $(this).closest('tr').find('.txtnameaward').text();
    var name_work = $(this).closest('tr').find('.txtnamework').text();
    var detail = $(this).closest('tr').find('.txtdetail').text();
    var department = $(this).closest('tr').find('.txtdepartment').text();
    var date = $(this).closest('tr').find('.txtdate').text();
    var day = date.split('-')[0];
    var month = date.split('-')[1];
    var year = date.split('-')[2];
    $('#nameAwardNationWorkEdit').val(name_award);
    $('#nameWorkNationWorkEdit').val(name_work);
    $('#detailNationWorkEdit').val(detail);
    $('#departmentNationWorkEdit').val(department);
    $('#dateNationWorkEdit').val(year+"-"+month+"-"+day);
    $('#editNationWorkModal').modal('show');
  });

  $('#list_nation_work').on('click','.btn-delete-nation-work',function(){
    var id = $(this).closest('tr').attr("id");
    dbNationWork.child(id).remove().then(function(){
        $('#deleteProfileModal').modal('show');
    });
      $(this).closest('tr').remove();
  });

  <!--============================================================================-->

  <!--=========================== Add And Edit Nation Journal =============================-->

  var idNationJournal;
  var clickBtEditNationJournal=0;
  var dbNationJournal = usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

   $('#btEditNationJournal').on('click',function(){
     clickBtEditNationJournal = clickBtEditNationJournal+1;

     var updateNationJournal = {
       article:$('#articleNationJournalEdit').val(),
       status_author:$('#statusNationJournalEdit').val(),
       code_research:$('#codeResearchNationJournalEdit').val(),
       name:$('#nameNationJournalEdit').val(),
       type_journal: $('#typeNationJournalEdit').val(),
       year:$('#yearNationJournalEdit').val(),
       no:$('#noNationJournalEdit').val()
     };
     usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').child(idNationJournal).update(updateNationJournal);

      $('#list_nation_jour').empty();

     dbNationJournal.on('child_added',snap=>{
       var article = snap.child('article').val();
       var status_author = snap.child('status_author').val();
       var code_research = snap.child('code_research').val();
       var name = snap.child('name').val();
       var type_journal = snap.child('type_journal').val();
       var year = snap.child('year').val();
       var no = snap.child('no').val();
       var type = snap.child('type').val();
       var status = snap.child('status').val();

       if(type == "nation_journal"){
       $('#list_nation_jour').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-jour'+"'"+status+" >"+
                                 "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                    "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                    "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                    "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                     " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
        }
     });

     $('#articleNationJournalEdit').val(""),
     $('#statusNationJournalEdit').val(""),
     $('#codeResearchNationJournalEdit').val(""),
     $('#nameNationJournalEdit').val(""),
     $('#typeNationJournalEdit').val(""),
     $('#yearNationJournalEdit').val(""),
     $('#noNationJournalEdit').val("")
     $('#editNationJournalModal').modal('hide');
   });


   $('#btNationJournalAdd').on('click',function(){
     $('#addNationJournalModal').modal('hide');


     var dataNationJournal = {
       type:"nation_journal",
       article:$('#articleNationJournalAdd').val(),
       status_author:$('#statusNationJournalAdd').val(),
       code_research:$('#codeResearchNationJournalAdd').val(),
       name:$('#nameNationJournalAdd').val(),
       type_journal: $('#typeNationJournalAdd').val(),
       year:$('#yearNationJournalAdd').val(),
       no:$('#noNationJournalAdd').val(),
       status:"checked"
     };

     usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').push().set(dataNationJournal);

     for(i=0;i<clickBtEditNationJournal;i++){
       $('#list_nation_jour tr:last').remove();
     }

     $('#articleNationJournalAdd').val(""),
     $('#statusNationJournalAdd').val(""),
     $('#codeResearchNationJournalAdd').val(""),
     $('#nameNationJournalAdd').val(""),
     $('#typeNationJournalAdd').val(""),
     $('#yearNationJournalAdd').val(""),
     $('#noNationJournalAdd').val("")
   });


   dbNationJournal.on('child_added',snap=>{
     var article = snap.child('article').val();
     var status_author = snap.child('status_author').val();
     var code_research = snap.child('code_research').val();
     var name = snap.child('name').val();
     var type_journal = snap.child('type_journal').val();
     var year = snap.child('year').val();
     var no = snap.child('no').val();
     var type = snap.child('type').val();
     var status = snap.child('status').val();
     if(type == "nation_journal"){
     $('#list_nation_jour').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-jour'+"'"+status+" >"+
                               "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                  "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                  "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                  "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-jour'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
      }
   });


     $('#list_nation_jour').on('click','.checkbox-nation-journal',function(){
       var id = $(this).closest('tr').attr("id");
       var check = $(this).closest('input[type=checkbox]').prop('checked');
       var status;

       if(check){
         status="checked";
       }else{
         status="check";
       }

       var dbStatus = {
         status:status
       };

       dbNationJournal.child(id).update(dbStatus);
     });

   $('#list_nation_jour').on('click','.btn-edit-nation-jour',function(){
     idNationJournal = $(this).closest('tr').attr('id');

     var article = $(this).closest('tr').find('.txtarticle').text();
     var status_author = $(this).closest('tr').find('.txtstatusauthor').text();
     var code_research = $(this).closest('tr').find('.txtcoderesearch').text();
     var name = $(this).closest('tr').find('.txtname').text();
     var type_journal = $(this).closest('tr').find('.txttypejournal').text();
     var year = $(this).closest('tr').find('.txtyear').text();
     var no = $(this).closest('tr').find('.txtno').text();

     $('#articleNationJournalEdit').val(article),
     $('#statusNationJournalEdit').val(status_author),
     $('#codeResearchNationJournalEdit').val(code_research),
     $('#nameNationJournalEdit').val(name),
     $('#typeNationJournalEdit').val(type_journal),
     $('#yearNationJournalEdit').val(year),
     $('#noNationJournalEdit').val(no)
     $('#editNationJournalModal').modal('show');
   });

   $('#list_nation_jour').on('click','.btn-delete-nation-jour',function(){
     var id = $(this).closest('tr').attr("id");
     dbNationJournal.child(id).remove().then(function(){
         $('#deleteProfileModal').modal('show');
     });
       $(this).closest('tr').remove();
   });

   <!--============================================================================-->


  <!--=========================== Add And Edit Inter Journal Not Database =============================-->

     var idInterJournalNotDatabase;
     var clickBtEditInterJournalNotDatabase=0;
     var dbInterJournalNotDatabase= usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

      $('#btEditInterJournalNotDatabase').on('click',function(){
        clickBtEditInterJournalNotDatabase = clickBtEditInterJournalNotDatabase+1;

        var updateInterJournalNotDatabase = {
          article:$('#articleInterJournalNotDatabaseEdit').val(),
          status_author:$('#statusInterJournalNotDatabaseEdit').val(),
          code_research:$('#codeResearchInterJournalNotDatabaseEdit').val(),
          name:$('#nameInterJournalNotDatabaseEdit').val(),
          type_journal: $('#typeInterJournalNotDatabaseEdit').val(),
          year:$('#yearInterJournalNotDatabaseEdit').val(),
          no:$('#noInterJournalNotDatabaseEdit').val()
        };
        usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').child(idInterJournalNotDatabase).update(updateInterJournalNotDatabase);

         $('#list_inter_jour_not_database').empty();

        dbInterJournalNotDatabase.on('child_added',snap=>{
          var article = snap.child('article').val();
          var status_author = snap.child('status_author').val();
          var code_research = snap.child('code_research').val();
          var name = snap.child('name').val();
          var type_journal = snap.child('type_journal').val();
          var year = snap.child('year').val();
          var no = snap.child('no').val();
          var type = snap.child('type').val();
          var status = snap.child('status').val();

          if(type == "inter_journal_not_database"){
          $('#list_inter_jour_not_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-not-database'+"'"+status+" >"+
                                    "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                       "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                       "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                       "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                        " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
           }
        });

        $('#articleInterJournalNotDatabaseEdit').val(""),
        $('#statusInterJournalNotDatabaseEdit').val(""),
        $('#codeResearchInterJournalNotDatabaseEdit').val(""),
        $('#nameInterJournalNotDatabaseEdit').val(""),
        $('#typeInterJournalNotDatabaseEdit').val(""),
        $('#yearInterJournalNotDatabaseEdit').val(""),
        $('#noInterJournalNotDatabaseEdit').val("")
        $('#editInterJournalNotDatabaseModal').modal('hide');
      });


      $('#btInterJournalNotDatabaseAdd').on('click',function(){
        $('#addInterJournalNotDatabaseModal').modal('hide');


        var dataInterJournalNotDatabase = {
          type:"inter_journal_not_database",
          article:$('#articleInterJournalNotDatabaseAdd').val(),
          status_author:$('#statusInterJournalNotDatabaseAdd').val(),
          code_research:$('#codeResearchInterJournalNotDatabaseAdd').val(),
          name:$('#nameInterJournalNotDatabaseAdd').val(),
          type_journal: $('#typeInterJournalNotDatabaseAdd').val(),
          year:$('#yearInterJournalNotDatabaseAdd').val(),
          no:$('#noInterJournalNotDatabaseAdd').val(),
          status:"checked"
        };

        usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').push().set(dataInterJournalNotDatabase);

        for(i=0;i<clickBtEditInterJournalNotDatabase;i++){
          $('#list_inter_jour_not_database tr:last').remove();
        }

        $('#articleInterJournalNotDatabaseAdd').val(""),
        $('#statusInterJournalNotDatabaseAdd').val(""),
        $('#codeResearchInterJournalNotDatabaseAdd').val(""),
        $('#nameInterJournalNotDatabaseAdd').val(""),
        $('#typeInterJournalNotDatabaseAdd').val(""),
        $('#yearInterJournalNotDatabaseAdd').val(""),
        $('#noInterJournalNotDatabaseAdd').val("")
      });


      dbInterJournalNotDatabase.on('child_added',snap=>{
        var article = snap.child('article').val();
        var status_author = snap.child('status_author').val();
        var code_research = snap.child('code_research').val();
        var name = snap.child('name').val();
        var type_journal = snap.child('type_journal').val();
        var year = snap.child('year').val();
        var no = snap.child('no').val();
        var type = snap.child('type').val();
        var status = snap.child('status').val();
        if(type == "inter_journal_not_database"){
        $('#list_inter_jour_not_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-not-database'+"'"+status+" >"+
                                  "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                     "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                     "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                     "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                      " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-not-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
         }
      });


        $('#list_inter_jour_not_database').on('click','.checkbox-inter-jour-not-database',function(){
          var id = $(this).closest('tr').attr("id");
          var check = $(this).closest('input[type=checkbox]').prop('checked');
          var status;

          if(check){
            status="checked";
          }else{
            status="check";
          }

          var dbStatus = {
            status:status
          };

          dbInterJournalNotDatabase.child(id).update(dbStatus);
        });

      $('#list_inter_jour_not_database').on('click','.btn-edit-inter-jour-not-database',function(){
        idInterJournalNotDatabase= $(this).closest('tr').attr('id');

        var article = $(this).closest('tr').find('.txtarticle').text();
        var status_author = $(this).closest('tr').find('.txtstatusauthor').text();
        var code_research = $(this).closest('tr').find('.txtcoderesearch').text();
        var name = $(this).closest('tr').find('.txtname').text();
        var type_journal = $(this).closest('tr').find('.txttypejournal').text();
        var year = $(this).closest('tr').find('.txtyear').text();
        var no = $(this).closest('tr').find('.txtno').text();

        $('#articleInterJournalNotDatabaseEdit').val(article),
        $('#statusInterJournalNotDatabaseEdit').val(status_author),
        $('#codeResearchInterJournalNotDatabaseEdit').val(code_research),
        $('#nameInterJournalNotDatabaseEdit').val(name),
        $('#typeInterJournalNotDatabaseEdit').val(type_journal),
        $('#yearInterJournalNotDatabaseEdit').val(year),
        $('#noInterJournalNotDatabaseEdit').val(no)
        $('#editInterJournalNotDatabaseModal').modal('show');
      });

      $('#list_inter_jour_not_database').on('click','.btn-delete-inter-jour-not-database',function(){
        var id = $(this).closest('tr').attr("id");
        dbInterJournalNotDatabase.child(id).remove().then(function(){
            $('#deleteProfileModal').modal('show');
        });
          $(this).closest('tr').remove();
      });
<!--============================================================================-->

<!--=========================== Add And Edit Inter Journal In Database =============================-->

         var idInterJournalInDatabase;
         var clickBtEditInterJournalInDatabase=0;
         var dbInterJournalInDatabase= usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

          $('#btEditInterJournalInDatabase').on('click',function(){
            clickBtEditInterJournalInDatabase = clickBtEditInterJournalInDatabase+1;

            var updateInterJournalInDatabase = {
              article:$('#articleInterJournalInDatabaseEdit').val(),
              status_author:$('#statusInterJournalInDatabaseEdit').val(),
              code_research:$('#codeResearchInterJournalInDatabaseEdit').val(),
              name:$('#nameInterJournalInDatabaseEdit').val(),
              type_journal: $('#typeInterJournalInDatabaseEdit').val(),
              year:$('#yearInterJournalInDatabaseEdit').val(),
              no:$('#noInterJournalInDatabaseEdit').val()
            };
            usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').child(idInterJournalInDatabase).update(updateInterJournalInDatabase);

             $('#list_inter_jour_in_database').empty();

            dbInterJournalInDatabase.on('child_added',snap=>{
              var article = snap.child('article').val();
              var status_author = snap.child('status_author').val();
              var code_research = snap.child('code_research').val();
              var name = snap.child('name').val();
              var type_journal = snap.child('type_journal').val();
              var year = snap.child('year').val();
              var no = snap.child('no').val();
              var type = snap.child('type').val();
              var status = snap.child('status').val();

              if(type == "inter_journal_in_database"){
              $('#list_inter_jour_in_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-in-database'+"'"+status+" >"+
                                        "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                           "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                           "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                           "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-in-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                            " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-in-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
               }
            });

            $('#articleInterJournalInDatabaseEdit').val(""),
            $('#statusInterJournalInDatabaseEdit').val(""),
            $('#codeResearchInterJournalInDatabaseEdit').val(""),
            $('#nameInterJournalInDatabaseEdit').val(""),
            $('#typeInterJournalInDatabaseEdit').val(""),
            $('#yearInterJournalInDatabaseEdit').val(""),
            $('#noInterJournalInDatabaseEdit').val("")
            $('#editInterJournalInDatabaseModal').modal('hide');
          });


          $('#btInterJournalInDatabaseAdd').on('click',function(){
            $('#addInterJournalInDatabaseModal').modal('hide');


            var dataInterJournalInDatabase = {
              type:"inter_journal_in_database",
              article:$('#articleInterJournalInDatabaseAdd').val(),
              status_author:$('#statusInterJournalInDatabaseAdd').val(),
              code_research:$('#codeResearchInterJournalInDatabaseAdd').val(),
              name:$('#nameInterJournalInDatabaseAdd').val(),
              type_journal: $('#typeInterJournalInDatabaseAdd').val(),
              year:$('#yearInterJournalInDatabaseAdd').val(),
              no:$('#noInterJournalInDatabaseAdd').val(),
              status:"checked"
            };

            usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').push().set(dataInterJournalInDatabase);

            for(i=0;i<clickBtEditInterJournalInDatabase;i++){
              $('#list_inter_jour_in_database tr:last').remove();
            }

            $('#articleInterJournalInDatabaseAdd').val(""),
            $('#statusInterJournalInDatabaseAdd').val(""),
            $('#codeResearchInterJournalInDatabaseAdd').val(""),
            $('#nameInterJournalInDatabaseAdd').val(""),
            $('#typeInterJournalInDatabaseAdd').val(""),
            $('#yearInterJournalInDatabaseAdd').val(""),
            $('#noInterJournalInDatabaseAdd').val("")
          });


          dbInterJournalInDatabase.on('child_added',snap=>{
            var article = snap.child('article').val();
            var status_author = snap.child('status_author').val();
            var code_research = snap.child('code_research').val();
            var name = snap.child('name').val();
            var type_journal = snap.child('type_journal').val();
            var year = snap.child('year').val();
            var no = snap.child('no').val();
            var type = snap.child('type').val();
            var status = snap.child('status').val();
            if(type == "inter_journal_in_database"){
            $('#list_inter_jour_in_database').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-jour-in-database'+"'"+status+" >"+
                                      "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtarticle'+"'>"+article+"</td><td class='"+'txtstatusauthor'+"'>"+status_author+"</td>"+
                                         "<td class='"+'txtcoderesearch'+"' >"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td>"+
                                         "<td class='"+'txttypejournal'+"'>"+type_journal+"</td><td class='"+'txtyear'+"'>"+year+"</td><td class='"+'txtno'+"'>"+no+"</td>"+
                                         "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-jour-in-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                          " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-jour-in-database'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
             }
          });


            $('#list_inter_jour_in_database').on('click','.checkbox-inter-jour-in-database',function(){
              var id = $(this).closest('tr').attr("id");
              var check = $(this).closest('input[type=checkbox]').prop('checked');
              var status;

              if(check){
                status="checked";
              }else{
                status="check";
              }

              var dbStatus = {
                status:status
              };

              dbInterJournalInDatabase.child(id).update(dbStatus);
            });

          $('#list_inter_jour_in_database').on('click','.btn-edit-inter-jour-in-database',function(){
            idInterJournalInDatabase= $(this).closest('tr').attr('id');

            var article = $(this).closest('tr').find('.txtarticle').text();
            var status_author = $(this).closest('tr').find('.txtstatusauthor').text();
            var code_research = $(this).closest('tr').find('.txtcoderesearch').text();
            var name = $(this).closest('tr').find('.txtname').text();
            var type_journal = $(this).closest('tr').find('.txttypejournal').text();
            var year = $(this).closest('tr').find('.txtyear').text();
            var no = $(this).closest('tr').find('.txtno').text();

            $('#articleInterJournalInDatabaseEdit').val(article),
            $('#statusInterJournalInDatabaseEdit').val(status_author),
            $('#codeResearchInterJournalInDatabaseEdit').val(code_research),
            $('#nameInterJournalInDatabaseEdit').val(name),
            $('#typeInterJournalInDatabaseEdit').val(type_journal),
            $('#yearInterJournalInDatabaseEdit').val(year),
            $('#noInterJournalInDatabaseEdit').val(no)
            $('#editInterJournalInDatabaseModal').modal('show');
          });

          $('#list_inter_jour_in_database').on('click','.btn-delete-inter-jour-in-database',function(){
            var id = $(this).closest('tr').attr("id");
            dbInterJournalInDatabase.child(id).remove().then(function(){
                $('#deleteProfileModal').modal('show');
            });
              $(this).closest('tr').remove();
          });

  <!--============================================================================-->


  <!--=========================== Add And Edit Nation Conference =============================-->

           var idNationConference;
           var clickBtEditNationConference=0;
           var dbNationConference= usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

            $('#btNationConferenceEdit').on('click',function(){
              clickBtEditNationConference = clickBtEditNationConference+1;

              var updateNationConference = {
                type_article:$('#typeNationConferenceEdit').val(),
                name_thai:$('#articleThaiNationConferenceEdit').val(),
                name_eng:$('#articleEngNationConferenceEdit').val(),
                year:$('#yearNationConferenceEdit').val(),
                code_research: $('#codeResearchNationConferenceEdit').val(),
                name:$('#nameNationConferenceEdit').val(),
                date_start:$('#dateStartNationConferenceEdit').val(),
                date_finish:$('#dateFinishNationConferenceEdit').val(),
                location:$('#locationNationConferenceEdit').val(),
                country:$('#countrynNationConferenceEdit').val()
              };
              usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').child(idNationConference).update(updateNationConference);

               $('#list_nation_conference').empty();

              dbNationConference.on('child_added',snap=>{
                var type_article = snap.child('type_article').val();
                var name_thai = snap.child('name_thai').val();
                var name_eng = snap.child('name_eng').val();
                var name = snap.child('name').val();
                var year = snap.child('year').val();
                var code_research = snap.child('code_research').val();
                var date_start = snap.child('date_start').val();
                var date_finish = snap.child('date_finish').val();
                var location = snap.child('location').val();
                var country = snap.child('country').val();
                var status = snap.child('status').val();
                var type = snap.child('type').val();

                if(type == "nation_conference"){
                $('#list_nation_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-conference'+"'"+status+" >"+
                                          "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                             "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                             "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                             "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                             "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                            "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                 }
              });

              $('#articleThaiNationConferenceEdit').val("");
              $('#articleEngNationConferenceEdit').val("");
              $('#yearNationConferenceEdit').val("");
              $('#codeResearchNationConferenceEdit').val("");
              $('#nameNationConferenceEdit').val("");
              $('#dateStartNationConferenceEdit').val("");
              $('#dateFinishNationConferenceEdit').val("");
              $('#locationNationConferenceEdit').val("");
              $('#countrynNationConferenceEdit').val("");
              $('#editNationConferenceModal').modal('hide');
            });


            $('#btNationConferenceAdd').on('click',function(){
              $('#addNationConferenceModal').modal('hide');


              var dataNationConference= {
                type_article:$('#typeNationConferenceAdd').val(),
                name_thai:$('#articleThaiNationConferenceAdd').val(),
                name_eng:$('#articleEngNationConferenceAdd').val(),
                year:$('#yearNationConferenceAdd').val(),
                code_research: $('#codeResearchNationConferenceAdd').val(),
                name:$('#nameNationConferenceAdd').val(),
                date_start:$('#dateStartNationConferenceAdd').val(),
                date_finish:$('#dateFinishNationConferenceAdd').val(),
                location:$('#locationNationConferenceAdd').val(),
                country:$('#countrynNationConferenceAdd').val(),
                type:"nation_conference",
                status:"checked"
              };

              usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').push().set(dataNationConference);

              for(i=0;i<clickBtEditNationConference;i++){
                $('#list_nation_conference tr:last').remove();
              }

              $('#articleThaiNationConferenceAdd').val("");
              $('#articleEngNationConferenceAdd').val("");
              $('#yearNationConferenceAdd').val("");
              $('#codeResearchNationConferenceAdd').val("");
              $('#nameNationConferenceAdd').val("");
              $('#dateStartNationConferenceAdd').val("");
              $('#dateFinishNationConferenceAdd').val("");
              $('#locationNationConferenceAdd').val("");
              $('#countrynNationConferenceAdd').val("");
            });


            dbNationConference.on('child_added',snap=>{
              var type_article = snap.child('type_article').val();
              var name_thai = snap.child('name_thai').val();
              var name_eng = snap.child('name_eng').val();
              var year = snap.child('year').val();
              var code_research = snap.child('code_research').val();
              var name = snap.child('name').val();
              var date_start = snap.child('date_start').val();
              var date_finish = snap.child('date_finish').val();
              var location = snap.child('location').val();
              var country = snap.child('country').val();
              var status = snap.child('status').val();
              var type = snap.child('type').val();

              if(type == "nation_conference"){
                $('#list_nation_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-nation-conference'+"'"+status+" >"+
                                          "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                             "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                             "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                             "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                             "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                            "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-nation-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                 }
            });


              $('#list_nation_conference').on('click','.checkbox-nation-conference',function(){
                var id = $(this).closest('tr').attr("id");
                var check = $(this).closest('input[type=checkbox]').prop('checked');
                var status;

                if(check){
                  status="checked";
                }else{
                  status="check";
                }

                var dbStatus = {
                  status:status
                };

                dbNationConference.child(id).update(dbStatus);
              });

            $('#list_nation_conference').on('click','.btn-edit-nation-conference',function(){

              idNationConference= $(this).closest('tr').attr('id');

              var type_article = $(this).closest('tr').find('.txttypearticle').text();
              var name_thai = $(this).closest('tr').find('.txtnamethai').text();
              var name_eng = $(this).closest('tr').find('.txtnameeng').text();
              var year = $(this).closest('tr').find('.txtyear').text();
              var code_research = $(this).closest('tr').find('.txtcoderesearch').text();
              var name = $(this).closest('tr').find('.txtname').text();
              var date_start = $(this).closest('tr').find('.txtdatestart').text();
              var date_finish = $(this).closest('tr').find('.txtdatefinish').text();
              var location = $(this).closest('tr').find('.txtlocation').text();
              var country = $(this).closest('tr').find('.txtcountry').text();

              $('#typeNationConferenceEdit').val(type_article);
              $('#articleThaiNationConferenceEdit').val(name_thai);
              $('#articleEngNationConferenceEdit').val(name_eng);
              $('#yearNationConferenceEdit').val(year);
              $('#codeResearchNationConferenceEdit').val(code_research);
              $('#nameNationConferenceEdit').val(name);
              $('#dateStartNationConferenceEdit').val(date_start);
              $('#dateFinishNationConferenceEdit').val(date_finish);
              $('#locationNationConferenceEdit').val(location);
              $('#countrynNationConferenceEdit').val(country);

              $('#editNationConferenceModal').modal('show');
            });

            $('#list_nation_conference').on('click','.btn-delete-nation-conference',function(){
              var id = $(this).closest('tr').attr("id");
              dbNationConference.child(id).remove().then(function(){
                  $('#deleteProfileModal').modal('show');
              });
                $(this).closest('tr').remove();
            });

    <!--============================================================================-->


  <!--=========================== Add And Edit Inter Conference =============================-->

               var idInterConference;
               var clickBtEditInterConference=0;
               var dbInterConference= usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio');

                $('#btInterConferenceEdit').on('click',function(){
                  clickBtEditInterConference = clickBtEditInterConference+1;

                  var updateInterConference = {
                    type_article:$('#typeInterConferenceEdit').val(),
                    name_thai:$('#articleThaiInterConferenceEdit').val(),
                    name_eng:$('#articleEngInterConferenceEdit').val(),
                    year:$('#yearInterConferenceEdit').val(),
                    code_research: $('#codeResearchInterConferenceEdit').val(),
                    name:$('#nameInterConferenceEdit').val(),
                    date_start:$('#dateStartInterConferenceEdit').val(),
                    date_finish:$('#dateFinishInterConferenceEdit').val(),
                    location:$('#locationInterConferenceEdit').val(),
                    country:$('#countrynInterConferenceEdit').val()
                  };
                  usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').child(idInterConference).update(updateInterConference);

                   $('#list_inter_conference').empty();

                  dbInterConference.on('child_added',snap=>{
                    var type_article = snap.child('type_article').val();
                    var name_thai = snap.child('name_thai').val();
                    var name_eng = snap.child('name_eng').val();
                    var name = snap.child('name').val();
                    var year = snap.child('year').val();
                    var code_research = snap.child('code_research').val();
                    var date_start = snap.child('date_start').val();
                    var date_finish = snap.child('date_finish').val();
                    var location = snap.child('location').val();
                    var country = snap.child('country').val();
                    var status = snap.child('status').val();
                    var type = snap.child('type').val();

                    if(type == "inter_conference"){
                    $('#list_inter_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-conference'+"'"+status+" >"+
                                              "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                                 "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                                 "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                                 "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                                 "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                                "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                     }
                  });

                  $('#articleThaiInterConferenceEdit').val("");
                  $('#articleEngInterConferenceEdit').val("");
                  $('#yearInterConferenceEdit').val("");
                  $('#codeResearchInterConferenceEdit').val("");
                  $('#nameInterConferenceEdit').val("");
                  $('#dateStartInterConferenceEdit').val("");
                  $('#dateFinishInterConferenceEdit').val("");
                  $('#locationInterConferenceEdit').val("");
                  $('#countrynInterConferenceEdit').val("");
                  $('#editInterConferenceModal').modal('hide');
                });


                $('#btInterConferenceAdd').on('click',function(){
                  $('#addInterConferenceModal').modal('hide');


                  var dataInterConference= {
                    type_article:$('#typeInterConferenceAdd').val(),
                    name_thai:$('#articleThaiInterConferenceAdd').val(),
                    name_eng:$('#articleEngInterConferenceAdd').val(),
                    year:$('#yearInterConferenceAdd').val(),
                    code_research: $('#codeResearchInterConferenceAdd').val(),
                    name:$('#nameInterConferenceAdd').val(),
                    date_start:$('#dateStartInterConferenceAdd').val(),
                    date_finish:$('#dateFinishInterConferenceAdd').val(),
                    location:$('#locationInterConferenceAdd').val(),
                    country:$('#countrynInterConferenceAdd').val(),
                    type:"inter_conference",
                    status:"checked"
                  };

                  usersRef.child(sessionStorage.getItem("userId")).child('academic_work').child('portfolio').push().set(dataInterConference);

                  for(i=0;i<clickBtEditInterConference;i++){
                    $('#list_inter_conference tr:last').remove();
                  }

                  $('#articleThaiInterConferenceAdd').val("");
                  $('#articleEngInterConferenceAdd').val("");
                  $('#yearInterConferenceAdd').val("");
                  $('#codeResearchInterConferenceAdd').val("");
                  $('#nameInterConferenceAdd').val("");
                  $('#dateStartInterConferenceAdd').val("");
                  $('#dateFinishInterConferenceAdd').val("");
                  $('#locationInterConferenceAdd').val("");
                  $('#countrynInterConferenceAdd').val("");
                });


                dbInterConference.on('child_added',snap=>{
                  var type_article = snap.child('type_article').val();
                  var name_thai = snap.child('name_thai').val();
                  var name_eng = snap.child('name_eng').val();
                  var year = snap.child('year').val();
                  var code_research = snap.child('code_research').val();
                  var name = snap.child('name').val();
                  var date_start = snap.child('date_start').val();
                  var date_finish = snap.child('date_finish').val();
                  var location = snap.child('location').val();
                  var country = snap.child('country').val();
                  var status = snap.child('status').val();
                  var type = snap.child('type').val();

                  if(type == "inter_conference"){
                    $('#list_inter_conference').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-inter-conference'+"'"+status+" >"+
                                              "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txttypearticle'+"'>"+type_article+"</td><td class='"+'txtnamethai'+"'>"+name_thai+"</td>"+
                                                 "<td class='"+'txtnameeng'+"' >"+name_eng+"</td><td class='"+'txtyear'+"'>"+year+"</td>"+
                                                 "<td class='"+'txtcoderesearch'+"'>"+code_research+"</td><td class='"+'txtname'+"'>"+name+"</td><td class='"+'txtdatestart'+"'>"+date_start+"</td><td class='"+'txtdatefinish'+"'>"+date_finish+"</td>"+
                                                 "<td class='"+'txtlocation'+"'>"+location+"</td><td class='"+'txtcountry'+"'>"+country+"</td>"+
                                                 "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-inter-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                                "<a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-inter-conference'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                     }
                });


                  $('#list_inter_conference').on('click','.checkbox-inter-conference',function(){
                    var id = $(this).closest('tr').attr("id");
                    var check = $(this).closest('input[type=checkbox]').prop('checked');
                    var status;

                    if(check){
                      status="checked";
                    }else{
                      status="check";
                    }

                    var dbStatus = {
                      status:status
                    };

                    dbInterConference.child(id).update(dbStatus);
                  });

                $('#list_inter_conference').on('click','.btn-edit-inter-conference',function(){

                  idInterConference= $(this).closest('tr').attr('id');

                  var type_article = $(this).closest('tr').find('.txttypearticle').text();
                  var name_thai = $(this).closest('tr').find('.txtnamethai').text();
                  var name_eng = $(this).closest('tr').find('.txtnameeng').text();
                  var year = $(this).closest('tr').find('.txtyear').text();
                  var code_research = $(this).closest('tr').find('.txtcoderesearch').text();
                  var name = $(this).closest('tr').find('.txtname').text();
                  var date_start = $(this).closest('tr').find('.txtdatestart').text();
                  var date_finish = $(this).closest('tr').find('.txtdatefinish').text();
                  var location = $(this).closest('tr').find('.txtlocation').text();
                  var country = $(this).closest('tr').find('.txtcountry').text();

                  $('#typeInterConferenceEdit').val(type_article);
                  $('#articleThaiInterConferenceEdit').val(name_thai);
                  $('#articleEngInterConferenceEdit').val(name_eng);
                  $('#yearInterConferenceEdit').val(year);
                  $('#codeResearchInterConferenceEdit').val(code_research);
                  $('#nameInterConferenceEdit').val(name);
                  $('#dateStartInterConferenceEdit').val(date_start);
                  $('#dateFinishInterConferenceEdit').val(date_finish);
                  $('#locationInterConferenceEdit').val(location);
                  $('#countrynInterConferenceEdit').val(country);

                  $('#editInterConferenceModal').modal('show');
                });

                $('#list_inter_conference').on('click','.btn-delete-inter-conference',function(){
                  var id = $(this).closest('tr').attr("id");
                  dbInterConference.child(id).remove().then(function(){
                      $('#deleteProfileModal').modal('show');
                  });
                    $(this).closest('tr').remove();
                });

        <!--============================================================================-->


$('#changePictureProfile').on('click',function(){
  $('#hoverProfile').hide();
  $('#uploadImageProfile').removeAttr('hidden');
  $('#cancelUpload').removeAttr('hidden');
  $('#cancelUpload').show();
});

$('#cancelUpload').on('click',function(){
  $('#hoverProfile').show();
  $('#uploadImageProfile').attr('hidden',"true");
  $('#cancelUpload').attr('hidden',"true");
  $('#fileUploadImageProfile').val("");
  $('#btUploadImageProfile').hide();
});

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
     var time = $(this).closest('table').find('th').eq($(this).index()).text();
     var timeFirst = time.split("-")[0];
     var timeHourFirst = timeFirst.split(":")[0];
     var timeSecond = time.split("-")[1];
     var timeHourSecond = timeFirst.split(":")[0];
     var dateCurent = new Date();
     var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     var timeHourCurrent = dateCurent.getHours();
     var dateClick = days[dateCurent.getDay()];

     if(timeHourCurrent == timeHourFirst || timeHourCurrent == timeHourSecond ){
       if(date == dateClick){
       var officeUpdate = {
         office:"border:8px solid #00ff00;"
       };
       usersRef.child(sessionStorage.getItem("userId")).update(officeUpdate);
     }

     }
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


 });



$('#openMap').on('click',function(){
  var dateTimeUpdate = new Date();

  var showBoolean = $('#openMap').prop('checked');

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

         if(showBoolean){
         var positionMap ={
           latitude:""+location.latitude+"",
           longitude:""+location.longitude+"",
           show_map:"yes",
           show_map_time:dateTimeUpdate.toDateString()+"  "+dateTimeUpdate.getHours()+":"+dateTimeUpdate.getMinutes()
         };
       }else{
         var positionMap ={
           latitude:"",
           longitude:"",
           show_map:"no",
           show_map_time:dateTimeUpdate.toDateString()+"  "+dateTimeUpdate.getHours()+":"+dateTimeUpdate.getMinutes()
         };
       }

         usersRef.child(sessionStorage.getItem("userId")).update(positionMap);
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

if(showBoolean){
  $('#mapModal').modal('show');
}
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
    var status = snap.child("status").val();
    var year = snap.child("year").val();

    $('#list_his_education').append("<tr id='"+snap.key+"' ><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-education'+"'"+status+" >"+
                              "<label for='"+'checkbox'+snap.key+"'></label></td>"+"<td class='"+'txtdegree'+"'>" + degree + "</td>" +
                              "<td class='"+'txtfaculty'+"'>" + faculty + "</td>" + "<td class='"+'txtuniversity'+"'>" + university + "</td>" + "<td class='"+'txtyear'+"'>" + year + "</td>"+
                             "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-education'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                             " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-education'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>"
                           );
          console.log("Table : ",snap.key);
  });



  $('#list_his_education').on('click','.checkbox-education',function(){
    var id = $(this).closest('tr').attr("id");
    var check = $(this).closest('input[type=checkbox]').prop('checked');
    var status;

    if(check){
      status="checked";
    }else{
      status="check";
    }

    var dbStatus = {
      status:status
    };

    rootRefEducation.child(id).update(dbStatus);
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
          var status = snap.child("status").val();

          $('#list_his_education').append("<tr id='"+snap.key +"' ><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red'+"'"+status+">"+
                                    "<label for='"+'checkbox'+snap.key+"'></label></td>"+"<td class='"+'txtdegree'+"'>" + degree + "</td>" +
                                    "<td class='"+'txtfaculty'+"'>" + faculty + "</td>" + "<td class='"+'txtuniversity'+"'>" + university + "</td>" + "<td class='"+'txtyear'+"'>" + year + "</td>"+
                                   "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-education'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                                   " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-education'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>"
                                 );
            console.log("[child_added]: ",snap.key);
        });

  });



  var rootRefExpert = usersRef.child(sessionStorage.getItem("userId")).child('education').child('expertise');

  rootRefExpert.on("child_added",snap => {
    var snapkey = snap.key;
    var detail = snap.child('detail').val();
    var status = snap.child('status').val();

    $('#list_expertise').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-expertise'+"' "+status+" >"+
                              "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtdetail'+"'>" + detail + "</td>" +
                              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
  });

  $('#list_expertise').on('click','.checkbox-expertise',function(){
    var id = $(this).closest('tr').attr("id");
    var check = $(this).closest('input[type=checkbox]').prop('checked');
    var status;

    if(check){
      status="checked";
    }else{
      status="check";
    }

    var dbStatus = {
      status:status
    };

    rootRefExpert.child(id).update(dbStatus);
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
      var status = snap.child('status').val();

      $('#list_expertise').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red'+"'"+status+">"+
                                "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtdetail'+"'>" + detail + "</td>" +
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
    var status = snap.child('status').val();

    $('#list_his_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-work'+"' "+status+">"+
                              "<label for='"+'checkbox'+snap.key+"'></label></td>"+"<td class='"+'txttime'+"'>" + start_time +" ถึง "+ finish_time +"</td>" +
                              "<td class='"+'txtaddress'+"'>" + address + "</td>" + "<td class='"+'txtwork'+"'>" + work + "</td>"+
                              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-work'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
  });

  $('#list_his_work').on('click','.checkbox-work',function(){
    var id = $(this).closest('tr').attr("id");
    var check = $(this).closest('input[type=checkbox]').prop('checked');
    var status;

    if(check){
      status="checked";
    }else{
      status="check";
    }

    var dbStatus = {
      status:status
    };

    rootRefWork.child(id).update(dbStatus);
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
      var status = snap.child('status').val();

      $('#list_his_work').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red'+"'"+status+">"+
                                "<label for='"+'checkbox'+snap.key+"'></label></td>"+"<td class='"+'txttime'+"'>" + start_time +" ถึง "+ finish_time +"</td>" +
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
    var status = snap.child('status').val();

    $('#list_exp').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red checkbox-exp'+"' "+status+" >"+
                              "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtexp'+"'>" + exp + "</td>" + "<td class='"+'txttime'+"'>" +start_time +" ถึง "+ finish_time + "</td>"+"<td class='"+'txtdetail'+"'>" + detail + "</td>"+
                              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-exp'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-exp'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
  });

  $('#list_exp').on('click','.checkbox-exp',function(){
    var id = $(this).closest('tr').attr("id");
    var check = $(this).closest('input[type=checkbox]').prop('checked');
    var status;

    if(check){
      status="checked";
    }else{
      status="check";
    }

    var dbStatus = {
      status:status
    };

    rootRefExp.child(id).update(dbStatus);
  });

  $('#list_exp').on('click','.btn-edit-exp',function(){
    idExperience = $(this).closest('tr').attr("id");
    var time = $(this).closest('tr').find('.txttime').text();
    var splitSTime = time.split("ถึง")[0];
    var splitFTime = time.split("ถึง")[1];
    var exp = $(this).closest('tr').find('.txtexp').text();
    var detail = $(this).closest('tr').find('.txtdetail').text();
    $('#timeStartEditExp').val(splitSTime);
    $('#timeFinishEditExp').val(splitFTime);
    $('#expEditExp').val(exp);
    $('#detailEditExp').val(detail);
    $('#editExpModal').modal('show');
  });

  $('#list_exp').on('click','.btn-delete-exp',function(){
    var id = $(this).closest('tr').attr("id");
    rootRefExp.child(id).remove().then(function(){
        $('#deleteProfileModal').modal('show');
    });
      $(this).closest('tr').remove();
  });

  $('#btEditExp').on('click',function(){
    clickBtEditExperience = clickBtEditExperience+1;

  $('#editExpModal').modal('hide');

  var dataUpdateExp = {
    exp:$('#expEditExp').val(),
    start_time:$('#timeStartEditExp').val(),
    finish_time:$('#timeFinishEditExp').val(),
    detail:$('#detailEditExp').val()
  };

  rootRefExp.child(idExperience).update(dataUpdateExp);

  $('#list_exp').empty();
  rootRefExp.on("child_added",snap => {
    var exp = snap.child("exp").val();
    var start_time = snap.child("start_time").val();
    var finish_time = snap.child("finish_time").val();
    var detail = snap.child("detail").val();
    var status = snap.child("status").val();

    $('#list_exp').append("<tr id='"+snap.key+"'><td><input type='"+'checkbox'+"' id='"+'checkbox'+snap.key+"' class='"+'filled-in chk-col-red'+"' "+status+" >"+
                              "<label for='"+'checkbox'+snap.key+"'></label></td><td class='"+'txtexp'+"'>" + exp + "</td>" + "<td class='"+'txttime'+"'>" +start_time +" ถึง "+ finish_time + "</td>"+"<td class='"+'txtdetail'+"'>" + detail + "</td>"+
                              "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-exp'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                              " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-exp'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
  });

  })


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
    year:$('#yearHisEdu').val(),
    status:"checked"
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
    detail:$('#expertHisEdu').val(),
    status:"checked"
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
    work:$('#workHisWork').val(),
    status:"checked"
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
    detail:$('#detailExp').val(),
    status:"checked"
  };
  usersRef.child(sessionStorage.getItem("userId")).child('work').child('experience').push().set(data).then(function(){
    console.log("Information Saved:", sessionStorage.getItem("userId"));
    $('#timeStartExp').val("");
    $('#timeFinishExp').val("");
    $('#expExp').val("");
    $('#detailExp').val("");
  });

  for(var i = 0;i< clickBtEditExperience;i++){
    $('#list_exp tr:last').remove();
  }
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
   $.LoadingOverlay("hide");
 });

 var dbStatus = usersRef.child(sessionStorage.getItem("userId")).child('office');
 dbStatus.on('value',snap => {
   $('#imageProfile').attr("style",snap.val());
   if(snap.val() == "border:8px solid #00ff00;"){
     document.getElementById('showStatus').innerText = "สามารถเข้าพบได้";
   }else if(snap.val() == "border:8px solid #0099ff;"){
     document.getElementById('showStatus').innerText = "ไม่อยู่";
   }else if(snap.val() == "border:8px solid #ffcc00;"){
     document.getElementById('showStatus').innerText = "กรุณารอสักครู่";
   }else if(snap.val() == "border:8px solid #ff3300;"){
     document.getElementById('showStatus').innerText = "ห้ามรบกวน";

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
   $('#cancelUpload').show();
 });

 $('#btUploadImageProfile').on('click',function(event){
   $('#btUploadImageProfile').hide();
   $('#btClearTextFile').hide();
  $('#btLoadingProfile').show();
  $('#cancelUpload').show();
   uploadImageProfile();
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
       $('#cancelUpload').hide();
       $('#uploadImageProfile').attr('hidden',"true");
       $('#hoverProfile').show();

     });
 }

 $('#btSubmitUpdateProfile').hide();
 $('#btCancelUpdateProfile').hide();
 $('#btLoadingProfile').hide();

 $('#btUpdateProfile').on('click',function(e){
   e.preventDefault();
   $('#btSubmitUpdateProfile').show();
   $('#btCancelUpdateProfile').show();
   $('#btUpdateProfile').hide();
   $('#btUpdatePassword').hide();
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
   $('#btUpdateProfile').show();
   $('#btUpdatePassword').show();
 });

 $('#btSubmitUpdateProfile').on('click',function(){
   document.getElementById("nameProfile").disabled = true;
   document.getElementById("emailProfile").disabled = true;
   document.getElementById("phoneProfile").disabled = true;
   $('#btSubmitUpdateProfile').hide();
   $('#btCancelUpdateProfile').hide();
    $('#btLoadingProfile').show();
    $('#btUpdateProfile').show();
    $('#btUpdatePassword').show();
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
