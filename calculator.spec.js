const calculator = require("./calculator");

describe("add", () => {
  test("works", () => {
    expect(calculator.add(10, 2)).toEqual(12);
  });
  test("works", () => {
    expect(calculator.add(8, 8)).toEqual(16);
  });
});

describe("substract", () => {
  test("works", () => {
    expect(calculator.subtract(2, 1)).toEqual(1);
  });
  test("works", () => {
    expect(calculator.subtract(10, 1)).toEqual(9);
  });
});

describe("multiply", () => {
  test("works", () => {
    expect(calculator.multiply(2, 1)).toEqual(2);
  });
  test("works", () => {
    expect(calculator.multiply(2, 2)).toEqual(4);
  });
});

describe("divide", () => {
  test("works", () => {
    expect(calculator.divide(4, 2)).toEqual(2);
  });
  test("works", () => {
    expect(calculator.divide(16, 2)).toEqual(8);
  });
});

describe("operate calculator", () => {
  test("works", () => {
    expect(calculator.operateCalculator(1, 2, "add")).toEqual(3);
  });
  test("works", () => {
    expect(calculator.operateCalculator(15, 2, "subtract")).toEqual(13);
  });
  test("works", () => {
    expect(calculator.operateCalculator(3, 4, "multiply")).toEqual(12);
  });
  test("works", () => {
    expect(calculator.operateCalculator(8, 2, "divide")).toEqual(4);
  });
});
