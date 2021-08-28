'use strict';

const mysteryNumber = document.querySelector('.number');
const guessedNumber = document.querySelector('.guess');
const btnReset = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const currentScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
let currentScoreVal = 0;
let randomNumber = 0;

const setGame = function () {
  currentScoreVal = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  mysteryNumber.textContent = '?';
  guessedNumber.value = '';
  message.textContent = 'Start guessing...';
  currentScore.textContent = currentScoreVal;
  btnCheck.disabled = false;
  body.style.backgroundColor = '#222';
};

const messageLog = function (mVal) {
  message.textContent = mVal;
};

setGame();

btnCheck.addEventListener('click', () => {
  let guess = Number(guessedNumber.value);
  if (!guess || guess < 1 || guess > 20) {
    messageLog('⛔ Enter a valid number..');
  } else {
    if (guess === randomNumber) {
      messageLog('🎉 You Won!');
      btnCheck.disabled = true;
      mysteryNumber.textContent = randomNumber;
      body.style.backgroundColor = '#60b347';
      if (Number(highScore.textContent) < currentScoreVal) {
        highScore.textContent = currentScoreVal;
      }
    } else {
      if (currentScoreVal > 1) {
        messageLog(
          guess < randomNumber
            ? '📉 Entered Value is Low!'
            : '📈 Entered Value is High!'
        );
        currentScoreVal--;
        currentScore.textContent = currentScoreVal;
      } else {
        messageLog('❌ Game Over!');
        currentScoreVal = 0;
        currentScore.textContent = currentScoreVal;
        btnCheck.disabled = true;
      }
    }
  }
});

btnReset.addEventListener('click', setGame);
