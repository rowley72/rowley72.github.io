var sections = document.querySelectorAll('section');
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
    var infodata = jsonObj['towns'];
    
    for (var n = 0; n < sections.length; n++) {
      for (var i = 0; i < infodata.length; i++) {
        var idName = infodata[i].name.toLowerCase().replace(" ", "");
        if (idName === sections[n].id) {
          var myArticle = document.createElement('article');
          var myH2 = document.createElement('h2');
          var myPara1 = document.createElement('p');
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
          var myPara4 = document.createElement('p');
          var myImg = document.createElement("img");

          myH2.textContent = infodata[i].name;
          myPara1.textContent = '' +infodata[i].motto;
          myPara2.textContent = 'Year Founded: ' + infodata[i].yearFounded;
          myPara3.textContent = 'Current Population:'+ infodata[i].currentPopulation;
          myPara4.textContent = 'Average Rainfall: ' +infodata[i].averageRainfall;
          myImg.src = "images/" + idName + "-section.jpg";
          myImg.className = "homeimage";
          myArticle.appendChild(myH2);
          myArticle.appendChild(myPara1);
          myArticle.appendChild(myPara2);
          myArticle.appendChild(myPara3);
          myArticle.appendChild(myPara4);
          myArticle.appendChild(myImg);
    
          sections[n].appendChild(myArticle);
      
        }
      }
    }
}

