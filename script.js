const burger = document.getElementById("menu");
const navbar = document.getElementsByClassName("nav")[0];
const close = document.getElementById("close");
const toggle = document.getElementById("toggle");
let isYearly = false;
const price = document.getElementsByClassName("number");
const monthlyPriceOne = price[0].innerHTML;
const monthlyPriceTwo = price[1].innerHTML;
const monthlyPriceThree = price[2].innerHTML;

burger.addEventListener("click", function () {
  navbar.style.display = "block";
  burger.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  navbar.style.display = "none";
  burger.style.display = "block";
  close.style.display = "none";
});

toggle.addEventListener("change", function changePrice() {
  if (isYearly == false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  makeYearly();
});

function changePrice() {}

function makeYearly() {
  if (isYearly) {
    price[0].innerHTML *= 10;
    price[1].innerHTML *= 10;
    price[2].innerHTML *= 10;
  } else {
    price[0].innerHTML = monthlyPriceOne;
    price[1].innerHTML = monthlyPriceTwo;
    price[2].innerHTML = monthlyPriceThree;
  }
}
