import React, { useState } from "react";

function ProductImages({ images = [{ url: "" }] }) {
  const [main, setMain] = useState(images[0]);
  return (
    <div className="">
      <img src={main.url} alt="img" className="w-[475px] h-[500px]" />
      <div className="flex  mt-6 gap-4 cursor-pointer ">
        {images.map((item, i) => (
          <img
            className={`w-[82px] h-[74px] lg:w-[48px]  tl:w-12 tl:h-[56px] rounded-lg  ${main !== images[i] ? "opacity-25" : null}`}
            src={item.url}
            alt="img"
            onClick={() => setMain(images[i])}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
