"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    contactNumber: "",
    email: "",
    motivation: "",
    expectedParticipants: "",
    queries: "",
  });
  
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        college: "",
        contactNumber: "",
        email: "",
        motivation: "",
        expectedParticipants: "",
        queries: "",
      });
      
      // Redirect to home page after a short delay
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden flex items-center justify-center bg-[url('/form_background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-emerald-900/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-700/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl w-full relative z-10">
        <Link href="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium mb-8 transition-colors drop-shadow-md">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="premium-glass !bg-emerald-950/90 p-8 md:p-12 rounded-none relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Join the <span className="text-emerald-500">Elite</span>
          </h1>
          <p className="text-emerald-100/70 mb-10 text-lg">
            Register as a Campus Ambassador and lead the entrepreneurial movement in your college.
          </p>

          {success && (
            <div className="bg-emerald-900/50 border border-emerald-500/50 text-emerald-100 p-4 rounded-lg mb-8 text-center animate-pulse">
              🎉 Registration successful! Welcome to the team. We will contact you soon!
            </div>
          )}

          {error && (
            <div className="bg-red-900/50 border border-red-500/50 text-red-200 p-4 rounded-lg mb-8 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-slate-300 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-emerald-900/50 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="Tony Stark"
                />
              </div>

              {/* College */}
              <div className="flex flex-col">
                <label htmlFor="college" className="text-sm font-medium text-slate-300 mb-2">College / University <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-emerald-900/50 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="IIT Kharagpur"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Number */}
              <div className="flex flex-col">
                <label htmlFor="contactNumber" className="text-sm font-medium text-slate-300 mb-2">Contact Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-emerald-900/50 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="+91 9876543210"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 mb-2">Email Address <span className="text-red-500">*</span></label>
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
            </div>

            {/* Expected Participants */}
            <div className="flex flex-col">
              <label htmlFor="expectedParticipants" className="text-sm font-medium text-slate-300 mb-2">Expected number of participants from your campus? <span className="text-red-500">*</span></label>
              <input
                type="number"
                id="expectedParticipants"
                name="expectedParticipants"
                value={formData.expectedParticipants}
                onChange={handleChange}
                required
                min="0"
                className="w-full bg-black/50 border border-emerald-900/50 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                placeholder="e.g. 50"
              />
            </div>

            {/* Motivation */}
            <div className="flex flex-col">
              <label htmlFor="motivation" className="text-sm font-medium text-slate-300 mb-2">What motivates you to become a Campus Ambassador? <span className="text-red-500">*</span></label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                rows={3}
                className="w-full bg-black/50 border border-emerald-900/50 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                placeholder="Share your drive and vision..."
              ></textarea>
            </div>

            {/* Queries */}
            <div className="flex flex-col">
              <label htmlFor="queries" className="text-sm font-medium text-slate-300 mb-2">Any queries for us? <span className="text-slate-500 font-normal">(Optional)</span></label>
              <textarea
                id="queries"
                name="queries"
                value={formData.queries}
                onChange={handleChange}
                rows={2}
                className="w-full bg-black/50 border border-emerald-900/50 rounded-lg py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                placeholder="Have any questions?"
              ></textarea>
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
                "Submitting..."
              ) : (
                <>
                  Submit Application <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
