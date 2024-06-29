const apikey = "7f21079c207a32f222867945a957b277";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const citybox = document.querySelector(".search input");
const weathericon = document.querySelector(".weather-icon");


async function checkWeather(city){
    
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".details").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity-reading").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weathericon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weathericon.src = "images/snow.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "images/rain.png";
        }

        document.querySelector(".weather").style.display = "flex";
        document.querySelector(".details").style.display = "flex";
        document.querySelector(".error").style.display = "none";

    }
}