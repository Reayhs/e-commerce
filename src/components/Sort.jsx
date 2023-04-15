import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

function Sort() {
  const { gridView, listView, grid_view, filtered_products, updateSort, sort } =
    useFilterContext();
  return (
    <>
      <div className="flex justify-between p-5 tl:p-0 items-center gap-4  tl:flex-col tl:items-start tl:mt-8">
        <div className="flex items-center tl:flex-col tl:items-start">
          <div className="flex">
            <button
              onClick={gridView}
              className={` border p-1 ${grid_view && "bg-white text-black"}`}
            >
              <BsFillGridFill />
            </button>
            <button
              className={` border p-1 ml-2 ${
                grid_view || "bg-white text-black"
              }`}
              onClick={listView}
            >
              <BsList />
            </button>
          </div>
          <p className="text-white font-bold mt-4 ml-4 tl:block tl:ml-0 ">
            <span>{filtered_products.length} </span> Products Found
          </p>
        </div>
        <hr className="font-bold  w-[480px] lg1:w-full " />
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
