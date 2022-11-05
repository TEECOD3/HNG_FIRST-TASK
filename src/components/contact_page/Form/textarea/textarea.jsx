import React from "react";
import "./textarea.scss";

const Textarea = ({
  id,
  value,
  label,
  name,
  classes,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="textarea-section">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        className={`textarea ${classes}`}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        {...otherProps}
      ></textarea>
      <span className=" message-required">Please enter message</span>
    </div>
  );
};

export default Textarea;
