import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import DrawingBoard from "./components/DrawingBoard";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/SideBar";
import { NotesProvider } from "./contexts/notesContext";
import { TextEditorProvider } from "./contexts/textEditorContext";
import { DrawingProvider } from "./contexts/drawingContext";

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
            <DrawingProvider>
              {showDrawBoard ? <DrawingBoard /> : <TextEditor />}
            </DrawingProvider>
          </div>
        </TextEditorProvider>
      </NotesProvider>
    </div>
  );
};

export default App;
