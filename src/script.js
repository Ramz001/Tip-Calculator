// Global variables
const peopleInput = document.querySelector("#number-people")
const billInput = document.querySelector("#number-sum")
const tips = document.querySelector(".tips")
const customTip = document.querySelector(".custom-tip")
const reset = document.querySelector(".reset")
const tipPerPerson = document.querySelector("#tip-per-person")
const totalPerPerson = document.querySelector("#total-per-person")
const error = document.querySelector(".error")

//Event Listeners
billInput.addEventListener("change",calculateTip)
customTip.addEventListener("change",calculateTip)
peopleInput.addEventListener("change",calculateTip)

function calculateTip(){
  let bill = parseFloat(billInput.value)
  let tipPercent = customTip.value
  let numberOfPeople = peopleInput.value

  billInput.value = bill.toFixed(2)

  let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2))
  let total = parseFloat((bill + totalTip).toFixed(2))
  tipPerPerson.textContent = parseFloat((totalTip / numberOfPeople).toFixed(2))
  totalPerPerson.textContent = parseFloat((total / numberOfPeople).toFixed(2))
}


