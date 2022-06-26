
const throwBtn = document.querySelector("#throw-game").addEventListener("click", loadGamePad);

// GSAP GAME PAD ANIMATION FUNCTION
function loadGamePad() {
  let hideStarterPad = document
    .querySelector("#modal-id")
    .classList.add("hidden");
  let loaderPage = document
  .querySelector("#loader")
  .classList.add("opacity-0", "scale-0");
  let tl = gsap.timeline();
  tl.from(
      "#loader",
      { autoAlpha: 1, duration: 1.5, scale: 1, ease: "power3.in" },
      0.1
      )
      .to(
      "#players",
      {
        y: 400,
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
        ease: "slow(0.7, 0.7, false)",
    },
      0.1
      )
    .to(
        "#game-btn",
        {
            y: 740,
            autoAlpha: 1,
            scale: 1,
            duration: 1.2,
            ease: "slow(0.7, 0.7, false)",
        },
        0.5
        );
    }