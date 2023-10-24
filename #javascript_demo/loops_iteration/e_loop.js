/**
 * this is examples of loops
 */

//for loop
for(let m = 0; m < 5; m++){
    console.log("move east one step")
}

const coding = ["java", "javascript", "python", "C++"];

for (let j = 0; j < coding.length; j++){
    console.log(coding[j]);
}

//inner for loop
for(let m = 0; m <= 5; m++){
    console.log(m);

    for(let g = 1; g <= 3; g++){
        console.log(`inner loop ${g}`);
    }
}

//do while loop 
let i = 0;
do {
  i++;
  console.log(i);
} while (i < 5);


console.log()

//While loop..
let n = 0;
let x = 0;
while (n < 5) {
  n++;
  console.log(n);
  x = x + n;
  console.log(x);
}

console.log();

let a = 0;
while (a <= 10){
    console.log(a);
    a++;
}

console.log();

//the break and continue statement
for(let m = 0; m <= 6; m++){

    if(m === 3){
        break;
    }
    console.log(m);

}

console.log();

for(let m = 0; m <= 6; m++){

    if(m === 3){
        continue;
    }
    console.log(m);
}

console.log()
/**
 * For in and For of loops
 * the for of loop is majorly used for array.
 * while for in loop is used for objects
 */
//array used with for of
const socials = ["Facebook", "Instagram", "Twitter", "Youtube", "Google", "Delaclique"]

for(let s of socials){
    console.log(s);
}

console.log();

const social = {
    yt: "Youtube",
    Fb: "Facebook",
    Ig: "Instagram",
    Tw: "Twitter",
    GG: "Google",
    Dq: "delaclique"
}

for(let obj in social){
    console.log(`Keys: ${obj} - Values: ${social[obj]}`)
}


console.log();

/**
 * using label statement in loops
 */

outerLabel:
for(let k = 0; k <= 5; k++){

    if(k === 3){
        break outerLabel;
    }

    console.log(k);
}

console.log();

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("Value below 30 in the array using (for of loop)")
for(let belowVlaue of studentReport){
    if(belowVlaue <= LIMIT){
        console.log(belowVlaue);
    }
}

console.log()


console.log("Value below 30 in the array using (for in loop)")
for(let value in studentReport){
    if(studentReport[value] <= LIMIT){
        console.log(studentReport[value])
    }
}

console.log()


let val = 0;
console.log("Value below 30 in the array using (while loop)")
while (val < studentReport.length){
   if(studentReport[val] <= LIMIT){
    console.log(studentReport[val])
   }
   val++
}

console.log()



console.log("Value below 30 in the array using (forEach loop)")
const result = studentReport.forEach((value) => {
   if(value < LIMIT){
    console.log(value)
   }
    
}) 



console.log()


console.log("Value below 30 in the array using (for loop)")
for(let below = 0; below < studentReport.length; below++){
    if(studentReport[below] <= LIMIT){
        console.log(studentReport[below]);
    }
}



console.log()
