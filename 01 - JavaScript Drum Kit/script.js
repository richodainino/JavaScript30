function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const keyAnimation = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; // Stop the function if the button that registered is different

  keyAnimation.classList.add("playing"); // Start an animation by adding a new class
  audio.currentTime = 0; // Rewind to the start
  audio.play();

  // (2) This is the solution for the bug
  setTimeout(() => {
    keyAnimation.classList.remove("playing");
  }, 150);
}

/* (1) There's a bug in this original part
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip if it's not a transform
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); */

window.addEventListener("keydown", playSound);