// const friends = [1, 2, 3, 4];

// console.log(friends);

// // spread는 기본적으로 변수를 가져와 풀어헤치고 전개하는 것이다.
// // spread를 사용하기 위해 필요한것은 "..." 점세개 이다.

// console.log("use spread :", ...friends);

// // 자 사용해보자 하나의 array를 더 만들어주고 이둘을 합치려면?
// const family = ["a", "b", "c"];
// // 이방식은 array자체가 두개가 하나의 array에 들어간다
// console.log("just array :", [friends, family]);
// // spread로 풀어해쳐서 합쳐주면? 하나의 배열이 되었다.
// console.log("use spread : ", [...friends, ...family]);

// // object도 마찬가지로 적용된다.

// const famName = {
//   firstName: "taeeon",
//   lastName: "lee",
// };
// const specLee = {
//   feet: 182.7,
//   lastName: "woo",
// };

// console.log("object spread : ", { ...famName, ...specLee });
// // 단 두 object가 같은 prop을 사용한다면 뒤의 object로 override된다.

// const friends = ["lee", "woo"];

// const newFriends = [...friends, "hee"];
// console.log(newFriends);
const firstName = prompt("first name: ");

const user = {
  username: "lee",
  age: 37,
  // firstName: firstName !== "" && firstName,
  ...(firstName !== "" && { firstName }),
};

console.log(user);
