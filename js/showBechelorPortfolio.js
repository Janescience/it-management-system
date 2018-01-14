$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var portfolioRef = dbRef.ref("website/student/bechelor/portfolio");

  var rootRef = portfolioRef;

  // var dbImage = portfolioRef.ref("website").child('student').child('bachelor').child('portfolio').child('port_image');

    rootRef.on("child_added",snap => {
      var name = snap.child('port_name').val();
      var Detail = snap.child('port_detail').val();
      var Type = snap.child('port_type').val();
      var Status = snap.child('port_status').val();
      var Year = snap.child('port_years').val();
      var Picture = snap.child('port_image').val();


      $('#list_Portfolio').append("<tr><td>" + name + "</td>" + "<td>" + Detail + "</td>"+ "<td>" + Type + "</td>"+ "<td>" + Status + "</td>"+ "<td>"+ Year + "</td>"+ "<td><img src='"+Picture+"'  width='"+'60'+"' height='"+'60'+"'></td>"+
                               "</tr>");

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

});
