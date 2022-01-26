const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let gameDuration = 10000;
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  
  if (hole === lastHole) return randomHole(holes);

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  document.documentElement.classList.remove('sec-2');
  document.documentElement.classList.remove('sec-0');
  scoreBoard.classList.remove('finish');
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();

  setTimeout(() => {
    timeUp = true;
    document.documentElement.classList.add('sec-0');
  }, gameDuration);
  
  setTimeout(() => {
    document.documentElement.classList.add('sec-2');
  }, gameDuration - 2000);

  setTimeout(() => {
    scoreBoard.classList.add('finish');
  }, gameDuration + 1000);
}

function bonk(e) {
  if (!e.isTrusted) return; // You're a cheater

  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

document.customForm.addEventListener('change', function(e) {
  e.preventDefault();
  gameDuration = this.seconds.value * 1000;
});

moles.forEach(mole => mole.addEventListener('click', bonk));