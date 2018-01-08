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
                                                    <optgroup label="ระดับปริญญาเอก">
                                                        <option value="bounceOut">หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปี พ.ศ. 2553) </option>
                                                        <option value="bounceOutDown">หลักสูตรปรัชญาดุษฎีบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>
                                                        
                                                        <option value="bounceOutLeft">หลักเกณฑ์การพิจารณาวารสารทางวิชาการเพื่อสำเร็จการศึกษา</option>                                                        
                                                    </optgroup> 
     
                                                    <optgroup label="ระดับปริญญาตรี">                                                     
                                                        <option value="Course2">หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปรับปรุง พ.ศ 2560)</option>
                                                        <option value="Course1">หลักสูตรวิทยาการสารสนเทศบัณทิต (หลักสูตรปี พ.ศ 2555)</option>
                                                        <option value="Course3">หลักสูตรวิทยาการสารสนเทศบัณฑิต สาขาวิชานิเทศศาสตร์ดิจิทัล (หลักสูตรปรับปรุง พ.ศ. 2560)</option>    
                                                    </optgroup>

                                                     <optgroup label="ระดับปริญญาโท">
                                                        
                                                        <option value="bounceIn">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปี พ.ศ. 2553)</option>  
                                                        <option value="bounceInDown">หลักสูตรวิทยาการสารสนเทศมหาบัณฑิต (หลักสูตรปรับปรุง พ.ศ. 2558)</option>                      
                                                    </optgroup>                                               
                                                </select>

<p></p> 
                                                
                            </div>
                        </div>
                    </div>
                </div>

<!-- Start Page Content  -->

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-block">
                                <h3 class="card-title">หลักสูตร</h3>
                                <h6 class="card-subtitle">ระดับปริญญาเอก</h6>
                                 <button id="btAddOpenCourses" type="submit" class="btn btn-info waves-effect waves-light m-t-10">แก้ไขรายวิชาที่เปิดสอน</button>
                                
                                  <p></p>                                                                               
                                
                                <input type="text" class="form-control form-control-line" id="textDetailtitle">

                                <p></p> 

                                 <textarea class="form-control" rows="4" cols="75" id="textDetail" >
                                    
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

                 <?php include('import-javascript.php')?>

    


<script src="../js/doctorate2553.js"></script>



    
     
</body>

</html>