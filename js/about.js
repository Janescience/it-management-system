$(document).ready(function(){

// Bechelor Philosophy
  document.getElementById("BachelorPhilosophyText").disabled = true;
  $('#BachelorPhilosophySave').hide();
  $('#BachelorPhilosophyCancel').hide();


  var dbRef = firebase.database();


  var db = dbRef.ref('website/about').child('bachelor').child('philosophy');
  db.on('value',snap => {
    $('#BachelorPhilosophyText').val(snap.val());
  });

  $('#BachelorPhilosophyEdit').on('click',function(){
    EditBachelorPhilosophy();
  });

  function EditBachelorPhilosophy() {
      document.getElementById("BachelorPhilosophyText").disabled = false;
      $('#BachelorPhilosophySave').show();
      $('#BachelorPhilosophyCancel').show();

    }


  $('#BachelorPhilosophySave').on('click',function(){
    SaveBachelorPhilosophy();
  });

  function SaveBachelorPhilosophy(){

    var data = {


   bachelor :{
     philosophy:$('#BachelorPhilosophyText').val(),
     purpose:$('#BachelorPurposeText').val()
   }
  };
  firebase.database().ref('website').child('about').update(data);

  $('#BachelorPhilosophySave').hide();
  $('#BachelorPhilosophyCancel').hide();
  document.getElementById("BachelorPhilosophyText").disabled = true;

  }



  $('#BachelorPhilosophyCancel').on('click',function(){
    CancelEditBachelorPhilosophy();
  });

    function CancelEditBachelorPhilosophy() {
        document.getElementById("BachelorPhilosophyText").disabled = true;
        $('#BachelorPhilosophySave').hide();
        $('#BachelorPhilosophyCancel').hide();
        document.getElementById("BachelorPhilosophyText").disabled = true;


      }

      // Bechelor Purpose
      document.getElementById("BachelorPurposeText").disabled = true;
      $('#BachelorPurposeSave').hide();
      $('#BachelorPurposeCancel').hide();


      var dbRef = firebase.database();


      var db = dbRef.ref('website/about').child('bachelor').child('purpose');
      db.on('value',snap => {
        $('#BachelorPurposeText').val(snap.val());
      });

      $('#BachelorPurposeEdit').on('click',function(){
        EditBachelorPurpose();
      });

      function EditBachelorPurpose() {
          document.getElementById("BachelorPurposeText").disabled = false;
          $('#BachelorPurposeSave').show();
          $('#BachelorPurposeCancel').show();

        }


      $('#BachelorPurposeSave').on('click',function(){
        SaveBachelorPurpose();
      });

      function SaveBachelorPurpose(){

        var data = {


       bachelor :{
         philosophy:$('#BachelorPhilosophyText').val(),
         purpose:$('#BachelorPurposeText').val()
       }
      };
      firebase.database().ref('website').child('about').update(data);

      $('#BachelorPurposeSave').hide();
      $('#BachelorPurposeCancel').hide();
      document.getElementById("BachelorPurposeText").disabled = true;

      }



      $('#BachelorPurposeCancel').on('click',function(){
        CancelEditBachelorPurpose();
      });

        function CancelEditBachelorPurpose() {
            document.getElementById("BachelorPurposeText").disabled = true;
            $('#BachelorPurposeSave').hide();
            $('#BachelorPurposeCancel').hide();
            document.getElementById("BachelorPurposeText").disabled = true;


          }

          // Master Philosophy
            document.getElementById("MasterPhilosophyText").disabled = true;
            $('#MasterPhilosophySave').hide();
            $('#MasterPhilosophyCancel').hide();


            var dbRef = firebase.database();


            var db = dbRef.ref('website/about').child('master').child('philosophy');
            db.on('value',snap => {
              $('#MasterPhilosophyText').val(snap.val());
            });

            $('#MasterPhilosophyEdit').on('click',function(){
              EditMasterPhilosophy();
            });

            function EditMasterPhilosophy() {
                document.getElementById("MasterPhilosophyText").disabled = false;
                $('#MasterPhilosophySave').show();
                $('#MasterPhilosophyCancel').show();

              }


            $('#MasterPhilosophySave').on('click',function(){
              SaveMasterPhilosophy();
            });

            function SaveMasterPhilosophy(){

              var data = {


             master :{
               philosophy:$('#MasterPhilosophyText').val(),
               purpose:$('#MasterPurposeText').val()
             }
            };
            firebase.database().ref('website').child('about').update(data);

            $('#MasterPhilosophySave').hide();
            $('#MasterPhilosophyCancel').hide();
            document.getElementById("MasterPhilosophyText").disabled = true;

            }



            $('#MasterPhilosophyCancel').on('click',function(){
              CancelEditMasterPhilosophy();
            });

              function CancelEditMasterPhilosophy() {
                  document.getElementById("MasterPhilosophyText").disabled = true;
                  $('#MasterPhilosophySave').hide();
                  $('#MasterPhilosophyCancel').hide();
                  document.getElementById("MasterPhilosophyText").disabled = true;

                }

                // Master Purpose
                  document.getElementById("MasterPurposeText").disabled = true;
                  $('#MasterPurposeSave').hide();
                  $('#MasterPurposeCancel').hide();


                  var dbRef = firebase.database();


                  var db = dbRef.ref('website/about').child('master').child('purpose');
                  db.on('value',snap => {
                    $('#MasterPurposeText').val(snap.val());
                  });

                  $('#MasterPurposeEdit').on('click',function(){
                    EditMasterPurpose();
                  });

                  function EditMasterPurpose() {
                      document.getElementById("MasterPurposeText").disabled = false;
                      $('#MasterPurposeSave').show();
                      $('#MasterPurposeCancel').show();

                    }


                  $('#MasterPurposeSave').on('click',function(){
                    SaveMasterPurpose();
                  });

                  function SaveMasterPurpose(){

                    var data = {


                   master :{
                     philosophy:$('#MasterPhilosophyText').val(),
                     purpose:$('#MasterPurposeText').val()
                   }
                  };
                  firebase.database().ref('website').child('about').update(data);

                  $('#MasterPurposeSave').hide();
                  $('#MasterPurposeCancel').hide();
                  document.getElementById("MasterPurposeText").disabled = true;

                  }



                  $('#MasterPurposeCancel').on('click',function(){
                    CancelEditMasterPurpose();
                  });

                    function CancelEditMasterPurpose() {
                        $('#MasterPurposeSave').hide();
                        $('#MasterPurposeCancel').hide();
                        document.getElementById("MasterPurposeText").disabled = true;

                      }
                    
});
