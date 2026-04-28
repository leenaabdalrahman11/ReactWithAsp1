import React, { useState } from "react";
import { User, MapPin, Mail, Phone, Lock, ArrowRight, ShieldCheck } from "lucide-react";

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
      <div className="absolute top-[-100px] left-[-80px] h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-100px] h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute top-[20%] right-[10%] h-52 w-52 rounded-full bg-orange-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-start px-3 sm:px-4 md:px-6 lg:grid-cols-2 lg:px-8 pt-4 sm:pt-6 pb-6">
          <div className="hidden lg:block pr-10 text-slate-900">
          <div className="max-w-xl">


            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Create your
<span className="block bg-gradient-to-r from-orange-600 via-slate-700 to-cyan-600 bg-clip-text text-transparent">
  professional account
</span>
            </h1>

              <p className="mt-6 text-base sm:text-lg leading-8 text-slate-600">
              Register to start your journey with a smooth, modern, and secure
              experience designed to make your first impression beautiful.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md">
                <p className="text-2xl font-bold">Easy</p>
                <p className="mt-2 text-sm text-slate-600">
                  Clean form layout with a simple and user-friendly flow.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

                <p className="text-2xl font-bold">Modern</p>
                <p className="mt-2 text-sm text-slate-600">
                  A polished registration page with responsive design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-start justify-center">
          <div className="w-full max-w-md sm:max-w-lg">
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/80 p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-2xl"
            >
              <div className="mb-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                  Create Account
                </p>
                <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                  Register
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  Fill in your details to create your new account
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <User size={18} className="text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="DevHUB"
                      className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Address
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <MapPin size={18} className="text-slate-400" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Palestine"
                      className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <Mail size={18} className="text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <Phone size={18} className="text-slate-400" />
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="0799999999"
                      className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                    <Lock size={18} className="text-slate-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="********"
                      className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {errors.length > 0 ? (
                <div className="mt-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3">
                  {errors.map((err, index) => (
                    <p key={index} className="text-sm text-red-600">
                      {err}
                    </p>
                  ))}
                </div>
              ) : message ? (
                <p className="mt-4 rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-600">
                  {message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition hover:from-orange-600 hover:to-amber-600 disabled:opacity-70"
              >
                {loading ? "Registering..." : "Create Account"}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}