import { render, fireEvent } from "@testing-library/react";
import { CalculatorButton, OperatorButton } from "./calculatorButton";

describe("CalculatorButton", () => {
  test("renders with default styles", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <CalculatorButton onClick={onClick}>1</CalculatorButton>
    );

    const button = getByText("1");
    expect(button).toHaveClass("bg-gray-700");
    expect(button).toHaveClass("hover:bg-gray-600");
  });

  test("calls onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <CalculatorButton onClick={onClick}>1</CalculatorButton>
    );

    fireEvent.click(getByText("1"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe("OperatorButton", () => {
  test("renders with operator styles", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <OperatorButton onClick={onClick}>+</OperatorButton>
    );

    const button = getByText("+");
    expect(button).toHaveClass("bg-orange-500");
    expect(button).toHaveClass("hover:bg-orange-400");
  });
});
