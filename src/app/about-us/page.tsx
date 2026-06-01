"use client";

import React from "react";
import { Sparkles, Users, Award, ShieldCheck, Heart } from "lucide-react";

export default function AboutUsPage() {
  const values = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Client-Centric Collaboration",
      description: "We work hand-in-hand with founders to construct tailor-made applications that meet exact operational needs."
    },
    {
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      title: "State-of-the-Art Quality",
      description: "Our engineers refuse placeholders and cheap templates, delivering premium semantic code and sleek UX frames."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Bulletproof Security",
      description: "We enforce high standard data policies, secure auth channels, and scalable AWS cloud architectures."
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      title: "Dedicated Continuous Support",
      description: "We provide solid post-launch maintenance, analytics tracking, and feature expansion modules."
    }
  ];

  return (
    <div className="w-full flex flex-col font-matter bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center px-6 text-center py-20 bg-cover bg-center bg-[#fafafa]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(239, 246, 255, 0.3) 0%, rgba(255, 255, 255, 1) 100%)" }}>
        {/* Float objects */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-float-animation" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl animate-float-animation" style={{ animationDelay: "2s" }} />

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={12} /> Our Agency Bio
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-snug">
            About Us
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-poppins leading-relaxed">
            From idea to launch, we design and develop tailor-made websites &amp; apps that scale with your business and inspire customer trust.
          </p>
        </div>
      </section>

      {/* 2. CORPORATE HISTORY & CORE VALUES */}
      <section className="w-full py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-950 mb-6">Building the Digital Future</h2>
          <div className="space-y-6 text-gray-500 leading-relaxed font-poppins text-sm sm:text-base max-w-4xl mx-auto">
            <p>
              At <strong className="text-gray-900 font-semibold">GhayasTech Services</strong>, we believe technology isn&apos;t just about code — it&apos;s about creating possibilities, building trust, and driving growth. Founded with a vision to empower startups, entrepreneurs, and businesses with powerful digital solutions, we have evolved into one of India&apos;s fast-growing website and application development agencies, delivering high-performing digital products that inspire results.
            </p>
            <p>
              From a small team of passionate developers to a full-fledged agency working with clients across India, Dubai, Canada, and the US, our journey has always been driven by one mission — to make technology simple, scalable, and highly impactful.
            </p>
          </div>
        </div>

        {/* Brand values card */}
        <div className="bg-neutral-50/50 border border-neutral-200/50 rounded-3xl p-8 sm:p-12 mb-16">
          <h3 className="text-2xl font-extrabold text-gray-950 mb-6 text-center">Who We Are</h3>
          <div className="space-y-4 text-gray-500 font-poppins text-sm sm:text-base leading-relaxed">
            <p>
              We are a team of creative developers, designers, and strategists who blend cutting-edge innovation with flawless execution.
            </p>
            <p>
              Our strength lies in understanding every client&apos;s vision deeply and turning it into a premium digital reality — whether it&apos;s an e-commerce app, food delivery system, SaaS platform, or a complete custom business ecosystem.
            </p>
            <p>
              We specialize in both pre-built solutions (for fast and affordable launches) and custom development (for unique, tailor-made platforms). At GhayasTech, every line of code, every design, and every project is created with a clear purpose to help your business grow online.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="w-full py-20 px-6 bg-neutral-50/50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Our Foundations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mt-4">
              Values That Drive Our Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200/50 rounded-2xl p-8 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm font-poppins leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
