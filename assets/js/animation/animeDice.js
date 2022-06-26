// FUNCTION DOESN4T WORK GOOD THROW ONE BUT STOP AFTER
function animeDice() {
    let rollDice = gsap.timeline();
    rollDice
    .to('#dice', {rotation: 360,x: 150, scale: 0.8,autoAlpha: 0, duration: 0.3, ease: Power4.easeIn, onComplete: () => {rollDice.reverse()}
    }
); 
    //btnRoll.onclick = () => rollDice.play();
    
}