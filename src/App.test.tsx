import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "./mocks/server";
import App from "./App";

describe("App component", () => {
  it("renders heading text correctly", () => {
    render(<App />);
    const linkElement = screen.getByText(/React Api Project/i);
    expect(linkElement).toBeInTheDocument();
  });

});
