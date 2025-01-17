export type OperationType = "+" | "-" | "*" | "/" | "";

export interface CalculatorState {
  display: string;
  equation: string;
  newNumber: boolean;
  firstOperand: number;
  operation: OperationType;
  lastResult: number;
  hasOperation: boolean;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
