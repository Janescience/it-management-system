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
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Course</a></li>
                            <li class="breadcrumb-item active">Bachelor</li>
                        </ol>
                    </div>
                </div>


                <!-- Start Page Suggestion -->

              <div class="row">
                  <div class="col-lg-12">
                              <div class="card">
                                <div class="card-block">

                                  <div class="row">
                                      <div class="col-md-12">

                                     </div>

                                </div>

                                <!-- Start Page Download 1-->

                                <div id="headCourse" class="card-block bg-danger">

                                  <h4 class="text-white card-title">หลักสูตร</h4>
                                    <div class="message-box contact-box">
                                        <h2 class="add-ct-btn">
                                          <button type="button" id="btOpenModalCourse" class="btn btn-circle btn-lg btn-info waves-effect waves-dark">+</button>
                                        </h2>
                                    </div>
                                  </div>
                                  <form class="form-horizontal form-material ">
                                    <div class="table-responsive">
                                        <table id="tableCourse" class="table  color-bordered-table success-bordered-table">
                                            <thead >
                                                <tr >
                                                    <th class="text-center">ชื่อหลักสูตร</th>

                                                </tr>

                                                <tr id="loaderHeader">
                                                  <td colspan="6"><img src="../images/ajax-loader.gif">  Loading...</td>
                                                </tr>
                                            </thead>
                                            <tbody id="addCourse_work">

                                            </tbody>
                                        </table>
                                    </div>
                                  </form>



                                  <!-- Modal Course -->
                      <div class="modal fade" id="addCourse" role="dialog" aria-labelledby="Message" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h4 class="modal-title">เพิ่มหลักสูตร</h4>

                            </div>

                            <div class="modal-body">
                              <div id="textSuggestion" class="form-group">
                                <label for="facultyHisEdu" >ชื่อหลักสูตร</label>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                    <input id="TopicCourse" type="text"  class="form-control" >
                                  </div>
                              </div>



                            </div>
                            <div class="modal-footer">
                              <button id="btUploadCourse" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

                              <button id="btCloseCourse" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                            </div>
                          </div>
                        </div>
                      </div>


          <!-- Modal Course2 -->
<div class="modal fade" id="addCourse2" role="dialog" aria-labelledby="Message" aria-hidden="true">
<div class="modal-dialog modal-sm">
  <div class="modal-content">
    <div class="modal-header">
      <h4 class="modal-title"></h4>

    </div>

    <div class="modal-body">
      <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
    </div>
    <div class="modal-footer">

      <button id="btCloseCourse" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
    </div>
  </div>
</div>
</div>

<!-- END Modal Course -->

<!-- Modal Suggestion -->
<div class="modal fade" id="addSuggestion" role="dialog" aria-labelledby="Message" aria-hidden="true">
<div class="modal-dialog modal-lg">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title">เพิ่มรายละเอียดหลักสูตร</h4>

</div>

<div class="modal-body">
<div id="textSuggestion" class="form-group">
<label for="facultyHisEdu" >ชื่อหลักสูตร</label>
  <div class="input-group">
  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
  <input id="TopicSuggestion" type="text"  class="form-control" >
</div>
</div>

<div id="textSuggestion" class="form-group">
<label for="facultyHisEdu" >ชื่อปริญญา</label>
  <div class="input-group">
  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
  <input id="TopicSuggestion2" type="text"  class="form-control" >
</div>
</div>

<div id="textSuggestion" class="form-group">
<label for="facultyHisEdu" >ลักษณะวิชาชีพ</label>
  <div class="input-group">
  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
  <textarea id="detailSuggestion" type="text"  class="form-control" rows="4"></textarea>
</div>
</div>

<div id="textSuggestion" class="form-group">
<label for="facultyHisEdu" >ลักษณะวิชาที่ศึกษา</label>
  <div class="input-group">
  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
  <textarea id="detailSuggestion2" type="text"  class="form-control" rows="4"></textarea>
</div>
</div>

<input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadSuggestion">

</div>
<div class="modal-footer">
<button id="btUploadSuggestion" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

<button id="btCloseSuggestion" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
</div>
</div>
</div>
</div>

<!-- Modal Suggestion2 -->
<div class="modal fade" id="addSuggestion2" role="dialog" aria-labelledby="Message" aria-hidden="true">
<div class="modal-dialog modal-sm">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title">เกิดข้อพลาด</h4>

</div>

<div class="modal-body">
<h8 class="card-subtitle">กรุณาตรวจสอบใหม่</h8>
</div>
<div class="modal-footer">

<button id="btCloseSuggestion" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
</div>
</div>
</div>
</div>

<!-- Modal Suggestion3 -->
<div class="modal fade" id="addSuggestion3" role="dialog" aria-labelledby="Message" aria-hidden="true">
<div class="modal-dialog modal-sm">
<div class="modal-content">
<div class="modal-header">
<h4 class="modal-title"></h4>

</div>

<div class="modal-body">
<h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
</div>
<div class="modal-footer">

<button id="btCloseSuggestion" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
</div>
</div>
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



<script src="../js/course_test.js"></script>





</body>

</html>
