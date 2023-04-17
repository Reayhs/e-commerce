import React from "react";
import PageHero from "../components/PageHero";
import CartContent from "../components/CartContent";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="page-100">
        <div className="empty">
          <h2>your cart is empyt</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <PageHero title="Cart" />
      <div className="page section-center">
        <CartContent />
      </div>
    </div>
  );
}

export default CartPage;
