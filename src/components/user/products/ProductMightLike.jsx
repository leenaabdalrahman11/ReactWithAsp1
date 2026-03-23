import React, { useEffect, useState } from 'react'
import BestSellerCard from '../bestSellersSection/BestSellerCard';

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
      if (loading) return <p>Loading...</p>;
      const chunks = [];
      const doubled = [...products, ...products];
    
      for (let i = 0; i < products.length; i += 4) {
        chunks.push(doubled.slice(i, i + 4));
      }
    
  

  return (
    <div>

                    <div className="p-6 container flex items-center gap-2 flex-col">
          <div className="text-center mb-6">
            <h2 className="font-bold font-[400]">You Might Also Like</h2>
            <div className="w-8 h-[2px] bg-black mx-auto mt-2"></div>
          </div>
          <div className="flex items-center gap-3">
            <button
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
              style={{
                border: "none",
                borderRadius: "6px",
                padding: "12px",
                cursor: "pointer",
                flexShrink: 0,
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
              <div className="carousel-inner">
                {chunks.map((group, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {group.map((product) => (
                        <BestSellerCard
                          key={product.id}
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
    
            <button
              data-bs-target="#carouselExample"
              data-bs-slide="next"
              style={{
                border: "none",
                borderRadius: "6px",
                padding: "12px",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <span
                className="carousel-control-next-icon"
                style={{ filter: "brightness(0)" }}
              ></span>
            </button>
          </div>
        </div>
      
    </div>
  )
}
