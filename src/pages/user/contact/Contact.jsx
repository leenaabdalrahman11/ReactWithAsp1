import React from "react";

export default function Contact() {
  const stockists = [
    {
      address1: "500 Terry Francine St.",
      address2: "San Francisco, CA 94158",
      phone: "123-456-7890",
    },
    {
      address1: "500 Terry Francine St.",
      address2: "San Francisco, CA 94158",
      phone: "123-456-7890",
    },
    {
      address1: "500 Terry Francine St.",
      address2: "San Francisco, CA 94158",
      phone: "123-456-7890",
    },
    {
      address1: "500 Terry Francine St.",
      address2: "San Francisco, CA 94158",
      phone: "123-456-7890",
    },
    {
      address1: "500 Terry Francine St.",
      address2: "San Francisco, CA 94158",
      phone: "123-456-7890",
    },
    {
      address1: "500 Terry Francine St.",
      address2: "San Francisco, CA 94158",
      phone: "123-456-7890",
    },
  ];
  return (
    <>
      <div>
        <div className="flex items-center justify-center h-[20vh]">
          <h1> GET IN TOUCH</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full bg-[#f7f4f1] flex flex-col items-center justify-center py-16">
            {/* Title */}
            <div className="flex flex-col items-center justify-center mb-20">
              <h1 className="text-[32px] tracking-[10px] font-semibold text-[#0f1720] uppercase">
                Customer Service
              </h1>
              <div className="w-8 h-[3px] bg-[#0f1720] mt-8"></div>
            </div>

            <div className="w-full flex justify-around items-start text-center px-10">
              <div className="flex flex-col items-center w-1/3">
                <h2 className="text-[#bc4c2a] text-[34px] italic font-serif mb-6">
                  Flagship Store
                </h2>
                <p className="text-[#0f1720] text-[18px] leading-10">
                  500 Terry Francine St.
                  <br />
                  San Francisco, CA 94158
                </p>
              </div>

              <div className="flex flex-col items-center w-1/3">
                <h2 className="text-[#bc4c2a] text-[34px] italic font-serif mb-6">
                  Opening Hours
                </h2>
                <p className="text-[#0f1720] text-[18px] leading-10">
                  Monday-Friday
                  <br />
                  9:00am - 7:00pm EST
                </p>
              </div>

              <div className="flex flex-col items-center w-1/3">
                <h2 className="text-[#bc4c2a] text-[34px] italic font-serif mb-6">
                  Contact Us
                </h2>
                <p className="text-[#0f1720] text-[18px] leading-10">
                  1-800-000-0000
                  <br />
                  info@mysite.com
                </p>
              </div>
            </div>
          </div>
          {/* Title */}
          <div className="flex flex-col items-center justify-center mb-16">
            <h2 className="text-[#bc4c2a] text-[34px] italic font-playfair">
              Inquiries
            </h2>

            <p className="text-center text-[#0f1720] text-[18px] leading-10 mt-4 max-w-[700px]">
              For questions regarding our products and services you can also
              <br />
              contact us by filling out the form below.
            </p>
          </div>

          {/* Form */}
          <form className="w-full max-w-[1000px] flex flex-col   items-center justify-center gap-10">
            {/* First + Last Name */}
            <div className="flex w-full gap-8">
              <div className="w-1/2 flex flex-col">
                <label className="text-[16px] text-[#0f1720] mb-10">
                  First Name *
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#bc4c2a] outline-none pb-2"
                />
              </div>

              <div className="w-1/2 flex flex-col">
                <label className="text-[16px] text-[#0f1720] mb-10">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#bc4c2a] outline-none pb-2"
                />
              </div>
            </div>

            {/* Email */}
            <div className="w-full flex flex-col">
              <label className="text-[16px] text-[#0f1720] mb-10">
                Email *
              </label>
              <input
                type="email"
                className="bg-transparent border-b border-[#bc4c2a] outline-none pb-2"
              />
            </div>

            {/* Subject */}
            <div className="w-full flex flex-col">
              <label className="text-[16px] text-[#0f1720] mb-10">
                Subject
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-[#bc4c2a] outline-none pb-2"
              />
            </div>

            {/* Message */}
            <div className="w-full flex flex-col">
              <label className="text-[16px] text-[#0f1720] mb-10">
                Message
              </label>
              <textarea
                rows="5"
                className="bg-transparent border-b border-[#bc4c2a] outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="w-full flex items-center justify-center mt-4">
              <button
                type="submit"
                className="w-[450px] h-[55px] mb-3 border border-[#bc4c2a] text-[#bc4c2a] text-[18px] hover:bg-[#bc4c2a] hover:text-white transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="w-full bg-[#f7f4f1] flex flex-col items-center justify-center py-16 px-6">
            <div className="flex flex-col items-center justify-center mb-16">
              <h1 className="text-[24px] md:text-[32px] tracking-[6px] md:tracking-[10px] font-semibold text-[#0f1720] uppercase text-center">
                Stockists
              </h1>
              <div className="w-8 h-[3px] bg-[#0f1720] mt-8"></div>
            </div>

            <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-12 text-center">
              {stockists.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <p className="text-[#0f1720] text-[17px] md:text-[18px] leading-9">
                    {item.address1}
                    <br />
                    {item.address2}
                    <br />
                    {item.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
