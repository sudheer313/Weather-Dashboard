var cities = JSON.parse(localStorage.getItem("cities") || "[]");
var inputData = document.getElementById("inputData");
var displayName = document.getElementById("displayName");
var serachCity = "";
document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  displayName.innerHTML = inputData.value;
  const cityName = document.getElementById("searchCity");
  cities.push(inputData.value);
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
      for (i = 0; i < 5; i++) {
        //Default temperature in data is Kelvin and converting it into celcius by substracting -273.15
        document.getElementById("temp" + (i + 1)).innerHTML =
          "temp:" + Number(data.list[i].main.temp - 273.15).toFixed(1);
        document.getElementById("humidity" + (i + 1)).innerHTML =
          "Humidity:" + Number(data.list[i].main.humidity);
        document.getElementById("date" + (i + 1)).innerHTML =
          "Date:" + data.list[i].dt_txt;
        document.getElementById("wind" + (i + 1)).innerHTML =
          "Wind:" + Number(data.list[i].wind.speed);
         
        //document.getElementById("date" +(i+1)).innerHTML="Date:" +Number(data.list[i].dt_txt);
      }
      
      document.getElementById("dayTemp").innerHTML =
        "temp:" + Number(data.list[0].main.temp - 273.15).toFixed(1);
      document.getElementById("dayHumidity").innerHTML =
        "Humidity:" + Number(data.list[0].main.humidity);
      document.getElementById("dayWind").innerHTML =
        "Wind:" + Number(data.list[0].wind.speed);

      document.getElementById("cityName").innerHTML = "City:" + data.city.name;
    });
}

window.onload = function () {
  let html = "";
  for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
    html += "<li><button>" + cities[i] + "</button></li>";
  }
  document.querySelector("#seachHistory").innerHTML = html;
};
