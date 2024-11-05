import React from "react";
import "../css/intro.css";

interface IntroProps {
  name?: string;
  description?: string;
}

const Intro: React.FC<IntroProps> = ({ name, description }) => {
  return (
    <div className="intro-wrapper">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Intro;
