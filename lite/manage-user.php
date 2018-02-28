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

    <style>
    .results-teacher tr[visible='false'],
    .no-result-teacher{
      display:none;
    }

    .results-teacher tr[visible='true']{
      display:table-row;
    }

    .results-staff tr[visible='false'],
    .no-result-staff{
      display:none;
    }

    .results-staff tr[visible='true']{
      display:table-row;
    }

    .results-ta tr[visible='false'],
    .no-result-ta{
      display:none;
    }

    .results-ta tr[visible='true']{
      display:table-row;
    }

    .avatar {
    width:100px;
    margin: 10px;
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
}

  #list_teacher td{
   text-align:center;
   vertical-align:middle;
  }
  #list_staff td{
   text-align:center;
   vertical-align:middle;
  }
  #list_ta td{
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
                <h3 class="text-themecolor m-b-0 m-t-0">จัดการผู้ใช้ในระบบ</h3>
                  </div>
                </div>
                <!-- Row -->

                <div class="row">

                    <div hidden id="teacher" class="col-md-12">
                      <div class="card">
                        <div class="card-block">
                          <div class="row">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                            </div>

                          </div>
                        <div class="card-block">
                          <div class="col-md-4">

                          <div class="form-group">
                            <h1 class="text-left">คณาจารย์</h1>
                            <span class="counter-teacher pull-right"></span>
                              <div class="input-group">
                                <div class="input-group-addon"><i class="ti-search"></i></div>
                                <input id="searchTeacher" type="text"  class="form-control" >
                              </div>
                            </div>
                          </div>
                          <h4 class="text-black card-title"></h4>
                          <div class="message-box contact-box">
                          <h2 class="add-ct-btn">
                            <button type="button" id="btAddUser" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                          </h2>
                        </div>
                      </div>

                              <form class="form-horizontal form-material ">
                                <div class="table-responsive">
                                    <table class="table text-center results-teacher table-hover" >
                                        <thead >
                                            <tr >
                                              <th class="text-center">รูปภาพ</th>
                                                <th class="text-center">ชื่อ-นามสกุล</th>
                                                <th class="text-center">อีเมลล์</th>
                                                <th class="text-center">หมายเลขโทรศัพท์</th>
                                                <th class="text-center">จัดการ</th>
                                            </tr>
                                            <tr class="warning no-result-teacher">
                                              <td colspan="6"><i class="fa fa-warning"></i> ไม่มีข้อมูล</td>
                                            </tr>

                                        </thead>
                                        <tbody id="list_teacher">

                                        </tbody>
                                    </table>
                                </div>
                              </form>

                            </div>
                      </div>
                    </div>

                    <div hidden id="staff" class="col-md-12">
                      <div class="card">
                        <div class="card-block">
                          <div class="row">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                            </div>

                          </div>
                        <div class="card-block">
                          <div class="col-md-4">

                          <div class="form-group">
                            <h1 class="text-left">เจ้าหน้าที่บริหารงานทั่วไป</h1>
                            <span class="counter-staff pull-right"></span>
                              <div class="input-group">
                                <div class="input-group-addon"><i class="ti-search"></i></div>
                                <input id="searchStaff" type="text"  class="form-control" >
                              </div>
                            </div>
                          </div>
                          <h4 class="text-black card-title"></h4>

                      </div>

                              <form class="form-horizontal form-material ">
                                <div class="table-responsive">
                                    <table class="table text-center results-staff table-hover" >
                                        <thead >
                                            <tr >
                                              <th class="text-center">รูปภาพ</th>
                                                <th class="text-center">ชื่อ-นามสกุล</th>
                                                <th class="text-center">อีเมลล์</th>
                                                <th class="text-center">หมายเลขโทรศัพท์</th>
                                                <th class="text-center">จัดการ</th>
                                            </tr>
                                            <tr class="warning no-result-staff">
                                              <td colspan="6"><i class="fa fa-warning"></i> ไม่มีข้อมูล</td>
                                            </tr>

                                        </thead>
                                        <tbody id="list_staff">

                                        </tbody>
                                    </table>
                                </div>
                              </form>

                            </div>
                      </div>
                    </div>


                    <div hidden id="ta" class="col-md-12">
                      <div class="card">
                        <div class="card-block">
                          <div class="row">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                            </div>

                          </div>
                        <div class="card-block">
                          <div class="col-md-4">

                          <div class="form-group">
                            <h1 class="text-left">ผู้ช่วยสอนและวิจัย</h1>
                            <span class="counter-ta pull-right"></span>
                              <div class="input-group">
                                <div class="input-group-addon"><i class="ti-search"></i></div>
                                <input id="searchTa" type="text"  class="form-control" >
                              </div>
                            </div>
                          </div>
                          <h4 class="text-black card-title"></h4>
                      </div>

                              <form class="form-horizontal form-material ">
                                <div class="table-responsive">
                                    <table class="table text-center results-ta table-hover" >
                                        <thead >
                                            <tr >
                                              <th class="text-center">รูปภาพ</th>
                                                <th class="text-center">ชื่อ-นามสกุล</th>
                                                <th class="text-center">อีเมลล์</th>
                                                <th class="text-center">หมายเลขโทรศัพท์</th>
                                                <th class="text-center">จัดการ</th>
                                            </tr>
                                            <tr class="warning no-result-ta">
                                              <td colspan="6"><i class="fa fa-warning"></i> ไม่มีข้อมูล</td>
                                            </tr>

                                        </thead>
                                        <tbody id="list_ta">

                                        </tbody>
                                    </table>
                                </div>
                              </form>

                            </div>
                      </div>
                    </div>


                </div>
            </div>
    <footer class="footer text-center"><h6>Copyright © Information Technology 2017</h6></footer>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="waitModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="messageModalWait">Message</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">ปิด</button>
          </div>
        </div>
      </div>
    </div>

    <!--==================================== Delete ====================================================-->

    <div class="modal fade" id="deleteUserModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messagePassModal">ลบสำเร็จ</h4>
          </div>
          <div class="modal-footer">
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">ปิด</button>
          </div>
        </div>
      </div>
    </div>

    <!--================================================================================================-->

    <!--==================================== Delete Teacher ====================================================-->

    <div class="modal fade" id="confrimDeleteTeacherModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" >ต้องการลบผู้ใช้คนนี้ ?</h4>
          </div>
          <div class="modal-footer">
            <button id="btConfrimTeacherDelete" class="btn btn-success" data-dismiss="modal">ตกลง</button>
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

    <!--================================================================================================-->

    <!--==================================== Delete Staff ====================================================-->

    <div class="modal fade" id="confrimDeleteStaffModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" >ต้องการลบผู้ใช้คนนี้ ?</h4>
          </div>
          <div class="modal-footer">
            <button id="btConfrimStaffDelete" class="btn btn-success" data-dismiss="modal">ตกลง</button>
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

    <!--================================================================================================-->

    <!--==================================== Delete Ta ====================================================-->

    <div class="modal fade" id="confrimDeleteTaModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" >ต้องการลบผู้ใช้คนนี้ ?</h4>
          </div>
          <div class="modal-footer">
            <button id="btConfrimTaDelete" class="btn btn-success" data-dismiss="modal">ตกลง</button>
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

    <!--================================================================================================-->

    <!-- Modal -->
    <div class="modal fade" id="addUserModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">ผู้ใช้ในระบบ (เพิ่ม)</h4>
          </div>
            <br>
         <!-- Column -->
    <div class="modal-body">
    <div class="col-md-12">

          <form class="form-horizontal">
            <div class="row">
              <div class="col-lg-12 text-center">
              <img id="imgShowCreate" class="img-show">
            </div>
                </div>
            <div class="form-group">
              <label for="nameCreateUser">รูปภาพประจำตัว</label>
              <div class="col-md-12">
                  <div class="form-group text-center">
                      <div class="input-group">
                          <span class="input-group-btn">
                              <span class="btn btn-secondary btn-file">
                                  เลือกรูปภาพ <input type="file" class="file-upload" id="fileUploadImageCreateUser" >
                              </span>
                          </span>
                          <input type="text" class="form-control" id="urlUploadImageCreateUser" required readonly>
                      </div>

                  </div>
              </div>
            </div>

            <div class="form-group">
              <label >เลือกบทบาท</label>
                  <select id="rankCreateUser" class="form-control form-control-line" required>
                      <option>กรุณาเลือกบทบาท</option>
                      <option>คณาจารย์และบุคลากร</option>
                      <option>เจ้าหน้าที่บริหารงานทั่วไป</option>
                      <option>ผู้ช่วยสอนและวิจัย</option>
                  </select>
            </div>

            <div hidden id="leader" class="form-group">
                <label class="col-md-12">ระดับ</label>
                <div class="col-md-12">
                  <div class="row">
                    <div class="demo-checkbox" style="margin-left: 23px;margin-top: 20px;">
                      <input type="checkbox" id="leaderCreateUser" class="chk-col-grey" >
                      <label for="leaderCreateUser">หัวหน้าสาขา</label>
                    </div>
                  </div>
                </div>
            </div>

            <div hidden id="position" class="form-group">
              <label for="nameCreateUser">ตำแหน่ง</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-crown"></i></div>
                  <select id="positionCreateUser" required class="form-control">
                    <option></option>
                    <option>ผู้ช่วยศาสตราจารย์ ดอกเตอร์ (ผศ. ดร.)</option>
                    <option>รองศาสตราจารย์ ดอกเตอร์ (รศ. ดร.)</option>
                    <option>อาจารย์ ดอกเตอร์ (อ. ดร.)</option>
                    <option>อาจารย์ (อ.)</option>
                  </select>
                </div>
            </div>

            <div class="form-group">
              <label for="nameCreateUser">ชื่อ - นามสกุล</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-user"></i></div>
                  <input id="nameCreateUser" disabled="true" type="text" class="form-control" required>
                </div>
            </div>

            <div class="form-group">
              <label for="emailCreateUser" >อีเมล์</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-email"></i></div>
                  <input id="emailCreateUser" disabled="true" type="email"  class="form-control " required>
                </div>
            </div>

            <div class="form-group">
              <label for="emailCreateUser" >อายุ</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-id-badge"></i></div>
                  <input id="ageCreateUser" disabled="true" type="number"  class="form-control" required>
                </div>
            </div>

            <div class="form-group">
              <label for="passwordCreateUser">รหัสผ่าน</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="ti-lock"></i></div>
                  <input id="passwordCreateUser" disabled="true" type="password"  class="form-control" required>
              </div>
            </div>

            <div class="form-group">
                <label for="phoneCreateUser">หมายเลขโทรศัพท์</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="ti-mobile"></i></div>
                    <input id="phoneCreateUser" disabled="true" type="tel"  class="form-control" required>
                </div>
            </div>

            </form>
      </div>
    </div>
    <div class="modal-footer">
      <button hidden id="btCreateUser"  type="submit" class="btn btn-success waves-effect waves-light m-r-5"><i class="fa fa-check"></i> บันทึก</button>
      <button  class="btn btn-inverse" data-dismiss="modal">ยกเลิก</button>
    </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="editUserModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="messageModalLabel">ผู้ใช้ในระบบ (แก้ไข)</h4>
      </div>
        <br>
     <!-- Column -->
<div class="modal-body">
<div class="col-md-12">

      <form class="form-horizontal">
      <div class="row">
        <div class="col-lg-12 text-center">
        <img id="imgShowEdit" class="img-show">
      </div>
          </div>
      <br>
        <div class="form-group">
          <label for="nameCreateUser">รูปภาพประจำตัว</label>
            <div class="col-md-12">
                <div class="form-group text-center">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <span class="btn btn-secondary btn-file">
                                เลือกรูปภาพ <input type="file" class="file-upload" id="fileUploadImageEditUser" >
                            </span>
                        </span>
                        <input type="text" class="form-control" readonly>
                    </div>

                </div>
            </div>
        </div>

        <div  class="form-group">
            <label class="col-md-12">ระดับ</label>
            <div class="col-md-12">
              <div class="row">
                <div class="demo-checkbox" style="margin-left: 23px;margin-top: 20px;">
                  <input type="checkbox" id="leaderEditUser" class="chk-col-grey" >
                  <label for="leaderEditUser">หัวหน้าสาขา</label>
                </div>
              </div>
            </div>
        </div>

        <div hidden id="positionForEdit" class="form-group">
          <label for="nameCreateUser">ตำแหน่ง</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-crown"></i></div>
              <select id="positionEditUser" required class="form-control">
                <option></option>
                <option>ผู้ช่วยศาสตราจารย์ ดอกเตอร์ (ผศ. ดร.)</option>
                <option>รองศาสตราจารย์ ดอกเตอร์ (รศ. ดร.)</option>
                <option>อาจารย์ ดอกเตอร์ (อ. ดร.)</option>
                <option>อาจารย์ (อ.)</option>
              </select>
            </div>
        </div>

        <div class="form-group">
          <label for="nameCreateUser">ชื่อ - นามสกุล</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-user"></i></div>
              <input id="nameEditUser" type="text" class="form-control">
            </div>
        </div>

        <div class="form-group">
          <label for="emailCreateUser" >อีเมล์</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-email"></i></div>
              <input id="emailEditUser" type="email"  class="form-control " >
            </div>
        </div>


        <div class="form-group">
            <label for="phoneCreateUser">เบอร์โทรศัพท์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-mobile"></i></div>
                <input id="phoneEditUser" type="text"  class="form-control">
            </div>
        </div>
        </form>
  </div>
</div>
<div class="modal-footer">
  <button id="btEditUser" type="submit" class="btn btn-success waves-effect waves-light m-r-5"><i class="fa fa-check"></i> บันทึก</button>
  <button   type="submit" class="btn btn-inverse" data-dismiss="modal">ยกเลิก</button>
</div>
</div>
</div>
</div>

<!-- Modal -->
<div class="modal fade" id="notifyInput" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" >การแจ้งเตือน</h4>
      </div>
<div class="modal-body">
  <h4>กรุณากรอกข้อมูลให้ครบ</h4>
</div>
<div class="modal-footer">
  <button   type="submit" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
</div>
</div>
</div>
</div>


    <?php include('import-javascript.php')?>
    <script src="../js/manage-user.js"></script>

</body>

</html>
