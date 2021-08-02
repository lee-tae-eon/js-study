const people = [
  { name: "wes", year: 1988 },
  { name: "lee", year: 1985 },
  { name: "woo", year: 1986 },
  { name: "gyeom", year: 2019 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
//- some , every
const isAdult = people.every((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

//- find
// const comment = comments.find((comment) => comment.id === 823423);

//- findIndex
const comment = comments.findIndex((comment) => comment.id === 823423);

// comments.splice(comment, 1);

// console.log(comments);
const newComments = [
  ...comments.slice(0, comment),
  ...comments.slice(comment + 1),
];
console.log(newComments);
