import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Product({ image, name, price, id }) {
  return (
    <div className="p-4">
      <div className="relative blabla">
        <img
          src={image}
          alt={name}
          className="w-[380px] h-[220px] rounded-2xl"
        />
        <Link
          to={`/products/${id}`}
          className="absolute top-[45%] left-[45%] text-[#171717] font-bold text-3xl opacity-0 link"
        >
          <FaSearch />
        </Link>
      </div>
      <div className="flex justify-between items-center py-4 ">
        <h5>{name}</h5>
        <p className="text-white">{price}</p>
      </div>
    </div>
  );
}

export default Product;
