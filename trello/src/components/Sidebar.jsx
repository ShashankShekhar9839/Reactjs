import React, { useContext, useState } from "react";
import { Popover } from "react-tiny-popover";

import "../css/sidebar.css";
import Button from "./Button";
import Popup from "./Popup";
import { BoardContext } from "../context/context";

const Sidebar = () => {
  const blankBoard = {
    name: "",
    list: [],
  };

  const [collapsed, setCollapsed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [boardData, setBoardData] = useState(blankBoard);
  const { allBoard, setAllBoard } = useContext(BoardContext);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const handleAddBoardClick = () => {
    setShowPopup(true);
  };

  const setActiveBoard = (i) => {
    let newBoard = { ...allBoard };
    newBoard.active = i;
    setAllBoard(newBoard);
  };

  const addBoard = () => {
    let newBoard = { ...allBoard };
    newBoard.boards.push(boardData);
    setAllBoard(newBoard);
    setBoardData(blankBoard);
    setShowPopup(false);
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
        {allBoard?.boards.map((item, index) => {
          return (
            <span className="board-names" onClick={() => setActiveBoard(index)}>
              {item.name}
            </span>
          );
        })}
      </div>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </>
  );
};

export default Sidebar;
