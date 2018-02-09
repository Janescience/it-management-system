
<!-- ============================================================== -->
<!-- Topbar header - style you can find in pages.scss -->
<!-- ============================================================== -->
<header class="topbar">
    <nav class="navbar top-navbar navbar-toggleable-sm navbar-light">
        <!-- ============================================================== -->
        <!-- Logo -->
        <!-- ============================================================== -->
        <div class="navbar-header">
            <a class="navbar-brand" href="index.php">
                      <span class="hidden-xs-down"><img src="../images/it-logo.png" alt="homepage" class="light-logo" width="300px" /></span>
                </a>
                <span class="hidden-md-up"><img src="../images/logo-bird.png" alt="homepage" class="light-logo" width="35px" /></span>

        </div>
        <!-- ============================================================== -->
        <!-- End Logo -->
        <!-- ============================================================== -->
        <div class="navbar-collapse">
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== -->
            <ul class="navbar-nav mr-auto mt-md-0">
                <!-- This is  -->
                <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="mdi mdi-menu"></i></a> </li>

            </ul>
            <!-- ============================================================== -->
            <!-- User profile and search -->
            <!-- ============================================================== -->
            <ul class="navbar-nav my-lg-0">
              <li id="notifyClick" class="nav-item dropdown show">
                            <a  class="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="mdi mdi-message"></i>
                                <div class="notify">  <span id="heartBit"></span> <span id="point"></span></div>
                            </a>
                            <div hidden class="dropdown-menu dropdown-menu-right mailbox scale-up show">
                                <ul>
                                    <li>
                                        <div class="drop-title">การแจ้งเตือน</div>
                                    </li>
                                    <li style="overflow: visible;">
                                        <div class="slimScrollDiv" style="position: relative; overflow-x: visible; overflow-y: hidden; width: auto; height: 250px;">
                                          <div id="notify" class="message-center" style="overflow: hidden; width: auto; height: 250px;">

                                        </div>
                                        <div class="slimScrollBar" style="background: rgb(220, 220, 220); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px; height: 192.901px;"></div>
                                        <div class="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div>
                                      </div>
                                    </li>
                                    <li>
                                        <a class="nav-link text-center" href="javascript:void(0);"> <strong>ดูการแจ้งเตือนทั้งหมด</strong> <i class="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                <!-- ============================================================== -->
                <!-- Profile -->
                <!-- ============================================================== -->
                <li id="profileNavbar" class="nav-item dropdown show">
                    <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><img id="userImageProfile"  src="../assets/images/users/user.png" class="profile-pic m-r-10" /><label id="nameUser" class="hidden-xs-down">ชื่อ - นามสกุล</label></a>
                      <div hidden class="dropdown-menu dropdown-menu-right scale-up show">
                                  <ul class="dropdown-user">
                                      <li>
                                          <div class="dw-user-box">
                                              <div class="u-img"><img id="userImage" src="../assets/images/users/user.png" alt="user"></div>
                                              <div class="u-text">
                                                  <h4 id="userProfile">ชื่อ - นามสกุล</h4>
                                                  <p class="text-muted" id="emailUser">อีเมลล์</p>
                                                  <a href="pages-profile.php" class="btn btn-rounded btn-danger btn-sm">โปรไฟล์</a></div>
                                          </div>
                                      </li>

                                      <li role="separator" class="divider"></li>
                                      <li id="btLogout"><a href="#"><i class="fa fa-power-off"></i> ออกจากระบบ</a></li>
                                  </ul>
                      </div>
                </li>
            </ul>
        </div>
    </nav>
</header>
<aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
            <ul id="sidebarnav">
                <li > <a class="has-arrow waves-effect waves-dark"  aria-expanded="false"><i class="mdi mdi-home"></i><span class="hide-menu">เมนูหลัก</span></a>
                  <ul aria-expanded="true" class="collapse in">
<<<<<<< HEAD
                               <li ><a id="indexPage" href="index.php">หน้าแรก</a></li>
                               <li><a href="courses.php">หลักสูตร</a></li>
                               <li><a id="studentPage" href="student.php">นักศึกษา</a></li>
=======
                               <li hidden id="indexMenu" ><a id="indexPage" href="index.php">หน้าแรก</a></li>
                               <li hidden id="courseMenu" ><a id="coursePage" href="courses.php">หลักสูตร</a></li>
                               <li hidden id="studentMenu"><a id="studentPage" href="student.php">ผลงานและกิจกรรม</a></li>
>>>>>>> lasted version
                           </ul></li>
                <li> <a class="waves-effect waves-dark" href="pages-profile.php" aria-expanded="false"><i class="mdi mdi-account-check"></i><span class="hide-menu">ข้อมูลส่วนตัว</span></a>
                </li>
                <li hidden id="manageUserMenu"> <a class="waves-effect waves-dark" href="manage-user.php" aria-expanded="false"><i class="mdi mdi-account-edit"></i><span class="hide-menu">จัดการผู้ใช้ในระบบ</span></a>
                </li>
                <li id="historyMenu"> <a class="waves-effect waves-dark" href="history.php" aria-expanded="false"><i class="mdi mdi-history"></i><span class="hide-menu">ประวัติ</span></a>
                </li>


            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
    <!-- Bottom points-->
    <div class="sidebar-footer">
        <!-- item--><a id="btLogoutFooter"  class="link" data-toggle="tooltip" title="ออกจากระบบ"><i class="mdi mdi-power"></i></a> </div>
    <!-- End Bottom points-->
</aside>

<!-- Modal -->
<div class="modal fade" id="logoutModal" role="dialog" aria-labelledby="Message" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="messageModalLabel">ต้องการออกจากระบบ ?</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
        <button id="confirmLogout"type="button" class="btn btn-info">ตกลง</button>
      </div>
    </div>
  </div>
</div>
