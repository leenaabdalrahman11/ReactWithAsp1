import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/Products?lang=en&limit=12&sortBy=price&asc=true`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.response.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [baseUrl]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return products.filter(
      (product) =>
        product.name?.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term),
    );
  }, [products, searchTerm]);

  return (
    <div className="w-full min-h-screen bg-[#f7f4f1] px-10 py-6">
      <div className="w-full flex items-center gap-6">
        <div className="flex items-center w-full border border-gray-500 px-4 py-4 bg-transparent">
          <i className="fa-solid fa-magnifying-glass text-black mr-3"></i>

          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none text-black placeholder:text-black"
          />
        </div>

        <Link to="/" className="text-black text-lg">
          Close
        </Link>
      </div>

      <div className="mt-16 mb-10">
        <h2 className="text-[32px] font-[400] text-black">Trending products</h2>
      </div>

      {loading ? (
        <p className="text-lg">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative bg-[#f3efec] overflow-hidden">
                {product.isBestSeller && (
                  <span className="absolute top-3 left-3 z-10 bg-[#bc4c2a] text-white text-sm px-3 py-1">
                    Best Seller
                  </span>
                )}
              <Link to={`/productDetails/${product.id}`} className="w-full h-full">
                              <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-[350px] object-cover"
                />
              
              </Link>

              </div>

              <h3 className="mt-4 text-[18px] text-black">{product.name}</h3>
              <p className="text-[#7a6b5f] text-[16px]">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
