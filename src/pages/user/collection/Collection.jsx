import React, { useState } from "react";
import useCategories from "../../../components/user/categories/Categories";
import useProducts from "../../../components/user/products/Products";
import ProductCard from "../../../components/user/products/ProductCard";

export default function Collection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const baseUrl = import.meta.env.VITE_API_URL;
  console.log(baseUrl);

  const { categories } = useCategories(baseUrl);
  const { products, loading } = useProducts(baseUrl, activeCategory);

  const goTo = (index) => {
    setActiveIndex(index);
  };

  if (loading) return <p>Loading...</p>;

  const filtered = products;
  const chunks = [];

  for (let i = 0; i < filtered.length; i += 4) {
    chunks.push(filtered.slice(i, i + 12));
  }

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 justify-center min-h-screen">
      <div className="flex gap-4 flex-col w-full lg:w-[20%] bg-transparent">
        <div className="border-b-2 border-gray-500 pb-2">
          <h1 className="text-mainColor-500 text-lg md:text-xl lg:text-2xl font-thin">
            Browse By:
          </h1>
        </div>
        <div className="list-group !border-none">
          <button
            className={`list-group-item list-group-item-action !border-none ${
              activeCategory === "All Products"
                ? "!bg-mainColor-500 !text-white"
                : "!bg-transparent !text-black"
            }`}
            onClick={() => {
              setActiveCategory("All Products");
              setActiveIndex(0);
            }}
          >
            All Products
          </button>

          {categories.map((cat) => {
            const categoryName =
              cat.translations?.find((t) => t.language === "en")?.name ||
              cat.name ||
              "Unnamed";

            return (
              <button
                key={cat.id}
                className={`list-group-item list-group-item-action !border-none ${
                  activeCategory === cat.id
                    ? "!bg-mainColor-500 !text-white"
                    : "!bg-transparent !text-black"
                }`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveIndex(0);
                }}
              >
                {categoryName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Products Section */}
      <div className="flex flex-col items-center justify-center w-full lg:w-[70%] gap-2">
        <div className="text-center mb-6 w-full">
          <h2 className="font-bold text-lg md:text-xl">All Products</h2>
          <div className="w-8 h-[2px] bg-black mx-auto mt-2"></div>
        </div>

        {/* Carousel */}
        <div
          id="carouselExample"
          className="carousel slide w-full overflow-hidden"
        >
          <div className="carousel-inner">
            {chunks.map((group, index) => (
              <div
                key={index}
                className={`carousel-item flex justify-center ${index === activeIndex ? "active" : ""}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full place-items-center">
                  {group.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.mainImage}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="w-full">
          <ul className="pagination justify-content-center mt-3 flex flex-wrap gap-2 justify-center">
            <li className={`page-item ${activeIndex === 0 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
              >
                Previous
              </button>
            </li>

            {chunks.map((_, index) => (
              <li
                key={index}
                className={`page-item ${activeIndex === index ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => goTo(index)}>
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${activeIndex === chunks.length - 1 ? "disabled" : ""}`}
            >
              <button
                className="page-link"
                onClick={() =>
                  setActiveIndex((prev) =>
                    Math.min(prev + 1, chunks.length - 1),
                  )
                }
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
