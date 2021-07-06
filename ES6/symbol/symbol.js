const Obj = {
  [Symbol("lee")]: {
    name: "taeeon",
  },
  [Symbol("lee")]: {
    name: "gy",
  },
};

const value = Object.getOwnPropertySymbols(Obj);

value.forEach((symbol) => console.log(Obj[symbol]));
