import { calculatorOperations } from "./calculator";

describe("Calculator Operations", () => {
  describe("add", () => {
    test("should add two positive numbers", () => {
      expect(calculatorOperations.add(2, 3)).toBe(5);
    });

    test("should handle negative numbers", () => {
      expect(calculatorOperations.add(-2, 3)).toBe(1);
    });
  });

  describe("subtract", () => {
    test("should subtract two numbers", () => {
      expect(calculatorOperations.subtract(5, 3)).toBe(2);
    });

    test("should handle negative result", () => {
      expect(calculatorOperations.subtract(3, 5)).toBe(-2);
    });
  });

  describe("multiply", () => {
    test("should multiply two numbers", () => {
      expect(calculatorOperations.multiply(4, 3)).toBe(12);
    });

    test("should handle zero", () => {
      expect(calculatorOperations.multiply(5, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    test("should divide two numbers", () => {
      expect(calculatorOperations.divide(6, 2)).toBe(3);
    });

    test("should handle division by zero", () => {
      expect(calculatorOperations.divide(5, 0)).toBe("Error");
    });
  });
});
