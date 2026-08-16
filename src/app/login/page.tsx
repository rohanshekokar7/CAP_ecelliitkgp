"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, LogIn } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate login for now
    setTimeout(() => {
      setLoading(false);
      setError("Invalid credentials. Please try again.");
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden flex items-center justify-center bg-[url('/form_background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-emerald-900/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-700/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10">
        <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium mb-8 transition-colors drop-shadow-md">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="premium-glass !bg-emerald-950/90 p-8 md:p-12 rounded-none relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Welcome <span className="text-emerald-500">Back</span>
          </h1>
          <p className="text-emerald-100/70 mb-10 text-lg">
            Login to access your Campus Ambassador dashboard.
          </p>

          {error && (
            <div className="bg-red-900/50 border border-red-500/50 text-red-200 p-4 rounded-lg mb-8 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-emerald-900/50 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="tony@starkindustries.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-300">Password</label>
                <a href="#" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">Forgot password?</a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-emerald-900/50 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 mt-4 rounded-lg font-bold text-lg text-black transition-all duration-300 flex items-center justify-center gap-2 ${
                loading 
                  ? "bg-emerald-700 cursor-not-allowed opacity-70" 
                  : "bg-gradient-to-r from-emerald-500 to-emerald-400 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              }`}
            >
              {loading ? (
                "Authenticating..."
              ) : (
                <>
                  Login <LogIn className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-slate-400 text-sm">
            Don't have an account?{' '}
            <Link href="/register" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
