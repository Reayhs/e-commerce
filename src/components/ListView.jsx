import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

function ListView({ products }) {
  return (
    <div>
      {products.map((item) => (
        <div
          key={item.id}
          className="box flex justify-center items-center gap-8 lg:flex-col  lg:items-start"
        >
          <div className="img">
            <img
              src={item.image}
              alt={item.name}
              className="w-[450px] h-[240px] my-4 rounded-2xl "
              
            />
          </div>
          <div className="content">
            <h3>{item.name}</h3>
            <p className="text-white">{formatPrice(item.price)}</p>
            <p>{item.view}</p>
            <p className="text-white">
              {item.description.substring(0, 150)}...
            </p>
            <Link to={`/products/${item.id}`} className="btn">
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListView;
