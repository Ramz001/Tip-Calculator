// Global variables
const peopleInput = document.querySelector("#number-people");
const billInput = document.querySelector("#number-sum");
const customTip = document.querySelector(".custom-tip");
const reset = document.querySelector(".reset");
const tipPerPerson = document.querySelector("#tip-per-person");
const totalPerPerson = document.querySelector("#total-per-person");
const error = document.querySelector(".error");

const fivePercent = document.getElementById("five-percent");
const tenPercent = document.getElementById("ten-percent");
const fifteenPercent = document.getElementById("fifteen-percent");
const twentyFivePercent = document.getElementById("twenty-five-percent");
const fiftyPercent = document.getElementById("fifty-percent");

let tipPercent = customTip.value;

//functions
const calculateTip = () => {
  const bill = parseFloat(billInput.value);
  const numberOfPeople = peopleInput.value;
  billInput.value = bill.toFixed(2);
  let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
  let total = parseFloat((bill + totalTip).toFixed(2));
  tipPerPerson.textContent = parseFloat((totalTip / numberOfPeople).toFixed(2));
  totalPerPerson.textContent = parseFloat((total / numberOfPeople).toFixed(2));
};

const handleClickFive = () => {
  tipPercent = 5;
  calculateTip();
  fivePercent.classList.toggle("button-active");

  fiftyPercent.classList.remove("button-active");
  twentyFivePercent.classList.remove("button-active");
  fifteenPercent.classList.remove("button-active");
  tenPercent.classList.remove("button-active");
};

const handleClickTen = () => {
  tipPercent = 10;
  calculateTip();
  tenPercent.classList.toggle("button-active");

  fiftyPercent.classList.remove("button-active");
  twentyFivePercent.classList.remove("button-active");
  fifteenPercent.classList.remove("button-active");
  fivePercent.classList.remove("button-active");
};

const handleClickFifteen = () => {
  tipPercent = 15;
  calculateTip();
  fifteenPercent.classList.toggle("button-active");

  fiftyPercent.classList.remove("button-active");
  twentyFivePercent.classList.remove("button-active");
  tenPercent.classList.remove("button-active");
  fivePercent.classList.remove("button-active");
};

const handleClickTwentyFive = () => {
  tipPercent = 25;
  calculateTip();
  twentyFivePercent.classList.toggle("button-active");

  fiftyPercent.classList.remove("button-active");
  fifteenPercent.classList.remove("button-active");
  tenPercent.classList.remove("button-active");
  fivePercent.classList.remove("button-active");
};

const handleClickFifty = () => {
  tipPercent = 50;
  calculateTip();
  fiftyPercent.classList.toggle("button-active");

  twentyFivePercent.classList.remove("button-active");
  fifteenPercent.classList.remove("button-active");
  tenPercent.classList.remove("button-active");
  fivePercent.classList.remove("button-active");
};

//Event Listeners
billInput.addEventListener("change", calculateTip);
customTip.addEventListener("change", calculateTip);

fivePercent.addEventListener("click", handleClickFive);
tenPercent.addEventListener("click", handleClickTen);
fifteenPercent.addEventListener("click", handleClickFifteen);
twentyFivePercent.addEventListener("click", handleClickTwentyFive);
fiftyPercent.addEventListener("click", handleClickFifty);

peopleInput.addEventListener("change", () => {
  if (peopleInput.value <= 0) {
    peopleInput.style.border = "solid red";
    error.classList.toggle("hidden");
  } else {
    peopleInput.style.border = "none";
    error.classList.add("hidden");
  }
  calculateTip();
});

reset.addEventListener("click", () => {
  peopleInput.value = 1;
  billInput.value = "";
  customTip.value = "custom";
  peopleInput.style.border = "border-2";
  error.classList.add("hidden");
});
