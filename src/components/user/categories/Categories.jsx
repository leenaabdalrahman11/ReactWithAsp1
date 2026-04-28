import { useEffect, useState } from "react";
 
export default function Categories(baseUrl) {
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    fetch(`${baseUrl}/api/Categories`)
      .then((res) => res.json())
      .then((data) => {
        const arr = data?.response ?? [];
        setCategories(Array.isArray(arr) ? arr : []);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, [baseUrl]);
 
  return { categories };
}
 