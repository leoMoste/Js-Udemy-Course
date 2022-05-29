'use strict';

// the both are simmler, the diffrences are the syntax in ('') and the getElementById is a littel bit faster
//Selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
/*
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// this cannot be inside the function becuase it will changable, if we click the button
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;
let playing = true;
*/

const init = function () {
  //Starting conditions
  score0El.textContent = 0;
  score1El.textContent = 0;

  // this cannot be inside the function becuase it will changable, if we click the button
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle, works like that: if the class not there it add and if it's there then remove it
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true
    if (dice !== 1) {
      // Add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      //document.getElementById(`current--${activePlayer}`).textContent = 0;
      //currentScore = 0;
      //activePlayer = activePlayer === 0 ? 1 : 0;
      //toggle, works like that: if the class not there it add and if it's there then remove it
      //player0El.classList.toggle('player--active');
      //player1El.classList.toggle('player--active');

      //replace the code in function
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    // 1. Add Current score to active player's score
    //scores is an array[activPlayer 0/1] = add to him the current score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //scores[1] = scores[1] + currentScore;
    // 2. Check if player's score is >= 100

    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);