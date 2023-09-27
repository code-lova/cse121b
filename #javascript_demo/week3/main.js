//script 
const select  = document.querySelector("#weather");
const display = document.querySelector("h4");

document.querySelector("h4").style.color = "tomato";


select.addEventListener("change", setWeather);

function setWeather(){
    const choice  = select.value;

    if (choice === "sunny"){
        display.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    }else if(choice === "rainy"){
        display.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    }else if(choice === "snowing"){
        display.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    }else if(choice === "overcast"){
        display.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    }else{
        display.textContent = "";
    }

}


