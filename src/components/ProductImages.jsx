import React, { useState } from "react";

function ProductImages({ images = [{ url: "" }] }) {
  const [main, setMain] = useState(images[0]);
  return (
    <div className="">
      <img src={main.url} alt="img" className="w-auto h-[400px] lg:h-[300px] lg1:w-full" />
      <div className="flex  mt-6 gap-4 cursor-pointer ">
        {images.map((item, i) => (
          <img
            className={`w-[94px] tl:w-14 rounded-lg ${main !== images[i] ? "opacity-25" : null}`}
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
