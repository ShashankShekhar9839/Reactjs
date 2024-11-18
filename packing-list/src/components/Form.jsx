import React, { useState } from "react";
import "../css/form.css";

const Form = ({ addItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const quantityOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem({ description, quantity, packed: false, id: new Date() });
    setDescription("");
    setQuantity(1);
  };

  const handleInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <p>What You Want to Pack ? </p>
        <div className="inputs">
          <select value={quantity} onChange={handleQuantityChange}>
            {quantityOptions.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <input type="text" value={description} onChange={handleInputChange} />
          <button>Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
