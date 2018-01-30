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
                    <div class="col-md-5 col-8 align-self-center">
                        <h2 class="text-themecolor">Bechelor Portfolio <h5 class="text-themecolor">Bechelor Degree</h5></h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Student</a></li>
                            <li class="breadcrumb-item active">Show Bechelor Portfolio</li>
                        </ol>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <div class="card-block">
                            <h1 class="w3-animate-right">Portfolio</h1>
                            <h4>Bechelor Degrees</h4>
                                <hr/><br/>

                                <div class="row">
                                  <div class="col-md-4">
                                  </div>
                                  <div class="col-md-4">
                                  </div>
                                  <div class="col-md-4">

                                  <div class="form-group">
                                    <span class="counter pull-right"></span>
                                      <div class="input-group">
                                        <div class="input-group-addon"><i class="ti-search"></i></div>
                                        <input id="searchPort" type="text"  class="form-control" >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">

                            <div class="col-md-12">

                              <div class="card-block bg-info">

                                <h4 class="text-white card-title">Portfolio</h4>
                                <div class="message-box contact-box">


                            </div>
                            </div>

                            <form class="form-horizontal form-material ">

                              <div class="table-responsive">
                                  <table class="table text-center results table-hover color-bordered-table success-bordered-table">
                                    <!-- color-bordered-table success-bordered-table -->
                                      <thead >
                                          <tr >
                                              <th class="text-center">Show</th>
                                              <th class="text-center">Portfolio Name</th>
                                              <th class="text-center">Portfolio Detail</th>
                                              <th class="text-center">Portfolio Type</th>
                                              <th class="text-center">Portfolio Status</th>
                                              <th class="text-center">Portfolio Year</th>
                                              <th class="text-center">Portfolio Picture</th>
                                              <th class="text-center">Manage</th>

                                          </tr>
                                          <tr class="warning no-result">
                                            <td colspan="8"><i class="fa fa-warning"></i> No result</td>
                                          </tr>
                                      </thead>
                                      <tbody id="list_BechelorPortfolio">

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

          <!-- Edit Bechelor Portfolio Modal -->
        <div class="modal fade" id="editBechelorPortfolio" role="dialog" aria-labelledby="Message" aria-hidden="true">
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
                      <select id="BechelorPortfolioGroup" name="BecPortfolioGroup" class="form-control form-control-line"></select>

                  </div><br/>

                    <div class="">
                      <input id="AddBechelorPortfolioType" type="text"  class="form-control form-control-line">
                      <input id="EditBechelorPortfolioType" type="text"  class="form-control form-control-line">

                    </div><br/>
                    <div align="right" class="">
                      <button id="AddBechelorPortfolioGroup" class="btn btn-info"><i class="fa fa-plus"></i>   เพิ่ม</button>
                      <button id="EditBechelorPortfolioGroup" class="btn btn-warning"><i class="fa fa-pencil-square-o"></i>   แก้ไข</button>
                      <button id="DeleteBechelorPortfolioGroup" class="btn btn-danger"><i class="fa fa-minus"></i>   ลบ</button>
                      <button id="SaveAddBechelorPortfolioGroup" class="btn btn-success" >   ตกลง</button>
                      <button id="CancelAddBechelorPortfolioGroup" class="btn btn-danger">   ยกเลิก</button>

                      <button id="SaveEditBechelorPortfolioGroup" class="btn btn-success editType" >   ตกลง</button>
                      <button id="CancelEditBechelorPortfolioGroup" class="btn btn-danger">   ยกเลิก</button>

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
      </div>
            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>
    <?php include('modal-showBechelorPort.php')?>
    <?php include('import-javascript.php')?>
    <script src="../js/showBechelorPortfolio.js"></script>

</body>

</html>
