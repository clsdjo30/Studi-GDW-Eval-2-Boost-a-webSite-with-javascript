// SOME SOUNDS 
function diceSound() {
    let soundDice = new Audio('dist/sounds/roll-dice.wav');
    soundDice.play();
  }
  function winSound() {
    let winnerSound = new Audio('dist/sounds/winGame.wav');
    winnerSound.play();
  }
  function loseRound(){
    let looserSound = new Audio('dist/sounds/looseRound.wav');
    looserSound.play();
  }
  function keepSound() {
    let glingGling = new Audio('dist/sounds/glingGling.mp3')
    glingGling.play();
  }