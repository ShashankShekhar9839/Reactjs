import React, { useState } from "react";

const Input = ({
  label,
  placeholder,
  name,
  onChange,
  type,
  value,
  isRequired,
}) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="input-wrapper">
      <label
        style={{
          margin: "10px",
        }}
      >
        {label} :
      </label>
      <input
        value={value} // Controlled by the parent
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        type={type}
        required={isRequired}
      />
    </div>
  );
};

export default Input;
