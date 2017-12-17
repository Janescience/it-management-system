<!DOCTYPE html>
<html lang="en">

<head >
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

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
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)"><h4>Main</h4></a></li>
                            <li class="breadcrumb-item active">Home</li>
                        </ol>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card ">
                          <div class="card-block ">
                            <h4 class="text-black card-title">Header</h4>
                            <div class="message-box contact-box">
                            <h2 class="add-ct-btn">
                              <button type="button" id="btEditHeader" class="btn btn-circle btn-lg btn-success waves-effect waves-dark"><i class="mdi mdi-pencil"></i></button>
                            </h2>
                          </div>

                        </div>
                        <hr>
                            <div class="card-block ">
                            <div class="card text-center">
                              <div class="card-block">

                                <div class="w3-content w3-display-container ">

                                    <div class="centered mySlideText" id="showTopicFirst"></div>
                                    <div class="brcentered mySlideDetail" id="showDetailFirst"></div>
                                    <div class="centered mySlideText" id="showTopicSecond"></div>
                                    <div class="brcentered mySlideDetail" id="showDetailSecond"></div>

                                  <img id="imageHeaderSlideFirst" class="mySlides"  style="width:100%">
                                  <img class="mySlides" id="imageHeaderSlideSecond" style="width:100%">
                                  <button class="btn btn-inverse w3-display-left" onclick="plusDivs(-1,-1,-1)">&#10094;</button>
                                  <button class="btn btn-inverse w3-display-right" onclick="plusDivs(1,1,1)">&#10095;</button>
                                </div>
                              </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>


            <div class="card">
              <div class="card-header ">
                <h4 class="m-b-0 text-black card-title">Course offered</h4>

              </div>
              <hr>
              <div class="card-block">

                <div class="row">
                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                      <img  src="../assets/images/big/bachelor.jpg" style="width:100%">
                      </div>
                      <div class="card-block ">
                        <button id="btUploadBachelor" type="button" class="btn btn-outline-success btn-rounded"><i class="mdi mdi-folder-image"></i> Upload</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                        <img  src="../assets/images/big/master.jpg" style="width:100%">
                      </div>
                      <div class="card-block ">
                        <button id="btUploadMaster" type="button" class="btn btn-outline-success btn-rounded"><i class="mdi mdi-folder-image"></i> Upload</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                        <img  src="../assets/images/big/phd.jpg" style="width:100%">
                      </div>
                      <div class="card-block ">
                        <button id="btUploadPhd" type="button" class="btn btn-outline-success btn-rounded"><i class="mdi mdi-folder-image"></i> Upload</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h4 class="text-black card-title">Info</h4>

              </div>
              <hr>
              <div class="card-block">

                <div class="row">
                  <div class="col-lg-6">
                    <div class="card text-center">
                      <div class="card-block ">
                        <div class="btn-group">
                                            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Bachelor Info
                                            </button>
                                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                                              <a class="dropdown-item" href="#">First Bachelor Info.</a>
                                              <a class="dropdown-item" href="#">Second Bachelor Info.</a>
                                              <a class="dropdown-item" href="#">Third Bachelor Info.</a>
                                            </div>
                                        </div>
                                        <div class="form-group m-b-40">
                                          <br><label for="input1">Topic</label>
                                        <input type="text" class="form-control" id="input1">
                                        <span class="bar"></span>

                                    </div>
                                    <div class="form-group m-b-40">
                                      <label for="input1">Link URL</label>
                                    <input type="text" class="form-control" id="input1">
                                    <span class="bar"></span>

                                </div>
                                <div class="col-lg-12 text-center">
                                  <div class="card text-center">
                                    <div class="card-block ">
                                      <img  src="../assets/images/big/info-1.jpg" style="width:100%">
                                    </div>
                                    <div class="card-block ">
                                      <button id="btUploadPhd" type="button" class="btn btn-outline-success btn-rounded"><i class="mdi mdi-folder-image"></i> Upload</button>
                                    </div>
                                  </div>
                                </div>




                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card text-center">
                      <div class="card-block ">
                        <div class="btn-group">
                                            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Graduate Studies
                                            </button>
                                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(0px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                <a class="dropdown-item" href="#">First Graduate Studies Info.</a>
                                                <a class="dropdown-item" href="#">Second Graduate Studies Info.</a>
                                                <a class="dropdown-item" href="#">Third Graduate Studies Info.</a>
                                            </div>
                                        </div>
                                        <div class="form-group m-b-40">
                                          <br><label for="input1">Topic</label>
                                        <input type="text" class="form-control" id="input1">
                                        <span class="bar"></span>

                                    </div>
                                    <div class="form-group m-b-40">
                                      <label for="input1">Link URL</label>
                                    <input type="text" class="form-control" id="input1">
                                    <span class="bar"></span>

                                </div>
                                <div class="col-lg-12">
                                  <div class="card text-center">
                                    <div class="card-block ">
                                      <img  src="../assets/images/big/info-2.jpg" style="width:100%">
                                    </div>
                                    <div class="card-block ">
                                      <button id="btUploadPhd" type="button" class="btn btn-outline-success btn-rounded"><i class="mdi mdi-folder-image"></i> Upload</button>
                                    </div>
                                  </div>
                                </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="editHeaderModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="messageModalLabel">Manage Header</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                  <div class="col-sm-12">
                      <select id="selectHeaderSlide" class="form-control ">
                          <option>Header Slide First</option>
                          <option>Header Slide Second</option>
                      </select>
                  </div>
              </div>
                    <hr>
              <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadImageHeader">

              <h5 class="modal-title" >Topic</h5>
              <textarea class="form-control" rows="2" id="textTopic" disabled="true"></textarea>
              <h5 class="modal-title" >Details</h5>
              <input class="form-control" type="text"   id="textDetail" disabled="true">
            </div>
            <div class="modal-footer">
              <button id="btLoading" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
              <button id="btUploadImageHeader" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
              <button id="btClearTextFile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
              <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>


    <?php include('import-javascript.php')?>
    <script src="../js/index.js"></script>
    <script>

      var slideIndex = 1;
      var slideText = 1;
      var slideDetail = 1;


      showDivs(slideIndex,slideText,slideDetail);

      function plusDivs(n,m,o) {
        showDivs(slideIndex += n,slideText += m,slideDetail += o);
      }

      function showDivs(n,m,o) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var y = document.getElementsByClassName("mySlideText");
        var z = document.getElementsByClassName("mySlideDetail");

        if (o > z.length ) {slideDetail = 1}
        if (o < 1 ) {slideDetail = z.length}
        for (i = 0; i < z.length; i++) {
          z[i].style.display = "none";
        }
        z[slideDetail-1].style.display = "block";


        if (m > y.length ) {slideText = 1}
        if (m < 1 ) {slideText = y.length}
        for (i = 0; i < y.length; i++) {
          y[i].style.display = "none";
        }
        y[slideText-1].style.display = "block";

        if (n > x.length ) {slideIndex = 1}
        if (n < 1 ) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
      }

    </script>
</body>

</html>
