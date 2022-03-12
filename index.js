const screen = document.querySelector(".screen");
const keypad = document.querySelector(".keypad");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const operatorButtons = document.querySelectorAll('.key[data-type="operator"]');
const equalsButton = document.querySelector("#equals");

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
let firstNumber;
let operator;
let result;
let isOperatorClicked = false;
let executeSummary;

// digit button
keypad.addEventListener("click", function (e) {
  if (e.target.classList.contains("key") && e.target.dataset.type === "digit") {
    let key = e.target.dataset.key;
    if (key === "." && displayValue.includes(".")) return;

    displayValue = displayValue.concat(key);
    screen.textContent = displayValue;
  }
});

const handleOperator = function () {
  if (isOperatorClicked) execute();
  firstNumber = Number(screen.textContent);
  operator = this.dataset.key;
  displayValue = "";
  isOperatorClicked = true;
};

const execute = function () {
  if (
    displayValue === "" ||
    firstNumber === undefined ||
    operator === undefined
  )
    return;
  const secondNumber = Number(displayValue);
  result = operate(operator, firstNumber, secondNumber);
  isOperatorClicked = false;

  executeSummary = `EXECUTED: 
    firstNumber: ${firstNumber}, 
    secondNumber: ${secondNumber}, 
    operator: ${operator}, 
    result: ${result}`;
  screen.textContent = result;
  displayValue = "";
  firstNumber = result;
};

operatorButtons.forEach((button) =>
  button.addEventListener("click", handleOperator)
);

equalsButton.addEventListener("click", execute);

// Clear button
const clear = function () {
  displayValue = "";
  screen.textContent = displayValue;
  isOperatorClicked = false;
};

// Backspace button
const del = function () {
  if (displayValue === "") return;

  let temp = displayValue.split("");
  temp.pop();
  displayValue = temp.join("");
  screen.textContent = displayValue;
};

deleteButton.addEventListener("click", del);
clearButton.addEventListener("click", clear);

keypad.addEventListener("click", function () {
  console.clear();
  console.log("displayValue: ", displayValue);
  console.log("firstNumber: ", firstNumber);
  console.log("operator: ", operator);
  console.log("result: ", result);
  console.log("isOperatorClicked: ", isOperatorClicked);
  console.log("----------------------");
  console.log(executeSummary);
});
