import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";

function Filters() {
  const { all_products } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  console.log(categories);

  return (
    <div className="mt-8 pr-4">
      <form onClick={(e) => e.preventDefault()}>
        <div className="mb-6">
          <input
            type="text"
            name=""
            className="border border-white text-white p-1 rounded-lg"
            placeholder="Search"
          />
        </div>
        <div className="mb-6">
          <h5 className="mb-2 font-bold">Category</h5>
          <div>
            {categories.map((item, i) => (
              <button className="block py-[2px]" key={i}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h5 className="mb-2 font-bold">Company</h5>
          <select name="" className="text-black">
            {companies.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <h5 className="mb-2 font-bold">Colors</h5>
          <div className="flex items-center">
            {colors.map((c, i) => {
              if (c === "all") {
                return (
                  <button className="mr-2" key={i}>
                    All
                  </button>
                );
              }
              return (
                <button
                  key={i}
                  style={{ background: c }}
                  className="w-4 h-4 rounded-[50%]  bg-[#222] mr-2 border-none cursor-pointer opacity-50 inline-flex items-center justify-center"
                ></button>
              );
            })}
          </div>
        </div>
        <div className="mb-6">
          <h5 className="mb-2 font-bold">Prices</h5>
          <h5 className="text-white">{formatPrice(10)}</h5>
          <input type="range" name="price" min={0} max={10} />
        </div>
        <div className="mb-6 flex gap-4">
          <label className="font-bold" htmlFor="shipping">
            Free shipping
          </label>
          <div>
            <input className="text-black" type="checkbox" />
          </div>
        </div>
      </form>
      <button className="btn">Clear Filters</button>
    </div>
  );
}

export default Filters;
