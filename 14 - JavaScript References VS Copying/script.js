// start with strings, numbers and booleans
let num = 100;
let num2 = num;
console.log(num, num2);
num = 200;
console.log(num, num2);

let name = "neb";
let name2 = name;
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
console.log(players, team);

// however what happens when we update that array?
team[3] = "Lux";

// now here is the problem!
console.log(players, team);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed
team2[3] = "Dianna";
console.log(players, team2);

team3[3] = "Dona";
console.log(players, team3);

team4[3] = "Yusuf";
console.log(players, team4);

team5[3] = "Liekr";
console.log(players, team5);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 99;
console.log(person, captain);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {number: 70, age: 12})
console.log(person, captain2);

// We will hopefully soon see the object ...spread
const captain3 = {...person};
captain3.number = 123;
console.log(person, captain3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const neb = {
  name: "Neb",
  age: 19,
  social: {
    twitter: "@neb",
    facebook: "neb-pus"
  }
}

const dev = Object.assign({}, neb);
dev.name = "Dev";
console.log(neb, dev);

dev.social.twitter = "@nebpus";
console.log(neb.social, dev.social);

// We can also copy an object like this
const dev2 = JSON.parse(JSON.stringify(neb));