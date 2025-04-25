import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import DrawingBoard from "./components/DrawingBoard";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/SideBar";
import { NotesProvider } from "./contexts/notesContext";
import { TextEditorProvider } from "./contexts/textEditorContext";
import { DrawingProvider } from "./contexts/drawingContext";
import { ModeProvider, useMode } from "./contexts/modeContext";

const App = () => {
  return (
    <ModeProvider>
      <Header />
      <AppContent />
    </ModeProvider>
  );
};

const AppContent = () => {
  const { mode } = useMode();
  const [selectedDrawing, setSelectedDrawing] = useState(null);

  return (
    <NotesProvider>
      <TextEditorProvider>
        <DrawingProvider>
          <div className="app-container">
            <SideBar setSelectedDrawing={setSelectedDrawing} />
            <MainContent selectedDrawing={selectedDrawing} />
          </div>
        </DrawingProvider>
      </TextEditorProvider>
    </NotesProvider>
  );
};

// Separate component for handling mode switching
const MainContent = ({ selectedDrawing }) => {
  const { mode } = useMode();
  return mode === "drawingBoard" ? (
    <DrawingBoard selectedDrawing={selectedDrawing} />
  ) : (
    <TextEditor />
  );
};

export default App;
