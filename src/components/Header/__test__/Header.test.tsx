import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("HeaderComponent", () => {
  it("should render correctly", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", {
      level: 3,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should render text content correctly", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", {
      level: 3,
    });
    expect(heading).toHaveTextContent(/React Api Project/i);
  });
});
