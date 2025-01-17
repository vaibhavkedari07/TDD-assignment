import { OperationType } from "../types/calculator";

export const calculatorOperations = {
  add: (a: number, b: number): number => a + b,
  subtract: (a: number, b: number): number => a - b,
  multiply: (a: number, b: number): number => a * b,
  divide: (a: number, b: number): number | string => {
    if (b === 0) return "Error";
    return a / b;
  },
};

export const calculateResult = (
  operation: OperationType,
  a: number,
  b: number
): number | string => {
  switch (operation) {
    case "+":
      return calculatorOperations.add(a, b);
    case "-":
      return calculatorOperations.subtract(a, b);
    case "*":
      return calculatorOperations.multiply(a, b);
    case "/":
      return calculatorOperations.divide(a, b);
    default:
      return b;
  }
};
