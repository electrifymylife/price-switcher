const annualDiscount = 20;
const basicPrice = 19.99;
const profPrice = 24.99;
const masterPrice = 39.99;

const monthPrice = document.querySelectorAll(".price__num");
const switcher = document.querySelector(".price__switcher-btn");

switcher.addEventListener("click", () => {
  switcher.toggleAttribute("checked");
  if (!switcher.hasAttribute("checked")) {
    setAnnualPrices();
  } else {
    setMonthlyPrices();
  }
})

const setMonthlyPrices = () => {
  monthPrice.forEach((price) => {
    if (price.classList.contains("basic")) {
      price.textContent = basicPrice;
    } else if (price.classList.contains("prof")) {
      price.textContent = profPrice;
    } else if (price.classList.contains("master")) {
      price.textContent = masterPrice;
    }
  })
}

const setAnnualPrices = () => {
  setMonthlyPrices();
  monthPrice.forEach((price) => {
    const newPrices = Math.round((+price.textContent*12) * ((100 - annualDiscount) / 100));
    price.textContent = newPrices;
  })
}

setMonthlyPrices();