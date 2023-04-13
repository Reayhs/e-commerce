import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { FaTimes } from "react-icons/fa";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import logo from "../assets/logo.svg"

function Sidebar() {
  const { sideBarClose, isSidebarOpen } = useProductsContext();
  if (isSidebarOpen) {
    return (
      <div className="fixed top-0 left-0 h-full w-full bg-[#302d2d] pt-6 pl-10 hidden lg:block z-20  ">
        <FaTimes
          className="absolute right-[20px] top-6 text-white text-3xl cursor-pointer"
          onClick={sideBarClose}
        />
        <div className="cursor-pointer">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-48 ml-[-15px] "
            />
          </Link>
        </div>
        <ul className="flex flex-col  gap-8 text-[18px] mt-8 ">
          {links.map((item) => (
            <Link key={item.id} to={item.url}>
              <li className="text-white cursor-pointer" key={item.id}>
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex justify-center items-center text-white gap-10  mt-20">
          <CartButtons />
        </div>
      </div>
    );
  }
}

export default Sidebar;
