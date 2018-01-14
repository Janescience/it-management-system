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
    <link rel="stylesheet" type="text/css" href="css/animate.css">



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
                        <h2 class="text-themecolor">Bechelor Portfolio <h5 class="text-themecolor">Bachelor Degree</h5></h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Student</a></li>
                            <li class="breadcrumb-item active">Show Bechelor Portfolio</li>
                        </ol>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <div class="card-block">
                            <h1 class="w3-animate-right">Portfolio</h1>
                            <h4>Bachelor Degree</h4>
                                <hr/><br/>

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
                                        <input id="search" type="text"  class="form-control" >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">

                            <div class="col-md-12">

                              <div class="card-block bg-info">

                                <h4 class="text-white card-title">Portfolio</h4>
                                <div class="message-box contact-box">


                            </div>
                            </div>

                            <form class="form-horizontal form-material ">

                              <div class="table-responsive table-hover">
                                  <table id="tableHistory" class="table text-center results color-bordered-table success-bordered-table ">
                                      <thead >
                                          <tr >
                                              <th class="text-center">Portfolio Name</th>
                                              <th class="text-center">Portfolio Detail</th>
                                              <th class="text-center">Portfolio Type</th>
                                              <th class="text-center">Portfolio Status</th>
                                              <th class="text-center">Portfolio Year</th>
                                              <th class="text-center">Portfolio Picture</th>
                                          </tr>
                                          <!-- <tr class="warning no-result">
                                            <td colspan="6"><i class="fa fa-warning"></i> No result</td>
                                          </tr> -->
                                      </thead>
                                      <tbody id="list_Portfolio">

                                      </tbody>
                                  </table>
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
    <script src="../js/showBechelorPortfolio.js"></script>

</body>

</html>
