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

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-block">
                                <h3 class="card-title">Course</h3>
                                <h6 class="card-subtitle">เลือกหลักสูตร</h6>


                                  <select class="form-control js--animations" id="selectHeaderSlide">
                                                    <optgroup label="ระดับปริญญาตรี">
                                                        <option value="Course1">หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปี พ.ศ 2555)</option>
                                                        <option value="Course2">หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปรับปรุง พ.ศ 2560)</option>
                                                        <option value="Course3">หลักสูตรวิทยาการสารสนเทศบัณฑิต สาขาวิชานิเทศศาสตร์ดิจิทัล (หลักสูตรปรับปรุง พ.ศ. 2560)</option>
                                                    </optgroup>
                                                    <optgroup label="ระดับปริญญาโท">
                                                        <option value="bounceIn">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปี พ.ศ. 2553)</option>
                                                        <option value="bounceInDown">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                    </optgroup>
                                                    <optgroup label="ระดับปริญญาเอก">
                                                        <option value="bounceOut">หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปี พ.ศ. 2553) </option>
                                                        <option value="bounceOutDown">หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                        <option value="bounceOutLeft">หลักเกณฑ์การพิจารณาวารสารทางวิชาการเพื่อสำเร็จการศึกษา</option>
                                                    </optgroup>
                                                </select>




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
            <h6 class="card-subtitle">แผนการศึกษา หลักสูตรวิทยาการสารสนเทศบัณฑิต</h6>

          </div>
          <div class="modal-body">

            <div class="modal-body">
              <div id="textEducation" class="form-group">
                <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                    <div class="input-group">
                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                    <input id="TopicStudyplan" type="text"  class="form-control" >
                  </div>
              </div>
            </div>

            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadStudyplan">

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


    <!-- Modal Courses -->
    <div class="modal fade" id="addOpenCourses" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">วิชาที่เปิดสอน ระดับปริญญาตรี</h6>

          </div>
          <div class="modal-body">

            <div class="modal-body">
              <div id="textEducation" class="form-group">
                <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                    <div class="input-group">
                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                    <input id="TopicOpenCourses" type="text"  class="form-control" >
                  </div>
              </div>
            </div>

            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadOpenCourses">

          </div>
          <div class="modal-footer">
            <button id="btUploadOpenCourses" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> ตกลง</button>

            <button id="btCloseOpenCourses" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Courses2 -->
      <div class="modal fade" id="addOpenCourses2" role="dialog" aria-labelledby="Message" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                    <h4 class="modal-title">เกิดข้อพลาด</h4>

                  </div>

                  <div class="modal-body">
                    <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                  </div>
                  <div class="modal-footer">

                      <button id="btCloseOpenCourses" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Courses3 -->
                  <div class="modal fade" id="addOpenCourses3" role="dialog" aria-labelledby="Message" aria-hidden="true">
                      <div class="modal-dialog modal-sm">
                          <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title"></h4>

                            </div>

                              <div class="modal-body">
                                  <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
                              </div>
                                  <div class="modal-footer">

                                      <button id="btCloseOpenCourses" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                  </div>
                            </div>
                        </div>
                    </div>


                <!-- Start Page Content  -->

            <div class="row">
                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">แผนการศึกษา หลักสูตรวิทยาการสารสนเทศบัณฑิต</h4>

                                <h6 class="card-subtitle">(หลักสูตรปรับปรุง พ.ศ. 2555) ภาคการศึกษาที่ 2/2560 </h6>

                                <form action="/action_page.php">

                                <button id="btAddStudyplan" type="submit" class="btn btn-success waves-effect waves-light m-r-10">ดูรายละเอียด</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">วิชาที่เปิดสอน ระดับปริญญาตรี</h4>
                                 <h6 class="card-subtitle">(หลักสูตรปรับปรุง พ.ศ. 2555) ภาคการศึกษาที่ 2/2560 </h6>

                                <button id="btAddOpenCourses" type="" class="btn btn-info waves-effect waves-light m-t-10">รายวิชาที่เปิดสอน</button>

                                </div>
                            </div>
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



                                      <button id="btAddDeitlCourses" class="btn btn-info waves-effect waves-light m-t-10"> เพิ่มหลักสูตร</button>



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
                                  <div class="row">
                                      <div class="col-md-6">
                                          <h4 class="text-white card-title">รายละเอียดหลักสูตร</h4>
                                          <select id="SelectAddCourses" name="BecPortfolioGroup" class="form-control form-control-line"></select>
                                      </div>
                                  </div>

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


                      <!-- Modal addEditlCourses -->
          <div class="modal fade" id="EditCourse" role="dialog" aria-labelledby="Message" aria-hidden="true">
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
                        <input id="TopicNameEditCourse" type="text"  class="form-control" >
                      </div>
                  </div>

                  <div id="textSuggestion" class="form-group">
                    <label for="facultyHisEdu" >ชื่อกลุ่มวิชา </label>
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
                                            <h6 class="card-subtitle">ชื่อหลักสูตร</h6>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                <input id="TopicExpert" type="text"  class="form-control" >
                                              </div>
                                          </div>

                                          <div id="textSuggestion" class="form-group">
                                            <h6 class="card-subtitle">ชื่อปริญญา</h6>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
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
                                  <h6 class="card-subtitle">ชื่อกลุ่มหลักสูตร</h6>
                                      <div class="input-group">
                                      <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                      <select id="SelectAddCourses2" name="BecPortfolioGroup" class="form-control form-control-line"></select>
                                    </div>
                                </div>

                              <div id="textSuggestion" class="form-group">
                                <h6 class="card-subtitle">ชื่อกลุ่มวิชา</h6>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                    <input id="TopicSuggestion" type="text"  class="form-control" >
                                  </div>
                              </div>

                              <div id="textSuggestion" class="form-group">
                                <h6 class="card-subtitle">ชื่อปริญญา</h6>
                                    <div class="input-group">
                                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
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
                                    <div class="col-lg-6">
                                      <div class="row">
                                        <h4 class="text-white card-title">หัวข้อดาวน์โหลดเอกสาร เพิ่มเติม</h4>
                                        <select id="AddCoursesDownload" name="BecPortfolioGroup" class="form-control form-control-line"></select>
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

                                        <!-- Modal Download -->
                            <div class="modal fade" id="editDowload" role="dialog" aria-labelledby="Message" aria-hidden="true">
                              <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h4 class="modal-title">อัพโหลด PDF</h4>


                                  </div>

                                  <div class="modal-body">
                                      <h6 class="card-subtitle">เลือกประเภทเอกสาร</h6>
                                            <select id="typeDownload" name="BecPortfolioGroup" class="form-control form-control-line">
                                              <option value="type1">โครงสร้างหลักสูตรระดับมหาบัณฑิต</option>
                                              <option value="type2">ขั้นตอนและแบบฟอร์มการสอบโครงร่างวิทยานิพนธ์</option>
                                              <option value="type3">ดาวน์โหลดแบบฟอร์มอื่นๆ</option>
                                              <option value="type4">เอกสารหลักสูตร</option>
                                            </select>

                                  </div>

                                  <div class="modal-body">
                                    <div id="textSuggestion" class="form-group">
                                      <h6 class="card-subtitle">เพิ่มข้อมูลดาวน์โหลดเอกสาร</h6>
                                          <div class="input-group">
                                          <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                          <input id="TopicEditDownload" type="text"  class="form-control" >
                                        </div>
                                    </div>



                                    <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadEditDownload">

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





                                    </div>
                                    </div>
                        </div>
                      </div>





      </div>
            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>

    <?php include('import-javascript.php')?>



<script src="../js/test2560.js"></script>





</body>

</html>
