import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductMightLike from "../../components/user/products/ProductMightLike";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = productDetails?.subImages?.[imageIndex];
  const [quantity, setQuantity] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);

  const { id } = useParams();
  console.log(id);
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    if (!id) return;

    setLoading(true);
    const url = `${baseUrl}/api/Products/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const arr = data?.response;
        const res = Array.isArray(arr) ? arr[0] : arr;
        setProductDetails(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className="flex flex-row container p-5">
        <div className="container   w-1/2 rounded-lg ">
          <div className="carousel slide rounded-lg overflow-hidden">
            <div className="carousel-inner ">
              <div className="carousel-item active flex items-center justify-center h-full ">
                <img
                  src={currentImage}
                  className="w-3/4 h-4/4 object-contain block mx-auto"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev hover:opacity-80 transition-opacity !text-black"
              type="button"
              data-bs-target="#carouselExample"
              onClick={() =>
                imageIndex === 0
                  ? setImageIndex(0)
                  : setImageIndex(imageIndex - 1)
              }
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon [filter:brightness(0)]"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              onClick={() =>
                imageIndex === productDetails?.subImages?.length - 1
                  ? setImageIndex(productDetails?.subImages?.length - 1)
                  : setImageIndex(imageIndex + 1)
              }
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon [filter:brightness(0)]"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="w-3/4 p-20 rounded-lg p-10 shadow-lg">
          <div className=" w-full h-100 gap-10">
            <h1 className="text-4xl font-thin mb-4">{productDetails.name}</h1>
            <div className="flex flex-col gap-3 ">
              <span className="text-2xl text-[#bc4c2a] font-thin">
                ${productDetails.price}
              </span>
              <div
                className="btn-group btn-group-sm w-20 "
                role="group"
                aria-label="Small button group"
              >
                <button
                  type="button"
                  className="btn "
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <button type="button" className="btn " disabled>
                  {quantity}
                </button>
                <button
                  type="button"
                  className="btn "
                  onClick={() =>
                    quantity < productDetails.quantity &&
                    setQuantity(Math.max(1, quantity + 1))
                  }
                >
                  +
                </button>
              </div>
              <div>
                <div className="flex flex-col gap-4">
                  <button className="px-6 py-2 bg-[#bc4c2a] text-white rounded hover:bg-[#a03e22] transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-6 py-2 bg-black text-white rounded hover:bg-[#a03e22] transition-colors">
                    Buy Now
                  </button>
                  <p className="text-lg mb-6">{productDetails.description}</p>
                </div>
                <div className="border-t pt-6">
                  <div className="flex">
                    <button
                      className={`w-full text-start ${openIndex === 0 ? "font-medium " : ""}`}
                      onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                    >
                      PRODUCT INFO
                    </button>
                    <button
                      className={`text-start ${openIndex === 0 ? "font-medium " : ""}`}
                      onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                    >
                      +
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out
  ${
    openIndex === 0
      ? "max-h-40 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"
  }`}
                  >
                    <div className="py-4 text-black">النص هنا</div>
                  </div>
                </div>

                <div className="border-t pt-6 ">
                  <div className="flex">
                    <button
                      className={`w-full text-start ${openIndex === 1 ? "font-medium " : ""}`}
                      onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                    >
                      RETURN & REFUND POLICY
                    </button>
                    <button
                      className={`text-start ${openIndex === 1 ? "font-medium " : ""}`}
                      onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                    >
                      +
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out
  ${
    openIndex === 1
      ? "max-h-40 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"
  }`}
                  >
                    <div className="py-4 text-black">النص هنا</div>
                  </div>
                </div>

                <div className="border-t pt-6 ">
                  <div className="flex">
                    <button
                      className={`w-full text-start ${openIndex === 2 ? "font-medium " : ""}`}
                      onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                    >
                      SHIPPING INFO
                    </button>
                    <button
                      className={`text-start ${openIndex === 2 ? "font-medium " : ""}`}
                      onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                    >
                      +
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out
  ${
    openIndex === 2
      ? "max-h-40 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"
  }`}
                  >
                    <div className="py-4 text-black">النص هنا</div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>


      </div>
      <div>
                <ProductMightLike />

    </div>
    </>
  );
}
