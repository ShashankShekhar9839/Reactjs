import React from "react";
import TextEditor from "./components/TextEditor";
import DrawingBoard from "./components/DrawingBoard";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <TextEditor />
      <DrawingBoard />
    </div>
  );
};

export default App;
