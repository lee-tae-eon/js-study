// function* listPeople() {
//   yield "lee";
//   yield "tae";
//   yield "eon";
//   yield "woo";
// }

// const list = listPeople();

// console.log(list.next());
// console.log(list.next());
// console.log(list.next());
// console.log(list.next());
// console.log(list.next());
// console.log(list.next());

// const friends = ["lee", "woo", "kim", "park"];

// function* friendTell() {
//   for (const friend of friends) {
//     yield friend;
//   }
// }

// const friendLoop = friendTell();

// console.log(friendLoop.next());
// console.log(friendLoop.next());
// console.log(friendLoop.next());
// console.log(friendLoop.next());
// console.log(friendLoop.next());
// console.log(friendLoop.next());
//------------------------------------------------------

// const userObj = {
//   username: "lee",
//   age: 37,
//   password: 123,
// };

// const userFilter = {
//   get: (target, prop, receiver) => {
//     return prop === "password" ? `${"*".repeat(5)}` : target[prop];
//   },
//   set: () => {
//     console.log("set");
//   },
//   deleteProperty: (target, prop) => {
//     if (prop === "password") {
//       return;
//     } else {
//       target[prop] = "DELETED";
//     }
//   },
// };

// const filterUser = new Proxy(userObj, userFilter);

// delete filterUser.password;
// console.log(filterUser);
// delete filterUser.age;
// console.log(filterUser);

// console.log(userObj);
