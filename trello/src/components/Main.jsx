import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../css/main.css";
import Card from "./Card";
import Button from "./Button";
import { BoardContext } from "../context/context";
import makeId from "../utils/utils";

const Main = () => {
  const [showTextArea, setShowTextArea] = useState({});
  const [cardDetails, setCardDetails] = useState("");
  const [isAddNewList, setIsAddNewList] = useState(false);
  const [listName, setListName] = useState("");
  const [editingList, setEditingList] = useState(null);
  const { allBoard, setAllBoard } = useContext(BoardContext);

  const boardData = allBoard.boards[allBoard.active];

  function onDragEnd(result) {
    if (!result.destination) return;

    const newList = [...boardData.list];
    const s_id = parseInt(result.source.droppableId);
    const d_id = parseInt(result.destination.droppableId);

    const [removed] = newList[s_id].items.splice(result.source.index, 1);
    newList[d_id].items.splice(result.destination.index, 0, removed);

    let updatedBoard = { ...allBoard };
    updatedBoard.boards[updatedBoard.active].list = newList;
    setAllBoard(updatedBoard);
  }

  const handleAddCardClick = (index) => {
    setShowTextArea((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    console.log(showTextArea);
  }, [showTextArea]);

  const handleListInputChange = (e) => {
    let listName = e.target.value;
    setListName(listName);
  };

  const handleTextAreaChange = (e) => {
    setCardDetails(e.target.value);
  };

  const saveCard = (index) => {
    if (!cardDetails) return;
    let newList = [...boardData.list];
    newList[index].items.push({ id: makeId(6), title: cardDetails });
    let updatedBoard = { ...allBoard };
    updatedBoard.boards[updatedBoard.active].list = newList;
    setAllBoard(updatedBoard);
    setCardDetails("");
    setShowTextArea((prev) => ({ ...prev, [index]: false }));
  };

  const saveList = () => {
    if (!listName) return;
    let newList = [...boardData.list];
    newList.push({
      id: makeId(6),
      title: listName,
      items: [],
    });
    let board = { ...allBoard };
    board.boards[board.active].list = newList;
    setAllBoard(board);
    setListName("");
    setIsAddNewList(false);
  };

  const showAddNewList = () => {
    setIsAddNewList(true);
  };

  const handleListNameChange = (index, value) => {
    let newList = [...boardData.list];
    newList[index].title = value;
    let updatedBoard = { ...allBoard };
    updatedBoard.boards[updatedBoard.active].list = newList;
    setAllBoard(updatedBoard);
  };

  const handleListNameBlur = () => {
    setEditingList(null); // Disable edit mode when focus is lost
  };

  const handleListNameEdit = (index) => {
    setEditingList(index); // Enable edit mode for the selected list
  };

  return (
    <div className="main">
      <h4>{allBoard.boards[allBoard.active].name}</h4>
      {!isAddNewList ? (
        <Button onClick={showAddNewList}>Add New List</Button>
      ) : (
        <div>
          <input
            placeholder="add new list"
            value={listName}
            onChange={handleListInputChange}
          />
          <Button onClick={saveList}>Add</Button>
          <Button onClick={() => setIsAddNewList(false)}>Close</Button>
        </div>
      )}

      <div className="list-container">
        <DragDropContext onDragEnd={onDragEnd}>
          {boardData.list.map((list, listIndex) => (
            <Droppable key={list.id} droppableId={String(listIndex)}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="list"
                >
                  {/* <span className="list-name">{list.title}</span> */}

                  {editingList === listIndex ? (
                    <input
                      type="text"
                      value={list.title}
                      onChange={(e) =>
                        handleListNameChange(listIndex, e.target.value)
                      }
                      onBlur={handleListNameBlur}
                      autoFocus
                      className="list-name-input"
                    />
                  ) : (
                    <span
                      className="list-name"
                      onClick={() => handleListNameEdit(listIndex)} // Add this line
                    >
                      {list.title}
                    </span>
                  )}

                  {list.items.map((card, cardIndex) => (
                    <Draggable
                      key={card.id}
                      draggableId={String(card.id)}
                      index={cardIndex}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card text={card.title} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  {showTextArea[listIndex] && (
                    <div className="text-area-container">
                      <textarea
                        value={cardDetails}
                        onChange={handleTextAreaChange}
                      />
                      <Button onClick={() => saveCard(listIndex)}>Add</Button>
                    </div>
                  )}

                  <div className="card-btn-container">
                    <Button
                      color="dark"
                      size="medium"
                      onClick={() => handleAddCardClick(listIndex)}
                    >
                      {!showTextArea[listIndex] ? "Add Card" : "Close"}
                    </Button>
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Main;
