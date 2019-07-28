var weatherRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/weather?id=4171010&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
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

/* Temple Closures*/

var divsec = document.querySelectorAll('div');
var requestURL='https://rowley72.github.io/final-project/directory.json';

var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
  var templdata = request.response;
  datasche(templdata);
  
  
}
function datasche(jsonObj) {
    var infoevent = jsonObj["temples"];
    var infodiv= document.createElement('div');
    for (var n = 0; n < divsec.length; n++) {
      for (var i = 0; i < infoevent.length; i++) {
        var idName = infoevent[i].name.toLowerCase().replace(" ", "");
        if (idName === divsec[n].id) {
          var mydiv = document.createElement('div');
          var myH2 = document.createElement('h2');
          var myH3 = document.createElement('h3');
          var myPara1 = document.createElement('p');
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
          var myPara4 = document.createElement('p');
          var myPara5 = document.createElement('p');
          var myPara6 = document.createElement('p');
         
          

           myH2.textContent ="Temple Closures "+infoevent[i].name;
           myH3.textContent =infoevent[i].date;
           myPara1.textContent = infoevent[i].ClosuresDates[0];
           myPara2.textContent = infoevent[i].ClosuresDates[1];
           myPara3.textContent = infoevent[i].ClosuresDates[2];
           myPara4.textContent = infoevent[i].ClosuresDates[3];
           myPara5.textContent = infoevent[i].ClosuresDates[4];
           myPara6.textContent = infoevent[i].ClosuresDates[5];

           infodiv.appendChild(myH2);
            infodiv.appendChild(myH3);
           infodiv.appendChild(myPara1);
           infodiv.appendChild(myPara2);
           infodiv.appendChild(myPara3);
           infodiv.appendChild(myPara4);
           infodiv.appendChild(myPara5);
           infodiv.appendChild(myPara6);
           mydiv.appendChild(infodiv);
          
     
           divsec[n].appendChild(mydiv);  
        }
    }
}
}

