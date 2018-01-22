$(document).ready(function(){

	var selectedFile;
	var txt = "";

	// ========================================= Set initial Bechelor Portfolio Modal =========================================
	txt = "";
	$('#BechelorPortfolioName').val("");
	$('#BechelorPortfolioDetail').val("");
	$('#BechelorPortfolioGroup').val("");
	$("#BechelorPortfolioHallOfFame").prop('checked', false);
	$('#BechelorPortfolioYear').val("");
	$('#BechelorPortfolioPicture').val("");
	document.getElementById("BechelorDemo").innerHTML = txt;
	// ========================================= End Code =====================================================================

	// ========================================= Set initial Graduate Portfolio Modal =========================================
	txt = "";

	$('#GraduatePortfolioName').val("");
	$('#GraduatePortfolioDetail').val("");
	$('#GraduatePortfolioGroup').val("");
	$("#GraduatePortfolioHallOfFame").prop('checked', false);
	$('#GraduatePortfolioYear').val("");
	$('#GraduatePortfolioPicture').val("");
	document.getElementById("GraduateDemo").innerHTML = txt;
	// ========================================= End Code =====================================================================

	$('#AddBechelorPortfolioType').hide();
	$('#SaveBechelorPortfolioGroup').hide();
	$('#CancelAddBechelorPortfolioGroup').hide();

	$('#AddGraduatePortfolioType').hide();
	$('#SaveGraduatePortfolioGroup').hide();
	$('#CancelAddGraduatePortfolioGroup').hide();



	$('#btAddBechelorPortfolio').on('click',function(e){
  		e.preventDefault();
			txt = "";
			$('#BechelorPortfolioName').val("");
			$('#BechelorPortfolioDetail').val("");
			$('#BechelorPortfolioGroup').val("");
			$("#BechelorPortfolioHallOfFame").prop('checked', false);
			$('#BechelorPortfolioYear').val("");
			$('#BechelorPortfolioPicture').val("");
			document.getElementById("BechelorDemo").innerHTML = txt;
 			$('#addBechelorPortfolio').modal('show');
		});

	$('#btAddBechelorActivity').on('click',function(e){
  		e.preventDefault();
   			$('#addBechelorActivity').modal('show');
		});

	$('#btAddGraduatePortfolio').on('click',function(e){
  		e.preventDefault();
			txt = "";

			$('#GraduatePortfolioName').val("");
			$('#GraduatePortfolioDetail').val("");
			$('#GraduatePortfolioGroup').val("");
			$("#GraduatePortfolioHallOfFame").prop('checked', false);
			$('#GraduatePortfolioYear').val("");
			$('#GraduatePortfolioPicture').val("");
			document.getElementById("GraduateDemo").innerHTML = txt;

   		$('#addGraduatePortfolio').modal('show');
		});

	$('#btAddGraduateActivity').on('click',function(e){
  		e.preventDefault();
   			$('#addGraduateActivity').modal('show');
		});

		$('#btAddGraduateActivity').on('click',function(e){
	  		e.preventDefault();
	   			$('#addGraduateActivity').modal('show');
			});

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

				$('#AddGraduatePortfolioGroup').on('click',function(e){
						$('#AddGraduatePortfolioType').show();
						$('#CancelAddGraduatePortfolioGroup').show();

					});

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

			$('#btShowBechelorPortfolio').on('click',function(e){
		  		location.href = "showBechelorPortfolio.php";
				});

			$('#btShowGraduatePortfolio').on('click',function(e){
		  		location.href = "showGraduatePortfolio.php";
				});




				// ========================================= Get Bechelor Portfolio Type Dropdown =========================================

				// var Auth = firebase.auth();
				var dbRef = firebase.database();
				var portfolioGroupRef = dbRef.ref("website/student/portfolioGroup/bechelor");
				var rootRef = portfolioGroupRef;

				select = document.getElementById('BechelorPortfolioGroup');

					rootRef.on("child_added",snap => {
						var Type = snap.child('port_GroupType').val();

						$('#BechelorPortfolioGroup').append("<option>"+ Type +"</option>");

					});

				// ========================================= End Bechelor Portfolio Type =========================================

				// ========================================= Get Graduate Portfolio Type Dropdown =========================================

				// var Auth = firebase.auth();
				var dbRef = firebase.database();
				var portfolioGroupRef = dbRef.ref("website/student/portfolioGroup/graduate");
				var rootRef = portfolioGroupRef;

				select = document.getElementById('GraduatePortfolioGroup');

					rootRef.on("child_added",snap => {
						var Type = snap.child('port_GroupType').val();

						$('#GraduatePortfolioGroup').append("<option>"+ Type +"</option>");

					});

				// ========================================= End Bechelor Portfolio Type =========================================

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

			// ========================================= Bechelor Portfolio Script =========================================

			$('#BechelorPortfolioPicture').on('change',function(event){
				selectedFile = event.target.files[0];

			});
			// ================================================================= End Code =================================================================
			// <!-- <=========================================================== BechelorPortfolioPicture ===========================================================> -->

			$('#BechelorPortfolioPicture').on('change',function(){
				var x = document.getElementById("BechelorPortfolioPicture");
				if ('files' in x) {
						if (x.files.length == 0) {
								txt = "เพิ่มไฟล์รูปภาพ";
						} else {
								for (var i = 0; i < x.files.length; i++) {
										// txt += "<br><strong>" + (i+1) + ". file</strong><br>";
										var file = x.files[i];
										if ('name' in file) {
												txt += "<strong> File " + (i+1)+ ". </strong>" + "name: " + file.name + "<br>";
										}
										if ('size' in file) {
												txt += "size: " + file.size + " bytes <br>";
										}
								}
						}
				}
				else {
						if (x.value == "") {
								txt += "เพิ่มไฟล์รูปภาพ";
						} else {
								txt += "The files property is not supported by your browser!";
								txt  += "<br>The path of the selected file: " + x.value;
						}
				}
				document.getElementById("BechelorDemo").innerHTML = txt;
				});
				// ================================================================= End Code =================================================================
				// ================================================================= Bechelor Portfolio Button Action =================================================================


			$('#btSubmitBechelorPortfolio').on('click',function(){

			  $('#addBechelorPortfolio').modal('hide');

				var filename= selectedFile.name;
			  var storageRef = firebase.storage().ref('/Portfolio/Bechelor/' + filename);
			  var uplodadTask = storageRef.put(selectedFile);
				var Status;


				if ($("#BechelorPortfolioHallOfFame").prop("checked") == true) {
					 Status = "Hall Of Fame"

				}else if ($("#BechelorPortfolioHallOfFame").prop("checked") == false)
				{
					Status = "General"
				}

			 	 uplodadTask.on('state_changed',function(sanpshot){

			 	 },function(error){

			 	 },function(){
			 		 var downloadURL = uplodadTask.snapshot.downloadURL;
			 		 var updates = {};

					 var data = {
	 			    port_name:$('#BechelorPortfolioName').val(),
	 			    port_detail:$('#BechelorPortfolioDetail').val(),
	 			    port_type:$('#BechelorPortfolioGroup').val(),
	 			    port_status:Status,
	 					port_years:$('#BechelorPortfolioYear').val(),
	 					port_image:downloadURL
	 			  };

					firebase.database().ref('website/student').child('bechelor').child('portfolio').push().set(data).then(function(){
				 	 console.log("Bechelor portfolio Saved:");
				  });

					txt = "";

					$('#BechelorPortfolioName').val("");
					$('#BechelorPortfolioDetail').val("");
					$('#BechelorPortfolioGroup').val("");
					$("#BechelorPortfolioHallOfFame").prop('checked', false);
					$('#BechelorPortfolioYear').val("");
					$('#BechelorPortfolioPicture').val("");
					document.getElementById("BechelorDemo").innerHTML = txt;
				});
			});

			$('#btCloseBechelorPortfolio').on('click',function(){

				txt = "";
				$('#addBechelorPortfolio').modal('hide');

					$('#BechelorPortfolioName').val("");
					$('#BechelorPortfolioDetail').val("");
					$('#BechelorPortfolioGroup').val("");
					$("#BechelorPortfolioHallOfFame").prop('checked', false);
					$('#BechelorPortfolioYear').val("");
					$('#BechelorPortfolioPicture').val("");
					document.getElementById("BechelorDemo").innerHTML = txt;
			});

			// ================================================================= End Code =================================================================


		// ================================================================= Graduate Portfolio Script =================================================================

		$('#GraduatePortfolioPicture').on('change',function(event){
			selectedFile = event.target.files[0];

		});
		// ================================================================= End Code =================================================================

		// <!-- <=========================================================== GraduatePortfolioPicture ===========================================================> -->
		$('#GraduatePortfolioPicture').on('change',function(){
			var x = document.getElementById("GraduatePortfolioPicture");
			var txt = "";
			if ('files' in x) {
					if (x.files.length == 0) {
							txt = "เพิ่มไฟล์รูปภาพ";
					} else {
							for (var i = 0; i < x.files.length; i++) {
									// txt += "<br><strong>" + (i+1) + ". file</strong><br>";
									var file = x.files[i];
									if ('name' in file) {
											txt += "<strong> File " + (i+1)+ ". </strong>" + "name: " + file.name + "<br>";
									}
									if ('size' in file) {
											txt += "size: " + file.size + " bytes <br>";
									}
							}
					}
			}
			else {
					if (x.value == "") {
							txt += "เพิ่มไฟล์รูปภาพ";
					} else {
							txt += "The files property is not supported by your browser!";
							txt  += "<br>The path of the selected file: " + x.value;
					}
			}
			document.getElementById("GraduateDemo").innerHTML = txt;
			});


		$('#btSubmitGraduatePortfolio').on('click',function(){

			$('#addGraduatePortfolio').modal('hide');

			var filename= selectedFile.name;
			var storageRef = firebase.storage().ref('/Portfolio/Graduate/' + filename);
			var uplodadTask = storageRef.put(selectedFile);
			var Status;

			if ($("#GraduatePortfolioHallOfFame").prop("checked") == true) {
				 Status = "Hall Of Fame"

			}else if ($("#GraduatePortfolioHallOfFame").prop("checked") == false)
			{
				Status = "General"
			}


			 uplodadTask.on('state_changed',function(sanpshot){

			 },function(error){

			 },function(){
				 var downloadURL = uplodadTask.snapshot.downloadURL;
				 var updates = {};

				 var data = {
					port_name:$('#GraduatePortfolioName').val(),
					port_detail:$('#GraduatePortfolioDetail').val(),
					port_type:$('#GraduatePortfolioGroup').val(),
					port_status:Status,
					port_years:$('#GraduatePortfolioYear').val(),
					port_image:downloadURL
				};

				firebase.database().ref('website/student').child('graduate').child('portfolio').push().set(data).then(function(){
				 console.log("Graduate portfolio Saved:");
				});

				txt = "";

				$('#GraduatePortfolioName').val("");
				$('#GraduatePortfolioDetail').val("");
				$('#GraduatePortfolioGroup').val("");
				$("#GraduatePortfolioHallOfFame").prop('checked', false);
				$('#GraduatePortfolioYear').val("");
				$('#GraduatePortfolioPicture').val("");
				document.getElementById("GraduateDemo").innerHTML = txt;
			});
		});

		$('#btCloseGraduatePortfolio').on('click',function(){

			txt = "";

			$('#addGraduatePortfolio').modal('hide');

			$('#GraduatePortfolioName').val("");
			$('#GraduatePortfolioDetail').val("");
			$('#GraduatePortfolioGroup').val("");
			$("#GraduatePortfolioHallOfFame").prop('checked', false);
			$('#GraduatePortfolioYear').val("");
			$('#GraduatePortfolioPicture').val("");
			document.getElementById("GraduateDemo").innerHTML = txt;

		});
		// ================================================================= End Code =================================================================
		// ================================================================= Graduate Activity Upload Script =================================================================

		// 	document.getElementById("GraduateActivityImage").addEventListener('change', function(e){
		// 			//Get files
		// 			$('#btSubmitGraduateActivity').on('click',function(){
    //
    //
		// 			for (var i = 0; i < e.target.files.length; i++) {
		// 					var imageFile = e.target.files[i];
		// 					uploadImageAsPromise(imageFile);
		// 			}
    //
		// 		});
		// 	});
    //
		// 	// //function to save file
		// 	// function previewFile(){
		// 	//   var storage = firebase.storage();
    //   //
		// 	//   var file = document.getElementById("files").files[0];
		// 	//     console.log(file);
    //   //
		// 	//   var storageRef = firebase.storage().ref();
    //   //
		// 	//   //dynamically set reference to the file name
		// 	//   var thisRef = storageRef.child(file.name);
    //   //
		// 	//   //put request upload file to firebase storage
		// 	//   thisRef.put(file).then(function(snapshot) {
		// 	//     console.log('Uploaded a blob or file!');
		// 	// });
    //
		// 	  //get request to get URL for uploaded file
		// 	  thisRef.getDownloadURL().then(function(url) {
		// 	  console.log(url);
		// 	  })
    //
		// 	  }
    //
		// 	//Handle waiting to upload each file using promise
		// 	function uploadImageAsPromise (imageFile) {
		// 			return new Promise(function (resolve, reject) {
		// 					var storageRef = firebase.storage().ref("/Activity/Graduate/Image/"+imageFile.name);
    //
		// 					//Upload file
		// 					var task = storageRef.put(imageFile);
    //
		// 					task.on('state_changed',function(sanpshot){
    //
		// 					},function(error){
    //
		// 					},function(){
		// 						var downloadImageURL = task.snapshot.downloadURL;
    //
		// 						firebase.database().ref('website/student').child('bechelor').child('activity').child('image').push().set(downloadImageURL);
		// 			});
		// 	});
		// }
    //
		// 	document.getElementById("GraduateActivityVideo").addEventListener('change', function(e){
		// 			//Get files
		// 			for (var i = 0; i < e.target.files.length; i++) {
		// 					var videoFile = e.target.files[i];
    //
		// 					uploadVideoAsPromise(videoFile);
		// 			}
		// 	});
    //
		// 	//Handle waiting to upload each file using promise
		// 	function uploadVideoAsPromise (videoFile) {
		// 			return new Promise(function (resolve, reject) {
		// 					var storageRef = firebase.storage().ref("/Activity/Graduate/Video/"+videoFile.name);
    //
		// 					//Upload file
		// 					var task = storageRef.put(videoFile);
    //
    //
    //
		// 			});
		// 	};
    //
		// 	$('#btSubmitGraduateActivity').on('click',function(){
    //
		// 		$('#addGraduateActivity').modal('hide');
    //
		// 		var filename= selectedFile.name;
		// 		var storageRef = firebase.storage().ref('/Activity/Graduate/' + filename);
		// 		var uplodadTask = storageRef.put(selectedFile);
    //
    //
    //
		// 		 uplodadTask.on('state_changed',function(sanpshot){
    //
		// 		 },function(error){
    //
		// 		 },function(){
		// 			 var downloadURL = uplodadTask.snapshot.downloadURL;
		// 			 var updates = {};
    //
		// 			 var data = {
		// 				activity_name:$('#GraduateActivityName').val(),
		// 				activity_detail:$('#GraduateActivityDetail').val(),
		// 				activity_image:downloadImageURL,
		// 				activity_video:downloadVideoURL,
		// 				activity_start:$('#GraduateActivityDateFrom').val(),
		// 				activity_end:$('#GraduateActivityDateTo').val()
		// 			};
    //
		// 			firebase.database().ref('website/student').child('graduate').child('activity').push().set(data).then(function(){
		// 			 console.log("Graduate Activity Saved:");
		// 			});
    //
		// 			txt = "";
    //
		// 			$('#GraduateActivityName').val("");
		// 			$('#GraduateActivityDetail').val("");
		// 			$('#GraduateActivityImage').val("");
		// 			$('#GraduateActivityVideo').val("");
		// 			$('#GraduateActivityDateFrom').val("");
		// 			$('#GraduateActivityDateTo').val("");
		// 		});
		// 	});

		// ================================================================= End Code =================================================================


 });
 // <!-- <=========================================================== BechelorPortfolioYear ===========================================================> -->
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


 // <!-- <=========================================================== GraduatePortfolioYear ===========================================================> -->
	var nowYear;
	nowYear = new Date().getFullYear();
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


 // <!-- <=========================================================== GraduateActivityDate ===========================================================> -->
