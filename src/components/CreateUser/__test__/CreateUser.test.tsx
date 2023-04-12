import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateUser from "../CreateUser";
import { IUserData } from "../../../models/IUserDataModel";

describe("CreateUserComponent", () => {
  it("Should render heading text correctly", () => {
    const setUsers = jest.fn();
    const setSearchTerm = jest.fn();
    const searchTerm: string = "";
    const users = [
      {
        id: 1,
        name: "Nathan King",
        username: "natKing",
        email: "nat@gmail.com",
        website: "nat@info",
      },
    ] as IUserData[];

    render(
      <CreateUser
        users={users}
        setUsers={setUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    );
    const headingText = screen.getByRole("heading", {
      level: 2,
    });
    expect(headingText).toBeInTheDocument();
  });

  it("Should render all input correctly", () => {
    const setSearchTerm = jest.fn();
    const searchTerm: string = "";
    const setUsers = jest.fn();
    const users = [
      {
        id: 1,
        name: "Nathan King",
        username: "natKing",
        email: "nat@gmail.com",
        website: "nat@info",
      },
    ] as IUserData[];

    render(
      <CreateUser
        users={users}
        setUsers={setUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    );
    const inputElement = screen.getAllByRole("textbox");
    expect(inputElement).toHaveLength(5);
  });

  it("Should render a string when emailInput is empty", () => {
    const setSearchTerm = jest.fn();
    const searchTerm: string = "";
    const setUsers = jest.fn();
    const users = [
      {
        id: 1,
        name: "Nathan King",
        username: "natKing",
        email: "nat@gmail.com",
        website: "nat@info",
      },
    ] as IUserData[];

    render(
      <CreateUser
        users={users}
        setUsers={setUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    );

    const emailInput = screen.getByPlaceholderText(/Enter email.../i);
    userEvent.type(emailInput, "");

    expect(emailInput).toHaveValue("");
  });

  it("Should render a text when nameInput is not empty", () => {
    const setSearchTerm = jest.fn();
    const searchTerm: string = "";
    const setUsers = jest.fn();
    const users = [
      {
        id: 1,
        name: "Nathan King",
        username: "natKing",
        email: "nat@gmail.com",
        website: "nat@info",
      },
    ] as IUserData[];

    render(
      <CreateUser
        users={users}
        setUsers={setUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    );
    const emailInput = screen.getByPlaceholderText(/Enter email.../i);
    userEvent.type(emailInput, "nathan@gmail.com");

    expect(emailInput).toHaveValue("nathan@gmail.com");
  });

  it("Should reset when clicked", () => {
    const setSearchTerm = jest.fn();
    const searchTerm: string = "";
    const setUsers = jest.fn();
    const users = [
      {
        id: 1,
        name: "Nathan King",
        username: "natKing",
        email: "nat@gmail.com",
        website: "nat@info",
      },
    ] as IUserData[];

    render(
      <CreateUser
        users={users}
        setUsers={setUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    );
    const nameInput = screen.getByPlaceholderText(/Enter name../i);
    const usernameInput = screen.getByPlaceholderText(/Enter username.../i);
    const emailInput = screen.getByPlaceholderText(/Enter email.../i);
    const websiteInput = screen.getByPlaceholderText(/Enter website.../i);

    const resetBtn = screen.getByRole("button", {
      name: "Reset",
    });
    // const resetBtn = screen.getByTestId("reset");

    userEvent.click(resetBtn);

    expect(nameInput).toHaveValue("");
    expect(usernameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(websiteInput).toHaveValue("");
  });
});
