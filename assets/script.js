function getWeather() {
    const inputData=document.getElementById("inputData");
    const displayName=document.getElementById("displayName");
    displayName.innerHTML="--"+inputData.value+"--"


//getWeather();

fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputData.value+"&appid=ba55bf9d483b2020057a460163c2f51d")
.then(response => response.json())
.then(data =>{
   for(i=0; i<5;i++){
        document.getElementById("day" +(i+1)+"date").innerHTML="date:" + Number(data.list[i].dt_txt);
    }
    
    for(i=0; i<5;i++){
        document.getElementById("day" +(i+1)+"temp").innerHTML="temp:" + Number(data.list[i].main.temp -300.78).toFixed(1);
    }
    for(i=0; i<5;i++){
       document.getElementById("day" +(i+1)+"wind").innerHTML="wind:" + Number(data.list[i].wind.speed).toFixed(1);
    }

    for(i=0; i<5;i++){
        document.getElementById("day" +(i+1)+"humidity").innerHTML="humidity:" + Number(data.list[i].main.humidity -80);
    }

    

})

}

