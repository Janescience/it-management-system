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
                    <h3 class="text-themecolor m-b-0 m-t-0">ประวัติการแก้ไข</h3>
                    </div>
                </div>
                <!-- Row -->
                <div class="row">
                  <div class="col-md-4">
                  </div>
                  <div class="col-md-4">
                  </div>

                </div>
                <div class="row">


                    <div class="col-md-12">

                      <div class="card">
                        <div class="card-block">
                          <h2></h2>
                        <div class="card-block ">

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
                      <div  class="card-block bg-info">
                        <h3 class="text-white card-title">ประวัติการแก้ไขทั้งหมด</h3>
                        </div>
                              <form class="form-horizontal form-material ">

                                <div class="table-responsive">
                                    <table id="tableHistory" class="table text-center results color-bordered-table success-bordered-table">
                                        <thead >
                                            <tr >
                                                <th class="text-center">ชื่อ-นามสกุล</th>
                                                <th class="text-center">สิ่งที่ทำ</th>
                                                <th class="text-center">หน้า</th>
                                                <th class="text-center">วัน</th>
                                                <th class="text-center">เวลา</th>
                                            </tr>
                                            <tr class="warning no-result">
  <td colspan="5"><i class="fa fa-warning"></i> ไม่มีข้อมูล</td>
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
                </div>
            </div>


        <footer class="footer text-center"><h6>Copyright © Information Technology 2017</h6></footer>
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
