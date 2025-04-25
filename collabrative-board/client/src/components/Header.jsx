import React from "react";
import "../css/header.css";
import { useMode } from "../contexts/modeContext";

const Header = () => {
  const { mode, setMode } = useMode();

  return (
    <div className="header-container">
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
