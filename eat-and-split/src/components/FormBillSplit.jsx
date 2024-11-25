import React from "react";
import Button from "./Button";

const FormBillSplit = () => {
  return (
    <form className="form">
      <h2>Split Bill With X</h2>
      <div>
        <label>💵 Bill Value</label>
        <input type="text" />
      </div>

      <div>
        <label>👤 Your Expense</label>
        <input type="text" />
      </div>

      <div>
        <label>🫂 X's Expense</label>
        <input type="text" disabled />
      </div>

      <div>
        <label>Who is paying the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>
      </div>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormBillSplit;
