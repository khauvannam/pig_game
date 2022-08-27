"use strict";

// CALL VARIABLE
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const rollEl = document.querySelector(".btn--roll");
const newEl = document.querySelector(".btn--new");
const holdEl = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
const playler0 = document.querySelector(".player--0");
const playler1 = document.querySelector(".player--1");

// SET VALUE
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add("hidden");
let randomNumber = Math.trunc(Math.random() * 6) + 1;
let currentScore = 0;
let activePlayer = 0;
let totalScore = 0;
const scores = [0, 0];
// ROLL FUNCTIONALITY
const rollDice = function () {
  dice.classList.remove("hidden");
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `./assets/img/dice-${randomNumber}.png`;
  //   IF ROLL !== 1
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  // IF RANDOM = 1
  else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playler0.classList.toggle("player--active");
    playler1.classList.toggle("player--active");
  }
};
// HOLD FUNCTIONALITY
const holdScore = function () {
  if (totalScore < 100) {
    totalScore += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore;
  } else {
  }
};

// BUTTON CLICKED
rollEl.addEventListener("click", rollDice);
holdEl.addEventListener("click", holdScore);
newEl.addEventListener("click", newGame);
