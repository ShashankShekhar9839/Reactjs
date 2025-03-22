import React, { useState, useEffect } from "react";
import Button from "./Button";

const CountDownTimer = ({ time = 70 }) => {
  const [secondsLeft, setSecondsLeft] = useState(time * 60); // Convert total minutes to seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;
    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>{formatTime()}</div>

      <Button onClick={() => setIsRunning(true)}>Play</Button>
      <Button
        onClick={() => {
          setSecondsLeft(0);
          setIsRunning(false);
        }}
      >
        Reset
      </Button>
    </div>
  );
};

export default CountDownTimer;
