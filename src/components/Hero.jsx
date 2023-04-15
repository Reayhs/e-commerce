import React from "react";
import hero from "../assets/hero-bcg.jpeg";
import hero2 from "../assets/hero-bcg-2.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className=" my-10 py-2 ">
      <div className="flex justify-between mx-auto items-center gap-32 p-4  mg:flex-col mg:items-start mg:gap-">
        <div className="flex flex-col gap-4">
          <h2>
            Desing Your <br /> Comfort Zone
          </h2>
          <p className="text-white max-w-[550px] leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/products">
            <button className="bg-[#171717] p-2 w-48 hover:bg-white hover:text-[#171717]">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="relative">
          <img
            src={hero}
            alt=""
            className="w-96 h-[500px] lg:h-auto rounded-2xl"
          />
          <img
            src={hero2}
            alt=""
            className="w-96 absolute bottom-[-30px] left-[-140px] mg:hidden rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
