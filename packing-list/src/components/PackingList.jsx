import React from "react";
import Item from "./Item";

const PackingList = ({ itemList }) => {
  return (
    <div style={{ padding: "15px", background: "iceBlue" }}>
      {itemList?.map((item) => (
        <Item desc={item.description} quantity={item.quantity} key={item.id} />
      ))}
    </div>
  );
};

export default PackingList;
