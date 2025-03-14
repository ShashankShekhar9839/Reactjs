import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Button from "./Button";
import NoteNamePopup from "./NoteNamePopup";
const socket = io("http://localhost:4000"); // Change this to your backend URL

const TextEditor = () => {
  const [text, setText] = useState("");

  const [showFileNamePopup, setFileNamePopup] = useState(false);

  const handleShowFileNamePopup = () => {
    setFileNamePopup(true);
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    socket.emit("text-update", newText);
  };

  useEffect(() => {
    socket.on("text-update", (newText) => {
      setText(newText);
    });

    return () => {
      socket.off("text-update");
    };
  }, []);

  const downLoadNotes = () => {
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text-editor-content.txt";
    link.click();
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        cols={50}
        placeholder="Start typing..."
      />
      <div>
        <Button onClick={downLoadNotes}>Downlaod</Button>
        <Button onClick={handleShowFileNamePopup}>Save to Browser</Button>
      </div>

      {showFileNamePopup && <NoteNamePopup />}
    </div>
  );
};

export default TextEditor;
