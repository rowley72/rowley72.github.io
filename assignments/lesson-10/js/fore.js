var foreRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
foreRequest.open('Get',apiURLstring,true);
foreRequest.send();

foreRequest.onload =  function () {
    var foreData = JSON.parse(foreRequest.responseText);

    for(i=0; i<foreData.list.length;i++){
        var forcast=foreData.list[i]
        var forcast_date=new Date(forcast.dt_txt)
        if(forcast_date.getHours()===18&&forcast_date.getDay()===4){
            



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