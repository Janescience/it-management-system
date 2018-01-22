<!--==================================== Google Map ====================================================-->

<div class="modal fade" id="mapModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="messagePassModal">Location</h4>
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
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
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

<!--==================================== Delete ====================================================-->

<div class="modal fade" id="deleteProfileModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
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

<!--==================================== Edit History Education ================================================-->

<div class="modal fade" id="editHisEduModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">History Education</h4>
      </div>
      <div class="modal-body">
        <div id="degree" class="form-group">
          <label for="degreeHisEdu">Degree</label>
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
          <label for="facultyHisEdu" >Faculty</label>
              <div class="input-group">
              <div class="input-group-addon"><i class="ti-comment-alt"></i></div>
              <input id="facultyEditHisEdu" type="email"  class="form-control" >
            </div>
        </div>

        <div id="university" class="form-group">
            <label for="universityHisEdu">University</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-flag-alt"></i></div>
                <input id="universityEditHisEdu" type="text"  class="form-control" >
            </div>
        </div>

        <div id="year" class="form-group">
            <label for="yearHisEdu">Graduation Year</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-calendar"></i></div>
                <input id="yearEditHisEdu" type="text"  class="form-control" >
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btEditEdu" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
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
        <h4 class="modal-title">Expertise</h4>
      </div>
      <div class="modal-body">
        <div id="expert" class="form-group">
            <label for="expertHisEdu">Detail</label>
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

<!--==================================== Edit History Expertise ================================================-->

<div class="modal fade" id="editExpertModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Expertise</h4>
      </div>
      <div class="modal-body">
        <div id="expert" class="form-group">
            <label for="expertHisEdu">Detail</label>
            <div class="input-group">
                <textarea id="detailExpert" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btEditExpert" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
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
        <h4 class="modal-title">History Work</h4>
      </div>
      <div class="modal-body">

    <label for="facultyHisEdu" >Time Length</label><br>
    <div id="university" class="form-group">
      <div class="row">
        <div class="col-md-6">
        <h6 for="facultyHisEdu" >Start</h6>
        <div class="input-group">
          <div class="input-group-addon"><i class="ti-time"></i></div>
            <input id="timeStartHisWork" type="text"  class="form-control col-md-6" >
          </div>
        </div>
        <div class="col-md-6">
          <h6 for="facultyHisEdu" >Finish</h6>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-time"></i></div>
              <input id="timeFinishHisWork" type="text"  class="form-control col-md-6" >
           </div>
        </div>
      </div>
    </div>

        <div id="university" class="form-group">
            <label for="universityHisEdu">Workplace</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <textarea id="addressHisWork" type="text"  class="form-control" ></textarea>
            </div>
        </div>

        <div id="year" class="form-group">
            <label for="yearHisEdu">Work Detail</label>
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


<!--==================================== Edit History Work ================================================-->

<div class="modal fade" id="editWorkModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">History Work</h4>
      </div>
      <div class="modal-body">

    <label for="facultyHisEdu" >Time Length</label><br>
    <div class="form-group">
      <div class="row">
        <div class="col-md-6">
        <h6  >Start</h6>
        <div class="input-group">
          <div class="input-group-addon"><i class="ti-time"></i></div>
            <input id="timeStartHisEditWork" type="text"  class="form-control col-md-6" >
          </div>
        </div>
        <div class="col-md-6">
          <h6  >Finish</h6>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-time"></i></div>
              <input id="timeFinishHisEditWork" type="text"  class="form-control col-md-6" >
           </div>
        </div>
      </div>
    </div>

        <div id="university" class="form-group">
            <label >Workplace</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <textarea id="addressHisEditWork" type="text"  class="form-control" ></textarea>
            </div>
        </div>

        <div id="year" class="form-group">
            <label >Work Detail</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-briefcase"></i></div>
                <textarea id="workHisEditWork" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btEditWork" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
        <button  class="btn btn-danger" data-dismiss="modal">Close</button>
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
        <h4 class="modal-title">Experience</h4>
      </div>
      <div class="modal-body">


        <div id="university" class="form-group">
            <label>Experience</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <input id="expExp" type="text"  class="form-control" >
            </div>
        </div>


    <label>Time Length</label><br>
    <div id="university" class="form-group">
      <div class="row">
        <div class="col-md-6">
        <h6 >Start</h6>
        <div class="input-group">
          <div class="input-group-addon"><i class="ti-time"></i></div>
            <input id="timeStartExp" type="text"  class="form-control col-md-6" >
          </div>
        </div>
        <div class="col-md-6">
          <h6 for="facultyHisEdu" >Finish</h6>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-time"></i></div>
              <input id="timeFinishExp" type="text"  class="form-control col-md-6" >
           </div>
        </div>
      </div>
    </div>

        <div class="form-group">
            <label >Detail</label>
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


<!--==================================== Edit Experience ================================================-->

<div class="modal fade" id="editExpModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Experience</h4>
      </div>
      <div class="modal-body">


        <div id="university" class="form-group">
            <label>Experience</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-location-pin"></i></div>
                <input id="expEditExp" type="text"  class="form-control" >
            </div>
        </div>


    <label>Time Length</label><br>
    <div id="university" class="form-group">
      <div class="row">
        <div class="col-md-6">
        <h6 >Start</h6>
        <div class="input-group">
          <div class="input-group-addon"><i class="ti-time"></i></div>
            <input id="timeStartEditExp" type="text"  class="form-control col-md-6" >
          </div>
        </div>
        <div class="col-md-6">
          <h6 for="facultyHisEdu" >Finish</h6>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-time"></i></div>
              <input id="timeFinishEditExp" type="text"  class="form-control col-md-6" >
           </div>
        </div>
      </div>
    </div>

        <div class="form-group">
            <label >Detail</label>
            <div class="input-group">
              <div class="input-group-addon"><i class="ti-briefcase"></i></div>
                <textarea id="detailEditExp" type="text"  class="form-control" ></textarea>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button id="btEditExp" type="button" class="btn btn-outline-success "><i class="fa fa-check"></i> Submit</button>
        <button id="btClose" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!--======================================================================================================-->
