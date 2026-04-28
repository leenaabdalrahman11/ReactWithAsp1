import React, { useState } from "react";

export default function CheckOut() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const [paymentMethod, setPaymentMethod] = useState(2); // Visa = 2
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

const handleCheckout = async () => {
  try {
    setLoading(true);
    setMessage("");

    const response = await fetch(`${baseUrl}/api/Checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        paymentMethod: paymentMethod,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok || !data.isSuccess) {
      throw new Error(data?.message || "Checkout failed");
    }

    if (data.url) {
      window.location.href = data.url;
      return;
    }

    setMessage("Checkout completed successfully");
  } catch (error) {
    console.error("Checkout error:", error);
    setMessage(error.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-4 py-10 md:px-10 lg:px-20">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Checkout</h1>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-3">
            Select Payment Method
          </label>

          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value={1}
                checked={paymentMethod === 1}
                onChange={() => setPaymentMethod(1)}
              />
              <span>Cash</span>
            </label>

            <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value={2}
                checked={paymentMethod === 2}
                onChange={() => setPaymentMethod(2)}
              />
              <span>Visa</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-[#bc4c2a] text-white py-3 rounded-xl hover:bg-[#a03e22] transition duration-300 disabled:opacity-60"
        >
          {loading ? "Processing..." : "Confirm Checkout"}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
}