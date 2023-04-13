import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Stars({ stars }) {
  const tempStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="stars">
      <span className="text-[#f5f526] flex gap-[4px]">{tempStar}</span>
    </div>
  );
}

export default Stars;
