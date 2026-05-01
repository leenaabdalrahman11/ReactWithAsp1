import React from "react";
import homeSectionImg from "../../../assets/images/homwSection.jpg";
import bagHomeSection from "../../../assets/images/BagHomeSection.jpg";

export default function HomeSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row min-h-screen">
        <div className="w-full md:w-1/2 bg-[#f5f2ef] flex flex-col items-center justify-center px-4 md:px-6 py-10 md:py-8 lg:py-0">
          <img
            src={bagHomeSection}
            alt="Bag"
            className="w-[75%] sm:w-[60%] md:w-[70%] lg:w-[60%] h-auto md:max-h-[280px] lg:h-[40%] object-contain"
          />

          <div className="flex flex-col items-center group mt-6 md:mt-6 lg:mt-0 w-full max-w-[400px]">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-thin transition-all duration-300 group-hover:hidden text-center">
              I'm a Product
            </h1>

            <span className="text-base sm:text-lg md:text-lg lg:text-lg font-bold mt-2 transition-all duration-300 group-hover:hidden">
              $100.00
            </span>

            <button className="px-6 py-3 border w-full sm:w-[320px] md:w-[280px] lg:w-[400px] rounded-md border-[#bc4c2a] text-[#bc4c2a] hidden group-hover:block hover:bg-[#bc4c2a] hover:text-white transition-colors mt-4">
              Details
            </button>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 h-[45vh] sm:h-[55vh] md:h-auto lg:h-screen relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeSectionImg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "100% 50%",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </>
  );
}