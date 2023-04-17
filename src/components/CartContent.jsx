import React from "react";
import CartTotals from "./CartTotals"
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem"

function CartContent() {
  const { cart, clearCart } = useCartContext();
  return (
    <div className="section-center">
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="flex items-center lg:flex-col lg:items-start lg:gap-4 mt-3">
        <Link to="/products" className="btn mr-8 ">
          Continue shopping
        </Link>
        <button
          type="button"
          className="btn"
          onClick={clearCart}
        >
          Clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
}

export default CartContent;
