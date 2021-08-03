const p = document.querySelector("p");

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const makeGreen = () => {
  if (p.style.color === "rgb(186, 218, 85)") {
    p.style.color = "#000000";
    p.style.fontSize = "16px";
    return;
  }
  p.style.color = "rgb(186, 218, 85)";
  p.style.fontSize = "50px";
  return;
};

// regular
console.log("hello");

// interpolated
console.log("hello I am a %s string!!", "👍🏻");

//styled
console.log("%c i am  some great text", "font-size: 50px; background: red;");

// warning!
console.warn("OH error");

// error
console.error("ERRRRROR");

// info
console.info("hello hello hello");

// testing
console.assert(1 === 2, "wrong ");

// cleaning

console.clear();

// viewing Dom elements
console.log(p);
console.dir(p);

// grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});

console.clear();

// counting

console.count("wes");
console.count("wes");
console.count("wes");
console.count("wes");
console.count("wes");

// timing

console.time("fetching data");

const getApi = async () => {
  try {
    const data = await fetch("https://api.github.com/users/wesbos");
    const datas = await Promise.resolve(data.json());
    console.log(datas);
  } catch (err) {
    console.log(err);
  } finally {
    console.timeEnd("fetching data");
  }
};
// fetch("https://api.github.com/users/wesbos")
//   .then((data) => data.json())
//   .then((data) => {
//     console.timeEnd("fetching data");
//     console.log(data);
//   });

getApi();

console.table(dogs);

p.addEventListener("click", makeGreen);
