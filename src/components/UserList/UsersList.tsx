import React from "react";
import { Button, Card } from "react-bootstrap";
import { IUserData } from "../models/IUserDataModel";
import { message } from "../translate/EN";

type IUserListProps = {
  user: IUserData;
  handleDelete: (id: number) => void;
};

const UsersList: React.FC<IUserListProps> = ({ user, handleDelete }) => {
  const { id, name, username, email, website } = user;
  return (
    <div>
      <Card style={{ width: "17rem" }} className="me-2 mb-2">
        <Card.Body>
          <Card.Title>
            <p>
              {message.userText}-{`${id}`}
            </p>
          </Card.Title>
          <Card.Text>
            <p data-testid="name">
              {message.name}: {name}
            </p>
            <p data-testid="username">
              {message.username}: {username}
            </p>
            <p data-testid="email">
              {message.emailText}: {email}
            </p>
            <p data-testid="website">
              {message.website}: {website}
            </p>
          </Card.Text>
          <Button variant="danger" onClick={() => handleDelete(id)}>
            {message.deleteButtonText}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UsersList;
