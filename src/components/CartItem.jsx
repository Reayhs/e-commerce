import React from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";

function CartItem({ id, images, name, color, price, amount }) {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <div className="flex justify-between items-center my-10">
      <div className="flex items-center ">
        <img className="w-[200px] h-[150px] tl:w-[70px] tl:h-[60px]" src={images} alt={name} />
        <div className="ml-4">
          <h5 className="name">{name}</h5>
          <p className="flex items-center gap-2 text-white">
            color:{" "}
            <span
              className="w-4 h-4 rounded-[50%]  bg-[#222] mr-2 border-none cursor-pointer opacity-50 inline-flex items-center justify-center"
              style={{ background: color }}
            ></span>
          </p>
        </div>
      </div>
      <h5 className="lg:hidden">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="lg:hidden">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
