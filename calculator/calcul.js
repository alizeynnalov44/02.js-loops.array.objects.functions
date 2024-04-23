const addition = document.querySelector(".addition")
const substract = document.querySelector(".substract")
const multiply = document.querySelector(".multiply")
const division = document.querySelector(".division")
const reset = document.querySelector(".reset")
const sums = document.querySelector(".sums")
const value1 = document.querySelector(".value1")
const value2 = document.querySelector(".value2")
addition.addEventListener("click", (e) => {
    let sum = +value1.value + +value2.value;
    sums.textContent = sum
})
substract.addEventListener("click", (e) => {
    let sum = +value1.value - +value2.value;
    sums.textContent = sum
})
multiply.addEventListener("click", (e) => {
    let sum = +value1.value * +value2.value;
    sums.textContent = sum
})
division.addEventListener("click", (e) => {
    let sum = +value1.value / +value2.value;
    sums.textContent = sum
})
reset.addEventListener("click", (e) => {
    value1.value = ""
    value2.value = ""
})