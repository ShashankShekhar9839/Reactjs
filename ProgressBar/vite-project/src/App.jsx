import { useState } from "react";

import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() { 
   
  const [progressPercentage, setProgressPercentage] = useState(0);

  const handleClick = () => {
    if(progressPercentage <100) {
      setProgressPercentage(progressPercentage + 10);
    }
  } 

  console.log(progressPercentage)

  return (
    <>
      <ProgressBar progressPercentage={progressPercentage} backgroundColor = "green"/> 
      <p>You have completed, {progressPercentage}%</p>
      <button style={{ marginTop: "20px" }} onClick={handleClick}>Fill Me</button>
    </>
  );
}

export default App;
