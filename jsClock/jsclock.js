const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const currentDate = new Date();
  const currentSeconds = currentDate.getSeconds();
  const secondsDegrees = (currentSeconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const currentMinutes = currentDate.getMinutes();
  const minuteDegress = (currentMinutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegress}deg)`;

  const currentHour = currentDate.getHours();
  const hourDegrees = (currentHour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
