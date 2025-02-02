import React, { useState } from "react";

const Input = ({ label, placeholder, onChange, value = "" }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      label={label}
      placeholder={placeholder}
      onChange={handleChange}
      value={inputValue}
    />
  );
};

export default Input;
