import React, { useState } from "react";
import "../css/main.css";
import Card from "./Card";
import Button from "./Button";

const Main = () => {
  const [showTextArea, setShowTextArea] = useState(false);

  const handleAddCardClick = () => {
    setShowTextArea(!showTextArea);
  };

  return (
    <div className="main">
      <h4>My Planer Board</h4>
      <div className="list-container">
        <div className="list">
          <span className="list-name">To Do</span>
          <Card text="First Card" />
          <Card text="First Card" />
          <Card text="First Card" />
          {showTextArea && (
            <div className="text-area-container">
              <textarea />
              <Button>Add</Button>
            </div>
          )}
          <div className="card-btn-container">
            <Button color="dark" size="medium" onClick={handleAddCardClick}>
              {!showTextArea ? " Add Card" : "Close"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
