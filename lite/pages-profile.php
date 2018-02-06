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
    <link href="css/hover.css" rel="stylesheet" type="text/css">

    <style>

    .avatar {
    width:200px;
    margin: 10px;
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    }

    </style>

</head>

<body  class="fix-header fix-sidebar card-no-border">
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
                        <h3 class="text-themecolor m-b-0 m-t-0">ข้อมูลส่วนตัว</h3>
                    </div>
                </div>
                <!-- Row -->
                <div class="row">


                  <div class="col-md-12">
                      <div class="card">
                          <!-- Nav tabs -->
                          <ul class="nav nav-tabs profile-tab" role="tablist">
                              <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#profile" role="tab" aria-expanded="true"><span class="hidden-sm-up"><i class="ti-user"></i></span><span class="hidden-xs-down">ข้อมูลส่วนตัว</span></a> </li>
                              <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#history" role="tab"><span class="hidden-sm-up"><i class="ti-comment-alt"></i></span><span class="hidden-xs-down">ประวัติและผลงาน</span></a> </li>
                              <li hidden id="tabOfficeHour" class="nav-item"> <a class="nav-link" data-toggle="tab" href="#office" role="tab"><span class="hidden-sm-up"><i class="ti-calendar"></i></span><span class="hidden-xs-down">ตารางการทำงาน</span></a> </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="tab-content tabcontent-border">
                              <div class="tab-pane active" id="profile" role="tabpanel" aria-expanded="true">

                                        <div class="col-lg-12">
                                  <div class="row">

                                  <div class="card-block ">

                                    <div class="card">
                                      <div class="card-block">
                                        <div  class="pull-right">
                                          <div class="demo-switch-title"><h4><i class="fa fa-map-marker"> </i> ตำแหน่ง</h4></div>
                                          <div class="switch">
                                              <label><input type="checkbox"  id="openMap"><span class="lever switch-col-blue"></span></label>
                                          </div>
                                        </div>
                                    </div>

                                        <center>
                                            <div class="hovereffect" id="hoverProfile">
                                         <img  id="imageProfile" src="../assets/images/users/user.png" class="avatar" style="border:8px solid #BDBDBD;"/>
                                              <div class="overlay">
                                            <a class="info" id="changePictureProfile" href="javascript:void(0)"><i class="fa fa-image"></i> เปลี่ยนรูปภาพ</a>

                                            </div>
                                          </div>

                                          <div hidden class="setting image_picker" id="uploadImageProfile">
                                            <div class="settings_wrap">
                                              <label class="drop_target">
                                                <div class="image_preview"></div>
                                                <input  class="upload" id="fileUploadImageProfile" type="file"/>
                                              </label>
                                              <div class="settings_actions vertical"><a data-action="choose_from_uploaded"><i class="fa fa-picture-o"></i> Choose from Uploads</a><a class="disabled" data-action="remove_current_image"><i class="fa fa-ban"></i> Remove Current Image</a></div>

                                            </div>
                                          </div>
                                          <button id="btUploadImageProfile" type="button" class="btn btn-success "><i class="fa fa-check"></i> บันทึก</button>
                                          <button hidden id="cancelUpload" type="button" class="btn btn-danger "><i class="fa fa-close"></i> ยกเลิก</button>



                                        <div class="form-group">
                                          <div class="btn-group m-t-10">
                                            <button type="button" class="btn btn-secondary" id="showStatus" >สถานะ</button>
                                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(69px, 33px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                <a class="dropdown-item" href="javascript:void(0)" id="available">
                                                  <svg width="30" height="30"  >
                                                      <circle  cx="15" cy="15" r="5"  fill="#00ff00" stroke-width="3"/>
                                                  </svg>สามารถเข้าพบได้
                                                </a>
                                                <a class="dropdown-item" href="javascript:void(0)" id="notintheoffice">
                                                  <svg width="30" height="30" id="svg" >
                                                      <circle  cx="15" cy="15" r="5"  fill="#0099ff" stroke-width="3"/>
                                                  </svg>ไม่อยู่
                                                </a>
                                                <a class="dropdown-item" href="javascript:void(0)" id="beback">
                                                  <svg width="30" height="30" id="svg" >
                                                    <circle  cx="15" cy="15" r="5"  fill="#ffcc00" stroke-width="3"/>
                                                  </svg>กรุณารอสักครู่
                                               </a>
                                                <a class="dropdown-item" href="javascript:void(0)" id="dontdisturb">
                                                  <svg width="30" height="30" id="svg" >
                                                    <circle  cx="15" cy="15" r="5"  fill="#ff3300" stroke-width="3"/>
                                                  </svg>ห้ามรบกวน
                                                </a>
                                            </div>
                                        </div>
                                      </div>



                                    </center>

                                        </div>
                                      </div>

                                        <div class="card-block">
                                            <div class="card">
                                              <div class="card-block">
                                              <div class="form-group">
                                                <label for="nameProfile">ชื่อ - นามสกุล</label>
                                                    <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                                    <input id="nameProfile" type="text" class="form-control" disabled="true">
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                <label for="emailCreateUser" >อีเมล์</label>
                                                    <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-email"></i></div>
                                                    <input id="emailProfile" type="email"  class="form-control" disabled="true">
                                                  </div>
                                              </div>

                                              <div class="form-group">
                                                  <label for="phoneCreateUser">เบอร์โทรศัพท์</label>
                                                  <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-mobile"></i></div>
                                                      <input id="phoneProfile" type="text"  class="form-control" disabled="true">
                                                  </div>
                                              </div>

                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <button id="btUpdateProfile"class="btn btn-info waves-effect waves-ligh"><i class="ti ti-pencil-alt"></i>  แก้ไขข้อมูลส่วนตัว</button>
                                                        <button id="btUpdatePassword"class="btn btn-danger waves-effect waves-ligh"><i class="ti ti-lock"></i>  เปลี่ยนรหัสผ่าน</button>

                                                        <button id="btLoadingProfile" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
                                                        <button id="btSubmitUpdateProfile" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
                                                        <button id="btCancelUpdateProfile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> ยกเลิก</button>
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
                                          <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#hisEducation" role="tab"><span class="hidden-sm-up"><i class="ti-ruler-pencil"></i></span><span class="hidden-xs-down">ประวัติการศึกษา</span></a> </li>
                                          <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#hisWork" role="tab"><span class="hidden-sm-up"><i class="ti-briefcase"></i></span><span class="hidden-xs-down">ประวัติการทำงาน</span></a> </li>
                                          <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#academic" role="tab"><span class="hidden-sm-up"><i class="ti-cup"></i></span><span class="hidden-xs-down">ผลงานวิชาการ</span></a> </li>
                                      </ul>
                                      <!-- Tab panes -->
                                      <div class="tab-content">
                                          <div class="tab-pane active" id="hisEducation" role="tabpanel">
                                            <div class="card-block ">

                                                <div class="card-block bg-info">
                                                  <h4 class="text-white card-title"><span class="hidden-sm-up"><h5  class="text-white card-title">ประวัติกรศึกษา</h5></span><span class="hidden-xs-down">ประวัติการศึกษา</span></h4>
                                                        <div class="message-box contact-box">
                                                        <h2 class="add-ct-btn">
                                                          <button type="button" id="btOpenModalEdu" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>

                                                        </h2>
                                                      </div>
                                                      </div>

                                                    <form class="form-horizontal form-material ">
                                                      <div class="table-responsive">
                                                          <table id="tableHisEdu" class="table text-center color-bordered-table success-bordered-table">
                                                              <thead >
                                                                  <tr >
                                                                      <th class="text-center">แสดง</th>
                                                                      <th class="text-center">ปริญญา</th>
                                                                      <th class="text-center">สาขาวิชา</th>
                                                                      <th class="text-center">มหาวิทยลัย</th>
                                                                      <th class="text-center">ปีที่จบการศึกษา</th>
                                                                      <th class="text-center">จัดการ</th>
                                                                  </tr>
                                                              </thead>
                                                              <tbody id="list_his_education" class="list_his_education">

                                                              </tbody>
                                                          </table>
                                                      </div>
                                                    </form>
                                                  <br>
                                                  <div class="card-block bg-info">
                                                    <h4 class="text-white card-title"> ความเชี่ยวชาญ </h4>
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
                                                                    <th class="text-center">รายละเอีดยงาน</th>
                                                                    <th class="text-center">จัดการ</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="list_his_work">

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                  </form>
                                                  <div class="card-block bg-info">
                                                    <h4 class="text-white card-title">ประสบการณ์</h4>
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
                                        <div class="card-block">
                                          <h3 class="text-left">ประเภทผลงาน (กรุณาเลือก)</h3>
                                        <select id="selectAcdemicWork" class="form-control">
                                          <option>ผลงานที่ได้รับรางวัลระดับนานาชาติ</option>
                                          <option>ผลงานที่ได้รับรางวัลระดับชาติ</option>
                                          <option>วารสารระดับชาติ</option>
                                          <option>วารสารระดับนานาชาติที่ไม่อยู่ในฐานข้อมูลสากล</option>
                                          <option>วารสารระดับนานาชาติที่อยู่ในฐานข้อมูลสากล</option>
                                          <option>การประชุมระดับชาติ</option>
                                          <option>การประชุมระดับนานาชาติ</option>
                                        </select>
                                      </div>
                                      </div>
                                  </div>

                                  <div id="headInterWork" class="card-block bg-info">

                                    <h4 class="text-white card-title">ผลงานที่ได้รับรางวัลระดับนานาชาติ</h4>

                                      <div class="message-box contact-box">
                                        <select id="selectWorkInterPrevious" class="form-control col-lg-6 ">
                                          <option>ดูผลงานที่ได้รับรางวัลระดับนานาชาติย้อนหลัง</option>
                                          <option>ย้อนหลัง 5 ปี</option>
                                          <option>ย้อนหลัง 10 ปี</option>
                                        </select>
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
                                                      <th class="text-center">รายละเอียด</th>
                                                      <th class="text-center">หน่วยงานที่ได้รับรางวัล</th>
                                                      <th class="text-center">วันที่</th>
                                                      <th class="text-center">จัดการ</th>
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
                                          <select id="selectJourNationPrevious" class="form-control col-lg-4 ">
                                            <option>ดูวารสารระดับชาติย้อนหลัง</option>
                                            <option>ย้อนหลัง 5 ปี</option>
                                            <option>ย้อนหลัง 10 ปี</option>
                                          </select>
                                            <h2 class="add-ct-btn">
                                              <button type="button" id="btOpenModalNationJournal" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
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
                                                        <th class="text-center">สถานะผู้เขียนบทความ</th>
                                                          <th class="text-center">รหัส-ชื่อโครงการวิจัย</th>
                                                        <th class="text-center">ชื่อวารสาร</th>
                                                        <th class="text-center">ประเภทบทความ</th>
                                                        <th class="text-center">ปีที่พิมพ์</th>
                                                        <th class="text-center">ฉบับที่</th>
                                                        <th class="text-center">จัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="list_nation_jour">

                                                </tbody>
                                            </table>
                                        </div>
                                      </form>

                                      <div id="headInterJourNotDatabase" class="card-block bg-info">
                                        <h4 class="text-white card-title">วารสารระดับนานาชาติที่ไม่อยู่ในฐานข้อมูลสากล</h4>
                                          <div class="message-box contact-box">
                                            <select id="selectJourInterNotBasePrevious" class="form-control col-lg-6 ">
                                              <option>ดูวารสารระดับชาติย้อนหลัง</option>
                                              <option>ย้อนหลัง 5 ปี</option>
                                              <option>ย้อนหลัง 10 ปี</option>
                                            </select>
                                              <h2 class="add-ct-btn">
                                                <button type="button" id="btOpenModalInterJournalNotDatabase" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                              </h2>
                                          </div>
                                        </div>
                                        <form class="form-horizontal form-material ">
                                          <div class="table-responsive">
                                              <table id="tableInterJourNotDatabase" class="table text-center color-bordered-table success-bordered-table">
                                                  <thead >
                                                      <tr >
                                                        <th class="text-center">แสดง</th>
                                                        <th class="text-center">ชื่อบทความ</th>
                                                        <th class="text-center">สถานะผู้เขียนบทความ</th>
                                                          <th class="text-center">รหัส-ชื่อโครงการวิจัย</th>
                                                        <th class="text-center">ชื่อวารสาร</th>
                                                        <th class="text-center">ประเภทบทความ</th>
                                                        <th class="text-center">ปีที่พิมพ์</th>
                                                        <th class="text-center">ฉบับที่</th>
                                                        <th class="text-center">จัดการ</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody id="list_inter_jour_not_database">

                                                  </tbody>
                                              </table>
                                          </div>
                                        </form>

                                        <div id="headInterJourInDatabase" class="card-block bg-info">

                                          <h4 class="text-white card-title">วารสารระดับนานาชาติที่อยู่ในฐานข้อมูลสากล</h4>
                                            <div class="message-box contact-box">
                                              <select id="selectJourInterInBasePrevious" class="form-control col-lg-6 ">
                                                <option>ดูวารสารระดับชาติย้อนหลัง</option>
                                                <option>ย้อนหลัง 5 ปี</option>
                                                <option>ย้อนหลัง 10 ปี</option>
                                              </select>
                                                <h2 class="add-ct-btn">
                                                  <button type="button" id="btOpenModalInterJournalInDatabase" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                </h2>
                                            </div>
                                          </div>
                                          <form class="form-horizontal form-material ">
                                            <div class="table-responsive">
                                                <table id="tableInterJourInDatabase" class="table text-center color-bordered-table success-bordered-table">
                                                    <thead >
                                                        <tr >
                                                          <th class="text-center">แสดง</th>
                                                          <th class="text-center">ชื่อบทความ</th>
                                                          <th class="text-center">สถานะผู้เขียนบทความ</th>
                                                          <th class="text-center">รหัส-ชื่อโครงการวิจัย</th>
                                                          <th class="text-center">ชื่อวารสาร</th>
                                                          <th class="text-center">ประเภทบทความ</th>
                                                          <th class="text-center">ปีที่พิมพ์</th>
                                                          <th class="text-center">ฉบับที่</th>
                                                          <th class="text-center">จัดการ</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="list_inter_jour_in_database">

                                                    </tbody>
                                                </table>
                                            </div>
                                          </form>

                                        <div id="headNationWork" class="card-block bg-info">
                                          <h4 class="text-white card-title">ผลงานที่ได้รับรางวัลระดับชาติ</h4>
                                            <div class="message-box contact-box">
                                              <select id="selectWorkNationPrevious" class="form-control col-lg-6 ">
                                                <option>ดูวารสารระดับชาติย้อนหลัง</option>
                                                <option>ย้อนหลัง 5 ปี</option>
                                                <option>ย้อนหลัง 10 ปี</option>
                                              </select>
                                                <h2 class="add-ct-btn">
                                                  <button type="button" id="btOpenModalNationWork" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                </h2>
                                            </div>
                                          </div>
                                          <form class="form-horizontal form-material ">
                                            <div class="table-responsive">
                                                <table id="tableNationWork" class="table text-center color-bordered-table success-bordered-table">
                                                    <thead >
                                                        <tr >
                                                          <th class="text-center">แสดง</th>
                                                          <th class="text-center">ชื่อรางวัล</th>
                                                          <th class="text-center">ชื่อผลงาน</th>
                                                          <th class="text-center">รายละเอียด</th>
                                                          <th class="text-center">หน่วยงานที่ได้รับรางวัล</th>
                                                          <th class="text-center">วันที่</th>
                                                            <th class="text-center">จัดการ</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="list_nation_work">

                                                    </tbody>
                                                </table>
                                            </div>
                                          </form>


                                          <div id="headNationConference" class="card-block bg-info">
                                            <h4 class="text-white card-title">การประชุมระดับชาติ</h4>
                                              <div class="message-box contact-box">
                                                <select id="selectConferenceNationPrevious" class="form-control col-lg-6 ">
                                                  <option>ดูวารสารระดับชาติย้อนหลัง</option>
                                                  <option>ย้อนหลัง 5 ปี</option>
                                                  <option>ย้อนหลัง 10 ปี</option>
                                                </select>
                                                  <h2 class="add-ct-btn">
                                                    <button type="button" id="btOpenModalNationConference" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                  </h2>
                                              </div>
                                            </div>
                                            <form class="form-horizontal form-material ">
                                              <div class="table-responsive">
                                                  <table id="tableNationConference" class="table text-center color-bordered-table success-bordered-table">
                                                      <thead >
                                                          <tr >
                                                            <th class="text-center">แสดง</th>
                                                            <th class="text-center">ประเภทบทความ</th>
                                                            <th class="text-center">ชื่อไทย</th>
                                                            <th class="text-center">ชื่ออังกฤษ</th>
                                                            <th class="text-center">ปีที่พิมพ์</th>
                                                            <th class="text-center">รหัส-ชื่อโครงการวิจัย</th>
                                                            <th class="text-center">ชื่อการประชุม</th>
                                                            <th class="text-center">วันที่เริ่มต้น</th>
                                                            <th class="text-center">วันที่สิ้นสุด</th>
                                                            <th class="text-center">สถานที่จัดงาน</th>
                                                            <th class="text-center">ประเทศ</th>
                                                            <th class="text-center">จัดการ</th>
                                                          </tr>
                                                      </thead>
                                                      <tbody id="list_nation_conference">

                                                      </tbody>
                                                  </table>
                                              </div>
                                            </form>

                                            <div id="headInterConference" class="card-block bg-info">
                                              <h4 class="text-white card-title">การประชุมระดับนานาชาติ</h4>
                                                <div class="message-box contact-box">
                                                  <select id="selectConferenceInterPrevious" class="form-control col-lg-6 ">
                                                    <option>ดูวารสารระดับชาติย้อนหลัง</option>
                                                    <option>ย้อนหลัง 5 ปี</option>
                                                    <option>ย้อนหลัง 10 ปี</option>
                                                  </select>
                                                    <h2 class="add-ct-btn">
                                                      <button type="button" id="btOpenModalInterConference" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                    </h2>
                                                </div>
                                              </div>
                                              <form class="form-horizontal form-material ">
                                                <div class="table-responsive">
                                                    <table id="tableInterConference" class="table text-center color-bordered-table success-bordered-table">
                                                        <thead >
                                                            <tr >
                                                              <th class="text-center">แสดง</th>
                                                              <th class="text-center">ประเภทบทความ</th>
                                                              <th class="text-center">ชื่อไทย</th>
                                                              <th class="text-center">ชื่ออังกฤษ</th>
                                                              <th class="text-center">ปีที่พิมพ์</th>
                                                              <th class="text-center">รหัส-ชื่อโครงการวิจัย</th>
                                                              <th class="text-center">ชื่อการประชุม</th>
                                                              <th class="text-center">วันที่เริ่มต้น</th>
                                                              <th class="text-center">วันที่สิ้นสุด</th>
                                                              <th class="text-center">สถานที่จัดงาน</th>
                                                              <th class="text-center">ประเทศ</th>
                                                              <th class="text-center">จัดการ</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="list_inter_conference">

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

                                <div class="card-block">
                                  <div class="card">
                                    <ul class="nav nav-tabs profile-tab" role="tablist">
                                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#freetime" role="tab" aria-expanded="true"><span class="hidden-sm-up"><i class="ti-calendar"></i></span><span class="hidden-xs-down">ตารางการเข้าพบ</span></a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#subject" role="tab"><span class="hidden-sm-up"><i class="ti-comment-alt"></i></span><span class="hidden-xs-down">วิชาที่สอน</span></a> </li>
                                    </ul>
                                    <div class="tab-content tabcontent-border">
                                        <div class="tab-pane active" id="freetime" role="tabpanel" aria-expanded="true">
                                    <div class="card-block">
                                      <div class="table-responsive">
                                    <table class="table table-bordered text-center" >
                                      <thead >

                                        <th ><h6>Date / Time</h6></th>
                                        <th ><h6>8:30-9:00</h6></th>
                                        <th><h6>9:00-10:00</h6></th>
                                        <th><h6>5:00-6:00</h6></th>
                                        <th><h6>11:00-12:00</h6></th>
                                        <th><h6>13:00-14:00</h6></th>
                                        <th><h6>14:00-15:00</h6></th>
                                        <th><h6>15:00-16:00</h6></th>
                                        <th><h6>16:00-16:30</h6></th>

                                      </thead>
                                      <tbody id="list_day" disabled="true">

                                      <tbody>
                                    </table>
                                  </div>
                                  </div>
                                </div>
                                <div class="tab-pane " id="subject" role="tabpanel" aria-expanded="true">
                            <div class="card-block">
                              <br>
                              <div id="headSubject" class="card-block ">
                                  <div class="message-box contact-box">
                                      <h2 class="add-ct-btn">
                                        <button type="button" id="btOpenModalSubjectAdd" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                      </h2>
                                  </div>
                                </div>
                              <div class="table-responsive">
                            <table class="table  text-center" >
                              <thead >
                                <th class="text-center">ภาคการศึกษา</th>
                                <th class="text-center">รหัสวิชา</th>
                                <th class="text-center">ชื่อวิชา</th>
                                <th class="text-center">หน่วยกิต</th>
                                <th class="text-center">จัดการ</th>
                              </thead>
                              <tbody id="list_subject">

                              <tbody>
                            </table>
                          </div>
                          </div>
                        </div>
                              </div>
                                  </div>
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
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8j_1h5wkEyz5GVQcc8uqMiSDZwFZkuNs" type="text/javascript"></script>

</body>

</html>
