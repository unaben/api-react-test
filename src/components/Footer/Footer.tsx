import React, { useEffect, useState } from "react";
import { message } from "../../translate/EN";

const Footer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <>
      <div
        className="mb-4 d-flex justify-content-evenly align-item-center"
        style={{
          width: "100%",
          color: "#fff",
          padding: "1.25em 0",
          background: "#333",
          position: "sticky",
          bottom: 0,
          marginTop: "2rem",
        }}
      >
        {message.copyRight} &copy; {message.company}
        <p>
          <strong>Time : {date.toLocaleTimeString()}</strong>
        </p>
        <p>
          <strong> Date : {date.toLocaleDateString()}</strong>
        </p>
      </div>
    </>
  );
};

export default Footer;
