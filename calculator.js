let input1;
let input2;
let operationInput;
const displayWindow = document.querySelector(".display-window");
let windowDisplayText = document.createElement("p");
windowDisplayText.setAttribute("class", "display-text");
windowDisplayText.innerText = "";
displayWindow.appendChild(windowDisplayText);
const clearButtonText = "C";

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

const calculatorButtonList = document.querySelectorAll(".calculator-Button");

// buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll("button");
console.log(calculatorButtonList);
// we use the .forEach method to iterate through each button
calculatorButtonList.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    captureButtonInput(button.innerHTML);
  });
});

captureButtonInput = (buttonPressed) => {
  console.log("the button pressed was " + buttonPressed);
  if (buttonPressed === clearButtonText) {
    windowDisplayText.innerText = "";
  } else {
    windowDisplayText.innerText += " " + buttonPressed;
  }
};

// the JavaScript file
// METHODS 2 & 3
function alertFunction(input1) {
  alert("YAY! YOU DID IT! " + input1);
}

// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
//   operateCalculator,
// };
