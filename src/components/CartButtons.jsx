import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

function CartButton() {
  const { total_items } = useCartContext();
  return (
    <>
      <Link to="/cart" className="flex items-center text-2xl gap-2">
        Cart
        <span className="relative">
          <FaShoppingCart />
          <span className=" text-[10px p-[2px] font-bold text-lg absolute top-[-22px] left-[22px]  right-0">
            {total_items}
          </span>
        </span>
      </Link>
      <button type="button" className="flex  items-center text-2xl gap-2">
        <span>Login</span> <FaUserPlus />
      </button>
    </>
  );
}

export default CartButton;
