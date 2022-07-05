function getWeather() {
    const inputData=document.getElementById("inputData");
    const displayName=document.getElementById("displayName");
    displayName.innerHTML=" "+inputData.value+" "
    const cityName=document.getElementById("cityName");


//getWeather();

fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputData.value+"&appid=ba55bf9d483b2020057a460163c2f51d")
.then(response => response.json())
.then(data => {
    console.log(data)
    return data;
 } )

.then(data =>{  

    

    for(i=0; i<5;i++){
        //Default temperature in data is Kelvin and converting it into celcius by substracting -273.15
        document.getElementById("temp" +(i+1)).innerHTML="temp:" +Number(data.list[i].main.temp -273.15).toFixed(1);
        document.getElementById("humidity" +(i+1)).innerHTML="Humidity:" +Number(data.list[i].main.humidity);
        document.getElementById("wind" +(i+1)).innerHTML="Wind:" +Number(data.list[i].wind.speed);
        document.getElementById("date" +(i+1)).innerHTML="Date:" +Number(data.list[i].dt_txt);
    }
        document.getElementById("dayTemp").innerHTML="temp:" +Number(data.list[0].main.temp -273.15).toFixed(1);
        document.getElementById("dayHumidity").innerHTML="Humidity:" +Number(data.list[0].main.humidity);
        document.getElementById("dayWind").innerHTML="Wind:" +Number(data.list[0].wind.speed);
        
       // cityName.text(data.name + " " +moment().format('MM/DD/YYYY'));
        document.getElementById("cityName").innerHTML="City:" +(data.city[0].name);
        

    
    
})
}
    