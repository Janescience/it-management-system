<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php include('header.php')?>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>
<body>

  <header class="topbar">
      <nav class="navbar top-navbar navbar-toggleable-sm navbar-light">
          <div class="navbar-header">
              <a class="navbar-brand" href="login.php">
              <b><img src="../images/bird_logo.png" alt="homepage" class="light-logo" width="50px" height="50px"/></b>
              <span><img src="../assets/images/logo-it.png" class="light-logo" alt="homepage" /></span></a>
          </div>
      </nav>
  </header>

<div class="container">
  <br><br><br><br><br><br>
  <div class="row align-center">
    <div class="col-sm-4 ">
    </div>
    <div class="col-sm-4  ">
      <div class="card">
          <div class="card-block">
              <div class="row text-center">
                  <div class="col-12 ">
                    <center class="m-t-5 ">
                          <h4 class="card-title m-t-10">LOGIN</h4>
                    </center>
                  <form>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="material-icons">person</i></span>
                      <input id="email" type="text" class="form-control" name="email" placeholder="Email">
                    </div>
                    <br>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="material-icons">lock</i></span>
                      <input id="password" type="password" class="form-control" name="password" placeholder="Password">
                    </div>
                  </form>

                  <div class="text-center">
                    <button   class="btn btn-success" id="btLogin" >Sign-in</button>
                  </div>

              </div>
          </div>
      </div>
  </div>
    </div>
    <div class="col-sm-4  ">

    </div>
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

      </div>
    </div>
  </div>
</div>

<footer>
  <div class="container container-fluid bg-4 text-center">
    <div class="row-lg-12">
      <div class="col-lg-12 ">
        <p style="color:#808080; font-size:10px;">Copyright © Information Technology 2017</p>
      </div>
    </div>
  </div>
</footer>

<script src="../assets/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap tether Core JavaScript -->
<script src="../assets/plugins/bootstrap/js/tether.min.js"></script>
<script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<!-- slimscrollbar scrollbar JavaScript -->
<script src="js/jquery.slimscroll.js"></script>
<!--Wave Effects -->
<script src="js/waves.js"></script>
<!--Menu sidebar -->
<script src="js/sidebarmenu.js"></script>
<!--stickey kit -->
<script src="../assets/plugins/sticky-kit-master/dist/sticky-kit.min.js"></script>
<!--Custom JavaScript -->
<script src="js/custom.min.js"></script>
<!-- ============================================================== -->
<!-- This page plugins -->

<!--c3 JavaScript -->
<script src="../assets/plugins/d3/d3.min.js"></script>
<script src="../assets/plugins/c3-master/c3.min.js"></script>
<!-- Chart JS -->
<script src="js/dashboard1.js"></script>
<!-- Include Firebase Library -->
<script src="https://www.gstatic.com/firebasejs/4.8.0/firebase.js"></script>
<script src="../js/all-pages.js"></script>
<script src="../js/login.js"></script>
<script src="../js/check_logined.js"></script>
</body>
</html>
