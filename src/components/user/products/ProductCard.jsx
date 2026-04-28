import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, name, price, image }) {
  return (
    <div className="card border-0 shrink-0 bg-white w-full max-w-[230px] sm:max-w-[250px] md:max-w-[270px] lg:max-w-[290px] xl:max-w-[310px] shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden">
      <Link to={`/productDetails/${id}`} className="no-underline block">
        <img
          src={image}
          className="card-img-top w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px] object-cover"
          alt={name}
        />

        <div className="card-body flex flex-col items-center justify-center text-center !text-black px-3 py-4">
          <h2 className="font-thin text-sm sm:text-base md:text-[17px] lg:text-[18px] line-clamp-2 min-h-[40px] flex items-center justify-center">
            {name}
          </h2>
          <span className="text-[#bc4c2a] text-sm sm:text-base mt-1">
            ${price}
          </span>
        </div>
      </Link>
    </div>
  );
}