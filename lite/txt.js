var AddCoursesDb2 = dbRef.ref("website/course/AddCourses");
var AddCoursesRootRef2 = AddCoursesDb2;

AddCoursesRootRef2.on("child_added",snap => {
  var snapkey = snap.key;

  $('#SelectAddCourses2').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ snap.key +"</option>");
  $('#SelectAddCourses2').val("");


});





var ViewCoursesDb = dbRef.ref("website/course/AddCourses");
var ViewCoursesRootRef = ViewCoursesDb;

ViewCoursesRootRef.on("child_added",snap => {
  var snapkey = snap.key;
  var img = snap.child('file').val();
  var topic = snap.child('topic').val();
  var topic2 = snap.child('topic2').val();
  var detail = snap.child('detail').val();
  var detail2 = snap.child('detail2').val();



  a=a+1;

  $('#Suggestion_work').append("<tr id='"+snap.key+"'><td><img src='"+ img +"' width='"+'150px'+"' style='"+'border-radius:10px'+"' class='"+'header-bg'+"'></td> <td class='"+'txttopic'+"' width='"+'200px'+"'>" + topic + "</td><td class='"+'txttopic2'+"' width='"+'220px'+"'>" + topic2 + "</td><td class='"+'txtdetail'+"'>" + "<div class='"+'panel-heading'+"'>" +
  "<h4 class='"+'panel-title'+"'>" +
  "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse2'+ a +"'><i class='"+'ti-arrow-circle-down icon1-1'+"'></i><i hidden class='"+'ti-arrow-circle-up icon1-2'+"'></i></a>" +
  "</h4>" + "</div>" + "<div id='"+'collapse2'+ a +"' class='"+'panel-collapse collapse'+"''>" +
  "<div class='"+'panel-body'+"'>" + detail + "</div>" + "</div>" + "</td><td class='"+'txtdetail2'+"'>" +
  "<div class='"+'panel-heading'+"'>" +
  "<h4 class='"+'panel-title'+"'>" +
  "<a data-toggle='"+'collapse'+"' data-parent='"+'#accordion'+"' href='"+'#'+'collapse3'+ a +"'><i class='"+'ti-arrow-circle-down icon2-1'+"'></i><i hidden class='"+'ti-arrow-circle-up icon2-2'+"'></i></a>" +
  "</h4>" + "</div>" + "<div id='"+'collapse3'+ a +"' class='"+'panel-collapse collapse'+"''>" +
  "<div class='"+'panel-body'+"'>" + detail2 + "</div>" + "</div>" + "</td>" +

                            "<td><a href='"+'javascript:void(0)'+"'  class='"+'text-inverse p-r-10 btn-edit-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Edit'+"'><i class='"+'ti-marker-alt'+"'></i></a>"+
                            " <a href='"+'javascript:void(0)'+"'  class='"+'text-inverse  btn-delete-expert'+"'  data-toggle='"+'tooltip'+"' title='"+''+"' data-original-title='"+'Delete'+"'><i class='"+'ti-trash'+"'></i></a></td></tr>");
                            $('#loaderHeader').hide();

 });


});
