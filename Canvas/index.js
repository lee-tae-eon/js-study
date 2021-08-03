const canvas = document.querySelector("#draw");
const drawRange = document.querySelector("#draw__range");
const drawColor = document.querySelector("#draw__color");
const delBtn = document.querySelector("#del_btn");

const ctx = canvas.getContext("2d");
// canvas.width = document.innerWidth;
// canvas.height = window.innerHeight;

ctx.strokeStyle = "#000";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = drawRange.value;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let lineThick = "5";
let lineColor = "";

const draw = (event) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
};

const handleLineWidth = (event) => {
  lineThick = event.target.value;
  ctx.lineWidth = lineThick;
};

const handleLineColor = (event) => {
  lineColor = event.target.value;
  ctx.strokeStyle = lineColor;
};

const handleDelete = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

delBtn.addEventListener("click", handleDelete);
drawRange.addEventListener("input", handleLineWidth);
drawColor.addEventListener("input", handleLineColor);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
