
$(document).ready(function(){

	$('#btAddBechelorPortfolio').on('click',function(e){
  		e.preventDefault();
   			$('#addBechelorPortfolio').modal('show');
		});

	$('#btAddBechelorActivity').on('click',function(e){
  		e.preventDefault();
   			$('#addBechelorActivity').modal('show');
		});

	$('#btAddGraduatePortfolio').on('click',function(e){
  		e.preventDefault();
   			$('#addGraduatePortfolio').modal('show');
		});

	$('#btAddGraduateActivity').on('click',function(e){
  		e.preventDefault();
   			$('#addGraduateActivity').modal('show');
		});


		// ========================================= Bachelor Activity Upload Script =========================================
    //
		// $('#btUploadImageActivity').hide();
		// $('#btClearTextFile').hide();
    //
		// $('#fileUploadImageActivity').on('change',function(event){
		//   selectedFile = event.target.files[0];
		//   document.getElementById("textDetail").disabled = false;
		//   // document.getElementById("textDetail").disabled = false;
		//   $('#btUploadImageActivity').show();
		//   $('#btClearTextFile').show();
		// });
    //
		// $('#btUploadImageActivity').on('click',function(e){
		//   e.preventDefault();
		//   $('#btUploadImageActivity').hide();
		//   $('#btClearTextFile').hide();
		//   $('#btClose').hide();
		//   uploadImage();
		//   // document.getElementById("textTopic").disabled = true;
		//   document.getElementById("textDetail").disabled = true;
		// });
    //
		// function uploadImage(){
		//   var filename= selectedFile.name;
		//   var storageRef = firebase.storage().ref('/BachelorActivityImage//' + filename);
		//   var uplodadTask = storageRef.put(selectedFile);
    //
		//   uplodadTask.on('state_changed',function(sanpshot){
    //
		//   },function(error){
    //
		//   },function(){
		//     var downloadURL = uplodadTask.snapshot.downloadURL;
		//     var updates = {};
		//     var updatesTopic = {};
		//     var updatesDetail = {};
		//     var postData = {
		//       imageSlideFirst:downloadURL,
		//       imageSlideSecond:downloadURL,
		//       textDetailFirst:$('#textDetail').val(),
		//       textDetailSecond:$('#textDetail').val()
    //
		//     };
    //
    //
    //
		//     console.log(downloadURL);
		//     $('#fileUploadImageHeader').val("");
		//     $('#btLoading').hide();
		//     $('#btClose').show();
		//   });
		// }


 });

// file upload
// function uploadFunction(){
//     var x = document.getElementById("BechelorPortfolioPicture");
//     var txt = "";
//     if ('files' in x) {
//         if (x.files.length == 0) {
//             txt = "เพิ่มไฟล์รูปภาพ";
//         } else {
//             for (var i = 0; i < x.files.length; i++) {
//                 txt += "<br><strong>" + (i+1) + ". file</strong><br>";
//                 var file = x.files[i];
//                 if ('name' in file) {
//                     txt += "name: " + file.name + "<br>";
//                 }
//                 if ('size' in file) {
//                     txt += "size: " + file.size + " bytes <br>";
//                 }
//             }
//         }
//     }
//     else {
//         if (x.value == "") {
//             txt += "เพิ่มไฟล์รูปภาพ";
//         } else {
//             txt += "The files property is not supported by your browser!";
//             txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
//         }
//     }
//     document.getElementById("demo").innerHTML = txt;
// }
