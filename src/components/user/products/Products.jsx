import { useEffect, useState } from "react";
 
export default function Products(baseUrl, activeCategory) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setLoading(true);
 
    let url = `${baseUrl}/api/Products?lang=en&limit=10&sortBy=price&asc=true`;
 
    if (activeCategory !== "All Products") {
      url += `&categoryId=${activeCategory}`;
    }
 
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const arr = data?.response?.data;
        setProducts(Array.isArray(arr) ? arr : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [baseUrl, activeCategory]);
 
  return { products, loading };
}
 