import React, { useContext, useState } from "react";
import "../css/main.css";
import Card from "./Card";
import Button from "./Button";
import { BoardContext } from "../context/context";

const Main = () => {
  const [showTextArea, setShowTextArea] = useState(false);
  const { allBoard, setAllBoard } = useContext(BoardContext);

  const handleAddCardClick = () => {
    setShowTextArea(!showTextArea);
  };

  return (
    <div className="main">
      <h4>{allBoard.boards[allBoard.active].name}</h4>
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
