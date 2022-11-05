import React from "react";
import "./sucess.modules.scss";

const Sucessfull = ({ close }) => {
  return (
    <div className="content">
      <div className="alert">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
          onClick={close}
        ></button>
        <strong>Success!</strong> Message sent successfully!
      </div>
    </div>
  );
};

export default Sucessfull;
