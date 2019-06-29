var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var weatherTableRows = document.getElementById("weatherinfo").rows;
var weatherTableCellsCounter = 0
var weatherTableHeaders = weatherTableRows[0].cells
var weatherTableData = weatherTableRows[1].cells

var foreRequest = new XMLHttpRequest();
var apiURLstring='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=49bba8f65e06218978ae5717239ff8c0';
foreRequest.open('Get', apiURLstring, true);
foreRequest.send();

foreRequest.onload =  function () {
    foreData = JSON.parse(foreRequest.responseText);
    

    for (i = 0; i < foreData.list.length; i++) {
        var forcast = foreData.list[i]
        var forcast_date = new Date(forcast.dt_txt)

        if (forcast_date.getHours() === 18) {
            weatherTableHeaders[weatherTableCellsCounter].textContent = days[forcast_date.getDay()] + "\n"  + months[forcast_date.getMonth()]+forcast_date.getDate()
            weatherTableData[weatherTableCellsCounter] .textContent=forcast.main.temp
            
    
           
            //do stuff
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
  datasection(towndata);
  
  
}
function datasection(jsonObj) {
    var infoevent = jsonObj['towns'];
    
    for (var n = 0; n < secteven.length; n++) {
      for (var i = 0; i < infoevent.length; i++) {
        var idName = infoevent[i].name.toLowerCase().replace(" ", "");
        if (idName === secteven[n].id) {
          var mysection = document.createElement('section');
          var myH2 = document.createElement('h2');
          var myPara1 = document.createElement('p');
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
           var myImg = document.createElement("img");

           myH2.textContent ='Upcoming event in '+ infoevent[i].name;
           myPara1.textContent = infoevent[i].events[0];
           myPara2.textContent = infoevent[i].events[1];
           myPara3.textContent = infoevent[i].events[2];
           myImg.src = "images/napfes.jpg";
           myImg.className = "homeimage";

           mysection.appendChild(myH2);
          
           mysection.appendChild(myPara1);
           mysection.appendChild(myPara2);
           mysection.appendChild(myPara3);
           
           mysection.appendChild(myImg);
     
           secteven[n].appendChild(mysection);  
        }
    }
}
}

    /*var icon="http://openweathermap.org/img/w/"+ foreData.list[4].weather[0].icon+".png";
    var desc=foreData.list[4].description;
    document.getElementById('for-img').setAttribute('src',icon);
    document.getElementById('for-img').setAttribute('alt',desc);*/

