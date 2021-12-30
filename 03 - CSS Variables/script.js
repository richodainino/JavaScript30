const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = (this.type === 'range') ? 'px' : '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));