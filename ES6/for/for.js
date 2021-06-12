// const friends = ["lee", "woo", "geom", "hui", "a", "b", "c", "d", "e"];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// friends.forEach((friend) => console.log(friend));

// for (let friend of friends) {
//   console.log(friend);
// }

// 루프를 멈추는 것도 가능하다
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [1, 2, 3];
iterable.foo = "hello";

console.log(iterable);
