import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import DrawingBoard from "./components/DrawingBoard";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/SideBar";
import { NotesProvider } from "./contexts/notesContext";
import { TextEditorProvider } from "./contexts/textEditorContext";

const App = () => {
  const [showDrawBoard, setShowDrawBoard] = useState(false);

  const handleShowDrawBoard = () => {
    setShowDrawBoard(!showDrawBoard);
  };

  return (
    <div>
      <NotesProvider>
        <TextEditorProvider>
          <Header onShowDrawBoardClick={handleShowDrawBoard} />
          <div className="app-container">
            <SideBar />
            <TextEditor />
            {showDrawBoard && <DrawingBoard />}
          </div>
        </TextEditorProvider>
      </NotesProvider>
    </div>
  );
};

export default App;
