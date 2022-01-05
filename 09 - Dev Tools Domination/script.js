// Data to use
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

// This function is used to test adding a break on attribute modifications from browser devtools
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
const poo = "💩";
console.log("Hello I am a %s string!", poo);
console.log(`And I am also a ${poo} string!`)

// Styled
console.log("I am some %c great text", "font-size: 20px; background: red; text-shadow: 2px 2px 0 blue");

// Warning!
console.warn("console.warn()");

// Error :|
console.error("console.error()");

// Info
console.info("console.info()");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "You did not select the right Element!");

// Clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count("console.count()");
console.count("console.count(1)");
console.count("console.count()");
console.count("console.count(1)");
console.count("console.count()");
console.count("console.count()");
console.count("console.count(1)");

// Timing
console.time("fetching data");
fetch("https://api.github.com/users/richodainino")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// Table
console.table(dogs);