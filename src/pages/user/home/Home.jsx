import React from "react";
import homeImg from "../../../assets/images/HomePage.avif";
import BestSellers from "../../../components/user/bestSellersSection/BestSellers";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import HomeSection from "../../../components/user/homeSection/HomeSection";
import HomeSectionSecound from "../../../components/user/homeSection/HomeSectionSecound";
import FeatureSection from "../../../components/user/featureSection/FeatureSection";
import FollowSection from "../../../components/user/followSection/FollowSection";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center h-[60vh] sm:h-[70vh] md:h-[80vh] px-4 text-center">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center brightness-50"
          style={{ backgroundImage: `url(${homeImg})` }}
        />

        <h1
          className={`relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${styles.title}`}
        >
          Dev Hub Store 
        </h1>

        <Link to="/products">
          <button
            className={`relative border border-white text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-md mt-4 text-sm sm:text-base md:text-lg ${styles.button}`}
          >
            Show The Collection
          </button>
        </Link>
      </div>

      <BestSellers />
      <HomeSection />
      <HomeSectionSecound />
      <FeatureSection />
      <FollowSection />
    </>
  );
}