
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
