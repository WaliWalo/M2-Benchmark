let h3 = document.querySelector(".discounts h3");
let timer = document.querySelectorAll(".timer");
let countDownDate = new Date("Jan 5, 2021 17:37:25").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  h3.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  timer.forEach((element) => {
    element.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  });
});
