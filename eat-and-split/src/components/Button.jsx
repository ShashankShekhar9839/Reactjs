import React from "react";

const Button = ({ children, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
