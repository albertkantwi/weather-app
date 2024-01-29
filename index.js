const apiKey = "68a77b33afb768bb3bbc647f0a90d2c9";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=accra";

async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();