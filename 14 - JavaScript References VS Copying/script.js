// Here's our array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team = players;
team[3] = "Lux";
console.log(players, team);
// Element at index 3 of players and team is same

// 1. Using slice() method
const team2 = players.slice();
team2[3] = "Dianna";
console.log(players, team2);
// Element at index 3 of players and team2 is different

// 2. Concatenate
const team3 = [].concat(players);
team3[3] = "Dona";
console.log(players, team3);
// Element at index 3 of players and team3 is different

// 3. ES6 Spread
const team4 = [...players];
team4[3] = "Yusuf";
console.log(players, team4);
// Element at index 3 of players and team4 is different

// 4. Array.from() method
const team5 = Array.from(players);
team5[3] = "Liekr";
console.log(players, team5);
// Element at index 3 of players and team5 is different

// Here's our object
const person = {
  name: 'Wes Bos',
  age: 80
};

const captain = person;
captain.number = 99;
console.log(person, captain);
// Person and captain both have a new number property

// 1. Object.assign() method
const captain2 = Object.assign({}, person, {number: 70, age: 12})
console.log(person, captain2);
// Captain2's number and age is different compared to person object

// 2. ES6 Spread
const captain3 = {...person};
captain3.number = 123;
console.log(person, captain3);
// Captain3's number is different compared to person object

// 3. Stringify and then parse it back as an object
const captain4 = JSON.parse(JSON.stringify(person));
captain4.number = 654;
console.log(person, captain4);
// Captain4's number is different compared to person object

// Things to note - this is only 1 level deep - both for Arrays and Objects
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
// neb and dev has a different name

dev.social.twitter = "@nebpus";
console.log(neb.social, dev.social);
// But when we try to change it's twitter, both got changed