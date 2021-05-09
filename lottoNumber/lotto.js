const body = document.querySelector("body");
const input = document.querySelector("input");
const h3 = document.createElement("h3");

body.appendChild(h3);

function lottoNumCreator() {
  const lotto = [];
  let i = 0;
  for (i = 0; i <= 5; i++) {
    const lottoNum = Math.floor(Math.random() * 45) + 1;
    if (
      !lottoNumConfirm(function (num) {
        for (i = 0; i < lotto.length; i++) {
          if (num === lotto[i]) {
            return true;
          }
        }
        return false;
      })
    ) {
      lotto.push(lottoNum);
    }
  }
  function lottoNumConfirm(num) {
    for (i = 0; i < lotto.length; i++) {
      if (num === lotto[i]) {
        return true;
      }
      ``;
    }
    return false;
  }
  return (h3.innerText = lotto.sort(function (a, b) {
    return a - b;
  }));
}

input.addEventListener("click", lottoNumCreator);
