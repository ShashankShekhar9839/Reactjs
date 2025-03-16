import React, { useEffect } from "react";
import "../css/sidebar.css";
import { useNotes } from "../contexts/notesContext";
import { useTextEditor } from "../contexts/textEditorContext";

const SideBar = () => {
  const { storedNotes, setActiveNote, activeNote } = useNotes();
  const { updateText } = useTextEditor();

  const handleClick = (id) => {
    const selectedNote = storedNotes.find((item) => item.id === id);
    if (selectedNote) {
      updateText(selectedNote.note);
      setActiveNote(selectedNote);
    }
  };

  useEffect(() => {
    console.log(activeNote);
  }, [activeNote]);

  return (
    <div className="side-bar">
      <h3>Saved Notes</h3>
      {storedNotes.map((item) => (
        <span
          className="saved-names"
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
};

export default SideBar;
