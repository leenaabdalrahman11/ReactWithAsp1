import React, { useRef, useState } from "react";
import image from "../../../assets/images/image.png";
import image2Follow from "../../../assets/images/image2Follow.png";
import image3Follow from "../../../assets/images/image3Follow.png";
import image4Follow from "../../../assets/images/image4Follow.png";
import image5Follow from "../../../assets/images/image5Follow.png";
import image6Follow from "../../../assets/images/image6Follow.png";
import image7Follow from "../../../assets/images/image7Follow.png";
import image8Follow from "../../../assets/images/image8Follow.png";
import image9Follow from "../../../assets/images/image9Follow.png";
import image10Follow from "../../../assets/images/image10Follow.png";
import image11Follow from "../../../assets/images/image11Follow.png";
import image12Follow from "../../../assets/images/image12Follow.png";

export default function FollowSection() {
  const scrollRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const images = [
    image,
    image2Follow,
    image3Follow,
    image4Follow,
    image5Follow,
    image6Follow,
    image7Follow,
    image8Follow,
    image9Follow,
    image10Follow,
    image11Follow,
    image12Follow,
  ];

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex w-full flex-col bg-orange-50 items-center justify-center px-3 sm:px-4 md:px-6 py-6 sm:py-8">
      <div className="text-center w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 m-4 sm:m-5 flex items-center justify-center px-2">
        <h2 className="font-light text-base sm:text-lg md:text-xl leading-relaxed">
          FOLLOW ADALENE ON INSTAGRAM{" "}
          <span className="text-[#bc4c2a] font-thin">@DevHubShop</span>
        </h2>
      </div>

      <div className="relative w-full">
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow p-2 sm:p-3 rounded-full"
        >
          <i className="fa-solid fa-angle-left text-gray-700 text-sm sm:text-lg"></i>
        </button>

        <div
          ref={scrollRef}
          className="overflow-x-auto flex w-full noscroll-smooth no-scrollbar scroll-smooth"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedIndex(index)}
              className="w-[180px] h-[220px] sm:w-[220px] sm:h-[270px] md:w-[260px] md:h-[320px] lg:w-[300px] lg:h-[350px] object-cover flex-shrink-0 cursor-pointer"
              alt={`follow-${index}`}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-lg p-2 sm:p-3 rounded-full backdrop-blur transition duration-200"
        >
          <i className="fa-solid fa-angle-right text-gray-700 text-sm sm:text-lg"></i>
        </button>
      </div>

      <div className="flex flex-col md:flex-row mt-4 sm:mt-6 w-full min-h-[20vh] items-center justify-around gap-4 md:gap-2 py-4">
        <div className="w-full md:w-1/3 m-1 flex flex-col items-center justify-center text-center px-3">
          <h2 className="text-sm sm:text-base md:text-lg">Worldwide shipping</h2>
          <div className="w-16 sm:w-20 mt-3 sm:mt-4 h-1 bg-orange-300"></div>
        </div>

        <div className="w-full md:w-1/3 m-1 flex flex-col items-center justify-center text-center px-3">
          <h2 className="text-sm sm:text-base md:text-lg">Easy 30 day returns</h2>
          <div className="w-16 sm:w-20 mt-3 sm:mt-4 h-1 bg-orange-300"></div>
        </div>

        <div className="w-full md:w-1/3 m-1 flex flex-col items-center justify-center text-center px-3">
          <h2 className="text-sm sm:text-base md:text-lg">12 month warranty</h2>
          <div className="w-16 sm:w-20 mt-3 sm:mt-4 h-1 bg-orange-300"></div>
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelectedIndex(null)}
          ></div>

          <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-[1100px] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow"
            >
              <i className="fa-solid fa-angle-left text-gray-700 text-lg sm:text-xl"></i>
            </button>

            <img
              src={images[selectedIndex]}
              alt="Selected"
              className="w-full lg:w-[55%] h-[280px] sm:h-[380px] lg:h-auto object-contain bg-white"
            />

            <div className="flex w-full lg:w-[45%] flex-col items-center px-4 sm:px-6 py-4 sm:py-5">
              <div className="w-full mb-4 flex">
                <div className="flex justify-center mt-2 sm:mt-4 items-center w-full sm:w-auto gap-1 text-gray-700 font-medium text-sm sm:text-base">
                  <i className="fa-brands fa-instagram text-[24px] sm:text-[30px]"></i>
                  <span>@DevHubShop</span>
                </div>
              </div>

              <div className="w-full h-[2px] bg-orange-300"></div>

              <div className="w-full flex justify-center">
                <p className="w-full sm:w-3/4 flex items-center justify-center mt-4 sm:mt-5 font-light text-sm sm:text-base lg:text-lg text-center leading-relaxed">
                  #wix, #website, #freewebsite, #websitetemplate, #wix.com
                </p>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow"
            >
              <i className="fa-solid fa-angle-right text-gray-700 text-lg sm:text-xl"></i>
            </button>

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}