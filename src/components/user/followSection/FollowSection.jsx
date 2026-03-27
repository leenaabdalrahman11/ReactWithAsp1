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
    <div className="flex w-full flex-col bg-orange-50 items-center justify-center">
      <div className="text-center w-1/6  m-5 flex items-center justify-center">
        <h2 className="font-light text-xlg">
          FOLLOW ADALENE ON INSTAGRAM{" "}
          <span className="text-[#bc4c2a] font-thin">@DevHubShop</span>
        </h2>
      </div>

      <div className="relative w-full ">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow p-3 rounded-full"
        >
          <i className="fa-solid fa-angle-left text-gray-700 text-lg"></i>
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto flex w-full noscroll-smooth no-scrollbar"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedIndex(index)}
              className="w-[300px] h-[350px] object-cover flex-shrink-0 cursor-pointer"
              alt={`follow-${index}`}
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white shadow-lg p-3 rounded-full backdrop-blur transition duration-200"
        >
          <i className="fa-solid fa-angle-right text-gray-700 text-lg"></i>
        </button>
      </div>
      <div className="flex mt-2 w-full h-[20vh] items-center justify-around">
        <div className="w-1/4 h-full  m-1 flex flex-col items-center justify-center">
          <h2>Worldwide shipping</h2>
          <div className="w-1/4 mt-4 h-1 bg-orange-300"></div>
        </div>
        <div className="w-1/4 h-full m-1 flex flex-col items-center justify-center">
          <h2>Easy 30 day returns</h2>

          <div className="w-1/4 mt-4 h-1 bg-orange-300"></div>
        </div>
        <div className="w-1/4 h-full m-1 flex flex-col items-center justify-center">
          <h2>12 month warranty</h2>

          <div className="w-1/4 mt-4 h-1 bg-orange-300"></div>
        </div>
      </div>
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelectedIndex(null)}
          ></div>

          <div className="relative flex w-[60vw] h-[65vh] z-10 bg-white rounded-lg shadow-lg">
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow"
            >
              <i className="fa-solid fa-angle-left text-gray-700 text-xl"></i>
            </button>

            <img
              src={images[selectedIndex]}
              alt="Selected"
              className="max-w-[60vw] h-full object-contain shadow-lg"
            />

            <div className="ml-4 flex w-1/2 flex-col items-center">
              <div className="w-full h-[10%]  mb-4 flex">
               <div className="flex justify-center mt-4 items-center w-1/3 gap-1 text-gray-700  font-medium">
                <i class="fa-brands fa-instagram text-[30px]" ></i>
                <span> @DevHubShop</span>
              </div>
              </div>
              <div className="w-full h-[0.5%] bg-orange-300"></div>
              <div className="">
                <p className=" w-1/2 flex items-center justify-center mt-5 font-light text-lg">
                  #wix, #website, #freewebsite, #websitetemplate, #wix.com
                </p>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow"
            >
              <i className="fa-solid fa-angle-right text-gray-700 text-xl"></i>
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
