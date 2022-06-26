// SOME SOUNDS 
function diceSound() {
    let soundDice = new Audio('./sounds/roll-dice.wav');
    soundDice.play();
  }
  function winSound() {
    let winnerSound = new Audio('./sounds/winGame.wav');
    winnerSound.play();
  }
  function loseRound(){
    let looserSound = new Audio('./sounds/looseRound.wav');
    looserSound.play();
  }
  function keepSound() {
    let glingGling = new Audio('./sounds/glingGling.mp3')
    glingGling.play();
  }