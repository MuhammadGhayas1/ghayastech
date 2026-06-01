"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowRight, Star, Quote, Sparkles } from "lucide-react";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const tickerItems = [
    "NEXT.JS 16", "TAILWIND CSS V4", "TYPESCRIPT", "AUTOMATED SYSTEMS", 
    "BESPOKE ENGINEERING", "HIGH PERFORMANCE", "RESPONSIVE DESIGNS", "CONVERSION OPTIMIZED"
  ];

  return (
    <div className="w-full flex flex-col overflow-hidden">
      
      {/* 1. ELEVATED GRID-PAPER HERO SECTION */}
      <section className="relative w-full flex flex-col items-center justify-start pt-0 pb-10 sm:pb-16 px-4 sm:px-6 bg-transparent overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[200px] sm:h-[300px] bg-blue-50/40 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center w-full z-10">
          
          {/* Standing portraits — Single founder on mobile, both on md+ */}
          <div 
            className="flex flex-row justify-center items-end z-10 animate-fadeInUp mt-2 mix-blend-multiply"
            style={{
              maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)"
            }}
          >
            <Image 
              src="/founder_photo.png" 
              alt="Muhammad Ghayas - Founder & Lead Developer" 
              width={384}
              height={384}
              priority
              className="h-52 sm:h-72 md:h-96 w-auto object-contain select-none bg-transparent mix-blend-multiply shadow-none border-none"
            />
            <Image 
              src="/cofounder_photo.png" 
              alt="Rizwan Ali - Co-founder & Systems Engineer" 
              width={384}
              height={384}
              priority
              className="h-52 sm:h-72 md:h-96 w-auto object-contain select-none bg-transparent mix-blend-multiply shadow-none border-none -ml-6 sm:-ml-10 md:-ml-12"
            />
          </div>

          {/* Centered Text Hierarchy */}
          <div className="relative z-20 -mt-6 sm:-mt-10 md:-mt-14 text-center max-w-4xl px-2 sm:px-4 flex flex-col items-center">
            
            {/* Responsive Headline — smaller on mobile, scales up */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold text-gray-955 tracking-tighter leading-[1.08] font-matter text-center">
              Build your Startup <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>with <span className="text-blue-600">GhayasTech</span>
            </h1>
            
            {/* Sub-headline — tighter on mobile */}
            <p className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto font-poppins leading-relaxed">
              We deliver premium custom software development for service businesses and high-converting website design for US startups to eliminate bottlenecks and launch your operations into hyper-growth.
            </p>

            {/* Action Buttons — stack vertically on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
              <Link href="/customized" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-black text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800">
                  Let&apos;s Explore
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-black border border-gray-200 text-sm sm:text-base font-semibold rounded-full shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-50">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Trust Hooks — below CTA for proper content priority */}
            <div className="flex flex-col items-center gap-3 sm:gap-4 mt-8 sm:mt-12">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center overflow-hidden shadow-sm relative">
                    <Image src="/avatar1.png" alt="Trusted Partner" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center overflow-hidden shadow-sm relative">
                    <Image src="/avatar2.png" alt="Trusted Partner" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center overflow-hidden shadow-sm relative">
                    <Image src="/avatar3.png" alt="Trusted Partner" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm font-semibold font-matter">
                  Trusted by <span className="text-blue-600">Modern Brands &amp; Tech Initiatives</span>
                </p>
              </div>
              
              <p className="text-[10px] sm:text-xs text-neutral-400 font-medium font-poppins tracking-wider uppercase leading-relaxed text-center">
                Powered by Next.js | Engineered for Performance | Optimized for Conversion
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. INFINITE TICKER STRIPS */}
      <section className="w-full bg-black py-4 overflow-hidden border-y border-neutral-800 relative z-20">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="marquee-content flex gap-8">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <span key={idx} className="text-neutral-400 font-extrabold text-sm sm:text-base tracking-widest flex items-center gap-2">
                • {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="w-full py-20 px-6 bg-transparent flex flex-col items-center justify-center font-matter">
        <div className="px-4 py-1.5 bg-white border border-gray-100 shadow-sm rounded-full text-neutral-500 font-semibold text-xs tracking-wider uppercase mb-4">
          Bespoke Services
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12 leading-tight">
          Performance-First Web Development Canada &amp; US<br />Streamlining Your Business Logic
        </h2>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Custom Development Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/60 p-8 sm:p-10 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-extrabold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                01
              </div>
              <h3 className="text-2xl font-extrabold text-gray-955 mb-4">Automated Booking Engines for Contractors</h3>
              <p className="text-gray-500 leading-relaxed font-poppins text-sm sm:text-base mb-6">
                We engineer customized, automated booking engines for contractors and service businesses to capture hot leads and streamline active slots natively.
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <Link href="/customized" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:underline gap-1.5">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* SaaS Engine Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/60 p-8 sm:p-10 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-extrabold text-lg mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                02
              </div>
              <h3 className="text-2xl font-extrabold text-gray-955 mb-4">SaaS Engine</h3>
              <p className="text-gray-500 leading-relaxed font-poppins text-sm sm:text-base mb-6">
                Skip the months of dev time. Our prebuilt digital engines help you launch faster without compromising on performance.
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <Link href="/prebuilt" className="inline-flex items-center text-indigo-600 font-semibold text-sm hover:underline gap-1.5">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROMO SECTION (VIDEO EMBED) */}
      <section className="w-full py-24 px-6 bg-black text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Glow backgrounds */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-900/20 rounded-full blur-3xl -z-10" />

        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
          How GhayasTech Boosts<br />Your Brand Velocity
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-12 font-poppins">
          Watch our 2-minute workflow showcase detailing how we construct tailor-made apps and setup pre-built digital engines.
        </p>

        <div className="w-full flex flex-col items-center justify-center mt-6">
          <div className="relative w-[280px] sm:w-[300px] h-[500px] sm:h-[533px] rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-850 bg-neutral-950 flex justify-center items-center">
            <video 
              src="/video/Ghayas Tech Video.mp4" 
              className="w-full h-full object-cover" 
              controls 
              playsInline 
              loop 
              muted 
              autoPlay
            />
          </div>
          <p className="text-xs text-neutral-400 font-poppins mt-4 uppercase tracking-wider">Watch GhayasTech in Action</p>
        </div>
      </section>

      {/* 5. PROJECTS PORTFOLIO */}
      <section className="w-full py-24 px-6 bg-[#fbfbfb]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="px-4 py-1.5 bg-white border border-gray-200/60 shadow-sm rounded-full text-neutral-500 font-semibold text-xs tracking-wider uppercase mb-4">
            Recent Deployments
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-900 mb-16 leading-tight">
            Turning Visions Into Digital Reality
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {siteConfig.projects.map((proj) => (
              <div 
                key={proj.id} 
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group"
              >
                <div>
                  {/* Styled graphic place-holder card to resemble luxury branding */}
                  <div className="w-full aspect-[4/3] rounded-xl mb-6 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center items-center relative overflow-hidden border border-gray-200/50">
                    {proj.image ? (
                      <Image 
                        src={proj.image} 
                        alt={proj.title} 
                        width={300}
                        height={225}
                        className="w-full h-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-105" 
                      />
                    ) : (
                      <span className="text-gray-400 font-extrabold tracking-widest text-[45px] opacity-10 select-none uppercase">
                        {proj.title}
                      </span>
                    )}
                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-gray-600 shadow-sm">
                      {proj.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{proj.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-poppins">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/customized">
              <button className="px-8 py-3.5 border-2 border-black hover:bg-black hover:text-white text-sm font-bold rounded-full transition-colors duration-300">
                View All Case Studies
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. INFINITE TICKER STRIP REVERSE */}
      <section className="w-full bg-neutral-900 py-4 overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="marquee-reverse flex gap-8">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <span key={idx} className="text-neutral-500 font-extrabold text-sm sm:text-base tracking-widest flex items-center gap-2">
                • {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      {siteConfig.testimonials && siteConfig.testimonials.length > 0 && (
        <section className="w-full py-24 px-6 bg-white flex flex-col items-center">
          <div className="px-4 py-1.5 bg-white border border-gray-200/60 shadow-sm rounded-full text-neutral-500 font-semibold text-xs tracking-wider uppercase mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-955 mb-16 leading-tight">
            Happy Clients Testimonials
          </h2>

          <div className="w-full max-w-4xl bg-neutral-50 border border-neutral-100 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-neutral-200/60 w-24 h-24 -z-10" />
            
            <div className="min-h-[160px] flex flex-col justify-center">
              <p className="text-lg sm:text-xl text-neutral-700 italic leading-relaxed font-poppins mb-6">
                &ldquo;{siteConfig.testimonials[activeTestimonial].content}&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-neutral-200/50">
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{siteConfig.testimonials[activeTestimonial].name}</h4>
                <p className="text-sm text-neutral-500 font-medium">{siteConfig.testimonials[activeTestimonial].role}</p>
              </div>
              
              <div className="flex items-center gap-1 mt-4 sm:mt-0">
                {[...Array(siteConfig.testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {siteConfig.testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? "w-8 bg-black" : "w-3 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>
      )}

      {/* 8. TEAM BEHIND WONDERS */}
      <section className="w-full py-24 px-6 bg-[#fbfbfb]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="px-4 py-1.5 bg-white border border-gray-200/60 shadow-sm rounded-full text-neutral-500 font-semibold text-xs tracking-wider uppercase mb-4">
            Our Engineers &amp; Designers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-900 mb-16 leading-tight">
            Team Behind Wonders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {siteConfig.team.map((t, idx) => (
              <div 
                key={idx} 
                className="group relative w-full rounded-3xl border border-gray-200/50 bg-white flex flex-col sm:flex-row items-center gap-6 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Styled profile photo or placeholder graphics for team member */}
                <div className="w-24 h-24 rounded-full bg-neutral-50 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 shadow-sm border border-neutral-200/50 overflow-hidden relative">
                  {t.image ? (
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <span className="text-blue-600 font-black text-2xl">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  )}
                </div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-gray-955 font-extrabold text-xl leading-tight flex items-center gap-1.5 justify-center sm:justify-start">
                    {t.name}
                    {idx === 0 && <Sparkles size={14} className="text-amber-500 animate-spin" style={{ animationDuration: "10s" }} />}
                  </h3>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mt-1 mb-3">
                    {t.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed font-poppins">
                    {t.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
