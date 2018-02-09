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

	var del;

	var dbRef = firebase.database();


	var usersRef = dbRef.ref("users");



	// ========================================= Get Bechelor Portfolio Type From Database =========================================

	var BechelorPortfolioGroupRef = dbRef.ref("website/student/bechelor/portfolioGroup");
	var BechelorRootRef = BechelorPortfolioGroupRef;
	// ========================================= End Code =====================================================================
	// ========================================= Get Graduate Portfolio Type From Database =========================================

	// var dbRef = firebase.database();
	var GraduatePortfolioGroupRef = dbRef.ref("website/student/graduate/portfolioGroup");
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
	// document.getElementById("BechelorDemo").innerHTML = txt;
	// ========================================= End Code =====================================================================

	// ========================================= Set initial Graduate Portfolio Modal =========================================
	txt = "";

	$('#GraduatePortfolioName').val("");
	$('#GraduatePortfolioDetail').val("");
	$('#GraduatePortfolioGroup').val("");
	$("#GraduatePortfolioHallOfFame").prop('checked', false);
	$('#GraduatePortfolioYear').val("");
	$('#GraduatePortfolioPicture').val("");
	// document.getElementById("GraduateDemo").innerHTML = txt;
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
			$('#AddBechelorPortfolioType').val()
			$('#EditBechelorPortfolioType').val("");
			$('#BechelorPortfolioName').val("");
			$('#BechelorPortfolioDetail').val("");
			$('#BechelorPortfolioGroup').val("");
			$("#BechelorPortfolioHallOfFame").prop('checked', false);
			$('#BechelorPortfolioYear').val("");
			$('#BechelorPortfolioPicture').val("");
			$('#BechelorPortfolioPictureText').val("");
			$('#BechelorPortfolioPictureView').removeAttr('src')
			// document.getElementById("BechelorDemo").innerHTML = txt;
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
				$('#AddBechelorPortfolioType').val("");
				$('#CancelAddBechelorPortfolioGroup').show();
				$('#SaveAddBechelorPortfolioGroup').show();
				$('#AddBechelorPortfolioGroup').hide();
				$('#EditBechelorPortfolioGroup').hide();
				$('#DeleteBechelorPortfolioGroup').hide();
				$('#BechelorPortfolioGroup').val("");

			});
	// ========================================= End Code =====================================================================

	// ========================================= Cancel Add Bechelor Portfolio Group =========================================

	$('#CancelAddBechelorPortfolioGroup').on('click',function(e){
		$('#AddBechelorPortfolioType').hide();
		$('#AddBechelorPortfolioType').val("");
		$('#CancelAddBechelorPortfolioGroup').hide();
		$('#SaveAddBechelorPortfolioGroup').hide();
		$('#BechelorPortfolioGroup').val("");
		$('#AddBechelorPortfolioGroup').show();
		$('#EditBechelorPortfolioGroup').show();
		$('#DeleteBechelorPortfolioGroup').show();

	});
	// ========================================= End Code =====================================================================

	// ========================================= Edit Bechelor Portfolio Group =========================================
	$('#EditBechelorPortfolioGroup').on('click',function(e){

			$('#EditBechelorPortfolioType').show();
			$('#EditBechelorPortfolioType').val("");
			$('#SaveEditBechelorPortfolioGroup').show();
			$('#CancelEditBechelorPortfolioGroup').show();
			$('#AddBechelorPortfolioGroup').hide();
			$('#EditBechelorPortfolioGroup').hide();
			$('#DeleteBechelorPortfolioGroup').hide();
			$('#BechelorPortfolioGroup').val("");

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

			BechelorRootRef.child(GroupBecId).remove().then(function(){
					$('#DeletePortTypeModal').modal('show');

					$('#BechelorPortfolioGroup').empty();

					BechelorRootRef.on("child_added",snap => {
						var Type = snap.child('port_GroupType').val();

						$('#BechelorPortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

						$('#BechelorPortfolioGroup').val("");

					});
			});
				$(this).children(":selected").remove();
		});


						page = $('#studentPage').text();
					    topic = $('#BechelorPortfolioGroup').val();
					    action = "ลบประเภทผลงาน ";
					    pushHistory();
            //
						// for(var i = 0;i< clickBtEditBecPortGroup;i++){
			      //   $('#BechelorPortfolioGroup option:last').remove();
			      // }

						function pushHistory(){
						   var nameValue;
						   var dateTimeCurrent = new Date();

						   var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
						   nameHistory.on('value',snap => {
						     nameValue = snap.val();
						   });

						   var dataHistory = {
						     id:sessionStorage.getItem("userId"),
						     name:nameValue,
						     page:page,
						     topic:topic,
						     action:action,
						     date:dateTimeCurrent.toDateString(),
						     time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
						   };

						   firebase.database().ref('history').push().set(dataHistory);

						   var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
						   var txtpage = page;

						  window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
						 }



	});

		// ========================================= End Code =====================================================================

		// ========================================= Cancel Edits Bechelor Portfolio Group =========================================

		$('#CancelEditBechelorPortfolioGroup').on('click',function(e){
			$('#EditBechelorPortfolioType').hide();
			$('#EditBechelorPortfolioType').val("");
			$('#SaveEditBechelorPortfolioGroup').hide();
			$('#CancelEditBechelorPortfolioGroup').hide();
			$('#AddBechelorPortfolioGroup').show();
			$('#EditBechelorPortfolioGroup').show();
			$('#DeleteBechelorPortfolioGroup').show();
			$('#BechelorPortfolioGroup').val("");

		});
		// ========================================= End Code =====================================================================

		// ========================================= Add Bechelor Portfolio Type =========================================
		$('#SaveAddBechelorPortfolioGroup').on('click',function(e){

				 var data = {
 			    port_GroupType:$('#AddBechelorPortfolioType').val(),
 			  };

				firebase.database().ref('website/student').child('bechelor').child('portfolioGroup').push().set(data).then(function(){
			 	 console.log("Bechelor portfolio Group Saved:");
			  });

				$('#AddBechelorPortfolioType').val("");
				$('#AddBechelorPortfolioType').hide();
				$('#CancelAddBechelorPortfolioGroup').hide();
				$('#SaveAddBechelorPortfolioGroup').hide();
				$('#AddBechelorPortfolioGroup').show();
				$('#EditBechelorPortfolioGroup').show();
				$('#DeleteBechelorPortfolioGroup').show();
				$('#AddPortTypeModal').modal('show');

				page = $('#studentPage').text();
			    topic = $('#BechelorPortfolioGroup').val();
			    action = "เพิ่มผลงาน ";
			    pushHistory();

				for(var i = 0;i< clickBtEditBecPortGroup;i++){
	        $('#BechelorPortfolioGroup option:last').remove();
	      }

				function pushHistory(){
				   var nameValue;
				   var dateTimeCurrent = new Date();

				   var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
				   nameHistory.on('value',snap => {
				     nameValue = snap.val();
				   });

				   var dataHistory = {
				     id:sessionStorage.getItem("userId"),
				     name:nameValue,
				     page:page,
				     topic:topic,
				     action:action,
				     date:dateTimeCurrent.toDateString(),
				     time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
				   };

				   firebase.database().ref('history').push().set(dataHistory);

				   var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
				   var txtpage = page;

				  window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
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
				$('#EditPortTypeModal').modal('show');


				$('#BechelorPortfolioGroup').empty();

				BechelorRootRef.on("child_added",snap => {
					var Type = snap.child('port_GroupType').val();

					$('#BechelorPortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

					$('#BechelorPortfolioGroup').val("");

				});

				page = $('#studentPage').text();
					topic = $('#BechelorPortfolioGroup').val();
					action = "แก้ไขประเภทผลงาน ";
					pushHistory();
				//
				// for(var i = 0;i< clickBtEditBecPortGroup;i++){
				//   $('#BechelorPortfolioGroup option:last').remove();
				// }

				function pushHistory(){
					 var nameValue;
					 var dateTimeCurrent = new Date();

					 var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
					 nameHistory.on('value',snap => {
						 nameValue = snap.val();
					 });

					 var dataHistory = {
						 id:sessionStorage.getItem("userId"),
						 name:nameValue,
						 page:page,
						 topic:topic,
						 action:action,
						 date:dateTimeCurrent.toDateString(),
						 time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
					 };

					 firebase.database().ref('history').push().set(dataHistory);

					 var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
					 var txtpage = page;

					window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
				 }


			});
		// ========================================= End Add Bechelor Portfolio Type =========================================

		// ========================================= Add Bechelor Activity Modal Show  =========================================

	$('#btAddBechelorActivity').on('click',function(e){
  		e.preventDefault();

			$('#BechelorActivityName').val("");
			$('#BechelorActivityDetail').val("");
			$('#BechelorActivityImage').val("");
			$('#BechelorActivityImageText').val("");
			$('#BechelorActivityVideo').val("");
			$('#BechelorActivityVideoText').val("");
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
			$('#GraduatePortfolioPictureText').val("");
			$('#GraduatePortfolioPictureView').removeAttr('src');
			// document.getElementById("GraduateDemo").innerHTML = txt;
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
				$('#AddGraduatePortfolioType').val("");
				$('#CancelAddGraduatePortfolioGroup').show();
				$('#SaveAddGraduatePortfolioGroup').show();
				$('#AddGraduatePortfolioGroup').hide();
				$('#EditGraduatePortfolioGroup').hide();
				$('#DeleteGraduatePortfolioGroup').hide();

				$('#GraduatePortfolioGroup').val("");

			});
	// ========================================= End Code =====================================================================

	// ========================================= Cancel Add Graduate Portfolio Group =========================================

	$('#CancelAddGraduatePortfolioGroup').on('click',function(e){
		$('#AddGraduatePortfolioType').hide();
		$('#AddGraduatePortfolioType').val("");
		$('#CancelAddGraduatePortfolioGroup').hide();
		$('#SaveAddGraduatePortfolioGroup').hide();
		$('#AddGraduatePortfolioGroup').show();
		$('#EditGraduatePortfolioGroup').show();
		$('#DeleteGraduatePortfolioGroup').show();

		$('#GraduatePortfolioGroup').val("");
	});
	// ========================================= End Code =====================================================================

	// ========================================= Edit Graduate Portfolio Group =========================================

	$('#EditGraduatePortfolioGroup').on('click',function(e){
			$('#EditGraduatePortfolioType').val("");
			$('#EditGraduatePortfolioType').show();
			$('#SaveEditGraduatePortfolioGroup').show();
			$('#CancelEditGraduatePortfolioGroup').show();
			$('#AddGraduatePortfolioGroup').hide();
			$('#EditGraduatePortfolioGroup').hide();
			$('#DeleteGraduatePortfolioGroup').hide();
			$('#GraduatePortfolioGroup').val("");



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
		      $('#DeletePortTypeModal').modal('show');

					$('#GraduatePortfolioGroup').empty();

					GraduateRootRef.on("child_added",snap => {
						var Type = snap.child('port_GroupType').val();

						$('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

						$('#GraduatePortfolioGroup').val("");
					});
		  });
		    $(this).children(":selected").remove();

				page = $('#studentPage').text();
					topic = $('#GraduatePortfolioGroup').val();
					action = "ลบประเภทผลงาน ";
					pushHistory();
				//
				// for(var i = 0;i< clickBtEditBecPortGroup;i++){
				//   $('#BechelorPortfolioGroup option:last').remove();
				// }

				function pushHistory(){
					 var nameValue;
					 var dateTimeCurrent = new Date();

					 var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
					 nameHistory.on('value',snap => {
						 nameValue = snap.val();
					 });

					 var dataHistory = {
						 id:sessionStorage.getItem("userId"),
						 name:nameValue,
						 page:page,
						 topic:topic,
						 action:action,
						 date:dateTimeCurrent.toDateString(),
						 time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
					 };

					 firebase.database().ref('history').push().set(dataHistory);

					 var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
					 var txtpage = page;

					window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
				 }

		});
	});
		// ========================================= End Code =====================================================================
		// ========================================= Cancel Edits Graduate Portfolio Group =========================================

		$('#CancelEditGraduatePortfolioGroup').on('click',function(e){
			$('#EditGraduatePortfolioType').hide();
			$('#EditGraduatePortfolioType').val("");
			$('#SaveEditGraduatePortfolioGroup').hide();
			$('#CancelEditGraduatePortfolioGroup').hide();
			$('#AddGraduatePortfolioGroup').show();
			$('#EditGraduatePortfolioGroup').show();
			$('#DeleteGraduatePortfolioGroup').show();

			$('#GraduatePortfolioGroup').val("");
		});
		// ========================================= End Code =====================================================================
		// ========================================= Add Graduate Activity Modal Show =========================================

	$('#btAddGraduateActivity').on('click',function(e){
  		e.preventDefault();

			$('#GraduateActivityName').val("");
			$('#GraduateActivityDetail').val("");
			$('#GraduateActivityImage').val("");
			$('#GraduateActivityImageText').val("");
			$('#GraduateActivityVideo').val("");
			$('#GraduateActivityVideoText').val("");
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

				firebase.database().ref('website/student').child('graduate').child('portfolioGroup').push().set(data).then(function(){
			 	 console.log("Graduate portfolio Group Saved:");
			  });

				$('#AddGraduatePortfolioType').val("");
				$('#AddGraduatePortfolioType').hide();
				$('#CancelAddGraduatePortfolioGroup').hide();
				$('#SaveAddGraduatePortfolioGroup').hide();
				$('#AddGraduatePortfolioGroup').show();
				$('#EditGraduatePortfolioGroup').show();
				$('#DeleteGraduatePortfolioGroup').show();
				$('#AddPortTypeModal').modal('show');


				for(var i = 0;i< clickBtEditGraPortGroup;i++){
	        $('#GraduatePortfolioGroup option:last').remove();
	      }

				page = $('#studentPage').text();
					topic = $('#BechelorPortfolioGroup').val();
					action = "เพิ่มประเภทผลงาน ";
					pushHistory();
				//
				// for(var i = 0;i< clickBtEditBecPortGroup;i++){
				//   $('#BechelorPortfolioGroup option:last').remove();
				// }

				function pushHistory(){
					 var nameValue;
					 var dateTimeCurrent = new Date();

					 var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
					 nameHistory.on('value',snap => {
						 nameValue = snap.val();
					 });

					 var dataHistory = {
						 id:sessionStorage.getItem("userId"),
						 name:nameValue,
						 page:page,
						 topic:topic,
						 action:action,
						 date:dateTimeCurrent.toDateString(),
						 time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
					 };

					 firebase.database().ref('history').push().set(dataHistory);

					 var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
					 var txtpage = page;

					window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
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
				$('#EditPortTypeModal').modal('show');


				$('#GraduatePortfolioGroup').empty();

				GraduateRootRef.on("child_added",snap => {
					var Type = snap.child('port_GroupType').val();

					$('#GraduatePortfolioGroup').append("<option id='"+snap.key+"' class='"+'txtType'+"'>"+ Type +"</option>");

					$('#GraduatePortfolioGroup').val("");
				});


				page = $('#studentPage').text();
					topic = $('#BechelorPortfolioGroup').val();
					action = "แก้ไขประเภทผลงาน ";
					pushHistory();
				//
				// for(var i = 0;i< clickBtEditBecPortGroup;i++){
				//   $('#BechelorPortfolioGroup option:last').remove();
				// }

				function pushHistory(){
					 var nameValue;
					 var dateTimeCurrent = new Date();

					 var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
					 nameHistory.on('value',snap => {
						 nameValue = snap.val();
					 });

					 var dataHistory = {
						 id:sessionStorage.getItem("userId"),
						 name:nameValue,
						 page:page,
						 topic:topic,
						 action:action,
						 date:dateTimeCurrent.toDateString(),
						 time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
					 };

					 firebase.database().ref('history').push().set(dataHistory);

					 var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
					 var txtpage = page;

					window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
				 }

			});
	// ================================================================= End Code =================================================================

	// ========================================= Bechelor Portfolio Script =========================================

	$('#BechelorPortfolioPicture').on('change',function(event){
		selectedFile = event.target.files[0];

	});
	// ================================================================= End Code =================================================================
	// <!-- <=========================================================== Bechelor Portfolio Picture ===========================================================> -->
  //
	// $('#BechelorPortfolioPicture').on('change',function(){
	// 	var x = document.getElementById("BechelorPortfolioPicture");
	// 	if ('files' in x) {
	// 			if (x.files.length == 0) {
	// 					txt = "เพิ่มไฟล์รูปภาพ";
	// 			} else {
	// 					for (var i = 0; i < x.files.length; i++) {
	// 							// txt += "<br><strong>" + (i+1) + ". file</strong><br>";
	// 							var file = x.files[i];
	// 							if ('name' in file) {
	// 									txt += "<strong> File " + (i+1)+ ". </strong>" + "name: " + file.name + "<br>";
	// 							}
	// 							if ('size' in file) {
	// 									txt += "size: " + file.size + " bytes <br>";
	// 							}
	// 					}
	// 			}
	// 	}
	// 	else {
	// 			if (x.value == "") {
	// 					txt += "เพิ่มไฟล์รูปภาพ";
	// 			} else {
	// 					txt += "The files property is not supported by your browser!";
	// 					txt  += "<br>The path of the selected file: " + x.value;
	// 			}
	// 	}
	// 	document.getElementById("BechelorDemo").innerHTML = txt;
	// 	});
		// ================================================================= End Code =================================================================

		// ================================================================= Bechelor Portfolio Button Action =================================================================

			$('#btSubmitBechelorPortfolio').on('click',function(){

			  $('#addBechelorPortfolio').modal('hide');

				var filename= selectedFile.name;
			  var storageRef = firebase.storage().ref('/Portfolio/Bechelor/' + filename);
			  var uplodadTask = storageRef.put(selectedFile);
				var Status;


				if ($("#BechelorPortfolioHallOfFame").prop("checked") == true) {
					 Status = "ผลงานดีเด่น"

				}else if ($("#BechelorPortfolioHallOfFame").prop("checked") == false)
				{
					Status = "ผลงานทั่วไป"
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
					$('#AddPortModal').modal('show');

					// document.getElementById("BechelorDemo").innerHTML = txt;
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

				page = $('#studentPage').text();
					topic = $('#BechelorPortfolioName').val();
					action = "เพิ่มผลงาน ";
					pushHistory();
				//
				// for(var i = 0;i< clickBtEditBecPortGroup;i++){
				//   $('#BechelorPortfolioGroup option:last').remove();
				// }

				function pushHistory(){
					 var nameValue;
					 var dateTimeCurrent = new Date();

					 var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
					 nameHistory.on('value',snap => {
						 nameValue = snap.val();
					 });

					 var dataHistory = {
						 id:sessionStorage.getItem("userId"),
						 name:nameValue,
						 page:page,
						 topic:topic,
						 action:action,
						 date:dateTimeCurrent.toDateString(),
						 time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
					 };

					 firebase.database().ref('history').push().set(dataHistory);

					 var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
					 var txtpage = page;

					window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
				 }

			});

			// ================================================================= End Code =================================================================
			// ================================================================= Bechelor Activity Upload Script =================================================================
			  document.getElementById("BechelorActivityImage").addEventListener('change', function(p){
			    document.getElementById("BechelorActivityVideo").addEventListener('change', function(v){

			      $('#btSubmitBechelorActivity').on('click',function(){

							if($('#BechelorActivityDateFrom').val() > $('#BechelorActivityDateTo').val()){

								alert("yaaa");
							}

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
			$('#AddActModal').modal('show');


			  // $('#BechelorActivityName').val("");
			  // $('#BechelorActivityDetail').val("");
			  $('#BechelorActivityImage').val("");
			  $('#BechelorActivityVideo').val("");
			  // $('#BechelorActivityDateFrom').val("");
			  // $('#BechelorActivityDateTo').val("");


				page = $('#studentPage').text();
					topic = $('#BechelorActivityName').val();
					action = "เพิ่มกิจกรรม ";
					pushHistory();
				//
				// for(var i = 0;i< clickBtEditBecPortGroup;i++){
				//   $('#BechelorPortfolioGroup option:last').remove();
				// }

				function pushHistory(){
					 var nameValue;
					 var dateTimeCurrent = new Date();

					 var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
					 nameHistory.on('value',snap => {
						 nameValue = snap.val();
					 });

					 var dataHistory = {
						 id:sessionStorage.getItem("userId"),
						 name:nameValue,
						 page:page,
						 topic:topic,
						 action:action,
						 date:dateTimeCurrent.toDateString(),
						 time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
					 };

					 firebase.database().ref('history').push().set(dataHistory);

					 var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
					 var txtpage = page;

					window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
				 }

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
		// $('#GraduatePortfolioPicture').on('change',function(){
		// 	var x = document.getElementById("GraduatePortfolioPicture");
		// 	var txt = "";
		// 	if ('files' in x) {
		// 			if (x.files.length == 0) {
		// 					txt = "เพิ่มไฟล์รูปภาพ";
		// 			} else {
		// 					for (var i = 0; i < x.files.length; i++) {
		// 							// txt += "<br><strong>" + (i+1) + ". file</strong><br>";
		// 							var file = x.files[i];
		// 							if ('name' in file) {
		// 									txt += "<strong> File " + (i+1)+ ". </strong>" + "name: " + file.name + "<br>";
		// 							}
		// 							if ('size' in file) {
		// 									txt += "size: " + file.size + " bytes <br>";
		// 							}
		// 					}
		// 			}
		// 	}
		// 	else {
		// 			if (x.value == "") {
		// 					txt += "เพิ่มไฟล์รูปภาพ";
		// 			} else {
		// 					txt += "The files property is not supported by your browser!";
		// 					txt  += "<br>The path of the selected file: " + x.value;
		// 			}
		// 	}
		// 	document.getElementById("GraduateDemo").innerHTML = txt;
		// 	});
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
				 Status = "ผลงานดีเด่น"

			}else if ($("#GraduatePortfolioHallOfFame").prop("checked") == false)
			{
				Status = "ผลงานทั่วไป"
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

				txt = "";

				$('#GraduatePortfolioName').val("");
				$('#GraduatePortfolioDetail').val("");
				$('#GraduatePortfolioGroup').val("");
				$("#GraduatePortfolioHallOfFame").prop('checked', false);
				$('#GraduatePortfolioYear').val("");
				$('#GraduatePortfolioPicture').val("");
				// document.getElementById("GraduateDemo").innerHTML = txt;

				$('#AddPortModal').modal('show');

			});

			page = $('#studentPage').text();
				topic = $('#GraduatePortfolioName').val();
				action = "เพิ่มผลงาน ";
				pushHistory();
			//
			// for(var i = 0;i< clickBtEditBecPortGroup;i++){
			//   $('#BechelorPortfolioGroup option:last').remove();
			// }

			function pushHistory(){
				 var nameValue;
				 var dateTimeCurrent = new Date();

				 var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
				 nameHistory.on('value',snap => {
					 nameValue = snap.val();
				 });

				 var dataHistory = {
					 id:sessionStorage.getItem("userId"),
					 name:nameValue,
					 page:page,
					 topic:topic,
					 action:action,
					 date:dateTimeCurrent.toDateString(),
					 time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
				 };

				 firebase.database().ref('history').push().set(dataHistory);

				 var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
				 var txtpage = page;

				window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
			 }
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
			// document.getElementById("GraduateDemo").innerHTML = txt;

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
		$('#AddActModal').modal('show');

		// $('#GraduateActivityName').val("");
		// $('#GraduateActivityDetail').val("");
		$('#GraduateActivityImage').val("");
		$('#GraduateActivityVideo').val("");
		// $('#GraduateActivityDateFrom').val("");
		// $('#GraduateActivityDateTo').val("");

		page = $('#studentPage').text();
			topic = $('#GraduateActivityName').val();
			action = "เพิ่มกิจกรรม ";
			pushHistory();
		//
		// for(var i = 0;i< clickBtEditBecPortGroup;i++){
		//   $('#BechelorPortfolioGroup option:last').remove();
		// }

		function pushHistory(){
			 var nameValue;
			 var dateTimeCurrent = new Date();

			 var nameHistory = usersRef.child(sessionStorage.getItem("userId")).child('name');
			 nameHistory.on('value',snap => {
				 nameValue = snap.val();
			 });

			 var dataHistory = {
				 id:sessionStorage.getItem("userId"),
				 name:nameValue,
				 page:page,
				 topic:topic,
				 action:action,
				 date:dateTimeCurrent.toDateString(),
				 time:dateTimeCurrent.getHours()+":"+dateTimeCurrent.getMinutes()
			 };

			 firebase.database().ref('history').push().set(dataHistory);

			 var message =  nameValue+" "+action+" ''"+page+"''"+" หัวข้อ/รายละเอียด "+"''"+topic+"''";
			 var txtpage = page;

			window.location.href = "notify.php?message=" + message + "&page="+ txtpage;
		 }

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
