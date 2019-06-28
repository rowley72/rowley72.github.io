var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


var weatherTableRows=document.getElementById("weatherinfo").rows;
var foreRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
foreRequest.open('Get',apiURLstring,true);
foreRequest.send();

foreRequest.onload =  function () {
    var foreData = JSON.parse(foreRequest.responseText);

    for(i=0; i<foreData.list.length;i++){
        var forcast=foreData.list[i]
        var forcast_date=new Date(forcast.dt_txt)
        if(forcast_date.getHours()===18){
            



         var mytable = document.createElement('table');
          var myth = document.createElement('th');
          
         

          myth.textContent = foredata.list[i].dt_txt;
          
          
          myth.appendChild(myth);
          
    
          foredata.list[i].appendChild(mytable);


          
        }
    }

   


    /*var icon="http://openweathermap.org/img/w/"+ foreData.list[4].weather[0].icon+".png";
    var desc=foreData.list[4].description;
    document.getElementById('for-img').setAttribute('src',icon);
    document.getElementById('for-img').setAttribute('alt',desc);*/

}