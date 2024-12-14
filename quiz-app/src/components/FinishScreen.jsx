import React from "react";

const FinishScreen = ({ points, totalPoints }) => {
  const percentage = (points / totalPoints) * 100;
  return (
    <h3>
      Your total score is {points} out of {totalPoints} ({percentage.toFixed(1)}
      %)
    </h3>
  );
};

export default FinishScreen;
