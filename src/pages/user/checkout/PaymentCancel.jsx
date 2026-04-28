import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentCancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Payment Cancelled
        </h1>
        <p className="text-gray-600">
          Your payment was cancelled. You can try again whenever you want.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate("/checkout")}
            className="rounded-xl bg-[#bc4c2a] px-6 py-3 text-white hover:bg-[#a03e22]"
          >
            Try Again
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            Back to Cart
          </button>
        </div>
      </div>
    </div>
  );
}