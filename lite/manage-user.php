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
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">จัดการสมาชิกในระบบ</a></li>
                            <li class="breadcrumb-item active">จัดการ</li>
                        </ol>
                    </div>
                </div>
                <!-- Row -->

                <div class="row">

                    <div class="col-md-12">
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
                            <span class="counter pull-right"></span>
                              <div class="input-group">
                                <div class="input-group-addon"><i class="ti-search"></i></div>
                                <input id="searchUser" type="text"  class="form-control" >
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
                                    <table class="table text-center results table-hover" >
                                        <thead >
                                            <tr >
                                              <th class="text-center">รูปภาพ</th>
                                                <th class="text-center">ชื่อ-นามสกุล</th>
                                                <th class="text-center">อีเมลล์</th>
                                                <th class="text-center">หมายเลขโทรศัพท์</th>
                                                <th class="text-center">จัดการ</th>
                                            </tr>
                                            <tr class="warning no-result">
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

                    <div class="col-md-12">
                      <div class="card">
                        <div class="card-block">
                          <div class="row">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                            </div>

                          </div>
                        <div class="card-block">
                          <div class="col-md-5">

                          <div class="form-group">
                            <h1 class="text-left">เจ้าหน้าที่บริหารงานทั่วไป</h1>
                            <span class="counter pull-right"></span>
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
                                    <table class="table text-center results table-hover" >
                                        <thead >
                                            <tr >
                                              <th class="text-center">รูปภาพ</th>
                                                <th class="text-center">ชื่อ-นามสกุล</th>
                                                <th class="text-center">อีเมลล์</th>
                                                <th class="text-center">หมายเลขโทรศัพท์</th>
                                                <th class="text-center">จัดการ</th>
                                            </tr>
                                            <tr class="warning no-result">
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


                    <div class="col-md-12">
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
                            <span class="counter pull-right"></span>
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
                                    <table class="table text-center results table-hover" >
                                        <thead >
                                            <tr >
                                              <th class="text-center">รูปภาพ</th>
                                                <th class="text-center">ชื่อ-นามสกุล</th>
                                                <th class="text-center">อีเมลล์</th>
                                                <th class="text-center">หมายเลขโทรศัพท์</th>
                                                <th class="text-center">จัดการ</th>
                                            </tr>
                                            <tr class="warning no-result">
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
            <footer class="footer">
                Copyright © Information Technology 2017
            </footer>
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

    <!--==================================== Delete ====================================================-->

    <div class="modal fade" id="confrimDeleteTaModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" >ต้องการลบผู้ใช้คนนี้ ?</h4>
          </div>
          <div class="modal-footer">
            <button id="btConfrimDelete" class="btn btn-success" data-dismiss="modal">ตกลง</button>
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
            <div class="form-group">
              <label for="nameCreateUser">รูปภาพประจำตัว</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-image"></i></div>
                  <input class="form-control" type="file" id="fileUploadImageCreateUser"><hr>
                </div>
            </div>

            <div class="form-group">
              <label for="nameCreateUser">ชื่อ - นามสกุล</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-user"></i></div>
                  <input id="nameCreateUser" type="text" class="form-control">
                </div>
            </div>

            <div class="form-group">
              <label for="emailCreateUser" >อีเมล์</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-email"></i></div>
                  <input id="emailCreateUser" type="email"  class="form-control " >
                </div>
            </div>

            <div class="form-group">
              <label for="passwordCreateUser">รหัสผ่าน</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="ti-lock"></i></div>
                  <input id="passwordCreateUser" type="password"  class="form-control ">
              </div>
            </div>

            <div class="form-group">
                <label for="phoneCreateUser">หมายเลขโทรศัพท์</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="ti-mobile"></i></div>
                    <input id="phoneCreateUser" type="text"  class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label >เลือกบทบาท</label>
                    <select id="rankCreateUser" class="form-control form-control-line">
                        <option>คณาจารย์และบุคลากร</option>
                        <option>เจ้าหน้าที่บริหารงานทั่วไป</option>
                        <option>ผู้ช่วยสอนและวิจัย</option>
                    </select>
            </div>
            </form>
      </div>
    </div>
    <div class="modal-footer">
      <button id="btCreateUser" type="submit" class="btn btn-success waves-effect waves-light m-r-5"><i class="fa fa-check"></i> บันทึก</button>
      <button   type="submit" class="btn btn-inverse" data-dismiss="modal">ยกเลิก</button>
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
        <h4 class="col-lg-6 text-center">รูปภาพปัจจุบัน</h4>
        <h4 class="col-lg-6 text-center">รูปภาพที่ต้องการอัปโหลด</h4>
      </div>
      <div class="row">
        <div class="col-lg-6 text-center">
        <img id="imgShowEdit" width="150px" class="img-circle ">
      </div>
      <div class="col-lg-6 text-center">
        <img class="img-show " width="150px" />
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

    <?php include('import-javascript.php')?>
    <script src="../js/manage-user.js"></script>

</body>

</html>
