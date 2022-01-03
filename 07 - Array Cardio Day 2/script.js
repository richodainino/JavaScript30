// Array Cardio Day 2

// Data to work with
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // Is at least one person 19 or older?
// Array.prototype.every() // Is everyone 19 or older?
const currentYear = (new Date()).getFullYear();
const isAnyAdult = people.some(person => {
  const age = currentYear - person.year;
  return age >= 19;
  });
console.log("1. Is at least one person 19 or older?\n" + isAnyAdult);

const isEveryoneAdult = people.every(person => {
  const age = (currentYear - person.year);
  return age >= 19;
});
console.log("2. Is everyone 19 or older?\n" + isEveryoneAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 823423
const findCommentID = comments.find(comment => comment.id === 823423);
console.log("3. Find the comment with the ID of 823423");
console.log(findCommentID);

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 823423
const findIndexCommentID = comments.findIndex(comment => comment.id === 823423);
console.log("4. Find the comment with this ID\n" + findIndexCommentID);

// This is one way to delete the comment based on its ID by modifying the original array
// comments.splice(findIndexCommentID, 1);
// console.log("5. Delete the comment with the ID of 823423 (1)");
// console.table(comments);

// This is another way by creating a second array without the specified element
console.log("5. Delete the comment with the ID of 823423 (2)");
const newComments = [
  ...comments.slice(0, findIndexCommentID),
  ...comments.slice(findIndexCommentID + 1)
];
console.table(newComments);