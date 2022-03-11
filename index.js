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
    case "plus":
      result = add(a, b);
      break;
    case "minus":
      result = subtract(a, b);
      break;
    case "times":
      result = multiply(a, b);
      break;
    case "slash":
      result = divide(a, b);
      break;
  }

  return result;
};
