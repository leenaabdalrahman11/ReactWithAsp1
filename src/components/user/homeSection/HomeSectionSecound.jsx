import React from "react";
import SecoundHomeImage from "../../../assets/images/SecoundHomeSection.jpg";
import SecoundImage from "../../../assets/images/SecoundImage.jpg";

export default function HomeSectionSecound() {
  return (
    <>
        <div className="flex flex-col-reverse lg:flex-row min-h-screen">
        <div
          className="w-full lg:w-1/2 min-h-[45vh] sm:min-h-[55vh] lg:min-h-screen relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${SecoundHomeImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "90% 100%",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="w-full lg:w-1/2 bg-[#f5f2ef] flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-14">
          <img
            src={SecoundImage}
            alt="Bag"
            className="w-[75%] sm:w-[60%] md:w-[50%] lg:w-[60%] h-auto max-h-[260px] sm:max-h-[320px] md:max-h-[380px] object-contain"
          />

          <div className="flex flex-col items-center group mt-6 sm:mt-8 w-full max-w-[400px]">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-thin text-center transition-all duration-300 group-hover:hidden">
              I'm a Product
            </h1>

            <span className="text-base sm:text-lg md:text-xl font-bold mt-2 transition-all duration-300 group-hover:hidden">
              $100.00
            </span>

            <button className="px-6 py-3 border w-full sm:w-[320px] md:w-[380px] lg:w-[400px] rounded-md border-[#bc4c2a] text-[#bc4c2a] hidden group-hover:block hover:bg-[#bc4c2a] hover:text-white transition-colors mt-4">
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}