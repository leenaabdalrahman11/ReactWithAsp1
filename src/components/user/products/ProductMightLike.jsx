import React, { useEffect, useState } from "react";
import BestSellerCard from "../bestSellersSection/BestSellerCard";
import { Link } from "react-router-dom";

export default function ProductMightLike() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "http://leena12.runasp.net/api/Products?lang=en&limit=10&sortBy=price&asc=true",
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.response.data);
        setLoading(false);
      });
  }, []);

  console.log(products);

  if (loading) return <p className="text-center py-8">Loading...</p>;

  const chunks = [];
  const doubled = [...products, ...products];

  for (let i = 0; i < products.length; i += 4) {
    chunks.push(doubled.slice(i, i + 4));
  }

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto flex items-center gap-4 md:gap-6 flex-col">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="font-bold font-[400] text-lg sm:text-xl md:text-2xl">
            You Might Also Like
          </h2>
          <div className="w-8 h-[2px] bg-black mx-auto mt-2"></div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">
          <button
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            className="hidden sm:flex items-center justify-center shrink-0 p-2 sm:p-3 rounded-full hover:bg-gray-100 transition"
            style={{
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              className="carousel-control-prev-icon"
              style={{ filter: "brightness(0)", width: "18px", height: "18px" }}
            ></span>
          </button>

          <div
            id="carouselExample"
            className="carousel slide w-full overflow-hidden"
          >
            <div className="carousel-inner w-full">
              {chunks.map((group, index) => (
                <div
                  key={index}
                  className={`carousel-item w-full ${index === 0 ? "active" : ""}`}
                >
                  <div className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 justify-items-center">
                    {group.map((product) => (
                      <Link
                        key={product.id}
                        className="no-underline block mx-auto"
                        to={`/productDetails/${product.id}`}
                      >
                        <BestSellerCard
                          name={product.name}
                          price={product.price}
                          image={product.mainImage}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            className="hidden sm:flex items-center justify-center shrink-0 p-2 sm:p-3 rounded-full hover:bg-gray-100 transition"
            style={{
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              className="carousel-control-next-icon"
              style={{ filter: "brightness(0)", width: "18px", height: "18px" }}
            ></span>
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-3">
          <button
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300"
            style={{ cursor: "pointer" }}
          >
            <span
              className="carousel-control-prev-icon"
              style={{ filter: "brightness(0)" }}
            ></span>
          </button>

          <button
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300"
            style={{ cursor: "pointer" }}
          >
            <span
              className="carousel-control-next-icon"
              style={{ filter: "brightness(0)" }}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}