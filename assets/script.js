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
let randomNumber = Math.trunc(Math.random() * 6) + 1;

// SET VALUE

score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;
let scores = [0, 0];
activePlayer = Math.trunc(Math.random() * 2);
document
  .querySelector(`.player--${activePlayer}`)
  .classList.add("player--active");
if (activePlayer === 0) {
  playler1.classList.remove("player--active");
} else if (activePlayer === 1) {
  playler0.classList.remove("player--active");
}

// SWITCH FUNCTIONALITY
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playler0.classList.toggle("player--active");
  playler1.classList.toggle("player--active");
};

// ROLL FUNCTIONALITY
rollEl.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

// HOLD FUNCTIONALITY
holdEl.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      switchPlayer();
    }
  }
});
newEl.addEventListener("click", function () {
  dice.classList.add("hidden");
  playing = true;
  currentScore = 0;
  scores = [0, 0];
  playler0.classList.remove("player--winner");
  playler1.classList.remove("player--winner");
  activePlayer = Math.trunc(Math.random() * 2);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  if (activePlayer === 0) {
    playler1.classList.remove("player--active");
  } else if (activePlayer === 1) {
    playler0.classList.remove("player--active");
  }
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  console.log(activePlayer);
});
