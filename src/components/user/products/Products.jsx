import { useEffect, useState } from "react";

export default function useProducts(baseUrl, activeCategory, page = 1, limit = 10) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    let url = `${baseUrl}/api/Products?lang=en&page=${page}&limit=${limit}&sortBy=price&asc=true`;

    if (activeCategory !== "All Products") {
      url += `&categoryId=${activeCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const arr = data?.response?.data;
        const total = data?.response?.totalCount;

        setProducts(Array.isArray(arr) ? arr : []);
        setTotalCount(typeof total === "number" ? total : 0);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
        setTotalCount(0);
        setLoading(false);
      });
  }, [baseUrl, activeCategory, page, limit]);

  return { products, loading, totalCount };
}