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
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Student</li>
                            
                        </ol>
                    </div>
                </div>

                

            <!-- Start Page Content  -->

              <div class="row">
                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                    <i class="fa fa-trophy fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ผลงานนักศึกษา</h4>

                                <h6 class="card-subtitle">ระดับปริญญาตรี</h6> 
                                
                                <form action="/action_page.php">
                                    
                                <button type="button" id="btAddstudent1" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                    <i class="fa fa-camera-retro fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ภาพกิจกรรมนักศึกษา</h4>


                                <h6 class="card-subtitle">ระดับปริญญาตรี</h6> 
                                
                                <form action="/action_page.php">
                                    
                                <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                </form>

                                </div>
                            </div>
                </div>   

              </div>

              <div class="row">
                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                    <i class="fa fa-trophy fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ผลงานนักศึกษา</h4>

                                <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6> 
                                
                                <form action="/action_page.php">
                                    
                                <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                </form>

                                </div>
                            </div>
                </div>

                <div class="col-lg-6">
                            <div class="card">
                                <div class="card-block">
                                    <i class="fa fa-camera-retro fa-5x" aria-hidden="true"></i>
                                <h4 class="card-title">ภาพกิจกรรมบันฑิตศึกษา</h4>


                                <h6 class="card-subtitle">ระดับบัณฑิตศึกษา</h6> 
                                
                                <form action="/action_page.php">
                                    
                                <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                </form>

                                </div>
                            </div>
                </div>   

              </div>



                
             
                    </div>

               

                  </div>
                    


            </div>
          </div>


          <!-- Modal -->
    <div class="modal fade" id="addStudent1" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">ผลงานนักศึกษา</h4>
            <h6 class="card-subtitle">ระดับปริญญาตรี</h6> 
          </div>
            <br>
         <!-- Column -->
    <div class="col-md-12">
      <div class="card">
        <div class="card-block">

          <form class="form-horizontal form-material">

            <div class="form-group">
              <label class="col-md-12">Full Name</label>
                <div class="col-md-12">
                  <input id="nameCreateUser" type="text"  class="form-control form-control-line">
                </div>
            </div>

            <div class="form-group">
              <label for="example-email" class="col-md-12">Email</label>
                <div class="col-md-12">
                  <input id="emailCreateUser" type="email"  class="form-control form-control-line" name="example-email" id="example-email">
                </div>
            </div>

            <div class="form-group">
              <label class="col-md-12">Password</label>
                <div class="col-md-12">
                  <input id="passwordCreateUser" type="password"  class="form-control ">
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-12">Phone No</label>
                <div class="col-md-12">
                    <input id="phoneCreateUser" type="text"  class="form-control form-control-line">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-12">Select Rank</label>
                <div class="col-sm-12">
                    <select id="rankCreateUser" class="form-control form-control-line">
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-12 text-center">
                    <button id="btCreateUser" class="btn btn-success">Sign-up</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

            </form>
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
    <script src="../js/student.js"></script>
    
</body>

</html>
