$(document).ready(function () {    

  $('.at-countdown').appleTimer({
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



  if (nDays == 0) {      
    //$(".col1").hide();      

    if (nHours == 0) {        
      //    $(".col2").hide();     
      //  $(".col4").show();    
      if (nMinutes == 0) {          
        //      $(".col3").hide();          
        //      $(".col4").show(); 
        if (nSeconds == 0) {            
          //  var url = "http://developer.apple.com/wwdc/live";
          //if(typeof IE_fix != "undefined") // IE8 and lower fix to pass the http referer
          //{
            //document.write("redirecting..."); // Don't remove this line or appendChild() will fail because it is called before document.onload to make the redirect as fast as possible. Nobody will see this text, it is only a tech fix.
            //var referLink = document.createElement("a");
            //referLink.href = url;
            //document.body.appendChild(referLink);
            //referLink.click();
            //}//
            //else { window.location.replace(url); } // All other browsers    
          }        
        }      
      }    
    }


  })
