/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ebizo Jeremiah",
    photo: "images/image.jpg",
    favouriteFoods: [
        'Rice',
        'Beans',
        'Plaintain and Eggs',
        'Spaghetti',
        'Macaroni',
        'Eba and Egusi Soup',
        'Amala and Gbegiri',
    ],
    hobbies: [
        'Basketball',
        'Hiking',
        'Playing video game',
        'coding',
        'Scripture reading',
        'Watching movies'
    ],

    placesLived: [],


}




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Abuja, Nigeria',
        length: '2 years',
    },
    {
        place: 'Jigawa, Nigeria',
        length: '1 year',
    },
    {
        place: 'Benin City, Nigeria',
        length: '6 years',
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
const myPicture = document.querySelector("#photo");
myPicture.src = myProfile.photo;
myProfile.alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favouriteFoods.forEach((foods) => {
    let li = document.createElement("li");
    li.innerHTML = foods;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.innerHTML = hobbies;
    document.querySelector("#hobbies").append(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach((places) => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    
    dt.innerHTML = places.place;
    dd.innerHTML = places.length;

    document.querySelector("#places-lived").append(dt);
    document.querySelector("#places-lived").append(dd);


});


