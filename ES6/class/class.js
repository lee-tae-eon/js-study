// class Counter {
//   constructor({ initialNumber = 0, counterId, plusId, minusId }) {
//     this.count = initialNumber;
//     this.counter = document.getElementById(counterId);
//     this.counter.innerHTML = initialNumber;
//     this.plusBtn = document.getElementById(plusId);
//     this.minusBtn = document.getElementById(minusId);
//     this.addEventListners();
//   }
//   addEventListners = () => {
//     console.log(this);
//     this.plusBtn.addEventListener("click", this.increase);
//     this.minusBtn.addEventListener("click", this.decrease);
//   };
//   repaintCount = () => {
//     this.counter.innerText = this.count;
//   };
//   increase = () => {
//     this.count = this.count + 1;
//     this.repaintCount();
//   };
//   decrease = () => {
//     this.count = this.count - 1;
//     this.repaintCount();
//   };
// }

// new Counter({ counterId: "count", plusId: "add", minusId: "minus" });
// new Counter({
//   initialNumber: 100,
//   counterId: "count2",
//   plusId: "add2",
//   minusId: "minus2",
// });
