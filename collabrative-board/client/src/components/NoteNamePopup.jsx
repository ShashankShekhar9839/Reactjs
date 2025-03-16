import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNotes } from "../contexts/notesContext";

const NoteNamePopup = ({ note, onClose }) => {
  const [noteName, setNoteName] = useState("");
  const { setStoredNotes } = useNotes();

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

    setStoredNotes((prevNotes) => [...prevNotes, newNote]);
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
