import React from "react";

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
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button className="bg-[#171717] p-2 w-48">SHOP NOW</button>
      </div>
      <div className="relative">
        <img src="/src/assets/hero-bcg.jpeg" alt="" className="w-96" />
        <img src="/src/assets/hero-bcg-2.jpeg" alt="" className="w-80 absolute bottom-[-30px] left-[-100px] mg:hidden" />
      </div>
      </div>
    </div>
  );
}

export default Hero;
