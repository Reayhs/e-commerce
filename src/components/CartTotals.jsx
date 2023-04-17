import React from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";

function CartTotals() {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <div>
      <div>
        <article className="">
          <h5 className="mt-2">
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="text-white mt-2">
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4 className="my-6">
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
      </div>
    </div>
  );
}

export default CartTotals;
