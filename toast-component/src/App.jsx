import React from "react";
import { useToast } from "../src/hooks/useToast";
import "./App.css";
import Toast from "../src/components/Toast";

const App = () => {
  const { addToast } = useToast();
  return (
    <div className="p-5">
      <button
        onClick={() => addToast("Success message!", "success")}
        className="bg-green-500 text-white p-2 rounded"
      >
        Show Success Toast
      </button>
      <button
        onClick={() => addToast("Error message!", "error", 8000)}
        className="bg-red-500 text-white p-2 rounded ml-2"
      >
        Show Error Toast
      </button>
      <Toast />
    </div>
  );
};

export default App;
