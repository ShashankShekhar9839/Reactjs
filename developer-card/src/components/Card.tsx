import React from "react";
import "../css/card.css";

interface CardProps {
  direction?: "horizontal" | "vertical";
  children?: any;
}

const Card: React.FC<CardProps> = ({ direction, children }) => {
  return <div className={`card ${direction}`}>{children}</div>;
};

export default Card;
