import React from "react";
import { useProductsContext } from "../context/products_context";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

function FeaturedProduct() {
  const {
    featured_product: product,
    product_loading: loading,
    product_error: error,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <h1>Featured Products</h1>
      {featured.slice(0, 3).map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}

export default FeaturedProduct;
