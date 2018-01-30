<!DOCTYPE html>
<html lang="en">

<head >
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
                        <h3 class="text-themecolor">Main</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Course</a></li>
                            <li class="breadcrumb-item active">Master</li>
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

                                                    <optgroup label="ระดับปริญญาโท">
                                                        <option value="bounceInDown">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                        <option value="bounceIn">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปี พ.ศ. 2553)</option>
                                                    </optgroup>

                                                    <optgroup label="ระดับปริญญาตรี">
                                                        <option value="Course1">หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปี พ.ศ 2555)</option>
                                                        <option value="Course2">หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปรับปรุง พ.ศ 2560)</option>

                                                        <option value="Course3">หลักสูตรวิทยาการสารสนเทศบัณฑิต สาขาวิชานิเทศศาสตร์ดิจิทัล (หลักสูตรปรับปรุง พ.ศ. 2560)</option>
                                                    </optgroup>

                                                    <optgroup label="ระดับปริญญาเอก">
                                                        <option value="bounceOut">หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปี พ.ศ. 2553) </option>
                                                        <option value="bounceOutDown">หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                        <option value="bounceOutLeft">หลักเกณฑ์การพิจารณาวารสารทางวิชาการเพื่อสำเร็จการศึกษา</option>
                                                    </optgroup>
                                                </select>

<p></p>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Modal OpenCourses -->
    <div class="modal fade" id="addOpenCourses" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">วิชาที่เปิดสอน ระดับปริญญาโท</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadOpenCourses">

          </div>
          <div class="modal-footer">
            <button id="btUploadOpenCourses" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>

            <button id="btCloseOpenCourses" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    		<!-- END Modal OpenCourses -->


    			<!-- Start Page Content  -->

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-block">
                                <h3 class="card-title">หลักสูตร</h3>
                                <h6 class="card-subtitle">ระดับปริญญาโท</h6>
                                 <button id="btAddOpenCourses" type="submit" class="btn btn-info waves-effect waves-light m-t-10">แก้ไขรายวิชาที่เปิดสอน</button>

                                  <p></p>

                                <input type="text" class="form-control form-control-line" id="textDetailtitle">

                                <p></p>

                                <button type="button" id="btTitleEdit"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>


                                <input type="submit" class="btn btn-success " value="Save" id="btTitleSave">
                                <input type="reset" class="btn btn-danger  " value="Cancel" id="btTitleCancel">



                            </div>
                        </div>
                    </div>
                </div>

                <!-- END Page Content  -->




                <!-- Start Page editCourse-->

                <div class="row">
                    <div class="col-lg-12">
                                <div class="card">
                                  <div class="card-block">
                                      <h4 class="card-title">หลักสูตร</h4>
                                    <div class="row">
                                        <div class="col-md-12">
                                          <ul class="list-icons">
                                          <li id="editCourse" ><a href="javascript:void(0)"><i id="iconeditCourse" class="fa fa-chevron-right"></i> รายละเอียดหลักสูตร </a></li>

                                          </ul>
                                       </div>

                                  </div>

                                  <!-- Start Page editCourse 1-->

                                  <div id="headeditCourse" class="card-block bg-info">

                                    <h4 class="text-white card-title"></h4>
                                      <div class="message-box contact-box">
                                          <h2 class="add-ct-btn">
                                            <button type="button" id="btOpenModaleditCourse" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                          </h2>
                                      </div>
                                    </div>
                                    <form class="form-horizontal form-material ">
                                      <div class="table-responsive">
                                          <table id="tableeditCourse" class="table text-center color-bordered-table success-bordered-table">
                                              <thead >
                                                  <tr >
                                                      <th class="text-center">รูป</th>
                                                      <th class="text-center">ชื่อหัวข้อ</th>
                                                      <th class="text-center">ข้อมูล</th>
                                                      <th class="text-center">แก้ไข</th>

                                                  </tr>
                                              </thead>
                                              <tbody id="editCourse_work">

                                              </tbody>
                                          </table>
                                      </div>
                                    </form>

                                    <!-- Modal  editCourse 2-->

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
                                              <label for="facultyHisEdu" >ข้อมูล</label>
                                                  <div class="input-group">
                                                  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                  <textarea id="detailExpert" type="text"  class="form-control" rows="5"></textarea>
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


                                            <!-- Modal edit editCourse2 -->
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

                                    <!-- Modal editCourse -->
                        <div class="modal fade" id="addeditCourse" role="dialog" aria-labelledby="Message" aria-hidden="true">
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
                                      <input id="TopiceditCourse" type="text"  class="form-control" >
                                    </div>
                                </div>
                                <div id="texteditCourse" class="form-group">
                                  <label for="facultyHisEdu" >ข้อมูล</label>
                                      <div class="input-group">
                                      <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                      <textarea id="TopiceditCourse2" type="text"  class="form-control" rows="5"></textarea>
                                    </div>
                                </div>
                                <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadeditCourse">

                              </div>
                              <div class="modal-footer">
                                <button id="btUploadeditCourse" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

                                <button id="btCloseeditCourse" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Modal Suggestion2 -->
                <div class="modal fade" id="addeditCourse2" role="dialog" aria-labelledby="Message" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">เกิดข้อพลาด</h4>

                  </div>

                  <div class="modal-body">
                    <h8 class="card-subtitle">กรุณาใส่ไฟล์ JPG หรือ PNG</h8>
                  </div>
                  <div class="modal-footer">

                    <button id="btCloseeditCourse" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                  </div>
                </div>
                </div>
                </div>

                <!-- Modal Suggestion3 -->
                <div class="modal fade" id="addeditCourse3" role="dialog" aria-labelledby="Message" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title"></h4>

                </div>

                <div class="modal-body">
                <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
                </div>
                <div class="modal-footer">

                <button id="btCloseeditCourse" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
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
                                          <h4 class="card-title">Download</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                              <ul class="list-icons">
                                              <li id="Suggestion" ><a href="javascript:void(0)"><i id="iconSuggestion" class="fa fa-chevron-right"></i> โครงสร้างหลักสูตรระดับมหาบัณฑิต </a></li>
                                              <li id="Education" ><a href="javascript:void(0)"><i id="iconEducation" class="fa fa-chevron-right"></i> ขั้นตอนและแบบฟอร์มการสอบโครงร่างวิทยานิพนธ์ </a></li>
                                              <li id="Course"><a href="javascript:void(0)"><i id="iconCourse" class="fa fa-chevron-right"></i> ดาวน์โหลดแบบฟอร์มอื่นๆ </a></li>

                                              </ul>
                                           </div>

                                      </div>

                                      <!-- Start Page Download 1-->

                                      <div id="headSuggestion" class="card-block bg-info">

                                        <h4 class="text-white card-title">โครงสร้างหลักสูตรระดับมหาบัณฑิต</h4>
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
                                                          <th class="text-center">Show</th>
                                                          <th class="text-center">ชื่อหัวข้อ</th>
                                                          <th class="text-center">แก้ไข</th>

                                                      </tr>
                                                  </thead>
                                                  <tbody id="Suggestion_work">

                                                  </tbody>
                                              </table>
                                          </div>
                                        </form>

                                        <!-- Modal edit Suggestion -->

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

                                        <!-- Modal Suggestion -->
                            <div class="modal fade" id="addSuggestion" role="dialog" aria-labelledby="Message" aria-hidden="true">
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
                                          <input id="TopicSuggestion" type="text"  class="form-control" >
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
                        <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
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

                                        <!-- Start Page Download 2-->

                                        <div id="headEducation" class="card-block bg-info">

                                          <h4 class="text-white card-title">ขั้นตอนและแบบฟอร์มการสอบโครงร่างวิทยานิพนธ์</h4>
                                            <div class="message-box contact-box">
                                                <h2 class="add-ct-btn">
                                                  <button type="button" id="btOpenModalEducation" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                </h2>
                                            </div>
                                          </div>
                                          <form class="form-horizontal form-material ">
                                            <div class="table-responsive">
                                                <table id="tableEducation" class="table text-center color-bordered-table success-bordered-table">
                                                    <thead >
                                                        <tr >
                                                            <th class="text-center">Show</th>
                                                            <th class="text-center">ชื่อหัวข้อ</th>
                                                            <th class="text-center">แก้ไข</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody id="Education_work">

                                                    </tbody>
                                                </table>
                                            </div>
                                          </form>

                                          <!-- Modal edit Education -->

                                          <div class="modal fade" id="editExpertModal2" role="dialog" aria-labelledby="Message" aria-hidden="true">
                                            <div class="modal-dialog modal-md">
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h4 class="modal-title">Expertise</h4>
                                                </div>
                                                <div class="modal-body">
                                                  <div id="expert" class="form-group">
                                                      <label for="expertHisEdu">Detail</label>
                                                      <div class="input-group">
                                                          <textarea id="detailExpert2" type="text"  class="form-control" ></textarea>
                                                      </div>
                                                  </div>
                                                </div>
                                                <div class="modal-footer">
                                                  <button id="btEditExpert2" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> ตกลง</button>
                                                  <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <!-- Modal Education -->
                              <div class="modal fade" id="addEducation" role="dialog" aria-labelledby="Message" aria-hidden="true">
                                <div class="modal-dialog modal-md">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h4 class="modal-title">อัพโหลด PDF</h4>

                                    </div>

                                    <div class="modal-body">
                                      <div id="textEducation" class="form-group">
                                        <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                                            <div class="input-group">
                                            <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                            <input id="TopicEducation" type="text"  class="form-control" >
                                          </div>
                                      </div>



                                      <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadEducation">


                                    </div>
                                    <div class="modal-footer">
                                      <button id="btUploadEducation" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

                                      <button id="btCloseEducation" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <!-- Modal Education2 -->
                  <div class="modal fade" id="addEducation2" role="dialog" aria-labelledby="Message" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="modal-title">เกิดข้อพลาด</h4>

                        </div>

                        <div class="modal-body">
                          <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                        </div>
                        <div class="modal-footer">

                          <button id="btCloseEducation" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Modal Education3 -->
                  <div class="modal fade" id="addEducation3" role="dialog" aria-labelledby="Message" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                  <div class="modal-header">
                  <h4 class="modal-title"></h4>

                  </div>

                  <div class="modal-body">
                  <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
                  </div>
                  <div class="modal-footer">

                  <button id="btCloseEducation" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                  </div>
                  </div>
                  </div>
                  </div>

                                          <!-- Start Page Download 3-->

                                          <div id="headCourse" class="card-block bg-info">

                                            <h4 class="text-white card-title">ดาวน์โหลดแบบฟอร์มอื่นๆ</h4>
                                              <div class="message-box contact-box">
                                                  <h2 class="add-ct-btn">
                                                    <button type="button" id="btOpenModalCourse" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                  </h2>
                                              </div>
                                            </div>
                                            <form class="form-horizontal form-material ">
                                              <div class="table-responsive">
                                                  <table id="tableCourse" class="table text-center color-bordered-table success-bordered-table">
                                                      <thead >
                                                          <tr >
                                                              <th class="text-center">Show</th>
                                                              <th class="text-center">ชื่อหัวข้อ</th>
                                                              <th class="text-center">แก้ไข</th>

                                                          </tr>
                                                      </thead>
                                                      <tbody id="Course_work">

                                                      </tbody>
                                                  </table>
                                              </div>
                                            </form>

                                            <!-- Modal Course -->
                                <div class="modal fade" id="addCourse" role="dialog" aria-labelledby="Message" aria-hidden="true">
                                  <div class="modal-dialog modal-md">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h4 class="modal-title">อัพโหลด PDF</h4>

                                      </div>

                                      <div class="modal-body">
                                        <div id="textCourse" class="form-group">
                                          <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                                              <div class="input-group">
                                              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                              <input id="TopicCourse" type="text"  class="form-control" >
                                            </div>
                                        </div>



                                        <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadCourse">


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
                            <h4 class="modal-title">เกิดข้อพลาด</h4>

                          </div>

                          <div class="modal-body">
                            <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                          </div>
                          <div class="modal-footer">

                            <button id="btCloseCourse" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Modal Course3 -->
                  <div class="modal fade" id="addCourse3" role="dialog" aria-labelledby="Message" aria-hidden="true">
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





                                    </div>
                                    </div>
                        </div>
                      </div>













    <?php include('import-javascript.php')?>




<script src="../js/master2558.js"></script>





</body>

</html>
