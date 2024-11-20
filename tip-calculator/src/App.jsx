import { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import Select from "./components/Select";

const tipPercentages = [
  { rating: "Excellent", percentage: 20 },
  { rating: "Good", percentage: 15 },
  { rating: "Average", percentage: 10 },
  { rating: "Poor", percentage: 5 },
  { rating: "Terrible", percentage: 0 },
];

function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const onBillChange = (bill) => {
    setBill(bill);
  };

  const onPercentageOneChange = (percentage1) => {
    setPercentage1(percentage1);
  };

  const onPercentageTwoChange = (percentage2) => {
    setPercentage2(percentage2);
  };

  const handleReset = () => {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  };

  let tipPercentage = (percentage1 + percentage2) / 2;
  let tipAmount = (bill * tipPercentage) / 100;

  return (
    <div className="app-container">
      <h2>Calculate Tip for your Bill</h2>
      <div className="bill-container">
        <div>
          <h3>Enter Total Bill Amount : </h3>
          <Input
            type="text"
            placeholder="Enter bill amount"
            onAmountChange={onBillChange}
            bill={bill}
          />
        </div>
        <div>
          <h3>How Did You Like the Service</h3>
          <Select
            options={tipPercentages}
            onSelect={onPercentageOneChange}
            value={percentage1}
          />
        </div>
        <div>
          <h3>How Did You Friend Like the Service</h3>
          <Select
            options={tipPercentages}
            onSelect={onPercentageTwoChange}
            value={percentage2}
          />
        </div>
        <button onClick={handleReset}>Reset</button>
        <h2>
          Yout total amount is {bill + tipAmount} (bill : {bill} & tip :
          {tipAmount} )
        </h2>
      </div>
    </div>
  );
}

export default App;
