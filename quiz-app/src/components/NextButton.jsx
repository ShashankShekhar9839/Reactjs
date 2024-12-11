import React from "react";

const NextButton = ({ answer, dispatch }) => {
  return (
    <button
      className="next-btn"
      disabled={answer === null}
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
};

export default NextButton;
