import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useTextEditor } from "../contexts/textEditorContext";
import "../css/texteditor.css";
import Button from "./Button";
import { Download, Save, RotateCw } from "lucide-react";

const socket = io("https://collabrative-server-2.onrender.com/");

const TextEditor = () => {
  const { text, updateText } = useTextEditor();
  const [showFileNamePopup, setFileNamePopup] = useState(false);

  useEffect(() => {
    socket.on("text-update", (newText) => {
      updateText(newText); // Update text when received from other users
    });

    return () => {
      socket.off("text-update");
    };
  }, [updateText]);

  const handleUpdateClick = () => {
    socket.emit("text-update", text); // Send updated text to the server
  };

  const downLoadNotes = () => {
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text-editor-content.txt";
    link.click();
  };

  const saveNote = (noteName) => {
    if (!noteName) return;

    const newNote = {
      id: Date.now(),
      title: noteName,
      note: text,
    };

    // Save logic for the note (implement saving note here)
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
        <Button onClick={downLoadNotes} color="secondary" size="large">
          <Download />
        </Button>
        <Button
          onClick={() => setFileNamePopup(true)}
          color="secondary"
          size="large"
        >
          <Save />
        </Button>
        <Button onClick={handleUpdateClick} color="secondary" size="large">
          <RotateCw />
        </Button>
      </div>

      {showFileNamePopup && (
        <NoteNamePopup
          onSaveClick={saveNote}
          onClose={() => setFileNamePopup(false)}
        />
      )}
    </div>
  );
};

export default TextEditor;
