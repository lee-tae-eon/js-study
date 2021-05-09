const body = document.querySelector("body");
const nightInput = document.querySelector(".night--day__button");
const linkTag = document.querySelectorAll("a");

function linksSetColor(color) {
  let link = 0;
  for (link = 0; link < linkTag.length; link++) {
    linkTag[link].style.color = color;
  }
}
const bodyColor = {
  bodySetColor: function (color) {
    body.style.color = color;
  },
  bodyBackColor: function (color) {
    body.style.backgroundColor = color;
  },
};

function handleNightDay(event) {
  event.preventDefault();

  if (this.value === "night") {
    bodyColor.bodyBackColor("black");
    bodyColor.bodySetColor("white");
    this.value = "day";
    linksSetColor("red");
  } else if (this.value === "day") {
    bodyColor.bodyBackColor("white");
    bodyColor.bodySetColor("black");
    this.value = "night";
    linksSetColor("powderblue");
  }
}

// nightInput.onclick = handleNight;
nightInput.addEventListener("click", handleNightDay);
