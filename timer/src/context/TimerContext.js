import { createContext, useContext } from "react";

let TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0); // Total time in milliseconds
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      const startTime = Date.now() - time; // Resume from previous time
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10); // Update every 10ms
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <TimerContext.Provider value={{ time, startTimer, stopTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  let context = useContext(TimerContext);
  if (context === undefined) return;

  return context;
};
