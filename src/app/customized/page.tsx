"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function CustomizedPage() {
  const [filterType, setFilterType] = useState<"Website" | "Application">("Website");

  const filteredProjects = siteConfig.projects.filter(
    (p) => p.category === filterType
  );

  return (
    <div className="w-full flex flex-col font-matter bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center px-6 text-center py-20 bg-cover bg-center bg-[#fafafa]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(239, 246, 255, 0.3) 0%, rgba(255, 255, 255, 1) 100%)" }}>
        {/* Float objects */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-float-animation" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl animate-float-animation" style={{ animationDelay: "2s" }} />

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={12} /> Custom Bespoke Engineering
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-snug">
            Customized Development <br /> From Scratch
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-poppins leading-relaxed">
            We transform your unique ideas into powerful, highly-scalable applications. Our team crafts custom software solutions designed specifically for your business operations, from design concept to final deployment.
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="w-full py-12 px-6 flex flex-col items-center border-b border-gray-100">
        <div className="px-5 py-1.5 bg-neutral-50 border border-neutral-200/60 shadow-sm rounded-full text-neutral-500 font-semibold text-xs tracking-wider uppercase mb-6">
          Portfolio Filter
        </div>
        <h2 className="text-3xl font-extrabold text-gray-950 mb-8">Our Top Projects</h2>
        
        <div className="flex bg-neutral-100/80 p-1.5 rounded-2xl border border-gray-200/40 gap-1">
          <button
            onClick={() => setFilterType("Website")}
            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              filterType === "Website"
                ? "bg-black text-white shadow-md shadow-black/10 -translate-y-0.5"
                : "text-gray-700 hover:text-black hover:bg-neutral-200/50"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setFilterType("Application")}
            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              filterType === "Application"
                ? "bg-black text-white shadow-md shadow-black/10 -translate-y-0.5"
                : "text-gray-700 hover:text-black hover:bg-neutral-200/50"
            }`}
          >
            Applications
          </button>
        </div>
      </section>

      {/* 3. PROJECTS GRID WITH ALTERNATING COLUMNS */}
      <section className="w-full py-24 px-6 max-w-6xl mx-auto space-y-28">
        {filteredProjects.map((proj, idx) => {
          // Alternating side layouts: even indices get image on left, odd get image on right
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={proj.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-0 animate-fadeInUp`}
            >
              {/* Visual image placeholder block */}
              <div 
                className={`flex justify-center p-6 rounded-3xl bg-neutral-50/80 border border-neutral-100 shadow-inner w-full ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-gray-200/60 shadow-sm flex flex-col items-center justify-center relative overflow-hidden group">
                  {proj.image ? (
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <span className="text-gray-300/45 font-black text-7xl select-none tracking-widest uppercase opacity-20">
                      {proj.category[0]}0{idx+1}
                    </span>
                  )}
                  
                  {/* Outer abstract graphic */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Project content column */}
              <div className={`text-left ${isEven ? "md:order-2" : "md:order-1"}`}>
                <span className="text-xs font-bold text-blue-600 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
                  Case Study {idx + 1}
                </span>
                
                <h3 className="text-3xl font-extrabold text-gray-900 mt-4 mb-8">
                  {proj.title}
                </h3>

                <ul className="space-y-4 mb-8">
                  {proj.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-4 text-gray-600">
                      <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-neutral-100 text-gray-900 flex items-center justify-center text-xs font-extrabold shadow-sm border border-neutral-200/20">
                        0{bulletIdx + 1}
                      </span>
                      <p className="flex-1 text-sm sm:text-base font-poppins leading-relaxed pt-0.5">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
