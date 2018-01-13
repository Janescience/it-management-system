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
                        <h3 class="text-themecolor m-b-0 m-t-0">History</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Manage</li>
                        </ol>
                    </div>
                </div>
                <!-- Row -->
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

                          <h4 class="text-white card-title">History</h4>

                      </div>
                              <form class="form-horizontal form-material ">

                                <div class="table-responsive">
                                    <table id="tableHistory" class="table text-center results color-bordered-table success-bordered-table">
                                        <thead >
                                            <tr >
                                                <th class="text-center">Name - Surename</th>
                                                <th class="text-center">Page</th>
                                                <th class="text-center">Topic</th>
                                                <th class="text-center">Date</th>
                                                <th class="text-center">Time</th>
                                            </tr>
                                            <tr class="warning no-result">
  <td colspan="5"><i class="fa fa-warning"></i> No result</td>
</tr>
                                        </thead>
                                        <tbody id="list_history">

                                        </tbody>
                                    </table>

                                </div>
                              </form>


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


    <?php include('import-javascript.php')?>
    <script src="../js/history.js"></script>
    <script src="js/jquery.twbsPagination.js" type="text/javascript"></script>
    <script type="text/javascript">

    </script>
</body>

</html>
