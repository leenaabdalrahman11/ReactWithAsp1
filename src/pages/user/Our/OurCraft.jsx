import React from "react";
import firstCraft from "../../../assets/images/firstCraft.jpg";
import secoundCraft from "../../../assets/images/secoundCraft.jpg"; 
import thirdCraft from "../../../assets/images/thirdCraft.jpg";
export default function OurCraft() {
  return (
    <>
      <div className="flex flex-col ">
        <div className=" h-[20vh] flex items-center justify-center">
          <h1 className="text-3xl font-semibold">OUR STORY</h1>
        </div>
        <div className="flex h-screen">
          <div className="w-1/2  bg-[#f5f2ef] flex flex-col items-center justify-center ">
            <div className=" flex flex-col items-center group">
              <h1 className="text-2xl font-bold transition-all duration-300">
                THE BRAND
              </h1>
              <div className="h-[1px] w-[3%] bg-black mt-2"></div>
              <p className="text-lg w-1/2 font-thin mt-2 font-['majorMono'] transition-all duration-300 p-3">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. click “Edit Text” or double click me to add your own
                content and make changes to the font. Feel free to drag and drop
                me anywhere you like on your page. I’m a great place for you to
                tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>
          <div
            className="w-1/2 h-screen relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${firstCraft})`,
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "100% 50%",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
        <div className="flex h-screen">
          <div
            className="w-1/2 h-screen relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${secoundCraft})`,
              backgroundSize: "55%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "-10% 1%",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="w-1/2 bg-[#f5f2ef] flex flex-col items-center justify-center ">
            <div className=" flex flex-col items-center group">
              <h1 className="text-2xl font-bold transition-all duration-300">
                THE DESIGNERS
              </h1>
              <div className="h-[1px] w-[3%] bg-black mt-2"></div>
              <p className="text-lg w-1/2 font-thin mt-2 font-['majorMono'] transition-all duration-300 p-3">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. click “Edit Text” or double click me to add your own
                content and make changes to the font. Feel free to drag and drop
                me anywhere you like on your page. I’m a great place for you to
                tell a story and let your users know a little more about you.
              </p>
            </div>

          </div>

        </div>
                          <div className="flex h-screen">
          <div className="w-1/2  bg-[#f5f2ef] flex flex-col items-center justify-center ">
            <div className=" flex flex-col items-center group">
              <h1 className="text-2xl font-bold transition-all duration-300">
                THE BRAND
              </h1>
              <div className="h-[1px] w-[3%] bg-black mt-2"></div>
              <p className="text-lg w-1/2 font-thin mt-2 font-['majorMono'] transition-all duration-300 p-3">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. click “Edit Text” or double click me to add your own
                content and make changes to the font. Feel free to drag and drop
                me anywhere you like on your page. I’m a great place for you to
                tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>
          <div
            className="w-1/2 h-screen relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${thirdCraft})`,
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "100% 50%",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </>
  );
}
