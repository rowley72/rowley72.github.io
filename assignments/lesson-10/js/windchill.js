var tempF = 76;
var speed  = 5;
var t=tempF;
var s=Math.pow(speed,0.16);
windchilF=35.74+0.6215*t-35.75*s+0.4275*t*s;
windchilFR=parseFloat(windchilF.toFixed(1));

document.getElementById('windchill').innerHTML = windchilFR;
    