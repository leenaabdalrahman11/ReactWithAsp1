import React from "react";
import homeSectionImg from "../../../assets/images/homwSection.jpg";

export default function HomeSection() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 bg-[#f5f2ef] flex items-center justify-center">
          <h1>Left</h1>
        </div>
        <div
          className="w-1/2 h-screen relative bg-cover bg-center"
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