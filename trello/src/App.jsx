import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";
import makeId from "../src/utils/utils.js";
import { BoardContext } from "./context/context";

const App = () => {
  const defaultBoardData = {
    active: 0,
    boards: [
      {
        name: "My Trello Board",
        list: [
          {
            id: "1",
            title: "To do",
            items: [{ id: makeId(6), title: "Project Description 1" }],
          },
          {
            id: "2",
            title: "In Progress",
            items: [{ id: makeId(6), title: "Project Description 2" }],
          },
          {
            id: "3",
            title: "Done",
            items: [{ id: makeId(6), title: "Project Description 3" }],
          },
        ],
      },
    ],
  };

  const [allBoard, setAllBoard] = useState(defaultBoardData);

  return (
    <div>
      <Header />
      <BoardContext.Provider value={{ allBoard, setAllBoard }}>
        <div className="main-wrapper">
          <Sidebar />
          <Main />
        </div>
      </BoardContext.Provider>
    </div>
  );
};

export default App;
