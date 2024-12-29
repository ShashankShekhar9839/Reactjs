import Timer from "./components/Timer";
import Button from "./components/Button";
import { useTimer } from "./context/TimerContext";

const App = () => {
  const { resetTimer } = useTimer();
  return (
    <>
      <Timer />
      <Button onClick={resetTimer}>Reset</Button>
    </>
  );
};

export default App;
