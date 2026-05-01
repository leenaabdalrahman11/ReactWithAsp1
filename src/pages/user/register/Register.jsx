import React, { useState } from "react";
import {
  User,
  MapPin,
  Mail,
  Phone,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function Register() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}/api/auth/Account/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("response data:", data);

      if (!response.ok) {
        setMessage(data.message || "Registration failed");
        setErrors(data.errors || []);
        return;
      }

      setMessage("Account created successfully, please check your email to confirm");
      setErrors([]);

      setFormData({
        fullName: "",
        address: "",
        email: "",
        password: "",
        phoneNumber: "",
      });
    } catch (error) {
      setMessage("Something went wrong");
      setErrors([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute top-[-100px] left-[-80px] h-[360px] w-[360px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-90px] h-[360px] w-[360px] rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute top-[20%] right-[10%] h-44 w-44 rounded-full bg-orange-300/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-start px-3 sm:px-4 md:px-5 lg:grid-cols-2 lg:px-6 pt-4 pb-6">
        <div className="hidden lg:block pr-8 text-slate-900">
          <div className="max-w-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Create your
              <span className="block bg-gradient-to-r from-orange-600 via-slate-700 to-cyan-600 bg-clip-text text-transparent">
                professional account
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
              Register to start your journey with a smooth, modern, and secure
              experience designed to make your first impression beautiful.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-md">
                <p className="text-xl font-bold">Easy</p>
                <p className="mt-2 text-xs text-slate-600">
                  Clean form layout with a simple and user-friendly flow.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <p className="text-xl font-bold">Modern</p>
                <p className="mt-2 text-xs text-slate-600">
                  A polished registration page with responsive design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-md">
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-[20px] sm:rounded-[26px] border border-white/10 bg-white/80 p-3 sm:p-4 md:p-5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="mb-5 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-600">
                  Create Account
                </p>

                <h1 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                  Register
                </h1>

                <p className="mt-1.5 text-xs text-slate-500">
                  Fill in your details to create your new account
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Full Name
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <User size={16} className="text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="DevHUB"
                      className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Address
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <MapPin size={16} className="text-slate-400" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Palestine"
                      className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Email
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <Mail size={16} className="text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <Phone size={16} className="text-slate-400" />
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="0799999999"
                      className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <Lock size={16} className="text-slate-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="********"
                      className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {errors.length > 0 ? (
                <div className="mt-3 rounded-xl border border-red-100 bg-red-50 px-3 py-2">
                  {errors.map((err, index) => (
                    <p key={index} className="text-xs text-red-600">
                      {err}
                    </p>
                  ))}
                </div>
              ) : message ? (
                <p className="mt-3 rounded-xl border border-green-100 bg-green-50 px-3 py-2 text-xs text-green-600">
                  {message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:from-orange-600 hover:to-amber-600 disabled:opacity-70"
              >
                {loading ? "Registering..." : "Create Account"}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}