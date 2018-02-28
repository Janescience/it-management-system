<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <?php  include('header.php') ?>
    <link href="../assets/plugins/css-chart/css-chart.css" rel="stylesheet">
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
                  <h3 class="text-themecolor m-b-0 m-t-0">สถิติการเข้าชมเว็บไซต์สาขา</h3>
                    </div>

                </div>


                <div class="row">
                    <div class="col-md-12">
                      <div class="card">
                        <div class="card-block">
                          <h3><i class="mdi mdi-chart-arc"></i> เดือน<b id="txtMonth">ปัจจุบัน</b>  มีการเข้าชมเว็บไซต์ทั้งหมด : <b><label id="sumView"></label></b> ครั้ง
                            <button id="btSearchStatistic" class="btn waves-effect waves-light btn-warning"><i class="fa fa-search"></i> ค้นหา</button>

                                                            <select hidden id="staticticYear"  class="form-control col-lg-2"><option> ปี </option></select>
                                                            <span class="hidden-sm-up"><br><br></span>
                                                            <select hidden id="staticticMonth"  class="form-control col-lg-2"><option> เดือน (กรุณาเลือกปี) </option></select>
                            <button hidden id="btCancelSearchStatistic" type="button" class="btn btn-danger"> <i class="mdi mdi-close"></i></button>


                            </h3>



                            <!-- Column -->
                              <div class="row">
                            <div class="col-md-6 col-lg-3">
                                <div class="card card-body">
                                  <div class="card-block">
                                    <!-- Row -->
                                    <div class="row">
                                        <!-- Column -->
                                        <div class="col p-r-0 align-self-center">
                                            <h2 id="indexView" class="font-light m-b-0"></h2>
                                            <h5 class="text-muted"><i class="mdi mdi-airplay"></i>  หน้าหลัก</h5></div>
                                        <!-- Column -->
                                        <div class="col text-right align-self-center">
                                            <div id="indexPercent" ></div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <!-- Column -->
                            <div class="col-md-6 col-lg-3">
                                <div class="card card-body">
                                  <div class="card-block">

                                    <!-- Row -->
                                    <div class="row">
                                        <!-- Column -->
                                        <div class="col p-r-0 align-self-center">
                                            <h2 id="activityView"class="font-light m-b-0"></h2>
                                            <h5 class="text-muted"><i class="mdi mdi-camera"></i> กิจกรรม</h5></div>
                                        <!-- Column -->
                                        <div class="col text-right align-self-center">
                                            <div id="activityPercent"></div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <!-- Column -->
                            <div class="col-md-6 col-lg-6">
                                <div class="card card-body">
                                  <div class="card-block">

                                    <!-- Row -->
                                    <div class="row">
                                        <!-- Column -->
                                        <div class="col p-r-0 align-self-center">
                                            <h2 id="personalView" class="font-light m-b-0"></h2>
                                            <h5 class="text-muted"><i class="mdi mdi-account-multiple"></i> คณาจารย์และบุคลากร</h5></div>
                                        <!-- Column -->
                                        <div class="col text-right align-self-center">
                                            <div id="personalPercent"></div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                            <!-- Column -->
                              <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <div class="card">
                                  <div class="card-block">

                                    <!-- Row -->
                                    <div class="row">
                                        <!-- Column -->
                                        <div class="col p-r-0 align-self-center">
                                            <h2 id="courseBachelorView" class="font-light m-b-0"></h2>
                                            <h6 class="text-muted"><i class="mdi mdi-book-open-page-variant"></i> หลักสูตร</h6>
                                          <h5 class="text-muted">ปริญญาตรี</h5></div>
                                        <!-- Column -->
                                        <div class="col text-right align-self-center">
                                            <div id="courseBachelorPercent" ></div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <!-- Column -->

                            <div class="col-md-6 col-lg-4">
                                <div class="card card-body">
                                  <div class="card-block">

                                    <!-- Row -->
                                    <div class="row">
                                        <!-- Column -->
                                        <div class="col p-r-0 align-self-center">
                                            <h2 id="courseMasterView" class="font-light m-b-0"></h2>
                                            <h6 class="text-muted"><i class="mdi mdi-book-open-page-variant"></i> หลักสูตร</h6>
                                          <h5 class="text-muted">ปริญญาโท</h5></div>
                                        <!-- Column -->
                                        <div class="col text-right ">
                                            <div id="courseMasterPercent"></div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <!-- Column -->
                            <div class="col-md-6 col-lg-4">
                                <div class="card card-body">
                                  <div class="card-block">

                                    <!-- Row -->
                                    <div class="row">
                                        <!-- Column -->
                                        <div class="col p-r-0 align-self-center">
                                            <h2 id="courseDoctorView" class="font-light m-b-0"></h2>
                                            <h6 class="text-muted"><i class="mdi mdi-book-open-page-variant"></i> หลักสูตร</h6>
                                          <h5 class="text-muted">ปริญญาเอก</h5></div>
                                        <!-- Column -->
                                        <div class="col text-right align-self-center">
                                            <div id="courseDoctorPercent"></div>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>



                        <div class="row">

                    <!-- Column -->

                    <div class="col-md-6 col-lg-6">
                        <div class="card card-body">
                          <div class="card-block">

                            <!-- Row -->
                            <div class="row">
                                <!-- Column -->
                                <div class="col p-r-0 align-self-center">
                                    <h2 id="portfolioBachelorView" class="font-light m-b-0"></h2>
                                    <h6 class="text-muted"><i class="mdi mdi-trophy"></i> ผลงานนักศึกษา</h6>
                                  <h5 class="text-muted"> ปริญญาตรี</h5></div>
                                <!-- Column -->
                                <div class="col text-right align-self-center">
                                    <div id="portfolioBachelorPercent"></div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <div class="col-md-6 col-lg-6">
                        <div class="card card-body">
                          <div class="card-block">

                            <!-- Row -->
                            <div class="row">
                                <!-- Column -->
                                <div class="col p-r-0 align-self-center">
                                    <h2 id="portfolioGraduateView" class="font-light m-b-0"></h2>
                                    <h6 class="text-muted"><i class="mdi mdi-trophy"></i> ผลงานนักศึกษา</h6>
                                    <h5 class="text-muted"> บัณฑิตศึกษา</h5></div>
                                <!-- Column -->
                                <div class="col text-right ">
                                    <div id="portfolioGraduatePercent"></div>
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

<footer class="footer text-center"><h6>Copyright © Information Technology 2017</h6></footer>
        </div>
    </div>

    <?php include('import-javascript.php')?>
    <script src="../js/statistic.js"></script>

</body>

</html>
