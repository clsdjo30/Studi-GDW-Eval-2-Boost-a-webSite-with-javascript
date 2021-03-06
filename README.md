# Studi-GDW-Eval-2
## Boost a webSite with javascript

## Table of contents

- [Overview](#overview)
  - [Evaluation subject](#specifications)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Specifications

Creating a small web browser game using the DOM.
At the end of the service, the sponsor must receive the following elements:
- A functional game
- A readable interface that corresponds to the model provided.
This involves several global features:
In front-desk (client side):
- The ability to create a new game
- The possibility of retaining the current score
- The ability to roll the dice
- The possibility of having 2 players

Rules :
The game includes 2 players on a single screen.
Each player has a temporary score (ROUND) and an overall score (GLOBAL).
At each turn, the player has his ROUND initialized to 0 and can roll a die as many times as he wishes. the
result of a throw is added to the ROUND.
During his turn, the player can decide at any time to:
- Click on the “Hold” option, which sends the points of the ROUND to the GLOBAL. It will then be the
other player's turn.
- Roll the dice. If he rolls a 1, his ROUND score is lost and his turn ends.
The first player to reach 100 points on global wins the game.

Of course the site will have to be responsive and at the request of the customer the interface will have to be designed mobile

### Screenshot
![Home Page](./design-website-view/home_page.png)


### Links

- Live Site URL: [Hebergé sur Vercel](https://#)

## My process

### Built with

- Semantic HTML5 markup
- [TailwindCSS](https://tailwind.com) - CSS Framework 
- [Vanilla JS](http://vanilla-js.com/) - JS Native
- [GreenSock](https://greensock.com/gsap/) - with CDN (use Scrolltrigger, TextPlugin & EaselPlugin)
- Flexbox
- Mobile-first workflow

### Install Tailwind Css

1 - Install *'tailwincss'* via npm, use -D  : Package will appear in your devDependencies

``
 npm install -D tailwindcss
 ``

2 - Create your *'tailwind.config.js'* file

``npx tailwindcss init
``

3 - Add the paths to all of your template files in your tailwind.config.js file.
````
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
````
4 - Create *src* folder with an *input.css* file
Add the Tailwind directives to your CSS
````
@tailwind base;
@tailwind components;
@tailwind utilities;
````
5 - Start the Tailwind CLI build process
Run the cli tool
`npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`

6 - Using Tailwind in HTML
Add link bellow in *`<head>`*

`<link href="/dist/output.css" rel="stylesheet">`

### What I learned


#### Setting up modal windows
##### How it work
To make the window appear we will delete the hidden class
and to close the window we add the class flex.

To make "the modal" work, we need buttons and a window.
We target the window with an "id"
```
<div class="hidden fixed z-50  mx-auto" id="rule-display">
    -------Content of modal
</div>
```

Open button with "onclick" parameter
```
<button 
    id="rule-btn"
    class="game-btn relative capitalize text-pink-900 font-bold "
    onclick="toggleModalRule('rule-display')"
    >
    Learn to play
</button>
```
Close Button with "onclick" parameter
```
<button 
    class="game-btn w-1/3 text-xs" 
    type="button" 
    onclick="toggleModalRule('rule-display')"
    >
    Close
</button>
```
Javascript File to toogle 
```
function toggleModalRule(ruleDisplay) {
    let showRule = document.querySelector("#rule-display");
    showRule.classList.toggle("hidden");
    showRule.classList.toggle("flex");
}
```

#### Gsap library for animation

I chose to animate several elements of my game using the GreenSock library, notably to make a loader with the letters of the name of the game animated letter by letter, the appearance of the game board, and the dice roll.  

I used CDN : [Gsap](https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger,easel,text#cdn)




## Author
Cedric Le  Sergent 
