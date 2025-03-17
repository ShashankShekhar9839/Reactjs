import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNotes } from "../contexts/notesContext";
import "../css/notenamepopup.css";

const NoteNamePopup = ({ note, onClose, onSaveClick }) => {
  const [noteName, setNoteName] = useState("");
  // const { setStoredNotes } = useNotes();

  const handleChange = (value) => {
    setNoteName(value);
  };

  const handleSaveClick = () => {
    if (onSaveClick) {
      onSaveClick(noteName);
      if (onClose) {
        onClose();
      }
    }
  };



  return (
    <div className="popup">
      <div className="popup-close-btn">
        <Button size="small" color="danger" onClick={onClose}>
          Close
        </Button>
      </div>

      <Input placeholder="Enter Note Name" onChange={handleChange} />
      <Button text="Save" size="small" color="info" onClick={handleSaveClick} />
    </div>
  );
};

export default NoteNamePopup;
