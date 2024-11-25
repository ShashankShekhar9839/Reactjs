import React, { useState } from "react";
import Button from "./Button";

const FormBillSplit = ({ selectedFriend, onBillSplit }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";

  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (event) => {
    event.preventDefault();
    onBillSplit(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Split Bill With {selectedFriend.name}</h2>
      <div>
        <label>💵 Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(event) => setBill(Number(event.target.value))}
        />
      </div>

      <div>
        <label>👤 Your Expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(event) =>
            setPaidByUser(
              Number(
                event.target.value > bill
                  ? paidByUser
                  : Number(event.target.value)
              )
            )
          }
        />
      </div>

      <div>
        <label>🫂 {selectedFriend.name}'s Expense</label>
        <input type="text" disabled value={paidByFriend} />
      </div>

      <div>
        <label>Who is paying the bill</label>
        <select
          value={whoIsPaying}
          onChange={(event) => setWhoIsPaying(event.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormBillSplit;
