<!DOCTYPE html>
<html lang="en">

<head >
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

     <?php  include('header.php') ?>

     <style>
     #list_header td{
      text-align:center;
      vertical-align:middle;
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
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)"><h4>Main</h4></a></li>
                <li class="breadcrumb-item active">Home</li>
              </ol>
            </div>
          </div>
<!--=========================== ส่วนหัว [รูปภาพสไลด์] ===========================-->
          <div class="row">
            <div class="col-lg-12">
              <div class="card ">
                <div class="card-block ">
                  <h4 class="text-black card-title">Header</h4>
                    <div class="message-box contact-box">
                      <h2 class="add-ct-btn">
                        <button type="button" id="btAddHeader" class="btn btn-circle btn-lg btn-success waves-effect waves-dark">+</button>
                      </h2>
                    </div>
                </div>

                <hr>

                <div class="card-block ">
                  <div class="card">
                    <div class="card-block">
                      <form class="form-horizontal form-material ">
                        <div class="table-responsive">
                            <table id="tableHisEdu" class="table text-center">
                                <thead >
                                    <tr >
                                        <th class="text-center">Background</th>
                                        <th class="text-center">Topic</th>
                                        <th class="text-center">Detail</th>
                                        <th class="text-center">Url</th>
                                        <th class="text-center">Text Button</th>
                                        <th class="text-center">Actions</th>
                                    </tr>
                                    <tr id="loaderHeader">
                                      <td colspan="6"><img src="../images/ajax-loader.gif">  Loading...</td>
                                    </tr>
                                </thead>
                                <tbody id="list_header">

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

<!--======================================================================-->

<!--=========================== หลักสูตรที่เปิดสอน ===========================-->
            <div class="card">
              <div class="card-block ">
                <h4 class="text-black card-title">Course offers</h4>
                  <div class="message-box contact-box">
                    <h2 class="add-ct-btn">
                      <button type="button" id="btEditCourse" class="btn btn-circle btn-lg btn-success waves-effect waves-dark"><i class="mdi mdi-pencil"></i></button>
                    </h2>
                  </div>
              </div>

              <hr>

              <div class="card-block">
                <div class="row">

                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                      <img  id="imageBachelor" src="../assets/images/big/image.png" style="width:100%">
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                        <img  id="imageMaster" src="../assets/images/big/image.png" style="width:100%">
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="card text-center">
                      <div class="card-block ">
                        <img  id="imageDoctor" src="../assets/images/big/image.png" style="width:100%">
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
<!--=====================================================================-->

<!--============================ ข่าวสาร =================================-->
            <div class="card">
              <div class="card-header">
                <h4 class="text-black card-title">Info</h4>
              </div>

              <hr>

              <div class="card-block">
                <div class="row">

                  <div class="col-lg-5">
                    <div class="card text-center">
                      <div class="card-block">
                        <img id="imgInfo" src="../assets/images/big/image.png" style="width:100%"><hr>

                        <input class="btn btn-outline-inverse col-md-12"  type="file" id="fileUploadImageInfo"><hr>

                        <button type="submit" class="btn btn-outline-success" id="btInfoUploadImg">Upload <i class="fa fa-upload"></i></button>
                        <button type="reset" class="btn btn-outline-danger" id="btInfoCancelUploadImg">Cancel <i class="fa fa-close"></i></button>
                        <button id="btLoadingInfo" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-7">
                    <div class="card ">
                      <div class="card-block ">

                        <div class="form-group">
                          <select id="selectInfoLevel" class="form-control ">
                            <option>ข่าวสารระดับปริญญาตรี</option>
                            <option>ข่าวสารระดับบัณฑิตศึกษา</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <select id="selectLevel" class="form-control ">
                            <option>ข่าวสารเรื่องแรก</option>
                            <option>ข่าวสารเรื่องที่สอง</option>
                            <option>ข่าวสารเรื่องที่สาม</option>
                          </select>
                        </div>

                        <hr>

                        <h5 class="modal-title" >Topic</h5>
                          <textarea class="form-control" rows="2" id="textTopicInfo" disabled="true"></textarea>

                        <h5 class="modal-title" >Link URL</h5>
                          <input class="form-control" type="text"   id="textLinkInfo" disabled="true">

                        <div class="m-t-15">
                          <button type="button" id="btInfoEdit"  class="btn btn-outline-secondary">Edit <i class="fa fa-edit"></i></button>
                          <button type="submit" class="btn btn-outline-success" id="btInfoSave">Submit <i class="fa fa-save"></i></button>
                          <button type="reset" class="btn btn-outline-danger" id="btInfoCancel">Cancel <i class="fa fa-close"></i></button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
<!--=====================================================================-->
          </div>
        </div>
      </div>
      <!-- Modal Add Header-->
      <div class="modal fade" id="addHeaderModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="messageModalLabel">Add Header Slide</h4>
            </div>
            <div class="modal-body">
              <h5 class="modal-title" >Background</h5>
              <div  class="setting image_picker">
                <div class="settings_wrap">
                  <label class="drop_target">
                    <div class="image_preview"></div>
                    <input  class="upload" id="fileUploadImageHeader" type="file"/>
                  </label>
                  <div class="settings_actions vertical"><a data-action="choose_from_uploaded"><i class="fa fa-picture-o"></i> Choose from Uploads</a><a class="disabled" data-action="remove_current_image"><i class="fa fa-ban"></i> Remove Current Image</a></div>
                </div>
              </div>

              <h5 class="modal-title" >Topic</h5>
              <textarea class="form-control" rows="2" id="textTopic"></textarea>
              <h5 class="modal-title" >Details</h5>
              <input class="form-control" type="text"   id="textDetail">
              <h5 class="modal-title" >Url</h5>
                <input class="form-control" type="text"   id="textLinkHeader">
              <h5 class="modal-title" >Text Button</h5>
                <input class="form-control" type="text"   id="textButton">
            </div>
            <div class="modal-footer">
              <button id="btLoading" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
              <button id="btUploadImageHeader" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
              <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Edit Header-->
      <div class="modal fade" id="editHeaderModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="messageModalLabel">Edit Header Slide</h4>
            </div>
            <div class="modal-body">
              <h5 class="modal-title" >Background</h5><br>
              <center>
              <img width="300px" id="bgHeaderEdit" style="border-radius:10px"></center><br>


                    <input  id="fileUploadImageHeaderEdit" type="file"/>


              <h5 class="modal-title" >Topic</h5>
              <textarea class="form-control" rows="2" id="textTopicEdit"></textarea>
              <h5 class="modal-title" >Details</h5>
              <input class="form-control" type="text"   id="textDetailEdit">
              <h5 class="modal-title" >Url</h5>
                <textarea class="form-control" type="text" rows="3"   id="textLinkHeaderEdit"></textarea>
              <h5 class="modal-title" >Text Button</h5>
                <input class="form-control" type="text"   id="textButtonEdit">
            </div>
            <div class="modal-footer">
              <button hidden id="btLoadingEdit" class="right-side-toggle waves-effect waves-light btn-secondary btn btn-circle btn-sm pull-right m-l-10"><i class="fa fa-circle-o-notch"></i></button>
              <button id="btEditHeader" type="button" class="btn btn-success "><i class="fa fa-check"></i> Submit</button>
              <button id="btCloseEdit" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

        <!-- Modal -->
      <div class="modal fade" id="editCourseModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="messageModalLabel">จัดการหลักสูตรที่เปิดสอน</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                  <div class="col-sm-12">
                      <select id="selectCourse" class="form-control ">
                          <option>ระดับปริญญาตรี</option>
                          <option>ระดับปริญญาโท</option>
                          <option>ระดับปริญญาเอก</option>
                      </select>
                  </div>
              </div>
                    <hr>
              <input class="form-control btn btn-outline-inverse col-md-12" type="file" id="fileUploadImageCourse">
            </div>
            <div class="modal-footer">
              <button id="btLoadingCourse" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
              <button id="btUploadImageCourse" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
              <button id="btClearTextFileCourse" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> Cancel</button>
              <button id="btCloseCourse" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!--==================================== Delete ====================================================-->

      <div class="modal fade" id="deleteHeaderModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
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
            <footer class="footer">Copyright © Information Technology 2017</footer>
        </div>
    </div>


    <?php include('import-javascript.php')?>
    <script src="../js/index.js"></script>

</body>

</html>
