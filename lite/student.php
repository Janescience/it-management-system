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
                        <h3 class="text-themecolor">Main</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Student</li>

                        </ol>
                    </div>
                </div>



            <!-- Start Page Content  -->

              <div class="row">
                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                    <i class="fa fa-trophy fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ผลงานนักศึกษา</h4>

                                <h6 class="card-subtitle">ระดับปริญญาตรี</h6>

                                <form action="/action_page.php">

                                <button type="button" id="btAddBechelorPortfolio" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                    <i class="fa fa-camera-retro fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ภาพกิจกรรมนักศึกษา</h4>


                                <h6 class="card-subtitle">ระดับปริญญาตรี</h6>

                                <form action="/action_page.php">

                                <button type="submit" id="btAddBechelorActivity" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

              </div>

              <div class="row">
                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                    <i class="fa fa-trophy fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ผลงานนักศึกษา</h4>

                                <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6>

                                <form action="/action_page.php">

                                <button type="submit" id="btAddGraduatePortfolio" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                    <i class="fa fa-camera-retro fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ภาพกิจกรรมบันฑิตศึกษา</h4>


                                <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6>

                                <form action="/action_page.php">

                                <button type="submit" id="btAddGraduateActivity" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

              </div>





                    </div>



                  </div>



            </div>
          </div>

<!-- <================================================================== All Add Modal ==================================================================> -->

          <!-- Add Bechelor Portfolio Modal -->
    <div class="modal fade" id="addBechelorPortfolio" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">ผลงานนักศึกษา</h4>
            <h6 class="card-subtitle">ระดับปริญญาตรี</h6>
          </div>
            <br>
         <!-- Column -->
    <div class="col-md-12">
      <div class="card">
        <div class="card-block">

          <form class="form-horizontal form-material">

            <div class="form-group">
              <label class="col-md-12">ปีการศึกษา</label>
                <div class="col-md-12">
                    <input id="BechelorPortfolioYear" type="text"  class="form-control form-control-line">
                </div>
            </div>

            <div class="form-group">
              <label  class="col-md-12">กลุ่มผลงาน</label>
                <div class="col-md-12">
                  <select id="BechelorPortfolioGroup" class="form-control form-control-line">
                      <option>การประกวดทั่วไป</option>
                      <option>การออกแบบเว็บไซต์(Website)</option>
                      <option>แอนิเมชั่น(Animation)</option>
                      <option>หนังสืออิเล็กทรอนิกส์(E-Book)</option>
                      <option>ภาพยนตร์สั้น</option>
                      <option>เรื่องสั้น</option>
                      <option>การอบรม</option>
                      <option>อื่นๆ</option>
                  </select>                </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">ชื่อผลงาน</label>
                <div class="col-md-12">
                  <input id="BechelorPortfolioName" type="text"  class="form-control form-control-line">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-12">ลิ้งค์</label>
                <div class="col-md-12">
                  <input id="BechelorPortfolioURL" type="text"  class="form-control form-control-line">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-12 text-center">
                    <button id="btSubmitBechelorPortfolio" class="btn btn-success"><i class="fa fa-check"></i>   Submit</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-times"></i>   Close</button>
                </div>
            </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Modal Bechelor Student Activity -->
    <div class="modal fade" id="addBechelorActivity" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">อัพโหลดรูปภาพ</h4>
            <h6 class="card-subtitle">ระดับปริญญาตรี</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadBechelorImageActivity">

            <h5 class="modal-title" >รายละเอียด</h5>
            <textarea class="form-control" rows="5" id="BechelorImageDetail" disabled="true"></textarea>
            <!-- <h5 class="modal-title" >Details</h5>
            <input class="form-control" type="text"   id="textDetail" disabled="true"> -->
          </div>
          <div class="modal-footer">
            <button id="btUploadBechelorImageActivity" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            <button id="btClearTextFile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

      <!-- Add Graduate Portfolio Modal -->
      <div class="modal fade" id="addGraduatePortfolio" role="dialog" aria-labelledby="Message" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="messageModalLabel">ผลงานนักศึกษา</h4>
              <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6>
            </div>
            <br>
            <!-- Column -->
            <div class="col-md-12">
              <div class="card">
                <div class="card-block">

                  <form class="form-horizontal form-material">

                    <div class="form-group">
                      <label class="col-md-12">ปีการศึกษา</label>
                      <div class="col-md-12">
                        <input id="GraduatePortfolioYear" type="text"  class="form-control form-control-line">
                      </div>
                    </div>

                    <div class="form-group">
                      <label  class="col-md-12">กลุ่มผลงาน</label>
                      <div class="col-md-12">
                        <select id="GraduatePortfolioGroup" class="form-control form-control-line">
                          <option>การประกวดทั่วไป</option>
                          <option>การออกแบบเว็บไซต์(Website)</option>
                          <option>แอนิเมชั่น(Animation)</option>
                          <option>หนังสืออิเล็กทรอนิกส์(E-Book)</option>
                          <option>ภาพยนตร์สั้น</option>
                          <option>เรื่องสั้น</option>
                          <option>การอบรม</option>
                          <option>อื่นๆ</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-md-12">ชื่อผลงาน</label>
                      <div class="col-md-12">
                        <input id="GraduatePortfolioName" type="text"  class="form-control form-control-line">
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-md-12">ลิ้งค์</label>
                      <div class="col-md-12">
                        <input id="GraduatePortfolioURL" type="text"  class="form-control form-control-line">
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-sm-12 text-center">
                        <button id="btSubmitGraduatePortfolio" class="btn btn-success"><i class="fa fa-check"></i>   Submit</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i>   Close</button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Modal Graduate Student Activity -->
    <div class="modal fade" id="addGraduateActivity" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">อัพโหลดรูปภาพ</h4>
            <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadGraduateImageActivity">

            <h5 class="modal-title" >รายละเอียด</h5>
            <textarea class="form-control" rows="5" id="GraduateImageDetail" disabled="true"></textarea>
            <!-- <h5 class="modal-title" >Details</h5>
            <input class="form-control" type="text"   id="textDetail" disabled="true"> -->
          </div>
          <div class="modal-footer">
            <button id="btUploadGraduateImageActivity" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            <button id="btClearTextFile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>







      </div>
            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>



    <?php include('import-javascript.php')?>
    <script src="../js/student.js"></script>

</body>

</html>
