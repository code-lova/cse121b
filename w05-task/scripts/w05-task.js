/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
var templeList = [];




/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach((temples) => {

        const templeCardContainer = document.createElement("div");
        templeCardContainer.className = "temple-card-container";

        const templeCard = document.createElement("div");
        templeCard.className = "temple-card";

        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temples.templeName;

        const imgElement = document.createElement("img");
        const newWidth = "300px";
        const newHeight = "200px";
        const newImgShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";

        imgElement.src = temples.imageUrl;
        imgElement.alt = temples.location;

        imgElement.style.width = newWidth;
        imgElement.style.height = newHeight;
        imgElement.style.boxShadow = newImgShadow;
    
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        
    
        templeCard.appendChild(articleElement);
        templeCardContainer.appendChild(templeCard);
        templesElement.appendChild(templeCardContainer);
    })
}








/* async getTemples Function using fetch()*/

const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(response.ok){
        const returnData = await response.json();
        templeList.push(...returnData); // data is an array of temple objects
        displayTemples(templeList); // Call displayTemples and pass templeList as an argument
    }
}

// getTemples().then(() => {
//     console.log(templeList)
// })


/* reset Function */

const reset = function(){
    const templesElement = document.querySelector("#temples");
    while(templesElement.firstChild){
        templesElement.removeChild(templesElement.firstChild);
    }
}


/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;

    switch(filter) {
        case "utah":
            const UtahTemples = temples.filter((temples) => temples.location.includes("Utah"));
            displayTemples(UtahTemples);
            break;

        case "notutah":
            const nonUtahTemples = temples.filter((temples) => !temples.location.includes("Utah"));
            displayTemples(nonUtahTemples);
            break;

        case "older":
            const olderTemples = temples.filter(temples => new Date(temples.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        
        case "all":
            displayTemples(temples);
            break;
        
        default:
            // Handle the default case (if the value doesn't match any of the specified cases)
            break;
    }
}

const selectElementId = document.querySelector("#sortBy");

selectElementId.addEventListener("change", () =>  {
    const filter = selectElementId.value;
    sortBy(templeList, filter);
});



getTemples();

/* Event Listener */
