var amOrPm
var A = 130
var realminute
var numberCount = 0;
var currentTemp;
var currentHour;
var intMonth;
var intDay;
var intYear;
var disCountry;
var disCity;


function preload() {
   //var url = 'http://api.openweathermap.org/data/2.5/weather?q=Edmonton&APPID=a91daf84655e083d34ed54a9e0b4d2d2&units=metric';
 weather = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Edmonton&APPID=a91daf84655e083d34ed54a9e0b4d2d2&units=metric');
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  frameRate(60);
  currentTemp = weather.main.temp;
  intMonth = integerMonth();
  intDay = day();
  intYear = year();
  currentHour = hour();
  disCountry = weather.sys.country;
  disCity = weather.name;
  fill(200);
  rect (15, 15, displayWidth - 30 , displayHeight - 30);
  fill(0)
  rect (26, 26, displayWidth - 52 , displayHeight - 52);

}

function draw() {
  numberCount++;
  textFont('Helvetica');
  stroke(0);
  fill(0);
  rect(30, 30, displayWidth - 60 , displayHeight - 60)


  if (minute() < 10) {
    realminute = "0" + minute();
  }
  else {
    realminute = minute();
  }

  textSize(90);
  fill(255);
  text(currentHour + ':' + realminute, 55, 160);
  if(numberCount >= 36000){
    currentTemp = weather.main.temp;
  }
  text(currentTemp, displayWidth - (90/weatherLength()+ (weatherLength()*50) + A), 160);
  textSize(45);
  text("°C", displayWidth - (90/weatherLength()+ (weatherLength()*50) - (textWidth(currentTemp)*2) + A), 115);

  textSize(35);
  text(intMonth + ' ' + intDay + ', ' + intYear, 60, 75);
  text(disCity + ', '+ disCountry, displayWidth - (100/weatherLength()+ (weatherLength()*50) + A), 75);

  if (numberCount >= 432000) {
    intMonth = integerMonth();
    intDay = day();
    intYear = year();
    currentCount = 0;
  }

}
