import React from "react";
import "../css/header.css";
import Button from "./Button";

const Header = ({ onShowDrawBoardClick }) => {
  return (
    <div className="header-container">
      <Button size="small" onClick={onShowDrawBoardClick}>
        Draw Board
      </Button>
    </div>
  );
};

export default Header;
