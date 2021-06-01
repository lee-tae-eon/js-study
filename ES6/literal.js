//-------------ES& literal html fragment ---------------

// const wrapper = document.querySelector(".wrapper");

// const addWelcome = () => {
// 기존 엘레멘트 추가방식
// const div = document.createElement("div");
// const h1 = document.createElement("h1");
// h1.innerText = "hello";
// div.append(h1);

// es6 literal - 백틱은 줄바꿈도 인식
//   const div = `
//     <div class= "hello">
//       <h1 class="title">hello</h1>
//     </div>
//   `;
//   wrapper.innerHTML = div;
// };

// setTimeout(addWelcome, 2000);

// const friends = ["me", "lynn", "lee", "woo"];

// const list = `
//   <h1>People i love</h1>
//   <ul>
//     ${friends.map((friend) => `<li>${friend}</li>`).join(" ")}
//   </ul>
// `;
// wrapper.innerHTML = list;

//-----------ES6 literal Cloning styled component---------------------------------------------------------------------------------------
// styled components is package or library for react
// styled components는 js에서 css를 쓸수 있고 html을 얻을 수 있다.
// ``를 이용해서 만들어본다.

// const styled = (aElement) => {
//   const el = document.createElement(aElement);
//   return (args) => {
//     const styles = args[0];
//     el.style = styles;
//     return el;
//   };
// };

// const title = styled("h1")`
//   background-color: wheat;
//   color: blue;
// `;

// const subtitle = styled("span")`
//   color: green;
// `;

// title.innerText = "We cloned";
// subtitle.innerText = "Styled Component";

// document.body.append(title, subtitle);

// ----------- ES6 More String Method ---------------------
// 1. includes()
// const isEmail = (email) => email.includes("@");

// console.log(isEmail("lee@naver.com"));

// 2. repeat()
// const creditCardNumber = "6060";

// const displayName = `${"*".repeat(10)}${creditCardNumber}`;

// console.log(displayName);

// 3. startsWith()  && endsWith()
const name = "Lee-Tae-Eon";

console.log(name.startsWith("L"));
