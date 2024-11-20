import { useState } from "react";
import Item from "./Item";
import "../css/packingList.css";

const PackingList = ({ itemList, onDeleteItem, onItemToggle, onClear }) => {
  const [sortBy, setSortBy] = useState("input");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  let sortedList;

  if (sortBy === "input") sortedList = itemList;
  if (sortBy === "description") {
    sortedList = [...itemList].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortBy === "packed") {
    sortedList = [...itemList].sort((a, b) => {
      if (a.packed === b.packed) {
        return 0;
      }
      return a.packed ? 1 : -1;
    });
  }

  return (
    <>
      <div className="packingList-wrapper">
        <h2>Items To Pack ...</h2>
        {sortedList?.map((item) => (
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
      <div className="packingList-wrapper">
        <p>Filter By</p>
        <select value={sortBy} onChange={handleChange}>
          <option value="input">Filter By Input Order</option>
          <option value="description">Filter By Description</option>
          <option value="packed">Filter By Packing Status</option>
        </select>
        <button className="clear-btn" onClick={onClear}>
          Clear List
        </button>
      </div>
    </>
  );
};

export default PackingList;
