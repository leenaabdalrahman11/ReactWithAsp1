import React from "react";

export default function BestSellerCard({ name, price, image }) {
  console.log(image);

  return (
    <div className="card border-0 w-full max-w-[250px] mx-auto shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <img
        src={image}
        className="card-img-top w-full h-[260px] object-cover"
        alt={name}
      />
      <div className="card-body flex flex-col items-center justify-center text-center">
        <h2 className="font-thin text-[18px] mb-2">{name}</h2>
        <span className="text-[#bc4c2a] text-[20px]">${price}</span>
      </div>
    </div>
  );
}