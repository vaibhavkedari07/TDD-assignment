import { useState } from "react";

type OperationType = "+" | "-" | "*" | "/" | "";

const Calculator = () => {
  const [display, setDisplay] = useState<string>("0");
  const [equation, setEquation] = useState<string>("");
  const [newNumber, setNewNumber] = useState<boolean>(true);
  const [firstOperand, setFirstOperand] = useState<number>(0);
  const [operation, setOperation] = useState<OperationType>("");
  const [lastResult, setLastResult] = useState<number>(0);
  const [hasOperation, setHasOperation] = useState<boolean>(false);

  const handleNumber = (num: string): void => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      if (num === "." && display.includes(".")) return;
      setDisplay(display + num);
    }
  };

  const add = (a: number, b: number) => {
    return a + b;
  };

  const subtract = (a: number, b: number) => {};

  const multiply = (a: number, b: number) => {};

  const divide = (a: number, b: number) => {};

  const handleOperator = (op: OperationType): void => {
    const currentValue = parseFloat(display);

    if (hasOperation) {
      const result = calculateResult(lastResult || firstOperand, currentValue);
      setLastResult(Number(result));
      setDisplay(result.toString());
      setEquation(`${result} ${op}`);
    } else {
      setLastResult(currentValue);
      setEquation(`${currentValue} ${op}`);
    }

    setFirstOperand(currentValue);
    setOperation(op);
    setNewNumber(true);
    setHasOperation(true);
  };

  const calculateResult = (a: number, b: number): any => {
    switch (operation) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      default:
        return b;
    }
  };

  const handleEquals = (): void => {
    const secondOperand = parseFloat(display);
    const result = calculateResult(lastResult || firstOperand, secondOperand);

    setEquation(`${equation} ${secondOperand} =`);
    setDisplay(result.toString());
    setNewNumber(true);
    setHasOperation(false);
    setLastResult(0);
  };

  const handleClear = (): void => {
    setDisplay("0");
    setEquation("");
    setNewNumber(true);
    setFirstOperand(0);
    setOperation("");
    setLastResult(0);
    setHasOperation(false);
  };

  return (
    <div className="grid grid-cols-4" data-testid="calculator">
      <div className="col-span-1"></div>
      <div className="col-span-2 h-screen max-h-[80vh]">
        <div className="flex flex-col justify-start p-8 my-8 w-full h-full bg-gray-800 rounded-2xl shadow-xl">
          <div className="bg-gray-700 p-4 rounded-xl mb-4">
            <div className="text-gray-400 h-6 text-right text-sm">
              {equation}
            </div>
            <div
              className="text-white text-right text-4xl font-semibold overflow-hidden"
              data-testid="display"
            >
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 flex-1">
            <button
              onClick={handleClear}
              className="col-span-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg p-4 text-xl"
            >
              AC
            </button>
            <button
              onClick={() => handleOperator("/")}
              className="bg-orange-500 hover:bg-orange-400 text-white rounded-lg p-4 text-xl"
            >
              ÷
            </button>
            <button
              onClick={() => handleOperator("*")}
              className="bg-orange-500 hover:bg-orange-400 text-white rounded-lg p-4 text-xl"
            >
              ×
            </button>

            <button
              onClick={() => handleNumber("7")}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
            >
              7
            </button>
            <button
              onClick={() => handleNumber("8")}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
            >
              8
            </button>
            <button
              onClick={() => handleNumber("9")}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
            >
              9
            </button>
            <button
              onClick={() => handleOperator("-")}
              className="bg-orange-500 hover:bg-orange-400 text-white rounded-lg p-4 text-xl"
            >
              -
            </button>

            <button
              onClick={() => handleNumber("4")}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
            >
              4
            </button>
            <button
              onClick={() => handleNumber("5")}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
            >
              5
            </button>
            <button
              onClick={() => handleNumber("6")}
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
            >
              6
            </button>
            <button
              onClick={() => handleOperator("+")}
              className="bg-orange-500 hover:bg-orange-400 text-white rounded-lg p-4 text-xl"
            >
              +
            </button>

            <div className="col-span-3 grid grid-cols-3 gap-2">
              <button
                onClick={() => handleNumber("1")}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
              >
                1
              </button>
              <button
                onClick={() => handleNumber("2")}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
              >
                2
              </button>
              <button
                onClick={() => handleNumber("3")}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
              >
                3
              </button>
              <button
                onClick={() => handleNumber("0")}
                className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
              >
                0
              </button>
              <button
                onClick={() => handleNumber(".")}
                className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-4 text-xl"
              >
                .
              </button>
            </div>
            <button
              onClick={handleEquals}
              className="row-span-1 bg-orange-500 hover:bg-orange-400 text-white rounded-lg p-4 text-xl"
            >
              =
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Calculator;
