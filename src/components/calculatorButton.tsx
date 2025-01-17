import React from "react";
import { ButtonProps } from "../types/calculator";

export const CalculatorButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "bg-gray-700 hover:bg-gray-600",
}) => (
  <button
    onClick={onClick}
    className={`${className} text-white rounded-lg p-4 text-xl`}
  >
    {children}
  </button>
);

export const OperatorButton: React.FC<ButtonProps> = (props) => (
  <CalculatorButton {...props} className="bg-orange-500 hover:bg-orange-400" />
);
