$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var historyRef = dbRef.ref('history');
  var key;
  var firstKey;
  var next = 0;
  var page = 1;
  var previous = 0;
 $.LoadingOverlay("show");
  var rootRef = historyRef;

    rootRef.on("child_added",snap => {
      var name = snap.child('name').val();
      var action = snap.child('action').val();
      var page = snap.child('page').val();
      var topic = snap.child('topic').val();
      var date = snap.child('date').val();
      var time = snap.child('time').val();
      var id = snap.child('id').val();

 $.LoadingOverlay("hide");
        if(id == sessionStorage.getItem("userId")){
          $('#list_history').prepend("<tr ><td >" + name + "</td><td>" + action + "</td><td>" + page + "</td><td>" + topic + "</td><td>" + date + "</td><td><span class='"+'label label-danger text-white'+"'>" + time + "</span></td>"+
                                  "</tr>");
        }else{
          $('#list_history').prepend("<tr><td>" + name + "</td><td>" + action + "</td><td>" + page + "</td><td>" + topic + "</td><td>" + date + "</td><td><span class='"+'label label-success text-white'+"'>" + time + "</span></td>"+
                                  "</tr>");
        }


      key = snap.key;
      console.log("table on ready");
    });



$("#search").keyup(function () {
  var searchTerm = $("#search").val();
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

})
