/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Ebizo Jeremiah";
const d = new Date();
let CurrentYear = d.getFullYear();
const profilePicture = "images/image.jpg";
let profileImgOf = "Ebizo Jeremiah";
const foodItems = "Amala & Ewedu";


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const myImg = document.querySelector("img")


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
myImg.src = profilePicture;
myImg.alt = profileImgOf;
yearElement.textContent = CurrentYear;


/* Step 5 - Array */

const foodArray = ["Eba and Egusi soup", "rice", "beans", "beans", "garri", "salad", "fish"];
const secFoodArray = ["Eba and Egusi soup", "rice", "beans", "beans", "garri", "salad", "fish"];
secFoodArray.push(foodItems);

const trdFoodArray = ["Eba and Egusi soup", "rice", "beans", "beans", "garri", "salad", "fish"];
trdFoodArray.push(foodItems);
trdFoodArray.shift();

const frtFoodArray = ["Eba and Egusi soup", "rice", "beans", "beans", "garri", "salad", "fish"];
frtFoodArray.push(foodItems);
frtFoodArray.shift();
frtFoodArray.pop();


foodElement.innerHTML += `<br>${foodArray}`;
foodElement.innerHTML += `<br>${secFoodArray}`;
foodElement.innerHTML += `<br>${trdFoodArray}`;
foodElement.innerHTML += `<br>${frtFoodArray}`;









