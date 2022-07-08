# Weather-Dashboard

https://sudheer313.github.io/Weather-Dashboard/

sudheer313
/
Weather-Dashboard
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


https://api.openweathermap.org/data/2.5/onecall?lat=37.81&lon=-144.96&exclude=hourly,alerts&units=imperial&appid=ba55bf9d483b2020057a460163c2f51d
## melbourne 
yes the icon is in the data under the weather element

"wind_gust": 16.17,
"weather": [
{
"id": 804,
"main": "Clouds",
"description": "overcast clouds",
"icon": "04d"
}
],
 http://openweathermap.org/img/wn/04d@2x.png
 you have to substitute your icon code in the URL above with whatever code is return for the day you are interested in
10:26
they doc link I provided lists all of the icons icon codes ending d are for day and ending in n are for night