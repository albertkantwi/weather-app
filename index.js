const apiKey = '68a77b33afb768bb3bbc647f0a90d2c9';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=accra';

async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

}

checkWeather();