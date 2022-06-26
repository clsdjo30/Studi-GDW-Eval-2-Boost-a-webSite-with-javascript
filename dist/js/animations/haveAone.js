// HAVE A ONE
function haveOne () {
    let tl = gsap.timeline();
    tl 
    .to('#do-1', {autoAlpha: 1,scale:1.5, duration: 1.2, y: -90,delay: 0.1, onComplete: () => {
        gsap.to('#do-1', {autoAlpha: 0, scale: 0, y: 50, duration: 1})
    }
    })    
}