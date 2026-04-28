import React, { useEffect, useState } from "react";
import BestSellerCard from "./BestSellerCard";
import { Link } from "react-router-dom";

export default function BestSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(
      `${baseUrl}/api/Products?lang=en&limit=10&sortBy=price&asc=true`,
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
  const doubled = [...products];

  for (let i = 0; i < products.length; i += 4) {
    chunks.push(doubled.slice(i, i + 4));
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl tracking-[0.2em] font-medium">
            BEST SELLERS
          </h2>
          <div className="w-10 h-[2px] bg-black mx-auto mt-3"></div>
        </div>

        {/* Carousel + Arrows */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">
                    <button
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            className="shrink-0 hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-gray-100 transition"
            style={{
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              className="carousel-control-prev-icon"
              style={{ filter: "brightness(0)" }}
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
  <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 justify-items-center">
                    {group.map((product) => (
<Link
  key={product.id}
  className="no-underline block w-fit"
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
            className="shrink-0 hidden sm:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-gray-100 transition"
            style={{
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              className="carousel-control-next-icon"
              style={{ filter: "brightness(0)" }}
            ></span>
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-5">
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

        {/* Button */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center">
          <Link to="/products">
            <button
              className="text-[#bc4c2a] text-sm sm:text-base md:text-lg border border-[#bc4c2a]
              hover:bg-[#bc4c2a] hover:text-white transition-colors py-2.5 px-6 sm:px-8"
            >
              Shop All Bags
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}