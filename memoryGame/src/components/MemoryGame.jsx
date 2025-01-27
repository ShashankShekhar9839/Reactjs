import React, { useEffect, useState } from "react";
import "../../src/App.css";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const handleGridSizeChange = (event) => {
    const value = Math.max(2, Math.min(10, Number(event.target.value)));
    setGridSize(value);
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const suffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({
        id: index,
        number,
      }));

    setCards(suffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
  };
  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (cards[firstId].number === cards[secondId].number) {
      setSolved([...solved, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (won || disabled) return;

    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        checkMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const handleResetGame = () => {
    initializeGame();
  };

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [cards, solved]);

  return (
    <div className="game-wrapper">
      <h2>Memory Game !</h2>
      <label htmlFor="board-size">Board Size (max 10) : </label>
      <input
        type="number"
        id="board-size"
        value={gridSize}
        min={2}
        max={10}
        onChange={handleGridSizeChange}
      />

      <div className="reset-container">
        <h4>{won ? "You Won" : "Keep Trying"}</h4>
        <button onClick={handleResetGame}>Reset Game</button>
      </div>
      <div
        className="grid-container"
        style={{
          display: "grid",
          maxWidth: `${gridSize * 60}px`,
          gridTemplateColumns: `repeat(${gridSize}, 60px)`,
        }}
      >
        {cards.map((card, index) => {
          return (
            <span
              className={`${
                isFlipped(card.id) && isSolved(card.id) ? "solved" : ""
              } ${isFlipped(card.id) ? "flipped" : ""}`}
              key={card.id}
              onClick={() => handleClick(card.id)}
              style={{ pointerEvents: disabled ? "none" : "auto" }}
            >
              {isFlipped(card.id) ? card.number : "?"}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;
