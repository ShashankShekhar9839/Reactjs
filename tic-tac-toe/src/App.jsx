import React from "react";
import boxConfig from "./config";

const App = () => {
  return (
    <div className="wrapper">
      {boxConfig.map((item) => {
        return item.map((cell) => {
          return <button></button>;
        });
      })}
    </div>
  );
};

export default App;
