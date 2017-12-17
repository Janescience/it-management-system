<!DOCTYPE html>
<html lang="en">

<head>
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
                        <h3 class="text-themecolor m-b-0 m-t-0">Profile</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Profile</li>
                        </ol>
                    </div>
                </div>
                <!-- Row -->
                <div class="row">
                  <div class="col-lg-12 col-xlg-9 col-md-12">
                      <div class="card">
                          <!-- Nav tabs -->
                          <ul class="nav nav-tabs profile-tab" role="tablist">
                              <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#profile" role="tab">Profile</a> </li>
                              <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#history" role="tab">History | Work</a> </li>
                              <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#office" role="tab">Office Owner</a> </li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="tab-content">
                              <div class="tab-pane active" id="profile" role="tabpanel">

                                        <div class="col-lg-12">
                                  <div class="row">
                                  <div class="card-block ">
                                    <div class="card">
                                      <center class="m-t-30">
                                         <img src="../assets/images/users/user.png" class="img-circle" width="150" />
                                            <h4 class="card-title m-t-10"></h4>
                                            <h6 class="card-subtitle">Accoubts Manager</h6>
                                      </center>
                                        </div>
                                      </div>

                                        <div class="card-block">
                                            <div class="card">
                                              <div class="card-block">
                                              <div class="form-group">
                                                <label for="nameProfile">Full Name</label>
                                                    <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-user"></i></div>
                                                    <input id="nameProfile" type="text" class="form-control" disabled="true">
                                                  </div>
                                              </div>
                                              <div class="form-group">
                                                <label for="emailCreateUser" >Email</label>
                                                    <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-email"></i></div>
                                                    <input id="emailProfile" type="email"  class="form-control" disabled="true">
                                                  </div>
                                              </div>

                                              <div class="form-group">
                                                  <label for="phoneCreateUser">Phone No</label>
                                                  <div class="input-group">
                                                    <div class="input-group-addon"><i class="ti-mobile"></i></div>
                                                      <input id="phoneProfile" type="text"  class="form-control" disabled="true">
                                                  </div>
                                              </div>

                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <button id="btUpdateProfile"class="btn btn-info waves-effect waves-ligh"><i class="ti ti-pencil-alt"></i>  Update Profile</button>
                                                        <button id="btLoading" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
                                                        <button id="btSubmitUpdateProfile" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
                                                        <button id="btCancelUpdateProfile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
                                                    </div>
                                                </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>

                              </div>
                            </div>

                        </div>
                              <!--second tab-->
                              <div class="tab-pane" id="history" role="tabpanel">
                                  <div class="card-block">

                                  </div>
                              </div>
                              <div class="tab-pane" id="office" role="tabpanel">
                                  <div class="card-block">


                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
            <footer class="footer">
                Copyright © Information Technology 2017
            </footer>

        </div>
    </div>

    <?php include('import-javascript.php')?>
    <script src="../js/profile.js"></script>

</body>

</html>
