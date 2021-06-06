// Object destructuring ---------------------------------------------------------------------------------------------------------
// const settings = {
//   notifications: {
//     follow: true,
//     alerts: true,
//     unfollow: false,
//   },
//   color: {
//     theme: "dark",
//   },
// };
// // old version
// // if (settings.notifications.follow) {
// //   // order~
// // }

// const { notifications: { follow = false } = {} } = settings;
// console.log(notifications);
//---------------------------------------------------------------------------------------------------------------------------------

// Array Destructuring ------------------------------------------------------------------------------------------------------------
// const days = ["Mon", "Tues", "Wed"];
// // let i = 0;
// // for (i = 0; i < 3; i++) {
// //   console.log(days[i]);
// // }
// const [mon, tues, wed, thu = "Thur"] = days;
// console.log(mon, tues, wed, thu);
//----------------------------------------------------------------------------------------------------------------------------------

// Renaming ------------------------------------------------------------------------------------------------------------------------
// 예를 들어 다른 api로부터 데이터를 받았는데 renaming이 필요하다면
// const settings = {
//   color: {
//     chosen_color: "dark",
//   },
// };

// chosen_color를 chosenColor로 renaming해준다. let도 잘된다.
// const {
//   color: { chosen_color: chosenColor = "light" },
// } = settings;
// suck
// const chosenColor = settings.color.chosen_color || "light";

// // 위의 다른 형태 let변수를 따로 선언했다면 해당 코드를 괄호로 감싸주자
// // 괄호로 감싸면 해당 let변수를 업데이트 한다.
// let chosenColor = "light";

// ({
//   color: { chosen_color: chosenColor = "light" },
// } = settings);

// console.log(chosenColor);
//----------------------------------------------------------------------------------------------------------------------------------

// function destructuring-----------------------------------------------------------------------------------------------------------
// 유저 세팅을 저장하는 함수 saveSettings
// function saveSettings({ follow, alert, mkt, color = "blue" }) {
//   console.log(color);
// }
// saveSettings({
//   follow: true,
//   alert: true,
//   mkt: true,
//   color: "green",
// });
//----------------------------------------------------------------------------------------------------------------------------------

// value shorthands-----------------------------------------------------------------------------------------------------------------

// const follow = checkFollow();
// const alert = checkAlert();

// const settings = {
//   notification: {
//     follow,
//     alert,
//   }
// }
//----------------------------------------------------------------------------------------------------------------------------------

// Swapping and Skipping------------------------------------------------------------------------------------------------------------

//swapping
let mon = "Sat";
let sat = "Mon";

[mon, sat] = [sat, mon];

console.log(mon, sat);

//skipping
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const [, , , thu, fri] = days;

console.log(thu, fri);
