import React from "react";
import "../css/sidebar.css";
import { useNotes } from "../contexts/notesContext";
import { useDrawing } from "../contexts/drawingContext";
import { useMode } from "../contexts/modeContext";
import { useTextEditor } from "../contexts/textEditorContext";

const SideBar = ({ setSelectedDrawing, setShowSideBar }) => {
  const { storedNotes, setActiveNote } = useNotes();
  const { setText } = useTextEditor();
  const { drawingData } = useDrawing();
  const { mode, setMode } = useMode(); // <-- bring setMode too

  const handleNoteClick = (id) => {
    const selectedNote = storedNotes.find((item) => item.id === id);
    if (selectedNote) {
      setActiveNote(selectedNote);
      setText(selectedNote.note);
      setMode("text"); // <-- SWITCH to text mode
      setShowSideBar(false);
    }
  };

  const handleDrawingClick = (id) => {
    const selectedDrawing = drawingData.find((item) => item.id === id);
    if (selectedDrawing) {
      setSelectedDrawing(selectedDrawing);
      setMode("drawingBoard"); // <-- SWITCH to drawing mode
      setShowSideBar(false);
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
