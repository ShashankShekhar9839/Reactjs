import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

const CreateCustomer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  //dispatch function is used to dispatch an action, and the action cretor is imported from the slice file
  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
};

export default CreateCustomer;
