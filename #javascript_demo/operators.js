var num1 = 5;
var num2 = 10;
let sum = num1 * num2;


var num1 = 5;
var num2 = 10;
let sum2 = num2 - num1;

let first = "Hello";
let second = "world";
const complexString = `${first} ${second}`






console.log(sum)
console.log(sum2)
console.log(complexString)

var x = 5;
if (x){
    console.log(true)
}

var y = 6;
const ans = y += 3;
console.log(ans)

var x = 4;
var y = 2;

if (x===y){
    console.log(true)
}else{
    console.log("Not same value")
}



var x = 4;
var y = 2;

if (x < y){
    console.log(true)
}else{
    console.log("X is greater than")
}



var x = 4;
var y = 2;

if (x!=y){
    console.log("they not equal")
}else{
    console.log("They are equal")
}


var x = 4;
var y = 2;

if (x < 10 && x > 0){
    console.log(true)
}else{
    console.log("Not LESS THAN 10 AND NOT GREATER THAN 0")
}


let scores = [100, 72, 83, 94, 88, 87];
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

scores.forEach(function(score) {
    console.log(score);
});

let mini=  scores[scores.length - 1] 
console.log(mini);

const homeWard = "Adolor 2";
const title = ["Home Ward"]
const ward = `<strong>${title[0]}</strong>: ${homeWard}`;
console.log(ward);

function createOAuthString(host, clientId, scope) {
    return host + '/login/oauth/authorize?client_id=' + clientId + '&scope=' + scope
  }
  
  createOAuthString('https://github.com', 'abc123', 'repo,user')

  const d = new Date();
  let year = d.getFullYear();
  let day = d.getDate()
  let month = d.getMonth()
 
  const completeDate = `${day}/${month}/${year}`;
  console.log(completeDate);


  const age = 26;
  const beverage = age >= 21 ? "Beer" : "Juice";
  console.log(beverage); // "Beer"


  
let temples = ["Rome", "Salt Lake", "Nauvoo"];
let listItems = "";
for (const temple of temples) {
  listItems += `<li>${temple}</li>`;
}
//document.querySelector("ul").innerHTML = listItems;
console.log(listItems);

//different was of using functions

//functions declearation
function fullName(firstname, lastname){
    return `${firstname} ${lastname}`; 
}


//function using function expression
const fullNames = function (first, last){
    return `${first} ${last}`;  
}

//using arrow function
const firstname = (first, last) => `${first} ${last}`; 


//document.querySelector("$fullname").innerHTML = fullName(firstname, lastname);



let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

//using the filter() function 
const namesB = names.filter((names) => names[0] === "B");
console.log(namesB);

//using the map() function 
const namesLength = names.map((name) => name.length)
console.log(namesLength);

//using the reduce() function 
let initiallength = 0;
const avgStringLength = names.reduce((total, names) => total + names.length, initiallength) / names.length;

console.log(avgStringLength);

let scoress = [56, 78, 95, 77, 65, 86];
let target = scoress.indexOf(87);
console.log(target);


const points = [100,88,94,78,84,69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = 'Excellent';
  } else if (pointTotal >= 70) {
    status = 'Complete';
  }
  return status;
}

const statusReport = points.map(convertPointsToStatus);
console.log(statusReport);


