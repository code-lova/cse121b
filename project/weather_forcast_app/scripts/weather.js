/**
 * async function for dosplaying weather 
 * data accoring to user input
 * 
 * 
 */

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "dfb9af55f4b2734878203a9ee744d880";



//const errorsValue = document.querySelector("#errors");

var weatherList  = [];

const weatherIcon = document.querySelector(".weather-icon");

const temperature = document.querySelector(".temp");

const city = document.querySelector(".city");

const humidity = document.querySelector(".humidity");

const wind = document.querySelector(".wind");

const desc = document.querySelector(".description");

const feels = document.querySelector(".feels");

const gifImage = document.querySelector("#gifimage");





//Html template
const weatherGui = (weatherList) => {
    weatherList.map((element) => {



        temperature.innerHTML = `${Math.round(element.main.temp)}°c`;

        city.innerHTML = element.name;

        desc.innerHTML = element.weather[0].description;

        feels.innerHTML = `Feels Like: ${Math.round(element.main.feels_like)}°c`

        humidity.innerHTML = `${element.main.humidity}%`;

        wind.innerHTML = `${element.wind.speed}km/h`;
        

        if(element.weather[0].main === "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(element.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(element.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(element.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(element.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(element.weather[0].main === "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        
        document.querySelector("#weathers-display").style.display = "block";
        gifImage.style.display = "none";
        document.querySelector("#errors").style.display = "none";


    });
    

}



const getWeatherData = async(location) => {
    
    const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
    if(response.ok){
        const data = await response.json();

        weatherList.push(data);
        weatherGui(weatherList);

    }    
}

// getWeatherData().then(() => {
//     console.log(weatherList);
// })




const errorInfo = document.getElementById('errors');
const locationInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if(location){
        getWeatherData(location)
       
    }else{
        errorInfo.innerHTML = 'Please enter a location.';
    }
})


export { weatherGui, getWeatherData }