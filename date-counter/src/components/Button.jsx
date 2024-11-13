import React from "react";

const Button = ({ label, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="btn"
      onClick={handleClick}
      style={{ padding: "5px", backgroundColor: "black", color: "white" }}
    >
      {label}
    </button>
  );
};

export default Button;
