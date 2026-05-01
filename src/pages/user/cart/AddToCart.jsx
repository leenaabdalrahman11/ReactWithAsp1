import React from 'react'

export async function addToCart(baseUrl, productId, count = 1) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("You must log in first");
  }

  const response = await fetch(`${baseUrl}/api/Cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      productId: productId,
      count: count,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to add product to cart");
  }

  return data;
}