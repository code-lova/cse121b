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

  scores[scores.length - 1] 

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
  console.log(year);

