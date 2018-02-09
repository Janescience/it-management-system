
  <?php
  // $Token = $_POST["Token"];
  $message = $_GET["message"];
  $page = $_GET["page"];

  $lineapi = "mz0dTbhLDkDQ7ypumci9q91nLzwIcVhCubtj0vi15dY"; // ใส่ token key ที่ได้มา
	$mms =  trim($message); // ข้อความที่ต้องการส่ง
	date_default_timezone_set("Asia/Bangkok");
	$chOne = curl_init();
	curl_setopt( $chOne, CURLOPT_URL, "https://notify-api.line.me/api/notify");
	// SSL USE
	curl_setopt( $chOne, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt( $chOne, CURLOPT_SSL_VERIFYPEER, 0);
	//POST
	curl_setopt( $chOne, CURLOPT_POST, 1);
	curl_setopt( $chOne, CURLOPT_POSTFIELDS, "message=$mms");
	curl_setopt( $chOne, CURLOPT_FOLLOWLOCATION, 1);
	$headers = array( 'Content-type: application/x-www-form-urlencoded', 'Authorization: Bearer '.$lineapi.'', );
        curl_setopt($chOne, CURLOPT_HTTPHEADER, $headers);
	curl_setopt( $chOne, CURLOPT_RETURNTRANSFER, 1);
	$result = curl_exec( $chOne );
	//Check error
	if(curl_error($chOne))
	{
           echo 'error:' . curl_error($chOne);
	}
	else {
	$result_ = json_decode($result, true);


  if($page == "หน้าแรก"){
    echo "<script>window.location.href = 'index.php' </script>";
  }else if($page == "หลักสูตร"){
    echo "<script>window.location.href = 'course.php' </script>";
  }else if($page == "ผลงานและกิจกรรม"){
    echo "<script>window.location.href = 'student.php' </script>";
  }else if($page == "ข้อมูลส่วนตัว"){
    echo "<script>window.location.href = 'pages-profile.php' </script>";
  }else if($page == "จัดการผู้ใช้ในระบบ"){
    echo "<script>window.location.href = 'manage-user.php' </script>";
  }else if($page == "ประวัติ"){
    echo "<script>window.location.href = 'history.php' </script>";
  }

	   echo "status : ".$result_['status']; echo "message : ". $result_['message'];
        }
	curl_close( $chOne );
  ?>

  <!DOCTYPE html>
  <html lang="en">

  <head >
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- Tell the browser to be responsive to screen width -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta name="author" content="">


       <?php  include('header.php') ?>

  </head>

  <body class="fix-header fix-sidebar card-no-border">
    <div id="main-wrapper">

    <?php  include('navbar.php') ?>
  </div>
  <footer class="footer">Copyright © Information Technology 2017</footer>
  <?php include('import-javascript.php')?>

  </body>

  </html>
