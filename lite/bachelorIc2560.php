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
                                                      <option >หลักสูตรวิทยาการสารสนเทศบัณฑิต สาขาวิชานิเทศศาสตร์ดิจิทัล (หลักสูตรปรับปรุง พ.ศ. 2560)</option>  <option >หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปี พ.ศ 2555)</option>
                                                        <option >หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปรับปรุง พ.ศ 2560)</option>


                                                    </optgroup>
                                                    <optgroup label="ระดับปริญญาโท">
                                                        <option value="4">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปี พ.ศ. 2553)</option>
                                                        <option value="5">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                    </optgroup>
                                                    <optgroup label="ระดับปริญญาเอก">
                                                        <option value="6">หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปี พ.ศ. 2553) </option>
                                                        <option value="7">หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                        <option value="8">หลักเกณฑ์การพิจารณาวารสารทางวิชาการเพื่อสำเร็จการศึกษา</option>
                                                    </optgroup>
                                                </select>

<p></p>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-block">
                                <h3 class="card-title">หลักสูตร</h3>
                                 <button id="btAddStudyplan" type="submit" class="btn btn-info waves-effect waves-light m-t-10">รายวิชาที่เปิดสอน</button>

                                  <p></p>
                                <textarea class="form-control" rows="6" cols="75" id="textDetailtitle" >

                                </textarea>


                                <p></p>

                                <textarea class="form-control" rows="6" cols="75" id="textDetailsubtitle" >

                                </textarea>



                                <p></p>
                                <button type="button" id="btTitleEdit"  class="btn btn-outline-secondary">แก้ไข <i class="fa fa-edit"></i></button>


                                <input type="submit" class="btn btn-success " value="บันทึก" id="btTitleSave">
                                <input type="reset" class="btn btn-danger  " value="ยกเลิก" id="btTitleCancel">



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
            <button id="btUploadStudyplan" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

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


              <!-- Start Page Content 1 -->

                <div class="row">
                      <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">

                                <img id="imgTopic1" alt="Mountain View" style="width:100%">

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
                                      <input  class="upload" id="fileUploadImageTopic1" type="file"/>
                                    </label>
                                    <div class="settings_actions vertical"><a data-action="choose_from_uploaded"><i class="fa fa-picture-o"></i> Choose from Uploads</a><a class="disabled" data-action="remove_current_image"><i class="fa fa-ban"></i> Remove Current Image</a></div>

                                  </div>
                                </div>

                                <input type="text" class="form-control form-control-line" id="textTopicSubjects">
                                <textarea class="form-control" rows="6" cols="75" id="textDetailSubjects" >

                                </textarea>
                                <p></p>

                                <button id="btUploadImageTopic1" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>

                                <button type="button" id="btIcEditSubjects"  class="btn btn-outline-secondary">แก้ไข <i class="fa fa-edit"></i></button>

                                <input type="submit" class="btn btn-success " value="บันทึก" id="btIcSaveSubjects">
                                <input type="reset" class="btn btn-danger  " value="ยกเลิก" id="btIcCancelSubjects">




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

                                <img id="imgTopIc2" alt="Mountain View" style="width:100%">

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
                                      <input  class="upload" id="fileUploadImageTopic2" type="file"/>
                                    </label>
                                    <div class="settings_actions vertical"><a data-action="choose_from_uploaded"><i class="fa fa-picture-o"></i> Choose from Uploads</a><a class="disabled" data-action="remove_current_image"><i class="fa fa-ban"></i> Remove Current Image</a></div>

                                  </div>
                                </div>


                                <input type="text" class="form-control form-control-line" id="textTopicQualifications">
                                <input type="text" class="form-control form-control-line" id="textDetailQualifications">
                                <input type="text" class="form-control form-control-line" id="textTopicStructure">
                                <input type="text" class="form-control form-control-line" id="textDetailStructure">


                                <p></p>

                                <button id="btUploadImageTopic2" class="btn btn-success waves-effect waves-light m-r-10">ตกลง</button>

                                <button type="button" id="btIcEditQualifications"  class="btn btn-outline-secondary">แก้ไข <i class="fa fa-edit"></i></button>
                                <button type="button" id="btIcModifyQualifications"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                  <input type="submit" class="btn btn-success " value="บันทึก" id="btIcSaveQualifications">
                                  <input type="reset" class="btn btn-danger  " value="ยกเลิก" id="btIcCancelQualifications">

                                </div>
                            </div>
                        </div>
                    </div>

                     <!-- Modal Qualifications -->
    <div class="modal fade" id="addOpenModifyQualifications" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล กลุ่มวิชาธุรกิจอัจฉริยะและการวิเคราะห์ข้อมูล</h6>

          </div>
          <div class="modal-body">
            <div class="modal-body">
              <div id="textEducation" class="form-group">
                <label for="facultyHisEdu" >ชื่อหัวข้อ</label>
                    <div class="input-group">
                    <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
                    <input id="TopicQualifications" type="text"  class="form-control" >
                  </div>
              </div>
            </div>
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyQualifications">

          </div>
          <div class="modal-footer">
            <button id="btUploadModifyQualifications" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   ตกลง</button>

            <button id="btCloseModifyQualifications" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Qualifications2-->
      <div class="modal fade" id="addOpenModifyQualifications2" role="dialog" aria-labelledby="Message" aria-hidden="true">
            <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                    <h4 class="modal-title">เกิดข้อพลาด</h4>

                  </div>

                  <div class="modal-body">
                    <h8 class="card-subtitle">กรุณาใส่ไฟล์ PDF</h8>
                  </div>
                  <div class="modal-footer">

                      <button id="btCloseModifyQualifications" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Qualifications3 -->
                  <div class="modal fade" id="addOpenModifyQualifications3" role="dialog" aria-labelledby="Message" aria-hidden="true">
                      <div class="modal-dialog modal-sm">
                          <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title"></h4>

                            </div>

                              <div class="modal-body">
                                  <h8 class="card-subtitle">เพิ่มข้อมูลเสร็จสิ้น</h8>
                              </div>
                                  <div class="modal-footer">

                                      <button id="btCloseModifyQualifications" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
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

                                <img id="imgTopic3" alt="Mountain View" style="width:100%">

                                </div>
                            </div>
                        </div>


                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 3</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageTopic3"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicGraduates">
                                <textarea class="form-control" rows="6" cols="75" id="textDetailGraduates" >

                                </textarea>
                                <p></p>


                                <button id="btUploadImageTopic3" class="btn btn-success waves-effect waves-light m-r-10">ตกลง</button>

                                <button type="button" id="btIcEditGraduates"  class="btn btn-outline-secondary">แก้ไข <i class="fa fa-edit"></i></button>


                                  <input type="submit" class="btn btn-success " value="บันทึก" id="btIcSaveGraduates">
                                  <input type="reset" class="btn btn-danger  " value="ยกเลิก" id="btIcCancelGraduates">

                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- END Page Content 3 -->



                    <!-- Start Page Content 4 -->

                    <div class="row">
                  <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">

                                <img id="imgTopic4" alt="Mountain View" style="width:100%">

                                </div>
                            </div>
                        </div>


                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 4</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageTopic4"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicLaboratory">
                                <textarea class="form-control" rows="6" cols="75" id="textDetailLaboratory" >

                                </textarea>
                                <p></p>


                                <button id="btUploadImageTopic4" class="btn btn-success waves-effect waves-light m-r-10">ตกลง</button>

                                <button type="button" id="btEditLaboratory"  class="btn btn-outline-secondary">แก้ไข <i class="fa fa-edit"></i></button>


                                  <input type="submit" class="btn btn-success " value="บันทึก" id="btSaveLaboratory">
                                  <input type="reset" class="btn btn-danger  " value="ยกเลิก" id="btCancelLaboratory">

                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- END Page Content 4 -->


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

                                        <h4 class="text-white card-title">หัวข้อดาวน์โหลดเอกสาร เพิ่มเติม (หลักสูตรวิทยาการสารสนเทศบัณฑิต สาขาวิชานิเทศศาสตร์ดิจิทัล หลักสูตรปรับปรุง พ.ศ.2560)</h4>
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




<script src="../js/bachelorIc2560.js"></script>





</body>

</html>
