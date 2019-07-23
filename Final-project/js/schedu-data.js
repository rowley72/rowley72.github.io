
var tsch, i, x = "";
tsch ={

        "name":"Houston",
        "Date": 2019,
        
    "ClosuresDates" : [
    "Tuesday, 6 August 2019 - Monday, 2 September 2019",
    "Saturday, 5 October 2019",
    "Wednesday, 27 November 2019 (Limited Hours)",
    "Thursday, 28 November 2019",
    "Tuesday, 24 December 2019 - Wednesday, 25 December 2019",
    "Tuesday, 31 December 2019 (Limited Hours)"
    
      ]
    };
    for (i = 0; i < tsch.ClosuresDates.length; i++) {
        x += tsch.ClosuresDates[i] + "<br>";
      }
      document.getElementById("data").innerHTML = "Temple Closures"+ "<br>"+x;