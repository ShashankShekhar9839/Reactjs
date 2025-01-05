import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";

const App = () => {
  let [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    try {
      let res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
      );
      let data = await res.json();

      if (data) {
        setProducts(data);
        setTotalPages(Math.ceil(data.total / 10));
      }
    } catch {
      console.log("failed to laod data");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <Pagination count={totalPages} onChange={handleChange} />
      <ProductList products={products} />
    </>
  );
};

export default App;
