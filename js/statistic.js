$(document).ready(function(){

  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var statisticRef = dbRef.ref('statistic');

  var dateAndTime = new Date();
  var dateCurrent = dateAndTime.toDateString();
  var monthCurrent = dateCurrent.split(" ")[1];
  var yearCurrent = dateCurrent.split(" ")[3];
  var sum=0,index=0,courseBachelor=0,courseMaster=0,courseDoctor=0,personal=0,portfolioGraduate=0;
  var indexPercent,courseBachelorPercent,courseMasterPercent,courseDoctorPercent,personalPercent,portfolioGraduatePercent;
  var indexYear,indexMonth;
  var txtyear,txtmonth;
  var checkonChangeMonth=0;
$.LoadingOverlay("show");
  $('#btSearchStatistic').on('click',function(){
    $('#btSearchStatistic').hide();
    $('#staticticYear').removeAttr('hidden');
    $('#btCancelSearchStatistic').removeAttr('hidden');
    var deleteYear = statisticRef.child('sum');
    deleteYear.on('child_added',snap=>{
      var year = snap.key;
      for(var i=1;i<11;i++){
          var optValue = $('#staticticYear option').eq(i).val();
          var optValueSplitFirst = optValue.split("(")[1];
          var optValueSplitSecond = optValueSplitFirst.split(")")[0];
          if(optValueSplitSecond != year){
            $('#staticticYear option').eq(i).remove();
            i--;
          }
      }
    });
  });

  $('#btCancelSearchStatistic').on('click',function(){
    $('#btSearchStatistic').show();
    $('#staticticYear').attr('hidden','true');
    $('#staticticMonth').attr('hidden','true');
    $('#btCancelSearchStatistic').attr('hidden','true');
    $('#txtMonth').text("ปัจจุบัน");
    $('#staticticMonth').empty();
    $('#staticticMonth').append("<option>เดือน</option>");
    $('#staticticYear option').eq(0).prop('selected', true);
    checkonChangeMonth=0;
    dateAndTime = new Date();
    dateCurrent = dateAndTime.toDateString();
    monthCurrent = dateCurrent.split(" ")[1];
    yearCurrent = dateCurrent.split(" ")[3];
    sumView = statisticRef.child('sum').child(yearCurrent).child(monthCurrent).child('sum');
    sumView.on('value',snap=>{
      sum = snap.val();
      $('#sumView').text(snap.val());
    });


      var indexView = statisticRef.child('index_page').child(yearCurrent).child(monthCurrent).child('count');
      indexView.on('value',snap=>{
        index = snap.val();
        $('#indexView').text(snap.val()+" ครั้ง");
        indexPercent = (index/sum)*100;
        $('#indexPercent').attr('data-label',indexPercent.toFixed(0)+"%");
        $('#indexPercent').attr('class',"css-bar m-b-0 css-bar-info css-bar-"+indexPercent.toFixed(0));
      });


      var courseBachelorView = statisticRef.child('course_bachelor_page').child(yearCurrent).child(monthCurrent).child('count');
      courseBachelorView.on('value',snap=>{
        courseBachelor = snap.val();
        $('#courseBachelorView').text(snap.val()+" ครั้ง");
        courseBachelorPercent = (courseBachelor/sum)*100;
        $('#courseBachelorPercent').attr('data-label',courseBachelorPercent.toFixed(0)+"%");
        $('#courseBachelorPercent').attr('class',"css-bar m-b-0 css-bar-success css-bar-"+courseBachelorPercent.toFixed(0));

      });

      var courseMasterView = statisticRef.child('course_master_page').child(yearCurrent).child(monthCurrent).child('count');
      courseMasterView.on('value',snap=>{
        courseMaster = snap.val();
        $('#courseMasterView').text(snap.val()+" ครั้ง");
        courseMasterPercent = (courseMaster/sum)*100;
        $('#courseMasterPercent').attr('data-label',courseMasterPercent.toFixed(0) +"%");
        $('#courseMasterPercent').attr('class',"css-bar m-b-0  css-bar-"+courseMasterPercent.toFixed(0));

      });

      var courseDoctorView = statisticRef.child('course_doctorate_page').child(yearCurrent).child(monthCurrent).child('count');
      courseDoctorView.on('value',snap=>{
        courseDoctor = snap.val();
        $('#courseDoctorView').text(snap.val()+" ครั้ง");
        courseDoctorPercent = (courseDoctor/sum)*100;
        $('#courseDoctorPercent').attr('data-label',courseDoctorPercent.toFixed(0) +"%");
        $('#courseDoctorPercent').attr('class',"css-bar m-b-0  css-bar-"+courseDoctorPercent.toFixed(0));

      });

      var personalView = statisticRef.child('personal_page').child(yearCurrent).child(monthCurrent).child('count');
      personalView.on('value',snap=>{
        personal = snap.val();
        $('#personalView').text(snap.val()+" ครั้ง");
        personalPercent = (personal/sum)*100;
        $('#personalPercent').attr('data-label',personalPercent.toFixed(0) +"%");
        $('#personalPercent').attr('class',"css-bar m-b-0  css-bar-"+personalPercent.toFixed(0));

      });

      var portfolioBachelorView = statisticRef.child('portfolio_bachelor_page').child(yearCurrent).child(monthCurrent).child('count');
      portfolioBachelorView.on('value',snap=>{
        portfolioBachelor = snap.val();
        $('#portfolioBachelorView').text(snap.val()+" ครั้ง");
        portfolioBachelorPercent = (portfolioBachelor/sum)*100;
        $('#portfolioBachelorPercent').attr('data-label',portfolioBachelorPercent.toFixed(0) +"%");
        $('#portfolioBachelorPercent').attr('class',"css-bar m-b-0  css-bar-"+portfolioBachelorPercent.toFixed(0));

      });

      var portfolioGraduateView = statisticRef.child('portfolio_graduate_page').child(yearCurrent).child(monthCurrent).child('count');
      portfolioGraduateView.on('value',snap=>{
        portfolioGraduate = snap.val();
        $('#portfolioGraduateView').text(snap.val()+" ครั้ง");
        portfolioGraduatePercent = (portfolioGraduate/sum)*100;
        $('#portfolioGraduatePercent').attr('data-label',portfolioGraduatePercent.toFixed(0) +"%");
        $('#portfolioGraduatePercent').attr('class',"css-bar m-b-0  css-bar-"+portfolioGraduatePercent.toFixed(0));
      });

      var activityView = statisticRef.child('activity_page').child(yearCurrent).child(monthCurrent).child('count');
      activityView.on('value',snap=>{
        activity = snap.val();
        $('#activityView').text(snap.val()+" ครั้ง");
        activityPercent = (activity/sum)*100;
        $('#activityPercent').attr('data-label',activityPercent.toFixed(0) +"%");
        $('#activityPercent').attr('class',"css-bar m-b-0  css-bar-"+activityPercent.toFixed(0));
      });
  });


  var sumView = statisticRef.child('sum').child(yearCurrent).child(monthCurrent).child('sum');
  sumView.on('value',snap=>{
    sum = snap.val();
    $('#sumView').text(snap.val());
  });

  $('#staticticYear').on('change',function(){
    $('#staticticMonth').removeAttr('hidden');

    indexYear = document.getElementById('staticticYear').selectedIndex ;
    if(indexYear==0){
      $('#staticticMonth').empty();
      $('#staticticMonth').append("<option>เดือน</option>");
    }else{
      var yearSplit = $('#staticticYear').val();
      var yearSplitLast = yearSplit.split("(")[1];
      txtyear = yearSplit.split("(")[0];
      yearCurrent = yearSplitLast.split(")")[0];
      if(checkonChangeMonth==1){
        $('#txtMonth').text(txtmonth+" พ.ศ. "+txtyear);
        var sumView = statisticRef.child('sum').child(yearCurrent).child(monthCurrent).child('sum');
        sumView.on('value',snap=>{
          sum = snap.val();
          $('#sumView').text(snap.val());
        });


          var indexView = statisticRef.child('index_page').child(yearCurrent).child(monthCurrent).child('count');
          indexView.on('value',snap=>{
            index = snap.val();
            $('#indexView').text(snap.val()+" ครั้ง");
            indexPercent = (index/sum)*100;
            $('#indexPercent').attr('data-label',indexPercent.toFixed(0)+"%");
            $('#indexPercent').attr('class',"css-bar m-b-0 css-bar-info css-bar-"+indexPercent.toFixed(0));
          });


          var courseBachelorView = statisticRef.child('course_bachelor_page').child(yearCurrent).child(monthCurrent).child('count');
          courseBachelorView.on('value',snap=>{
            courseBachelor = snap.val();
            $('#courseBachelorView').text(snap.val()+" ครั้ง");
            courseBachelorPercent = (courseBachelor/sum)*100;
            $('#courseBachelorPercent').attr('data-label',courseBachelorPercent.toFixed(0)+"%");
            $('#courseBachelorPercent').attr('class',"css-bar m-b-0 css-bar-success css-bar-"+courseBachelorPercent.toFixed(0));

          });

          var courseMasterView = statisticRef.child('course_master_page').child(yearCurrent).child(monthCurrent).child('count');
          courseMasterView.on('value',snap=>{
            courseMaster = snap.val();
            $('#courseMasterView').text(snap.val()+" ครั้ง");
            courseMasterPercent = (courseMaster/sum)*100;
            $('#courseMasterPercent').attr('data-label',courseMasterPercent.toFixed(0) +"%");
            $('#courseMasterPercent').attr('class',"css-bar m-b-0  css-bar-"+courseMasterPercent.toFixed(0));

          });

          var courseDoctorView = statisticRef.child('course_doctorate_page').child(yearCurrent).child(monthCurrent).child('count');
          courseDoctorView.on('value',snap=>{
            courseDoctor = snap.val();
            $('#courseDoctorView').text(snap.val()+" ครั้ง");
            courseDoctorPercent = (courseDoctor/sum)*100;
            $('#courseDoctorPercent').attr('data-label',courseDoctorPercent.toFixed(0) +"%");
            $('#courseDoctorPercent').attr('class',"css-bar m-b-0  css-bar-"+courseDoctorPercent.toFixed(0));

          });

          var personalView = statisticRef.child('personal_page').child(yearCurrent).child(monthCurrent).child('count');
          personalView.on('value',snap=>{
            personal = snap.val();
            $('#personalView').text(snap.val()+" ครั้ง");
            personalPercent = (personal/sum)*100;
            $('#personalPercent').attr('data-label',personalPercent.toFixed(0) +"%");
            $('#personalPercent').attr('class',"css-bar m-b-0  css-bar-"+personalPercent.toFixed(0));

          });

          var portfolioBachelorView = statisticRef.child('portfolio_bachelor_page').child(yearCurrent).child(monthCurrent).child('count');
          portfolioBachelorView.on('value',snap=>{
            portfolioBachelor = snap.val();
            $('#portfolioBachelorView').text(snap.val()+" ครั้ง");
            portfolioBachelorPercent = (portfolioBachelor/sum)*100;
            $('#portfolioBachelorPercent').attr('data-label',portfolioBachelorPercent.toFixed(0) +"%");
            $('#portfolioBachelorPercent').attr('class',"css-bar m-b-0  css-bar-"+portfolioBachelorPercent.toFixed(0));

          });

          var portfolioGraduateView = statisticRef.child('portfolio_graduate_page').child(yearCurrent).child(monthCurrent).child('count');
          portfolioGraduateView.on('value',snap=>{
            portfolioGraduate = snap.val();
            $('#portfolioGraduateView').text(snap.val()+" ครั้ง");
            portfolioGraduatePercent = (portfolioGraduate/sum)*100;
            $('#portfolioGraduatePercent').attr('data-label',portfolioGraduatePercent.toFixed(0) +"%");
            $('#portfolioGraduatePercent').attr('class',"css-bar m-b-0  css-bar-"+portfolioGraduatePercent.toFixed(0));
          });

          var activityView = statisticRef.child('activity_page').child(yearCurrent).child(monthCurrent).child('count');
          activityView.on('value',snap=>{
            activity = snap.val();
            $('#activityView').text(snap.val()+" ครั้ง");
            activityPercent = (activity/sum)*100;
            $('#activityPercent').attr('data-label',activityPercent.toFixed(0) +"%");
            $('#activityPercent').attr('class',"css-bar m-b-0  css-bar-"+activityPercent.toFixed(0));
          });
      }
      setMonth();

    }
  });

  $('#staticticMonth').on('change',function(){
    checkonChangeMonth=1;
    indexMonth = document.getElementById('staticticMonth').selectedIndex ;
    if(indexMonth!=0){

      var monthSplit = $('#staticticMonth').val();
      var monthSplitLast = monthSplit.split("(")[1];
      txtmonth = monthSplit.split("(")[0];
      monthCurrent = monthSplitLast.split(")")[0];
        $('#txtMonth').text(monthSplit.split("(")[0]+" พ.ศ. "+txtyear);

        var sumView = statisticRef.child('sum').child(yearCurrent).child(monthCurrent).child('sum');
        sumView.on('value',snap=>{
          sum = snap.val();
          $('#sumView').text(snap.val());
        });


          var indexView = statisticRef.child('index_page').child(yearCurrent).child(monthCurrent).child('count');
          indexView.on('value',snap=>{
            index = snap.val();
            $('#indexView').text(snap.val()+" ครั้ง");
            indexPercent = (index/sum)*100;
            $('#indexPercent').attr('data-label',indexPercent.toFixed(0)+"%");
            $('#indexPercent').attr('class',"css-bar m-b-0 css-bar-info css-bar-"+indexPercent.toFixed(0));
          });


          var courseBachelorView = statisticRef.child('course_bachelor_page').child(yearCurrent).child(monthCurrent).child('count');
          courseBachelorView.on('value',snap=>{
            courseBachelor = snap.val();
            $('#courseBachelorView').text(snap.val()+" ครั้ง");
            courseBachelorPercent = (courseBachelor/sum)*100;
            $('#courseBachelorPercent').attr('data-label',courseBachelorPercent.toFixed(0)+"%");
            $('#courseBachelorPercent').attr('class',"css-bar m-b-0 css-bar-success css-bar-"+courseBachelorPercent.toFixed(0));

          });

          var courseMasterView = statisticRef.child('course_master_page').child(yearCurrent).child(monthCurrent).child('count');
          courseMasterView.on('value',snap=>{
            courseMaster = snap.val();
            $('#courseMasterView').text(snap.val()+" ครั้ง");
            courseMasterPercent = (courseMaster/sum)*100;
            $('#courseMasterPercent').attr('data-label',courseMasterPercent.toFixed(0) +"%");
            $('#courseMasterPercent').attr('class',"css-bar m-b-0  css-bar-"+courseMasterPercent.toFixed(0));

          });

          var courseDoctorView = statisticRef.child('course_doctorate_page').child(yearCurrent).child(monthCurrent).child('count');
          courseDoctorView.on('value',snap=>{
            courseDoctor = snap.val();
            $('#courseDoctorView').text(snap.val()+" ครั้ง");
            courseDoctorPercent = (courseDoctor/sum)*100;
            $('#courseDoctorPercent').attr('data-label',courseDoctorPercent.toFixed(0) +"%");
            $('#courseDoctorPercent').attr('class',"css-bar m-b-0  css-bar-"+courseDoctorPercent.toFixed(0));

          });

          var personalView = statisticRef.child('personal_page').child(yearCurrent).child(monthCurrent).child('count');
          personalView.on('value',snap=>{
            personal = snap.val();
            $('#personalView').text(snap.val()+" ครั้ง");
            personalPercent = (personal/sum)*100;
            $('#personalPercent').attr('data-label',personalPercent.toFixed(0) +"%");
            $('#personalPercent').attr('class',"css-bar m-b-0  css-bar-"+personalPercent.toFixed(0));

          });

          var portfolioBachelorView = statisticRef.child('portfolio_bachelor_page').child(yearCurrent).child(monthCurrent).child('count');
          portfolioBachelorView.on('value',snap=>{
            portfolioBachelor = snap.val();
            $('#portfolioBachelorView').text(snap.val()+" ครั้ง");
            portfolioBachelorPercent = (portfolioBachelor/sum)*100;
            $('#portfolioBachelorPercent').attr('data-label',portfolioBachelorPercent.toFixed(0) +"%");
            $('#portfolioBachelorPercent').attr('class',"css-bar m-b-0  css-bar-"+portfolioBachelorPercent.toFixed(0));

          });

          var portfolioGraduateView = statisticRef.child('portfolio_graduate_page').child(yearCurrent).child(monthCurrent).child('count');
          portfolioGraduateView.on('value',snap=>{
            portfolioGraduate = snap.val();
            $('#portfolioGraduateView').text(snap.val()+" ครั้ง");
            portfolioGraduatePercent = (portfolioGraduate/sum)*100;
            $('#portfolioGraduatePercent').attr('data-label',portfolioGraduatePercent.toFixed(0) +"%");
            $('#portfolioGraduatePercent').attr('class',"css-bar m-b-0  css-bar-"+portfolioGraduatePercent.toFixed(0));
          });

          var activityView = statisticRef.child('activity_page').child(yearCurrent).child(monthCurrent).child('count');
          activityView.on('value',snap=>{
            activity = snap.val();
            $('#activityView').text(snap.val()+" ครั้ง");
            activityPercent = (activity/sum)*100;
            $('#activityPercent').attr('data-label',activityPercent.toFixed(0) +"%");
            $('#activityPercent').attr('class',"css-bar m-b-0  css-bar-"+activityPercent.toFixed(0));
          });
    }
  });

  var indexView = statisticRef.child('index_page').child(yearCurrent).child(monthCurrent).child('count');
  indexView.on('value',snap=>{
    index = snap.val();
    $('#indexView').text(snap.val()+" ครั้ง");
    indexPercent = (index/sum)*100;
    $('#indexPercent').attr('data-label',indexPercent.toFixed(0)+"%");
    $('#indexPercent').attr('class',"css-bar m-b-0 css-bar-info css-bar-"+indexPercent.toFixed(0));
  });


  var courseBachelorView = statisticRef.child('course_bachelor_page').child(yearCurrent).child(monthCurrent).child('count');
  courseBachelorView.on('value',snap=>{
    courseBachelor = snap.val();
    $('#courseBachelorView').text(snap.val()+" ครั้ง");
    courseBachelorPercent = (courseBachelor/sum)*100;
    $('#courseBachelorPercent').attr('data-label',courseBachelorPercent.toFixed(0)+"%");
    $('#courseBachelorPercent').attr('class',"css-bar m-b-0 css-bar-success css-bar-"+courseBachelorPercent.toFixed(0));

  });

  var courseMasterView = statisticRef.child('course_master_page').child(yearCurrent).child(monthCurrent).child('count');
  courseMasterView.on('value',snap=>{
    courseMaster = snap.val();
    $('#courseMasterView').text(snap.val()+" ครั้ง");
    courseMasterPercent = (courseMaster/sum)*100;
    $('#courseMasterPercent').attr('data-label',courseMasterPercent.toFixed(0) +"%");
    $('#courseMasterPercent').attr('class',"css-bar m-b-0  css-bar-"+courseMasterPercent.toFixed(0));

  });

  var courseDoctorView = statisticRef.child('course_doctorate_page').child(yearCurrent).child(monthCurrent).child('count');
  courseDoctorView.on('value',snap=>{
    courseDoctor = snap.val();
    $('#courseDoctorView').text(snap.val()+" ครั้ง");
    courseDoctorPercent = (courseDoctor/sum)*100;
    $('#courseDoctorPercent').attr('data-label',courseDoctorPercent.toFixed(0) +"%");
    $('#courseDoctorPercent').attr('class',"css-bar m-b-0  css-bar-"+courseDoctorPercent.toFixed(0));

  });

  var personalView = statisticRef.child('personal_page').child(yearCurrent).child(monthCurrent).child('count');
  personalView.on('value',snap=>{
    personal = snap.val();
    $('#personalView').text(snap.val()+" ครั้ง");
    personalPercent = (personal/sum)*100;
    $('#personalPercent').attr('data-label',personalPercent.toFixed(0) +"%");
    $('#personalPercent').attr('class',"css-bar m-b-0  css-bar-"+personalPercent.toFixed(0));

  });

  var portfolioBachelorView = statisticRef.child('portfolio_bachelor_page').child(yearCurrent).child(monthCurrent).child('count');
  portfolioBachelorView.on('value',snap=>{
    portfolioBachelor = snap.val();
    $('#portfolioBachelorView').text(snap.val()+" ครั้ง");
    portfolioBachelorPercent = (portfolioBachelor/sum)*100;
    $('#portfolioBachelorPercent').attr('data-label',portfolioBachelorPercent.toFixed(0) +"%");
    $('#portfolioBachelorPercent').attr('class',"css-bar m-b-0  css-bar-"+portfolioBachelorPercent.toFixed(0));

  });

  var portfolioGraduateView = statisticRef.child('portfolio_graduate_page').child(yearCurrent).child(monthCurrent).child('count');
  portfolioGraduateView.on('value',snap=>{
    portfolioGraduate = snap.val();
    $('#portfolioGraduateView').text(snap.val()+" ครั้ง");
    portfolioGraduatePercent = (portfolioGraduate/sum)*100;
    $('#portfolioGraduatePercent').attr('data-label',portfolioGraduatePercent.toFixed(0) +"%");
    $('#portfolioGraduatePercent').attr('class',"css-bar m-b-0  css-bar-"+portfolioGraduatePercent.toFixed(0));
  });

  var activityView = statisticRef.child('activity_page').child(yearCurrent).child(monthCurrent).child('count');
  activityView.on('value',snap=>{
    activity = snap.val();
    $('#activityView').text(snap.val()+" ครั้ง");
    activityPercent = (activity/sum)*100;
    $('#activityPercent').attr('data-label',activityPercent.toFixed(0) +"%");
    $('#activityPercent').attr('class',"css-bar m-b-0  css-bar-"+activityPercent.toFixed(0));
  });


  var minEng = 2018,
  		maxEng = minEng + 10,
      minTh = 2561,
      maxTh = minTh + 10,
  		select = document.getElementById('staticticYear');

  for (var i = minEng; i<=maxEng; i++){
  		var opt = document.createElement('option');
  		opt.value = minTh+" ("+i+")";
  		opt.innerHTML = minTh+" ("+i+")";
  		select.appendChild(opt);
      minTh++;
  }

function setMonth(){
  var month = ["มกราคม (Jan)", "กุมภาพันธ์ (Feb)", "มีนาคม (Mar)","เมษายน (Apr)", "พฤษภาคม (May)", "มิถุนายน (Jun)","กรกฎาคม (Jul)", "สิงหาคม (Aug)", "กันยายน (Sep)","ตุลาคม (Oct)", "พฤศจิกายน (Nov)", "ธันวาคม (Dev)"];
  var selectMonth = document.getElementById('staticticMonth');

  for (var i = 0; i< month.length; i++){
      var opt = document.createElement('option');
      opt.value = month[i];
      opt.innerHTML = month[i];
      selectMonth.appendChild(opt);
  };

  var deleteMonth = statisticRef.child('sum').child(yearCurrent);
  deleteMonth.on('child_added',snap=>{
    var month = snap.key;
    for(var i=1;i<13;i++){
        var optValue = $('#staticticMonth option').eq(i).val();
        var optValueSplitFirst = optValue.split("(")[1];
        var optValueSplitSecond = optValueSplitFirst.split(")")[0];
        if(optValueSplitSecond != month){
          $('#staticticMonth option').eq(i).remove();
          i--;
        }
    }
  });

}


});
