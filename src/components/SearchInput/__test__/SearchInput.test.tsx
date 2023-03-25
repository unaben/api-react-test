import { render, screen } from "@testing-library/react";
import SearchInput from "../SearchInput";
import userEvent from "@testing-library/user-event";

describe("SearchInputComponent", () => {
  const searchTerm: string = "";
  const setSearchTerm = jest.fn();
  it("should render correctly", () => {
    render(
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    );
    const searchInput = screen.getByPlaceholderText(/Search.../i);
    expect(searchInput).toBeInTheDocument();
  });

  it("searchInput feild should accept text", () => {
    const searchTerm: string = "nathan";
    const setSearchTerm = jest.fn();
    render(
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    );

    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "nathan");

    expect(searchInput).toHaveValue("nathan");
  });

  it("should render a string when searchInput is empty", () => {
    const setSearchTerm = jest.fn();
    const searchTerm: string = "";
    render(
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    );

    const searchInput = screen.getByRole("textbox");
    userEvent.type(searchInput, "");

    expect(searchInput).toHaveValue("");
  });
});
