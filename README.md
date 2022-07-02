# Weather-Dashboard
ba55bf9d483b2020057a460163c2f51d
https://api.openweathermap.org/data/2.5/forecast?q=hyderabad,%20India&appid=ba55bf9d483b2020057a460163c2f51d

api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}

api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}

$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});