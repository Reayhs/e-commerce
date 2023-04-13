import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";

import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
function SingleProductPage() {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <div>
      <PageHero title={name} product />
      <div className="section-center page-100">
        <Link to="/products" className="btn">
          Back to products
        </Link>
        <div className="wrapper flex justify-between items-center gap-24  py-8 lg:flex-col">
          <div className="flex-1">
            <ProductImages images={images} />
          </div>
          <div className="content flex-1">
            <h1>{name}</h1>
            <span className="flex gap-2 my-4 items-center">
              <Stars stars={stars} /> ({`${reviews} customer reviews`})
            </span>
            <h4 className="text-[#b38050]">{formatPrice(price)}</h4>
            <p className="text-white leading-8">{description}</p>
            <p className="text-white w-72 flex gap-20 capitalize">
              <span className="font-bold">SKU:</span>
              {sku}
            </p>
            <p className="text-white flex gap-10   w-72  capitalize">
              <span className="font-bold">Available :</span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="text-white flex gap-16   w-72  capitalize">
              <span className="font-bold">Brand :</span>
              {company}
            </p>
            <hr />
            {stock && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
