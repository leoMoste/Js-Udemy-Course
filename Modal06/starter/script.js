'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

const openModal = function () {
  //console.log('Button cliked!');
  //here we can remove more than one class , if we add ',' between the classes
  //we should use the name of the class without the .
  // not like that '.hidden'
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closedModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', openModal);
}

btnClosedModel.addEventListener('click', closedModal);

overlay.addEventListener('click', closedModal);

// we pass an EVENT as parameter it the function to handel which key has pressed
document.addEventListener('keydown', function (event) {
  //to access any item in the object we use the name of the object.nameOfTheKey in Object
  //console.log(event.key);

  if (event.key === 'Escape' && !model.classList.contains('hidden')) {
    closedModal();
  }
});
