import { useEffect, useState } from "react";
import "../css/item.css";

const Item = ({ desc, quantity, onDeleteItem, id, packed, onItemToggle }) => {
  const handleChange = (id) => {
    onItemToggle(id);
  };

  const handleItenDelete = (id) => {
    if (onDeleteItem) {
      onDeleteItem(id);
    }
  };

  return (
    <>
      <span className="item">
        <span>
          <input
            type="checkbox"
            onChange={() => handleChange(id)}
            checked={packed}
          />
        </span>
        <span className={`${packed ? "checked" : ""}`}>
          {quantity} {desc}
        </span>
        <button onClick={() => handleItenDelete(id)}>❌</button>
      </span>
    </>
  );
};

export default Item;
