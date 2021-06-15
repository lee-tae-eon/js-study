class ArrayUtilities {
  /* Your magic here */
  static addZeros = (number) => number.map((num) => parseInt(`${num}0`));

  static moreThanFifty = (number) => number.filter((num) => num > 50);

  static removeFirst = ([a, ...number]) => number;

  static sumAll = (number) => number.reduce((acc, curr) => acc + curr, 0);

  static divide = (number) => String(number).split("");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
