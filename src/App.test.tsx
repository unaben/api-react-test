import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading text correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Api Testing Tutorial/i);
  expect(linkElement).toBeInTheDocument();
});
