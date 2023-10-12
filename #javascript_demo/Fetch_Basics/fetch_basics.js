
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const results = fetch(url);
console.log(results);

// const url2 = "https://pokeapi.co/api/v2/pokemon/ditto";
// const result = fetch(url2);
// doStuff(results);

// const urls = "https://pokeapi.co/api/v2/pokemon/ditto";
// async function getPokemon(urls) {
//   const results = await fetch(urls);
//   doStuff(results);
// }

// getPokemon(url);


const urls = "https://pokeapi.co/api/v2/pokemon/ditto";
let result = null;
async function getPokemon(urls) {
  const response = await fetch(urls);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  result = data;
  console.log("first: ", result);
}

getPokemon(urls);
console.log("second: ", result);