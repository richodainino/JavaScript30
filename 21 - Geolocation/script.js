const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
  if (!(data.coords.speed)){
   alert("I'm sorry this browser can't be used to show heading and speed");
  }
  const speeds = (data.coords.speed * 3.6);
  speed.textContent = Math.round((speeds + Number.EPSILON) * 100) / 100;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.err(err);
  alert('Please allow the location access');
});