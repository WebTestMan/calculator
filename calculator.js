let input1;
let input2;
let operationInput;

add = (num1, num2) => num1 + num2;

subtract = (num1, num2) => num1 - num2;

multiply = (num1, num2) => num1 * num2;

divide = (num1, num2) => num1 / num2;

operate = (input1, input2, operationInput) => {
  switch (operationInput) {
    case "add":
      return add(input1, input2);
    case "subtract":
      return subtract(input1, input2);
    case "multiply":
      return multiply(input1, input2);
    case "divide":
      return divide(input1, input2);
  }
};

const calculatorButton = document.querySelectorAll('.calculator-Button');






// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
//   operateCalculator,
// };
