/**
 * async function for dosplaying weather 
 * data accoring to user input
 * 
 * 
 */


let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "dfb9af55f4b2734878203a9ee744d880";

const weatherDisplay = document.querySelector("#weathers-display");
let theWeatherImage = "images/rain.png";
let theWeatherImageName = "weather-img";

let tempValue = "72°c";
let cityValue = "New York";

const errorsValue = document.querySelector("#errors");



const weatherUI = () => {
    
    const weatherImage = document.createElement("img");
    weatherImage.className = "weather-icon";
    weatherImage.src = theWeatherImage;
    weatherImage.alt = theWeatherImageName;


    const temp = document.createElement("h1");
    temp.innerHTML = tempValue;
    temp.className = "temp";

    const city = document.createElement("h2");
    city.innerHTML = cityValue;
    city.className = "city";

    const detailElement = document.createElement("div");
    detailElement.className = "details";


        const colElement1 = document.createElement("div");
        colElement1.className = "col";

        const colImage1 = document.createElement("img");
        colImage1.src = "images/humidity.png";
        colImage1.alt = "humidity";

        const emptyDivElement1  = document.createElement("div");

        const pElement1 = document.createElement("p");
        pElement1.textContent = "50%";
        pElement1.className = "humidity";


        const pElement2 = document.createElement("p");
        pElement2.textContent = "Humidity";

        emptyDivElement1.append(pElement1, pElement2);

        colElement1.append(colImage1, emptyDivElement1)




        const colElement2 = document.createElement("div");
        colElement2.className = "col";

        const colImage2 = document.createElement("img");
        colImage2.src = "images/wind.png";
        colImage2.alt = "wind";

        const emptyDivElement2  = document.createElement("div");

        const pElement3 = document.createElement("p");
        pElement3.textContent = "15k/h";
        pElement3.className = "wind";

        const pElement4 = document.createElement("p");
        pElement4.textContent = "Wind Speed";

        emptyDivElement2.append(pElement3, pElement4);

        colElement2.append(colImage2, emptyDivElement2)




    detailElement.append(colElement1, colElement2);



    weatherDisplay.append(weatherImage, temp, city);
    weatherDisplay.appendChild(detailElement);
}




const displayWeather = async(location) => {
    try{

        const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
        if(response.ok){
            const data = await response.json();
            console.log(data);

            document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;

            const weatherIcon = document.querySelector(".weather-icon");

            if(data.weather[0].main === "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main === "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main === "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "images/mist.png";
            }
            else if(data.weather[0].main === "Snow"){
                weatherIcon.src = "images/snow.png";
            }

            document.querySelector("#weathers-display").style.display = "block";
            errorsValue.innerHTML = "";

        }else{
            document.querySelector("#weathers-display").style.display = "none";
            throw new Error("Location not found. Please try again.")
        }

    }catch(error){
        throw error;
        
    }


}

// const errorValue = document.querySelector("#errors");


// const showError = (message) => {
//     errorValue.textContent = message;
//     clearError();
// }

// const clearError = () => {
//     if(errorValue){
//         errorValue.remove();
//     }
// }



export { displayWeather, weatherUI };