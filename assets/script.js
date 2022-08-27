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
let totalScore = 0;
// ROLL FUNCTIONALITY
const rollDice = function () {
  dice.classList.remove("hidden");
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `./assets/img/dice-${randomNumber}.png`;
  //   CHECK FOR ROLL 1
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    if (playler0.classList.contains("player--active")) {
      currentScore0.textContent = currentScore;
    } else if (playler1.classList.contains("player--active")) {
      currentScore1.textContent = currentScore;
    }
  } // IF RANDOM = 1
  else {
    currentScore = 0;
    if (playler0.classList.contains("player--active")) {
      currentScore0.textContent = currentScore;
      playler0.classList.remove("player--active");
      playler1.classList.add("player--active");
    } else if (playler1.classList.contains("player--active")) {
      currentScore1.textContent = currentScore;
      playler1.classList.remove("player--active");
      playler0.classList.add("player--active");
    }
  }
};

// HOLD FUNCTIONALITY
const holdScore = function () {
  if (playler0.classList.contains("player--active")) {
    playler0.classList.remove("player--active");
    playler1.classList.add("player--active");
  } else if (playler1.classList.contains("player--active")) {
    playler1.classList.remove("player--active");
    playler0.classList.add("player--active");
  }
};

// BUTTON CLICKED
rollEl.addEventListener("click", rollDice);
holdEl.addEventListener("click", holdScore);
