const editScreen = document.querySelector(".screen--edit");
const resultScreen = document.querySelector(".screen--result");
const keypad = document.querySelector(".keypad");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// divide() returns a string
const divide = function (a, b) {
  if (b === 0) return "Cannot divide by zero";

  return (a / b).toFixed(2);
};

const operate = function (operator, a, b) {
  let result;
  switch (operator) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
  }

  return result;
};

let displayValue = "";

keypad.addEventListener("click", function (e) {
  if (e.target.classList.contains("key") && e.target.dataset.type === "digit") {
    let key = e.target.dataset.key;
    if (key === "." && displayValue.includes(".")) return;
    displayValue = displayValue.concat(key);
    editScreen.textContent = displayValue;
  }
});

const clear = function () {
  displayValue = "";
  editScreen.textContent = displayValue;
};

const del = function () {
  if (displayValue === "") return;

  let temp = displayValue.split("");
  temp.pop();
  displayValue = temp.join("");
  editScreen.textContent = displayValue;
};

deleteButton.addEventListener("click", del);
clearButton.addEventListener("click", clear);
