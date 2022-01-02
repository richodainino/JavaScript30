const endpoint = "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json";

// Making the country list clickable to open its Wikipedia page
const wikiUrl = "https://en.wikipedia.org/wiki/";

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

function generateStackItem(element, index, array) {
  var stackedItem = "";
  if (Object.is(array.length - 1, index)) {
    stackedItem += element;
  }
  else if (element === "&") {
    stackedItem += "and_";
  }
  else {
    stackedItem += element + "_";
  }
  return stackedItem;
}

function displayMatches() {
  const matchArray = findMatches(this.value);
  const html = matchArray.map(country => {
    const regex = new RegExp(this.value, 'gi');
    const countryName = country.name.replace(regex, (match) => `<span class="hl">${match}</span>`);
    const countryCode = country.code.replace(regex, (match) => `<span class="hl">${match}</span>`);
    const countryNameSplit = country.name.split(" ");
    const countryUrl = wikiUrl + countryNameSplit.map(generateStackItem).join("");
    return `
      <li> 
        <a href="${countryUrl}" target="_blank">
          <span class="name">${countryName}, ${countryCode}</span>
          <img src="${country.image}" alt="${country.name} Flag" class="flag">
        </a>
      </li>
      `;
  }).join('');
  suggestions.innerHTML = html;
}

// Debounce function from https://www.educative.io/edpresso/how-to-use-the-debounce-function-in-javascript
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