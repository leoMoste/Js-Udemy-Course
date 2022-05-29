"use strict";
// so with this, we activated strict mode for the entire script
// and this statement has to be the very first statement in the script.
// it helps us introduce the bugs into our code

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//const private = 534;
//const interface = 'Audio';
//const if = 23;
*/

//functions

// a Variable holds value , but the function can hold one or more complete lines od code
/*
function logger() {
  console.log("My Name is Jonas");
}

// calling / runnuíng // invoking function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}



const fruits = fruitProcessor(3, 4);
console.log(fruits);
//console.log(fruitProcessor(5, 7));

const appleOrangeJuice = fruitProcessor(5, 1);
console.log(appleOrangeJuice);
*/

//function expression
/*
function calcAge(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge(1998));

// function expression
// anonymous function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);
*/
/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow Function =>
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1998, "Ahmad"));
*/

/*
  Function
  -- Arrow Function
  -- Regular vs. Arrow [Param + No Param]
  -- Multiple Lines
  
  */

/*function print() {
  /return 10;
}*/

/* Anthor way to write the function 
  let print = function() {
  return 10;
} */

/*  Arrow function: this type of function do not take parameter  */
/*  remove the keyword function from the syntax and add => 
  --also we can delete the return and the parentheses too-- 
  this step just when we have one line in our function
*/
/*
let print = () => {
  return 10;
};

let printNew = () => 15;

// parentheses in this outside the param is optional, when we have one parameter
let newPrintFunc = (num) => num + 10;

let twoParams = (num1, num2) => num1 + num2;

console.log(print());
console.log(printNew());
console.log(newPrintFunc(10));
console.log(twoParams(10, 40));

const calcAge99 = (birthYear) => 2037 - birthYear;

console.log(calcAge99(1998));

const retirementLeft = (birthYear, firstName) => {
  const ageLeft = 2037 - birthYear;
  const retirementIn = 65 - ageLeft;
  return `${firstName} retires in ${retirementIn} years`;
};

console.log(retirementLeft(1998, "Mustafa"));
console.log(retirementLeft(1988, "Bob"));
*/
/*

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of  apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//Arrays are such a data structure
/*
const friends = ["Micheal", "Steven", "Peter"];

console.log(friends);
//nice console tip
console.table(friends);

// anthor way to create an Array
const y = new Array(1991, 1984, 2008, 2020);
console.table(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

friends[2] = "Jay";

console.log(friends);

// friends = ['Bob', 'Alice']; that is wrong!!

const firstName = "Mostafa";
const Mostafa = [firstName, "Hasan", 2022 - 1998, "student", friends];

console.log(Mostafa);
console.table(Mostafa);

// Exercise

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1967, 2002, 1998, 1977];

/*
// it'S not gonna work
calcAge(years);
*/
/*
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

console.log(ages);
console.table(ages);
*/
/*
const friends = ["Micheal", "Steven", "Peter"];

const newLength = friends.push("Jay");
console.table(friends);
console.log(newLength); // the push method return a length of the array

friends.unshift("John");

friends.pop();
const popped = friends.pop(); // this method , it will remove the last the index of the Array, and we don´t have to pass any parameter
// the pop method return just the removed element
console.log(popped); // we don't alwayes do that because it's not that useful

friends.shift(); // don't need any argeument
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // -1

console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
*/
/*
const mostafaArray = [
  "Leo",
  "Mostafa",
  "Student",
  2022 - 1998,
  ["team", "Root", "We"],
];
*/
/*
const mosatfa = {
  firstName: "Leo",
  lastName: "Mostafa",
  job: "Student",
  age: 2022 - 1998,
  friends: ["Hussin", "Root", "We"],
};

console.log(mosatfa);

console.log(mosatfa.lastName);
console.log(mosatfa["lastName"]);

const nameKey = "Name";
console.log(mosatfa["first" + nameKey]);

const inters = prompt(
  "What do you want to know about Mostafa? Chosse between firstName, lastName, age, job and friends"
);

if (mosatfa[inters]) {
  console.log(mosatfa[inters]);
} else {
  console.log(
    "Wrong request! What do you want to know about Mostafa? Chosse between firstName, lastName, age, job and friends"
  );
}

mosatfa.location = "Germany";
mosatfa["gmail"] = "mostaf@gmail.com";

console.log(mosatfa);

console.log(
  `${mosatfa.lastName} has ${mosatfa.friends.length} friends, and his best friend is called ${mosatfa.friends[0]}`);
*/

/*
const mosatfa = {
  firstName: "Leo",
  lastName: "Mostafa",
  //string value
  job: "Student",
  birthday: 1998,
  // array value
  friends: ["Hussin", "Root", "We"],
  hasDrivesLicense: false,
  //function value
  //calcAge: function (birthday) {
  //  return 2022 - birthday;
  //},

  //this keywors: is basically = object on which the method is called
  //calcAge: function () {
  // because the mostafa object is the one who is calling this method
  //so therefore, in the method this points to "mostafa" now and the birthday is a one of the values
  // this here = mostafa,, mostafa.birthday = this.birthday
  //console.log(this);
  //return 2022 - this.birthday;
  //},

  calcAge: function () {
    this.age = 2022 - this.birthday;
    return this.age;
  },
  /* so is wrong 
  function calcAge (birthday) {
    return 2022 - birthday;
  }
   */
/*
  getSummary: function () {
    return `${this.lastName} is ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDrivesLicense ? "a" : "not"} driver's license`;
  },
};

//first we have to call the function like this in buttom
console.log(mosatfa.calcAge());
// and then use the values inside it
console.log(mosatfa.age);
console.log(mosatfa.age);
console.log(mosatfa.age);

// Challenge
// "Mostafa is a 24-Years old job. and he has a/not driver`s License "

console.log(mosatfa.getSummary());
*/

//#Array

//use let in loop because the increament
// for loop keeps running while condition is TRUE
/*
for (let i = 1; i <= 10; i++) {
  console.log("Lifting weights repetition  " + i);
}*/
/*
const mosatfa = [
  "Leo",
  "Mostafa",
  "Student",
  2022 - 1998,
  ["Hussin", "Root", "We"],
  true,
];

const types = [];

for (let i = 0; i < mosatfa.length; i++) {
  // Reading from mostafa array
  console.log(mosatfa[i], typeof mosatfa[i]);

  //Filling types  array
  //types[i] = typeof mosatfa[i];
  types.push(typeof mosatfa[i]);
}

console.log(types);
*/
const years = [1991, 2007, 1969, 2020];
const calcArr = [];
const ages = [];
let addYears = 0;
let age;
for (let i = 0; i < years.length; i++) {
  addYears = addYears + years[i];

  ages.push(2037 - years[i]);
}
//calcArr.push(addYears);

//console.log(ages);
//console.log(calcArr);

// continue and break
/*
const mosatfa = [
  "Leo",
  "Mostafa",
  "Student",
  2022 - 1998,
  ["Hussin", "Root", "We"],
  true,
];
*/
/*
console.log("----Only Strings-------");
for (let i = 0; i < mosatfa.length; i++) {
  if (typeof mosatfa[i] !== "string") continue;
  console.log(mosatfa[i], typeof mosatfa[i]);
}

console.log("----Break with Strings-------");
for (let i = 0; i < mosatfa.length; i++) {
  if (typeof mosatfa[i] === "number") break;
  console.log(mosatfa[i], typeof mosatfa[i]);
}*/

const mosatfa = [
  "Leo",
  "Mostafa",
  "Student",
  2022 - 1998,
  ["Hussin", "Root", "We"],
];

// Looping backwards

// here i = 5 is the number of index - 1 = 4, because the index start with index 0
/*for (let i = mosatfa.length - 1; i >= 0; i--) {
  console.log(i, mosatfa[i], typeof mosatfa[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`-----Starting exercise ${exercise} with ${rep} times`);
  }
}
*/

/*for (let rep = 1; rep <= 5; rep++) {
  console.log(`-----Starting exercise ${exercise} with ${rep} times`);
}*/

/*
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}
*/
/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
