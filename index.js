'use strict';

function main() {

  var STARTING_ENEGERY = 1000;
  var ENEGERY_DECREASE = 1;
  var SPEED = 1;

  var stage;
  var score;

  // -- SPLASH

  var splashElement;
  var startGameButton;
  var handleStartClick = function () {
    destroySplash();
    buildGame();
  };

  function buildSplash() {
    stage = 'splash';

    // create dom elements
    splashElement = document.createElement('div');
    splashElement.setAttribute('id', 'splash');

    var title = document.createElement('h1');
    title.innerText = 'TH3 G4M3';
    splashElement.appendChild(title);

    startGameButton = document.createElement('button');
    startGameButton.innerText = 'start';
    splashElement.appendChild(startGameButton);

    // apppend to site-main
    var mainElement = document.querySelector('#site-main');
    mainElement.appendChild(splashElement);

    // bind click on start play button
    startGameButton.addEventListener('click', handleStartClick);
  }

  function destroySplash() {
    // unbind click on start play button
    startGameButton.removeEventListener('click', handleStartClick);
    // remove splash from dom
    splashElement.remove();
  }

  // -- GAME

  function buildGame() {
    stage = 'game';
    score = 0;

    // create dom elements
    // - create canvas
    // apppend to site main


    // create a player
    // create array of enemies

    // bind keys (document addEventListener for key down)
    // -> change direction of player
    // start the "interval"

    destroyGame();
    buildGameOver();
  }

  function destroyGame() {

    // stop the interval
    // unbind keys
    // destroy game dom
  }

  // -- GAME OVER

  var gameOverElement;
  var playAgainButton;
  var handlePlayAgainClick = function () {
    destroyGameOver();
    buildGame();
  };

  function buildGameOver() {
    stage = 'gameOver';

    // create dom elements
    gameOverElement = document.createElement('div');
    gameOverElement.setAttribute('id', 'game-over');

    var title = document.createElement('h1');
    title.innerText = 'game over';
    gameOverElement.appendChild(title);

    var yourScore = document.createElement('h2');
    yourScore.innerText = 'your score: ' + score;
    gameOverElement.appendChild(yourScore);

    playAgainButton = document.createElement('button');
    playAgainButton.innerText = 'play again';
    gameOverElement.appendChild(playAgainButton);

    // apppend to site-main
    var mainElement = document.querySelector('#site-main');
    mainElement.appendChild(gameOverElement);

    // bind click on start play button
    playAgainButton.addEventListener('click', handlePlayAgainClick);
  }

  function destroyGameOver() {
    // unbind click on start play button
    playAgainButton.removeEventListener('click', handlePlayAgainClick);
    // remove gameOver from dom
    gameOverElement.remove();
  }
  buildSplash();

}

window.onload = main;
