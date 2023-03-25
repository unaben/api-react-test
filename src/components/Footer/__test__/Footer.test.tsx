import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("FooterComponent", () => {
  it("should render correctly", () => {
    render(<Footer />);
    const footerText = screen.getByText(/copyright/i, { exact: false });
    expect(footerText).toBeInTheDocument()
  });
});
