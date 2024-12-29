import { useTimer } from "../context/TimerContext";

const Timer = () => {
  const { time, startTimer, stopTimer } = useTimer();

  const handleMouseEnter = () => {
    if (startTimer) {
      startTimer();
    }
  };

  const handleMouseLeave = () => {
    if (stopTimer) {
      stopTimer();
    }
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

export default Timer;
