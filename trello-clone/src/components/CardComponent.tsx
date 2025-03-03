import React from "react";
import { useDrag, useDrop } from "react-dnd";

interface Card {
  id: string;
  text: string;
}

const CardComponent: React.FC<{
  item: Card;
  moveCard: (draggedId: string, targetId: string) => void;
}> = ({ item, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "Card",
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "Card",
    hover: (draggedItem: { id: string }) => {
      if (draggedItem.id !== item.id) {
        moveCard(draggedItem.id, item.id);
      }
    },
  });

  return (
    <li
      className="pt-2 pb-2 bg-white m-1 rounded-lg mt-2 mb-2"
      ref={(node) => drag(drop(node))}
    >
      {item.text}
    </li>
  );
};

export default CardComponent;
