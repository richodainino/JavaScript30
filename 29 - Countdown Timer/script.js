let countdown;
let secondsLeft;
let isPause = false;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const body = document.querySelector('body');

function timer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    secondsLeft = Math.round((then - Date.now()) / 1000);
    
    // Check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // Display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds.toString().padStart(2, 0)}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minutes.toString().padStart(2, 0)}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});

function pauseTimer() {
  if (isPause) {
    timer(secondsLeft);
    isPause = false;
    timerDisplay.classList.remove('pause');
    endTime.classList.remove('pause');
    body.classList.remove('pause');
  }
  else {
    clearInterval(countdown);
    isPause = true;
    timerDisplay.classList.add('pause');
    endTime.classList.add('pause');
    body.classList.add('pause');
  }
}

timerDisplay.addEventListener('click', pauseTimer);
endTime.addEventListener('click', pauseTimer);