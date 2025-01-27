import React from "react";
import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe();
  return (
    <div className="container">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              className="cell"
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
