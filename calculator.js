

add = (num1, num2) =>  num1 + num2;

subtract = (num1, num2) =>  num1 - num2;

multiply = (num1, num2) =>  num1 * num2;

divide = (num1, num2) =>  num1 / num2;

// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
// Create three variables, one for each part of the operation. 
// You’ll use these variables to update your display later.
// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.



// const {convertToCelsius, convertToFahrenheit} = require('./tempConversion')

module.exports = {
    add,
    subtract,
    multiply,
    divide
  };