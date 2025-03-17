import React from "react";
import "../css/header.css";
import Button from "./Button";
import { useMode } from "../contexts/modeContext";

const Header = () => {
  const { mode, setMode } = useMode();

  return (
    <div className="header-container">
      <Button size="small" onClick={() => setMode("text")}>
        Text Editor
      </Button>
      <Button size="small" onClick={() => setMode("stickyNotes")}>
        StickyNotes
      </Button>

      <Button size="small" onClick={() => setMode("drawingBoard")}>
        Drawing Board
      </Button>
    </div>
  );
};

export default Header;
