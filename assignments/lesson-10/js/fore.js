var foreRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
foreRequest.open('Get',apiURLstring,true);
foreRequest.send();

foreRequest.onload =  function () {
    var foreData = JSON.parse(foreRequest.responseText);

    console.log(foreData);


    var icon="http://openweathermap.org/img/w/"+ foreData.weather[0].icon+".png";
    var desc=foreData.weather[0].description;
    document.getElementById('for-img').setAttribute('src',icon);
    document.getElementById('for-img').setAttribute('alt',desc);

}