import React from "react";
import { services } from "../utils/constants";

function Services() {
  return (
    <section className="my-20  py-4  ">
      <div className="flex justify-between items-center p-2 gap-2 my-4 lg1:flex-col lg1:justify-start lg1:items-start">
        <h2>
          Custom Furniture <br/> Built Only For You
        </h2>
        <p className="max-w-[650px] text-white leading-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </div>
      <div className="flex justify-center items-center p-2 gap-6 mb-10 lg:flex-col ">
        {services.map((item) => (
          <div
            className="box p-10 flex gap-3 flex-col justify-center items-center bg-[#171717] text-center rounded-lg"
            key={item.id}
          >
            <span className="text-2xl">{item.icon}</span>
            <h3>{item.title}</h3>
            <p className="text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
