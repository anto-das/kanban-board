"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  // আপনার প্রজেক্টের গ্লোবাল থিম বা ইউজ স্টেট এর সাথে এটি কানেক্ট করতে পারেন
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration Submitted:", formData);
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-500 relative overflow-hidden ${
        isDarkMode
          ? "bg-[#070A13] text-slate-100"
          : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Decorative Gradient Background Glows (Adapts to Light/Dark) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-500 ${
            isDarkMode
              ? "bg-indigo-500/10 opacity-100"
              : "bg-indigo-500/5 opacity-60"
          }`}
        />
        <div
          className={`absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-500 ${
            isDarkMode
              ? "bg-rose-500/5 opacity-100"
              : "bg-rose-500/5 opacity-40"
          }`}
        />
      </div>

      {/* Main Form Container Card */}
      <div
        className={`w-full max-w-md rounded-2xl border p-8 shadow-2xl backdrop-blur-md transition-all duration-500 relative z-10 ${
          isDarkMode
            ? "bg-[#0E1322]/80 border-slate-800/60 shadow-indigo-950/20"
            : "bg-white border-slate-200/60 shadow-slate-200/50"
        }`}
      >
        {/* Brand Identity & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            {/* Task Orbit Logo Icon */}
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-600/20">
              <span className="text-white text-base font-black">O</span>
            </div>
            <span
              className={`font-extrabold text-lg tracking-tight transition-colors ${
                isDarkMode
                  ? "bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"
                  : "text-slate-900"
              }`}
            >
              Task Orbit
            </span>
          </div>
          <h2
            className={`text-xl font-bold tracking-tight transition-colors ${isDarkMode ? "text-white" : "text-slate-800"}`}
          >
            Create your workspace
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Start managing your projects like a pro.
          </p>
        </div>

        {/* Input Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-3.5 py-2 rounded-xl text-xs font-medium border outline-none transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#070A13]/50 border-slate-800/80 text-white placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20"
                  : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/10"
              }`}
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-3.5 py-2 rounded-xl text-xs font-medium border outline-none transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#070A13]/50 border-slate-800/80 text-white placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20"
                  : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/10"
              }`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-3.5 py-2 rounded-xl text-xs font-medium border outline-none transition-all duration-300 ${
                isDarkMode
                  ? "bg-[#070A13]/50 border-slate-800/80 text-white placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20"
                  : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/10"
              }`}
            />
          </div>

          {/* Terms & Agreement Checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              required
              checked={formData.agreeToTerms}
              onChange={(e) =>
                setFormData({ ...formData, agreeToTerms: e.target.checked })
              }
              className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 accent-indigo-600 cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-[11px] text-slate-400 select-none cursor-pointer"
            >
              I agree to the{" "}
              <span className="text-indigo-500 hover:text-indigo-400 font-semibold underline transition-colors">
                Terms
              </span>{" "}
              and{" "}
              <span className="text-indigo-500 hover:text-indigo-400 font-semibold underline transition-colors">
                Privacy Policy
              </span>
            </label>
          </div>

          {/* Core Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-200 mt-2"
          >
            Create Free Account
          </button>
        </form>

        {/* Separator Divider Line */}
        <div className="relative flex py-4 items-center mt-4">
          <div
            className={`flex-grow border-t transition-colors duration-500 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`}
          />
          <span className="flex-shrink mx-3 text-[10px] text-slate-400 uppercase tracking-widest font-mono">
            Or Join With
          </span>
          <div
            className={`flex-grow border-t transition-colors duration-500 ${isDarkMode ? "border-slate-800" : "border-slate-200"}`}
          />
        </div>

        {/* Third-Party Social Auth OAuth Option */}
        <button
          type="button"
          className={`w-full py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border transition-all duration-300 ${
            isDarkMode
              ? "border-slate-800 bg-[#070A13]/40 text-slate-200 hover:bg-[#070A13] hover:text-white"
              : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 shadow-sm"
          }`}
        >
          {/* Flat Vector Google Icon */}
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.58 14.99 1 12 1 7.35 1 3.37 3.65 1.41 7.55l3.87 3a7.16 7.16 0 0 1 6.72-5.51z"
            />
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46a5.54 5.54 0 0 1-2.41 3.64v3.03h3.89c2.28-2.1 3.55-5.19 3.55-8.82z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.55A7.12 7.12 0 0 1 4.9 12c0-.89.15-1.74.43-2.55l-3.87-3A11.94 11.94 0 0 0 0 12c0 2.29.65 4.43 1.77 6.25l3.51-2.7z"
            />
            <path
              fill="#34A853"
              d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.89-3.03c-1.08.72-2.47 1.16-4.07 1.16-3.14 0-5.8-2.12-6.75-4.99l-3.84 2.98A11.96 11.96 0 0 0 12 23z"
            />
          </svg>
          Sign up with Google
        </button>

        <p className="text-center text-[11px] text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-500 transition-colors hover:text-indigo-400"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
