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
                        <h3 class="text-themecolor m-b-0 m-t-0">Profile</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Profile</li>
                        </ol>
                    </div>
                </div>
                <!-- Row -->
                <div class="row">
                  <div class="col-md-12">
                      <div class="card">
                          <!-- Nav tabs -->
                          <ul class="nav nav-tabs profile-tab" role="tablist">
                              <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#profile" role="tab">ข้อมูลส่วนตัว</a> </li>
                              <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#history" role="tab">ประวัติและผลงาน</a> </li>
                              <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#office" role="tab">จัดการตารางงาน</a> </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="tab-content">
                              <div class="tab-pane active" id="profile" role="tabpanel">

                                        <div class="col-lg-12">
                                  <div class="row">
                                  <div class="card-block ">
                                    <div class="card">
                                      <center class="m-t-30">
                                         <img id="imageProfile"  class="img-circle" width="180"  />
                                            <h4 class="card-title m-t-10"></h4>
                                            <h6 class="card-subtitle">Accouts Manager</h6>
                                            <input class=" btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageProfile"><hr>
                                                <div class="form-group">
                                            <button id="btUploadImageProfile" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
                                            <button id="btClearTextFile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
                                          </div>
                                      </center>
                                        </div>
                                      </div>

                                        <div class="card-block">
                                            <div class="card">
                                              <div class="card-block">
                                              <div class="form-group">
                                                <label for="nameProfile">Full Name</label>
                                                    <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                                    <input id="nameProfile" type="text" class="form-control" disabled="true">
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                <label for="emailCreateUser" >Email</label>
                                                    <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-email"></i></div>
                                                    <input id="emailProfile" type="email"  class="form-control" disabled="true">
                                                  </div>
                                              </div>

                                              <div class="form-group">
                                                  <label for="phoneCreateUser">Phone No</label>
                                                  <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-mobile"></i></div>
                                                      <input id="phoneProfile" type="text"  class="form-control" disabled="true">
                                                  </div>
                                              </div>

                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <button id="btUpdateProfile"class="btn btn-info waves-effect waves-ligh"><i class="ti ti-pencil-alt"></i>  Update Profile</button>
                                                        <button id="btUpdatePassword"class="btn btn-danger waves-effect waves-ligh"><i class="ti ti-lock"></i>  Change Password</button>

                                                        <button id="btLoadingProfile" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
                                                        <button id="btSubmitUpdateProfile" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
                                                        <button id="btCancelUpdateProfile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
                                                    </div>
                                                </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>

                              </div>
                            </div>

                        </div>
                              <!--second tab-->
                              <div class="tab-pane" id="history" role="tabpanel">
                                  <div class="card-block">
                                    <div class="card">
                                      <!-- Nav tabs -->
                                      <ul class="nav nav-tabs profile-tab " role="tablist">
                                          <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#hisEducation" role="tab">ประวัติการศึกษา</a> </li>
                                          <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#hisWork" role="tab">ประวัติการทำงาน</a> </li>
                                          <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#academic" role="tab">ผลงานวิชาการ</a> </li>
                                      </ul>
                                      <!-- Tab panes -->
                                      <div class="tab-content">
                                          <div class="tab-pane active" id="hisEducation" role="tabpanel">
                                            <div class="card-block ">

                                                <div class="card-block bg-info">
                                                  <h4 class="text-white card-title">ประวัติการศึกษา</h4>
                                                        <div class="message-box contact-box">
                                                        <h2 class="add-ct-btn">
                                                          <button type="button" id="btOpenModalEdu" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                        </h2>
                                                      </div>
                                                      </div>

                                                    <form class="form-horizontal form-material ">
                                                      <div class="table-responsive">
                                                          <table class="table text-center color-bordered-table success-bordered-table">
                                                              <thead >
                                                                  <tr >
                                                                      <th class="text-center">แสดง</th>
                                                                      <th class="text-center">ปริญญา</th>
                                                                      <th class="text-center">สาขาวิชา</th>
                                                                      <th class="text-center">มหาวิทยาลัย</th>
                                                                      <th class="text-center">ปีที่จบการศึกษา</th>
                                                                      <th class="text-center">จัดการ</th>
                                                                  </tr>
                                                              </thead>
                                                              <tbody id="list_his_education">

                                                              </tbody>
                                                          </table>
                                                      </div>
                                                    </form>
                                                  <br>
                                                  <div class="card-block bg-info">
                                                    <h4 class="text-white card-title">ความเชี่ยวชาญ</h4>
                                                    <div class="message-box contact-box">
                                                    <h2 class="add-ct-btn">
                                                      <button type="button" id="btOpenModalExpert" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                    </h2>
                                                  </div>
                                                        </div>
                                                      <form class="form-horizontal form-material ">
                                                        <div class="table-responsive">
                                                            <table class="table text-center color-bordered-table success-bordered-table">
                                                                <thead >
                                                                    <tr >
                                                                        <th class="text-center">แสดง</th>
                                                                        <th class="text-center">รายละเอียด</th>
                                                                        <th class="text-center">จัดการ</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="list_expertise">
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                      </form>
                                            </div>
                                          </div>
                                          <div class="tab-pane" id="hisWork" role="tabpanel">
                                              <div class="card-block ">
                                                <div class="card-block bg-info">
                                                  <h4 class="text-white card-title">ประวัติการทำงาน</h4>
                                                    <div class="message-box contact-box">
                                                        <h2 class="add-ct-btn">
                                                          <button type="button" id="btOpenModalWork" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                        </h2>
                                                    </div>
                                                  </div>
                                                  <form class="form-horizontal form-material ">
                                                    <div class="table-responsive">
                                                        <table class="table text-center color-bordered-table success-bordered-table">
                                                            <thead >
                                                                <tr >
                                                                    <th class="text-center">แสดง</th>
                                                                    <th class="text-center">ระยะเวลา</th>
                                                                    <th class="text-center">สถานที่ทำงาน</th>
                                                                    <th class="text-center">งาน</th>
                                                                    <th class="text-center">จัดการ</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="list_his_work">

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                  </form>
                                                  <div class="card-block bg-info">
                                                    <h4 class="text-white card-title">ประสบการณ์ด้านต่างๆ</h4>
                                                      <div class="message-box contact-box">
                                                          <h2 class="add-ct-btn">
                                                            <button type="button" id="btOpenModalExp" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                          </h2>
                                                      </div>
                                                    </div>
                                                  <form class="form-horizontal form-material ">
                                                    <div class="table-responsive">
                                                        <table class="table text-center color-bordered-table success-bordered-table">
                                                            <thead >
                                                                <tr >
                                                                    <th class="text-center">แสดง</th>
                                                                    <th class="text-center">ประสบการณ์</th>
                                                                    <th class="text-center">ระยะเวลา</th>
                                                                    <th class="text-center">รายละเอียด</th>
                                                                    <th class="text-center">จัดการ</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="list_exp">

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                  </form>
                                              </div>
                                          </div>
                                          <div class="tab-pane" id="academic" role="tabpanel">

                                    <div class="card-block">
                                      <div class="row">
                                          <div class="col-md-6">
                                            <ul class="list-icons">
                                            <li ><a href="javascript:void(0)"><i class="fa fa-chevron-right"></i> งานวิจัยฉบับสมบูรณ์ที่ผ่านการรับรอง</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-chevron-right"></i> วารสารระดับนานาชาตที่มีอยู่ในฐานข้อมูลสากล</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-chevron-right"></i> ผลงานที่ได้รับรางวัลระดับชาติ</a></li>
                                            <li id="interWork" ><a href="javascript:void(0)"><i id="iconInterWork" class="fa fa-chevron-right"></i> ผลงานที่ได้รับรางวัลระดับนานาชาติ</a></li>
                                            </ul>
                                         </div>
                                      <div class="col-md-6">
                                            <ul class="list-icons">
                                            <li><a href="javascript:void(0)"><i class="fa fa-chevron-right"></i> การประชุมระดับชาติ</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-chevron-right"></i> การประชุมระดับนานาชาติ</a></li>
                                            <li id="nationJour"><a href="javascript:void(0)"><i id="iconNationJour" class="fa fa-chevron-right"></i> วารสารระดับชาติ</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-chevron-right"></i> วารสารระดับนานาชาติที่ไม่อยู่ในฐานข้อมูลสากล</a></li>
                                            </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div id="headInterWork" class="card-block bg-info">
                                    <h4 class="text-white card-title">ผลงานที่ได้รับรางวัลระดับนานาชาติ</h4>
                                      <div class="message-box contact-box">
                                          <h2 class="add-ct-btn">
                                            <button type="button" id="btOpenModalInterWork" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                          </h2>
                                      </div>
                                    </div>
                                    <form class="form-horizontal form-material ">
                                      <div class="table-responsive">
                                          <table id="tableInterWork" class="table text-center color-bordered-table success-bordered-table">
                                              <thead >
                                                  <tr >
                                                      <th class="text-center">แสดง</th>
                                                      <th class="text-center">ชื่อรางวัล</th>
                                                      <th class="text-center">ชื่อผลงาน</th>
                                                      <th class="text-center">หน่วยงานที่ได้รับรางวัล</th>
                                                      <th class="text-center">ค่าภาระงานที่ได้รับ</th>
                                                  </tr>
                                              </thead>
                                              <tbody id="list_inter_work">

                                              </tbody>
                                          </table>
                                      </div>
                                    </form>

                                    <div id="headNationJour" class="card-block bg-info">
                                      <h4 class="text-white card-title">วารสารระดับชาติ</h4>
                                        <div class="message-box contact-box">
                                            <h2 class="add-ct-btn">
                                              <button type="button" id="btOpenModalInterWork" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                            </h2>
                                        </div>
                                      </div>
                                      <form class="form-horizontal form-material ">
                                        <div class="table-responsive">
                                            <table id="tableNationJour" class="table text-center color-bordered-table success-bordered-table">
                                                <thead >
                                                    <tr >
                                                        <th class="text-center">แสดง</th>
                                                        <th class="text-center">ชื่อบทความ</th>
                                                        <th class="text-center">ชื่อวารสาร</th>
                                                        <th class="text-center">ประเภทบทความ</th>
                                                        <th class="text-center">ปีที่พิมพ์</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="list_nation_jour">

                                                </tbody>
                                            </table>
                                        </div>
                                      </form>

                                          </div>
                                      </div>
                                    </div>
                                  </div>
                              </div>

                              <!-- Third Tab -->
                              <div class="tab-pane" id="office" role="tabpanel">
                                <!-- <div class="col-lg-12"> -->
                                  <div class="card-block">

                                        <div class="demo-radio " style="padding-right:40px;" id="OffStatus"><center class="m-t-30">
                                          <input type="radio" name="status" id="md_radio_32" class="with-gap radio-col-light-green" >
                                          <label for="md_radio_32">Available</label>
                                          <input type="radio" name="status" id="md_radio_27" class="with-gap radio-col-light-blue" >
                                          <label for="md_radio_27">Not in the Office</label>
                                          <input type="radio" name="status" id="md_radio_34" class="with-gap radio-col-amber" >
                                          <label for="md_radio_34">Be back</label>
                                          <input type="radio" name="status" id="md_radio_21" class="with-gap radio-col-red" >
                                          <label for="md_radio_21">Don't Disturb</label>
                                        </div>
                                        <center class="m-t-30">
                                      <div class="col-lg-10" >
                                        <div class="card">
                                          <div class="card-body">
                                            <h4 class="card-title">Schedule</h4>
                                            <!-- <h6 class="card-subtitle">Add class <code>.table</code></h6> -->
                                            <div class="table-responsive">
                                              <table class="table table-hover color-table info-table" id="OffTable">
                                                <thead>
                                                  <tr>
                                                     <th>Day</th>
                                                     <th>Place</th>
                                                     <th>From</th>
                                                     <th>To</th>
                                                     <th>Status</th>
                                                 </tr>
                                               </thead>
                                               <tbody>
                                                 <tr>
                                                     <td>Monday</td>
                                                     <td>F7</td>
                                                     <td>10.00 am</td>
                                                     <td>01.00 pm</td>
                                                     <td><span class="label label-danger">admin</span> </td>
                                               </tr>
                                               <tr>
                                                   <td>Tuesday</td>
                                                   <td>B1</td>
                                                   <td>08.00 am</td>
                                                   <td>12.00 am</td>
                                                   <td><span class="label label-info">member</span> </td>
                                               </tr>
                                               <tr>
                                                   <td>Wednesday</td>
                                                   <td>C1</td>
                                                   <td>09.00 am</td>
                                                   <td>03.00 pm</td>
                                                   <td><span class="label label-warning">developer</span> </td>
                                               </tr>
                                               <tr>
                                                   <td>Thusday</td>
                                                   <td>-</td>
                                                   <td>-</td>
                                                   <td>-</td>
                                                   <td><span class="label label-success">supporter</span> </td>
                                               </tr>
                                               <tr>
                                                   <td>Friday</td>
                                                   <td>C1</td>
                                                   <td>01.00 pm</td>
                                                   <td>05.00 pm</td>
                                                   <td><span class="label label-info">member</span> </td>
                                               </tr>
                                             </tbody>
                                           </table>
                                         </div>
                                       </div>
                                     </div>
                                      <input type="submit" class="btn btn-success " value="Submit Button" id="OffSave">
                                     <input type="reset" class="btn btn-danger  " value="Cancel" id="OffCancel">
                                   </center>
                                   </div>
                                  </div>
                                <!-- </div> -->
                              </div>

                      </div>
                  </div>
                </div>
              </div>
            <footer class="footer">
                Copyright © Information Technology 2017
            </footer>

        </div>
    </div>

    <?php include('modal-profile.php')?>
    <?php include('import-javascript.php')?>
    <script src="../js/profile.js"></script>

</body>

</html>
