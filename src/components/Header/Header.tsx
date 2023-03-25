import React from "react";
import { message } from "../translate/EN";

const Header = () => {
  return (
    <div
      className="mb-4 d-flex justify-content-center align-item-center"
      style={{
        width: "100%",
        color: "#fff",
        padding: ".25em",
        background: "#333",
        position: "sticky",
        top: 0,
      }}
    >
      <h3 className="text-center mb-3 mt-3">{message.mainHeadingText}</h3>
    </div>
  );
};

export default Header;
