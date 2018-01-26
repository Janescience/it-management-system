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

     <style>
     #list_info_bachelor td,#list_info_graduate td,#list_header td{
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
            <div class="col-md-5 col-8 align-self-center">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)"><h4>เมนูหลัก</h4></a></li>
                <li class="breadcrumb-item active">หน้าแรก</li>
              </ol>
            </div>
          </div>
<!--=========================== ส่วนหัว [รูปภาพสไลด์] ===========================-->
          <div class="row">
            <div class="col-lg-12">
              <div class="card ">
                <div class="card-block ">
                  <h4 class="text-black card-title">รูปภาพไสลด์</h4>
                    <div class="message-box contact-box">
                      <h2 class="add-ct-btn">
                        <button type="button" id="btAddHeader" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                      </h2>
                    </div>
                </div>

                <hr>

                <div class="card-block ">
                  <div class="card">
                    <div class="card-block">
                      <form class="form-horizontal form-material ">
                        <div class="table-responsive">
                            <table id="tableHisEdu" class="table text-center">
                                <thead >
                                    <tr >
                                        <th class="text-center">รูปภาพ</th>
                                        <th class="text-center">หัวข้อ</th>
                                        <th class="text-center">รายละเอียด</th>
                                        <th class="text-center">ลิงค์</th>
                                        <th class="text-center">ข้อความปุ่ม</th>
                                        <th class="text-center">จัดการ</th>
                                    </tr>
                                    <tr id="loaderHeader">
                                      <td colspan="6"><img src="../images/ajax-loader.gif">  กำลังโหลดข้อมูล...</td>
                                    </tr>
                                </thead>
                                <tbody id="list_header">

                                </tbody>
                            </table>
                        </div>
                      </form>
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
                <h4 class="text-black card-title">ระดับการศึกษา</h4>
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
                <h4 class="text-black card-title">ข่าวสาร</h4>
              </div>

              <hr>

              <div class="card-block bg-info">
                <h4 class="text-white card-title">ระดับปริญญาตรี</h4>
                  <div class="message-box contact-box">
                    <h2 class="add-ct-btn">
                      <button type="button" id="btOpenModalBachelor" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                    </h2>
                  </div>
              </div>

              <div class="card-block ">
                <div class="card">
                  <div class="card-block">
                    <form class="form-horizontal form-material ">
                      <div class="table-responsive">
                          <table id="tableInfoBachelor" class="table text-center">
                              <thead >
                                  <tr >
                                      <th class="text-center">รูปภาพ</th>
                                      <th class="text-center">หัวข้อ</th>
                                      <th class="text-center">ลิงค์</th>
                                      <th class="text-center">จัดการ</th>
                                  </tr>
                                  <tr id="loaderInforBachelor">
                                    <td colspan="4"><img src="../images/ajax-loader.gif">  กำลังโหลดข้อมูล...</td>
                                  </tr>
                              </thead>
                              <tbody id="list_info_bachelor">

                              </tbody>
                          </table>
                      </div>
                    </form>
                  </div>
                </div>
              </div>


              <div class="card-block bg-info">
                <h4 class="text-white card-title">ระดับบัณฑิตศึกษา</h4>
                  <div class="message-box contact-box">
                    <h2 class="add-ct-btn">
                      <button type="button" id="btOpenModalGraduate" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                    </h2>
                  </div>
              </div>

              <div class="card-block ">
                <div class="card">
                  <div class="card-block">
                    <form class="form-horizontal form-material ">
                      <div class="table-responsive">
                          <table id="tableInfoGraduate" class="table text-center">
                              <thead >
                                  <tr >
                                      <th class="text-center">รูปภาพ</th>
                                      <th class="text-center">หัวข้อ</th>
                                      <th class="text-center">ลิงค์</th>
                                      <th class="text-center">จัดการ</th>
                                  </tr>
                                  <tr id="loaderInforGraduate">
                                    <td colspan="4"><img src="../images/ajax-loader.gif">  กำลังโหลดข้อมูล...</td>
                                  </tr>
                              </thead>
                              <tbody id="list_info_graduate">

                              </tbody>
                          </table>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
<!--=====================================================================-->
          </div>
        </div>
      </div>

            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>

    <?php include('modal-index.php')?>
    <?php include('import-javascript.php')?>
    <script src="../js/index.js"></script>

</body>

</html>
