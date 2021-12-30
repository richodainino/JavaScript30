const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (seconds == 0) {
    secondHand.style.transitionDuration = "0s";
  } else {
    secondHand.style.transitionDuration = "0.05s";
  }

  if (minutes == 0) {
    minuteHand.style.transitionDuration = "0s";
  } else {
    minuteHand.style.transitionDuration = "0.05s";
  }

  if (hours == 0) {
    hourHand.style.transitionDuration = "0s";
  } else {
    hourHand.style.transitionDuration = "0.05s";
  }
}

setInterval(setDate, 1000);
