import React from "react";
import { links } from "../utils/constants";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";

function Navbar() {
  const { sideBarOpen } = useProductsContext();
  return (
    <nav className="flex justify-between items-center py-4 section-center">
      <div className="cursor-pointer">
        <Link to="/">
          <img
            src="/src/assets/logo.svg"
            alt="logo"
            className="w-48 ml-[-15px]"
          />
        </Link>
      </div>
      <button
        type="button"
        className=" text-3xl hidden lg:flex text-[#ffffff]"
        onClick={sideBarOpen}
      >
        <FaBars />
      </button>
      <ul className="flex gap-8 text-[18px] lg:hidden">
        {links.map((item) => (
          <Link key={item.id} to={item.url}>
            <li className="text-[#ffffff] cursor-pointer" key={item.id}>
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex gap-8 lg:hidden">
        <CartButtons />
      </div>
    </nav>
  );
}

export default Navbar;
