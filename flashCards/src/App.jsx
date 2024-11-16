import { useState } from "react";
import "./App.css";
import FlashCard from "./components/FlashCard";
import reactQuestions from "./data/data";

function App() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="app-container">
      {reactQuestions.map((item) => (
        <FlashCard
          question={item.question}
          answer={item.answer}
          key={item.id}
          id={item.id}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  );
}

export default App;
