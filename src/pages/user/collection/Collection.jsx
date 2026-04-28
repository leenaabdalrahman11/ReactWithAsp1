import React, { useState } from "react";
import useCategories from "../../../components/user/categories/Categories";
import useProducts from "../../../components/user/products/Products";
import ProductCard from "../../../components/user/products/ProductCard";

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [page, setPage] = useState(1);

  const baseUrl = import.meta.env.VITE_API_URL;
  const limit = 10;

  const { categories } = useCategories(baseUrl);
  const { products, loading, totalCount } = useProducts(
    baseUrl,
    activeCategory,
    page,
    limit,
  );

  const totalPages = Math.ceil(totalCount / limit);

  const goTo = (pageNumber) => {
    setPage(pageNumber);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 justify-center min-h-screen">
      <div className="flex gap-4 flex-col w-full lg:w-[22%] xl:w-[20%] bg-transparent">
        <div className="border-b-2 border-gray-500 pb-2">
          <h1 className="text-mainColor-500 text-lg md:text-xl lg:text-2xl font-thin">
            Browse By:
          </h1>
        </div>

        <div className="list-group !border-none w-full">
          <button
            className={`list-group-item list-group-item-action !border-none text-sm sm:text-base ${
              activeCategory === "All Products"
                ? "!bg-mainColor-500 !text-white"
                : "!bg-transparent !text-black"
            }`}
            onClick={() => {
              setActiveCategory("All Products");
              setPage(1);
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
                className={`list-group-item list-group-item-action !border-none text-sm sm:text-base ${
                  activeCategory === cat.id
                    ? "!bg-mainColor-500 !text-white"
                    : "!bg-transparent !text-black"
                }`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setPage(1);
                }}
              >
                {categoryName}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:w-[78%] xl:w-[70%] gap-4">
        <div className="text-center mb-4 sm:mb-6 w-full">
          <h2 className="font-bold text-lg md:text-xl">All Products</h2>
          <div className="w-8 h-[2px] bg-black mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full place-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.mainImage}
            />
          ))}
        </div>

        <div className="w-full overflow-x-auto">
          <ul className="pagination justify-content-center mt-4 flex flex-wrap gap-2 justify-center min-w-max sm:min-w-0">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button
                className="page-link !text-orange-500 !border-orange-500 hover:!bg-orange-100 disabled:!text-gray-400 text-sm sm:text-base"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              >
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${page === index + 1 ? "active" : ""}`}
              >
                <button
                  className={`page-link text-sm sm:text-base ${
                    page === index + 1
                      ? "!bg-orange-500 !border-orange-500 !text-white"
                      : "!text-orange-500 !border-orange-500 hover:!bg-orange-100"
                  }`}
                  onClick={() => goTo(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${page === totalPages ? "disabled" : ""}`}
            >
              <button
                className="page-link !text-orange-500 !border-orange-500 hover:!bg-orange-100 disabled:!text-gray-400 text-sm sm:text-base"
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
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