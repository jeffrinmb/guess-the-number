'use strict';

const body = document.querySelector('body');
const guessNumber = document.querySelector('.guess-number');
const inputNumber = document.querySelector('.number');
const btnReset = document.querySelector('.header-btn');
const btnCheck = document.querySelector('.check-btn');
const currentScore = document.querySelector('.score-current');
const highScore = document.querySelector('.score-high');
const message = document.querySelector('.message');

let randomNumber = Math.floor(Math.random() * 20) + 1;
let currentScoreVal = 20;
let highScoreVal = 0;

btnCheck.addEventListener('click', () => {
  let guessedNumber = Number(inputNumber.value);
  if (!guessedNumber || guessedNumber > 20 || guessedNumber < 1) {
    message.textContent = 'Please enter a value between 1 & 20';
  } else {
    if (currentScoreVal > 1) {
      if (randomNumber === guessedNumber) {
        message.textContent = 'You have won!';
        currentScore.textContent = currentScoreVal;
        guessNumber.textContent = randomNumber;
        body.style.backgroundColor = '#0F0';
        btnCheck.disabled = true;
        if (highScoreVal < currentScoreVal) {
          highScoreVal = currentScoreVal;
          highScore.textContent = highScoreVal;
        }
      } else if (randomNumber > guessedNumber) {
        message.textContent = 'You have entered a low value!';
        currentScoreVal--;
        currentScore.textContent = currentScoreVal;
      } else {
        message.textContent = 'You have entered a high value!';
        currentScoreVal--;
        currentScore.textContent = currentScoreVal;
      }
    } else {
      message.textContent = 'Please Try Again!';
      body.style.backgroundColor = '#F00';
      currentScore.textContent = 0;
      btnCheck.disabled = true;
    }
  }
});

btnReset.addEventListener('click', () => {
  currentScoreVal = 20;
  currentScore.textContent = currentScoreVal;
  guessNumber.textContent = '?';
  inputNumber.value = '';
  message.textContent = 'Start Guessing!';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = '#000';
  btnCheck.disabled = false;
});
