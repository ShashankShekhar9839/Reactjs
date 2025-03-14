import React, { useState } from "react";
import "../css/input.css";

const Input = ({
  label,
  type = "text",
  name,
  placeholder = "",
  className = "",
  required = false,
  disabled = false,
  onChange = () => {},
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`input-container ${className}`}>
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="input-field"
      />
    </div>
  );
};

export default Input;
