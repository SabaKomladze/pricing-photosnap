const burger = document.getElementById("menu");
const navbar = document.getElementsByClassName("nav")[0];
const close = document.getElementById("close");
const toggle = document.getElementById("toggle");
let isYearly = false;
const price = document.getElementsByClassName("number");
const monthlyPriceOne = price[0].innerHTML;
const monthlyPriceTwo = price[1].innerHTML;
const monthlyPriceThree = price[2].innerHTML;
const monthtofyear = document.getElementsByClassName("monthtofyear");
const monthtofyearsecond = document.getElementsByClassName(
  "monthtofyear-second"
);
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
function makeYearly() {
  if (isYearly) {
    for (let i = 0; i < price.length; i++) {
      price[i].innerHTML *= 10;
    }
    monthtofyear[0].innerHTML = "year";
    monthtofyear[1].innerHTML = "year";
    monthtofyearsecond[0].innerHTML = "year";
  } else {
    price[0].innerHTML = monthlyPriceOne;
    price[1].innerHTML = monthlyPriceTwo;
    price[2].innerHTML = monthlyPriceThree;
    monthtofyear[0].innerHTML = "month";
    monthtofyear[1].innerHTML = "month";
    monthtofyearsecond[0].innerHTML = "month";
  }
}
