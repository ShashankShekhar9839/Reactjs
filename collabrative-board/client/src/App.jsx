import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import DrawingBoard from "./components/DrawingBoard";
import Header from "./components/Header";
import "./App.css";
import { NotesProvider } from "./contexts/notesContext";
import { TextEditorProvider } from "./contexts/textEditorContext";
import { DrawingProvider } from "./contexts/drawingContext";
import { ModeProvider, useMode } from "./contexts/modeContext";
import SideBar from "./components/SideBar";

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const onHeaderMenuClick = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <ModeProvider>
      <NotesProvider>
        <TextEditorProvider>
          <DrawingProvider>
            <Header
              onHeaderMenuClick={onHeaderMenuClick}
              isSideBarOpen={showSideBar}
            />
            <AppContent
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />
          </DrawingProvider>
        </TextEditorProvider>
      </NotesProvider>
    </ModeProvider>
  );
};

const AppContent = ({ showSideBar, setShowSideBar }) => {
  const { mode } = useMode();
  const [selectedDrawing, setSelectedDrawing] = useState(null);

  return (
    <div className="app-container">
      {showSideBar && (
        <SideBar
          setSelectedDrawing={setSelectedDrawing}
          setShowSideBar={setShowSideBar}
        />
      )}
      <MainContent selectedDrawing={selectedDrawing} />
    </div>
  );
};

const MainContent = ({ selectedDrawing }) => {
  const { mode } = useMode();
  return mode === "drawingBoard" ? (
    <DrawingBoard selectedDrawing={selectedDrawing} />
  ) : (
    <TextEditor />
  );
};

export default App;
