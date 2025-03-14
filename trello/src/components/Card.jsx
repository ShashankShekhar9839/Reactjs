import React from "react";
import "../css/card.css";
import Button from "./Button";

const Card = ({ text, onClick }) => {
  return (
    <div className="card">
      <span>{text}</span>
      <Button size="small" color="light">
        Edit
      </Button>
    </div>
  );
};

export default Card;
