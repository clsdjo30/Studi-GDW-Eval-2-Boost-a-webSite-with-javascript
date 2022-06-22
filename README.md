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
![desktop View](./design-website-view/desktop-view.png)

![Mobile View](./design-website-view/mobile-view.png)

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





## Author
Cedric Le  Sergent 
- Website - [in construction](/#)