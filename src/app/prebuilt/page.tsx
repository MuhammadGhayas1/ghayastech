"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { ChevronDown, Sparkles, Check, ArrowRight } from "lucide-react";

export default function PrebuiltPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const saasProducts = [
    {
      title: "Premium E-Commerce Engine",
      subtitle: "Multi-vendor Storefront",
      price: "599",
      image: "/ecommerce_engine.png",
      description: "Full-scale multi-vendor online marketplace package optimized for high volume products, customer reviews, discount rules, and seamless local payment gateways.",
      bullets: ["SEO Optimized product pages", "Instant CSV product import/export", "Stripe, Razorpay, COD checkout", "Vendor administration panel"]
    },
    {
      title: "Customized SaaS CRM",
      subtitle: "Startups Client Hub",
      price: "599",
      image: "/crm_hub.png",
      description: "Track deals, coordinate pipeline leads, automate email drips, and monitor support tickets. Standard client dashboard tailored exclusively for professional teams.",
      bullets: ["Lead Kanban board pipeline", "Automatic email sequence triggers", "Interactive reports & charts", "Custom role/permission rules"]
    },
    {
      title: "Interactive E-Learning Hub",
      subtitle: "Digital Course System",
      price: "599",
      image: "/elearning_hub.png",
      description: "A state-of-the-art educational suite featuring video player, quizzes, student analytics dashboard, certificate generation, and modular curriculum builder.",
      bullets: ["Premium video player integration", "Student progress trackers", "Automatic certificate generator", "Quiz and testing system modules"]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col font-matter bg-white">
      
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": siteConfig.faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center px-6 text-center py-20 bg-cover bg-center bg-[#fafafa]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(239, 246, 255, 0.3) 0%, rgba(255, 255, 255, 1) 100%)" }}>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-float-animation" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl animate-float-animation" style={{ animationDelay: "2s" }} />

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={12} /> Rapid Digital Launch
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-snug">
            Prebuilt SaaS Software <br /> for Startups
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-poppins leading-relaxed">
            Skip the long wait and high costs. Our pre-built production-ready platforms help you go digital in a week without compromising on security, speed, or quality.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC SAAS PRODUCTS GRID */}
      <section className="w-full py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="px-4 py-1.5 bg-neutral-50 border border-neutral-200/60 shadow-sm rounded-full text-neutral-500 font-semibold text-xs tracking-wider uppercase mb-4">
            Production Ready SaaS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950">
            Check our SaaS Products
          </h2>
          <p className="text-gray-500 text-sm max-w-md mt-4 font-poppins">
            Pre-assembled digital portals customized to your brand color, logo, and copy in just 5-7 business days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {saasProducts.map((prod, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-200/60 shadow-sm hover:shadow-xl rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Product Image Banner */}
                {prod.image && (
                  <div className="w-full aspect-[16/9] rounded-2xl mb-6 bg-neutral-50 overflow-hidden border border-gray-100/60 relative">
                    <img 
                      src={prod.image} 
                      alt={prod.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                )}
                
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  {prod.subtitle}
                </span>
                
                <h3 className="text-2xl font-extrabold text-gray-900 mt-4 mb-2">
                  {prod.title}
                </h3>
                
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl font-extrabold text-gray-950 font-matter">${prod.price}</span>
                  <span className="text-gray-500 text-xs uppercase font-semibold">One-Time Install</span>
                </div>
                
                <p className="text-gray-500 text-sm font-poppins leading-relaxed mb-6">
                  {prod.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {prod.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2.5 text-sm text-gray-600 font-poppins">
                      <span className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="/contact">
                <button className="w-full py-3.5 bg-black text-white hover:bg-neutral-800 text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5 group">
                  Deploy Engine <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ACCORDION FAQ SECTION */}
      <section className="w-full py-24 px-6 bg-slate-50/50 border-t border-slate-100/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-4 py-1.5 bg-white border border-gray-200/60 shadow-sm rounded-full text-neutral-500 font-semibold text-xs tracking-wider uppercase mb-4">
              Help Center
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 leading-snug">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-4 max-w-sm font-poppins leading-relaxed">
              Find instant responses to general queries regarding deployment process, payment rules, custom features, and support packages.
            </p>
          </div>

          <div className="space-y-4">
            {siteConfig.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-800 hover:text-blue-600 transition-colors font-semibold"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-black rounded-full" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`text-gray-400 transform transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-gray-500 font-poppins text-sm leading-relaxed border-t border-gray-50 animate-fadeInUp">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
