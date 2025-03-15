import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import DrawingBoard from "./components/DrawingBoard";
import Header from "./components/Header";
import "./App.css";
import NoteNamePopup from "./components/NoteNamePopup";
import SideBar from "./components/SideBar";

const App = () => {
  const [showDrawBoard, setShowDrawBoard] = useState(false);

  const handleShowDrawBoard = () => {
    setShowDrawBoard(!showDrawBoard);
  };

  return (
    <div>
      <Header onShowDrawBoardClick={handleShowDrawBoard} />
      <div className="app-container">
        {/* <SideBar /> */}
        <TextEditor />
        {showDrawBoard && <DrawingBoard />}
      </div>
    </div>
  );
};

export default App;
