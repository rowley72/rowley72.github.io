var weatherRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
weatherRequest.open('Get',apiURLstring,true);
weatherRequest.send();

weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);

    document.getElementById('htemp').innerHTML=weatherData.main.temp;
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

