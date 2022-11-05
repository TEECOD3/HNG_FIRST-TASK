import React from "react";

const index = ({ label, type }) => {
  switch (type) {
    case "email":
      return (
        <span className=" message-required">
          Please enter a valid email address
        </span>
      );
    case "password":
      return (
        <span className=" message-required">Please enter a valid password</span>
      );

    case "text":
      return (
        <span className=" message-required">Please enter yours {label}</span>
      );
    default:
      return (
        <span className="message-required">Please enter your {label}</span>
      );
  }
};

export default index;
