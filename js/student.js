$(document).ready(function(){

	var selectedFile;
	var txt = "";

	var BecTypeEdit = "";
	var GroupBecId = "";
	var clickBtEditBecPortGroup = 0;

	var GraTypeEdit = "";
	var GroupGraId = "";
	var clickBtEditGraPortGroup = 0;

	// ========================================= Get Bechelor Portfolio Type From Database =========================================

	var dbRef = firebase.database();
	var BechelorPortfolioGroupRef = dbRef.ref("website/student/portfolioGroup/bechelor");
	var BechelorRootRef = BechelorPortfolioGroupRef;
	// ========================================= End Code =====================================================================
	// ========================================= Get Graduate Portfolio Type From Database =========================================

	// var dbRef = firebase.database();
	var GraduatePortfolioGroupRef = dbRef.ref("website/student/portfolioGroup/graduate");
	var GraduateRootRef = GraduatePortfolioGroupRef;
	// ========================================= End Code =====================================================================

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

	// ========================================= Set initial Bechelor Portfolio Type =========================================
	$('#AddBechelorPortfolioType').hide();
	$('#EditBechelorPortfolioType').hide();
	$('#SaveAddBechelorPortfolioGroup').hide();
	$('#CancelAddBechelorPortfolioGroup').hide();

	$('#SaveEditBechelorPortfolioGroup').hide();
	$('#CancelEditBechelorPortfolioGroup').hide();
	// ========================================= End Code =====================================================================

	// ========================================= Set initial Graduate Portfolio Type =========================================
	$('#AddGraduatePortfolioType').hide();
	$('#EditGraduatePortfolioType').hide();
	$('#SaveAddGraduatePortfolioGroup').hide();
	$('#CancelAddGraduatePortfolioGroup').hide();

	$('#SaveEditGraduatePortfolioGroup').hide();
	$('#CancelEditGraduatePortfolioGroup').hide();
	// ========================================= End Code =====================================================================


	// ========================================= Add Bechelor Portfolio  =========================================
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

			$('#AddBechelorPortfolioGroup').show();
			$('#EditBechelorPortfolioGroup').show();
			$('#DeleteBechelorPortfolioGroup').show();

			$('#AddBechelorPortfolioType').hide();
			$('#EditBechelorPortfolioType').hide();
			$('#SaveAddBechelorPortfolioGroup').hide();
			$('#CancelAddBechelorPortfolioGroup').hide();

			$('#SaveEditBechelorPortfolioGroup').hide();
			$('#CancelEditBechelorPortfolioGroup').hide();

		});
		// ========================================= End Code =====================================================================

		// ========================================= Add Bechelor Activity Modal Show  =========================================

	$('#btAddBechelorActivity').on('click',function(e){
  		e.preventDefault();
   			$('#addBechelorActivity').modal('show');
		});
		// ========================================= End Code =====================================================================

		// ========================================= Add Graduate Portfolio  =========================================

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

			$('#AddGraduatePortfolioGroup').show();
			$('#EditGraduatePortfolioGroup').show();
			$('#DeleteGraduatePortfolioGroup').show();

			$('#AddGraduatePortfolioType').hide();
			$('#EditGraduatePortfolioType').hide();
			$('#SaveAddGraduatePortfolioGroup').hide();
			$('#CancelAddGraduatePortfolioGroup').hide();

			$('#SaveEditGraduatePortfolioGroup').hide();
			$('#CancelEditGraduatePortfolioGroup').hide();

		});
		// ========================================= End Code =====================================================================
		// ========================================= Add Graduate Activity Modal Show =========================================

	$('#btAddGraduateActivity').on('click',function(e){
  		e.preventDefault();
   			$('#addGraduateActivity').modal('show');
		});
		// ========================================= End Code =====================================================================

	// ========================================= Add Bechelor Portfolio Group =========================================
	$('#AddBechelorPortfolioGroup').on('click',function(e){
			$('#AddBechelorPortfolioType').show();
			$('#CancelAddBechelorPortfolioGroup').show();
			$('#SaveAddBechelorPortfolioGroup').show();
			$('#AddBechelorPortfolioGroup').hide();
			$('#EditBechelorPortfolioGroup').hide();
			$('#DeleteBechelorPortfolioGroup').hide();

		});
		// ========================================= End Code =====================================================================

		// ========================================= Cancel Add Bechelor Portfolio Group =========================================

		$('#CancelAddBechelorPortfolioGroup').on('click',function(e){
			$('#AddBechelorPortfolioType').hide();
			$('#CancelAddBechelorPortfolioGroup').hide();
			$('#SaveAddBechelorPortfolioGroup').hide();
			$('#AddBechelorPortfolioGroup').show();
			$('#EditBechelorPortfolioGroup').show();
			$('#DeleteBechelorPortfolioGroup').show();

		});
		// ========================================= End Code =====================================================================

		// ========================================= Edit Bechelor Portfolio Group =========================================
		$('#EditBechelorPortfolioGroup').on('click',function(e){
				$('#EditBechelorPortfolioType').show();
				$('#SaveEditBechelorPortfolioGroup').show();
				$('#CancelEditBechelorPortfolioGroup').show();
				$('#AddBechelorPortfolioGroup').hide();
				$('#EditBechelorPortfolioGroup').hide();
				$('#DeleteBechelorPortfolioGroup').hide();


				$('#BechelorPortfolioGroup').on('change',function(){
				GroupBecId = $(this).children(":selected").attr("id");
					// alert(GroupBecId);
				BecTypeEdit = $("#BechelorPortfolioGroup option:selected" ).text();
				// alert($("#BechelorPortfolioGroup option:selected" ).text());
				$('#EditBechelorPortfolioType').val(BecTypeEdit);
				});

			});
			// ========================================= End Code =====================================================================

			// ========================================= Delete BechelorBechelorio Group =========================================

			$('#BechelorPortfolioGroup').on('change',function(){
			GroupBecId = $(this).children(":selected").attr("id");
			});

			$('#DeleteBechelorPortfolioGroup').on('click',function(){
				// GroupGraId = $(this).children(":selected").attr("id");
				clickBtEditBecPortGroup = clickBtEditBecPortGroup+1;

				BechelorRootRef.child(GroupBecId).remove().then(function(){
						$('#deletePortModal').modal('show');

						$('#BechelorPortfolioGroup').empty();

						BechelorRootRef.on("child_added",snap => {
							var Type = snap.child('port_GroupType').val();

							$('#BechelorPortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

						});
				});
					$(this).children(":selected").remove();
			});
			// ========================================= End Code =====================================================================

			// ========================================= Cancel Edits Bechelor Portfolio Group =========================================

			$('#CancelEditBechelorPortfolioGroup').on('click',function(e){
				$('#EditBechelorPortfolioType').hide();
				$('#SaveEditBechelorPortfolioGroup').hide();
				$('#CancelEditBechelorPortfolioGroup').hide();
				$('#AddBechelorPortfolioGroup').show();
				$('#EditBechelorPortfolioGroup').show();
				$('#DeleteBechelorPortfolioGroup').show();

			});
			// ========================================= End Code =====================================================================


		// ========================================= Add Graduate Portfolio Group =========================================

		$('#AddGraduatePortfolioGroup').on('click',function(e){
				$('#AddGraduatePortfolioType').show();
				$('#CancelAddGraduatePortfolioGroup').show();
				$('#SaveAddGraduatePortfolioGroup').show();
				$('#AddGraduatePortfolioGroup').hide();
				$('#EditGraduatePortfolioGroup').hide();
				$('#DeleteGraduatePortfolioGroup').hide();

			});
			// ========================================= End Code =====================================================================

			// ========================================= Cancel Add Graduate Portfolio Group =========================================

			$('#CancelAddGraduatePortfolioGroup').on('click',function(e){
				$('#AddGraduatePortfolioType').hide();
				$('#CancelAddGraduatePortfolioGroup').hide();
				$('#SaveAddGraduatePortfolioGroup').hide();
				$('#AddGraduatePortfolioGroup').show();
				$('#EditGraduatePortfolioGroup').show();
				$('#DeleteGraduatePortfolioGroup').show();

			});
			// ========================================= End Code =====================================================================

			// ========================================= Edit Graduate Portfolio Group =========================================

			$('#EditGraduatePortfolioGroup').on('click',function(e){
					$('#EditGraduatePortfolioType').show();
					$('#SaveEditGraduatePortfolioGroup').show();
					$('#CancelEditGraduatePortfolioGroup').show();
					$('#AddGraduatePortfolioGroup').hide();
					$('#EditGraduatePortfolioGroup').hide();
					$('#DeleteGraduatePortfolioGroup').hide();


					$('#GraduatePortfolioGroup').on('change',function(){
					GroupGraId = $(this).children(":selected").attr("id");
						// alert(GroupBecId);
					GraTypeEdit = $("#GraduatePortfolioGroup option:selected" ).text();
					// alert($("#BechelorPortfolioGroup option:selected" ).text());
					$('#EditGraduatePortfolioType').val(GraTypeEdit);
					});

				});
				// ========================================= End Code =====================================================================

				// ========================================= Delete Graduate Portfolio Group =========================================

				$('#GraduatePortfolioGroup').on('change',function(){
				GroupGraId = $(this).children(":selected").attr("id");
				});

				$('#DeleteGraduatePortfolioGroup').on('click',function(){
					// GroupGraId = $(this).children(":selected").attr("id");
					clickBtEditGraPortGroup = clickBtEditGraPortGroup+1;

				  GraduateRootRef.child(GroupGraId).remove().then(function(){
				      $('#deletePortModal').modal('show');

							$('#GraduatePortfolioGroup').empty();

							GraduateRootRef.on("child_added",snap => {
								var Type = snap.child('port_GroupType').val();

								$('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

							});
				  });
				    $(this).children(":selected").remove();
				});
				// ========================================= End Code =====================================================================
				// ========================================= Cancel Edits Graduate Portfolio Group =========================================

				$('#CancelEditGraduatePortfolioGroup').on('click',function(e){
					$('#EditGraduatePortfolioType').hide();
					$('#SaveEditGraduatePortfolioGroup').hide();
					$('#CancelEditGraduatePortfolioGroup').hide();
					$('#AddGraduatePortfolioGroup').show();
					$('#EditGraduatePortfolioGroup').show();
					$('#DeleteGraduatePortfolioGroup').show();

				});
				// ========================================= End Code =====================================================================

				$('#btShowBechelorPortfolio').on('click',function(e){
			  		location.href = "showBechelorPortfolio.php";
					});

				$('#btShowGraduatePortfolio').on('click',function(e){
			  		location.href = "showGraduatePortfolio.php";
					});
				// ========================================= Get Bechelor Portfolio Type Dropdown =========================================

				select = document.getElementById('BechelorPortfolioGroup');

					BechelorRootRef.on("child_added",snap => {
						var Type = snap.child('port_GroupType').val();

						$('#BechelorPortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

					});
				// ========================================= End Bechelor Portfolio Type =========================================
				// ========================================= Get Graduate Portfolio Type Dropdown =========================================

				select = document.getElementById('GraduatePortfolioGroup');

					GraduateRootRef.on("child_added",snap => {
						var Type = snap.child('port_GroupType').val();

						$('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

					});
				// ========================================= End Bechelor Portfolio Type =========================================

				// ========================================= Add Bechelor Portfolio Type =========================================
				$('#SaveAddBechelorPortfolioGroup').on('click',function(e){

						 var data = {
		 			    port_GroupType:$('#AddBechelorPortfolioType').val(),
		 			  };

						firebase.database().ref('website/student').child('portfolioGroup').child('bechelor').push().set(data).then(function(){
					 	 console.log("Bechelor portfolio Group Saved:");
					  });

						$('#AddBechelorPortfolioType').val("");
						$('#AddBechelorPortfolioType').hide();
						$('#CancelAddBechelorPortfolioGroup').hide();
						$('#SaveAddBechelorPortfolioGroup').hide();
						$('#AddBechelorPortfolioGroup').show();
						$('#EditBechelorPortfolioGroup').show();
						$('#DeleteBechelorPortfolioGroup').show();

						for(var i = 0;i< clickBtEditBecPortGroup;i++){
			        $('#BechelorPortfolioGroup option:last').remove();
			      }


					});
				// ========================================= End Add Bechelor Portfolio Type =========================================

				// ========================================= Edit Bechelor Portfolio Type =========================================

				$('#SaveEditBechelorPortfolioGroup').on('click',function(e){

					clickBtEditBecPortGroup = clickBtEditBecPortGroup+1;
					// var RefBechelorPortGroup = dbRef.ref("website/student/portfolioGroup/bechelor");
					// var rootBechelorPortGroupRef = RefBechelorPortGroup;

					var dataUpdateBechelorPortGroup = {
						port_GroupType:$('#EditBechelorPortfolioType').val()
					};

					BechelorRootRef.child(GroupBecId).update(dataUpdateBechelorPortGroup);

						$('#EditBechelorPortfolioType').val("");
						$('#EditBechelorPortfolioType').hide();
						$('#SaveEditBechelorPortfolioGroup').hide();
						$('#CancelEditBechelorPortfolioGroup').hide();
						$('#AddBechelorPortfolioGroup').show();
						$('#EditBechelorPortfolioGroup').show();
						$('#DeleteBechelorPortfolioGroup').show();

						$('#BechelorPortfolioGroup').empty();

						BechelorRootRef.on("child_added",snap => {
							var Type = snap.child('port_GroupType').val();

							$('#BechelorPortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

						});

					});
				// ========================================= End Add Bechelor Portfolio Type =========================================

				// ========================================= Add Graduate Portfolio Type =========================================
				$('#SaveAddGraduatePortfolioGroup').on('click',function(e){

						 var data = {
		 			    port_GroupType:$('#AddGraduatePortfolioType').val(),
		 			  };

						firebase.database().ref('website/student').child('portfolioGroup').child('graduate').push().set(data).then(function(){
					 	 console.log("Graduate portfolio Group Saved:");
					  });

						$('#AddGraduatePortfolioType').val("");
						$('#AddGraduatePortfolioType').hide();
						$('#CancelAddGraduatePortfolioGroup').hide();
						$('#SaveAddGraduatePortfolioGroup').hide();
						$('#AddGraduatePortfolioGroup').show();
						$('#EditGraduatePortfolioGroup').show();
						$('#DeleteGraduatePortfolioGroup').show();

						for(var i = 0;i< clickBtEditGraPortGroup;i++){
			        $('#GraduatePortfolioGroup option:last').remove();
			      }

					});
				// ========================================= End Add Graduate Portfolio Type =========================================

				// ========================================= Edit Graduate Portfolio Type =========================================

				$('#SaveEditGraduatePortfolioGroup').on('click',function(e){

					clickBtEditGraPortGroup = clickBtEditGraPortGroup+1;

					var dataUpdateGraduatePortGroup = {
						port_GroupType:$('#EditGraduatePortfolioType').val()
					};

					GraduateRootRef.child(GroupGraId).update(dataUpdateGraduatePortGroup);

						$('#EditGraduatePortfolioType').val("");
						$('#EditGraduatePortfolioType').hide();
						$('#SaveEditGraduatePortfolioGroup').hide();
						$('#CancelEditGraduatePortfolioGroup').hide();
						$('#AddGraduatePortfolioGroup').show();
						$('#EditGraduatePortfolioGroup').show();
						$('#DeleteGraduatePortfolioGroup').show();

						$('#GraduatePortfolioGroup').empty();

						GraduateRootRef.on("child_added",snap => {
							var Type = snap.child('port_GroupType').val();

							$('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

						});

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
	 					port_image:downloadURL,
						port_show_status:"Not Show"
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

			document.getElementById("GraduateActivityImage").addEventListener('change', function(e){
					//Get files
					$('#btSubmitGraduateActivity').on('click',function(){


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
								var downloadImageURL = task.snapshot.downloadURL;

								firebase.database().ref('website/student').child('bechelor').child('activity').child('image').push().set(downloadImageURL);
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

			$('#btSubmitGraduateActivity').on('click',function(){

				$('#addGraduateActivity').modal('hide');

				var filename= selectedFile.name;
				var storageRef = firebase.storage().ref('/Activity/Graduate/' + filename);
				var uplodadTask = storageRef.put(selectedFile);



				 uplodadTask.on('state_changed',function(sanpshot){

				 },function(error){

				 },function(){
					 var downloadURL = uplodadTask.snapshot.downloadURL;
					 var updates = {};

					 var data = {
						activity_name:$('#GraduateActivityName').val(),
						activity_detail:$('#GraduateActivityDetail').val(),
						activity_image:downloadImageURL,
						activity_video:downloadVideoURL,
						activity_start:$('#GraduateActivityDateFrom').val(),
						activity_end:$('#GraduateActivityDateTo').val()
					};

					firebase.database().ref('website/student').child('graduate').child('activity').push().set(data).then(function(){
					 console.log("Graduate Activity Saved:");
					});

					txt = "";

					$('#GraduateActivityName').val("");
					$('#GraduateActivityDetail').val("");
					$('#GraduateActivityImage').val("");
					$('#GraduateActivityVideo').val("");
					$('#GraduateActivityDateFrom').val("");
					$('#GraduateActivityDateTo').val("");
				});
			});

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
