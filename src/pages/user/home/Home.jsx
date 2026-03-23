import React from "react";
import homeImg from "../../../assets/images/HomePage.avif";
import BestSellers from "../../../components/user/bestSellersSection/BestSellers";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import HomeSection from "../../../components/user/homeSection/HomeSection";
export default function Home() {
  return (
    <>
      <div className="relative flex flex-wrap flex-col justify-center items-center h-[70vh]">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center brightness-50"
          style={{ backgroundImage: `url(${homeImg})` }}
        />

        <h1 className={`relative text-white text-[50px] ${styles.title}`}>
          CUE THE COLOR
        </h1>

        <Link to="/products">
          <button
            className={`relative border border-white text-white px-4 py-3 rounded-md mt-4 ${styles.button}`}
          >
            Show The Collection
          </button>
        </Link>
      </div>
      <BestSellers />
      <div className="p-6 container h-[10vh] flex items-center justify-center">
        <Link to="/products">
          <button
            className="text-[#bc4c2a] text-lg border-[#bc4c2a] border-1 hover:bg-[#bc4c2a]
             hover:text-white transition-colors py-2 px-8"
          >
            Shop All Bags
          </button>
        </Link>
      </div>
      <HomeSection />
    </>
  );
}
