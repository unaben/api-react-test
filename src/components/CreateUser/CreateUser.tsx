import React, { FormEventHandler } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { IUserData } from "../../models/IUserDataModel";
import SearchInput from "../SearchInput/SearchInput";
import { message } from "../../translate/EN";

type ICreateUserProps = {
  users: IUserData[];
  setUsers: React.Dispatch<React.SetStateAction<IUserData[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const CreateUser: React.FC<ICreateUserProps> = ({
  users,
  setUsers,
  searchTerm,
  setSearchTerm,
}) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
  });
  const { name, username, email, website } = user;
  const enabled =
    email.length > 0 &&
    name.length > 0 &&
    username.length > 0 &&
    website.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const contactToCreate = {
      // id: uuidv4(),
      // id: `_${Math.random().toString(36).substr(2, 9).toString()}`,
      id: users.length + 1,
      name: user.name,
      email: user.email,
      username: user.username,
      website: user.website,
    } as unknown as IUserData;

    if (
      (contactToCreate.name,
      contactToCreate.email,
      contactToCreate.username,
      contactToCreate.website)
    ) {
      setUsers((prevUsers) => [...prevUsers, contactToCreate]);
      alert("One user created succesfully!");
      setUser({
        name: "",
        username: "",
        email: "",
        website: "",
      });
    }
  };

  return (
    <div>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Form onSubmit={handleSubmit} className="border shadow p-4 rounded">
        <h2 className="mb-3">{message.formHeadingText}</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>{message.fullName}</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name.."
            value={user.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>{message.username}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username..."
            value={user.username}
            name="username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{message.email}</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email..."
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicWebsite">
          <Form.Label>{message.website}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter website..."
            value={user.website}
            name="website"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant={`${enabled && "primary"}`}
          disabled={!enabled}
          type="submit"
          className="me-2"
        >
          {message.submitButtonText}
        </Button>
        <Button
          variant={`${!enabled ? " secondary " : "success"}`}
          type="reset"
          disabled={!enabled}
          data-testid="reset"
          onClick={() =>
            setUser({
              name: "",
              username: "",
              email: "",
              website: "",
            })
          }
        >
          {message.resetButtonText}
        </Button>
      </Form>
    </div>
  );
};
export default CreateUser;
