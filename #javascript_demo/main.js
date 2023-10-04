var adult = true;

if (adult){
    var myName = "bob"
    let age = 30
}

let names = ["Bob", "Sue", "Jorge", "Svetlana"]
names[2] = "George"
console.log(names)
names.push("Grace")
console.log(names)
names.pop()
console.log(names)

const fruits =[]
fruits.push("Orange", "mango", "Grape", "Guava")

const hello = "Hello..!!"
const world = "World"
const complexString = `${hello} ${world}` 

let num1 = 100;
let num2 = '10';
let sum = num1 + parseInt(num2);
console.log(sum)


console.log(complexString)

console.log(fruits.length)
console.log(fruits)
console.log(fruits[3])
console.log(Object.keys(fruits))


console.log(myName)





var mytext = "i am a string";
let newText = mytext.replace("string", "lover")
console.log(mytext);
console.log(newText);

const textSentence = ["i", "am", "going","to","school"];

const mapTheText = Object.keys(textSentence);

const newSentence = textSentence.join(" ");
console.log(textSentence);
console.log(newSentence);
console.log(mapTheText);





const myNumber = Math.random();
console.log(myNumber);
