// const {convertToCelsius, convertToFahrenheit} = require('./tempConversion')
const { add, subtract, multiply, divide } = require("./calculator");

describe("add", () => {
  test("works", () => {
    expect(add(10, 2)).toEqual(12);
  });
  test("works", () => {
    expect(add(8, 8)).toEqual(16);
  });
});

describe("substract", () => {
  test("works", () => {
    expect(subtract(2, 1)).toEqual(2);
  });
  test("works", () => {
    expect(subtract(10, 1)).toEqual(9);
  });
});

describe("multiply", () => {
  test("works", () => {
    expect(multiply(2, 1)).toEqual(2);
  });
  test("works", () => {
    expect(multiply(2, 2)).toEqual(4);
  });
});

describe("divide", () => {
  test("works", () => {
    expect(divide(4, 2)).toEqual(2);
  });
  test("works", () => {
    expect(divide(16, 2)).toEqual(8);
  });
});
