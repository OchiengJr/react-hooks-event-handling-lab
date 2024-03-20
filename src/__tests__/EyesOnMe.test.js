import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import EyesOnMe from "../components/EyesOnMe";

beforeEach(() => {
  render(<EyesOnMe />);
});

test('displays a button with the text "Eyes on me"', () => {
  expect(screen.getByText(/Eyes on me/)).toBeInTheDocument();
});

test("focusing the button triggers console output", () => {
  const consoleSpy = jest.spyOn(console, "log");

  const button = screen.getByText(/Eyes on me/);
  fireEvent.focus(button);

  expect(consoleSpy).toHaveBeenCalledWith("Good!");
});

test("removing focus (blur) on the button triggers console output", () => {
  const consoleSpy = jest.spyOn(console, "log");

  const button = screen.getByText(/Eyes on me/);
  fireEvent.blur(button);

  expect(consoleSpy).toHaveBeenCalledWith("Hey! Eyes on me!");
});
