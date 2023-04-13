import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function AmountButtons({ increase, decrease, amount }) {
  return (
    <>
      <div className="flex gap-3 items-center my-2">
        <button type="button" className="" onClick={decrease}>
          <FaMinus />
        </button>
        <h2 className="amount">{amount}</h2>
        <button type="button" className="" onClick={increase}>
          <FaPlus />
        </button>
      </div>
    </>
  );
}

export default AmountButtons;
