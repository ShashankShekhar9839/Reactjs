import React from "react";
import "../css/header.css";
import { useMode } from "../contexts/modeContext";
import { Menu, X } from "lucide-react";

const Header = ({ onHeaderMenuClick, isSideBarOpen }) => {
  const { mode, setMode } = useMode();

  return (
    <div className="header-container">
      <div className="menu-wrapper" onClick={onHeaderMenuClick}>{!isSideBarOpen ? <Menu /> : <X />}</div>

      <div className="switch-container">
        <div
          className={`switch-slider ${mode === "drawingBoard" ? "right" : ""}`}
        />
        <button
          className={`switch-button ${mode === "text" ? "active" : ""}`}
          onClick={() => setMode("text")}
        >
          Text Editor
        </button>
        <button
          className={`switch-button ${mode === "drawingBoard" ? "active" : ""}`}
          onClick={() => setMode("drawingBoard")}
        >
          Drawing Board
        </button>
      </div>
    </div>
  );
};

export default Header;
