// const devLte = new Promise((resolve, reject) => {
//   resolve(2);
// });

// const timeTwo = (number) => number * 2;

// devLte
//   .then(timeTwo)
//   .then(timeTwo)
//   .then(timeTwo)
//   .then(timeTwo)
//   .then(timeTwo)
//   .then(() => {
//     throw Error("some");
//   })
//   .then((lastNumber) => console.log(lastNumber))
//   .catch((error) => console.log(error));

// const p1 = new Promise((resolve) => {
//   setTimeout(resolve, 1000, "first");
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 6000, "reject!!!!!");
// });

// const p3 = new Promise((resolve) => {
//   setTimeout(resolve, 2000, "third");
// });

// const resultPromise = Promise.race([p1, p2, p3]);

// resultPromise
//   .then((values) => console.log("value :", values))
//   .catch((error) => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, "First");
// })
//   .then((value) => console.log(value))
//   .catch((err) => console.log(`${err} ❌`))
//   .finally(() => console.log("Im done"));

fetch("https://yts.mx/api/v2/list_movies.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((value) => console.log(value))
  .catch((err) => console.log(`${err}❌`));
