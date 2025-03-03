import React from "react";
import CardComponent from "../CardComponent";

interface ListProps {
  status?: string;
  cards: Array<object>;
  moveCard: (draggedId: string, targetId: string) => void;
}

const List: React.FC<ListProps> = ({
  status = "unstarted",
  cards = [],
  moveCard,
}) => {
  return (
    <div className="flex flex-col rounded-md shadow-md w-1/3 p-2 text-center m-2 bg-gray-100">
      <span className="text-md  font-bold uppercase">{status}</span>
      <ol>
        {cards?.map((item) => (
          <CardComponent key={item.id} item={item} moveCard={moveCard} />
        ))}
        <button>Add</button>
      </ol>
    </div>
  );
};

export default List;
