//LECTURE: Values and Variables
/*
let country = "Syria";
//let continent = "Aisa";
let population = 23000000;

//console.log(country);
//console.log(continent);
//console.log(population);

// LECTURE: Data Types

let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);
*/

// LECTURE: let, const and var
/*
let language;
language = "Arabic";
const isIsland = false;

language = "Homsy";
isIsland = True; //Uncaught ReferenceError: True is not defined
*/

/*
// LECTURE: Basic Operators

let population = 23000000;
const halfPeople = population / 2;

population += 1;

const Finland = 6000000;

const description1 = console.log(population > Finland);
const coPopulation = 33000000;
console.log(coPopulation < population);

console.log(
  "Portugal is in Europe, and its 11 million people speak portuguese"
);



let country = "Syria";
let population = 130;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}
*/

// LECTURE: Type Conversion and Coercion
/*
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
*/

// Truthy and Falsy values

// 5 falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // True
console.log(Boolean({})); // True

const money = 100;

if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job!`);
}

let height;
if (height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`Height is UNdefined`);
}
*/

// LECTURE: Equality Operators: == vs. ===
/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log(`More than 1 border in case ${numNeighbours} is greater than 1 `);
} else {
  console.log(`No borders`);
}*/

// LECTURE: The Conditional (Ternary) Operator
/*
const country = "Syria";
let population = 23;

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
*/
