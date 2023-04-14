import React from "react";
import Product from "./Product";

function GridView({ products }) {
  return (
    <div className="grid grid-cols-3 lg:flex lg1:flex-wrap justify-start ">
      {products.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}

export default GridView;
