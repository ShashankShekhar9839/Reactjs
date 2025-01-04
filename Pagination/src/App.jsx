import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  let [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let res = await fetch(`https://dummyjson.com/products?limit=10&skip=10`);
    let data = await res.json();

    if (data) {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default App;
