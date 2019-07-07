var weatherRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
weatherRequest.open('Get',apiURLstring,true);
weatherRequest.send();

weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);

    document.getElementById('htemp').innerHTML=Math.round(weatherData.main.temp);
    document.getElementById('curret').innerHTML=weatherData.weather[0].description;
    document.getElementById('humi').innerHTML=weatherData.main.humidity;
    document.getElementById('wispeed').innerHTML=weatherData.wind.speed;

    



var tempF = weatherData.main.temp;
var speed  = weatherData.wind.speed;
var t=tempF;
var s=Math.pow(speed,0.16);
windchilF=35.74+0.6215*t-35.75*s+0.4275*t*s;
windchilFR=parseFloat(windchilF.toFixed(1));

document.getElementById('windchill').innerHTML = windchilFR;


    


}

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var weatherTableRows = document.getElementById("weatherinfo").rows;
var weatherTableCellsCounter = 0
var weatherTableHeaders = weatherTableRows[0].cells
var weatherTableData = weatherTableRows[1].cells

var foreRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
foreRequest.open('Get', apiURLstring, true);
foreRequest.send();

foreRequest.onload =  function () {
    foreData = JSON.parse(foreRequest.responseText);
    

    for (i = 0; i < foreData.list.length; i++) {
        var forcast = foreData.list[i]
        var forcast_date = new Date(forcast.dt_txt)
        
        if (forcast_date.getHours() === 18) {
            weatherTableHeaders[weatherTableCellsCounter].textContent = days[forcast_date.getDay()] + "\n"  + months[forcast_date.getMonth()]+forcast_date.getDate()
           
            

           var myImg = document.createElement("img");
           var myPara1 = document.createElement('p');

           myImg.src="https://openweathermap.org/img/w/"+ forcast.weather[0].icon+".png";
           myImg.alt=forcast.weather[0].description;
           myPara1.textContent=Math.round(forcast.main.temp)+"°F" ;
          

           weatherTableData[weatherTableCellsCounter].appendChild(myImg);
           weatherTableData[weatherTableCellsCounter].appendChild(myPara1);
          
            weatherTableCellsCounter++
        }

        // Forecast is only 5 days.
        if (weatherTableCellsCounter > 5) {
            break
        }
    }
}

/* event page*/

var secteven = document.querySelectorAll('section');
var requestURL='https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
  var towndata = request.response;
  dataevent(towndata);
  
  
}
function dataevent(jsonObj) {
    var infoevent = jsonObj['towns'];
    var infodiv= document.createElement('div');
    for (var n = 0; n < secteven.length; n++) {
      for (var i = 0; i < infoevent.length; i++) {
        var idName = infoevent[i].name.toLowerCase().replace(" ", "");
        if (idName === secteven[n].id) {
          var mysection = document.createElement('section');
          var myH2 = document.createElement('h2');
          var myPara1 = document.createElement('p');
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
          var myPara4 = document.createElement('p');

           var myImg = document.createElement("img");

           myH2.textContent ='Upcoming Events in '+ infoevent[i].name;
           myPara1.textContent = infoevent[i].events[0];
           myPara2.textContent = infoevent[i].events[1];
           myPara3.textContent = infoevent[i].events[2];
           myPara4.textContent = infoevent[i].events[3];
           myImg.src = "images/fish.jpg";
           myImg.className = "homeimage1";

           infodiv.appendChild(myH2);
          ;
           infodiv.appendChild(myPara1);
           infodiv.appendChild(myPara2);
           infodiv.appendChild(myPara3);
           infodiv.appendChild(myPara4);
           mysection.appendChild(infodiv);
           mysection.appendChild(myImg);
     
           secteven[n].appendChild(mysection);  
        }
    }
}
}

   



