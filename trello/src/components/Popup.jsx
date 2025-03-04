import React from "react";
import "../css/popup.css";
import Button from "./Button";

const Popup = ({ setShowPopup }) => {
  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div className="popup-container">
      <h2>Add Board</h2>
      <div className="input-container">
        <label>Board Name</label>
        <input />
      </div>
      <Button>Add Board</Button>
      <div className="popup-close-btn">
        <Button color="danger" onClick={handlePopupClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Popup;
