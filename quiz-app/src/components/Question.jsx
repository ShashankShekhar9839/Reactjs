import React from "react";
import Options from "./Options";

const Question = ({ question }) => {
  return (
    <div className="question">
      <h3>{question.question}</h3>
      <Options options={question.options} />
    </div>
  );
};

export default Question;
