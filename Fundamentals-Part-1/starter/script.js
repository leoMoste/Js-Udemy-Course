/*let jsOld = "amazing";
console.log(40 + 8 + 23 - 10);

// Variable name conventions

let firstName = "Mostafa";

console.log(firstName);

let PI = 3.14;

console.log(PI);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Mostafa");

javaScriptIsFun = "Yes!";

console.log(typeof javaScriptIsFun);

let year;

console.log(typeof year); //Console: undefined

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// we use the 'let' keyword to declare variables that can change later

/*
 // it´s reassigning a value to a variable, or also we say that we mutate the age variable
*/

/* 
we use 'const' keyword to declare variables that are not supposed to change at any point in the future 

*/
/*
const birthYear = 1991;
//birthYear = 2000;//ERROR: script.js:51 Uncaught TypeError: Assignment to constant variable

//const job; // isn´t leagel, you can´t use it => ERROR: Uncaught SyntaxError: Missing initializer in const declaration
//when using cont, we need basically an initial value
//Jonas: I always recommend to use const by default and let only when you are really sure that the variable need to change at some point in the future

// var is basically the old way of defining variables prior to ES6
// var = let
// we schoul never use var
var job = "programmer";
job = "teacher";
//console.log(job);

// Basic operators
// Math operators
const now = 2037;
const ageJones = now - 1991;
const ageSara = now - 2018;

console.log(ageJones, ageSara);
console.log(ageJones * 2, ageSara / 10, 2 ** 3); // 2**3 2 power to 3

const firstName = "Mosataf";
const lastName = "Hasan";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10;
x++;
x--;
console.log(x);

// Comparison operators

console.log(ageJones > ageSara); // >, <, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJones = now - 1991;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018); // JS has a well-defined order of operator precedence

const averageAge = (ageJones + ageSara) / 2;
console.log(ageJones, ageSara, averageAge);


const firstName = "Mosataf";
const job = "student";
const birthYear = 1998;
const year = 2025;

const mostafa =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(mostafa);

// Template Literals or string ``
const mostafaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(mostafaNew);

console.log(`Just a regulat string...`);

console.log("String with \n\
multiple \n\
lines");

//better way

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// Type Conversion
/*
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 12);
console.log(Number("Mosataf")); // Nan : not a number

console.log(String(23));

// Type Coercion
console.log("I am " + 23 + " Years old");
console.log("23" - "10" - 3); // in this case, strings are converted to numbers but with + covert all of them to String
*/

//Equality Operators : == vs. ===
/*const age = 18;
if (age === 18) {
  console.log("You just become an adult :D");
}
*/
// usually use === and not ==

/*
const inputY = "1991";
console.log(inputY);

const numInputY = Number(inputY);
console.log(numInputY);
*/

// getting a value from any webpage
/*
const favourite = Number(prompt("What's your fav num?"));
console.log(favourite);

if (favourite === 23) {
  console.log("COOL!!");
} else if (favourite === 7) {
  console.log("Amazing");
} else {
  console.log("Not cool or amazing");
}
*/

// Logical oprators
/*
const hasDrivesLicense = true;
const hasGoodVision = true;
*/
/*
const day = "sunday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
    break;
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

// the Statemnts and Expressions
/*

ex: 3 + 4 ,it si an Expression because this is gonna produce a value
or 1991 
or true , false  or !false
*/

// The Conditional (Ternary) Operator
/*
const age = 25;
age >= 18
  ? console.log("I like to drink Water")
  : console.log("I like to drink Milk");

const drink = age >= 18 ? "Water" : "Milk";
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = "water";
} else {
  drink2 = "Milk";
}

console.log(drink2);

// we can write like this, when we just need to take a quick decision , but we cannot put in {} a if statement block
console.log(`I like to drink ${age >= 18 ? "Water" : "Milk"}`);
*/
