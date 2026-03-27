import React from "react";
import familyOwnied from "../../../assets/images/FamilyOwnedBRAND.jpg";
import HandCrafted from "../../../assets/images/HandCraftedPRODUCTS.jpg";
import CreatedInTheUSA from "../../../assets/images/CreatedInTheUSA.jpg";
import { Link } from "react-router-dom";

export default function FeatureSection() {
  return (
    <div className="flex h-[50vh] justify-around p-[50px]">
      <div className="w-1/4 h-full relative  flex flex-col items-center justify-center overflow-hidden">
        <img
          src={familyOwnied}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Family Owned"
        />
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="relative text-white text-3xl font-['Playfair_Display'] text-center">
            Family Owned
          </h1>
          <h1 className="relative text-white font-bungee text-4xl text-center">
            BRAND
          </h1>
          <div className="relative mt-2 font-playfair text-xl h-1 w-10 bg-white"></div>
          <Link
            to="/ourStory"
            className="mt-4 text-white underline text-thin text-xl hover:text-[#bc4c2a]"
          >
            Read our story
          </Link>
        </div>
      </div>

      <div className="w-1/4 h-full relative flex flex-col items-center justify-center overflow-hidden">
        <img
          src={HandCrafted}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Hand Crafted"
        />
        <h1 className="relative text-white text-3xl font-['Playfair_Display'] text-center">
          Hand Crafted
        </h1>
        <h1 className="relative text-white font-bungee text-4xl text-center">
          PRODUCTS
        </h1>
        <div className="relative mt-2 font-playfair text-xl h-1 w-10 bg-white"></div>
        <Link
          to="/ourCraft"
          className="relative mt-4 text-white underline text-thin text-xl hover:text-[#bc4c2a]"
        >
          About our leather
        </Link>
      </div>

      <div className="w-1/4 h-full relative flex flex-col items-center justify-center overflow-hidden">
        <img
          src={CreatedInTheUSA}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Created In The USA"
        />
        <h1 className="relative text-white text-3xl font-['Playfair_Display'] text-center">
          Created In The
        </h1>
        <h1 className="relative text-white font-bungee text-4xl text-center">
          USA
        </h1>
        <div className="relative mt-2 font-playfair text-xl h-1 w-10 bg-white"></div>
        <Link
          to="/ourCraft"
          className="mt-4 relative text-white underline text-thin text-xl hover:text-[#bc4c2a]"
        >
          Learn our process
        </Link>
      </div>
    </div>
  );
}
