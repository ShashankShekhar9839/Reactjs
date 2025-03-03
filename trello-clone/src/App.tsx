import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Input from "./components/input/Input";
import List from "./components/List/List";
import initialLists from "../src/data/data.js"; // Renamed to avoid confusion

const App = () => {
  const [lists, setLists] = useState(initialLists); // Store lists in state

  const moveCard = (draggedId: string, targetId: string) => {
    // Find the list that contains the dragged card
    let updatedLists = lists.map((list) => {
      let draggedCard = list.cards.find((card) => card.id === draggedId);
      if (!draggedCard) return list; // If the card is not in this list, return the same list

      // Remove the dragged card from its original list
      let newCards = list.cards.filter((card) => card.id !== draggedId);

      return { ...list, cards: newCards };
    });

    // Find the target list where the dragged card is being inserted
    updatedLists = updatedLists.map((list) => {
      let targetIndex = list.cards.findIndex((card) => card.id === targetId);
      if (targetIndex === -1) return list; // If not found in this list, return as is

      let draggedCard = initialLists
        .flatMap((list) => list.cards)
        .find((card) => card.id === draggedId);

      let newCards = [...list.cards];
      newCards.splice(targetIndex, 0, draggedCard);

      return { ...list, cards: newCards };
    });

    setLists(updatedLists);
  };

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-2/3">
        <h2>Plan and learn at one place </h2>
        <Input placeholder="create new list" onChange={handleChange} />
        <div className="flex">
          {lists?.map((list) => (
            <List
              key={list.status} // Always add a key in mapped components
              status={list.status}
              cards={list.cards}
              moveCard={moveCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
