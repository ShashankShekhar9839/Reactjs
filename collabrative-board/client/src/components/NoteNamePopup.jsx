import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const NoteNamePopup = ({ note, setStoredValue, onClose }) => {
  const [noteName, setNoteName] = useState("");

  const handleChange = (value) => {
    setNoteName(value);
  };

  const saveNote = () => {
    if (!noteName) return;

    const newNote = {
      id: Date.now(),
      title: noteName,
      note: note,
    };

    setStoredValue((prevNotes) => [...prevNotes, newNote]);
    onClose();
  };

  return (
    <div>
      <Input placeholder="Enter Note Name" onChange={handleChange} />
      <Button text="Save" onClick={saveNote} />
    </div>
  );
};

export default NoteNamePopup;
