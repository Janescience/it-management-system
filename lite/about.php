<!DOCTYPE html>
<html lang="en">

<head >
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" type="text/css" href="css/animate.css">



     <?php  include('header.php') ?>

</head>

<body class="fix-header fix-sidebar card-no-border">

    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
    </div>

    <div id="main-wrapper">

      <?php  include('navbar.php') ?>

        <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 col-8 align-self-center">
                        <h3 class="text-themecolor">About</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">About</li>
                        </ol>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <div class="card-block">
                            <h1 class="w3-animate-right">About faculty</h1>
                            <h4>Philosophy and Purpose</h4>
                                <hr/><br/>
                            <div class="col-xs-12">
                                <h5 align="center">Bachelor degree</h5><br/>
                                <div class="form-group" id="BachelorPhilosophy">
                                  <label for="comment" id="BachelorPhilosophyLB"><u>Philosophy</u></label>
                                  <textarea class="form-control" rows="5" id="BachelorPhilosophyText"></textarea>
                                   <input type="submit" class="btn btn-success " value="Submit Button" id="BachelorPhilosophySave">
                                   <input type="reset" class="btn btn-danger  " value="Cancel" id="BachelorPhilosophyCancel">
                                </div>
                                <div class="form-group" id="BachelorPurpose">
                                  <label for="comment" id="BachelorPurposeLB"><u>Purpose</u></label>
                                  <textarea class="form-control" rows="5" id="BachelorPurposeText"></textarea>
                                  <input type="submit" class="btn btn-success " value="Submit Button" id="BachelorPurposeSave">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="BachelorPurposeCancel">
                                </div><br/>

                                <h5 align="center">Master degree and Doctorate degree</h5><br/>
                                <div class="form-group" id="MasterPhilosophy">
                                  <label for="comment" id="MasterPhilosophyLB"><u>Philosophy</u></label>
                                  <textarea class="form-control" rows="5" id="MasterPhilosophyText"></textarea>
                                  <input type="submit" class="btn btn-success " value="Submit Button" id="MasterPhilosophySave">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="MasterPhilosophyCancel">
                                </div>

                                <div class="form-group" id="MasterPurpose">
                                  <label for="comment" id="MasterPurposeLB"><u>Purpose</u></label>
                                  <textarea class="form-control" rows="5" id="MasterPurposeText"></textarea>
                                  <input type="submit" class="btn btn-success " value="Submit Button" id="MasterPurposeSave">
                                  <input type="reset" class="btn btn-danger  " value="Cancel"id="MasterPurposeCancel">
                                </div>
                            </div>
                          </div>
                      </div>
                </div>
            </div>
          </div>
      </div>
            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>
    <?php include('import-javascript.php')?>
    <script>

      var slideIndex = 1;

      showDivs(slideIndex);

      function plusDivs(n) {
        showDivs(slideIndex += n);
      }

      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
      }

    </script>
</body>

</html>
