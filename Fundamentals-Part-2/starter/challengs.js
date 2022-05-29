"use strict";

// Coding challenge #1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolAverage = calcAverage(85, 54, 41);

const koalAverage = calcAverage(23, 34, 27);

const Winners = function (dolAvg, koalAvg) {
  if (dolAvg > koalAvg * 2) {
    return `Dolphins win (${dolAvg} vs. ${koalAvg})`;
  } else if (koalAvg > dolAvg * 2) {
    return `Koalas win (${koalAvg} vs. ${dolAvg})`;
  } else {
    return `Draw!!!!`;
  }
};

console.log(Winners(dolAverage, koalAverage));

*/
/*
let tip;
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
};

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

/*
let tip;
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
};

/*
short way:
retutn calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
*/
/*
console.log(calcTip(250));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/

/* test */
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI (${
        Math.round(mark.bmi * 100) / 100
      }) is heigher than ${john.fullName}'s BMI (${
        Math.round(john.bmi * 100) / 100
      })`
    : `${john.fullName}'s BMI (${
        Math.round(john.bmi * 100) / 100
      }) is heigher than ${mark.fullName}'s BMI (${
        Math.round(mark.bmi * 100) / 100
      })`
);

*/
//Challenge #3
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
console.log(Math.round(mark.bmi * 100) / 100);

john.calcBMI();
console.log(Math.round(john.bmi * 100) / 100);

console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI (${
        Math.round(mark.bmi * 100) / 100
      }) is higher than ${john.fullName}'s (${
        Math.round(john.bmi * 100) / 100
      })!`
    : `${john.fullName}'s BMI (${
        Math.round(john.bmi * 100) / 100
      }) is higher than ${mark.fullName}'s (${
        Math.round(mark.bmi * 100) / 100
      })!`
);
*/

//Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const total = [];

let tip;
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
};

for (let i = 0; i <= bills.length - 1; i++) {
  //const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
  const tip = calcTip(bills[i]);
  tips.push(tip);

  //const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  //let tot = bills[i] + tips[i];
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tips));
