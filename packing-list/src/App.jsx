import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheckedItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClear = () => {
    setItems([]);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div style={{ margin: "auto" }}>
      <Header />
      <Form itemList={items} addItem={addItem} />
      <PackingList
        itemList={items}
        onDeleteItem={handleDeleteItem}
        onItemToggle={handleCheckedItem}
      />
      <Footer items={items} onClear={handleClear} />
    </div>
  );
}

export default App;
