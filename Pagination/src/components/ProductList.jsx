import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  let productList = products?.products;

  return (
    <div className="products">
      {productList?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
