'use strict';

// // setting a value on an input
let score = Number(document.querySelector('.score').textContent);
let number = Math.trunc(Math.random() * 20) + 1;
let highscore = Number(document.querySelector('.highscore').textContent);

const sendMessage = (msg) => {
  document.querySelector('.message').textContent = msg;
};

const checkGuess = function (guess) {
  if (guess === number) {
    document.querySelector('.message').textContent = 'You guessed right';
    document.querySelector(
      '.message2'
    ).textContent = `Your last guessed was ${guess}`;
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  // when guess is not correct
  if (guess !== number) {
    sendMessage(guess > number ? '📈Too HIGH!' : 'too LOW'); //checks which message to send when guess is not equal to the number, if guess is greater than the number, it calls the function with the argument 'Too High' and if guess is lesser than number, it calls the function with the argument 'too low'
    if (!score) {
      sendMessage('💥🤯You lost the Game!'); //if the score value gets to 0, in the game, it will respond with You lost the game
    } else {
      score--; // else it will keep on substracting the score when you don't guess right
      document.querySelector('.score').textContent = score; // and then the score is updated to the game
    }
  }
};

// CHECKING IF THE GUESS IS EQUAL TO THE CORRECT RANDOM NUMBER BY LISTENING TO THE ENTER BUTTON
document.addEventListener('keydown', function (event) {
  const guess = Number(document.querySelector('.guess').value);

  if (event.key === 'Enter') {
    if (!guess) return sendMessage('No Number');

    // when guess is correct
    checkGuess(guess);
    console.log(guess);
  }
});

// CHECKING IF THE GUESS IS EQUAL TO THE CORRECT RANDOM NUMBER BY LISTENING TO THE ENTER BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when player wins
  checkGuess(guess);
});

// instructor's Solution on Restarting the Game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  sendMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '??';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
