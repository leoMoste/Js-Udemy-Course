"use strict";
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Finland", 6, "Helsinki"));
console.log(describeCountry("Germany", 80, "Berlin"));
console.log(describeCountry("Syria", 23, "Damascus"));
*/

/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let china = percentageOfWorld1(1441);
let Germany = percentageOfWorld1(82);
let USA = percentageOfWorld1(250);
console.log(china);
console.log(Germany);
console.log(USA);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

china = percentageOfWorld2(1441);
Germany = percentageOfWorld2(82);
USA = percentageOfWorld2(250);
console.log(china);
console.log(Germany);
console.log(USA);
*/
/*
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const china = percentageOfWorld3(1441);
const Germany = percentageOfWorld3(82);
const USA = percentageOfWorld3(250);
console.log(china);
console.log(Germany);
console.log(USA);
*/

// LECTURE: Functions Calling Other Functions
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const stetmant = `${country} has ${population} million people,
  which is about ${percentage}% of the world.`;

  console.log(stetmant);
}

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);
*/

// LECTURE: Introduction to Arrays
/*
const populations = [1441, 230, 55, 10];

console.log(populations);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
console.table(percentages);
*/
