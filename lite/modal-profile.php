
<!--==================================== Change Password ====================================================-->

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

<!--===========================================================================================================-->

<!--==================================== Add History Education ================================================-->

<div class="modal fade" id="addHisEduModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">ประวัติการศึกษา</h4>
      </div>
      <div class="modal-body">
        <div id="degree" class="form-group">
          <label for="degreeHisEdu">ปริญญา</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-bookmark-alt"></i></div>
              <select id="degreeHisEdu" class="form-control ">
                <option>ปริญญาตรี</option>
                <option>ปริญญาโท</option>
                <option>ปริญญาเอก</option>
              </select>
            </div>
        </div>
        <div id="faculty" class="form-group">
          <label for="facultyHisEdu" >สาขาวิชา</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
              <input id="facultyHisEdu" type="email"  class="form-control" >
            </div>
        </div>

        <div id="university" class="form-group">
            <label for="universityHisEdu">มหาวิทยาลัย</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-flag-alt"></i></div>
                <input id="universityHisEdu" type="text"  class="form-control" >
            </div>
        </div>

        <div id="year" class="form-group">
            <label for="yearHisEdu">ปีที่จบการศึกษา</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-calendar"></i></div>
                <input id="yearHisEdu" type="text"  class="form-control" >
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btSubmitEdu" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
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
        <h4 class="modal-title">ความเชี่ยวชาญ</h4>
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
        <button id="btSubmitExpert" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
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
        <h4 class="modal-title">ประวัติการทำงาน</h4>
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
            <label for="yearHisEdu">งาน</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-briefcase"></i></div>
                <textarea id="workHisWork" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btSubmitWork" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
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
        <h4 class="modal-title">ประสบการณ์ด้านต่างๆ</h4>
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
        <button id="btSubmitExp" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!--======================================================================================================-->
