import React from "react";

const StartScreen = ({ totalQuestions, dispatch }) => {
  return (
    <div className="start-screen-wrapper">
      <h2>Welcome to The React QUIZ</h2>
      <h3>Test your React Knowledge with {totalQuestions} questions</h3>
      <button onClick={() => dispatch({ type: "start" })}>Start Quiz</button>
    </div>
  );
};

export default StartScreen;
