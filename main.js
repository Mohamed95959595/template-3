// A- animation on section "skills"
let section = document.querySelector("#skills");
let spans = document.querySelectorAll("#skills .progress-line");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // C- animation on section "Stats"
  if (window.scrollY >= statSectionEle.offsetTop - 100) {
    generatorFunc(); 
  }
};

//!-----------------------------------------------------------------
// B- animation on section "latest events"
// the date from now to end year (countdown)
let endYearDate = new Date("12-31-2023 23:59:59");

let counter = setInterval(() => {
  let dateNow = new Date();
  let dateDiff = endYearDate - dateNow;

  // days
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

  // hours
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

  // minutes
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  // seconds
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
//!-----------------------------------------------------------------
// C- animation on section "Stats"
//Select Elements
let statSectionEle = document.querySelector(".stats");
let statElements = document.querySelectorAll(".stats .stat-num");

function generatorFunc() {
  statElements.forEach(function (ele) {
    let Num = Number(ele.innerHTML);
    let goal = Number(ele.dataset.goal);
    let counter = setInterval(() => {
      Num += 1;
      if (Num <= goal) {
        ele.innerHTML = Num;
      } else {
        clearInterval(counter);
      }
    }, 2000 / goal);
  });
}
