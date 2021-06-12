// Es6  Array.of() --------------------------------------

// const friends = ["lee", "woo", "gyeom", "tae"];

// const friends = Array.of("lee", "woo", "gyeom", "tae");

// console.log(friends);

// Es6 Array.from()--------------------------------------
// button 10개를 만들고  각각의 버튼에 이벤트 리스너를 붙여보자
// className으로 셀렉한 버튼들을 담은 buttons는 배열이 아닌 array-like object이다
// 그래서 Array로 변환을 해줘야 forEach같은 function이 적용이 된다.

// const buttons = document.getElementsByClassName("btn");

// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", () => console.log("i ve been clicked"));
// });

// ES6 Array.find() --------------------------------------

const friends = [
  "lee@naver.com",
  "tae@google.com",
  "eon@gmail.com",
  "woo@daum.net",
  "hui@kimchi.net",
];

friends.fill("*".repeat(5), 0, 1);

console.log(friends);
