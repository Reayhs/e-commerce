import React from "react";
import { useProductsContext } from "../context/products_context";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";

function FeaturedProduct() {
  const {
    featured_products: featured,
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
    <div className="flex flex-col  px-20 lg:px-4 my-28">
      <h1 className="text-center py-4">Featured Products</h1>
      <div className="flex justify-between items-center">
        {featured.slice(0, 3).map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
      <button className="bg-white border-[#171717] border text-[#171717]  w-48 mx-auto p-3 rounded-2xl hover:bg-[#171717] hover:text-white mt-2">
        All Products
      </button>
    </div>
  );
}

export default FeaturedProduct;
