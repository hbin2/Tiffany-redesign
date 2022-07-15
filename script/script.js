new fullpage('#fullpage', {
  navigation:true,
  navigationPosition: 'right',
  showActiveTooltip:true,
  responsiveWidth:1900,
  scrollOverflow: true,
  afterResponsive: function(isResponsive){
    //alert("Is responsive: " + isResponsive);
  }
  });

  // aos 라이브러리

  AOS.init();