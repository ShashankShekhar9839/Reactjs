import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div style={{ margin: "auto" }}>
      <Header />
      <Form itemList={items} addItem={addItem} />
      <PackingList itemList={items} />
    </div>
  );
}

export default App;
