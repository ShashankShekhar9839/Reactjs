import React from "react";

const NextButton = ({ answer, dispatch, index, totalQuestions }) => {
  if (index < totalQuestions - 1) {
    return (
      <button
        className="next-btn"
        disabled={answer === null}
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  if (index === totalQuestions - 1 && answer !== null) {
    return (
      <button className="next-btn" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
  }
};

export default NextButton;
