// Array Cardio Day 1

// Data to work with
console.log("Here are the data to work with");

console.log("Inventors:");
const inventors = [
  { first: 'Albert',    last: 'Einstein',     year: 1879, passed: 1955 },
  { first: 'Isaac',     last: 'Newton',       year: 1643, passed: 1727 },
  { first: 'Galileo',   last: 'Galilei',      year: 1564, passed: 1642 },
  { first: 'Marie',     last: 'Curie',        year: 1867, passed: 1934 },
  { first: 'Johannes',  last: 'Kepler',       year: 1571, passed: 1630 },
  { first: 'Nicolaus',  last: 'Copernicus',   year: 1473, passed: 1543 },
  { first: 'Max',       last: 'Planck',       year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett',     year: 1898, passed: 1979 },
  { first: 'Ada',       last: 'Lovelace',     year: 1815, passed: 1852 },
  { first: 'Sarah E.',  last: 'Goode',        year: 1855, passed: 1905 },
  { first: 'Lise',      last: 'Meitner',      year: 1878, passed: 1968 },
  { first: 'Hanna',     last: 'Hammarström',  year: 1829, passed: 1909 }
];
console.table(inventors);

console.log("People:");
const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
console.log(people);

console.log("Data:");
const data = [ 'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
console.log(data);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("1. Filter the list of inventors for those who were born in the 1500's");
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log("2. Give us an array of the inventors first and last names");
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("3. Sort the inventors by birthdate, oldest to youngest");
const ordered = inventors.sort((firstInventor, secInventor) => {
  return firstInventor.year > secInventor.year ? 1 : -1
});
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log("4. How many years did all the inventors live all together?");
const totalYears = inventors.reduce((total, inventor) => {
  const age = inventor.passed - inventor.year;
  return total + age;
}, 0);
console.table(totalYears);

// 5. Sort the inventors by years lived
console.log("5. Sort the inventors by years lived");
const oldest = inventors.sort((firstInventor, secInventor) => {
  const firstAge = firstInventor.passed - firstInventor.year;
  const secAge = secInventor.passed - secInventor.year;
  return firstAge > secAge ? -1 : 1;
});
console.table(oldest);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
console.log("6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name, try it on the wikipedia page");
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));
// console.log(de);

// 7. Sort Exercise
// Sort the people alphabetically by last name
console.log("7. Sort Exercise");
const  alphabetically = people.sort((firstPeople, secPeople) => {
  const [firstPeopleLastName, firstPeopleFirstName] = firstPeople.split(', ');
  const [secPeopleLastName, secPeopleFirstName] = secPeople.split(', ');
  return firstPeopleLastName > secPeopleLastName ? 1 : -1;
});
console.log(alphabetically);

// 8. Reduce Exercise
// Sum up the instances of each of these
console.log("8. Reduce Exercise");
const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);