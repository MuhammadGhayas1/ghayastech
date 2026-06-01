"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative border-t border-gray-100 overflow-hidden w-full bg-[#fdfdfd] pt-16 pb-20 sm:pb-0">
      {/* Background radial gradient highlights for premium look */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-50/30 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-50/20 blur-3xl -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Brand & Newsletter Column */}
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Contact us at</h3>
              <p className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Subscribe to our newsletter for the latest updates, digital insights, and premium prebuilt tech releases.
              </p>
              <form onSubmit={handleSubmit} className="relative w-full max-w-md">
                <div className="flex items-center bg-white rounded-full shadow-md shadow-gray-100 overflow-hidden border border-gray-200/60 p-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="grow min-w-0 pl-5 pr-2 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 shrink-0 text-sm font-medium"
                  >
                    {subscribed ? "Subscribed!" : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 flex justify-start md:justify-end">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 text-left md:text-right">
              <div>
                <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-5">Quick Links</h4>
                <nav className="space-y-3">
                  <Link href="/" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                  <Link href="/prebuilt" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Prebuilt SaaS</Link>
                  <Link href="/customized" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Custom Projects</Link>
                  <Link href="/about-us" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
                  <Link href="/contact" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
                  <a href="https://ghayas-tech.pages.dev/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Our Old Site &rarr;</a>
                </nav>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-5">Resources</h4>
                <nav className="space-y-3">
                  <Link href="/resources" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Blogs</Link>
                  <Link href="/terms" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms &amp; Conditions</Link>
                  <Link href="/privacy" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link>
                  <Link href="/refund" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Refund Policy</Link>
                </nav>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-5">Trust &amp; Authority</h4>
                <p className="text-xs text-gray-500 font-poppins leading-relaxed mb-4">
                  Engineered by certified <strong className="text-gray-800 font-semibold">Microsoft Learn Student Ambassadors</strong>. Creating bespoke software trusted by modern brands globally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Display Brand Text */}
        <div className="w-full flex justify-center pt-16 select-none overflow-hidden">
          <span
            className="w-full text-center font-extrabold tracking-widest text-[42px] sm:text-[75px] md:text-[95px] lg:text-[115px] xl:text-[130px] scale-y-[1.1] md:scale-y-[1.15] bg-clip-text text-transparent bg-gradient-to-b from-gray-200/90 to-gray-100/40"
            style={{
              lineHeight: "1.05",
              fontFamily: "var(--font-matter)",
            }}
          >
            GHAYASTECH
          </span>
        </div>
      </div>
    </footer>
  );
}
