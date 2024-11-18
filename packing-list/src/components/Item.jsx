import React from "react";
import "../css/item.css";

const Item = ({ desc, quantity }) => {
  return (
    <>
      <span className="item">
        <span>
          <input type="checkbox" />
        </span>
        <span>
          {quantity} {desc}
        </span>
        <button>❌</button>
      </span>
    </>
  );
};

export default Item;
