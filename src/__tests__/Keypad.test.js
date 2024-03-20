import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Keypad from "../components/Keypad";

let container, input;

beforeEach(() => {
  container = render(<Keypad />).container;
  input = screen.getByRole("textbox");
});

test("displays one input", () => {
  expect(input).toBeInTheDocument();
  expect(input.tagName).toBe("INPUT");
});

test("displays an input with the right input type", () => {
  expect(input.type).toBe("password");
});

test("typing in the input triggers console output", () => {
  const consoleSpy = jest.spyOn(console, "log");

  fireEvent.change(input, { target: { value: "123" } });

  expect(consoleSpy).toHaveBeenCalled();
  expect(consoleSpy.mock.calls[0][0]).toBe("Entering password...");
});
