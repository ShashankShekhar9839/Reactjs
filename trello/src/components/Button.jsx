import React from "react";
import "../css/button.css";

const Button = ({ children, onClick, color = "primary", size = "medium" }) => {
  return (
    <button className={`custom-button ${color} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
