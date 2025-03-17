import React, { forwardRef } from "react";
import "../css/stickynote.css";

const Note = forwardRef(
  ({ content, initialPos = { x: 0, y: 0 }, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-label="Draggable Note"
        style={{
          position: "absolute",
          left: `${initialPos.x}px`,
          top: `${initialPos.y}px`,
          border: "1px solid black",
          userSelect: "none",
          padding: "10px",
          width: "200px",
          cursor: "move",
          backgroundColor: "lightyellow",
          ...props.style, // Ensure external styles can still be applied
        }}
        {...props}
      >
        📌 {content}
      </div>
    );
  }
);

export default Note;
