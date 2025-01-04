import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  const { products: productList } = products;
  console.log(typeof productList);
  return (
    <>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};

export default ProductList;
