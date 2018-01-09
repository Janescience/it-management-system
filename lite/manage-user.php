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

    <style>
    .results tr[visible='false'],
    .no-result{
      display:none;
    }

    .results tr[visible='true']{
      display:table-row;
    }


    #container {
    position:relative;
    }

    #imageListProfile {
    position: absolute;
    left: 25px;
    top: 15px;
    }

    </style>

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
                        <h3 class="text-themecolor m-b-0 m-t-0">Manage User</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Manage</li>
                        </ol>
                    </div>
                </div>
                <!-- Row -->

                <div class="row">

                    <div class="col-md-12">
                      <div class="card">
                        <div class="card-block">
                          <div class="row">
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">
                            </div>
                            <div class="col-md-4">

                            <div class="form-group">
                              <span class="counter pull-right"></span>
                                <div class="input-group">
                                  <div class="input-group-addon"><i class="ti-search"></i></div>
                                  <input id="searchUser" type="text"  class="form-control" >
                                </div>
                              </div>
                            </div>
                          </div>
                        <div class="card-block bg-info">
                          <h4 class="text-white card-title">Users</h4>
                          <div class="message-box contact-box">
                          <h2 class="add-ct-btn">
                            <button type="button" id="btAddUser" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                          </h2>
                        </div>
                      </div>

                              <form class="form-horizontal form-material ">
                                <div class="table-responsive">
                                    <table class="table text-center color-bordered-table results success-bordered-table">
                                        <thead >
                                            <tr >
                                              <th class="text-center">Profile</th>
                                                <th class="text-center">Name-surename</th>
                                                <th class="text-center">E-mail</th>
                                                <th class="text-center">Telephone</th>
                                                <th class="text-center">Role</th>
                                                <th class="text-center">Actions</th>
                                            </tr>
                                            <tr class="warning no-result">
                                              <td colspan="6"><i class="fa fa-warning"></i> No result</td>
                                            </tr>
                                        </thead>
                                        <tbody id="list_user">

                                        </tbody>
                                    </table>
                                </div>
                              </form>
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
    <div class="modal fade" id="messageModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="messageModalLabel">Message</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!--==================================== Delete ====================================================-->

    <div class="modal fade" id="deleteUserModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messagePassModal">Delete Successfully</h4>
          </div>
          <div class="modal-footer">
            <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!--================================================================================================-->

    <!-- Modal -->
    <div class="modal fade" id="addUserModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="messageModalLabel">Create User</h4>
          </div>
            <br>
         <!-- Column -->
    <div class="modal-body">
    <div class="col-md-12">

          <form class="form-horizontal">
            <div class="form-group">
              <label for="nameCreateUser">Profile Image</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-image"></i></div>
                  <input class="form-control" type="file" id="fileUploadImageCreateUser"><hr>
                </div>
            </div>

            <div class="form-group">
              <label for="nameCreateUser">Full Name</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-user"></i></div>
                  <input id="nameCreateUser" type="text" class="form-control">
                </div>
            </div>

            <div class="form-group">
              <label for="emailCreateUser" >Email</label>
                  <div class="input-group">
                  <div class="input-group-addon"><i class="ti-email"></i></div>
                  <input id="emailCreateUser" type="email"  class="form-control " >
                </div>
            </div>

            <div class="form-group">
              <label for="passwordCreateUser">Password</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="ti-lock"></i></div>
                  <input id="passwordCreateUser" type="password"  class="form-control ">
              </div>
            </div>

            <div class="form-group">
                <label for="phoneCreateUser">Phone No</label>
                <div class="input-group">
                  <div class="input-group-addon"><i class="ti-mobile"></i></div>
                    <input id="phoneCreateUser" type="text"  class="form-control">
                </div>
            </div>
            <div class="form-group">
                <label >Select Rank</label>
                    <select id="rankCreateUser" class="form-control form-control-line">
                        <option>คณาจารย์และบุคลากร</option>
                        <option>เจ้าหน้าที่บริหารงานทั่วไป</option>
                        <option>ผู้ช่วยสอนและวิจัย</option>
                    </select>
            </div>
            </form>
      </div>
    </div>
    <div class="modal-footer">
      <button id="btCreateUser" type="submit" class="btn btn-success waves-effect waves-light m-r-5"><i class="fa fa-check"></i> Submit</button>
      <button   type="submit" class="btn btn-inverse" data-dismiss="modal">Cancel</button>
    </div>
    </div>
  </div>
</div>

    <?php include('import-javascript.php')?>
    <script src="../js/manage-user.js"></script>

</body>

</html>
