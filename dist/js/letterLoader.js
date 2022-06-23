// LETTER ANIMATION ON LOADER
const splitText = (selector) => {
    const elem = document.querySelector(selector);
    const text = elem.innerText;
    const chars = text.split("");
    const charsContainer = document.createElement("div");
    const charsArray = [];
    
    charsContainer.style.position = "relative";
    charsContainer.style.display = "inline-block";
    
    chars.forEach((char) => {
        const charContainer = document.createElement("div");
        
        charContainer.style.position = "relative";
        charContainer.style.display = "inline-block";
        charContainer.innerText = char;
        charsContainer.appendChild(charContainer);
        
        charsArray.push(charContainer);
    });
    // remove current text
    elem.innerHTML = "";
    // append new structure
    elem.appendChild(charsContainer);
    
    return charsArray;
};

const animate = function (text) {
    // const charsOne = splitText("#span-1");
    const chars = [splitText("#span-1"), splitText("#span-2"), splitText("#span-3")];
    console.log(chars);
    
    
    return gsap
    .from(chars, {
        duration: 1,
        y: -400,
        opacity: 0,
        stagger: 0.2,
        delay: 0.3,
        ease: "power4.inOut",
        onComplete: () => {
            gsap.to('#span-1', {duration: 1.2, text:{value:"STUDI"}, ease:"power4.inOut", delay:0.2, oncomplete: () => {
                gsap.to('#span-2', {duration: 1.2, text:{value:"DICE"}, ease:"power4.inOut", delay: 1.3, onComplete: () => {
                    gsap.to('#span-3', {duration: 1.2, text:{value:"GAME"}, ease:"power4.inOut",  onComplete: () => {
                        gsap.to('#start-btn', {x: 225, autoAlpha: 1, scale: 1, duration: 1, ease:"power4.inOut", onComplete: () => {
                            gsap.to('#rule-btn', {x: -225, autoAlpha: 1, scale: 1, duration: 1,  ease:"power2.inOut"})
                        }})
                    }}, 0.1)                    
                }})
            }})
            
        }
    })
    
};
animate()