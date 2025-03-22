import React from "react";
import '../App.css'

const Button = ({ onClick, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
