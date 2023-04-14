import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

function Sort() {
  const { gridView, listView, grid_view, filtered_products, updateSort, sort } =
    useFilterContext();
  return (
    <>
      <div className="flex justify-between items-center gap-4 p-4">
        <div className="flex items-center">
          <button
            onClick={gridView}
            className={` border p-1 ${grid_view && "bg-white text-black"}`}
          >
            <BsFillGridFill />
          </button>
          <button
            className={` border p-1 ml-2 ${grid_view || "bg-white text-black"}`}
            onClick={listView}
          >
            <BsList />
          </button>
          <p className="text-white font-bold mt-4 ml-4">
            {filtered_products.length} Products Found
          </p>
        </div>
        <hr />
        <form className="">
          <label className="mr-3 font-bold" htmlFor="sort">
            Sort by
          </label>
          <select
            name="sort"
            id="sort"
            className=" text-black p-1 rounded-lg"
            value={sort}
            onChange={updateSort}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a-z)</option>
            <option value="name-z">name (z-a)</option>
          </select>
        </form>
      </div>
    </>
  );
}

export default Sort;
