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
                                    <h4 class="card-title">หลักสูตร</h4>
                                    <div class="col-md-4">
                                      <div class="row">


                                      <button id="btAddCourses" class="btn btn-info waves-effect waves-light m-t-10"> เพิ่มหลักสูตร</button>&nbsp;
                                      <button id="btAddDeitlCourses" class="btn btn-info waves-effect waves-light m-t-10"> เพิ่มหลายละเอียดหลักสูตร</button>



                                      </div>
                                   </div>
                                  <div class="row">
                                      <div class="col-md-12">
                                        <ul class="list-icons">

                                        <li id="Suggestion" ><a href="javascript:void(0)"><i id="iconSuggestion" class="fa fa-chevron-right"></i> รายละเอียดหลักสูตร </a></li>


                                        </ul>
                                     </div>



                                </div>

                                <!-- Start Page Download 1-->

                                <div id="headSuggestion" class="card-block bg-info">

                                  <h4 class="text-white card-title">รายละเอียดหลักสูตร</h4>
                                    <div class="message-box contact-box">
                                        <h2 class="add-ct-btn">
                                          <button type="button" id="btOpenModalSuggestion" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                        </h2>
                                    </div>
                                  </div>
                                  <form class="form-horizontal form-material ">
                                    <div class="table-responsive">
                                        <table id="tableSuggestion" class="table text-center color-bordered-table success-bordered-table">
                                            <thead >
                                                <tr >
                                                    <th class="text-center">รูป</th>
                                                    <th class="text-center">ชื่อหัวข้อ</th>
                                                    <th class="text-center">ชื่อปริญญา</th>
                                                    <th class="text-center">ลักษณะวิชาชีพ</th>
                                                    <th class="text-center">ลักษณะวิชาที่ศึกษา</th>
                                                    <th class="text-center">แก้ไข</th>

                                                </tr>

                                                <tr id="loaderHeader">
                                                  <td colspan="6"><img src="../images/ajax-loader.gif">  Loading...</td>
                                                </tr>
                                            </thead>
                                            <tbody id="Suggestion_work">

                                            </tbody>
                                        </table>
                                    </div>
                                  </form>

                                  <!-- Modal addCourses -->
                      <div class="modal fade" id="addEditCourses" role="dialog" aria-labelledby="Message" aria-hidden="true">
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
                                    <input id="TopicCourses" type="text"  class="form-control test" >
                                  </div>
                              </div>

                              <div id="textSuggestion" class="form-group">
                                <label for="facultyHisEdu" >ชื่อหลักสูตร2</label>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                    <input id="TopicCourses2" type="text"  class="form-control test" >
                                  </div>
                              </div>

                            </div>
                            <div class="modal-footer">
                              <button id="btUploadAddCourses" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

                              <button id="btCloseaddCourses" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Modal addEditlCourses -->
          <div class="modal fade" id="EditCourse" role="dialog" aria-labelledby="Message" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">เพิ่มรายละเอียดหลักสูตร</h4>
                  <select id="SelectAddCourses" name="BecPortfolioGroup" class="form-control form-control-line"></select>

                </div>

                <div class="modal-body">
                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ชื่อหลักสูตร</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                        <input id="TopicNameEditCourse" type="text"  class="form-control" >
                      </div>
                  </div>

                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ชื่อหลักสาขา</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                        <input id="TopicEditCourse" type="text"  class="form-control" >
                      </div>
                  </div>

                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ชื่อปริญญา</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                        <input id="TopicEditCourse2" type="text"  class="form-control" >
                      </div>
                  </div>

                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ลักษณะวิชาชีพ</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                        <textarea id="detailEditCourse" type="text"  class="form-control" rows="4"></textarea>
                      </div>
                  </div>

                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ลักษณะวิชาที่ศึกษา</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                        <textarea id="detailEditCourse2" type="text"  class="form-control" rows="4"></textarea>
                      </div>
                  </div>

                  <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadEdetailCourse">

                </div>
                <div class="modal-footer">
                  <button id="btUploadEditCourse" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

                  <button id="btCloseEditCourse" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                </div>
              </div>
            </div>
          </div>

                                  <!-- Modal edit Suggestion -->

                                  <div class="modal fade" id="editExpertModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h4 class="modal-title">แก้ไขข้อมูล</h4>
                                        </div>
                                        <div class="modal-body">

                                          <center>
                                          <img width="250px" id="bgHeaderEdit" style="border-radius:10px"></center><br>

                                          <div id="textSuggestion" class="form-group">
                                            <label for="facultyHisEdu" >ชื่อหลักสูตร</label>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                <input id="TopicExpert" type="text"  class="form-control" >
                                              </div>
                                          </div>

                                          <div id="textSuggestion" class="form-group">
                                            <label for="facultyHisEdu" >ชื่อปริญญา</label>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                <input id="TopicExpert2" type="text"  class="form-control" >
                                              </div>
                                          </div>

                                          <div id="textSuggestion" class="form-group">
                                            <label for="facultyHisEdu" >ลักษณะวิชาชีพ</label>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                <textarea id="detailExpert" type="text"  class="form-control" rows="5"></textarea>
                                              </div>
                                          </div>

                                          <div id="textSuggestion" class="form-group">
                                            <label for="facultyHisEdu" >ลักษณะวิชาที่ศึกษา</label>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                <textarea id="detailExpert2" type="text"  class="form-control" rows="5"></textarea>
                                              </div>
                                          </div>
                                          <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadExpert">

                                        </div>
                                        <div class="modal-footer">
                                          <button id="btEditExpert" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> ตกลง</button>
                                          <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>


                                          <!-- Modal edit Suggestion2 -->
                                                <div class="modal fade" id="addEditExpert2" role="dialog" aria-labelledby="Message" aria-hidden="true">
                                                    <div class="modal-dialog modal-sm">
                                                        <div class="modal-content">
                                                          <div class="modal-header">
                                                              <h4 class="modal-title"></h4>

                                                          </div>

                                                            <div class="modal-body">
                                                                <h8 class="card-subtitle">แก้ไขข้อมูลเสร็จสิ้น</h8>
                                                            </div>
                                                                <div class="modal-footer">

                                                                    <button id="btCloseEditExpert" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                                                </div>
                                                          </div>
                                                      </div>
                                                  </div>

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




                    <!-- Start Page Download -->

                    <div class="row">
                        <div class="col-lg-12">
                                    <div class="card">
                                      <div class="card-block">
                                          <h4 class="card-title">ดาวน์โหลด</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                              <ul class="list-icons">
                                              <li id="Download" ><a href="javascript:void(0)"><i id="iconSuggestion" class="fa fa-chevron-right"></i> หัวข้อดาวน์โหลดเอกสาร เพิ่มเติม </a></li>

                                              </ul>
                                           </div>

                                      </div>

                                      <!-- Start Page Download 1-->

                                      <div id="headDownload" class="card-block bg-info">

                                        <h4 class="text-white card-title">หัวข้อดาวน์โหลดเอกสาร เพิ่มเติม (หลักสูตร พ.ศ. 2555)</h4>
                                          <div class="message-box contact-box">
                                              <h2 class="add-ct-btn">
                                                <button type="button" id="btOpenModalDownload" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                              </h2>
                                          </div>
                                        </div>
                                        <form class="form-horizontal form-material ">
                                          <div class="table-responsive">
                                              <table id="tableDownload" class="table text-center color-bordered-table success-bordered-table">
                                                  <thead >
                                                      <tr >
                                                          <th class="text-center">Show</th>
                                                          <th class="text-center">ชื่อหัวข้อ</th>
                                                          <th class="text-center">แก้ไข</th>

                                                      </tr>
                                                  </thead>
                                                  <tbody id="Download_work">

                                                  </tbody>
                                              </table>
                                          </div>
                                        </form>

                                        <!-- Modal edit Download -->

                                        <div class="modal fade" id="editExpertModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
                                          <div class="modal-dialog modal-md">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h4 class="modal-title">Expertise</h4>
                                              </div>
                                              <div class="modal-body">
                                                <div id="expert" class="form-group">
                                                    <label for="expertHisEdu">Detail</label>
                                                    <div class="input-group">
                                                        <textarea id="detailExpert" type="text"  class="form-control" ></textarea>
                                                    </div>
                                                </div>
                                              </div>
                                              <div class="modal-footer">
                                                <button id="btEditExpert" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> ตกลง</button>
                                                <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <!-- Modal Download -->
                            <div class="modal fade" id="addDownload" role="dialog" aria-labelledby="Message" aria-hidden="true">
                              <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h4 class="modal-title">อัพโหลด PDF</h4>


                                  </div>

                                  <div class="modal-body">
                                    <div id="textSuggestion" class="form-group">
                                      <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                                          <div class="input-group">
                                          <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                          <input id="TopicDownload" type="text"  class="form-control" >
                                        </div>
                                    </div>

                                    <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadDownload">

                                  </div>
                                  <div class="modal-footer">
                                    <button id="btUploadDownload" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

                                    <button id="btCloseDownload" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!-- Modal Download2 -->
                <div class="modal fade" id="addDownload2" role="dialog" aria-labelledby="Message" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">เกิดข้อพลาด</h4>

                      </div>

                      <div class="modal-body">
                        <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                      </div>
                      <div class="modal-footer">

                        <button id="btCloseDownload" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Modal Download3 -->
    <div class="modal fade" id="addDownload3" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title"></h4>

          </div>

          <div class="modal-body">
            <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
          </div>
          <div class="modal-footer">

            <button id="btCloseDownload" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
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



<script src="../js/Allcourse.js"></script>





</body>

</html>
