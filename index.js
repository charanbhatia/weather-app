const apikey = "d3501c9bcb51614d9e8ee9c93b678058"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const seacrhBox = document.querySelector(".search input");
const seacrhBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkweather(city) {
    
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {


        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerText = data.main.humidity + " %";
        document.querySelector(".wind").innerText = data.wind.speed + " km/hr";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "./clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "./clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "./rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "./drizzle.png";
        }
        else if (data.weather[0].main == "Humidity") {
            weathericon.src = "./humidity.png";
        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "./snow.png";
        }
        else if (data.weather[0].main == "Wind") {
            weathericon.src = "./wind.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "./mist.png";
        }
        else {
            weathericon.src = "./clear.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

seacrhBtn.addEventListener("click", function () {
    checkweather(seacrhBox.value);
});
