import React from "react";
import familyOwnied from "../../../assets/images/FamilyOwnedBRAND.jpg";
import HandCrafted from "../../../assets/images/HandCraftedPRODUCTS.jpg";
import CreatedInTheUSA from "../../../assets/images/CreatedInTheUSA.jpg";
import { Link } from "react-router-dom";

export default function FeatureSection() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      <div className="w-full md:w-[31%] min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[300px] relative flex flex-col items-center justify-center overflow-hidden">
        <img
          src={familyOwnied}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Family Owned"
        />
        <div className="relative flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-2xl font-['Playfair_Display'] text-center">
            Family Owned
          </h1>
          <h1 className="text-white font-bungee text-3xl sm:text-4xl lg:text-3xl text-center">
            BRAND
          </h1>
          <div className="mt-2 h-1 w-10 bg-white"></div>
          <Link
            to="/ourStory"
            className="mt-4 text-white underline text-base sm:text-lg lg:text-base hover:text-[#bc4c2a]"
          >
            Read our story
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[31%] min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[300px] relative flex flex-col items-center justify-center overflow-hidden">
        <img
          src={HandCrafted}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Hand Crafted"
        />
        <div className="relative flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-2xl font-['Playfair_Display'] text-center">
            Hand Crafted
          </h1>
          <h1 className="text-white font-bungee text-3xl sm:text-4xl lg:text-3xl text-center">
            PRODUCTS
          </h1>
          <div className="mt-2 h-1 w-10 bg-white"></div>
          <Link
            to="/ourCraft"
            className="mt-4 text-white underline text-base sm:text-lg lg:text-base hover:text-[#bc4c2a]"
          >
            About our leather
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[31%] min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[300px] relative flex flex-col items-center justify-center overflow-hidden">
        <img
          src={CreatedInTheUSA}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Created In The USA"
        />
        <div className="relative flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-2xl font-['Playfair_Display'] text-center">
            Created In The
          </h1>
          <h1 className="text-white font-bungee text-3xl sm:text-4xl lg:text-3xl text-center">
            USA
          </h1>
          <div className="mt-2 h-1 w-10 bg-white"></div>
          <Link
            to="/ourCraft"
            className="mt-4 text-white underline text-base sm:text-lg lg:text-base hover:text-[#bc4c2a]"
          >
            Learn our process
          </Link>
        </div>
      </div>
    </div>
  );
}