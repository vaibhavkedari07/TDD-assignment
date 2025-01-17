import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "./components/calculator";

describe("Calculator initiation", () => {
  describe("render", () => {
    test("should render calculator component", () => {
      render(<Calculator />);
      const calculatorElement = screen.getByTestId("calculator");
      expect(calculatorElement).toBeInTheDocument();
    });
  });

  describe("display", () => {
    test("should display 0 by default", () => {
      render(<Calculator />);
      const displayElement = screen.getByTestId("display");
      expect(displayElement).toHaveTextContent("0");
    });
  });

  describe("Calculator operations", () => {
    describe("addition", () => {
      test("should add two numbers correctly", () => {
        render(<Calculator />);

        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("="));

        const display = screen.getByTestId("display");
        expect(display).toHaveTextContent("8");
      });

      test("should handle decimal addition", () => {
        render(<Calculator />);

        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("."));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("."));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("="));

        const display = screen.getByTestId("display");
        expect(display).toHaveTextContent("4");
      });

      test("should handle multiple additions", () => {
        render(<Calculator />);

        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));

        const display = screen.getByTestId("display");
        expect(display).toHaveTextContent("10");
      });
    });
  });

  describe("subtraction", () => {
    test("should subtract two numbers correctly", () => {
      render(<Calculator />);

      fireEvent.click(screen.getByText("8"));
      fireEvent.click(screen.getByText("-"));
      fireEvent.click(screen.getByText("3"));
      fireEvent.click(screen.getByText("="));

      const display = screen.getByTestId("display");
      expect(display).toHaveTextContent("5");
    });

    test("should handle negative results", () => {
      render(<Calculator />);

      fireEvent.click(screen.getByText("3"));
      fireEvent.click(screen.getByText("-"));
      fireEvent.click(screen.getByText("8"));
      fireEvent.click(screen.getByText("="));

      const display = screen.getByTestId("display");
      expect(display).toHaveTextContent("-5");
    });
  });

  describe("multiplication", () => {
    test("should multiply two numbers correctly", () => {
      render(<Calculator />);

      fireEvent.click(screen.getByText("4"));
      fireEvent.click(screen.getByText("×"));
      fireEvent.click(screen.getByText("3"));
      fireEvent.click(screen.getByText("="));

      const display = screen.getByTestId("display");
      expect(display).toHaveTextContent("12");
    });

    test("should handle multiplication by zero", () => {
      render(<Calculator />);

      fireEvent.click(screen.getByText("5"));
      fireEvent.click(screen.getByText("×"));
      fireEvent.click(screen.getByText("0"));
      fireEvent.click(screen.getByText("="));

      const display = screen.getByTestId("display");
      expect(display).toHaveTextContent("0");
    });
  });

  describe("division", () => {
    test("should divide two numbers correctly", () => {
      render(<Calculator />);

      fireEvent.click(screen.getByText("8"));
      fireEvent.click(screen.getByText("÷"));
      fireEvent.click(screen.getByText("2"));
      fireEvent.click(screen.getByText("="));

      const display = screen.getByTestId("display");
      expect(display).toHaveTextContent("4");
    });

    test("should handle division by zero", () => {
      render(<Calculator />);

      fireEvent.click(screen.getByText("5"));
      fireEvent.click(screen.getByText("÷"));
      fireEvent.click(screen.getByText("0"));
      fireEvent.click(screen.getByText("="));

      const display = screen.getByTestId("display");
      expect(display).toHaveTextContent("Error");
    });
  });
});

export {};
