import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Stopwatch time in seconds
  const intervalRef = useRef(null); // Ref to store the interval ID

  const handleMouseEnter = () => {
    // Start the stopwatch if not already running
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    }
  };

  const handleMouseLeave = () => {
    // Stop the stopwatch
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div
      className="stopwatch-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "200px",
        height: "200px",
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      {formatTime(time)}
    </div>
  );
};

// Helper function to format time as HH:MM:SS
const formatTime = (time) => {
  const milliseconds = Math.floor((time % 1000) / 10); // Get centiseconds
  const seconds = Math.floor((time / 1000) % 60); // Get seconds
  const minutes = Math.floor((time / (1000 * 60)) % 60); // Get minutes
  const hours = Math.floor(time / (1000 * 60 * 60)); // Get hours

  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
    milliseconds.toString().padStart(2, "0"),
  ].join(":");
};

export default Stopwatch;
