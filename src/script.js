// Global variables
const peopleInput = document.querySelector("#number-people");
const billInput = document.querySelector("#number-sum");
const customTip = document.querySelector(".custom-tip");
const reset = document.querySelector(".reset");
const tipPerPerson = document.querySelector("#tip-per-person");
const totalPerPerson = document.querySelector("#total-per-person");
const error = document.querySelector(".error");
const btns = document.querySelectorAll(".button");

let tipPercent = 0;

//Main calculation 
const calculateTip = () => {
  const bill = parseFloat(billInput.value);
  const numberOfPeople = peopleInput.value;
  billInput.value = bill.toFixed(2);
  let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
  let total = parseFloat((bill + totalTip).toFixed(2));
  tipPerPerson.textContent = parseFloat((totalTip / numberOfPeople).toFixed(2));
  totalPerPerson.textContent = parseFloat((total / numberOfPeople).toFixed(2));
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipPercent = Number(btn.dataset.value);
    calculateTip();
    customDeactive();
    btnsDeactive();
    btn.classList.toggle("button-active");
  });
});

//================
// Event Listeners
//================
billInput.addEventListener("change", calculateTip);
customTip.addEventListener("change", () => {
  tipPercent = customTip.value;
  calculateTip();
  btnsDeactive();
});

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

//reset button
reset.addEventListener("click", () => {
  peopleInput.value = 1;
  billInput.value = "";
  peopleInput.style.border = "border-2";
  tipPerPerson.textContent = "0.00";
  totalPerPerson.textContent = "0.00";
  error.classList.add("hidden");
  btnsDeactive();
  customDeactive();
});

function customDeactive() {
  return (customTip.value = "custom");
}

function btnsDeactive() {
  return btns.forEach((btn) => btn.classList.remove("button-active"));
}
