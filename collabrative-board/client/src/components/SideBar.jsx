import React from "react";
import "../css/sidebar.css";

const SideBar = ({ selected, data, setText }) => {
  const handleClick = (id) => {
    const selectedNote = data.find((item) => item.id === id);
    if (selectedNote) {
      const noteText =
        typeof selectedNote.note === "string"
          ? selectedNote.note
          : JSON.parse(selectedNote.note);

      setText(noteText);
    }
  };

  return (
    <div className="side-bar">
      Side Bar
      {data.map((item, index) => {
        return (
          <h5
            onClick={() => handleClick(item.id)}
            style={{
              background: "gray",
              cursor: "pointer",
            }}
          >
            {item.title}
          </h5>
        );
      })}
    </div>
  );
};

export default SideBar;
