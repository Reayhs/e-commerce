import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cart_context";

function AddToCart({ product }) {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const increase = () => {
    const check = Math.min(amount + 1, stock);
    setAmount(check);
  };

  const decrease = () => {
    const check = Math.max(amount - 1, 1);
    setAmount(check);
  };
  return (
    <>
      <div className="flex gap-4 my-4">
        <span className="font-bold"> colors:</span>
        <div className="flex">
          {colors.map((color, i) => (
            <button
              className={`w-[1.5rem] h-[1.5rem] bg-[#222] mr-[0.5rem] border-none cursor-pointer opacity-50  flex items-center justify-center rounded-[50%]  ${
                mainColor === color ? "opacity-[1]" : ""
              }`}
              style={{ background: color }}
              key={i}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </>
  );
}

export default AddToCart;
