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
                                         <img id="imageProfile"  class="img-circle" width="180"  />
                                            <h4 class="card-title m-t-10"></h4>
                                            <h6 class="card-subtitle">Accouts Manager</h6>
                                            <input class=" btn btn-outline-inverse col-md-6" type="file" id="fileUploadImageProfile"><hr>
                                                <div class="form-group">
                                            <button id="btUploadImageProfile" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
                                            <button id="btClearTextFile" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
                                          </div>
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
                                                        <button id="btUpdatePassword"class="btn btn-danger waves-effect waves-ligh"><i class="ti ti-lock"></i>  Change Password</button>

                                                        <button id="btLoadingProfile" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
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
                                    <div class="card">
                                      <!-- Nav tabs -->
                                      <ul class="nav nav-tabs profile-tab" role="tablist">
                                          <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#hisEducation" role="tab">History Education</a> </li>
                                          <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#hisWork" role="tab">History Work</a> </li>
                                          <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#academic" role="tab">Academic</a> </li>
                                      </ul>
                                      <!-- Tab panes -->
                                      <div class="tab-content">
                                          <div class="tab-pane active" id="hisEducation" role="tabpanel">
                                            <div class="card-block ">
                                              <div class="card">
                                                <div class="form-group">
                                                    <label class="col-sm-12">Select</label>
                                                    <div class="col-sm-12">
                                                        <select id="rankHisEducation" class="form-control form-control-line">
                                                            <option>History Education</option>
                                                            <option>Expertise</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                <div class="form-group">
                                                <textarea id="txtAreaHisEducation" class="form-control" row="5"></textarea>
                                              </div>
                                              <div class="form-group">
                                                <button id="btSubmitHisEducation" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
                                            </div>

                                              </div>
                                                <div class="card-block bg-success">
                                                  <h4 class="text-white card-title">History Education</h4>
                                                      </div>
                                                  <div class="card-block">
                                                    <form class="form-horizontal form-material ">
                                                      <div class="table-responsive">
                                                          <table class="table text-center">
                                                              <thead >
                                                                  <tr >
                                                                      <th class="text-center">DETAILS</th>

                                                                      <th class="text-center">MANAGE</th>
                                                                  </tr>
                                                              </thead>
                                                              <tbody id="list_his_education">

                                                              </tbody>
                                                          </table>
                                                      </div>
                                                    </form>

                                                  </div>
                                                  <br>
                                                  <div class="card-block bg-success">
                                                    <h4 class="text-white card-title">Expertise</h4>
                                                        </div>
                                                    <div class="card-block">
                                                      <form class="form-horizontal form-material ">
                                                        <div class="table-responsive">
                                                            <table class="table text-center">
                                                                <thead >
                                                                    <tr >
                                                                        <th class="text-center">DETAILS</th>

                                                                        <th class="text-center">MANAGE</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="list_expertise">

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                      </form>
                                                    </div>

                                              </div>
                                            </div>
                                          </div>
                                          <div class="tab-pane active" id="hisWork" role="tabpanel">
                                          </div>
                                          <div class="tab-pane active" id="academic" role="tabpanel">
                                          </div>
                                      </div>
                                    </div>
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
    <!-- Modal -->
    <div class="modal fade" id="changePassModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messagePassModal">Change Password</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="passwordUpdate">Please Input Password</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="ti-lock"></i></div>
                  <input id="passwordUpdate" type="password"  class="form-control ">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button id="btSetPassword"  class="btn btn-success waves-effect waves-light m-r-5"><i class="fa fa-check"></i> Submit</button>
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <?php include('import-javascript.php')?>
    <script src="../js/profile.js"></script>

</body>

</html>
