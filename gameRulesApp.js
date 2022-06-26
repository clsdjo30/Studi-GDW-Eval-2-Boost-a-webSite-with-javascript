let btnRoll = document.querySelector('#roll-dice');
let btnHold = document.querySelector('#hold-dice');
const newGameBtn = document.querySelector('#new-game');
let gameParam = document.querySelector('#throw-game');
let currentScore,
    activeplayer,
    scores,
    playGame,
    player1,
    player2;
    

btnRoll.addEventListener('click', () => {
 
  if(playGame){
    
    animeDice();
    diceSound();
    //Throw a random number
    let dice = Math.floor(Math.random() * 6) + 1;
    //Displays dice's SVG corresponding to the result of random number
    let domDice =  document.querySelector('#dice');
    domDice.style.display = 'block'
    domDice.src ='./images/dices/3d-dice-'+ dice + '.svg';
 
 if (dice !== 1)
{ 

  currentScore += dice;
document.querySelector('#current-'+ activeplayer).textContent = currentScore;
  
} else {
    loseRound(); 
    haveOne();  
    nextPlayer();
  

  }
 }
})

// KEEP SCORE BUTTON
btnHold.addEventListener('click', () => {

  if(playGame){
    keepSound();
    scores[activeplayer]+= currentScore;
    document.querySelector('#score-player-'+activeplayer).textContent = scores[activeplayer]
    if (scores[activeplayer]>= document.querySelector('#points-choice').value){
      winSound();
      document.querySelector('#score-player-'+activeplayer).textContent = 'winner'
      playGame = false;
    } else {
      nextPlayer()
    }
  }
})

// TOGGLE PLAYER
function nextPlayer() {
  activeplayer === 0 ?
  activeplayer = 1:
  activeplayer = 0 ;
  currentScore = 0;



  document.querySelector('#current-0').textContent ='0'
  document.querySelector('#current-1').textContent = '0'

  //  ADD PLAYER 0 ACTIVE CLASS
 document.querySelector('#player0').classList.toggle('active')
 document.querySelector('#name-player-0').classList.toggle('active-player')
 document.querySelector('#score-player-0').classList.toggle('active-player-score')
 document.querySelector('#current-0').classList.toggle('active-current-score')

 
//  REMOVE PLAYER 1 ACTIVE CLASS
 document.querySelector('#player1').classList.toggle('active')
 document.querySelector('#name-player-1').classList.toggle('active-player')
 document.querySelector('#score-player-1').classList.toggle('active-player-score')
 document.querySelector('#current-1').classList.toggle('active-current-score') 
  
}
// START NEW GAME AFTER A GAME
newGameBtn.addEventListener('click', startGame)

//AT THE BEGINING START GAME
gameParam.addEventListener('click', startGame)

function startGame() {
 activeplayer = 0;
 scores       = [0, 0];
 currentScore = 0;
 playGame     = true;
  
 // SET OR NOT PLAYER NAME
 if( document.querySelector('#player-0-name').value  && document.querySelector('#player-1-name').value !== "" ) { 
  document.querySelector('#name-player-0').textContent = document.querySelector('#player-0-name').value;
  document.querySelector('#name-player-1').textContent = document.querySelector('#player-1-name').value;
 } else {
  document.querySelector('#name-player-0').textContent = "Player One"
  document.querySelector('#name-player-1').textContent = "Player Two"
 }

// SET ALL INITIAL SCORE TO 0
 document.querySelector('#score-player-0').textContent='0';
 document.querySelector('#current-0').textContent='0';
 document.querySelector('#score-player-1').textContent='0';
 document.querySelector('#current-1').textContent='0';

//  ADD PLAYER 0 ACTIVE CLASS
 document.querySelector('#player0').classList.add('active')
 document.querySelector('#name-player-0').classList.add('active-player')
 document.querySelector('#score-player-0').classList.add('active-player-score')
 document.querySelector('#current-0').classList.add('active-current-score')

 
//  REMOVE PLAYER 1 ACTIVE CLASS
 document.querySelector('#player1').classList.remove('active')
 document.querySelector('#name-player-1').classList.remove('active-player')
 document.querySelector('#score-player-1').classList.remove('active-player-score')
 document.querySelector('#current-1').classList.remove('active-current-score') 

 
}