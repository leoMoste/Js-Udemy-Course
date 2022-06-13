'use strict';

/****************/
/*scooping*/
/****************/

function calcAge(birthday) {
  const age = 2022 - birthday;
  function printAge() {
    const output = ` ${firstName}, You are ${age}, born in ${birthday}`;
    console.log(output);

    if (birthday >= 1981 && birthday <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName} `;
      console.log(str);
      var millenial = false;
      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    } else {
      const Newstr = `Oh, and you're a Gen Z, ${firstName} `;
      console.log(Newstr);
      // function scoope, it ignores the blocak scoope
    }
    //console.log(str); //out of the right scoope
    console.log(millenial);
  }

  printAge();
  //console.log(firstName);
  return age;
}

const firstName = 'Mostafa';
//calcAge(1991);

/****************/
/*TDZ*/
/****************/

//Variable
//console.log(me);
//console.log(job); //job stay in TDZ ; time died zone
//console.log(year); // year stay in TDZ ; time died zone

var me = 'Leo';
let job = 'Nothing';
const year = 1999;

//Function
console.log(addDecl(40, 60));

function addDecl(a, b) {
  //Work before decleration
  return a + b;
}

//console.log(addEXper(60, 60)); // ER: Cannot access 'addEXper' before initialization

const addEXper = function addExper(a, b) {
  return a + b;
};

//console.log(addArrow(60, 60)); // ER: Cannot access 'addEXper' before initialization

var addArrow = (a, b) => a + b;

//Example:

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

//don't use var to define the variables
// use const all the time
// and let if you need to change the variable later

/*  Advice:
//Also in order to write clean code,
//you should declare your variables
//at the top of each scope.
*/

/****************/
/*The THIS Keyword*/
/****************/
/*
console.log(this); // Window

const calcAge2 = function (birthday) {
  console.log(2037 - birthday);
  console.log(this); // undefined
};

calcAge2(1988);

const calcAgeArrow = birthday => {
  console.log(2037 - birthday);
  console.log(this); // Window: here will take a refernce the this in global scope
};

calcAgeArrow(1998);

const mostafa = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year); // same mostafa.year
  },
};

mostafa.calcAge();

const nadal = {
  year: 1992,
};

nadal.calcAge = mostafa.calcAge;
nadal.calcAge();

const f = mostafa.calcAge;
console.log(f);

*/

//var firstName = 'Nadal';

const mostafa = {
  firstName: 'Mostafa',
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year); // same mostafa.year

    //solution 1
    //normal Functions dosen't using "this" word from his parent scoop
    /* const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
    };*/

    //solution 2 : using arrow Functions
    //arrow Functions using "this" word from his parent scoop = this here is "mostafa"
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }, // because the this keyword is window
};

// you should not never ever use an Arrow Function as a Method

mostafa.greet();
mostafa.calcAge();

const addEx = function (a, b) {
  console.log(arguments);
  return a + b;
};
addEx(2, 5, 5, 7, 3);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

//addArrow(2, 5, 3, 4); //Uncaught ReferenceError: arguments is not defined at addArrow

/*******
 * Primitives vs. Objects
 *******/

let age = 30;
let oldAge = age;
age = 31;
/*
console.log(age);
console.log(oldAge);
*/

const hasan = {
  name: 'Mosat',
  age: 25,
};
/*
console.log(hasan.age);
const friend = hasan;
friend.age = 15;
console.log(friend.age);
console.log(hasan.age);

*/
/**
 * The Primitive Values store in Call Stack memory
 *
 * The Object Values store in Heap memory
 */

/**
 * when we create a variable the identifier (const age) equal to Address
 * in call stack (0001) and to the value that signed to it
 *
 * but when we create a object or any other type of Reference value,
 * it save in "Heap memory" and it save not the name of it , but
 * the address of it **ACHTUNG:: the identifier of Reference save in calls stac **
 * and hen Reference to memory address in HEAP
 *
 * THE REASEN: the OBJECT is to large to store in Call Stack, instad it store in the heap
 * and refernce it into call stack
 */

//Primitive types
let lastName = 'Hasan';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//Refernce types
const hasanFakiri = {
  name: 'Mosatfa',
  firstName: 'Kamal',
  age: 26,
};

const marriedhasan = hasanFakiri;
marriedhasan.firstName = 'Ramiz';

console.log(
  'Before:',
  hasanFakiri.firstName,
  '\nafter Change:',
  marriedhasan.firstName
);

// Copying objects

const hasanFakiri2 = {
  name: 'Mosatfa',
  firstName: 'Kamal',
  age: 26,
  family: ['Alice', 'Bob'],
};

const hasanCopy = Object.assign({}, hasanFakiri2);

hasanCopy.firstName = 'Rise';

hasanCopy.family.push('Tim');
hasanCopy.family.push('John');

console.log(
  'Before:',
  hasanFakiri2.firstName,
  '\nafter Change:',
  hasanCopy.firstName
);

console.table('Before:', hasanFakiri2, '\nafter Change:', hasanCopy);
