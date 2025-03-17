import React from "react";
import "../css/header.css";
import Button from "./Button";
import { useMode } from "../contexts/modeContext";

const Header = () => {
  const { mode, setMode } = useMode();

  return (
    <div className="header-container">
      <Button
        size="small"
        onClick={() => setMode(mode === "text" ? "drawing" : "text")}
      >
        {mode === "text" ? "Switch to Drawing" : "Switch to Notes"}
      </Button>
    </div>
  );
};

export default Header;
