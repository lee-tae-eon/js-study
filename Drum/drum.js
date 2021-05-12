function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (!audio) return; // stip the function running all together
  audio.currentTime = 0; // rewind th the start
  audio.play();
  // key.addClass("playing"); // jquery
  key.classList.add("playing"); // css에서 설정해준 키보드 변화값을 클래스명으로 준다.
}

function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
//각키마다 forEach로 addeventLisnter를 실행해 주는데
// transition이 끝나면 removeTrasnition이라는 함수를 실행해줘서
// css 효과를 없애준다.
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
