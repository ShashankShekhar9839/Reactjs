import "./App.css";
import Notes from "./components/Notes";
import data from "../src/data/data";

function App() {
  return (
    <>
     {data.map((item) => (
        <Notes note={item.text} key={item.id}/>
      ))}
    </>
  );
}

export default App;
