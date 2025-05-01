import React, { useEffect, useState } from "react";
import "../../src/App.css";

const MemoryGame = () => {
  // State variables
  const [gridSize, setGridSize] = useState(4); // Size of the game grid
  const [cards, setCards] = useState([]); // Array of card objects
  const [flipped, setFlipped] = useState([]); // Currently flipped cards
  const [solved, setSolved] = useState([]); // Solved card IDs
  const [disabled, setDisabled] = useState(false); // Disable clicks temporarily
  const [won, setWon] = useState(false); // Game win state

  // Handle grid size input change
  const handleGridSizeChange = (event) => {
    const value = Math.max(2, Math.min(10, Number(event.target.value))); // Clamp value between 2 and 10
    setGridSize(value);
  };

  // Initialize the game board
  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1); // Generate pairs of numbers
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5) // Shuffle cards
      .slice(0, totalCards) // Ensure correct number of cards
      .map((number, index) => ({
        id: index,
        number,
      }));

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
  };

  // Check if two flipped cards match
  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (cards[firstId].number === cards[secondId].number) {
      // Cards match
      setSolved([...solved, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      // Cards don't match
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  // Handle card click
  const handleCardClick = (id) => {
    if (won || disabled) return; // Ignore clicks if game is won or disabled

    if (flipped.length === 0) {
      // First card flipped
      setFlipped([id]);
    } else if (flipped.length === 1) {
      // Second card flipped
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        checkMatch(id);
      } else {
        // Same card clicked twice
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  // Reset the game
  const handleResetGame = () => {
    initializeGame();
  };

  // Utility functions for card states
  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  // Check for win condition
  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [cards, solved]);

  // Reinitialize the game when grid size changes
  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  return (
    <div className="game-wrapper">
      <h2>Memory Game!</h2>

      {/* Grid size input */}
      <label htmlFor="board-size">Board Size (max 10): </label>
      <input
        type="number"
        id="board-size"
        value={gridSize}
        min={2}
        max={10}
        onChange={handleGridSizeChange}
      />

      {/* Reset button and game status */}
      <div className="reset-container">
        <h4>{won ? "You Won!" : "Keep Trying"}</h4>
        <button onClick={handleResetGame}>Reset Game</button>
      </div>

      {/* Game grid */}
      <div
        className="grid-container"
        style={{
          display: "grid",
          maxWidth: `${gridSize * 60}px`,
          gridTemplateColumns: `repeat(${gridSize}, 60px)`,
        }}
      >
        {cards.map((card) => (
          <span
            key={card.id}
            className={`card ${
              isFlipped(card.id) && isSolved(card.id) ? "solved" : ""
            } ${isFlipped(card.id) ? "flipped" : ""}`}
            onClick={() => handleCardClick(card.id)}
            style={{ pointerEvents: disabled ? "none" : "auto" }}
          >
            {isFlipped(card.id) ? card.number : "?"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
