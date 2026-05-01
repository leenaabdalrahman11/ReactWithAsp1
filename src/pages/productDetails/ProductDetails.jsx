import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductMightLike from "../../components/user/products/ProductMightLike";
import { addToCart } from "../user/cart/AddToCart.jsx";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const currentImage = productDetails?.subImages?.[imageIndex];
  const [quantity, setQuantity] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
const [message, setMessage] = useState("");
  const navigate = useNavigate();

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

const handleAddToCart = async () => {
  try {
    await addToCart(baseUrl, id, quantity);

    setMessage("Added to cart successfully!");
    setShowMessage(true);

    setTimeout(() => {
      navigate("/cart");
    }, 2000);
  } catch (error) {
    setMessage(error.message || "You must log in first");
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    console.error(error);
  }
};

  return (
    <>
      {showMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] bg-[#bc4c2a] text-white shadow-2xl rounded-2xl px-4 sm:px-6 py-3 text-sm md:text-base text-center">
          Added to cart successfully!
        </div>
      )}

      <div className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <div className="w-full lg:w-1/2 rounded-lg">
            <div className="carousel slide rounded-lg overflow-hidden">
              <div className="carousel-inner">
                <div className="carousel-item active flex items-center justify-center h-full">
                  <img
                    src={currentImage}
                    className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[90%] h-auto object-contain block mx-auto"
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

          <div className="w-full lg:w-1/2 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg">
            <div className="w-full gap-6 sm:gap-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-thin mb-4 text-center lg:text-left">
                {productDetails.name}
              </h1>

              <div className="flex flex-col gap-4">
                <span className="text-xl sm:text-2xl text-[#bc4c2a] font-thin text-center lg:text-left">
                  ${productDetails.price}
                </span>

                <div
                  className="btn-group btn-group-sm w-24 self-center lg:self-start"
                  role="group"
                  aria-label="Small button group"
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <button type="button" className="btn" disabled>
                    {quantity}
                  </button>
                  <button
                    type="button"
                    className="btn"
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
                    <button
                      onClick={handleAddToCart}
                      className="w-full sm:w-auto px-6 py-2 bg-[#bc4c2a] text-white rounded hover:bg-[#a03e22] transition-colors"
                    >
                      Add to Cart
                    </button>

                    <button className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded hover:bg-[#a03e22] transition-colors">
                      Buy Now
                    </button>

                    <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center lg:text-left">
                      {productDetails.description}
                    </p>
                  </div>

                  <div className="border-t pt-4 sm:pt-6">
                    <div className="flex items-center">
                      <button
                        className={`w-full text-start text-sm sm:text-base ${
                          openIndex === 0 ? "font-medium " : ""
                        }`}
                        onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                      >
                        PRODUCT INFO
                      </button>
                      <button
                        className={`text-start text-sm sm:text-base ${
                          openIndex === 0 ? "font-medium " : ""
                        }`}
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
<div className="py-4 text-black text-sm sm:text-base">
  This product is carefully crafted with high-quality materials to provide comfort, durability, and a stylish look for everyday use.
</div>
                    </div>
                  </div>

                  <div className="border-t pt-4 sm:pt-6">
                    <div className="flex items-center">
                      <button
                        className={`w-full text-start text-sm sm:text-base ${
                          openIndex === 1 ? "font-medium " : ""
                        }`}
                        onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                      >
                        RETURN & REFUND POLICY
                      </button>
                      <button
                        className={`text-start text-sm sm:text-base ${
                          openIndex === 1 ? "font-medium " : ""
                        }`}
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
<div className="py-4 text-black text-sm sm:text-base">
  You can request a return or refund within 14 days of receiving your order, as long as the item is unused and in its original condition.
</div>
                    </div>
                  </div>

                  <div className="border-t pt-4 sm:pt-6">
                    <div className="flex items-center">
                      <button
                        className={`w-full text-start text-sm sm:text-base ${
                          openIndex === 2 ? "font-medium " : ""
                        }`}
                        onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                      >
                        SHIPPING INFO
                      </button>
                      <button
                        className={`text-start text-sm sm:text-base ${
                          openIndex === 2 ? "font-medium " : ""
                        }`}
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
<div className="py-4 text-black text-sm sm:text-base">
  Orders are processed as soon as possible, and delivery time may vary depending on your location and the selected shipping method.
</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <ProductMightLike />
        </div>
      </div>
    </>
  );
}