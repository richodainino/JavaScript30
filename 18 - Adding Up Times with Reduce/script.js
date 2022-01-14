const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.reduce((total, current) => {
  const [mins, secs] = current.dataset.time.split(':').map(parseFloat);
  return total + (mins * 60) + secs;
}, 0);

const totalHours = (seconds / 3600) <= 1 ? 0 : Math.floor(seconds / 3600);
const totalMinutes = Math.floor((seconds % 3600) / 60);
const totalSeconds = (seconds % 3600) % 60;

function zeroPad(num, places){
  return String(num).padStart(places, '0');
}

document.querySelector('#durationSum').innerHTML = zeroPad(totalHours, 2) + ":" + zeroPad(totalMinutes, 2) + ":" + zeroPad(totalSeconds, 2);

const videos = document.querySelectorAll('.video');
document.querySelector('#vidSum').innerHTML = videos.length;