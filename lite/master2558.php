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



                <!-- Start Page Content 1 -->

                <div class="row">
                      <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">
                                
                                <img id="imgTopic1" alt="Mountain View" style="width:100%">

                                <input class="btn btn-outline-inverse col-md-12" type="file" id="fileUploadImageTopic1">
                                <p></p>
                                <input type="text" class="form-control form-control-line" id="textTopic1">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 1</h4>
                                
                                
<p></p>
                                <h5 class="card-title">รหัสและชื่อหลักสูตรระดับมหาบัณฑิต</h5>

                                <h7 class="card-subtitle">(ภาษาไทย)</h7><input type="text" class="form-control form-control-line" id="textCouresTileThai1">

                                <h7 class="card-subtitle">(ภาษาอังกฤษ)</h7><input type="text" class="form-control form-control-line" id="textCouresTileEnglish1">
<p></p>
                                <h5 class="card-title">ชื่อปริญญาและสาขาวิชาระดับมหาบัณฑิต</h5>

                                <h7 class="card-subtitle">ชื่อเต็ม (ภาษาไทย)</h7><input type="text" class="form-control form-control-line" id="textDegreeTileFullNameThai">

                                <h7 class="card-subtitle">ชื่อเต็ม (ภาษาอังกฤษ)</h7><input type="text" class="form-control form-control-line" id="textDegreeTileFullNameEnglish">

                                <h7 class="card-subtitle">ชื่อย่อ (ภาษาไทย)</h7><input type="text" class="form-control form-control-line" id="textDegreeTileInitialsThai">

                                <h7 class="card-subtitle">ชื่อย่อ (ภาษาอังกฤษ)</h7><input type="text" class="form-control form-control-line" id="textDegreeTileInitialsEnglish">

                                <p></p>
                                
                                <button id="btUploadImageTopic1" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                
                                <button type="button" id="btEditTopic1"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>

                                <button type="button" id="btModifyTopic1"  class="btn btn-outline-secondary">แก้ไขรายละเอียด รายวิชาที่เปิดสอน <i class="fa fa-edit"></i></button>

                                <input type="submit" class="btn btn-success " value="Save" id="btSaveTopic1">
                                <input type="reset" class="btn btn-danger  " value="Cancel" id="btCancelTopic1">

                                
                                

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Topic1 -->
    <div class="modal fade" id="addOpenModifyTopic1" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">รายวิชาที่เปิดสอน</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyTopic1">
   
          </div>
          <div class="modal-footer">
            <button id="btUploadModifyTopic1" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            
            <button id="btCloseModifyTopic1" class="btn btn-danger" data-dismiss="modal">Close</button>
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
                                
                                <img id="imgTopic2" alt="Mountain View" style="width:100%">

                                <input class="btn btn-outline-inverse col-md-12" type="file" id="fileUploadImageTopic2"><hr>
                                <input type="text" class="form-control form-control-line" id="textMasterDegreeTopic">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 2</h4>
                                

                                <input type="text" class="form-control form-control-line" id="textMasterDegreeDetail1">
                                <input type="text" class="form-control form-control-line" id="textMasterDegreeDetail2">

                                <input type="text" class="form-control form-control-line" id="textMasterDegreePlan1Topic"> 
                                <input type="text" class="form-control form-control-line" id="textMasterDegreePlan1Detail">

                                <input type="text" class="form-control form-control-line" id="textMasterDegreePlan2Topic"> 
                                <input type="text" class="form-control form-control-line" id="textMasterDegreePlan2Detail">  


                                <p></p>
                                <button id="btUploadImageTopic2" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                
                                <button type="button" id="btEditTopic2"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>

                                <button type="button" id="btModifyTopic2"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                <input type="submit" class="btn btn-success " value="Save" id="btSaveTopic2">
                                <input type="reset" class="btn btn-danger  " value="Cancel" id="btCancelTopic2">


                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Digital-->
    <div class="modal fade" id="addOpenModifyTopic2" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล แผน ก แบบ ก 2</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyTopic2">
   
          </div>
          <div class="modal-footer">
            <button id="btUploadModifyTopic2" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            
            <button id="btCloseModifyTopic2" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

                    <!-- END Page Content 2 -->


                     <!-- Start Page Download  -->

            <div class="row">
                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">เอกสารหลักสูตร</h4>

                                <h6 class="card-subtitle">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)  </h6> 
                                
                                <form action="/action_page.php">
                                    
                                <button id="btAddStructure" type="submit" class="btn btn-success waves-effect waves-light m-r-10">ดูรายละเอียด</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">ขั้นตอนและแบบฟอร์มการสอบโครงร่างวิทยานิพนธ์</h4>

                                <h6 class="card-subtitle">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)  </h6> 
                                
                                <form action="/action_page.php">
                                    
                                <button id="btAddStep" type="submit" class="btn btn-success waves-effect waves-light m-r-10">ดูรายละเอียด</button>
                                </form>

                                </div>
                            </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">ดาวน์โหลดแบบฟอร์มอื่นๆ</h4>

                                <h6 class="card-subtitle">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558) </h6> 
                                
                                <form action="/action_page.php">
                                    
                                <button id="btAddDownload" type="submit" class="btn btn-success waves-effect waves-light m-r-10">ดูรายละเอียด</button>
                                </form>

                                </div>
                            </div>
                </div>

                
              </div>










    
        

    <?php include('import-javascript.php')?>

    


<script src="../js/master2558.js"></script>



    
     
</body>

</html>