$(document).ready(function () {    

  var timer = $('.at-countdown').appleTimer({
    minute: 55,
    //Change date here!
    hour: 9,
    day: 13,
    month: 6,
    year: 2016,
    pluralLabels: true
  });

  var tDays = $(".at-days-digit").text();    
  var tHours = $(".at-hours-digit").text();    
  var tMinutes = $(".at-minutes-digit").text();    
  var tSeconds = $(".at-seconds-digit").text();


  nDays = parseInt(tDays);    
  nHours = parseInt(tHours);    
  nMinutes = parseInt(tMinutes);    
  nSeconds = parseInt(tSeconds);

  console.log(timer)

  setInterval(function(){

    var tDays = $(".at-days-digit").text();    
    var tHours = $(".at-hours-digit").text();
    var tMinutes = $(".at-minutes-digit").text();  
    var tSeconds = $(".at-seconds-digit").text();

    var nDays = parseInt(tDays);    
    var nHours = parseInt(tHours);    
    var nMinutes = parseInt(tMinutes);    
    var nSeconds = parseInt(tSeconds); 

    if (nDays== 0 && nHours==0 && nMinutes == 0 && nSeconds == 0 ){
      var win = window.open('http://www.apple.com/apple-events/june-2016/', '_blank');
      win.focus();
    }

  }, 60000);


});
