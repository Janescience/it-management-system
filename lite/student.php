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

      <!-- Include Required Prerequisites -->
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>

      <!-- Include Date Range Picker -->
    <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />



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

<!-- <================================================================== Bechelor ==================================================================> -->


            <!-- Start Page Content  -->
      <div class="card">
        <div class="card-outline-info">
          <div class="card-header">
            <h4 class="m-b-0 text-white">ระดับปริญญาตรี</h4>
          </div>
          <div class="card-body">
              <div class="row">
                <div class="col-lg-4">
                            <div class="card" style="margin-top: 20px;margin-left: 25px;margin-bottom: 20px;">
                                <div class="card-block">
                                    <i class="fa fa-bank fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">Hall of Fame</h4>

                                <!-- <h6 class="card-subtitle">ระดับปริญญาตรี</h6> -->

                                <form action="/action_page.php">

                                <button type="button" id="btAddBechelorHall" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-4">
                            <div class="card" style="margin-top: 20px;margin-bottom: 20px;">
                                <div class="card-block">
                                    <i class="fa fa-trophy fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ผลงานนักศึกษา</h4>

                                <!-- <h6 class="card-subtitle">ระดับปริญญาตรี</h6> -->

                                <form action="/action_page.php">

                                <button type="button" id="btAddBechelorPortfolio" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-4">
                            <div class="card" style="margin-top: 20px;margin-right: 25px;margin-bottom: 20px;">
                                <div class="card-block">
                                    <i class="fa fa-camera-retro fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ภาพกิจกรรมนักศึกษา</h4>


                                <!-- <h6 class="card-subtitle">ระดับปริญญาตรี</h6> -->

                                <form action="/action_page.php">

                                <button type="submit" id="btAddBechelorActivity" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

              </div>
            </div>
          </div>
        </div>

<!-- <================================================================== Graduate ==================================================================> -->

        <div class="card">
            <div class="card-outline-info">
              <div class="card-header">
                <h4 class="m-b-0 text-white">ระดับบัณฑิตศึกษา</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-4">
                            <div class="card" style="margin-top: 20px;margin-left: 25px;margin-bottom: 20px;">
                                <div class="card-block">
                                    <i class="fa fa-bank fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">Hall of Fame</h4>

                                <!-- <h6 class="card-subtitle">ระดับปริญญาตรี</h6> -->

                                <form action="/action_page.php">

                                <button type="button" id="btAddGraduateHall" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-4">
                            <div class="card" style="margin-top: 20px;margin-bottom: 20px;">
                                <div class="card-block">
                                    <i class="fa fa-trophy fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ผลงานบัณฑิตศึกษา</h4>

                                <!-- <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6> -->

                                <form action="/action_page.php">

                                <button type="submit" id="btAddGraduatePortfolio" class="btn btn-success waves-effect waves-light m-r-10"><i class="fa fa-plus"></i>  Add</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-4">
                            <div class="card" style="margin-top: 20px;margin-right: 25px;margin-bottom: 20px;">
                                <div class="card-block">
                                    <i class="fa fa-camera-retro fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ภาพกิจกรรมบันฑิตศึกษา</h4>


                                <!-- <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6> -->

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


<!-- <================================================================== All Add Modal ==================================================================> -->

          <!-- Add Bechelor Portfolio Modal -->
    <div class="modal fade" id="addBechelorPortfolio" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">ผลงานนักศึกษา</h4>
            <h6 class="card-subtitle">ระดับปริญญาตรี</h6>
          </div>
          <div class="modal-body">

            <div class="form-group">
              <label class="col-md-12">ชื่อผลงาน</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="mdi mdi-clipboard-text"></i></div>
                    <input id="BechelorPortfolioName" type="text"  class="form-control form-control-line">
                  </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">รายละเอียด</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                    <textarea class="form-control" rows="3" id="BechelorPortfolioDetail" ></textarea>
                  </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">ประเภทผลงาน</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="fa fa-trophy"></i></div>
                  <select id="BechelorPortfolioGroup" class="form-control form-control-line">
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
                <label class="col-md-12">Status</label>
                <div class="col-md-12">
                  <div class="row">
                    <div class="demo-checkbox" style="margin-left: 23px;margin-top: 20px;">
                      <input type="checkbox" id="BechelorPortfolioGeneral" class="chk-col-grey" checked disabled>
                      <label for="BechelorPortfolioGeneral">ผลงานทั่วไป</label>
                      <input type="checkbox" id="BechelorPortfolioHallOfFame" class="chk-col-grey" >
                      <label for="BechelorPortfolioHallOfFame">Hall of Fame</label>
                    </div>
                  </div>
                </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">ปีที่ได้รับรางวัล</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="mdi mdi-calendar-check"></i></div>
                  <select id="BechelorPortfolioYear"  class="form-control form-control-line"></select>
                    <!-- <input id="BechelorPortfolioYear" type="text" pattern="(?:25|25)[0-9]{2}" title="กรุณากรอกปีพ.ศ.ปีที่ได้รับรางวัล" class="form-control form-control-line"> -->
                </div>
              </div>

            <div class="form-group">
              <label  class="col-md-12">รูปภาพ<label style="color:red;"> (ถ้ามี)</label></label>
                  <input type="file" id="BechelorPortfolioPicture" class="form-control" >
                    <p id="BechelorDemo"></p>
                  <!-- <input class="form-control  btn-outline-inverse col-md-12" type="file" id="BechelorPortfolioPicture"> -->
            </div>
          </div>
          <div class="modal-footer">
            <button id="btSubmitBechelorPortfolio" class="btn btn-success"><i class="fa fa-check"></i>   Submit</button>
            <button id="btCloseBechelorPortfolio" type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-times"></i>   Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Bechelor Student Activity -->
    <div class="modal fade" id="addBechelorActivity" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">ภาพกิจกรรมนักศึกษา</h4>
            <h6 class="card-subtitle">ระดับปริญญาตรี</h6>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="col-md-12">ชื่อกิจกรรม</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="mdi mdi-clipboard-text"></i></div>
                <input id="GraduateActivityName" type="text"  class="form-control form-control-line">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">รายละเอียด</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                <textarea class="form-control" rows="5" id="GraduateActivityDetail" ></textarea>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">แฟ้มรูปภาพ</label>
              <input type="file" multiple="60" name="" value="">
              <button id="capture" class="btn btn-success"><i class="fa fa-check"></i>   capture</button>
            </div>

            <div class="form-group">
              <label class="col-md-12">วิดีโอ<label style="color:red;">(ถ้ามี)</label></label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                <textarea class="form-control" rows="5" id="GraduateActivityVideo" ></textarea>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-12">วันที่จัดกิจกรรม</label>
              <div class="col-md-12">
                <input  class="form-control " type="text" id="GraduateActivityDate" name="daterange" value="" />
                <script type="text/javascript">
                      $('input[name="daterange"]').daterangepicker(
                      {
                        "showWeekNumbers": true,
                        "timePicker": true,
                        "timePicker24Hour": true,
                        "timePickerIncrement": 5,
                        "autoApply": true,
                        "locale": {
                            "format": 'DD/MM/YYYY HH:mm ',
                            "separator": " - ",
                            "applyLabel": "Apply",
                            "cancelLabel": "Cancel",
                            "fromLabel": "From",
                            "toLabel": "To",
                            "customRangeLabel": "Custom",
                            "weekLabel": "W",
                            "daysOfWeek": [
                                "Su",
                                "Mo",
                                "Tu",
                                "We",
                                "Th",
                                "Fr",
                                "Sa"
                            ],
                            "monthNames": [
                                "January",
                                "February",
                                "March",
                                "April",
                                "May",
                                "June",
                                "July",
                                "August",
                                "September",
                                "October",
                                "November",
                                "December"
                            ],
                            "firstDay": 1
                        },
                        "linkedCalendars": false,
                        "alwaysShowCalendars": true,
                        "startDate": "01/01/2018",
                        "endDate": "01/01/2018",
                        "opens": "center",
                        "drops": "up",
                        "buttonClasses": "btn btn-md",
                        "applyClass": "btn-info",
                        "cancelClass": "btn-danger"
                    }, function(start, end, label) {
                      console.log("New date range selected: ' + start.format('DD/MM/YYYY HH:mm ') + ' to ' + end.format('DD/MM/YYYY HH:mm ') + ' (predefined range: ' + label + ')");
                      alert("จัดกิจกรรมตั้งแต่วันที่ : " + start.format('DD/MM/YYYY HH:mm ') + ' ถึง ' + end.format('DD/MM/YYYY HH:mm '));
                    });
                </script>
              </div>
          </div>

          <div class="modal-footer">
            <div class="form-group">
                <div class="col-sm-12 text-center">
                  <button id="btUploadBechelorImageActivity" type="button" class="btn btn-success "><i class="fa fa-check"></i>   Submit</button>
                  <button id="btClearTextFile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
                  <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <!-- Add Graduate Portfolio Modal -->
      <div class="modal fade" id="addGraduatePortfolio" role="dialog" aria-labelledby="Message" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="messageModalLabel">ผลงานบัณฑิตศึกษา</h4>
              <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6>
            </div>
             <!-- <form> -->
            <div class="modal-body">

              <div class="form-group">
                <label class="col-md-12">ชื่อผลงาน</label>
                    <div class="input-group">
                    <div class="input-group-addon"><i class="mdi mdi-clipboard-text"></i></div>
                      <input id="GraduatePortfolioName" type="text"  class="form-control form-control-line">
                    </div>
              </div>

              <div class="form-group">
                <label class="col-md-12">รายละเอียด</label>
                    <div class="input-group">
                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                      <textarea class="form-control" rows="3" id="GraduatePortfolioDetail" ></textarea>
                    </div>
              </div>

              <div class="form-group">
                <label class="col-md-12">ประเภทผลงาน</label>
                    <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-trophy"></i></div>
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
                  <label class="col-md-12">Status</label>
                  <div class="col-md-12">
                    <div class="row">
                      <div class="demo-checkbox" style="margin-left: 23px;margin-top: 20px;">
                        <input type="checkbox" id="GraduatePortfolioGeneral" class="chk-col-grey" checked disabled>
                        <label for="GraduatePortfolioGeneral">ผลงานทั่วไป</label>
                        <input type="checkbox" id="GraduatePortfolioHallOfFame" class="chk-col-grey" >
                        <label for="GraduatePortfolioHallOfFame">Hall of Fame</label>
                      </div>
                    </div>
                  </div>
              </div>

              <div class="form-group">
                <label class="col-md-12">ปีที่ได้รับรางวัล</label>
                    <div class="input-group">
                    <div class="input-group-addon"><i class="mdi mdi-calendar-check"></i></div>
                    <select id="GraduatePortfolioYear"  class="form-control form-control-line"></select>
                      <!-- <input id="GraduatePortfolioYear" type="text" pattern="(?:25|25)[0-9]{2}"  title="กรุณากรอกปีพ.ศ.ปีที่ได้รับรางวัล" class="form-control form-control-line"> -->
                  </div>
                </div>

              <div class="form-group">
                <label  class="col-md-12">รูปภาพ<label style="color:red;"> (ถ้ามี)</label></label>
                    <input type="file" id="GraduatePortfolioPicture" class="form-control" >
                      <p id="GraduateDemo"></p>
                    <!-- <input class="form-control  btn-outline-inverse col-md-12" type="file" id="BechelorPortfolioPicture"> -->
              </div>
            </div>
            <div class="modal-footer">
              <button id="btSubmitGraduatePortfolio" class="btn btn-success"><i class="fa fa-check"></i>   Submit</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-times"></i>   Close</button>
            </div>
            <!-- </form> -->
          </div>
        </div>
      </div>

    <!-- Modal Graduate Student Activity -->
    <div class="modal fade" id="addGraduateActivity" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">ภาพกิจกรรมบันฑิตศึกษา</h4>
            <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="col-md-12">ชื่อกิจกรรม</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="mdi mdi-clipboard-text"></i></div>
                <input id="GraduateActivityName" type="text"  class="form-control form-control-line">
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">รายละเอียด</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                <textarea class="form-control" rows="5" id="GraduateActivityDetail" ></textarea>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">แฟ้มรูปภาพ</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                <textarea class="form-control" rows="5" id="GraduateActivityPhoto" ></textarea>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">วิดีโอ<label style="color:red;">(ถ้ามี)</label></label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                <textarea class="form-control" rows="5" id="GraduateActivityVideo" ></textarea>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">วันที่จัดกิจกรรม</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
              <input  class="form-control " type="text" id="GraduateActivityDate"  name="GraduateDaterange" value="">
              </div>
            </div>
          </div>

                  <div class="form-group">
                      <div class="col-sm-12 text-center">
                        <button id="btUploadGraduateImageActivity" type="button" class="btn btn-success "><i class="fa fa-check"></i>   Submit</button>
                        <button id="btClearTextFile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
                        <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
                      </div>
                  </div>
        </div>
      </div>
    </div>

    <!-- Modal Capture Student Activity -->


    <div class="modal fade" id="CaptureBechelorActivity" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">ถ่ายภาพกิจกรรม</h4>
            <h6 class="card-subtitle">ระดับปริญญาตรี</h6>
          </div>
          <div class="modal-body">
              <video id="video" width="470" height="320" autoplay></video>
              <canvas id="canvas" width="470" height="320"></canvas>
          </div>

          <div class="modal-footer">
            <div class="form-group">
                <div class="col-sm-12 text-center">
                  <button id="snap" type="button" class="btn btn-success "><i class="fa fa-check"></i>   snap</button>

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
    <script src="../js/student.js"></script>

</body>

</html>
