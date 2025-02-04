import React, { useState } from "react";
import "../App.css";

const SelectableGrid = ({ rows = 10, cols = 10 }) => {
  const gridSize = rows * cols;
  const numbers = Array.from({ length: gridSize }, (_, i) => i + 1);

  const [selectedNumbers, setSelectedNumbers] = useState(new Set());
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (number) => {
    setIsDragging(true);
    setSelectedNumbers((prev) => new Set([...prev, number])); // Start selection
  };

  const handleMouseEnter = (number) => {
    if (isDragging) {
      setSelectedNumbers((prev) => new Set([...prev, number]));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 50px)`,
        gridTemplateRows: `repeat(${rows}, 50px)`,
        gap: "5px",
        userSelect: "none", // Prevents text selection while dragging
      }}
      className="grid-container"
      onMouseUp={handleMouseUp} // Stop selection when mouse is released
    >
      {numbers.map((number) => (
        <span
          key={number}
          className="numbers"
          onMouseDown={() => handleMouseDown(number)}
          onMouseEnter={() => handleMouseEnter(number)}
          style={{
            backgroundColor: selectedNumbers.has(number)
              ? "lightcoral"
              : "white",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default SelectableGrid;
