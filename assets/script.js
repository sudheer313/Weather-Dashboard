var cities = JSON.parse(localStorage.getItem("cities") || "[]");
var inputData = document.getElementById("inputData");
var dayUV = document.getElementById("dayUV");
var displayName = document.getElementById("displayName");
var serachCity = "";
document.getElementById("searchBtn").addEventListener("click", getWeather);
function getWeather() {
  displayName.innerHTML = inputData.value;
  const cityName = document.getElementById("searchCity");
  cities.push(inputData.value);
  if (cities.length > 5) {
    cities.shift();
  }
    localStorage.setItem("cities", JSON.stringify(cities, null, 2));
    for (i = 0; i <= cities.length; i++) localStorage.getItem("cities");
    console.log(cities);

    serachCity = inputData.value;
    fetchApi("");
  
}

function fetchApi() {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      inputData.value +
      "&appid=ba55bf9d483b2020057a460163c2f51d"
  )
    .then(function (response) {
      // After getting into the API this function will now happen (promise)
      return response.json(); // Returns the information as JSON
    })
    .then(function (
      data // We take that data and use it inside this function to start outputting our information
    ) {
      console.log(data);
      return data;
    })

    .then((data) => {
      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          data.city.coord.lat +
          "&lon=" +
          data.city.coord.lon +
          "&exclude=hourly,alerts&units=imperial&appid=ba55bf9d483b2020057a460163c2f51d"
      ) // Calls our  second API for the information we need.
        .then(function (
          response // After gettubg ubti the API, this function will now happen (promise)
        ) {
          return response.json(); // Returns the data we need as a JSON
        })
        .then(function (
          data2 // We take that data and use it inside this function to start outputting our information.
        ) {
          console.log(data2);
          document.getElementById("dayUV").innerHTML = Number(
            data2.current.uvi
          );
          
        }); // Outputs the current days UV Index

      //displaying temperature from data
      //converting from Kelvin to celcius
      document.getElementById("temp" + 1).innerHTML =
        "temp:" + Number(data.list[0].main.temp - 273.15).toFixed(1) + "°C";
      document.getElementById("temp" + 2).innerHTML =
        "temp:" + Number(data.list[8].main.temp - 273.15).toFixed(1) + "°C";
      document.getElementById("temp" + 3).innerHTML =
        "temp:" + Number(data.list[16].main.temp - 273.15).toFixed(1) + "°C";
      document.getElementById("temp" + 4).innerHTML =
        "temp:" + Number(data.list[24].main.temp - 273.15).toFixed(1) + "°C";
      document.getElementById("temp" + 5).innerHTML =
        "temp:" + Number(data.list[32].main.temp - 273.15).toFixed(1) + "°C";

      //displaying humidity
      document.getElementById("humidity" + 1).innerHTML =
        "Humidity:" + Number(data.list[0].main.humidity) + "%";
      document.getElementById("humidity" + 2).innerHTML =
        "Humidity:" + Number(data.list[8].main.humidity) + "%";
      document.getElementById("humidity" + 3).innerHTML =
        "Humidity:" + Number(data.list[16].main.humidity) + "%";
      document.getElementById("humidity" + 4).innerHTML =
        "Humidity:" + Number(data.list[24].main.humidity) + "%";
      document.getElementById("humidity" + 5).innerHTML =
        "Humidity:" + Number(data.list[32].main.humidity) + "%";

      //displaying wind from available data
      document.getElementById("wind" + 1).innerHTML =
        "Wind:" + Number(data.list[0].wind.speed) + "MPH";
      document.getElementById("wind" + 2).innerHTML =
        "Wind:" + Number(data.list[1].wind.speed) + "MPH";
      document.getElementById("wind" + 3).innerHTML =
        "Wind:" + Number(data.list[2].wind.speed) + "MPH";
      document.getElementById("wind" + 4).innerHTML =
        "Wind:" + Number(data.list[3].wind.speed) + "MPH";
      document.getElementById("wind" + 5).innerHTML =
        "Wind:" + Number(data.list[4].wind.speed) + "MPH";

      // displaying date from available data
      document.getElementById("date" + 1).innerHTML =
        "Date:" + data.list[0].dt_txt;
      document.getElementById("date" + 2).innerHTML =
        "Date:" + data.list[8].dt_txt;
      document.getElementById("date" + 3).innerHTML =
        "Date:" + data.list[16].dt_txt;
      document.getElementById("date" + 4).innerHTML =
        "Date:" + data.list[24].dt_txt;
      document.getElementById("date" + 5).innerHTML =
        "Date:" + data.list[32].dt_txt;

      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          " http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }

      //main card
      document.getElementById("dayTemp").innerHTML =
        "temp:" + Number(data.list[0].main.temp - 273.15).toFixed(1) + "°C";
      document.getElementById("dayHumidity").innerHTML =
        "Humidity:" + Number(data.list[0].main.humidity) + "%";
      document.getElementById("dayWind").innerHTML =
        "Wind:" + Number(data.list[0].wind.speed) + "MPH";

      document.getElementById("cityName").innerHTML = "City:" + data.city.name;
    });
}

let html = "";
window.onload = function () {
  //let html = "";
  for (let i = 0; i < cities.length; i++) {
   
    console.log(cities[i]);
    html += "<li><button id='recentSearch'>" + cities[i] + "</button></li>";
  }
  // need to add id to this button
  document.querySelector("#seachHistory").innerHTML = html;

  var recent=document.querySelector("#recentSearch").innerText;
  //.addEventListener("click", ()=>{console.log(this)})
  
  // html.setAttribute('id', 'historyButton');
  console.log(html);
};



