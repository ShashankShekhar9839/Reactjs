import React, { useState } from "react";
import StickyNotes from "./components/StickyNotes";
import initialNotes from "./data/notes";

const App = () => {
  const [notes, setNotes] = useState(initialNotes);
  return (
    <div>
      <StickyNotes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
