const slider = document.querySelector('.items');
let isDown = false;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  slider.scrollLeft -= (e.movementX * 3);
});
