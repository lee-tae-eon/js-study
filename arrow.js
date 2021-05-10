const emails = [
  "gyeom@gmail.com",
  "eon@google.com",
  "tate@gmail.com",
  "lee@naver.com",
  "lee@lee.com",
];

// const clean = [];

const noGmail = emails.forEach((email) => email.split("@")[0]);

// const noGmail = emails.map((email, index) => ({
//   usename: email.split("@")[0],
//   index,
// }));

console.log(noGmail);
