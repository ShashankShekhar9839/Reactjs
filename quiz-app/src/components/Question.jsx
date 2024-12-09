import React from "react";
import Options from "./Options";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div className="question">
      <h3>{question.question}</h3>
      <Options
        question={question}
        options={question.options}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
};

export default Question;
