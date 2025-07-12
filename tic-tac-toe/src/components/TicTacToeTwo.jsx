import React, { useState } from "react";

const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToeTwo = () => {
  const [cells, setCells] = useState(new Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const calculateWinner = (currentBord) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      let [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBord[a] === currentBord[b] &&
        currentBord[b] === currentBord[c]
      ) {
        return currentBord[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    let winner = calculateWinner(cells);
    if (winner) {
      setCells[new Array(9).fill(null)];
      return;
    }
    if (cells[index]) return;
    let newCells = [...cells];
    newCells[index] = xTurn ? "x" : "o";
    setCells(newCells);
    setXTurn((prev) => !prev);
  };

  return (
    <div>
      <p>Player {xTurn ? "X" : "O"} Turn</p>

      <div
        style={{
          display: "flex",
          width: "300px",
          flexWrap: "wrap",
        }}
      >
        {cells.map((item, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            style={{
              flexShrink: "0",
            }}
            className="cell"
          >
            {item && item}
          </button>
        ))}
      </div>
      <p>Winner is {calculateWinner(cells)}</p>
    </div>
  );
};

export default TicTacToeTwo;
