import React from "react";
import { render, screen } from "@testing-library/react";
import UsersComponent from "../UsersComponent";
import { IUserData } from "../../../models/IUserDataModel";
import { server } from "../../../mocks/server";
import { rest } from "msw";

describe("UsersComponent", () => {
  it("should render heading correctly", () => {
    const usersData = [
      {
        id: 1,
        name: "Steven Rico",
        username: "ricosmile",
        email: "ricosmile@gmail.com",
        website: "rico.info",
      },
    ] as IUserData[];
    const setUsersData = jest.fn();
    const searchTerm: string = "";
    render(
      <UsersComponent
        searchTerm={searchTerm}
        usersData={usersData}
        setUsersData={setUsersData}
      />
    );

    const heading = screen.queryByRole("heading", { level: 2 });
    expect(heading).not.toBeInTheDocument();
  });

  it("renders list of users", async () => {
    const usersData = [
      {
        id: 1,
        name: "Steven Rico",
        username: "ricosmile",
        email: "ricosmile@gmail.com",
        website: "rico.info",
      },
    ] as IUserData[];
    const setUsersData = jest.fn();
    render(
      <UsersComponent
        usersData={usersData}
        setUsersData={setUsersData}
        searchTerm={""}
      />
    );

    screen.debug();
    const listItemEl = await screen.findAllByRole("listitem");
    screen.debug();
    expect(listItemEl).toBeVisible();
  });

  it("renders error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    const usersData = [
      {
        id: 1,
        name: "Steven Rico",
        username: "ricosmile",
        email: "ricosmile@gmail.com",
        website: "rico.info",
      },
    ] as IUserData[];
    const setUsersData = jest.fn();
    render(
      <UsersComponent
        usersData={usersData}
        setUsersData={setUsersData}
        searchTerm={""}
      />
    );
    const errorText = await screen.findByText("Error fetching users");
    expect(errorText).toBeInTheDocument();
  });
});
