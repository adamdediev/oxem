const carPriceSlider = document.querySelector("#carPriceSlider");
const downPaymentSlider = document.querySelector("#downPaymentSlider");
const leaseTermSlider = document.querySelector("#leaseTermSlider");

const carPriceValue = document.querySelector("#carPriceValue");
const downPaymentValue = document.querySelector("#downPaymentValue");
const leaseTermValue = document.querySelector("#leaseTermValue");

const initialPaymentValue = document.querySelector("#initialPaymentValue");
const monthlyPaymentValue = document.querySelector("#monthlyPaymentValue");
const totalCostValue = document.querySelector("#totalCostValue");

const minCarPrice = 1000000;
const maxCarPrice = 6000000;
const minDownPayment = 10;
const maxDownPayment = 60;
const minLeaseTerm = 1;
const maxLeaseTerm = 60;

const calculateValues = () => {
  const carPrice = Number(carPriceSlider.value);
  const downPayment = carPrice * Number(downPaymentSlider.value) / 100;
  const leaseTerm = Number(leaseTermSlider.value);
  const monthlyInterestRate = 0.05 / 12;

  const initialPayment = downPayment;
  const monthlyPayment = carPrice - downPayment * (monthlyInterestRate / (1 - (1 + monthlyInterestRate) ** (-leaseTerm)));
  const totalCost = downPayment + monthlyPayment * leaseTerm;

  initialPaymentValue.innerHTML = `$${initialPayment.toFixed(2)}`;
  monthlyPaymentValue.innerHTML = `$${monthlyPayment.toFixed(2)}`;
  totalCostValue.innerHTML = `$${totalCost.toFixed(2)}`;
};

carPriceSlider.addEventListener("input", () => {
  carPriceValue.innerHTML = `$${Number(carPriceSlider.value).toLocaleString()}`;
  const carPriceBgColor = "#ddd";
  carPriceSlider.style.background = `linear-gradient(to right, #f39c12, #f39c12 ${((carPriceSlider.value - minCarPrice) / (maxCarPrice - minCarPrice)) * 100}%, ${carPriceBgColor} ${((carPriceSlider.value - minCarPrice) / (maxCarPrice - minCarPrice)) * 100}%)`;
  calculateValues();
});

downPaymentSlider.addEventListener("input", () => {
  downPaymentValue.innerHTML = `${Number(downPaymentSlider.value).toLocaleString()}%`;
  const downPaymentBgColor = "#ddd";
  downPaymentSlider.style.background = `linear-gradient(to right, #f39c12, #f39c12 ${((downPaymentSlider.value - minDownPayment) / (maxDownPayment - minDownPayment)) * 100}%, ${downPaymentBgColor} ${((downPaymentSlider.value - minDownPayment) / (maxDownPayment - minDownPayment)) * 100}%)`;
  calculateValues();
});

leaseTermSlider.addEventListener("input", () => {
  leaseTermValue.innerHTML = `${Number(leaseTermSlider.value)} months`;
  const leaseTermBgColor = "#ddd";
  leaseTermSlider.style.background = `linear-gradient(to right, #f39c12, #f39c12 ${((leaseTermSlider.value - minLeaseTerm) / (maxLeaseTerm - minLeaseTerm)) * 100}%, ${leaseTermBgColor} ${((leaseTermSlider.value - minLeaseTerm) / (maxLeaseTerm - minLeaseTerm)) * 100}%)`;
  calculateValues();
});

calculateValues();
