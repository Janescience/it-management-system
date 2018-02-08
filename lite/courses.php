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


<!-- ====================== เมนู ============================== -->
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
    </div>

    <div id="main-wrapper">
      <?php  include('navbar.php') ?>

        <div class="page-wrapper">
            <div class="container-fluid">


                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">

                        </div>
                    </div>
                </div>




              <!-- Start Page Suggestion -->
              <!-- ====================== เพิ่มหลักสูตร และเลือกระดับการศึกษา ============================== -->

              <div class="row">
                  <div class="col-lg-12">
                              <div class="card">
                                <div class="card-block">
                                    <h4 class="card-title" id="topicAddCourses">หลักสูตร</h4>
                                      <div class="message-box contact-box">
                                        <h2 class="add-ct-btn">
                                          <button id="btAddDeitlCourses" class="btn waves-effect waves-light btn-warning m-t-10"> เพิ่มหลักสูตร</button>
                                        </h2>
                                      </div>
                                  <div class="col-md-4">
                                      <div class="row">

                                            <select id="SelectTypeCourse" name="BecPortfolioGroup" class="form-control form-control-line">
                                              <optgroup label="ระดับการศึกษา">
                                                <option value="-">เลือกระดับการศึกษาที่ต้องการแสดง</option>
                                                <option value="ปริญญาตรี">ปริญญาตรี</option>
                                                <option value="ปริญญาโท">ปริญญาโท</option>
                                                <option value="ปริญญาเอก">ปริญญาเอก</option>
                                              </optgroup>
                                            </select>


                                      </div>
                                   </div>

                                   <div class="row">
                                      <div class="col-md-12">
                                        <br>
                                      </div>
                                   </div>

                                <!-- Start Page headSuggestion -->

                                <div id="headSuggestion" class="card-block bg-info">

                                    <div class="row">
                                        <div class="col-xlg-12 col-lg-12 col-md-12 col-sm-12">
                                            <h4 class="text-white card-title">รายละเอียดหลักสูตร</h4>
                                            <div class="message-box contact-box">
                                                <h2 class="add-ct-btn">
                                                  <button type="button" id="btOpenModalSuggestion" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                </h2>
                                            </div>
                                            <select id="SelectAddCourses" name="BecPortfolioGroup" class="form-control form-control-line col-xlg-8 col-lg-8 col-md-8"></select>
                                        </div>
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


                      <!-- Modal EditCourse -->
          <div class="modal fade" id="EditCourse" role="dialog" aria-labelledby="Message" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                        <div class="modal-header">
                              <h4 class="modal-title">เพิ่มหลักสูตร</h4>
                        </div>

                        <div class="modal-body">

                              <div id="textSuggestion" class="form-group">

                                  <label for="facultyHisEdu" >เลือกระดับการศึกษา</label>
                                  <div class="input-group">
                                      <div class="input-group-addon"><i class="ti-bookmark"></i>
                                      </div>
                                      <select id="typeCourse" name="BecPortfolioGroup" class="form-control form-control-line">
                                        <option value="ปริญญาตรี">ปริญญาตรี</option>
                                        <option value="ปริญญาโท">ปริญญาโท</option>
                                        <option value="ปริญญาเอก">ปริญญาเอก</option>
                                      </select>
                                  </div>

                              </div>

                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ชื่อหลักสูตร</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="ti-agenda"></i></div>
                        <input id="TopicNameEditCourse" type="text"  class="form-control" >
                      </div>
                  </div>

                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ชื่อกลุ่มวิชา </label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="ti-write"></i></div>
                        <input id="TopicEditCourse" type="text"  class="form-control" >
                      </div>
                  </div>

                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ชื่อปริญญา</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="ti-write"></i></div>
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


                  <div id="textSuggestion" class="form-group">

                            <label for="facultyHisEdu" >อัพโหลดรูปภาพ</label>
                            <br>
                            <div class="col-md-12">
                                <div class="form-group text-center">
                                      <div class="input-group">
                                        <span class="input-group-btn">
                                            <span class="btn btn-secondary btn-file">เลือกรูปภาพ <input type="file" class="file-upload" id="fileUploadEdetailCourse">
                                            </span>
                                        </span>
                                            <input type="text" class="form-control" readonly="" >
                                      </div>
                                    <br><img class="img-show">
                                  </div>
                            </div>

                    </div>


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
                                            <h6 class="card-subtitle">ชื่อหลักสูตร</h6>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-write"></i></div>
                                                <input id="TopicExpert" type="text"  class="form-control" >
                                              </div>
                                          </div>

                                          <div id="textSuggestion" class="form-group">
                                            <h6 class="card-subtitle">ชื่อปริญญา</h6>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-write"></i></div>
                                                <input id="TopicExpert2" type="text"  class="form-control" >
                                              </div>
                                          </div>

                                          <div id="textSuggestion" class="form-group">
                                            <h6 class="card-subtitle">ลักษณะวิชาชีพ</h6>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                <textarea id="detailExpert" type="text"  class="form-control" rows="5"></textarea>
                                              </div>
                                          </div>

                                          <div id="textSuggestion" class="form-group">
                                            <h6 class="card-subtitle">ลักษณะวิชาที่ศึกษา</h6>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                <textarea id="detailExpert2" type="text"  class="form-control" rows="5"></textarea>
                                              </div>
                                          </div>

                                          <div id="textSuggestion" class="form-group">
                                              <label for="facultyHisEdu" >อัพโหลดรูปภาพ</label>
                                              <br>
                                                  <div class="col-md-12">
                                                      <div class="form-group text-center">
                                                          <div class="input-group">
                                                              <span class="input-group-btn">
                                                                  <span class="btn btn-secondary btn-file">
                                                                      เลือกรูปภาพ <input type="file" class="file-upload" id="fileUploadExpert">
                                                                  </span>
                                                              </span>
                                                              <input type="text" class="form-control" readonly="">
                                                          </div>
                                                          <br><img class="img-show">
                                                      </div>
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
                                <h6 class="card-subtitle">ระดับการศึกษา</h6>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-bookmark"></i></div>
                                    <input id="AddTypeCourse" type="text"  class="form-control" >
                                  </div>
                              </div>

                              <div id="textSuggestion" class="form-group">
                                <h6 class="card-subtitle">หลักสูตร</h6>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-agenda"></i></div>
                                    <input id="AddTypeCourse2" type="text"  class="form-control" >
                                  </div>
                              </div>


                              <div id="textSuggestion" class="form-group">
                                <h6 class="card-subtitle">ชื่อกลุ่มวิชา</h6>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-write"></i></div>
                                    <input id="TopicSuggestion" type="text"  class="form-control" >
                                  </div>
                              </div>

                              <div id="textSuggestion" class="form-group">
                                <h6 class="card-subtitle">ชื่อปริญญา</h6>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-write"></i></div>
                                    <input id="TopicSuggestion2" type="text"  class="form-control" >
                                  </div>
                              </div>

                              <div id="textSuggestion" class="form-group">
                                <h6 class="card-subtitle">ลักษณะวิชาชีพ</h6>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                    <textarea id="detailSuggestion" type="text"  class="form-control" rows="4"></textarea>
                                  </div>
                              </div>

                              <div id="textSuggestion" class="form-group">
                                <h6 class="card-subtitle">ลักษณะวิชาที่ศึกษา</h6>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                    <textarea id="detailSuggestion2" type="text"  class="form-control" rows="4"></textarea>
                                  </div>
                              </div>


                          <div id="textSuggestion" class="form-group">
                              <label for="facultyHisEdu" >อัพโหลดรูปภาพ</label>
                                  <br>
                                    <div class="col-md-12">
                                          <div class="form-group text-center">
                                              <div class="input-group">
                                                  <span class="input-group-btn">
                                                      <span class="btn btn-secondary btn-file">
                                                          เลือกรูปภาพ <input type="file" class="file-upload" id="fileUploadSuggestion">
                                                      </span>
                                                  </span>
                                                  <input type="text" class="form-control" readonly="">
                                              </div>
                                              <br><img class="img-show">
                                          </div>
                                      </div>
                              </div>


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



                <!-- Start Page Content  -->

            <div class="row">
                <div class="col-lg-12">

                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">แผนการศึกษา</h4>
                                <h6 class="card-subtitle" id="TitleAddStudyplan"> </h6>
                                <button id="btAddStudyplan" type="submit" class="btn btn-success waves-effect waves-light m-r-10">เพิ่มรายละเอียด</button>
                                </div>
                            </div>
                </div>
              </div>

              <!-- Modal Studyplan -->
  <div class="modal fade" id="addStudyplan" role="dialog" aria-labelledby="Message" aria-hidden="true">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="messageStudyplan">อัพโหลด PDF</h4>


        </div>
        <div class="modal-body">
            <h6 class="card-subtitle">หลักสูตร</h6>
            <p>
                <div class="input-group">
                <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="AddTypeCourseStudyplan" type="text"  class="form-control" >
              </div>
        </div>

        <div class="modal-body">
            <h6 class="card-subtitle">ชื่อกลุ่มวิชา</h6>
            <p>
                <div class="input-group">
                <div class="input-group-addon"><i class="ti-write"></i></div>
                <input id="TopicSuggestionStudyplan" type="text"  class="form-control" >
              </div>
        </div>

          <div class="modal-body">
              <h6 class="card-subtitle">ชื่อหัวข้อ</h6>
              <p>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                  <input id="TopicStudyplan" type="text"  class="form-control" >
                </div>
          </div>

        <div class="modal-body">
          <div id="textSuggestion" class="form-group">
                            <label for="facultyHisEdu" >อัพโหลดไฟล์ PDF</label>
                            <br>
                            <div class="col-md-12">
                      <div class="form-group text-center">
                          <div class="input-group">
                              <span class="input-group-btn">
                                  <span class="btn btn-secondary btn-file">
                                      เลือกไฟล์ PDF <input type="file" class="file-upload" id="fileUploadStudyplan">
                                  </span>
                              </span>
                              <input type="text" class="form-control" readonly="">
                          </div>
                          <br>
                      </div>
                  </div>
          </div>
        </div>

        <div class="modal-footer">
          <button id="btUploadStudyplan" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>ตกลง</button>

          <button id="btCloseStudyplan" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Studyplan2 -->
    <div class="modal fade" id="addStudyplan2" role="dialog" aria-labelledby="Message" aria-hidden="true">
          <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                  <h4 class="modal-title">เกิดข้อพลาด</h4>

                </div>

                <div class="modal-body">
                  <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                </div>
                <div class="modal-footer">

                    <button id="btCloseStudyplan" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Studyplan3 -->
                <div class="modal fade" id="addStudyplan3" role="dialog" aria-labelledby="Message" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                          <div class="modal-header">
                              <h4 class="modal-title"></h4>

                          </div>

                            <div class="modal-body">
                                <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
                            </div>
                                <div class="modal-footer">

                                    <button id="btCloseStudyplan" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
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

                                      <div id="headDownload" class="card-block bg-info">
                                        <div class="col-lg-8">
                                          <div class="row">
                                            <h4 class="text-white card-title">หัวข้อดาวน์โหลดเอกสาร เพิ่มเติม</h4>
                                          </div>
                                        </div>
                                        <div class="message-box contact-box">
                                          <h2 class="add-ct-btn">
                                          <button type="button" id="btOpenModalEditDownload" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                          </h2>
                                        </div>
                                      </div>

                                        <form class="form-horizontal form-material ">
                                          <div class="table-responsive">
                                              <table id="tableDownload" class="table text-center color-bordered-table success-bordered-table">
                                                  <thead >
                                                      <tr >
                                                          <th class="text-center">ประเภทเอกสาร</th>
                                                          <th class="text-center">ชื่อหัวข้อดาวน์โหลดเอกสาร</th>
                                                          <th class="text-center">แก้ไข</th>
                                                      </tr>
                                                      <tr id="loaderHeader2">
                                                        <td colspan="6"><img src="../images/ajax-loader.gif">  Loading...</td>
                                                      </tr>
                                                  </thead>
                                                  <tbody id="AddDownload_work">
                                                  </tbody>
                                              </table>
                                          </div>
                                        </form>



                                        <!-- Modal edit Download -->

                                        <div class="modal fade" id="editExpertModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
                                          <div class="modal-dialog modal-md">
                                            <div class="modal-content">
                                              <div class="modal-header">
                                                <h4 class="modal-title">เพิ่มข้อมูลดาวน์โหลดเอกสาร</h4>
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

                  <!---------------- Modal Download ---------------->
                            <div class="modal fade" id="editDowload" role="dialog" aria-labelledby="Message" aria-hidden="true">
                              <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h4 class="modal-title">อัพโหลด PDF</h4>

                                  </div>

                                  <div class="modal-body">
                                      <h6 class="card-subtitle">ระดับการศึกษา</h6>
                                          <div class="input-group">
                                          <div class="input-group-addon"><i class="ti-bookmark"></i></div>
                                          <input id="TypeEducationEditDownload" type="text"  class="form-control" >
                                        </div>
                                  </div>

                                  <div class="modal-body">
                                      <h6 class="card-subtitle">เลือกหลักสูตร</h6>
                                      <div class="input-group">
                                      <div class="input-group-addon"><i class="ti-agenda"></i></div>
                                      <input id="TypeCourseEditDownload" type="text"  class="form-control" >
                                      </div>
                                  </div>

                                  <div class="modal-body">
                                      <h6 class="card-subtitle">เลือกประเภทเอกสาร</h6>
                                            <select id="typeDownload" name="BecPortfolioGroup" class="form-control form-control-line">
                                              <option value="แบบฟอร์มอื่นๆ">แบบฟอร์มอื่นๆ</option>
                                              <option value="เอกสารหลักสูตร">เอกสารหลักสูตร</option>
                                              <option value="แผนการเรียน สาขาวิชาเทคโนโลยีสารสนเทศ">แผนการเรียน สาขาวิชาเทคโนโลยีสารสนเทศ</option>
                                              <option value="ขั้นตอนและแบบฟอร์มการสอบโครงร่างวิทยานิพนธ์">ขั้นตอนและแบบฟอร์มการสอบโครงร่างวิทยานิพนธ์</option>
                                            </select>
                                  </div>

                                  <div class="modal-body">
                                    <div id="textSuggestion" class="form-group">
                                      <h6 class="card-subtitle">เพิ่มหัวข้อการดาวน์โหลดเอกสาร</h6>
                                          <div class="input-group">
                                          <div class="input-group-addon"><i class="ti-write"></i></div>
                                          <input id="TopicEditDownload" type="text"  class="form-control" >
                                        </div>
                                    </div>

                                  <div class="modal-body">
                                    <div id="textSuggestion" class="form-group">
                                        <label for="facultyHisEdu" >อัพโหลดไฟล์ PDF</label>
                                          <br>
                                             <div class="col-md-12">
                                                <div class="form-group text-center">
                                                    <div class="input-group">
                                                        <span class="input-group-btn">
                                                            <span class="btn btn-secondary btn-file">
                                                                เลือกไฟล์ PDF <input type="file" class="file-upload" id="fileUploadEditDownload">
                                                            </span>
                                                        </span>
                                                        <input type="text" class="form-control" readonly="">
                                                    </div>
                                                    <br>
                                                  </div>
                                              </div>
                                      </div>
                                  </div>


                                  <div class="modal-footer">
                                    <button id="btUploadEditDownload" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>
                                    <button id="btCloseEditDownload" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <!-- Modal Download2 -->
                <div class="modal fade" id="EditDownload2" role="dialog" aria-labelledby="Message" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">เกิดข้อพลาด</h4>
                      </div>

                      <div class="modal-body">
                        <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                      </div>
                      <div class="modal-footer">

                        <button id="btCloseEditDownload" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Modal Download3 -->
    <div class="modal fade" id="EditDownload3" role="dialog" aria-labelledby="Message" aria-hidden="true">

      <div class="modal-dialog modal-sm">
        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title"></h4>
          </div>

          <div class="modal-body">
            <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
          </div>

          <div class="modal-footer">
            <button id="btCloseEditDownload" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>

        </div>
      </div>

    </div>

    <div class="modal fade" id="deleteModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title"></h4>
          </div>

          <div class="modal-body">
            <h8 class="card-subtitle">ลบสำเร็จ</h8>
          </div>

          <div class="modal-footer">
            <button id="btCloseEditDownload" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>

        </div>
      </div>
    </div>

    <div class="modal fade" id="deleteModal2" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">

          <div class="modal-header">
            <h4 class="modal-title"></h4>
          </div>

          <div class="modal-body">
            <h8 class="card-subtitle">ลบสำเร็จ</h8>
          </div>

          <div class="modal-footer">
            <button id="btCloseEditDownload" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>

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
    <script src="../js/courses.js"></script>

</body>
</html>
