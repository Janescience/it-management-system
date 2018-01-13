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
<!--=========================== ส่วนหัว [รูปภาพสไลด์] ===========================-->
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

                        <img id="imageHeaderSlideFirst" src="../assets/images/big/image.png" class="mySlides"  style="width:100%">
                        <img class="mySlides" id="imageHeaderSlideSecond" src="../assets/images/big/image.png"  style="width:100%">

                        <button class="btn btn-inverse w3-display-left" onclick="plusDivs(-1,-1,-1)">&#10094;</button>
                        <button class="btn btn-inverse w3-display-right" onclick="plusDivs(1,1,1)">&#10095;</button>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

<!--======================================================================-->

<!--=========================== หลักสูตรที่เปิดสอน ===========================-->
            <div class="card">
              <div class="card-block ">
                <h4 class="text-black card-title">Course offers</h4>
                  <div class="message-box contact-box">
                    <h2 class="add-ct-btn">
                      <button type="button" id="btEditCourse" class="btn btn-circle btn-lg btn-success waves-effect waves-dark"><i class="mdi mdi-pencil"></i></button>
                    </h2>
                  </div>
              </div>

              <hr>

              <div class="card-block">
                <div class="row">

                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                      <img  id="imageBachelor" src="../assets/images/big/image.png" style="width:100%">
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                        <img  id="imageMaster" src="../assets/images/big/image.png" style="width:100%">
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                        <img  id="imageDoctor" src="../assets/images/big/image.png" style="width:100%">
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
<!--=====================================================================-->

<!--============================ ข่าวสาร =================================-->
            <div class="card">
              <div class="card-header">
                <h4 class="text-black card-title">Info</h4>
              </div>

              <hr>

              <div class="card-block">
                <div class="row">

                  <div class="col-lg-5">
                    <div class="card text-center">
                      <div class="card-block">
                        <img id="imgInfo" src="../assets/images/big/image.png" style="width:100%"><hr>

                        <input class="btn btn-outline-inverse col-md-12"  type="file" id="fileUploadImageInfo"><hr>

                        <button type="submit" class="btn btn-outline-success" id="btInfoUploadImg">Upload <i class="fa fa-upload"></i></button>
                        <button type="reset" class="btn btn-outline-danger" id="btInfoCancelUploadImg">Cancel <i class="fa fa-close"></i></button>
                        <button id="btLoadingInfo" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-7">
                    <div class="card ">
                      <div class="card-block ">

                        <div class="form-group">
                          <select id="selectInfoLevel" class="form-control ">
                            <option>ข่าวสารระดับปริญญาตรี</option>
                            <option>ข่าวสารระดับบัณฑิตศึกษา</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <select id="selectLevel" class="form-control ">
                            <option>ข่าวสารเรื่องแรก</option>
                            <option>ข่าวสารเรื่องที่สอง</option>
                            <option>ข่าวสารเรื่องที่สาม</option>
                          </select>
                        </div>

                        <hr>

                        <h5 class="modal-title" >Topic</h5>
                          <textarea class="form-control" rows="2" id="textTopicInfo" disabled="true"></textarea>

                        <h5 class="modal-title" >Link URL</h5>
                          <input class="form-control" type="text"   id="textLinkInfo" disabled="true">

                        <div class="m-t-15">
                          <button type="button" id="btInfoEdit"  class="btn btn-outline-inverse">Edit <i class="fa fa-edit"></i></button>
                          <button type="submit" class="btn btn-outline-success" id="btInfoSave">Submit <i class="fa fa-save"></i></button>
                          <button type="reset" class="btn btn-outline-danger" id="btInfoCancel">Cancel <i class="fa fa-close"></i></button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<!--=====================================================================-->
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

        <!-- Modal -->
      <div class="modal fade" id="editCourseModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="messageModalLabel">จัดการหลักสูตรที่เปิดสอน</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                  <div class="col-sm-12">
                      <select id="selectCourse" class="form-control ">
                          <option>ระดับปริญญาตรี</option>
                          <option>ระดับปริญญาโท</option>
                          <option>ระดับปริญญาเอก</option>
                      </select>
                  </div>
              </div>
                    <hr>
              <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadImageCourse">
            </div>
            <div class="modal-footer">
              <button id="btLoadingCourse" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
              <button id="btUploadImageCourse" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
              <button id="btClearTextFileCourse" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
              <button id="btCloseCourse" class="btn btn-danger" data-dismiss="modal">Close</button>
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
