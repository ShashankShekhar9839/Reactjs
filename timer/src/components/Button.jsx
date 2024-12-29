import React from "react";

const Button = ({ children, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
