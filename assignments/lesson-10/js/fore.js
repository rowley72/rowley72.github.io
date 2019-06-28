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
            weatherTableHeaders[weatherTableCellsCounter].textContent = days[forcast_date.getDay()] + "\n" + forcast_date.getDate() + ", " + months[forcast_date.getMonth()]
            //weatherTableData[weatherTableCellsCounter] = 
            //do stuff
            weatherTableCellsCounter++
        }

        // Forecast is only 5 days.
        if (weatherTableCellsCounter > 5) {
            break
        }
    }
}

    /*var icon="http://openweathermap.org/img/w/"+ foreData.list[4].weather[0].icon+".png";
    var desc=foreData.list[4].description;
    document.getElementById('for-img').setAttribute('src',icon);
    document.getElementById('for-img').setAttribute('alt',desc);*/

