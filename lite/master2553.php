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
                                                        <option >หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปี พ.ศ. 2553)</option>
                                                        <option >หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>                                                 
                                                    </optgroup>

                                                    <optgroup label="ระดับปริญญาตรี">
                                                        <option >หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปี พ.ศ 2555)</option>                        
                                                        <option >หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปรับปรุง พ.ศ 2560)</option>
                                                        
                                                        <option >หลักสูตรวิทยาการสารสนเทศบัณฑิต สาขาวิชานิเทศศาสตร์ดิจิทัล (หลักสูตรปรับปรุง พ.ศ. 2560)</option>    
                                                    </optgroup>

                                                    <optgroup label="ระดับปริญญาเอก">
                                                        <option >หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปี พ.ศ. 2553) </option>
                                                        <option >หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                        <option >หลักเกณฑ์การพิจารณาวารสารทางวิชาการเพื่อสำเร็จการศึกษา</option>                                                        
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

                                <textarea class="form-control" rows="6" cols="75" id="textDetailsubtitle" >
                                    
                                </textarea>

                                
                                
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
                                
                                <img id="imgDigital" alt="Mountain View" style="width:100%">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 1</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageDigital"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicDigital"> 
                                <textarea class="form-control" rows="6" cols="75" id="textDetailDigital" >
                                    
                                </textarea>
                                <p></p> 
                                <button id="btUploadImageDigital" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                
                                <button type="button" id="btEditDigital"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>

                                <button type="button" id="btModifyDigital"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                <input type="submit" class="btn btn-success " value="Save" id="btSaveDigital">
                                <input type="reset" class="btn btn-danger  " value="Cancel" id="btCancelDigital">

                                
                                

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Digital-->
    <div class="modal fade" id="addOpenModifyDigital" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล กลุ่มวิชาสื่อดิจิทัล</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyDigital">
   
          </div>
          <div class="modal-footer">
            <button id="btUploadModifyDigital" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            
            <button id="btCloseModifyDigital" class="btn btn-danger" data-dismiss="modal">Close</button>
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
                                
                                <img id="imgEnterprise" alt="Mountain View" style="width:100%">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 2</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageEnterprise"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicEnterprise"> 
                                <textarea class="form-control" rows="6" cols="75" id="textDetailEnterprise" >
                                    
                                </textarea>
                                <p></p> 
                                <button id="btUploadImageEnterprise" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                
                                <button type="button" id="btEditEnterprise"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>

                                <button type="button" id="btModifyEnterprise"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                <input type="submit" class="btn btn-success " value="Save" id="btSaveEnterprise">
                                <input type="reset" class="btn btn-danger  " value="Cancel" id="btCancelEnterprise">

                                
                                

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Digital-->
    <div class="modal fade" id="addOpenModifyEnterprise" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล กลุ่มวิชาระบบวิสาหกิจ</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyEnterprise">
   
          </div>
          <div class="modal-footer">
            <button id="btUploadModifyEnterprise" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            
            <button id="btCloseModifyEnterprise" class="btn btn-danger" data-dismiss="modal">Close</button>
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
                                
                                <img id="imgKnowledge" alt="Mountain View" style="width:100%">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 3</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageKnowledge"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicKnowledge"> 
                                <textarea class="form-control" rows="6" cols="75" id="textDetailKnowledge" >
                                    
                                </textarea>
                                <p></p> 
                                <button id="btUploadImageKnowledge" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                
                                <button type="button" id="btEditKnowledge"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>

                                <button type="button" id="btModifyKnowledge"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                <input type="submit" class="btn btn-success " value="Save" id="btSaveKnowledge">
                                <input type="reset" class="btn btn-danger  " value="Cancel" id="btCancelKnowledge">

                                
                                

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Digital-->
    <div class="modal fade" id="addOpenModifyKnowledge" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล กลุ่มวิชาการจัดการความรู้</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyKnowledge">
   
          </div>
          <div class="modal-footer">
            <button id="btUploadModifyKnowledge" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            
            <button id="btCloseModifyKnowledge" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

                    <!-- END Page Content 3 -->



                     <!-- Start Page Download  -->

            <div class="row">
                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">โครงสร้างหลักสูตรระดับมหาบัณฑิต</h4>

                                <h6 class="card-subtitle">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2553)  </h6> 
                                
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

                                <h6 class="card-subtitle">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2553)  </h6> 
                                
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

                                <h6 class="card-subtitle">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2553) </h6> 
                                
                                <form action="/action_page.php">
                                    
                                <button id="btAddDownload" type="submit" class="btn btn-success waves-effect waves-light m-r-10">ดูรายละเอียด</button>
                                </form>

                                </div>
                            </div>
                </div>

                
              </div>










    
        

    <?php include('import-javascript.php')?>

    


<script src="../js/master2553.js"></script>



    
    
</body>

</html>