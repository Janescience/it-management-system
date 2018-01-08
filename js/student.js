$(document).ready(function(){

	var selectedFile;
	var txt = "";

	// ========================================= Set initial Bachelor Portfolio Modal =========================================
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

		$('#btAddGraduateActivity').on('click',function(e){
	  		e.preventDefault();
	   			$('#addGraduateActivity').modal('show');
			});

			$('#btShowBechelorPortfolio').on('click',function(e){
		  		location.href = "showBechelorPortfolio.php";
				});

	// $('#capture').on('click',function(e){
  // 		e.preventDefault();
  //  			$('#CaptureBechelorActivity').modal('show');
  //
	// 			// Grab elements, create settings, etc.
	// 			var video = document.getElementById('video');
  //
	// 			// Get access to the camera!
	// 			if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	// 			    // Not adding `{ audio: true }` since we only want video now
	// 			    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
	// 			        video.src = window.URL.createObjectURL(stream);
	// 			        video.play();
	// 			    });
	// 			}
  //
	// 			/* Legacy code below: getUserMedia
	// 			else if(navigator.getUserMedia) { // Standard
	// 			    navigator.getUserMedia({ video: true }, function(stream) {
	// 			        video.src = stream;
	// 			        video.play();
	// 			    }, errBack);
	// 			} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
	// 			    navigator.webkitGetUserMedia({ video: true }, function(stream){
	// 			        video.src = window.webkitURL.createObjectURL(stream);
	// 			        video.play();
	// 			    }, errBack);
	// 			} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
	// 			    navigator.mozGetUserMedia({ video: true }, function(stream){
	// 			        video.src = window.URL.createObjectURL(stream);
	// 			        video.play();
	// 			    }, errBack);
	// 			}
	// 			*/
  //
	// 			// Elements for taking the snapshot
	// 			var canvas = document.getElementById('canvas');
	// 			var context = canvas.getContext('2d');
	// 			var video = document.getElementById('video');
  //
	// 			// Trigger photo take
	// 			document.getElementById("snap").addEventListener("click", function() {
	// 			context.drawImage(video, 0, 0, 460, 320);
	// 			});
  //
  //
	// 	});

		// $('#canvas').hide();
    //
		// 	$('#snap').on('click',function(e){
    //
    //
    //
		// 		$('#canvas').show();
    //
		// 	});

			// ========================================= Bachelor Portfolio Script =========================================

			$('#BechelorPortfolioPicture').on('change',function(event){
				selectedFile = event.target.files[0];

			});

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

				// ========================================= Bachelor Portfolio Button Action =========================================


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
					Status = null
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

		// ========================================= Bachelor Activity Upload Script =========================================

			document.getElementById("GraduateActivityImage").addEventListener('change', function(e){
					//Get files
					$('#btUploadGraduateActivity').on('click',function(){


					for (var i = 0; i < e.target.files.length; i++) {
							var imageFile = e.target.files[i];
							uploadImageAsPromise(imageFile);
					}

				});
			});



			//Handle waiting to upload each file using promise
			function uploadImageAsPromise (imageFile) {
					return new Promise(function (resolve, reject) {
							var storageRef = firebase.storage().ref("/Activity/Graduate/Image/"+imageFile.name);

							//Upload file
							var task = storageRef.put(imageFile);

							task.on('state_changed',function(sanpshot){

							},function(error){

							},function(){
								var downloadURL = task.snapshot.downloadURL;

								firebase.database().ref('website/student').child('bechelor').child('portfolio').child('image').push().set(downloadURL);
					});
			});
		}

			document.getElementById("GraduateActivityVideo").addEventListener('change', function(e){
					//Get files
					for (var i = 0; i < e.target.files.length; i++) {
							var videoFile = e.target.files[i];

							uploadVideoAsPromise(videoFile);
					}
			});

			//Handle waiting to upload each file using promise
			function uploadVideoAsPromise (videoFile) {
					return new Promise(function (resolve, reject) {
							var storageRef = firebase.storage().ref("/Activity/Graduate/Video/"+videoFile.name);

							//Upload file
							var task = storageRef.put(videoFile);



					});
			};


		// ========================================= Bachelor Portfolio Button Action =========================================


	$('#btUploadBechelorImageActivity').on('click',function(){

		$('#addBechelorActivity').modal('hide');

		var filename= selectedFile.name;
		var storageRef = firebase.storage().ref('/Portfolio/Bechelor/' + filename);
		var uplodadTask = storageRef.put(selectedFile);
		var Status;


		if ($("#BechelorPortfolioHallOfFame").prop("checked") == true) {
			 Status = "Hall Of Fame"

		}else if ($("#BechelorPortfolioHallOfFame").prop("checked") == false)
		{
			Status = null
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

		// ========================================= Graduate Portfolio Script =========================================

		$('#GraduatePortfolioPicture').on('change',function(event){
			selectedFile = event.target.files[0];

		});

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
				Status = null
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

				// $('input[name="GraduateDaterange"]').daterangepicker(
				// {
				// 	"showWeekNumbers": true,
				// 	"timePicker": true,
				// 	"timePicker24Hour": true,
				// 	"timePickerIncrement": 5,
				// 	"autoApply": true,
				// 	"locale": {
				// 			"format": 'DD/MM/YYYY HH:mm ',
				// 			"separator": " - ",
				// 			"applyLabel": "Apply",
				// 			"cancelLabel": "Cancel",
				// 			"fromLabel": "From",
				// 			"toLabel": "To",
				// 			"customRangeLabel": "Custom",
				// 			"weekLabel": "W",
				// 			"daysOfWeek": [
				// 					"Su",
				// 					"Mo",
				// 					"Tu",
				// 					"We",
				// 					"Th",
				// 					"Fr",
				// 					"Sa"
				// 			],
				// 			"monthNames": [
				// 					"January",
				// 					"February",
				// 					"March",
				// 					"April",
				// 					"May",
				// 					"June",
				// 					"July",
				// 					"August",
				// 					"September",
				// 					"October",
				// 					"November",
				// 					"December"
				// 			],
				// 			"firstDay": 1
				// 	},
				// 	"linkedCalendars": false,
				// 	"alwaysShowCalendars": true,
				// 	"startDate": "01/01/2018",
				// 	"endDate": "01/01/2018",
				// 	"opens": "center",
				// 	"drops": "up",
				// 	"buttonClasses": "btn btn-md",
				// 	"applyClass": "btn-info",
				// 	"cancelClass": "btn-danger"
				// }, function(start, end, label) {
				// console.log("New date range selected: ' + start.format('DD/MM/YYYY HH:mm ') + ' to ' + end.format('DD/MM/YYYY HH:mm ') + ' (predefined range: ' + label + ')");
				// alert("จัดกิจกรรมตั้งแต่วันที่ : " + start.format('DD/MM/YYYY HH:mm ') + ' ถึง ' + end.format('DD/MM/YYYY HH:mm '));
				// });

// Date picker 2


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
