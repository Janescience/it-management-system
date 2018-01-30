$(document).ready(function(){
	var selectedFile;
	var txt = "";

	var BecTypeEdit = "";
	var GroupBecId = "";
	var clickBtEditBecPortGroup = 0;

	var GraTypeEdit = "";
	var GroupGraId = "";
	var clickBtEditGraPortGroup = 0;

	var NameGraduateAct;
	// var GraduateActivityImage = [];
	// var GraduateActivityVideo = [];

	var NameBechelorAct;
	// var BechelorActivityImage = [];
	// var BechelorActivityVideo = [];
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

		// ========================================= Delete Bechelor Portfolio Group =========================================

		$('#BechelorPortfolioGroup').on('change',function(){
		GroupBecId = $(this).children(":selected").attr("id");

		$('#DeleteBechelorPortfolioGroup').on('click',function(){
			// GroupGraId = $(this).children(":selected").attr("id");
			clickBtEditBecPortGroup = clickBtEditBecPortGroup+1;

			BechelorRootRef.child(GroupBecId).remove().then(function(){
					$('#deletePortModal').modal('show');

					$('#BechelorPortfolioGroup').empty();

					BechelorRootRef.on("child_added",snap => {
						var Type = snap.child('port_GroupType').val();

						$('#BechelorPortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

						$('#BechelorPortfolioGroup').val("");

					});
			});
				$(this).children(":selected").remove();
		});
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

					$('#BechelorPortfolioGroup').val("");

				});

			});
		// ========================================= End Add Bechelor Portfolio Type =========================================

		// ========================================= Add Bechelor Activity Modal Show  =========================================

	$('#btAddBechelorActivity').on('click',function(e){
  		e.preventDefault();

			$('#BechelorActivityName').val("");
			$('#BechelorActivityDetail').val("");
			$('#BechelorActivityImage').val("");
			$('#BechelorActivityVideo').val("");
			$('#BechelorActivityDateFrom').val("");
			$('#BechelorActivityDateTo').val("");

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


		$('#DeleteGraduatePortfolioGroup').on('click',function(){
			// GroupGraId = $(this).children(":selected").attr("id");
			clickBtEditGraPortGroup = clickBtEditGraPortGroup+1;

		  GraduateRootRef.child(GroupGraId).remove().then(function(){
		      $('#deletePortModal').modal('show');

					$('#GraduatePortfolioGroup').empty();

					GraduateRootRef.on("child_added",snap => {
						var Type = snap.child('port_GroupType').val();

						$('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

						$('#GraduatePortfolioGroup').val("");
					});
		  });
		    $(this).children(":selected").remove();
		});
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
		// ========================================= Add Graduate Activity Modal Show =========================================

	$('#btAddGraduateActivity').on('click',function(e){
  		e.preventDefault();

			$('#GraduateActivityName').val("");
			$('#GraduateActivityDetail').val("");
			$('#GraduateActivityImage').val("");
			$('#GraduateActivityVideo').val("");
			$('#GraduateActivityDateFrom').val("");
			$('#GraduateActivityDateTo').val("");

   			$('#addGraduateActivity').modal('show');
		});
		// ========================================= End Code =====================================================================

	// ========================================= Go To Anypage =========================================
		$('#btShowBechelorPortfolio').on('click',function(e){
	  		location.href = "showBechelorPortfolio.php";
			});

		$('#btShowBechelorActivity').on('click',function(e){
	  		location.href = "showBechelorActivity.php";
			});

		$('#btShowGraduatePortfolio').on('click',function(e){
	  		location.href = "showGraduatePortfolio.php";
			});

			$('#btShowGraduateActivity').on('click',function(e){
		  		location.href = "showGraduateActivity.php";
				});

		$('#btAddBechelorHall').on('click',function(e){
	  		location.href = "showHallOfFameBechelor.php";
			});

		$('#btAddGraduateHall').on('click',function(e){
	  		location.href = "showHallOfFameGraduate.php";
			});
	// ========================================= End Code =====================================================================

		// ========================================= Get Bechelor Portfolio Type Dropdown =========================================

		select = document.getElementById('BechelorPortfolioGroup');

			BechelorRootRef.on("child_added",snap => {
				var Type = snap.child('port_GroupType').val();

				$('#BechelorPortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

				$('#BechelorPortfolioGroup').val("");


			});
		// ========================================= End Bechelor Portfolio Type =========================================
		// ========================================= Get Graduate Portfolio Type Dropdown =========================================

		select = document.getElementById('GraduatePortfolioGroup');

			GraduateRootRef.on("child_added",snap => {
				var Type = snap.child('port_GroupType').val();

				$('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

				$('#GraduatePortfolioGroup').val("");
			});
		// ========================================= End Graduate Portfolio Type =========================================

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

					$('#GraduatePortfolioGroup').val("");
				});

			});
	// ================================================================= End Code =================================================================

	// ========================================= Bechelor Portfolio Script =========================================

	$('#BechelorPortfolioPicture').on('change',function(event){
		selectedFile = event.target.files[0];

	});
	// ================================================================= End Code =================================================================
	// <!-- <=========================================================== Bechelor Portfolio Picture ===========================================================> -->

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
						port_show_status:"checked"
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

				// txt = "";
				// $('#addBechelorPortfolio').modal('hide');
        //
				// 	$('#BechelorPortfolioName').val("");
				// 	$('#BechelorPortfolioDetail').val("");
				// 	$('#BechelorPortfolioGroup').val("");
				// 	$("#BechelorPortfolioHallOfFame").prop('checked', false);
				// 	$('#BechelorPortfolioYear').val("");
				// 	$('#BechelorPortfolioPicture').val("");
				// 	document.getElementById("BechelorDemo").innerHTML = txt;
			});

			// ================================================================= End Code =================================================================
			// ================================================================= Bechelor Activity Upload Script =================================================================
			  document.getElementById("BechelorActivityImage").addEventListener('change', function(p){
			    document.getElementById("BechelorActivityVideo").addEventListener('change', function(v){

			      $('#btSubmitBechelorActivity').on('click',function(){

			        var data = {
			        activity_name:$('#BechelorActivityName').val(),
			        activity_detail:$('#BechelorActivityDetail').val(),
			        // activity_image:"-",
			        // activity_video:"-",
			        activity_start:$('#BechelorActivityDateFrom').val(),
			        activity_end:$('#BechelorActivityDateTo').val(),
							activity_show_status:"checked"

			      };
			      NameBechelorAct = $("#BechelorActivityName").val();


			      firebase.database().ref('website/student/bechelor').child('activity').child(NameBechelorAct).set(data).then(function(){
			       console.log("Bechelor Activity Saved:");
			      });


			      for (var i = 0; i < p.target.files.length; i++) {
			          var imageFile = p.target.files[i];
			          uploadImageAsPromise(imageFile);
			      }

			      for (var i = 0; i < v.target.files.length; i++) {
			          var videoFile = v.target.files[i];

			          uploadVideoAsPromise(videoFile);
			      }

			  //Handle waiting to upload each file using promise
			  function uploadImageAsPromise (imageFile) {
			      return new Promise(function (resolve, reject) {

			          var storageImagesRef = firebase.storage().ref("/Activity/Bechelor/Image/"+NameBechelorAct+"/"+imageFile.name);
			          // var storageRef = firebase.storage().ref("/Activity/"+imageFile.name);

			          var ImagesTask = storageImagesRef.put(imageFile);



			          ImagesTask.on('state_changed',function(snapshot){

			          },function(error){

			          },function(){

			            var downloadImageURL = ImagesTask.snapshot.downloadURL;
									// alert(NameBechelorAct);

			          //   qActImage = {
			          //     activity_image:BechelorActivityImage
			          // };
								// firebase.database().ref('website/student').child('bechelor').child('activity').child('image').push().set(downloadImageURL);
			          firebase.database().ref('website/student/bechelor').child('activity').child(NameBechelorAct).child('activity_image').push().child('images').set(downloadImageURL).then(function(){
			           console.log("Bechelor Activity Images Saved:");
			          });
			      });
			  });

			}
			function uploadVideoAsPromise (videoFile) {
			        return new Promise(function (resolve, reject) {
			            // var storageRef = firebase.storage().ref("/Activity/Bechelor/Image/"+imageFile.name);
			            var storageVideosRef = firebase.storage().ref("/Activity/Bechelor/Video/"+NameBechelorAct+"/"+videoFile.name);

			            var VideosTask = storageVideosRef.put(videoFile);

			            VideosTask.on('state_changed',function(snapshot){

			            },function(error){

			            },function(){
			              var downloadVideoURL = VideosTask.snapshot.downloadURL;

			              // BechelorActivityVideo.push(downloadVideoURL);
                  //
			            //   qActVideo = {
			            //     activity_video:BechelorActivityVideo
			            // };
			            firebase.database().ref('website/student/bechelor').child('activity').child(NameBechelorAct).child('activity_video').push().child('videos').set(downloadVideoURL).then(function(){
			             console.log("Bechelor Activity Video Saved:");
			            });
			        });
			    });
			}

			$('#addBechelorActivity').modal('hide');

			  // $('#BechelorActivityName').val("");
			  // $('#BechelorActivityDetail').val("");
			  $('#BechelorActivityImage').val("");
			  $('#BechelorActivityVideo').val("");
			  // $('#BechelorActivityDateFrom').val("");
			  // $('#BechelorActivityDateTo').val("");
			});
			});
			});
			// ================================================================= End Code =================================================================
		// ================================================================= Graduate Portfolio Script =================================================================

		$('#GraduatePortfolioPicture').on('change',function(event){
			selectedFile = event.target.files[0];

		});
		// ================================================================= End Code =================================================================

		// <!-- <=========================================================== Graduate Portfolio Picture ===========================================================> -->
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
			// ================================================================= End Code =================================================================

			// ================================================================= Graduate Portfolio Script =================================================================
			// ================================================================= End Code =================================================================

			// ================================================================= Graduate Portfolio Button Action =================================================================

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
					port_image:downloadURL,
					port_show_status:"checked"
				};

				firebase.database().ref('website/student').child('graduate').child('portfolio').push().set(data).then(function(){
				 console.log("Graduate portfolio Saved:");
				});

				// txt = "";
        //
				// $('#GraduatePortfolioName').val("");
				// $('#GraduatePortfolioDetail').val("");
				// $('#GraduatePortfolioGroup').val("");
				// $("#GraduatePortfolioHallOfFame").prop('checked', false);
				// $('#GraduatePortfolioYear').val("");
				// $('#GraduatePortfolioPicture').val("");
				// document.getElementById("GraduateDemo").innerHTML = txt;
			});
		});
		// ================================================================= End Code =================================================================

		// ================================================================= Cancel Graduate Portfolio Script =================================================================

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

		// ================================================================= End Code =================================================================
		// ================================================================= Graduate Activity Upload Script =================================================================
		document.getElementById("GraduateActivityImage").addEventListener('change', function(p){
		  document.getElementById("GraduateActivityVideo").addEventListener('change', function(v){

		    $('#btSubmitGraduateActivity').on('click',function(){

		      var data = {
		      activity_name:$('#GraduateActivityName').val(),
		      activity_detail:$('#GraduateActivityDetail').val(),
		      // activity_image:"-",
		      // activity_video:"-",
		      activity_start:$('#GraduateActivityDateFrom').val(),
		      activity_end:$('#GraduateActivityDateTo').val(),
		      activity_show_status:"checked"

		    };
		    NameGraduateAct = $("#GraduateActivityName").val();

		    firebase.database().ref('website/student/graduate').child('activity').child(NameGraduateAct).set(data).then(function(){
		     console.log("Graduate Activity Saved:");
		    });


		    for (var i = 0; i < p.target.files.length; i++) {
		        var imageFile = p.target.files[i];
		        uploadImageAsPromise(imageFile);
		    }

		    for (var i = 0; i < v.target.files.length; i++) {
		        var videoFile = v.target.files[i];

		        uploadVideoAsPromise(videoFile);
		    }
		//Handle waiting to upload each file using promise
		function uploadImageAsPromise (imageFile) {
		    return new Promise(function (resolve, reject) {

		        var storageImagesRef = firebase.storage().ref("/Activity/Graduate/Image/"+NameGraduateAct+"/"+imageFile.name);
		        // var storageRef = firebase.storage().ref("/Activity/"+imageFile.name);

		        var ImagesTask = storageImagesRef.put(imageFile);

		        ImagesTask.on('state_changed',function(snapshot){

		        },function(error){

		        },function(){

		          var downloadImageURL = ImagesTask.snapshot.downloadURL;
		          // alert(NameGraduateAct);

		        //   qActImage = {
		        //     activity_image:GraduateActivityImage
		        // };
		        // firebase.database().ref('website/student').child('graduate').child('activity').child('image').push().set(downloadImageURL);
		        firebase.database().ref('website/student/graduate').child('activity').child(NameGraduateAct).child('activity_image').push().child('images').set(downloadImageURL).then(function(){
		         console.log("Graduate Activity Images Saved:");
		        });
		    });
		});

		}
		function uploadVideoAsPromise (videoFile) {
		      return new Promise(function (resolve, reject) {
		          // var storageRef = firebase.storage().ref("/Activity/Graduate/Image/"+imageFile.name);
		          var storageVideosRef = firebase.storage().ref("/Activity/Graduate/Video/"+NameGraduateAct+"/"+videoFile.name);

		          var VideosTask = storageVideosRef.put(videoFile);

		          VideosTask.on('state_changed',function(snapshot){

		          },function(error){

		          },function(){
		            var downloadVideoURL = VideosTask.snapshot.downloadURL;

		            // GraduateActivityVideo.push(downloadVideoURL);
		          //
		          //   qActVideo = {
		          //     activity_video:GraduateActivityVideo
		          // };
		          firebase.database().ref('website/student/graduate').child('activity').child(NameGraduateAct).child('activity_video').push().child('videos').set(downloadVideoURL).then(function(){
		           console.log("Graduate Activity Video Saved:");
		          });
		      });
		  });
		}

		$('#addGraduateActivity').modal('hide');

		// $('#GraduateActivityName').val("");
		// $('#GraduateActivityDetail').val("");
		$('#GraduateActivityImage').val("");
		$('#GraduateActivityVideo').val("");
		// $('#GraduateActivityDateFrom').val("");
		// $('#GraduateActivityDateTo').val("");
		});
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
