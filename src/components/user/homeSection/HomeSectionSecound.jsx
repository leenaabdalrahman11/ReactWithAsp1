import React from "react";
import SecoundHomeImage from "../../../assets/images/SecoundHomeSection.jpg";
import SecoundImage from "../../../assets/images/SecoundImage.jpg";

export default function HomeSectionSecound() {
  return (
    <>
          <div className="flex h-screen">
            <div
              className="w-1/2 h-screen"
              style={{
                backgroundImage: `url(${SecoundHomeImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "90% 100%",
              }}
            >
              <div className="inset-0 bg-black/10" />
            </div>
            <div className="w-1/2 bg-[#f5f2ef] flex flex-col items-center justify-center ">
              <img
                src={SecoundImage}
                alt="Bag"
                className="w-[60%] h-[40%] object-contain"
              />
    
              <div className=" flex flex-col items-center group">
                <h1 className="text-2xl font-thin transition-all duration-300 group-hover:hidden">
                  I'm a Product
                </h1>
                <span className="text-lg font-bold mt-2 transition-all duration-300 group-hover:hidden">
                  $100.00
                </span>
    
                <button className=" px-6 py-3 border w-[400px] rounded-md border-[#bc4c2a] text-[#bc4c2a] hidden group-hover:block hover:bg-[#bc4c2a] hover:text-white transition-colors">
                  Details
                </button>
              </div>
            </div>

          </div>
      
    </>
  )
}
