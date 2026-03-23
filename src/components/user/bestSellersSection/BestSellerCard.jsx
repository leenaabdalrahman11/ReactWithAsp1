import React from 'react'
export default function BestSellerCard({ name, price ,image }) {
  console.log(image);
  
  return (
    <div className="card border-0 shrink-0" style={{ width: "250px" }}>
      
      <img src={image } className="card-img-top" alt="..." />
      <div className="card-body flex flex-col flex-wrap items-center justify-center ">
        <h2 className="font-thin text-[18px]">{name}</h2>
        <span className="text-[#bc4c2a] ">${price}</span>
      </div>
    </div>
  );
}