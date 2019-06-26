var weatherRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
weatherRequest.open('Get',apiURLstring,true);
weatherRequest.send();

weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);

    document.getElementById('cc-temp').innerHTML=weatherData.main.temp;


}

