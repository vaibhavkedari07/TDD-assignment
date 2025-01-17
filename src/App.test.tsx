import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator initiation", () => {
  describe("render", () => {
    test("should render calculator component", () => {
      render(<Calculator />);
      const calculatorElement = screen.getByTestId("calculator");
      expect(calculatorElement).toBeInTheDocument();
    });
  });
});

export {};
