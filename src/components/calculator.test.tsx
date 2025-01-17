import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./calculator";
describe("Calculator", () => {
  describe("Initial render", () => {
    test("should render calculator component", () => {
      render(<Calculator />);
      const calculatorElement = screen.getByTestId("calculator");
      expect(calculatorElement).toBeInTheDocument();
    });

    test("should display 0 by default", () => {
      render(<Calculator />);
      const displayElement = screen.getByTestId("display");
      expect(displayElement).toHaveTextContent("0");
    });
  });

  describe("Number input", () => {
    test("should update display when number is clicked", () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText("5"));
      expect(screen.getByTestId("display")).toHaveTextContent("5");
    });

    test("should concatenate multiple numbers", () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText("1"));
      fireEvent.click(screen.getByText("2"));
      fireEvent.click(screen.getByText("3"));
      expect(screen.getByTestId("display")).toHaveTextContent("123");
    });

    test("should handle decimal points", () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText("1"));
      fireEvent.click(screen.getByText("."));
      fireEvent.click(screen.getByText("5"));
      expect(screen.getByTestId("display")).toHaveTextContent("1.5");
    });

    test("should prevent multiple decimal points", () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText("1"));
      fireEvent.click(screen.getByText("."));
      fireEvent.click(screen.getByText("5"));
      fireEvent.click(screen.getByText("."));
      expect(screen.getByTestId("display")).toHaveTextContent("1.5");
    });
  });

  describe("Operations", () => {
    describe("Addition", () => {
      test("should add two numbers correctly", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("display")).toHaveTextContent("8");
      });

      test("should handle multiple additions", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("display")).toHaveTextContent("10");
      });
    });

    describe("Subtraction", () => {
      test("should subtract two numbers correctly", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("8"));
        fireEvent.click(screen.getByText("-"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("display")).toHaveTextContent("5");
      });

      test("should handle negative results", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("-"));
        fireEvent.click(screen.getByText("8"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("display")).toHaveTextContent("-5");
      });
    });

    describe("Multiplication", () => {
      test("should multiply two numbers correctly", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("×"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("display")).toHaveTextContent("12");
      });

      test("should handle multiplication by zero", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("×"));
        fireEvent.click(screen.getByText("0"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("display")).toHaveTextContent("0");
      });
    });

    describe("Division", () => {
      test("should divide two numbers correctly", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("8"));
        fireEvent.click(screen.getByText("÷"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("display")).toHaveTextContent("4");
      });

      test("should handle division by zero", () => {
        render(<Calculator />);
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("÷"));
        fireEvent.click(screen.getByText("0"));
        fireEvent.click(screen.getByText("="));
        expect(screen.getByTestId("display")).toHaveTextContent("Error");
      });
    });
  });

  describe("Clear functionality", () => {
    test("should clear the display and equation when AC is clicked", () => {
      render(<Calculator />);
      fireEvent.click(screen.getByText("5"));
      fireEvent.click(screen.getByText("+"));
      fireEvent.click(screen.getByText("3"));
      fireEvent.click(screen.getByText("AC"));
      expect(screen.getByTestId("display")).toHaveTextContent("0");
      const equationElement = screen.getByText("", {
        selector: ".text-gray-400",
      });
      expect(equationElement).toHaveTextContent("");
    });
  });
});
