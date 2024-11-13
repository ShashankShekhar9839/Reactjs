import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  let [step, setStep] = useState(0);
  let [count, setCount] = useState(0);

  const date = new Date();
  const currentDate = date.toLocaleDateString();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
  console.log(dayName); // e.g., "Wednesday"

  return (
    <>
      <div>
        <Button label="decrease" />
        <span style={{ marginLeft: "20px", marginRight: "20px" }}>
          Step : {step}
        </span>
        <Button label="Increase" />
      </div>

      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Button label="decrease" />
        <span style={{ marginLeft: "20px", marginRight: "20px" }}>
          Count : {count}
        </span>
        <Button label="Increase" />
      </div>
      <div>
        <h3>
          Today is {dayName} on {currentDate}
        </h3>
      </div>
    </>
  );
}

export default App;
