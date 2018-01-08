$(document).ready(function(){

 var Auth = firebase.auth();
 var dbRef = firebase.database();
 var auth = null;
 var selectedFile;
 var indexSelect;


/*------------------------ select page -----------------------------------*/

 $('#selectHeaderSlide').on('change',function(){
  indexSelect = document.getElementById("selectHeaderSlide").selectedIndex;
  if(indexSelect==0){
    window.location.href = "doctorate2553.php";
  }else if(indexSelect==1){
    window.location.href = "doctorate2558.php";
  }else if(indexSelect==2){
    window.location.href = "doctorate.php";
  }else if(indexSelect==3){
    window.location.href = "course.php";
  }else if(indexSelect==4){
    window.location.href = "bachelor2560.php";
  }else if(indexSelect==5){
    window.location.href = "bachelorIc2560.php";
  }else if(indexSelect==6){
    window.location.href = "master2553.php";
  }else if(indexSelect==7){
    window.location.href = "master2558.php";
  }
});


 /*------------------------ doctorate textDetailtitle (2558) -----------------------------------*/

/*======================= doctorate Edit Text ======================*/
document.getElementById("textDetailtitle").disabled = true;
document.getElementById("textDetail").disabled = true;
  $('#btTitleSave').hide();
  $('#btTitleCancel').hide();


  var db = dbRef.ref('website/course').child('doctorate').child('year2553').child('Topic');
  db.on('value',snap => {
    $('#textDetailtitle').val(snap.val());
  });

   var db = dbRef.ref('website/course').child('doctorate').child('year2553').child('Detail');
  db.on('value',snap => {
    $('#textDetail').val(snap.val());
  });


  $('#btTitleEdit').on('click',function(){
    EditDoctorate2558();
  });

  $('#btTitleSave').on('click',function(){
    SaveDoctorate2558();
  });

  $('#btTitleCancel').on('click',function(){
    CancelDoctorate2558();
  });

  function EditDoctorate2558() {
      document.getElementById("textDetailtitle").disabled = false;
      $('#btTitleSave').show();
      $('#btTitleCancel').show();

    }

  function SaveDoctorate2558(){

      var data = {
       textTopicBachelorEs:$('#textDetailtitle').val(),
           
    };

    firebase.database().ref('website').child('course').child('doctorate').child('year2558').child('TitleDegree').child('Topic').update(data);

    $('#btTitleSave').hide();
    $('#btTitleCancel').hide();
    document.getElementById("textDetailtitle").disabled = true;

    }

  function CancelDoctorate2558() {
        document.getElementById("textDetailtitle").disabled = true;
        $('#btTitleSave').hide();
        $('#btTitleCancel').hide();
        document.getElementById("textDetailtitle").disabled = true;
  }


 /*======================= END Master textDetailtitle (2558)  ======================*/


})