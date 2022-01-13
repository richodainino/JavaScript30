const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
  return bandName.replace(/^(an?|the)\s+?/i, "").trim();
}

const sortedBands = bands.sort((firstBand, secondBand) => 
  strip(firstBand).localeCompare(strip(secondBand))
);

document.querySelector('#bands').innerHTML = sortedBands
  .map(band => `<li>${band}</li>`)
  .join("");