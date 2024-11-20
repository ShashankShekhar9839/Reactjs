import React from "react";
import "../css/footer.css";

const Footer = ({ items, onClear }) => {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <div className="footer">
      {`You have ${totalItems} items in your list, and you have already packed ${packedItems} items... (${percentagePacked}%)`}
    </div>
  );
};

export default Footer;
