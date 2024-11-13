import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  let [step, setStep] = useState(0);
  let [count, setCount] = useState(0);

  const date = new Date();
  const adjustedDate = new Date(date);
  adjustedDate.setDate(date.getDate() + count);
  const dayName = adjustedDate.toLocaleDateString("en-US", { weekday: "long" });

  const days = count > 0 ? count : -1 * count;

  const handleStepIncreament = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleStepDecreament = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleCountIncreament = () => {
    if (step === 0) {
      alert("steps are 0, you can not move zero step, increase your steps");
    }
    setCount((prevCount) => prevCount + step);
  };

  const handleCountDecrement = () => {
    if (step === 0) {
      alert("steps are 0, you can not move zero step, increase your steps");
    }
    setCount((prevCount) => prevCount - step);
  };

  return (
    <>
      <div>
        <Button label="decrease" onClick={handleStepDecreament} />
        <span style={{ marginLeft: "20px", marginRight: "20px" }}>
          Step : {step}
        </span>
        <Button label="Increase" onClick={handleStepIncreament} />
      </div>

      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Button label="decrease" onClick={handleCountDecrement} />
        <span style={{ marginLeft: "20px", marginRight: "20px" }}>
          Count : {count}
        </span>
        <Button label="Increase" onClick={handleCountIncreament} />
      </div>
      <div>
        <h3>
          {days} {days > 0 ? "days from" : "days ago"} from Today is {dayName}{" "}
        </h3>
      </div>
    </>
  );
}

export default App;
