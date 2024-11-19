import React from "react";
import Item from "./Item";
import "../css/packingList.css";

const PackingList = ({ itemList, onDeleteItem, onItemToggle }) => {
  return (
    <div className="packingList-wrapper">
      <h2>Items To Pack ...</h2>
      {itemList?.map((item) => (
        <Item
          desc={item.description}
          quantity={item.quantity}
          key={item.id}
          onDeleteItem={onDeleteItem}
          id={item.id}
          packed={item.packed}
          onItemToggle={onItemToggle}
        />
      ))}
    </div>
  );
};

export default PackingList;
