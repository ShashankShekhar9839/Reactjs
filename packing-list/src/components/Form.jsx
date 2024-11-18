import React from "react";

const Form = () => {
  const quantityOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>What You Want to Pack ? </p>
        <select>
          {quantityOptions.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <input type="text" />
      </form>
      <button type="submit">Add Item</button>
    </>
  );
};

export default Form;
