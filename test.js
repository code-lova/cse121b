
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "dfb9af55f4b2734878203a9ee744d880";


var weatherList  = [];

let wwp = document.querySelector("#weda");
let wwp2 = document.querySelector("#wedda");

let theWether = document.querySelector("#display-weather");



const gui = (weatherList) => {
    weatherList.map((element) => {

        wwp.innerHTML = element.main.humidity;
        wwp2.innerHTML = element.name;

        theWether.textContent = `${Math.round(element.main.temp)}°c`;
        


    });
}

const display = async(location) => {
    
        const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
        if(response.ok){
            const data = await response.json();

            weatherList.push(data);
            gui(weatherList);
        }
    
    

   

}

// display().then(() => {
//     console.log(weatherList);
// });




const weatherInfo = document.getElementById('display-weather');
const locationInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener("click", () => {
    const location = locationInput.value;
    if(location){
        display(location)
    }else{
        weatherInfo.innerHTML = 'Please enter a location.';
    }
})


export { display, gui };

//display();