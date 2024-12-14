import React from "react";

const Options = ({ options, dispatch, answer, question }) => {
  const hasAnswered = answer !== null;

  return (
    <div className="option-wrapper">
      {options.map((option, index) => (
        <button
          className={`option ${answer === index ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctAnswer
                ? "correct"
                : ""
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
