import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Button from "./Button";
import NoteNamePopup from "./NoteNamePopup";
import useLocalStorage from "../hooks/useLocalStorage";
import SideBar from "./SideBar";

const socket = io("http://localhost:4000", { autoConnect: false });

const TextEditor = () => {
  const [text, setText] = useState("");
  const [showFileNamePopup, setFileNamePopup] = useState(false);
  const [storedValue, setStoredValue] = useLocalStorage("notes", []);

  useEffect(() => {
    console.log("Stored Notes:", storedValue);
  }, [storedValue]);

  useEffect(() => {
    socket.connect();

    socket.on("text-update", (newText) => {
      setText(newText);
    });

    return () => {
      socket.off("text-update");
      socket.disconnect();
    };
  }, []);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    socket.emit("text-update", newText);
  };

  const downLoadNotes = () => {
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text-editor-content.txt";
    link.click();
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <SideBar data={storedValue} setText={setText} />
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        cols={50}
        placeholder="Start typing..."
      />
      <div>
        <Button onClick={downLoadNotes}>Download</Button>
        <Button onClick={() => setFileNamePopup(true)}>Save to Browser</Button>
      </div>

      {showFileNamePopup && (
        <NoteNamePopup
          note={text}
          setStoredValue={setStoredValue}
          onClose={() => setFileNamePopup(false)}
        />
      )}
    </div>
  );
};

export default TextEditor;
