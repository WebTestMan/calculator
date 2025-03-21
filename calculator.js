const displayWindow = document.querySelector(".display-window");
let windowDisplayText = document.createElement("p");
windowDisplayText.setAttribute("class", "display-text");
windowDisplayText.innerText = "";
displayWindow.appendChild(windowDisplayText);
const clearButtonText = "C";
const equalButtonText = "=";
let leftButtonInput = "";
let rightButtonInput = "";
let operationInput;
let leftSideInput = true;
const operationButtonArray = ["+", "-", "*", "/"];
const buttonInputArray = [];

add = (num1, num2) => num1 + num2;

subtract = (num1, num2) => num1 - num2;

multiply = (num1, num2) => num1 * num2;

divide = (num1, num2) => num1 / num2;

operate = (leftButtonInput, rightButtonInput, operationInput) => {
  console.log(
    `The operation is ${leftButtonInput} ${operationInput} ${rightButtonInput}`
  );
  switch (operationInput) {
    case "+":
      return add(leftButtonInput, rightButtonInput);
    case "-":
      return subtract(leftButtonInput, rightButtonInput);
    case "*":
      return multiply(leftButtonInput, rightButtonInput);
    case "/":
      return divide(leftButtonInput, rightButtonInput);
  }
};

const calculatorButtonList = document.querySelectorAll(".calculator-Button");
calculatorButtonList.forEach((button) => {
  button.addEventListener("click", () => {
    captureButtonInput(button.innerHTML);
  });
});

captureButtonInput = (buttonPressed) => {
  console.log("the button pressed was " + buttonPressed);
  if (buttonPressed === clearButtonText) {
    windowDisplayText.innerText = "";
    leftButtonInput = "";
    rightButtonInput = "";
    operationInput = "";
    leftSideInput = true;
  } else if (buttonPressed === equalButtonText) {
    calculationResult = operate(
      Number(leftButtonInput),
      Number(rightButtonInput),
      operationInput
    );
    windowDisplayText.innerText = calculationResult;
    leftButtonInput = calculationResult;
    rightButtonInput = "";
    operationInput = "";
    console.log(operationInput);
    calculationResult = "";
    console.log(calculationResult);
    leftSideInput = true;
  } else if (operationButtonArray.includes(buttonPressed)) {
    if (operationInput) {
      calculationResult = operate(
        Number(leftButtonInput),
        Number(rightButtonInput),
        operationInput
      );
      windowDisplayText.innerText = calculationResult;
      leftButtonInput = calculationResult;
      rightButtonInput = "";
      calculationResult = "";
    }
    operationInput = buttonPressed;
    console.log(`The operation button pressed is ' ${buttonPressed} '.`);
    windowDisplayText.innerText += buttonPressed;
    leftSideInput = false;
  } else {
    if (leftSideInput === true) {
      leftButtonInput += buttonPressed;
      windowDisplayText.innerText += buttonPressed;
      console.log(
        `The number button pressed was ${buttonPressed}, the current left side input is ${leftButtonInput}`
      );
    } else {
      rightButtonInput += buttonPressed;
      windowDisplayText.innerText += buttonPressed;
      console.log(
        `The number button pressed was ${buttonPressed}, the current right side input is ${rightButtonInput}`
      );
    }
  }
};

// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
//   operateCalculator,
// };
