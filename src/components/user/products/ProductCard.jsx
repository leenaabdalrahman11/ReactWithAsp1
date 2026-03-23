import React from "react";
import { Link } from "react-router-dom";
export default function ProductCard({id,name, price, image }) {

  return (
    <div className="card border-0 shrink-0 bg-pink-100 w-full sm:w-[180px] md:w-[200px] lg:w-[220px]">
      <Link to={`/productDetails/${id}`} className="no-underline ">
        <img src={image} className="card-img-top " alt="..." />
        <div className="card-body flex flex-col flex-wrap items-center justify-center !text-black ">
          <h2 className="font-thin text-[18px]">{name}</h2>
          <span className="text-[#bc4c2a] ">${price}</span>
        </div>
      </Link>
    </div>
  );
}
