import React, { useEffect, useState, useRef } from "react";

const Progressbar = ({ time = 2000, interval = 10 }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  let startTime = useRef(Date.now());

  useEffect(() => {
    const step = 100 / (time / interval);

    const timer = setInterval(() => {
      setProgressWidth((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer);
          console.log(Date.now() - startTime.current);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [time, interval]);

  return (
    <div style={{ height: "30px", width: "400px", border: "1px solid gray" }}>
      <div
        style={{
          width: `${progressWidth}%`,
          backgroundColor: "blueviolet",
          height: "30px",
          transition: `width ${interval}ms linear`,
        }}
      >
        {Math.floor(progressWidth)}
      </div>
    </div>
  );
};

export default Progressbar;
