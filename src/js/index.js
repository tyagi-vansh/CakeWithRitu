// import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap";

// const scroll = new LocomotiveScroll();
let can_slide = false;

document.getElementById("firstBtn").addEventListener("click", () => {
  const tl = gsap.timeline();
  tl
    .to(".img-top-layer", {
      // make it to teh left side of the screen in zero time
      duration: 0,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    })
    .to("#first-con", {
      duration: 1.3,
      translateY: 0,
      ease: "power4.out",
    })
    .fromTo(".revealHeading", {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    }, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 2.3,
      ease: "power4.out",
    }, "-=0.3")
    .fromTo(".img-top-layer", {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    }, {
      duration: 2.7,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",

      ease: "power4.out",
    }, "+=0.1")
    .fromTo(".revealHeading2", {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    }, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2.3,
      ease: "power4.out",
    }, "-=2.5")
    .to(".img-top-layer", {
      duration: 0.3,
      clipPath:
        `polygon(0% 0%, ${mouseHorizontal}px 0%, ${mouseHorizontal}px 100%, 0% 100%)`,
      ease: "Sine.easeInOut",
    })
    .then(() => {
      can_slide = true;
    });
});

document.querySelectorAll(".first-cross").forEach((cross) => {
  cross.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to("#first-con", {
      duration: 1.3,
      translateY: "100vh",
      ease: "power4.out",
    })
      .then(() => {
        can_slide = false;
        gsap.set(".img-top-layer", { clearProps: "all" });
        // reset all the properties of each elemnt 
      });
  });
});

// Define mouseHorizontal variable
let mouseHorizontal = 0;

// Mouse and Touch Move Event with GSAP Animation
function handleMoveEvent(xPosition) {
  if (can_slide) {
    gsap.to(".img-top-layer", {
      duration: 1.3,
      clipPath: `polygon(0% 0%, ${xPosition}px 0%, ${xPosition}px 100%, 0% 100%)`,
      ease: "power4.out",
    });
  }
}

window.addEventListener("mousemove", (e) => {
  const mouseHorizontal = e.clientX;
  handleMoveEvent(mouseHorizontal);
});

window.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const touchHorizontal = touch.clientX;
  handleMoveEvent(touchHorizontal);
});

document.getElementById("secondBtn",).addEventListener("click", () => {
  const tl = gsap.timeline();
  tl.to('.second-con', {
      transform: 'translateY(0vh)',
  })
});

document.querySelectorAll(".second-cross").forEach((cross) => {
  cross.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to('.second-con', {
      transform: 'translateY(100vh)',
    })
  });
})
