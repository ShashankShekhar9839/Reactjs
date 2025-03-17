import React, { useState } from "react";
import Button from "./Button";
import NoteNamePopup from "./NoteNamePopup";
import { useTextEditor } from "../contexts/textEditorContext";
import "../css/texteditor.css";
import { useNotes } from "../contexts/notesContext";

const TextEditor = () => {
  const { text, updateText } = useTextEditor();
  const { setStoredNotes, activeNote } = useNotes();

  const [showFileNamePopup, setFileNamePopup] = useState(false);

  const downLoadNotes = () => {
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text-editor-content.txt";
    link.click();
  };

  const handleUpdateClick = () => {
    setStoredNotes((prev) =>
      prev.map((note) =>
        note.id === activeNote.id ? { ...note, note: text } : note
      )
    );
  };

  const saveNote = (noteName) => {
    if (!noteName) return;

    const newNote = {
      id: Date.now(),
      title: noteName,
      note: text,
    };

    setStoredNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="text-area-container">
      <textarea
        value={text}
        onChange={(e) => updateText(e.target.value)}
        rows="10"
        cols={50}
        placeholder="Start typing..."
      />
      <div className="text-editor-btn-containers">
        <h3>Save Everything!</h3>
        <Button onClick={downLoadNotes} color="secondary" size="small">
          Download
        </Button>
        <Button
          onClick={() => setFileNamePopup(true)}
          color="secondary"
          size="small"
        >
          Save to Browser
        </Button>
        {activeNote && (
          <Button color="secondary" size="small" onClick={handleUpdateClick}>
            Update
          </Button>
        )}
      </div>

      {showFileNamePopup && (
        <NoteNamePopup
          note={text}
          onSaveClick={saveNote}
          onClose={() => setFileNamePopup(false)}
        />
      )}
    </div>
  );
};

export default TextEditor;
