const metDay = document.querySelector(".header-text__p");

function getDays() {
  const today = new Date();
  const dDay = new Date("2021-08-03");
  const gap = today.getTime() - dDay.getTime();
  const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
  metDay.innerText = "만난지 " + result + "일 째";
}

function init() {
  getDays();
}

init();
