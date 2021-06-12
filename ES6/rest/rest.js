// const infiniteArgs = (...cocoa) => console.log(cocoa);

// infiniteArgs("1", 2, true, "hhhh", [1, 2, 3, 4]);

// const bestNumber = (num, ...rest) => {
//   console.log(`best number is ${num}`);
//   console.log(rest);
// };

// bestNumber(1, 2, 3, 4, 5, 6, 7, 8, 9);

// rest + spread + destructure-----------------------------------
// cleaning object
// const user = {
//   username: "lee",
//   age: 37,
//   password: 1234,
// };

// const killPassword = ({ password, ...rest }) => rest;

// const cleanUser = killPassword(user);

// console.log(cleanUser);

// configure default
// const user = {
//   username: "lee",
//   age: 37,
//   password: 1234,
// };

// const setCountry = ({ country = "Korea", ...rest }) => ({ ...rest, country });

// console.log(setCountry(user));

// rename property
const user = {
  NAME: "lee",
  age: 37,
  password: 1234,
};

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });

console.log(rename(user));
