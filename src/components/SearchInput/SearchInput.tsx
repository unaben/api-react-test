import React from "react";
import { Form } from "react-bootstrap";

type ISearchInputProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: React.FC<ISearchInputProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default SearchInput;
