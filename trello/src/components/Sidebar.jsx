import React, { useState } from "react";
import { Popover } from "react-tiny-popover";

import "../css/sidebar.css";
import Button from "./Button";
import Popup from "./Popup";

const Sidebar = () => {

  
  const [collapsed, setCollapsed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const handleAddBoardClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div className={`${collapsed ? "collapse-siderbar" : "sidebar-wrapper"}`}>
        <div className="expand-btn" onClick={handleClick}>
          {collapsed ? (
            <span className="star">{">"}</span>
          ) : (
            <span className="collapse">Your Daily Planner</span>
          )}
        </div>

        <div className="add-board">
          <span>Your Boards</span>
          <Button color="light" size="small" onClick={handleAddBoardClick}>
            {" "}
            Add +{" "}
          </Button>
        </div>
      </div>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </>
  );
};

export default Sidebar;
