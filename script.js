'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const guess = Number(document.querySelector('.guess').value);

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function scorePoints(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('😡 No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('📈 Too high!');
      score--;
      scorePoints(score);
    } else {
      displayMessage('💥You lost the game!');
      scorePoints(0);
    }
  } else if (guess < secretNumber) {
    displayMessage('📉 Too low!');
    score--;
    scorePoints(score);
  } else {
    displayMessage('💥 You lost the game');
    scorePoints(0);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('🤔 Start guessing...');
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  scorePoints(score);
});
