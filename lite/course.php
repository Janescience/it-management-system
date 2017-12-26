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
                                  

                                  <select class="form-control js--animations" id="CourseMenu" >
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


                                    <button class="btn btn-success waves-effect waves-light m-r-10" onclick="coursemenu()">ดูรายละเอียด</button>
                                                
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
                                    <input type="file" name="pic" accept="image/*">
                                <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">ดูรายละเอียด</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                <h4 class="card-title">วิชาที่เปิดสอน ระดับปริญญาตรี</h4>
                                 
                                
                                <button type="submit" class="btn btn-info waves-effect waves-light m-t-10">รายวิชาที่เปิดสอน</button>

                                </div>
                            </div>
                </div>
              </div>

              <!-- Start Page Content 1 -->

                <div class="row">
                      <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">
                                
                                <img id="imgBachelorEs" alt="Mountain View" width="380" height="235">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 1</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageBachelorEs"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicBachelorEs"> 
                                <textarea class="form-control" rows="6" cols="75" id="textDetailBachelorEs" >
                                    
                                </textarea>
                                <br>
                                <button id="btUploadImageBachelorEs" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                
                                <button type="button" id="btBachelorEditEs"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>
                                  <input type="submit" class="btn btn-success " value="Save" id="btBachelorSaveEs">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="btBachelorCancelEs">

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Start Page Content 2 -->

                    <div class="row">
                  <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">
                                
                                <img id="imgBachelorIc" alt="Mountain View" width="380" height="235">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 2</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageBachelorIc"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicBachelorIc"> 
                                <textarea class="form-control" rows="6" cols="75" id="textDetailBachelorIc" >
                                    
                                </textarea>
                                <br>
                                
                                <button id="btUploadImageBachelorIc" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>

                                <button type="button" id="btBachelorEditIc"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>
                                  <input type="submit" class="btn btn-success " value="Save" id="btBachelorSaveIc">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="btBachelorCancelIc">

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Start Page Content 3 -->

                    <div class="row">
                  <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">
                                
                                <img id="imgBachelorMis" alt="Mountain View" width="380" height="235">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 3</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageBachelorMis"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicBachelorMis"> 
                                <textarea class="form-control" rows="6" cols="75" id="textDetailBachelorMis" >
                                    
                                </textarea>
                                <br>
                                
                                <button id="btUploadImageBachelorMis" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>

                                <button type="button" id="btBachelorEditMis"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>
                                  <input type="submit" class="btn btn-success " value="Save" id="btBachelorSaveMis">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="btBachelorCancelMis">

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Start Page Content 3 -->

                    <div class="row">
                  <div class="col-lg-5">
                            <div class="card">
                                <div class="card-block">
                                
                                <img id="imgBachelorIs" alt="Mountain View" width="380" height="235">
                            
                                </div>
                            </div>
                        </div>
                    

                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">ส่วนที่ 4</h4>
                                <input class="btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageBachelorIs"><hr>
                                <input type="text" class="form-control form-control-line" id="textTopicBachelorIs"> 
                                <textarea class="form-control" rows="6" cols="75" id="textDetailBachelorIs" >
                                    
                                </textarea>
                                <br>
                                
                                <button id="btUploadImageBachelorIs" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>

                                <button type="button" id="btBachelorEditIs"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>
                                  <input type="submit" class="btn btn-success " value="Save" id="btBachelorSaveIs">
                                  <input type="reset" class="btn btn-danger  " value="Cancel" id="btBachelorCancelIs">

                                </div>
                            </div>
                        </div>
                    </div>


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

        if (s == "Course1") {
            <script src="../js/bachelor2555.js"></script>
        }
            else if (s == "Course2") {
            <script src="../js/bachelor2560.js"></script>
        }
            else if (s == "Course3") {
            
        }
        }

    </script>

<script src="../js/bachelor2555.js"></script>


    
    
</body>

</html>
