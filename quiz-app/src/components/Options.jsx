import React from "react";

const Options = ({ options }) => {
  return (
    <div className="option-wrapper">
      {options.map((option) => (
        <button className="option">{option}</button>
      ))}
    </div>
  );
};

export default Options;
