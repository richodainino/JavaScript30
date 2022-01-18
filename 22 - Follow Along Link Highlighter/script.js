const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

let isHoveringLink = false;

function highlightLink() {
  isHoveringLink = true;
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
  highlight.style.opacity = '100%';
}

function stopHighlight() {
  if (isHoveringLink) return;
  highlight.style.opacity = '0%';
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
triggers.forEach(a => a.addEventListener('mouseout', () => isHoveringLink = false));
document.addEventListener('click', stopHighlight);