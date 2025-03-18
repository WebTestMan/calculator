let input1;
let input2;
let operationInput;

add = (num1, num2) => num1 + num2;

subtract = (num1, num2) => num1 - num2;

multiply = (num1, num2) => num1 * num2;

divide = (num1, num2) => num1 / num2;

operateCalculator = (input1, input2, operationInput) => {
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

// Create a basic HTML calculator with buttons for each digit and operator (including =).
// Don’t worry about making them functional just yet.
// There should also be a display for the calculator.
// Go ahead and fill it with some dummy numbers so it looks correct.
// Add a “clear” button.

const calculatorDisplay = document.querySelector("#calculator-display");
const calculatorRectangle = document.createElement("div");
const calculatorDisplayWindow = document.createElement("div");
const calculatorButtonGrid = document.createElement("div");

//calculatorDisplay.innerHTML = "";
calculatorButtonGrid.setAttribute('class', 'button-grid');

// function createGrid() {
// calculatorButtonGrid.innerHTML = "";

for (let i = 0; i < 10; i++) {
  const calculatorButton = document.createElement("button");
  calculatorButton.classList.add("calculator-Button");
  calculatorButton.innerText = i;
  calculatorButtonGrid.appendChild(calculatorButton);
}
calculatorRectangle.appendChild(calculatorDisplayWindow);
calculatorRectangle.appendChild(calculatorButtonGrid);
calculatorDisplay.appendChild(calculatorRectangle);
// }

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operateCalculator,
};
