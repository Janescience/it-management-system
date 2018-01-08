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
                                  

                                  <select class="form-control js--animations" id="CourseMenu">
                                                    <optgroup label="ระดับปริญญาตรี">
                                                      <option value="Course3">หลักสูตรวิทยาการสารสนเทศบัณฑิต สาขาวิชานิเทศศาสตร์ดิจิทัล (หลักสูตรปรับปรุง พ.ศ. 2560)</option> 
                                                        <option value="Course2">หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปรับปรุง พ.ศ 2560)</option>
                                                        <option value="Course1">หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปี พ.ศ 2555)</option>                                                      
                                                        
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

<p></p> 
                                    <button class="btn btn-success waves-effect waves-light m-r-10" onclick="coursemenu()">เลือก</button>
                                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-block">
                                <h3 class="card-title">หลักสูตร</h3>
                                 <button id="btAddOpenCourses" type="submit" class="btn btn-info waves-effect waves-light m-t-10">รายวิชาที่เปิดสอน</button>
                                
                                  <p></p>                                                                               
                                <textarea class="form-control" rows="6" cols="75" id="textDetailtitle" >
                                    
                                </textarea>
                                

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


                <!-- Modal Studyplan -->
    <div class="modal fade" id="addStudyplan" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageStudyplan">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">แผนการศึกษา หลักสูตรวิทยาการสารสนเทศบัณฑิต</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadStudyplan">
   
          </div>
          <div class="modal-footer">
            <button id="btUploadStudyplan" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            
            <button id="btCloseStudyplan" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


    <!-- Modal Studyplan -->
    <div class="modal fade" id="addOpenCourses" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">วิชาที่เปิดสอน ระดับปริญญาตรี</h6>

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



              <!-- Start Page Content 1 -->

                <div class="row">
                      <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">
                                
                                <img id="imgTopic1" alt="Mountain View" width="380" height="235">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 1</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageTopic1"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicSubjects"> 
                                <textarea class="form-control" rows="6" cols="75" id="textDetailSubjects" >
                                    
                                </textarea>
                                <br>
                                <button id="btUploadImageTopic1" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                
                                <button type="button" id="btIcEditSubjects"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>

                                <button type="button" id="btIcModifySubjects"  class="btn btn-outline-secondary">แก้ไขรายวิชาที่เปิดสอน <i class="fa fa-edit"></i></button>

                                <input type="submit" class="btn btn-success " value="Save" id="btIcSaveSubjects">
                                <input type="reset" class="btn btn-danger  " value="Cancel" id="btIcCancelSubjects">

                                
                                

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Studyplan -->
    <div class="modal fade" id="addOpenModifyEs" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageOpenCourses">อัพโหลด PDF</h4>
            <h6 class="card-subtitle">ข้อมูล กลุ่มวิชาซอฟต์แวร์วิสาหกิจ</h6>

          </div>
          <div class="modal-body">
            <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadModifyEs">
   
          </div>
          <div class="modal-footer">
            <button id="btUploadModifyEs" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            
            <button id="btCloseModifyEs" class="btn btn-danger" data-dismiss="modal">Close</button>
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
                                
                                <img id="imgTopic2" alt="Mountain View" width="380" height="235">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 2</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageTopic2"><hr>

                                <input type="text" class="form-control form-control-line" id="textTopicQualifications">
                                <input type="text" class="form-control form-control-line" id="textDetailQualifications">
                                <input type="text" class="form-control form-control-line" id="textTopicStructure">
                                <input type="text" class="form-control form-control-line" id="textDetailStructure">
                      
                                <br>
                                
                                <button id="btUploadImageTopic2" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>

                                <button type="button" id="btIcEditQualifications"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>
                                <button type="button" id="btIcModifyQualifications"  class="btn btn-outline-secondary">แก้ไขรายละเอียด <i class="fa fa-edit"></i></button>

                                  <input type="submit" class="btn btn-success " value="Save" id="btIcSaveQualifications">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="btIcCancelQualifications">

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
            <button id="btUploadModifyBida" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i>   Submit</button>
            
            <button id="btCloseModifyBida" class="btn btn-danger" data-dismiss="modal">Close</button>
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
                                
                                <img id="imgTopic3" alt="Mountain View" width="380" height="235">
                            
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
                                <br>
                                
                                <button id="btUploadImageTopic3" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>

                                <button type="button" id="btIcEditGraduates"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>
                                

                                  <input type="submit" class="btn btn-success " value="Save" id="btIcSaveGraduates">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="btIcCancelGraduates">

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
                                
                                <img id="imgTopic4" alt="Mountain View" width="380" height="235">
                            
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
                                <br>
                                
                                <button id="btUploadImageTopic4" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>

                                <button type="button" id="btEditLaboratory"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>
                                

                                  <input type="submit" class="btn btn-success " value="Save" id="btSaveLaboratory">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="btCancelLaboratory">

                                </div>
                            </div>
                        </div>
                    </div>

                   

                    <!-- END Page Content 4 -->


                    <!-- Start Page Download -->

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">Download</h4>
                                <h6 class="card-subtitle">Latest Comments on users from Material</h6> 
                                
                                <form action="/action_page.php">
                                    <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadPdfBachelor">
                                <button id="btUploadPdfBachelor" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                </form>
                                <br>
                                <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
                                <br>
                                <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>

                                </div>
                            </div>
                        </div>

                    








      </div>
            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>

    <?php include('import-javascript.php')?>

    <script language = javascript>

        function coursemenu() {

        var s = document.getElementById('CourseMenu');
        var item1 = s.options[s.selectedIndex].value;

        if (item1 == "Course1") {
            bachelor2555();
        }
            else if (item1 == "Course2") {
            
            bachelor2560();
        }
            else if (item1 == "Course3") {
            
        }
        }

    </script>


<script>
    function bachelor2555(){      
        src="../js/bachelor2555.js"
        location.reload();
        alert("I am an alert box! 1");
    }
</script>

<script>
    function bachelor2560(){
        src="../js/bachelor2560.js"
        location.reload();
        alert("I am an alert box! 2");
    }
</script>


<script src="../js/bachelorIc2560.js"></script>



    
    
</body>

</html>
