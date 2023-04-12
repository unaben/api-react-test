import React, { render, screen } from "@testing-library/react";
import UsersList from "../UsersList";
import { IUserData } from "../../../models/IUserDataModel";
import userEvent from "@testing-library/user-event";

describe("UserListComponent", () => {
  it("should render correctly", () => {
    const user = {
      id: 1,
      name: "Steven Rico",
      username: "ricosmile",
      email: "ricosmile@gmail.com",
      website: "rico.info",
    } as IUserData;
    const handleDelete = jest.fn();
    render(<UsersList user={user} handleDelete={handleDelete} />);
    const deleteBtn = screen.getByRole("button");
    expect(deleteBtn).toBeVisible();
  });

  it("should render correctly delete button length", () => {
    const user = {
      id: 1,
      name: "Steven Rico",
      username: "ricosmile",
      email: "ricosmile@gmail.com",
      website: "rico.info",
    } as IUserData;
    const handleDelete = jest.fn();
    render(<UsersList user={user} handleDelete={handleDelete} />);
    const deleteBtn = screen.getAllByRole("button");
    expect(deleteBtn).toHaveLength(1);
  });

  it("should be called when clicked", () => {
    const user = {
      id: 1,
      name: "Steven Rico",
      username: "ricosmile",
      email: "ricosmile@gmail.com",
      website: "rico.info",
    } as IUserData;
    const handleDelete = jest.fn();
    render(<UsersList user={user} handleDelete={handleDelete} />);

    const deleteBtn = screen.getByRole("button");
    userEvent.click(deleteBtn);

    expect(handleDelete).toBeCalledTimes(1);
  });

  it("should the correct email text paragraph", () => {
    const user = {
      id: 1,
      name: "Steven Rico",
      username: "ricosmile",
      email: "ricosmile@gmail.com",
      website: "rico.info",
    } as IUserData;
    const handleDelete = jest.fn();
    render(<UsersList user={user} handleDelete={handleDelete} />);

    const paragraphEl = screen.getByTestId("email");

    expect(paragraphEl).toBeInTheDocument();
  });
});
