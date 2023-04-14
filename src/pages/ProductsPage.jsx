import React from "react";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import PageHero from "../components/PageHero";

function ProductsPage() {
  return (
    <>
      <PageHero title="Products" />
      <div className="section-center flex">
        <Filters />
        <div className="">
          <Sort />
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
