/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = parseInt(document.querySelector("#add1").value);
    let addNumber2 = parseInt(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers)


/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2){
    return number1 - number2;
}

const substractNumbers = function (){
    let substract1 = Number(document.querySelector("#subtract1").value);
    let substract2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(substract1, substract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", substractNumbers);



/* Arrow Function - Multiply Numbers */

const multiplyNumbers = () => document.querySelector("#product").value = Number(document.querySelector("#factor1").value) * Number(document.querySelector("#factor2").value);

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divideNumbers = () => document.querySelector("#quotient").value = Number(document.querySelector("#dividend").value) / Number(document.querySelector("#divisor").value);

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers); 

/* Decision Structure */
const d = new Date();
let date = d.getDate();
let year = d.getFullYear();

const getFullYears = year;
document.querySelector("#year").innerHTML = getFullYears;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]

document.querySelector("#array").innerHTML = numbersArray;


/* Output Odds Only Array */


const oddNumber = numbersArray.filter((array) => array % 2 === 1);

document.querySelector("#odds").innerHTML = oddNumber;

/* Output Evens Only Array */

const evenNumber = numbersArray.filter(array => array % 2 === 0);
document.querySelector("#evens").innerHTML = evenNumber;

/* Output Sum of Org. Array */
const initialValue = 0;
const sumOfArray = numbersArray.reduce((sum, array) => sum + array, initialValue);
document.querySelector("#sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */

const mapArryMultiplyByTwo = numbersArray.map((arrayNumbers) => arrayNumbers * 2); 
document.querySelector("#multiplied").innerHTML = mapArryMultiplyByTwo;


/* Output Sum of Multiplied by 2 Array */

const sumOfMultiply = mapArryMultiplyByTwo.reduce((sumArray, array) => sumArray + array, initialValue);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiply;


