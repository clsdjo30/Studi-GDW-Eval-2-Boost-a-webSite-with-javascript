// SOME SOUNDS 
function diceSound() {
    let soundDice = new Audio('./assets/sounds/roll-dice.wav');
    soundDice.play();
  }
  function winSound() {
    let winnerSound = new Audio('./assets/sounds/winGame.wav');
    winnerSound.play();
  }
  function loseRound(){
    let looserSound = new Audio('./assets/sounds/looseRound.wav');
    looserSound.play();
  }
  function keepSound() {
    let glingGling = new Audio('./assets/sounds/glingGling.mp3')
    glingGling.play();
  }