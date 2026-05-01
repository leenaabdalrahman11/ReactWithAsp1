import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [error, setError] = useState("");
  const [forgotMessage, setForgotMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);

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
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/auth/Account/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data?.message || data?.title || "Login failed");
        return;
      }

      if (data?.accessToken) {
        localStorage.setItem("token", data.accessToken);
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: data?.userId,
          email: data?.email,
          fullName: data?.fullName,
        })
      );

      navigate("/");
    } catch (error) {
      setError("Server error or connection problem");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    setForgotMessage("");
    setError("");

    if (!forgotEmail) {
      setForgotMessage("Please enter your email");
      return;
    }

    setForgotLoading(true);

    try {
      const response = await fetch(
        `${baseUrl}/api/auth/Account/forgotPassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: forgotEmail }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setForgotMessage(data?.message || "Failed to send reset code");
        return;
      }

      localStorage.setItem("resetEmail", forgotEmail);
      setForgotMessage(data?.message || "Reset code sent successfully");

      setTimeout(() => {
        navigate("/reset-password");
      }, 1000);
    } catch (error) {
      setForgotMessage("Server error or connection problem");
      console.error(error);
    } finally {
      setForgotLoading(false);
    }
  }

  return (
    <div className="relative min-h-[calc(100dvh-80px)] overflow-x-hidden overflow-y-auto bg-white">
  <div className="absolute inset-0 bg-white " />
      <div className="absolute top-[-100px]  left-[-80px] h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-[-140px]  right-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute top-[20%] right-[10%] h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="relative mx-auto grid min-h-[calc(100dvh-80px)] max-w-7xl grid-cols-1 items-center gap-8 px-3 sm:px-4 md:px-6 lg:grid-cols-2 lg:px-8 pb-28">
        <div className="hidden lg:block text-slate-900 ">
          <div className="max-w-xl">

<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            
              Welcome back to your
<span className="block bg-gradient-to-r from-orange-600 via-slate-700 to-cyan-600 bg-clip-text text-transparent">
  professional workspace
</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sign in to manage your account, track your activity, and continue
              your work with a clean and secure experience.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-2xl font-bold">Fast</p>
                <p className="mt-2 text-sm text-slate-600">
                  Smooth login flow with clear feedback and loading states.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-2xl font-bold">Secure</p>
                <p className="mt-2 text-sm text-slate-600">
                  Protected access with a modern and trusted interface.
                </p>
              </div>
            </div>
          </div>
        </div>

<div className="flex w-full items-center justify-center">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md sm:max-w-lg rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/80 p-4 sm:p-5 md:p-6 shadow-2xl backdrop-blur-2xl"
  >
    <div className="mb-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
                Welcome Back
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Sign In
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Enter your details to access your account
              </p>
            </div>

              <div className="mb-4">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">
                <Mail size={18} className="text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="mb-2">
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
                  placeholder="Enter your password"
                  className="w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="mb-5 mt-3 text-right">
              <button
                type="button"
                onClick={() => {
                  setShowForgotPassword(!showForgotPassword);
                  setForgotMessage("");
                  setForgotEmail(formData.email || "");
                }}
                className="text-sm font-medium text-orange-600 transition hover:text-orange-700 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {showForgotPassword && (
              <div className="mb-5 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-4 shadow-sm">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Recovery Email
                </label>

                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mb-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={forgotLoading}
                  className="w-full rounded-2xl bg-slate-900 py-3 font-semibold text-slate-900  transition hover:bg-slate-800 disabled:opacity-70"
                >
                  {forgotLoading ? "Sending..." : "Send Reset Code"}
                </button>

                {forgotMessage && (
                  <p className="mt-3 text-center text-sm font-medium text-green-600">
                    {forgotMessage}
                  </p>
                )}
              </div>
            )}

            {error && (
              <p className="mb-4 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 font-semibold text-slate-900  shadow-lg shadow-orange-200 transition hover:from-orange-700 hover:to-indigo-700 disabled:opacity-70"
            >
              {loading ? "Loading..." : "Sign In"}
              {!loading && <ArrowRight size={18} />}
            </button>

              <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <p className="text-center text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="font-semibold text-orange-600 transition hover:text-orange-700 hover:underline"
              >
                Create Account
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}