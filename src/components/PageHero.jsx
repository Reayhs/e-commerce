import React from "react";
import { Link } from "react-router-dom";

function PageHero({ title, product }) {
  return (
    <div className=" bg-[#986345]  p-10 ">
      <div className=" section-center">
        <h3>
          <Link className="font-bold text-[#d7cfcf]" to="/">
            Home
          </Link>{" "}
          / {product && "Product /"} {title}
        </h3>
      </div>
    </div>
  );
}

export default PageHero;
