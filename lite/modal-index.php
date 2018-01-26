
<!--==================================== Add Header ====================================================-->

<div class="modal fade" id="addHeaderModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="messageModalLabel">เพิ่มรูปภาพไสลด์</h4>
      </div>
      <div class="modal-body">
        <h5 class="modal-title" >รูปภาพ</h5>
        <div  class="setting image_picker">
          <div class="settings_wrap">
            <label class="drop_target">
              <div class="image_preview"></div>
              <input  class="upload" id="fileUploadImageHeader" type="file"/>
            </label>
            <div class="settings_actions vertical"><a data-action="choose_from_uploaded"><i class="fa fa-picture-o"></i> เลือกรูปภาพ</a><a class="disabled" data-action="remove_current_image"><i class="fa fa-ban"></i> ลบรูปภาพ</a></div>
          </div>
        </div>

        <h5 class="modal-title" >หัวข้อ</h5>
        <textarea class="form-control" rows="2" id="textTopic"></textarea>
        <h5 class="modal-title" >รายละเอียด</h5>
        <input class="form-control" type="text"   id="textDetail">
        <h5 class="modal-title" >ลิงค์</h5>
          <input class="form-control" type="text"   id="textLinkHeader">
        <h5 class="modal-title" >ข้อความปุ่ม</h5>
          <input class="form-control" type="text"   id="textButton">
      </div>
      <div class="modal-footer">
        <button id="btLoading" class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings"></i></button>
        <button id="btUploadImageHeader" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
<!--=====================================================================================================-->

<!--==================================== Add Infor Bachelor ====================================================-->

<div class="modal fade" id="addInfoBachelorModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">เพิ่มข่าวสารระดับปริญญาตรี</h4>
      </div>
      <div class="modal-body">
        <h5 class="modal-title" >รูปภาพ</h5><br>
        <div class="col-md-12">
            <div class="form-group text-center">
                <div class="input-group">
                    <span class="input-group-btn">
                        <span class="btn btn-secondary btn-file">
                            เลือกรูปภาพ <input type="file" class="file-upload" id="fileUploadImageInfoBachelorAdd" >
                        </span>
                    </span>
                    <input type="text" class="form-control" readonly>
                </div>
                <br><img class="img-show "/>
            </div>
        </div>

        <h5 class="modal-title" >หัวข้อ</h5>
        <textarea class="form-control" rows="2" id="textTopicInfoBachelorAdd"></textarea>
        <h5 class="modal-title" >ลิงค์</h5>
          <textarea class="form-control" type="text" rows="3"   id="textLinkInfoBachelorAdd"></textarea>
      </div>
      <div class="modal-footer">
        <button hidden id="btLoadingInfoBachelorAdd" class="right-side-toggle waves-effect waves-light btn-secondary btn btn-circle btn-sm pull-right m-l-10"><i class="fa fa-circle-o-notch"></i></button>
        <button id="btInfoBachelorAdd" type="button" class="btn btn-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btCloseInfoBachelorAdd" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--=====================================================================================================-->

<!--==================================== Edit Infor Bachelor ====================================================-->

<div class="modal fade" id="editInfoBachelorModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">แก้ไขข่าวสารระดับปริญญาตรี</h4>
      </div>
      <div class="modal-body">
        <h5 class="modal-title" >รูปภาพปัจจุบัน</h5><br>

        <center>
        <img id="imgInfoBachelorShow" width="200px" style="border-radius:10px;">
        </center>

        <br><br><h5 class="modal-title" >อัพโหลดรูปภาพ</h5>
        <div class="col-md-12">
            <div class="form-group text-center">
                <div class="input-group">
                    <span class="input-group-btn">
                        <span class="btn btn-secondary btn-file">
                            เลือกรูปภาพ <input type="file" class="file-upload" id="fileUploadImageInfoBachelorEdit" >
                        </span>
                    </span>
                    <input type="text" class="form-control" readonly>
                </div>
                <br><img class="img-show"/>
            </div>
        </div>
        <h5 class="modal-title" >หัวข้อ</h5>
        <textarea class="form-control" type="text" rows="2" id="textTopicInfoBachelorEdit"></textarea>
        <h5 class="modal-title" >ลิงค์</h5>
          <textarea class="form-control" type="text" rows="3"   id="textLinkInfoBachelorEdit"></textarea>
      </div>
      <div class="modal-footer">
        <button hidden id="btLoadingInfoBachelorEdit" class="right-side-toggle waves-effect waves-light btn-secondary btn btn-circle btn-sm pull-right m-l-10"><i class="fa fa-circle-o-notch"></i></button>
        <button id="btInfoBachelorEdit" type="button" class="btn btn-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btCloseInfoBachelorEdit" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--=====================================================================================================-->

<!--==================================== Add Infor Graduate ====================================================-->

<div class="modal fade" id="addInfoGraduateModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">เพิ่มข่าวสารระดับบัณฑิตศึกษา</h4>
      </div>
      <div class="modal-body">
        <h5 class="modal-title" >รูปภาพ</h5><br>

        <div class="col-md-12">
            <div class="form-group text-center">
                <div class="input-group">
                    <span class="input-group-btn">
                        <span class="btn btn-secondary btn-file">
                            เลือกรูปภาพ <input type="file" class="file-upload" id="fileUploadImageInfoGraduateAdd" >
                        </span>
                    </span>
                    <input type="text" class="form-control" readonly>
                </div>
                <br><img class="img-show "/>
            </div>
        </div>

        <h5 class="modal-title" >หัวข้อ</h5>
        <textarea class="form-control" rows="2" id="textTopicInfoGraduateAdd"></textarea>
        <h5 class="modal-title" >ลิงค์</h5>
          <textarea class="form-control" type="text" rows="3"   id="textLinkInfoGraduateAdd"></textarea>
      </div>
      <div class="modal-footer">
        <button hidden id="btLoadingInfoGraduateAdd" class="right-side-toggle waves-effect waves-light btn-secondary btn btn-circle btn-sm pull-right m-l-10"><i class="fa fa-circle-o-notch"></i></button>
        <button id="btInfoGraduateAdd" type="button" class="btn btn-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btCloseInfoGraduateAdd" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--=====================================================================================================-->

<!--==================================== Edit Header ====================================================-->

<div class="modal fade" id="editHeaderModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="messageModalLabel">แก้ไขรูปภาพสไลด์</h4>
      </div>
      <div class="modal-body">
        <h5 class="modal-title" >รูปภาพ</h5><br>
        <center>
        <img width="300px" id="bgHeaderEdit" style="border-radius:10px"></center><br>

        <input  id="fileUploadImageHeaderEdit" type="file" />

        <h5 class="modal-title" >หัวข้อ</h5>
        <textarea class="form-control" rows="2" id="textTopicEdit"></textarea>
        <h5 class="modal-title" >รายละเอียด</h5>
        <input class="form-control" type="text"   id="textDetailEdit">
        <h5 class="modal-title" >ลิงค์</h5>
          <textarea class="form-control" type="text" rows="3"   id="textLinkHeaderEdit"></textarea>
        <h5 class="modal-title" >ข้อความปุ่ม</h5>
          <input class="form-control" type="text"   id="textButtonEdit">
      </div>
      <div class="modal-footer">
        <button hidden id="btLoadingEdit" class="right-side-toggle waves-effect waves-light btn-secondary btn btn-circle btn-sm pull-right m-l-10"><i class="fa fa-circle-o-notch"></i></button>
        <button id="btEditHeader" type="button" class="btn btn-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btCloseEdit" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--=====================================================================================================-->

<!--==================================== Edit Course ====================================================-->

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
        <button id="btUploadImageCourse" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClearTextFileCourse" type="button" class="btn btn-outline-inverse "><i class="mdi mdi-close"></i> ยกเลิก</button>
        <button id="btCloseCourse" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
<!--================================================================================================-->

<!--==================================== Delete ====================================================-->

<div class="modal fade" id="deleteModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="messagePassModal">ลบสำเร็จ</h4>
      </div>
      <div class="modal-footer">
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--================================================================================================-->
