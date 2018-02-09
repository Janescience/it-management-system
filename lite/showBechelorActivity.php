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


         <style>
         .results tr[visible='false'],
         .no-result{
           display:none;
         }

         .results tr[visible='true']{
           display:table-row;
         }

         .avatar {
         width:100px;
         margin: 10px;
         border-radius: 500px;
         -webkit-border-radius: 500px;
         -moz-border-radius: 500px;
     }

       #list_user td{
        text-align:center;
        vertical-align:middle;
       }


         </style>


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
                <div class="col-md-5 col-sm-8 align-self-center">
                    <h2 class="text-themecolor">นักศึกษา</h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">จัดการกิจกรรม</a></li>
                        <li class="breadcrumb-item active">กิจกรรมของนักศึกษาระดับปริญญาตรี</li>
                    </ol>
                </div>
            </div>

      <div class="row">
          <div class="col-md-1">
          </div>
          <div class="col-lg-10">
            <div class="card">
                <div class="card-block">
                  <h1 class="w3-animate-right">กิจกรรม</h1>
                  <h4>ระดับปริญญาตรี</h4>
                      <hr/><br/>

                      <div class="row">
                          <div class="col-md-3">
                          </div>
                          <div class="col-md-6">
                          </div>
                          <div class="col-md-3">
                            <div  class="form-group">
                              <div class="demo-switch-title"><h2><i class="fa fa-square"></i> แสดง <i class="fa fa-check-square"></i></h2></div>
                              <div class="switch">
                                  <label>ปิด<input type="checkbox"  id="ShowActivityStatus"><span class="lever switch-col-red"></span>เปิด</label>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-md-3">
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="col-md-12">เลือกกิจกรรม</label>
                              <select class="form-control js--animations" id="selectActivity">
                              </select>
                            </div>
                            <div align="right" class="form-group">
                              <button id="DeleteBechelorActivity" class="btn btn-danger"><i class="fa fa-close"></i> ลบกิจกรรม</button>
                            </div>
                          </div>
                          <div class="col-md-3">
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-md-3">
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                                <label class="col-md-12">ชื่อกิจกรรม</label>
                                <div class="input-group">
                                <div class="input-group-addon"><i class="fa fa-grav"></i></div>
                                  <input id="BechelorActivityName" type="text"  class="form-control form-control-line">
                                </div>
                              </div>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-md-3">
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                                <label class="col-md-12">รายละเอียด</label>
                                <div class="input-group">
                                <div class="input-group-addon"><i class="fa fa-list"></i></div>
                                  <textarea class="form-control" rows="5" id="BechelorActivityDetail" ></textarea>
                                </div>
                            </div>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-md-3">
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                                <label class="col-md-12">วันที่จัดกิจกรรม</label>
                                <div class="row" style="margin-left: 30px;margin-right: 0px;">
                                  <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                                      <input  class="form-control form-control-line" type="date" id="BechelorActivityDateFrom"  name="BechelorActivityDateFrom" value="" >
                                  </div>
                                  <label class="col-md-1" style="padding-left: 10px;padding-right: 5px;margin-top: 10px;height: 20px;">ถึง</label>
                                  <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                                      <input  class="form-control form-control-line" type="date" id="BechelorActivityDateTo"  name="BechelorActivityDateTo" value="" >
                                  </div>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div class="row">
                        <!-- <div class="col-md-1">
                        </div> -->
                        <!-- <div class="col-md-4">
                        </div> -->
                        <div class="col-md-9">
                          <div align="right" class="">

                          </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                              <label class="col-md-12">แฟ้มรูปภาพ</label>
                              <div class="col-md-12">
                                  <div class="form-group text-center">
                                      <div class="input-group">
                                          <span class="input-group-btn">
                                              <span class="btn btn-secondary btn-file">
                                                  เลือกรูปภาพ <input type="file" class="file-upload" id="BechelorActivityImage" accept="image/*" multiple="60" name="image" >
                                              </span>
                                          </span>
                                          <input type="text" class="form-control" id="BechelorActivityImageText" readonly>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- <div class="col-md-1">
                        </div> -->
                        <!-- <div class="col-md-4">
                        </div> -->
                        <div class="col-lg-12 col-xlg-12 col-md-12">
                          <div align="right" class="">

                          </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="col-md-12">วิดีโอ<label style="color:red;">(ถ้ามี)</label></label>
                            <div class="col-md-12">
                                <div class="form-group text-center">
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                            <span class="btn btn-secondary btn-file">
                                                เลือกวิดีโอ <input type="file" class="file-upload" id="BechelorActivityVideo" accept="video/*" multiple="5" name="video" >
                                            </span>
                                        </span>
                                        <input type="text" class="form-control" id="BechelorActivityVideoText" readonly>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-md-9">
                          <div align="right" class="">
                            <button id="EditBechelorActivity" class="btn btn-warning"><i class="fa fa-pencil-square-o"></i>   แก้ไขรายละเอียด</button>
                            <button id="SaveEditBechelorActivity" class="btn btn-info" >   ตกลง</button>
                            <button id="CancelEditBechelorActivity" class="btn btn-danger">   ยกเลิก</button>
                            <button id="EditBechelorActivityImage" class="btn btn-success"><i class="fa fa-file-image-o"></i>   แก้ไขรูปภาพ</button>
                            <button id="SaveEditBechelorActivityImage" class="btn btn-info" >   ตกลง</button>
                            <button id="CancelEditBechelorActivityImage" class="btn btn-danger">   ยกเลิก</button>
                            <button id="EditBechelorActivityVideo" class="btn btn-light"><i class="fa fa-file-video-o"></i>   แก้ไขวีดีโอ</button>
                            <button id="SaveEditBechelorActivityVideo" class="btn btn-info" >   ตกลง</button>
                            <button id="CancelEditBechelorActivityVideo" class="btn btn-danger">   ยกเลิก</button>
                          </div>
                        </div>
                    </div><br/>

                      <div class="row">
                        <div class="col-lg-1">
                        </div>
                          <div class="col-lg-10" id="viewActImage">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">ภาพกิจกรรมทั้งหมด</h4>

                                <div  class="row el-element-overlay">
                                  <div class="card-block">
                                  <div class="row" align="center" id="ActvImage">
                                  </div>
                                </div>
                              </div>

                                </div>
                            </div>
                          </div>
                        <div class="col-lg-1">
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-1">
                        </div>
                          <div class="col-lg-10" id="viewActVideo">
                            <div class="card">
                                <div class="card-block">
                                  <h4 class="card-title">วีดีโอทั้งหมด</h4>
                                    <div class="row"  id="ActvVideo">
                                    </div>
                                </div>
                            </div>
                          </div>
                      </div>

                      </div>
                </div>
            </div>
          </div>

          <!-- Edit Bechelor Activity Modal -->

                <!-- </form> -->
              </div>
            </div>
          </div>
      </div>
            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>
    <?php include('modal-student.php')?>
    <?php include('import-javascript.php')?>
    <script src="../js/showBechelorActivity.js"></script>

</body>

</html>
