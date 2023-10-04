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






//There is also a foreach method of array

const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));


let numberArrayDo = [1,2,3,45,53,53,7,73,2]
numberArrayDo.forEach(theNumber => {
    console.log(theNumber);
});

  


const logArrayElements = (element, index /*, array */) => {
    console.log(`a[${index}] = ${element}`);
  };
  
  // Notice that index 2 is skipped, since there is no item at
  // that position in the array.
  [2, 5, , 9].forEach(logArrayElements);
  // output Logs:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9


  //Call back with array methods
    /** 
    1.forEach()
    2.map()
    3.find()
    4.filter()
    5.every()
    6.some()
    7.sort()
    8.reduce() **/


    const nums = [1,2,3,4,5];
    nums.forEach(function(num) {
        console.log(num);
    });

    //example 2
    const employees = [
        {
            id: 101,
            name: 'Alex',
            sal: 10000
        },
        {
            id: 102,
            name: 'Clark',
            sal: 23000
        },
        {
            id: 103,
            name: 'John',
            sal: 22000
        },
        {
            id: 104,
            name: 'Tony',
            sal: 20000
        }
    ]

    //But This is a callback function
    employees.forEach(function(employee){
        console.log(`${employee.name} - ${employee.sal}`);
    });

    //same output using arrow function method with foreach method.
    employees.forEach(emp => console.log(`name: ${emp.name} - ${emp.sal}`));



    //But This is a callback function in map 
    const theEmployees = employees.map(function(emp){
        return emp.sal
    });
    console.log(theEmployees);

    //using the arrow function with map
    const myEmployes = employees.map(emp => emp.name);
    console.log(myEmployes);


    const words = ['lol','brb','btw','lmk','g2g'];
    const abbreviations = words.map(function(word) {
          return word.toUpperCase().split('').join('.');
    });
    console.log(abbreviations); // ['L.O.L', 'B.R.B', 'B.T.W', 'L.M.K', 'G.2.G']







    //Using the find function
    const studentNames = ['Jimmy Shah','Ram Sharma','Vikram Gupta','Shyam Sharma'];

    const finding = studentNames.find((namez) => namez.includes("Ram"));
    console.log(finding);

    const findEmployees = employees.find((emp) => emp.sal === 20000);
    console.log(findEmployees);


    

    //using filter function
    let filtered = studentNames.filter(namez => namez.includes("Ram"));
    console.log(filtered);

    const filteredDetails = employees.filter(emp => emp.sal >= 20000);
    console.log(filteredDetails);


    //Using every function
    //it returns true only if the item(s) in the array passes the given function.
    const theWords = ['kia','karen','king','korean'];

    const usingEvery = theWords.every(namez => namez[0] === "k");
    console.log(usingEvery);

    const usingE = theWords.every(namez => namez[namez.length-1] === "g");
    console.log(usingE);


    //using the some function 
    // it returns true if any of the item(s) in the array passes the given function.
    const theWordz = ['kia','karen','king','korean'];

    const usingSome = theWordz.some(namez => namez[0] === "k");
    console.log(usingSome);

    const usingSom = theWordz.some(namez => namez[namez.length-1] === "g");
    console.log(usingSom);


    //The sort function 
    //Natural order sorting 
    const numbs = [1,20,10,22,30,44,100,11];
    console.log(numbs.sort()); // [1, 10, 100, 11, 20, 22, 30, 44]

    //Example — 2: Ascending order sorting
    const result = numbs.sort((a, b) => a - b);
    console.log(result);




    //The reduce function 
    //Example — 1: Sum of array elements
    const digits = [1,2,3,4,5];
    const initValue = 0;
    const reduceAnswer = digits.reduce((sum, numx) => sum + numx, initValue);
    console.log(`the reduce answer is: ${reduceAnswer}`);

    //Example — 2: Find maximum using reducer() metho
    const maxList = [44,2,66,45,17];
    let answer = maxList.reduce((max, item) => Math.max(max, item));
    console.log(`The maximum number in the list is: ${answer}`);


    //Example — 3: Tallying Votes
    const votes = ['y','y','n','y','n','n','n'];
    const resultz = votes.reduce((tally,vote) => {
        tally[vote] = ( tally[vote] || 0 ) + 1 
        return tally;
    },{}); // Initial value: {}
    console.log(resultz);


    //defining function
    function calculate(a, b, displayResult){
        return displayResult = a + b;
    }

    calculate(2, 3, displayResult);



  setTimeout(() => {
    console.log("this is the first message");
  }, 5000);
  setTimeout(() => {
    console.log("this is the second message");
  }, 3000);
  setTimeout(() => {
    console.log("this is the third message");
  }, 1000);

