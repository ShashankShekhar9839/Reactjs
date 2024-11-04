import "./App.css";
import Notes from "./components/Notes";
import data from "../src/data/data";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(data);

  return (
    <>
      <Notes notes={notes} setNotes = {setNotes}/>
    </>
  );
}

export default App;
