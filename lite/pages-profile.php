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
                              <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#profile" role="tab">Profile</a> </li>
                              <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#history" role="tab">History | Working</a> </li>
                              <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#office" role="tab">Office Hours</a> </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="tab-content">
                              <div class="tab-pane active" id="profile" role="tabpanel">

                                        <div class="col-lg-12">
                                  <div class="row">
                                  <div class="card-block ">
                                    <div class="card">
                                      <center class="m-t-30">

                                         <img id="imageProfile"  src="../assets/images/users/user.png"  class="img-circle" width="180"/>

                                            <h4 class="card-title m-t-10"></h4>

                                            <svg height="40" width="40">

                                                <circle id="statusProfile" cx="20" cy="20" r="10"  fill="#BDBDBD" stroke-width="3"/>
                                            </svg>
                                            <h6 id="statusOffice" class="card-subtitle"></h6>

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
                                          <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#hisEducation" role="tab">History Education</a> </li>
                                          <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#hisWork" role="tab">History Work</a> </li>
                                          <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#academic" role="tab">Academic Work</a> </li>
                                      </ul>
                                      <!-- Tab panes -->
                                      <div class="tab-content">
                                          <div class="tab-pane active" id="hisEducation" role="tabpanel">
                                            <div class="card-block ">

                                                <div class="card-block bg-info">
                                                  <h4 class="text-white card-title"> History Education</h4>
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
                                                                      <th class="text-center">Show</th>
                                                                      <th class="text-center">Degree</th>
                                                                      <th class="text-center">Faculty</th>
                                                                      <th class="text-center">University</th>
                                                                      <th class="text-center">Graduation</th>
                                                                      <th class="text-center">Actions</th>
                                                                  </tr>
                                                              </thead>
                                                              <tbody id="list_his_education" class="list_his_education">

                                                              </tbody>
                                                          </table>
                                                      </div>
                                                    </form>
                                                  <br>
                                                  <div class="card-block bg-info">
                                                    <h4 class="text-white card-title"> Expertise </h4>
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
                                                                        <th class="text-center">Show</th>
                                                                        <th class="text-center">Detail</th>
                                                                        <th class="text-center">Manage</th>
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
                                                  <h4 class="text-white card-title">History Work</h4>
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
                                                                    <th class="text-center">Show</th>
                                                                    <th class="text-center">Time Length</th>
                                                                    <th class="text-center">Workplace</th>
                                                                    <th class="text-center">Work Details</th>
                                                                    <th class="text-center">Manage</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody id="list_his_work">

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                  </form>
                                                  <div class="card-block bg-info">
                                                    <h4 class="text-white card-title">Experience</h4>
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
                                                                    <th class="text-center">Show</th>
                                                                    <th class="text-center">Experience</th>
                                                                    <th class="text-center">Time Length</th>
                                                                    <th class="text-center">Details</th>
                                                                    <th class="text-center">Manage</th>
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
                                            <li id="research" ><a href="javascript:void(0)"><i id="iconResearch" class="fa fa-chevron-right"></i> Complete Certified Research</a></li>
                                            <li id="interJourInDatabase"><a href="javascript:void(0)"><i id="iconInterJourInDatabase" class="fa fa-chevron-right"></i>International journals are available in international databases.</a></li>
                                            <li id="nationWork"><a href="javascript:void(0)"><i id="iconNationWork" class="fa fa-chevron-right"></i>National Award Winners</a></li>
                                            <li id="interWork" ><a href="javascript:void(0)"><i id="iconInterWork" class="fa fa-chevron-right"></i>International Award Winners</a></li>
                                            </ul>
                                         </div>
                                      <div class="col-md-6">
                                            <ul class="list-icons">
                                            <li id="nationMeet"><a href="javascript:void(0)"><i id="iconNationMeet" class="fa fa-chevron-right"></i> National Conference</a></li>
                                            <li id="interMeet"><a href="javascript:void(0)"><i id="iconInterMeet" class="fa fa-chevron-right"></i> International Conference</a></li>
                                            <li id="nationJour"><a href="javascript:void(0)"><i id="iconNationJour" class="fa fa-chevron-right"></i> National Journal</a></li>
                                            <li id="interJourNotDatabase"><a href="javascript:void(0)"><i id="iconInterJourNotDatabase" class="fa fa-chevron-right"></i> International journals not in the international database.</a></li>
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
                                              <button type="button" id="btOpenModalNationJour" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
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

                                      <div id="headInterJourNotDatabase" class="card-block bg-info">
                                        <h4 class="text-white card-title">วารสารระดับนานาชาติที่ไม่อยู่ในฐานข้อมูลสากล</h4>
                                          <div class="message-box contact-box">
                                              <h2 class="add-ct-btn">
                                                <button type="button" id="btOpenModalInterJourNotDatabase" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
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
                                                          <th class="text-center">ชื่อวารสาร</th>
                                                          <th class="text-center">ประเภทบทความ</th>
                                                          <th class="text-center">ปีที่พิมพ์</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody id="list_inter_jour_not_database">

                                                  </tbody>
                                              </table>
                                          </div>
                                        </form>

                                        <div id="headNationWork" class="card-block bg-info">
                                          <h4 class="text-white card-title">ผลงานที่ได้รับรางวัลระดับชาติ</h4>
                                            <div class="message-box contact-box">
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
                                                          <th class="text-center">หน่วยงานที่ได้รับรางวัล</th>
                                                          <th class="text-center">ค่าภาระงานที่ได้รับ</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="list_nation_work">

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
                                          <input type="radio" name="status" id="radioAvai" class="with-gap radio-col-light-green" >
                                          <label for="radioAvai">Available</label>
                                          <input type="radio" name="status" id="radioNotOffice" class="with-gap radio-col-light-blue" >
                                          <label for="radioNotOffice">Not in the Office</label>
                                          <input type="radio" name="status" id="radioBeBack" class="with-gap radio-col-amber" >
                                          <label for="radioBeBack">Be back</label>
                                          <input type="radio" name="status" id="radioDontDisturb" class="with-gap radio-col-red" >
                                          <label for="radioDontDisturb">Don't Disturb</label>
                                        </div>
                                        <center class="m-t-30">

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

    <!--==================================== Add History Education ================================================-->

    <div class="modal fade" id="addHisEduModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">History Education</h4>
          </div>
          <div class="modal-body">
            <div id="degree" class="form-group">
              <label for="degreeHisEdu">Degree</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
                  <select id="degreeHisEdu" class="form-control ">
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>Doctorate</option>
                  </select>
                </div>
            </div>
            <div id="faculty" class="form-group">
              <label for="facultyHisEdu" >Faculty</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                  <input id="facultyHisEdu" type="email"  class="form-control" >
                </div>
            </div>

            <div id="university" class="form-group">
                <label for="universityHisEdu">University</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="ti-flag-alt"></i></div>
                    <input id="universityHisEdu" type="text"  class="form-control" >
                </div>
            </div>

            <div id="year" class="form-group">
                <label for="yearHisEdu">Graduation Year</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="ti-calendar"></i></div>
                    <input id="yearHisEdu" type="text"  class="form-control" >
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button id="btSubmitEdu" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!--===========================================================================================================-->

    <?php include('modal-profile.php')?>
    <?php include('import-javascript.php')?>
    <script src="../js/profile.js"></script>


</body>

</html>
