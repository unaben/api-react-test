import React from "react";
import { render, screen } from "@testing-library/react";
import UsersComponent from "../UsersComponent";
import { IUserData } from "../../models/IUserDataModel";

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

  // it("should render list of users", async () => {
  //   const usersData = [
  //     {
  //       id: 1,
  //       name: "Steven Rico",
  //       username: "ricosmile",
  //       email: "ricosmile@gmail.com",
  //       website: "rico.info",
  //     },
  //   ] as IUserData[];
  //   const setUsersData = jest.fn();
  //   render(
  //     <UsersComponent usersData={usersData} setUsersData={setUsersData} />
  //   );

  //   const listItemEl = await screen.findAllByRole("listitem");

  //   expect(listItemEl).toHaveLength(3);
  // });
});
