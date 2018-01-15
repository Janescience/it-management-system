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
                                                        <option>หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปรับปรุง พ.ศ 2560)</option>
                                                        <option>หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปี พ.ศ 2555)</option>
                                                        <option>หลักสูตรวิทยาการสารสนเทศบัณฑิต สาขาวิชานิเทศศาสตร์ดิจิทัล (หลักสูตรปรับปรุง พ.ศ. 2560)</option>
                                                    </optgroup>
                                                    <optgroup label="ระดับปริญญาโท">
                                                        <option>หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปี พ.ศ. 2553)</option>
                                                        <option>หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                    </optgroup>
                                                    <optgroup label="ระดับปริญญาเอก">
                                                        <option >หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปี พ.ศ. 2553) </option>
                                                        <option >หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                        <option >หลักเกณฑ์การพิจารณาวารสารทางวิชาการเพื่อสำเร็จการศึกษา</option>
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
            <div id="textEducation" class="form-group">
              <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                  <input id="TopicStudyplan" type="text"  class="form-control" >
                </div>
            </div>
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadStudyplan">


          </div>
          <div class="modal-footer">
            <button id="btUploadStudyplan" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

            <button id="btCloseStudyplan" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Studyplan -->
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

            <!-- Modal Studyplan -->
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


    <!-- Modal OpenCourses -->
    <div class="modal fade" id="addOpenCourses" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">วิชาที่เปิดสอน ระดับปริญญาตรี</h6>

          </div>
          <div class="modal-body">

            <div id="textEducation" class="form-group">
              <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                  <input id="TopicOpenCourses" type="text"  class="form-control" >
                </div>
            </div>


            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadOpenCourses">


          </div>
          <div class="modal-footer">
            <button id="btUploadOpenCourses" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

            <button id="btCloseOpenCourses" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal OpenCourses -->
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

            <!-- Modal OpenCourses -->
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

                                <h6 class="card-subtitle">(หลักสูตรปรับปรุง พ.ศ. 2560) ภาคการศึกษาที่ 2/2560 </h6>

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

                                <button id="btAddOpenCourses" type="submit" class="btn btn-info waves-effect waves-light m-t-10">รายวิชาที่เปิดสอน</button>

                                </div>
                            </div>
                </div>
              </div>


              <!-- Start Page Content 1 -->

                <div class="row">
                      <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">

                                <img id="imgBachelorEs" alt="Mountain View" style="width:100%">

                                </div>
                            </div>
                        </div>


                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 1</h4>

                                <div class="setting image_picker">
                                  <h2>Image</h2>
                                  <div class="settings_wrap">
                                    <label class="drop_target">
                                      <div class="image_preview"></div>
                                      <input  class="upload" id="fileUploadImageBachelorEs" type="file"/>
                                    </label>
                                    <div class="settings_actions vertical"><a data-action="choose_from_uploaded"><i class="fa fa-picture-o"></i> Choose from Uploads</a><a class="disabled" data-action="remove_current_image"><i class="fa fa-ban"></i> Remove Current Image</a></div>

                                  </div>
                                </div>



                                <input type="text" class="form-control form-control-line" id="textTopicBachelorEs">
                                <textarea class="form-control" rows="6" cols="75" id="textDetailBachelorEs" >

                                </textarea>
                                <p></p>

                                <button id="btUploadImageBachelorEs" class="btn btn-success waves-effect waves-light m-r-10">ตกลง</button>

                                <button type="button" id="btBachelorEditEs"  class="btn btn-outline-secondary">แก้ไข <i class="fa fa-edit"></i></button>

                                <button type="button" id="btBachelorModifyEs"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                <input type="submit" class="btn btn-success " value="บันทึก" id="btBachelorSaveEs">
                                <input type="reset" class="btn btn-danger  " value="ยกเลิก" id="btBachelorCancelEs">




                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Es -->
    <div class="modal fade" id="addOpenModifyEs" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล กลุ่มวิชาซอฟต์แวร์วิสาหกิจ</h6>

          </div>
          <div class="modal-body">

            <div id="textEducation" class="form-group">
              <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                  <input id="TopicModifyEs" type="text"  class="form-control" >
                </div>
            </div>

            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyEs">

          </div>
          <div class="modal-footer">
            <button id="btUploadModifyEs" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>ตกลง</button>

            <button id="btCloseModifyEs" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Es -->
      <div class="modal fade" id="addOpenModifyEs2" role="dialog" aria-labelledby="Message" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                    <h4 class="modal-title">เกิดข้อพลาด</h4>

                  </div>

                  <div class="modal-body">
                    <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                  </div>
                  <div class="modal-footer">

                      <button id="btCloseModifyEs" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Es -->
                  <div class="modal fade" id="addOpenModifyEs3" role="dialog" aria-labelledby="Message" aria-hidden="true">
                      <div class="modal-dialog modal-sm">
                          <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title"></h4>

                            </div>

                              <div class="modal-body">
                                  <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
                              </div>
                                  <div class="modal-footer">

                                      <button id="btCloseModifyEs" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                  </div>
                            </div>
                        </div>
                    </div>

                    <!-- END Page Content 1 -->

                    <!-- Start Page Content 2 -->

                    <div class="row">
                  <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">

                                <img id="imgBachelorBida" alt="Mountain View" style="width:100%">

                                </div>
                            </div>
                        </div>


                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 2</h4>

                                <div class="setting image_picker">
                                  <h2>Image</h2>
                                  <div class="settings_wrap">
                                    <label class="drop_target">
                                      <div class="image_preview"></div>
                                      <input  class="upload" id="fileUploadImageBachelorBida" type="file"/>
                                    </label>
                                    <div class="settings_actions vertical"><a data-action="choose_from_uploaded"><i class="fa fa-picture-o"></i> Choose from Uploads</a><a class="disabled" data-action="remove_current_image"><i class="fa fa-ban"></i> Remove Current Image</a></div>

                                  </div>
                                </div>



                                <input type="text" class="form-control form-control-line" id="textTopicBachelorBida">
                                <textarea class="form-control" rows="6" cols="75" id="textDetailBachelorBida" >

                                </textarea>
                                <p></p>


                                <button id="btUploadImageBachelorBida" class="btn btn-success waves-effect waves-light m-r-10">ตกลง</button>

                                <button type="button" id="btBachelorEditBida"  class="btn btn-outline-secondary">แก้ไข <i class="fa fa-edit"></i></button>
                                <button type="button" id="btBachelorModifyBida"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                  <input type="submit" class="btn btn-success " value="บันทึก" id="btBachelorSaveBida">
                                  <input type="reset" class="btn btn-danger  " value="ยกเลิก" id="btBachelorCancelBida">

                                </div>
                            </div>
                        </div>
                    </div>

                     <!-- Modal Studyplan -->
    <div class="modal fade" id="addOpenModifyBida" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล กลุ่มวิชาธุรกิจอัจฉริยะและการวิเคราะห์ข้อมูล</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyBida">

          </div>
          <div class="modal-footer">
            <button id="btUploadModifyBida" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

            <button id="btCloseModifyBida" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

                    <!-- END Page Content 2 -->



                    <!-- Start Page Content 3 -->

                    <div class="row">
                  <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">

                                <img id="imgBachelorIs" alt="Mountain View" style="width:100%">

                                </div>
                            </div>
                        </div>


                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 3</h4>

                                <div class="setting image_picker">
                                  <h2>Image</h2>
                                  <div class="settings_wrap">
                                    <label class="drop_target">
                                      <div class="image_preview"></div>
                                      <input  class="upload" id="fileUploadImageBachelorIs" type="file"/>
                                    </label>
                                    <div class="settings_actions vertical"><a data-action="choose_from_uploaded"><i class="fa fa-picture-o"></i> Choose from Uploads</a><a class="disabled" data-action="remove_current_image"><i class="fa fa-ban"></i> Remove Current Image</a></div>

                                  </div>
                                </div>


                                <input type="text" class="form-control form-control-line" id="textTopicBachelorIs">
                                <textarea class="form-control" rows="6" cols="75" id="textDetailBachelorIs" >

                                </textarea>
                                <p></p>


                                <button id="btUploadImageBachelorIs" class="btn btn-success waves-effect waves-light m-r-10">ตกลง</button>

                                <button type="button" id="btBachelorEditIs"  class="btn btn-outline-secondary">แก้ไข <i class="fa fa-edit"></i></button>
                                <button type="button" id="btBachelorModifyIs"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                  <input type="submit" class="btn btn-success " value="บันทึก" id="btBachelorSaveIs">
                                  <input type="reset" class="btn btn-danger  " value="ยกเลิก" id="btBachelorCancelIs">

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Studyplan -->
    <div class="modal fade" id="addOpenModifyIs" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล กลุ่มวิชาสารสนเทศศึกษา</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyIs">

          </div>
          <div class="modal-footer">
            <button id="btUploadModifyIs" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

            <button id="btCloseModifyIs" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

                    <!-- END Page Content 3 -->

                    <!-- Start Page Download -->

                    <div class="row">
                        <div class="col-lg-12">
                                    <div class="card">
                                      <div class="card-block">
                                          <h4 class="card-title">Download</h4>
                                        <div class="row">
                                            <div class="col-md-12">
                                              <ul class="list-icons">
                                              <li id="Suggestion" ><a href="javascript:void(0)"><i id="iconSuggestion" class="fa fa-chevron-right"></i> ข้อแนะนำการลงทะเบียนเรียนและหลักสูตรวิทยาการสารสนเทศบันฑิต (หลักสูตรปรับปรุง พ.ศ. 2560) </a></li>
                                              <li id="Education" ><a href="javascript:void(0)"><i id="iconEducation" class="fa fa-chevron-right"></i> แผนการเรียน สาขาวิชาเทคโนโลยีสารสนเทศ </a></li>
                                              <li id="Course"><a href="javascript:void(0)"><i id="iconCourse" class="fa fa-chevron-right"></i>แผนที่แสดงเส้นทางความรู้จากหลักสูตรสู่อาชีพ (Career Mapping) </a></li>
                                              <li id="Learning"><a href="javascript:void(0)"><i id="iconLearning" class="fa fa-chevron-right"></i>ผลการเรียนรู้กับวัตถุประสงค์ของหลักสูตรวิทยาการสารสนเทศ (ELOs)</a></li>

                                              </ul>
                                           </div>

                                      </div>

                                      <!-- Start Page Download 1-->

                                      <div id="headSuggestion" class="card-block bg-info">

                                        <h4 class="text-white card-title">ข้อแนะนำการลงทะเบียนเรียนและหลักสูตรวิทยาการสารสนเทศบันฑิต (หลักสูตรปรับปรุง พ.ศ. 2560)</h4>
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

                                          <h4 class="text-white card-title">แผนการเรียน สาขาวิชาเทคโนโลยีสารสนเทศ </h4>
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

                                            <h4 class="text-white card-title">แผนที่แสดงเส้นทางความรู้จากหลักสูตรสู่อาชีพ (Career Mapping) </h4>
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


                                            <!-- Start Page Download 4 -->

                                            <div id="headLearning" class="card-block bg-info">

                                              <h4 class="text-white card-title">ผลการเรียนรู้กับวัตถุประสงค์ของหลักสูตรวิทยาการสารสนเทศ (ELOs) </h4>
                                                <div class="message-box contact-box">
                                                    <h2 class="add-ct-btn">
                                                      <button type="button" id="btOpenModalLearning" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                                                    </h2>
                                                </div>
                                              </div>
                                              <form class="form-horizontal form-material ">
                                                <div class="table-responsive">
                                                    <table id="tableLearning" class="table text-center color-bordered-table success-bordered-table">
                                                        <thead >
                                                            <tr >
                                                                <th class="text-center">Show</th>
                                                                <th class="text-center">ชื่อหัวข้อ</th>
                                                                <th class="text-center">แก้ไข</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody id="Learning_work">

                                                        </tbody>
                                                    </table>
                                                </div>
                                              </form>

                                              <!-- Modal Learning -->
                                  <div class="modal fade" id="addLearning" role="dialog" aria-labelledby="Message" aria-hidden="true">
                                    <div class="modal-dialog modal-md">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h4 class="modal-title">อัพโหลด PDF</h4>

                                        </div>

                                        <div class="modal-body">
                                          <div id="textLearning" class="form-group">
                                            <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                                                <div class="input-group">
                                                <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                                                <input id="TopicLearning" type="text"  class="form-control" >
                                              </div>
                                          </div>


                                              <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadLearning">

                                        </div>
                                        <div class="modal-footer">
                                          <button id="btUploadLearning" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

                                          <button id="btCloseLearning" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <!-- Modal Learning2 -->
                      <div class="modal fade" id="addLearning2" role="dialog" aria-labelledby="Message" aria-hidden="true">
                        <div class="modal-dialog modal-sm">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h4 class="modal-title">เกิดข้อพลาด</h4>

                            </div>

                            <div class="modal-body">
                              <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                            </div>
                            <div class="modal-footer">

                              <button id="btCloseLearning" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Modal Learning3 -->
          <div class="modal fade" id="addLearning3" role="dialog" aria-labelledby="Message" aria-hidden="true">
            <div class="modal-dialog modal-sm">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title"></h4>

                </div>

                <div class="modal-body">
                  <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
                </div>
                <div class="modal-footer">

                  <button id="btCloseLearning" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
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
    <script src="../js/all-pages.js"></script>
    <script  src="../js/test.js"></script>




<script src="../js/bachelor2560.js"></script>


</body>

</html>