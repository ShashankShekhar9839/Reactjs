import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
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

  return (
    <div style={{ margin: "auto" }}>
      <Header />
      <Form itemList={items} addItem={addItem} />
      <PackingList
        itemList={items}
        onDeleteItem={handleDeleteItem}
        onItemToggle={handleCheckedItem}
        onClear={handleClear}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
