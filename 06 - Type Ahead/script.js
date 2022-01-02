const endpoint = "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json";

const countries = [];

fetch(endpoint)
  .then(response => response.json())
  .then(data => countries.push(...data));

function findMatches(wordToMatch) {
  return countries.filter(country => {
    const regex = new RegExp(wordToMatch, 'gi');
    return country.name.match(regex) || country.code.match(regex);
  });
}

function displayMatches() {
  console.log("test");
  const matchArray = findMatches(this.value);
  const html = matchArray.map(country => {
    const regex = new RegExp(this.value, 'gi');
    const countryName = country.name.replace(regex, (match) => `<span class="hl">${match}</span>`);
    const countryCode = country.code.replace(regex, (match) => `<span class="hl">${match}</span>`);
    return `
      <li>
        <span class="name">${countryName}, ${countryCode}</span>
        <img src="${country.image}" alt="${country.name} Flag" class="flag">
      </li>
      `;
  }).join('');
  suggestions.innerHTML = html;
}

function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;
	    
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input', debounce(displayMatches, 250));