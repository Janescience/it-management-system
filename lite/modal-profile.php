<!--==================================== Google Map ====================================================-->

<div class="modal fade" id="mapModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="messagePassModal">ตำแหน่งปัจจุบัน</h4>
      </div>
      <div class="modal-body">
        <div class="card-block">
        <div class="card">
          <center>
            <div>
              <div class="col-md-12 col-sm-12 col-lg-12 col-xs-12" id="map" style="width: 600px; height: 400px;"></div>
            </div>
          </center>
        </div>
      </div>
      </div>
      <div class="modal-footer">
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ปิด</button>
      </div>
    </div>
  </div>
</div>

<!--===========================================================================================================-->

<!--==================================== Change Password ====================================================-->

<div class="modal fade" id="changePassModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="messagePassModal">เปลี่ยนรหัสผ่าน</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="passwordUpdate">รหัสผ่านใหม่</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-lock"></i></div>
              <input id="passwordUpdate" type="password"  class="form-control ">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btSetPassword"  class="btn btn-success waves-effect waves-light m-r-5"><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--===========================================================================================================-->

<!--==================================== Delete ====================================================-->

<div class="modal fade" id="deleteProfileModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="messagePassModal">ลบสำเร็จ</h4>
      </div>
      <div class="modal-footer">
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ปิด</button>
      </div>
    </div>
  </div>
</div>

<!--================================================================================================-->

<!--==================================== Edit History Education ================================================-->

<div class="modal fade" id="editHisEduModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ประวัติการศึกษา (แก้ไข)</h4>
      </div>
      <div class="modal-body">
        <div id="degree" class="form-group">
          <label for="degreeHisEdu">ปริญญา</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="degreeEditHisEdu" class="form-control ">
                <option>Bachelor</option>
                <option>Master</option>
                <option>Doctorate</option>
              </select>
            </div>
        </div>
        <div id="faculty" class="form-group">
          <label for="facultyHisEdu" >สาขาวิชา</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
              <input id="facultyEditHisEdu" type="email"  class="form-control" >
            </div>
        </div>

        <div id="university" class="form-group">
            <label for="universityHisEdu">มหาวิทยาลัย</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-flag-alt"></i></div>
                <input id="universityEditHisEdu" type="text"  class="form-control" >
            </div>
        </div>

        <div id="year" class="form-group">
            <label for="yearHisEdu">ปีที่จบการศึกษา</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-calendar"></i></div>
                <input id="yearEditHisEdu" type="text"  class="form-control" >
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btEditEdu" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--===========================================================================================================-->

<!--==================================== Add History Expertise ================================================-->

<div class="modal fade" id="addExpertModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ประสบการณ์ (เพิ่ม)</h4>
      </div>
      <div class="modal-body">
        <div id="expert" class="form-group">
            <label for="expertHisEdu">รายละเอียด</label>
            <div class="input-group">
                <textarea id="expertHisEdu" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btSubmitExpert" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--===========================================================================================================-->

<!--==================================== Edit History Expertise ================================================-->

<div class="modal fade" id="editExpertModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ความเชี่ยวชาญ</h4>
      </div>
      <div class="modal-body">
        <div id="expert" class="form-group">
            <label for="expertHisEdu">รายละเอียด</label>
            <div class="input-group">
                <textarea id="detailExpert" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btEditExpert" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--===========================================================================================================-->

<!--==================================== Add History Work ================================================-->

<div class="modal fade" id="addWorkModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ประวัติการทำงาน (เพิ่ม)</h4>
      </div>
      <div class="modal-body">

    <label for="facultyHisEdu" >ระยะเวลา</label><br>
    <div id="university" class="form-group">
      <div class="row">
        <div class="col-md-6">
        <h6 for="facultyHisEdu" >เริ่มต้น</h6>
        <div class="input-group">
          <div class="input-group-addon"><i class="ti-time"></i></div>
            <input id="timeStartHisWork" type="text"  class="form-control col-md-6" >
          </div>
        </div>
        <div class="col-md-6">
          <h6 for="facultyHisEdu" >สิ้นสุด</h6>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-time"></i></div>
              <input id="timeFinishHisWork" type="text"  class="form-control col-md-6" >
           </div>
        </div>
      </div>
    </div>

        <div id="university" class="form-group">
            <label for="universityHisEdu">สถานที่ทำงาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <textarea id="addressHisWork" type="text"  class="form-control" ></textarea>
            </div>
        </div>

        <div id="year" class="form-group">
            <label for="yearHisEdu">รายละเอียดงาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-briefcase"></i></div>
                <textarea id="workHisWork" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btSubmitWork" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--======================================================================================================-->


<!--==================================== Edit History Work ================================================-->

<div class="modal fade" id="editWorkModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ประวัติการทำงาน (แก้ไข)</h4>
      </div>
      <div class="modal-body">

    <label for="facultyHisEdu" >ระยะเวลา</label><br>
    <div class="form-group">
      <div class="row">
        <div class="col-md-6">
        <h6  >เริ่มต้น</h6>
        <div class="input-group">
          <div class="input-group-addon"><i class="ti-time"></i></div>
            <input id="timeStartHisEditWork" type="text"  class="form-control col-md-6" >
          </div>
        </div>
        <div class="col-md-6">
          <h6  >สิ้นสุด</h6>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-time"></i></div>
              <input id="timeFinishHisEditWork" type="text"  class="form-control col-md-6" >
           </div>
        </div>
      </div>
    </div>

        <div id="university" class="form-group">
            <label >สถานที่ทำงาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <textarea id="addressHisEditWork" type="text"  class="form-control" ></textarea>
            </div>
        </div>

        <div id="year" class="form-group">
            <label >รายละเอียดงาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-briefcase"></i></div>
                <textarea id="workHisEditWork" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btEditWork" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--======================================================================================================-->

<!--==================================== Add Experience ================================================-->

<div class="modal fade" id="addExpModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ประสบการณ์ (เพิ่ม)</h4>
      </div>
      <div class="modal-body">


        <div id="university" class="form-group">
            <label>ประสบการณ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <input id="expExp" type="text"  class="form-control" >
            </div>
        </div>


    <label>ระยะเวลา</label><br>
    <div id="university" class="form-group">
      <div class="row">
        <div class="col-md-6">
        <h6 >เริ่มต้น</h6>
        <div class="input-group">
          <div class="input-group-addon"><i class="ti-time"></i></div>
            <input id="timeStartExp" type="text"  class="form-control col-md-6" >
          </div>
        </div>
        <div class="col-md-6">
          <h6 for="facultyHisEdu" >สิ้นสุด</h6>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-time"></i></div>
              <input id="timeFinishExp" type="text"  class="form-control col-md-6" >
           </div>
        </div>
      </div>
    </div>

        <div class="form-group">
            <label >รายละเอียด</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-briefcase"></i></div>
                <textarea id="detailExp" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btSubmitExp" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--======================================================================================================-->


<!--==================================== Edit Experience ================================================-->

<div class="modal fade" id="editExpModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ประสบการณ์ (แก้ไข)</h4>
      </div>
      <div class="modal-body">


        <div id="university" class="form-group">
            <label>ประสบการณ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <input id="expEditExp" type="text"  class="form-control" >
            </div>
        </div>


    <label>ระยะเวลา</label><br>
    <div id="university" class="form-group">
      <div class="row">
        <div class="col-md-6">
        <h6 >เริ่มต้น</h6>
        <div class="input-group">
          <div class="input-group-addon"><i class="ti-time"></i></div>
            <input id="timeStartEditExp" type="text"  class="form-control col-md-6" >
          </div>
        </div>
        <div class="col-md-6">
          <h6 for="facultyHisEdu" >สิ้นสุด</h6>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-time"></i></div>
              <input id="timeFinishEditExp" type="text"  class="form-control col-md-6" >
           </div>
        </div>
      </div>
    </div>

        <div class="form-group">
            <label >รายละเอียด</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-briefcase"></i></div>
                <textarea id="detailEditExp" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btEditExp" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>

<!--======================================================================================================-->

<!--==================================== Add Inter Work ================================================-->

<div class="modal fade" id="addInterWorkModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ผลงานที่ได้รับรางวัลระดับนานาชาติ</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อรางวัล</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-cup"></i></div>
                <input id="nameAwardInterWorkAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >ชื่อผลงาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-medall-alt"></i></div>
                <input id="nameWorkInterWorkAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >รายละเอียด</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment"></i></div>
                <textarea id="detailInterWorkAdd" type="text" rows="5" class="form-control" ></textarea>
            </div>
        </div>

        <div class="form-group">
            <label >หน่วยงานที่ให้รางวัล</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <textarea id="departmentInterWorkAdd" type="text" rows="3" class="form-control" ></textarea>
            </div>
        </div>

        <div class="form-group">
            <label >วัน เดือน ปี ที่ให้รางวัล</label>
              <div class="col-lg-10">
                <input class="form-control" id="dateInterWorkAdd" type="date"  id="example-date-input">
              </div>
      </div>

      <div class="modal-footer">
        <button id="btAddInterWork" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Edit Inter Work ================================================-->

<div class="modal fade" id="editInterWorkModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ผลงานที่ได้รับรางวัลระดับนานาชาติ (แก้ไข)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อรางวัล</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-cup"></i></div>
                <input id="nameAwardInterWorkEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >ชื่อผลงาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-medall-alt"></i></div>
                <input id="nameWorkInterWorkEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >รายละเอียด</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment"></i></div>
                <textarea id="detailInterWorkEdit" type="text" rows="5" class="form-control" ></textarea>
            </div>
        </div>

        <div class="form-group">
            <label >หน่วยงานที่ให้รางวัล</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <textarea id="departmentInterWorkEdit" type="text" rows="3" class="form-control" ></textarea>
            </div>
        </div>

        <div class="form-group">
            <label >วัน เดือน ปี ที่ให้รางวัล</label>
              <div class="col-lg-10">
                <input class="form-control" id="dateInterWorkEdit" type="date"  id="example-date-input">
              </div>
      </div>

      <div class="modal-footer">
        <button id="btEditInterWork" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Add Nation Work ================================================-->

<div class="modal fade" id="addNationWorkModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ผลงานที่ได้รับรางวัลระดับชาติ</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อรางวัล</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-cup"></i></div>
                <input id="nameAwardNationWorkAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >ชื่อผลงาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-medall-alt"></i></div>
                <input id="nameWorkNationWorkAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >รายละเอียด</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment"></i></div>
                <textarea id="detailNationWorkAdd" type="text" rows="5" class="form-control" ></textarea>
            </div>
        </div>

        <div class="form-group">
            <label >หน่วยงานที่ให้รางวัล</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <textarea id="departmentNationWorkAdd" type="text" rows="3" class="form-control" ></textarea>
            </div>
        </div>

        <div class="form-group">
            <label >วัน เดือน ปี ที่ให้รางวัล</label>
              <div class="col-lg-10">
                <input class="form-control" type="date" id="dateNationWorkAdd" id="example-date-input">
              </div>
      </div>

      <div class="modal-footer">
        <button id="btAddNationWork" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->


<!--==================================== Edit Nation Work ================================================-->

<div class="modal fade" id="editNationWorkModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ผลงานที่ได้รับรางวัลระดับชาติ (แก้ไข)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อรางวัล</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-cup"></i></div>
                <input id="nameAwardNationWorkEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >ชื่อผลงาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-medall-alt"></i></div>
                <input id="nameWorkNationWorkEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >รายละเอียด</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment"></i></div>
                <textarea id="detailNationWorkEdit" type="text" rows="5" class="form-control" ></textarea>
            </div>
        </div>

        <div class="form-group">
            <label >หน่วยงานที่ให้รางวัล</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <textarea id="departmentNationWorkEdit" type="text" rows="3" class="form-control" ></textarea>
            </div>
        </div>

        <div class="form-group">
            <label >วัน เดือน ปี ที่ให้รางวัล</label>
              <div class="col-lg-10">
                <input class="form-control" type="date" id="dateNationWorkEdit" id="example-date-input">
              </div>
      </div>

      <div class="modal-footer">
        <button id="btEditNationWork" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Add Nation Journal ================================================-->

<div class="modal fade" id="addNationJournalModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">วารสารระดับชาติ (เพิ่ม)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleNationJournalAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >สถานะผู้เขียนบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-user"></i></div>
                <select id="statusNationJournalAdd"   class="form-control" >
                  <option>Main author</option>
                  <option>Corresponding author</option>
                  <option>Main author and Corresponding author</option>
                  <option>Co author</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label >รหัส - ชื่อโครงการวิจัย</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-key"></i></div>
                <input id="codeResearchNationJournalAdd" type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อวารสาร</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-book"></i></div>
                <input id="nameNationJournalAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeNationJournalAdd"   class="form-control" >
                <option>Full paper</option>
                <option>Extended Abstract</option>
                <option>Abstract</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearNationJournalAdd" >
              </div>
      </div>

      <div class="form-group">
          <label >ฉบับที่</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-layers-alt"></i></div>
              <input class="form-control" type="text" id="noNationJournalAdd" >
            </div>
    </div>

      <div class="modal-footer">
        <button id="btNationJournalAdd" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Edit Nation Journal ================================================-->

<div class="modal fade" id="editNationJournalModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">วารสารระดับชาติ (แก้ไข)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleNationJournalEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >สถานะผู้เขียนบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-user"></i></div>
                <select id="statusNationJournalEdit"   class="form-control" >
                  <option>Main author</option>
                  <option>Corresponding author</option>
                  <option>Main author and Corresponding author</option>
                  <option>Co author</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label >รหัส - ชื่อโครงการวิจัย</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-key"></i></div>
                <input id="codeResearchNationJournalEdit" type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อวารสาร</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-book"></i></div>
                <input id="nameNationJournalEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeNationJournalEdit"   class="form-control" >
                <option>Full paper</option>
                <option>Extended Abstract</option>
                <option>Abstract</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearNationJournalEdit" >
              </div>
      </div>

      <div class="form-group">
          <label >ฉบับที่</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-layers-alt"></i></div>
              <input class="form-control" type="text" id="noNationJournalEdit" >
            </div>
    </div>

      <div class="modal-footer">
        <button id="btEditNationJournal" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->


<!--==================================== Add Inter Journal Not Database ================================================-->

<div class="modal fade" id="addInterJournalNotDatabaseModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">วารสารระดับนานาชาติที่ไม่อยู่ในฐานข้อมูลสากล (เพิ่ม)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleInterJournalNotDatabaseAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >สถานะผู้เขียนบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-user"></i></div>
                <select id="statusInterJournalNotDatabaseAdd"   class="form-control" >
                  <option>Main author</option>
                  <option>Corresponding author</option>
                  <option>Main author and Corresponding author</option>
                  <option>Co author</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label >รหัส - ชื่อโครงการวิจัย</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-key"></i></div>
                <input id="codeResearchInterJournalNotDatabaseAdd" type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อวารสาร</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-book"></i></div>
                <input id="nameInterJournalNotDatabaseAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeInterJournalNotDatabaseAdd"   class="form-control" >
                <option>Full paper</option>
                <option>Extended Abstract</option>
                <option>Abstract</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearInterJournalNotDatabaseAdd" >
              </div>
      </div>

      <div class="form-group">
          <label >ฉบับที่</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-layers-alt"></i></div>
              <input class="form-control" type="text" id="noInterJournalNotDatabaseAdd" >
            </div>
    </div>

      <div class="modal-footer">
        <button id="btInterJournalNotDatabaseAdd" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Edit Inter Journal Not Database  ================================================-->

<div class="modal fade" id="editInterJournalNotDatabaseModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">วารสารระดับนานาชาติที่ไม่อยู่ในฐานข้อมูลสากล (แก้ไข)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleInterJournalNotDatabaseEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >สถานะผู้เขียนบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-user"></i></div>
                <select id="statusInterJournalNotDatabaseEdit"   class="form-control" >
                  <option>Main author</option>
                  <option>Corresponding author</option>
                  <option>Main author and Corresponding author</option>
                  <option>Co author</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label >รหัส - ชื่อโครงการวิจัย</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-key"></i></div>
                <input id="codeResearchInterJournalNotDatabaseEdit" type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อวารสาร</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-book"></i></div>
                <input id="nameInterJournalNotDatabaseEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeInterJournalNotDatabaseEdit"   class="form-control" >
                <option>Full paper</option>
                <option>Extended Abstract</option>
                <option>Abstract</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearInterJournalNotDatabaseEdit" >
              </div>
      </div>

      <div class="form-group">
          <label >ฉบับที่</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-layers-alt"></i></div>
              <input class="form-control" type="text" id="noInterJournalNotDatabaseEdit" >
            </div>
    </div>

      <div class="modal-footer">
        <button id="btEditInterJournalNotDatabase" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Add Inter Journal In Database ================================================-->

<div class="modal fade" id="addInterJournalInDatabaseModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">วารสารระดับนานาชาติที่อยู่ในฐานข้อมูลสากล (เพิ่ม)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleInterJournalInDatabaseAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >สถานะผู้เขียนบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-user"></i></div>
                <select id="statusInterJournalInDatabaseAdd"   class="form-control" >
                  <option>Main author</option>
                  <option>Corresponding author</option>
                  <option>Main author and Corresponding author</option>
                  <option>Co author</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label >รหัส - ชื่อโครงการวิจัย</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-key"></i></div>
                <input id="codeResearchInterJournalInDatabaseAdd" type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อวารสาร</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-book"></i></div>
                <input id="nameInterJournalInDatabaseAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeInterJournalInDatabaseAdd"   class="form-control" >
                <option>Full paper</option>
                <option>Extended Abstract</option>
                <option>Abstract</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearInterJournalInDatabaseAdd" >
              </div>
      </div>

      <div class="form-group">
          <label >ฉบับที่</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-layers-alt"></i></div>
              <input class="form-control" type="text" id="noInterJournalInDatabaseAdd" >
            </div>
    </div>

      <div class="modal-footer">
        <button id="btInterJournalInDatabaseAdd" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Edit Inter Journal In Database  ================================================-->

<div class="modal fade" id="editInterJournalInDatabaseModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">วารสารระดับนานาชาติที่อยู่ในฐานข้อมูลสากล (แก้ไข)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ชื่อบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleInterJournalInDatabaseEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div  class="form-group">
            <label >สถานะผู้เขียนบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-user"></i></div>
                <select id="statusInterJournalInDatabaseEdit"   class="form-control" >
                  <option>Main author</option>
                  <option>Corresponding author</option>
                  <option>Main author and Corresponding author</option>
                  <option>Co author</option>
                </select>
            </div>
        </div>

        <div class="form-group">
            <label >รหัส - ชื่อโครงการวิจัย</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-key"></i></div>
                <input id="codeResearchInterJournalInDatabaseEdit" type="text" class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อวารสาร</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-book"></i></div>
                <input id="nameInterJournalInDatabaseEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeInterJournalInDatabaseEdit"   class="form-control" >
                <option>Full paper</option>
                <option>Extended Abstract</option>
                <option>Abstract</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearInterJournalInDatabaseEdit" >
              </div>
      </div>

      <div class="form-group">
          <label >ฉบับที่</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-layers-alt"></i></div>
              <input class="form-control" type="text" id="noInterJournalInDatabaseEdit" >
            </div>
    </div>

      <div class="modal-footer">
        <button id="btEditInterJournalInDatabase" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->


<!--==================================== Add Nation Conference ================================================-->

<div class="modal fade" id="addNationConferenceModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">การประชุมระดับชาติ (เพิ่ม)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeNationConferenceAdd"   class="form-control" >
                <option>Keynote Speaker</option>
                <option>Plenary Speaker</option>
                <option>Invite Speaker</option>
                <option>Speaker (Oral Presentation)</option>
                <option>Invite (Poster Presentation)</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อบทความ[ไทย]</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleThaiNationConferenceAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อบทความ[อังกฤษ]</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleEngNationConferenceAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearNationConferenceAdd" >
              </div>
      </div>

      <div class="form-group">
          <label >รหัส - ชื่อโครงการวิจัย</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-key"></i></div>
              <input id="codeResearchNationConferenceAdd" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
          <label >ชื่อการประชุม/สัมนา</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-blackboard"></i></div>
              <input id="nameNationConferenceAdd" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
            <label class="col-md-12">วัน เดือน ปี ที่จัดงาน</label>
            <div class="row" style="margin-left: 30px;margin-right: 0px;">
              <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                  <input class="form-control" type="date" id="dateStartNationConferenceAdd">
              </div>
              <label class="col-md-1" style="padding-left: 10px;padding-right: 5px;margin-top: 10px;height: 20px;">ถึง</label>
              <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                  <input class="form-control" type="date" id="dateFinishNationConferenceAdd" >
              </div>
          </div>
      </div>

      <div class="form-group">
          <label >สถานที่จัดงาน</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-location-pin"></i></div>
              <input id="locationNationConferenceAdd" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
          <label >ประเทศ</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-map-alt"></i></div>
              <input id="countrynNationConferenceAdd" type="text" class="form-control" />
          </div>
      </div>

      <div class="modal-footer">
        <button id="btNationConferenceAdd" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Edit Nation Conference  ================================================-->

<div class="modal fade" id="editNationConferenceModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">การประชุมระดับชาติ (แก้ไข)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeNationConferenceEdit"   class="form-control" >
                <option>Keynote Speaker</option>
                <option>Plenary Speaker</option>
                <option>Invite Speaker</option>
                <option>Speaker (Oral Presentation)</option>
                <option>Invite (Poster Presentation)</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อบทความ[ไทย]</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleThaiNationConferenceEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อบทความ[อังกฤษ]</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleEngNationConferenceEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearNationConferenceEdit" >
              </div>
      </div>

      <div class="form-group">
          <label >รหัส - ชื่อโครงการวิจัย</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-key"></i></div>
              <input id="codeResearchNationConferenceEdit" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
          <label >ชื่อการประชุม/สัมนา</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-blackboard"></i></div>
              <input id="nameNationConferenceEdit" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
            <label class="col-md-12">วัน เดือน ปี ที่จัดงาน</label>
            <div class="row" style="margin-left: 30px;margin-right: 0px;">
              <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                  <input class="form-control" type="date" id="dateStartNationConferenceEdit">
              </div>
              <label class="col-md-1" style="padding-left: 10px;padding-right: 5px;margin-top: 10px;height: 20px;">ถึง</label>
              <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                  <input class="form-control" type="date" id="dateFinishNationConferenceEdit" >
              </div>
          </div>
      </div>

      <div class="form-group">
          <label >สถานที่จัดงาน</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-location-pin"></i></div>
              <input id="locationNationConferenceEdit" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
          <label >ประเทศ</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-map-alt"></i></div>
              <input id="countrynNationConferenceEdit" type="text" class="form-control" />
          </div>
      </div>

      <div class="modal-footer">
        <button id="btNationConferenceEdit" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Add Inter Conference ================================================-->

<div class="modal fade" id="addInterConferenceModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">การประชุมระดับนานาชาติ (เพิ่ม)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeInterConferenceAdd"   class="form-control" >
                <option>Keynote Speaker</option>
                <option>Plenary Speaker</option>
                <option>Invite Speaker</option>
                <option>Speaker (Oral Presentation)</option>
                <option>Invite (Poster Presentation)</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อบทความ[ไทย]</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleThaiInterConferenceAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อบทความ[อังกฤษ]</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleEngInterConferenceAdd" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearInterConferenceAdd" >
              </div>
      </div>

      <div class="form-group">
          <label >รหัส - ชื่อโครงการวิจัย</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-key"></i></div>
              <input id="codeResearchInterConferenceAdd" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
          <label >ชื่อการประชุม/สัมนา</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-blackboard"></i></div>
              <input id="nameInterConferenceAdd" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
            <label class="col-md-12">วัน เดือน ปี ที่จัดงาน</label>
            <div class="row" style="margin-left: 30px;margin-right: 0px;">
              <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                  <input class="form-control" type="date" id="dateStartInterConferenceAdd">
              </div>
              <label class="col-md-1" style="padding-left: 10px;padding-right: 5px;margin-top: 10px;height: 20px;">ถึง</label>
              <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                  <input class="form-control" type="date" id="dateFinishInterConferenceAdd" >
              </div>
          </div>
      </div>

      <div class="form-group">
          <label >สถานที่จัดงาน</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-location-pin"></i></div>
              <input id="locationInterConferenceAdd" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
          <label >ประเทศ</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-map-alt"></i></div>
              <input id="countrynInterConferenceAdd" type="text" class="form-control" />
          </div>
      </div>

      <div class="modal-footer">
        <button id="btInterConferenceAdd" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->

<!--==================================== Edit Inter Conference  ================================================-->

<div class="modal fade" id="editInterConferenceModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">การประชุมระดับนานาชาติ (แก้ไข)</h4>
      </div>
      <div class="modal-body">

        <div class="form-group">
            <label >ประเภทบทความ</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="typeInterConferenceEdit"   class="form-control" >
                <option>Keynote Speaker</option>
                <option>Plenary Speaker</option>
                <option>Invite Speaker</option>
                <option>Speaker (Oral Presentation)</option>
                <option>Invite (Poster Presentation)</option>
              </select>
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อบทความ[ไทย]</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleThaiInterConferenceEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ชื่อบทความ[อังกฤษ]</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-agenda"></i></div>
                <input id="articleEngInterConferenceEdit" type="text"  class="form-control" />
            </div>
        </div>

        <div class="form-group">
            <label >ปีที่พิมพ์</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-printer"></i></div>
                <input class="form-control" type="text" id="yearInterConferenceEdit" >
              </div>
      </div>

      <div class="form-group">
          <label >รหัส - ชื่อโครงการวิจัย</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-key"></i></div>
              <input id="codeResearchInterConferenceEdit" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
          <label >ชื่อการประชุม/สัมนา</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-blackboard"></i></div>
              <input id="nameInterConferenceEdit" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
            <label class="col-md-12">วัน เดือน ปี ที่จัดงาน</label>
            <div class="row" style="margin-left: 30px;margin-right: 0px;">
              <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                  <input class="form-control" type="date" id="dateStartInterConferenceEdit">
              </div>
              <label class="col-md-1" style="padding-left: 10px;padding-right: 5px;margin-top: 10px;height: 20px;">ถึง</label>
              <div class="col-md-5" style="padding-right: 0px;padding-left: 0px;">
                  <input class="form-control" type="date" id="dateFinishInterConferenceEdit" >
              </div>
          </div>
      </div>

      <div class="form-group">
          <label >สถานที่จัดงาน</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-location-pin"></i></div>
              <input id="locationInterConferenceEdit" type="text" class="form-control" />
          </div>
      </div>

      <div class="form-group">
          <label >ประเทศ</label>
          <div class="input-group">
            <div class="input-group-addon"><i class="ti-map-alt"></i></div>
              <input id="countrynInterConferenceEdit" type="text" class="form-control" />
          </div>
      </div>

      <div class="modal-footer">
        <button id="btInterConferenceEdit" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> บันทึก</button>
        <button  class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
      </div>
    </div>
  </div>
</div>
</div>

<!--======================================================================================================-->
