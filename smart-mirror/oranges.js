function integerMonth() {
  if (month() == 1) return "January";
  if (month() == 2) return "February";
  if (month() == 3) return "March";
  if (month() == 4) return "April";
  if (month() == 5) return "May";
  if (month() == 6) return "June";
  if (month() == 7) return "July";
  if (month() == 8) return "August";
  if (month() == 9) return "September";
  if (month() == 10) return "October";
  if (month() == 11) return "November";
  if (month() == 12) return "December";
}

function weatherLength(){
  if (weather.main.temp.toString().length >= 3 && weather.main.temp.toString().includes('-')) return (weather.main.temp.toString().length - 1.00);
  if (weather.main.temp.toString().length <= 2) return (weather.main.temp.toString().length);
  else if (weather.main.temp.toString().length >= 3 && weather.main.temp.toString().length < 4 ) return (weather.main.temp.toString().length - 0.5);
  else if (weather.main.temp.toString().length >= 4) return (weather.main.temp.toString().length - 0.75);
  else if (weather.main.temp.toString().length >= 5) return (weather.main.temp.toString().length - 0.25);
  else return (weather.main.temp.toString().length);

}
