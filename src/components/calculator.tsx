import React, { useState } from "react";
import { OperationType, CalculatorState } from "../types/calculator";
import { calculateResult } from "../utils/calculator";
import { CalculatorButton, OperatorButton } from "./calculatorButton";

const initialState: CalculatorState = {
  display: "0",
  equation: "",
  newNumber: true,
  firstOperand: 0,
  operation: "",
  lastResult: 0,
  hasOperation: false,
};

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleNumber = (num: string): void => {
    setState((prevState) => {
      if (prevState.newNumber) {
        return {
          ...prevState,
          display: num,
          newNumber: false,
        };
      }

      if (num === "." && prevState.display.includes(".")) {
        return prevState;
      }

      return {
        ...prevState,
        display: prevState.display + num,
      };
    });
  };

  const handleOperator = (op: OperationType): void => {
    setState((prevState) => {
      const currentValue = parseFloat(prevState.display);

      if (prevState.hasOperation) {
        const result = calculateResult(
          prevState.operation,
          prevState.lastResult || prevState.firstOperand,
          currentValue
        );

        return {
          ...prevState,
          lastResult: Number(result),
          display: result.toString(),
          equation: `${result} ${op}`,
          firstOperand: currentValue,
          operation: op,
          newNumber: true,
          hasOperation: true,
        };
      }

      return {
        ...prevState,
        lastResult: currentValue,
        equation: `${currentValue} ${op}`,
        firstOperand: currentValue,
        operation: op,
        newNumber: true,
        hasOperation: true,
      };
    });
  };

  const handleEquals = (): void => {
    setState((prevState) => {
      const secondOperand = parseFloat(prevState.display);
      const result = calculateResult(
        prevState.operation,
        prevState.lastResult || prevState.firstOperand,
        secondOperand
      );

      return {
        ...prevState,
        equation: `${prevState.equation} ${secondOperand} =`,
        display: result.toString(),
        newNumber: true,
        hasOperation: false,
        lastResult: 0,
      };
    });
  };

  const handleClear = (): void => {
    setState(initialState);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-gray-900 text-white"
      data-testid="calculator"
    >
      <div className="w-full max-w-md p-4 bg-gray-800 rounded-2xl shadow-xl md:p-8">
        <div className="bg-gray-700 p-4 rounded-xl mb-4">
          <div className="text-gray-400 text-right text-sm h-6">
            {state.equation}
          </div>
          <div
            className="text-white text-right text-4xl font-semibold overflow-hidden"
            data-testid="display"
          >
            {state.display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleClear}
            className="col-span-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg p-4 text-xl"
          >
            AC
          </button>
          <OperatorButton onClick={() => handleOperator("/")}>
            &divide;
          </OperatorButton>
          <OperatorButton onClick={() => handleOperator("*")}>
            &times;
          </OperatorButton>

          {[7, 8, 9].map((num) => (
            <CalculatorButton
              key={num}
              onClick={() => handleNumber(num.toString())}
            >
              {num}
            </CalculatorButton>
          ))}
          <OperatorButton onClick={() => handleOperator("-")}>-</OperatorButton>

          {[4, 5, 6].map((num) => (
            <CalculatorButton
              key={num}
              onClick={() => handleNumber(num.toString())}
            >
              {num}
            </CalculatorButton>
          ))}
          <OperatorButton onClick={() => handleOperator("+")}>+</OperatorButton>

          <div className="col-span-3 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((num) => (
              <CalculatorButton
                key={num}
                onClick={() => handleNumber(num.toString())}
              >
                {num}
              </CalculatorButton>
            ))}
            <CalculatorButton
              onClick={() => handleNumber("0")}
              className="col-span-2 bg-gray-700 hover:bg-gray-600"
            >
              0
            </CalculatorButton>
            <CalculatorButton onClick={() => handleNumber(".")}>
              .
            </CalculatorButton>
          </div>
          <OperatorButton onClick={handleEquals}>=</OperatorButton>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
