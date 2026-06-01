"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Sparkles, MapPin, Mail, Phone, User, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
      });
      // Clear sent success message after 4s
      setTimeout(() => setIsSent(false), 4000);
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col font-matter bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[50vh] flex flex-col justify-center items-center px-6 text-center py-20 bg-cover bg-center bg-[#fafafa]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(239, 246, 255, 0.3) 0%, rgba(255, 255, 255, 1) 100%)" }}>
        {/* Float objects */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-float-animation" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl animate-float-animation" style={{ animationDelay: "2s" }} />

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={12} /> Get in Touch
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-snug">
            Contact Us
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-poppins leading-relaxed">
            We build state-of-the-art, high-converting custom applications and automated systems to launch your business into hyper-growth.
          </p>
        </div>
      </section>

      {/* 2. DUAL COLUMN FORM & INFO SECTION */}
      <section className="w-full py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Column */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full w-max">
              Contact Form
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
              Have a question? <br /> Contact us now
            </h2>
            
            <p className="text-gray-500 leading-relaxed mb-10 font-poppins text-sm sm:text-base">
              Have questions or need assistance with your next project? Our expert developers are ready to consult with you — just get in touch.
            </p>            <div className="space-y-6 text-gray-700">

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-gray-700 shrink-0 shadow-sm">
                  <Mail size={20} className="text-emerald-600" />
                </span>
                <div>
                  <p className="font-bold text-gray-950 font-poppins text-sm">Email Address</p>
                  <p className="text-sm text-gray-500 font-poppins mt-0.5">
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">{siteConfig.contact.email}</a>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-gray-700 shrink-0 shadow-sm">
                  <Phone size={20} className="text-rose-600" />
                </span>
                <div>
                  <p className="font-bold text-gray-950 font-poppins text-sm">WhatsApp Call / Message</p>
                  <p className="text-sm text-gray-500 font-poppins mt-0.5">
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace("+", "")}`} className="hover:underline">
                      {siteConfig.contact.whatsapp}
                    </a>
                  </p>
                </div>
              </div>

              {/* Professional Networks */}
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-gray-700 shrink-0 shadow-sm">
                  {/* Custom inline LinkedIn SVG */}
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-gray-950 font-poppins text-sm">Professional Network</p>
                  <p className="text-sm text-gray-500 font-poppins mt-0.5">
                    <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                      Connect on LinkedIn
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white border border-gray-200/60 p-8 rounded-3xl shadow-sm">
            {isSent ? (
              <div className="flex flex-col items-center justify-center text-center py-20 animate-fadeInUp">
                <CheckCircle size={64} className="text-emerald-500 mb-6 animate-bounce" />
                <h3 className="text-2xl font-extrabold text-gray-955 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm font-poppins max-w-xs">
                  Thank you for reaching out. A GhayasTech strategist will review your query and contact you very soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Name"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-50 border border-gray-200/60 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                    />
                  </div>
 
                  {/* Phone Input */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <Phone size={16} />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone Number"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-50 border border-gray-200/60 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Input */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email Address"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-50 border border-gray-200/60 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <MessageSquare size={16} />
                    </span>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Subject"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-50 border border-gray-200/60 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <span className="absolute left-3.5 top-4 text-gray-400">
                    <MessageSquare size={16} />
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project requirements..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-50 border border-gray-200/60 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white hover:bg-neutral-800 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
