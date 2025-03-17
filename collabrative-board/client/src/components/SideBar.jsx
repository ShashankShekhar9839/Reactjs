import React from "react";
import "../css/sidebar.css";
import { useNotes } from "../contexts/notesContext";
import { useDrawing } from "../contexts/drawingContext";
import { useMode } from "../contexts/modeContext";

const SideBar = ({ setSelectedDrawing }) => {
  const { storedNotes, setActiveNote } = useNotes();
  const { drawingData } = useDrawing();
  const { mode } = useMode();

  const handleNoteClick = (id) => {
    const selectedNote = storedNotes.find((item) => item.id === id);
    if (selectedNote) {
      setActiveNote(selectedNote);
    }
  };

  const handleDrawingClick = (id) => {
    const selectedDrawing = drawingData.find((item) => item.id === id);
    if (selectedDrawing) {
      console.log("Loading Drawing:", selectedDrawing);
      setSelectedDrawing(selectedDrawing); // Send to App.jsx
    }
  };

  return (
    <div className="side-bar">
      <h3>{mode === "text" ? "Saved Notes" : "Saved Drawings"}</h3>

      {mode === "text"
        ? storedNotes.map((item) => (
            <span
              className="saved-names"
              key={item.id}
              onClick={() => handleNoteClick(item.id)}
            >
              {item.title}
            </span>
          ))
        : drawingData.map((item) => (
            <span
              className="saved-names"
              key={item.id}
              onClick={() => handleDrawingClick(item.id)}
            >
              {item.name}
            </span>
          ))}
    </div>
  );
};

export default SideBar;
