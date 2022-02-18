// Global variables
const peopleInput = document.querySelector("#number-people")
const billInput = document.querySelector("#number-sum")
const tips = document.querySelector(".tips")
const customTip = document.querySelector(".custom-tip")
const reset = document.querySelector(".reset")
const tipPerPerson = document.querySelector("#tip-per-person")
const totalPerPerson = document.querySelector("#total-per-person")
const error = document.querySelector(".error")

let billValue = 0.0
let numberOfPeople = 1

billValue = (billInput.value).toFixed(2)
numberOfPeople = peopleInput.value

const calculateTip =()=>{
   return billAmount * numberPeople
}