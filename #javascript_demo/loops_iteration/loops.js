// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").append(favoriteFood1,favoriteFood2,favoriteFood3,favoriteFood4);


  //now lets us .foreach loops in shorting our code.
  let foodElement = document.querySelector("#favourite-food2");

  function AppendFavourtiteToList(foods){
    let favouriteFood = document.createElement("li");
    favouriteFood.textContent = foods;
    foodElement.appendChild(favouriteFood);
  }
  myInfo.favoriteFoods.forEach(AppendFavourtiteToList);



  
  //now lets us use .map method to shorten our code
  let foodElements = document.querySelector("#favourite-food3");
  const foodLists = myInfo.favoriteFoods.map((foods) => `<li>${foods}</li>`);
  foodElements.innerHTML = foodLists.join("");




//another method is to create a function that is also resuable.(return a result)
let foodElement4 = document.querySelector("#favourite-food4");
const placeLived = document.querySelector("#places-lived");

//creating HTML template callback and list function
function generteHTMLTemplate(list, callBackTemplate){
    const html = list.map(callBackTemplate);
    return html.join("");
}

  
function foodString(food){
    return `<li>${food}</li>`;
}

function placeString(place){
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`
}

foodElement4.innerHTML = generteHTMLTemplate(myInfo.favoriteFoods, foodString);
placeLived.innerHTML = generteHTMLTemplate(myInfo.placesLived, placeString);