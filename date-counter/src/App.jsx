import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepIncreament = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleStepDecreament = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleCountIncreament = () => {
    setCount((prevCount) => prevCount + step);
  };

  const handleCountDecrement = () => {
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
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from Today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </h3>
      </div>
    </>
  );
}

export default App;
