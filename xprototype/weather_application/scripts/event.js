/**
 * event click module
 */

import { displayWeather } from "./weather.js"

const locationInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const errorValue = document.querySelector("#errors");



const eventMod = () => {

    searchButton.addEventListener("click", () => {
        const location = locationInput.value;
        if(location){
            
            displayWeather(location)
            
            .catch(error => {
                errorValue.innerHTML = `${error}`;
            });
        }
        else{
            errorValue.innerHTML = "Please enter a Location";
        }
    });
    
}


export {eventMod};