import React from "react";

const Progress = ({ index, totalQuestions, points, totalPoints }) => {
  return (
    <div className="progress">
      <progress max={totalQuestions} value={index} />
      <div>
        <p>
          Question <strong>{index + 1}</strong>/{" "}
          <strong>{totalQuestions}</strong>
        </p>

        <p>
          <strong>{points} </strong>/<strong> {totalPoints}</strong>
        </p>
      </div>
    </div>
  );
};

export default Progress;
