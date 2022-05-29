/// Coding Challenges #1 + #2
// BMI (Body Mass Index)
/*
const markMass = 95;
const johnMass = 85;

const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
*/

const dolScore1 = 96;
const dolScore2 = 108;
const dolScore3 = 89;

const koalScore1 = 88;
const koalScore2 = 91;
const koalScore3 = 110;

const averageDol = (dolScore1 + dolScore2 + dolScore3) / 3;
const averageKoal = (koalScore1 + koalScore2 + koalScore3) / 3;

console.log(averageDol);
console.log(averageKoal);

if (averageDol > averageKoal && averageDol >= 100) {
  console.log(`Dolphins are Winner!!!`);
} else if (averageDol < averageKoal && averageKoal >= 100) {
  console.log(`Koalas are Winner!!!`);
} else if (
  averageDol === averageKoal &&
  averageDol > 100 &&
  averageKoal > 100
) {
  console.log(`Both win the trophy`);
} else {
  console.log(`no team wins the trophy`);
}

// Coding Challenge #4
/*
const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);*/
