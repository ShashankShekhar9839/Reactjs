import React, { useState } from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label = "",
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = event?.target.value;
    setInputValue(inputVal);
    if (onChange) {
      onChange(inputVal);
    }
  };

  return (
    <div className="flex flex-row gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
      />
    </div>
  );
};

export default Input;
