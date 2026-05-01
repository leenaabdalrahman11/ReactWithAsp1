import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Confirming payment...");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      setMessage("Invalid payment session.");
      setLoading(false);
      return;
    }

    const confirmPayment = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/api/Checkout/confirm?sessionId=${sessionId}`,
          {
            method: "POST",
            headers: token
              ? { Authorization: `Bearer ${token}` }
              : {},
          }
        );

        const data = await response.json();
        console.log("confirm response:", data);

        if (!response.ok || !data.isSuccess) {
          throw new Error(data?.message || "Payment confirmation failed.");
        }

        setSuccess(true);
        setMessage(
          data?.message || "Payment successful. Your order has been placed."
        );
      } catch (error) {
        setSuccess(false);
        setMessage(
          error.message || "Something went wrong while confirming payment."
        );
      } finally {
        setLoading(false);
      }
    };

    confirmPayment();
  }, [searchParams, baseUrl, token]);

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          {success ? "Payment Successful" : "Payment Status"}
        </h1>

        <p className="text-gray-600">{loading ? "Please wait..." : message}</p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="rounded-xl bg-[#bc4c2a] px-6 py-3 text-white hover:bg-[#a03e22]"
          >
            Back to Home
          </button>

        </div>
      </div>
    </div>
  );
}