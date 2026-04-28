import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const savedEmail = localStorage.getItem("resetEmail") || "";

  const [formData, setFormData] = useState({
    email: savedEmail,
    resetCode: "",
    newPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!savedEmail) {
      navigate("/login");
    }
  }, [savedEmail, navigate]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.email || !formData.resetCode || !formData.newPassword) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${baseUrl}/api/auth/Account/resetPassword`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data?.message || "Reset password failed");
        return;
      }

      if (data?.isSuccess && data?.message === "Password reset successful") {
        localStorage.removeItem("resetEmail");
        setSuccess("Password reset successful. Redirecting to login...");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setError(data?.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setError("Server error or connection problem");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Reset Password</h1>

        <p className="text-sm text-gray-600 text-center mb-4">
          Resetting password for: <span className="font-medium">{savedEmail}</span>
        </p>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Reset Code</label>
          <input
            type="text"
            name="resetCode"
            value={formData.resetCode}
            onChange={handleChange}
            placeholder="Enter reset code"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        {success && (
          <p className="text-green-600 text-sm mb-4 text-center">{success}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition disabled:bg-blue-300"
        >
          {loading ? "Loading..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}