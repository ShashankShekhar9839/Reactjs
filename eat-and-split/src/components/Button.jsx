import React from "react";

const Button = ({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
