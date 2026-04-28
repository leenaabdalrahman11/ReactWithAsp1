import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const getCart = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/Cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch cart");
      }

      const data = await response.json();
      setCartItems(data?.items || []);
      setCartTotal(data?.cartTotal || 0);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromCart = async (productId, e) => {
    e.stopPropagation();

    try {
      const response = await fetch(`${baseUrl}/api/Cart/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }

      getCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-base sm:text-lg text-gray-500 px-4 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-3 sm:px-4 md:px-8 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center">
          My Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-10 text-center">
            <p className="text-base sm:text-lg text-gray-500">
              Your cart is empty
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            <div className="xl:col-span-2 space-y-4 sm:space-y-5">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/productDetails/${item.productId}`)}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#bc4c2a]/30 hover:bg-[#fffaf7] transition-all duration-300 cursor-pointer p-4 sm:p-5 md:p-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 sm:space-y-2 min-w-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 break-words">
                          {item.productName}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500">
                          Tap to view product details
                        </p>
                      </div>

                      <button
                        onClick={(e) => handleRemoveFromCart(item.productId, e)}
                        className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition flex items-center justify-center"
                        aria-label="Remove from cart"
                        title="Remove from cart"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.8"
                          stroke="currentColor"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673A2.25 2.25 0 0115.916 21H8.084a2.25 2.25 0 01-2.244-1.327L4.772 5.79m14.456 0A48.108 48.108 0 0015.75 5.5m-6.75 0a48.11 48.11 0 013.478-.29m0 0V4.5A2.25 2.25 0 0010.25 2.25h3.5A2.25 2.25 0 0116 4.5v.71m-3.522 0h3.044"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
                      <div className="bg-gray-50 rounded-xl px-2 sm:px-4 py-2 sm:py-3 text-center min-w-0 transition-all duration-300 hover:bg-orange-50 hover:shadow-md hover:-translate-y-1">
                        <p className="text-xs text-gray-500 mb-1">Price</p>
                        <p className="font-medium text-gray-800 text-sm sm:text-base">
                          ${item.price}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl px-2 sm:px-4 py-2 sm:py-3 text-center min-w-0 transition-all duration-300 hover:bg-orange-50 hover:shadow-md hover:-translate-y-1">
                        <p className="text-xs text-gray-500 mb-1">Quantity</p>
                        <p className="font-medium text-gray-800 text-sm sm:text-base">
                          {item.count}
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-xl px-2 sm:px-4 py-2 sm:py-3 text-center min-w-0 transition-all duration-300 hover:bg-orange-50 hover:shadow-md hover:-translate-y-1">
                        <p className="text-xs text-gray-500 mb-1">Total</p>
                        <p className="font-medium text-gray-800 text-sm sm:text-base">
                          ${item.totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 h-fit xl:sticky xl:top-24">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5 sm:mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                <span className="text-sm sm:text-base text-gray-500">
                  Items
                </span>
                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  {cartItems.length}
                </span>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-base sm:text-lg font-medium text-gray-800">
                  Cart Total
                </span>
                <span className="text-lg sm:text-xl font-semibold text-[#bc4c2a]">
                  ${cartTotal}
                </span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-[#bc4c2a] text-white py-3 rounded-xl hover:bg-[#a03e22] transition duration-300 text-sm sm:text-base"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
