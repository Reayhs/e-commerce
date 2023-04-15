import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";

function Filters() {
  const {
    all_products,
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  console.log(categories);

  return (
    <div className="my-8 pr-4  ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-6">
          <input
            type="text"
            name="text"
            className="border border-whitee p-1 rounded-lg text-black"
            placeholder="Search"
            value={text}
            onChange={updateFilters}
          />
        </div>
        <div className="mb-6">
          <h5 className="mb-2 font-bold">Category</h5>
          <div>
            {categories.map((item, i) => (
              <button
                className="block py-[2px]"
                key={i}
                name="category"
                onClick={updateFilters}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h5 className="mb-2 font-bold">Company</h5>
          <select
            name="company"
            className="text-black rounded-lg p-1 cursor-pointer"
            onChange={updateFilters}
            value={company}
          >
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
                  <button
                    className="mr-2"
                    key={i}
                    name="color"
                    onClick={updateFilters}
                    data-color="all"
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  key={i}
                  style={{ background: c }}
                  name="color"
                  data-color={c}
                  onClick={updateFilters}
                  className="w-4 h-4 rounded-[50%]  bg-[#222] mr-2 border-none cursor-pointer opacity-50 inline-flex items-center justify-center"
                ></button>
              );
            })}
          </div>
        </div>
        <div className="mb-6">
          <h5 className="mb-2 font-bold">Prices</h5>
          <h5 className="text-white">{formatPrice(price)}</h5>
          <input
            type="range"
            name="price"
            min={min_price}
            max={max_price}
            onChange={updateFilters}
            value={price}
          />
        </div>
        <div className="mb-6 flex gap-4">
          <label className="font-bold" htmlFor="shipping">
            Free shipping
          </label>
          <div>
            <input
              className="text-black"
              type="checkbox"
              name="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </div>
      </form>
      <button onClick={clearFilters} className="btn">
        Clear Filters
      </button>
    </div>
  );
}

export default Filters;
