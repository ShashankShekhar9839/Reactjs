import React from "react";
import "../css/button.css"; // Import the styles

const Button = ({
  text,
  onClick,
  color = "primary",
  size = "medium",
  children,
}) => {
  return (
    <button className={`custom-button ${color} ${size}`} onClick={onClick}>
      {text ? text : children}
    </button>
  );
};

export default Button;
