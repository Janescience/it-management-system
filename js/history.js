$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var historyRef = dbRef.ref('history');

  var rootRef = historyRef;

    rootRef.on("child_added",snap => {
      var name = snap.child('name').val();
      var topic = snap.child('topic').val();
      var date = snap.child('date').val();
      var time = snap.child('time').val();

      $('#list_history').append("<tr><td>" + name + "</td>" + "<td>" + topic + "</td>"+ "<td>" + date + "</td>"+ "<td>" + time + "</td>"+
                               "<td><button id='"+'removeUser'+"' class='"+'btn btn-danger'+"'><i class='"+'mdi mdi-delete-forever'+"'></i></button></td></tr>");

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
