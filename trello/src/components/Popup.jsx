import React, { useContext, useState, useRef, useEffect } from "react";
import "../css/popup.css";
import Button from "./Button";
import { BoardContext } from "../context/context";

const Popup = ({ setShowPopup }) => {
  const blankBoard = {
    name: "",
    list: [],
  };

  const [boardData, setBoardData] = useState(blankBoard);
  const { allBoard, setAllBoard } = useContext(BoardContext);

  let inputRef = useRef();

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  const addBoard = () => {
    let newBoard = { ...allBoard };
    newBoard.boards.push(boardData);
    setAllBoard(newBoard);
    setBoardData(blankBoard);
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    let val = e.target.value;
    setBoardData({ ...boardData, name: val });
  };

  return (
    <div className="popup-container">
      <h2>Add Board</h2>
      <div className="input-container">
        <label>Board Name</label>
        <input ref={inputRef} value={boardData.name} onChange={handleChange} />
      </div>
      <Button onClick={addBoard}>Add Board</Button>
      <div className="popup-close-btn">
        <Button color="danger" onClick={handlePopupClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Popup;
