import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | GhayasTech",
  description: "Terms of Service for GhayasTech. Understand the conditions governing custom web engineering and prebuilt SaaS CRM licensing.",
};

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col font-matter bg-white min-h-screen">
      {/* Header */}
      <section className="relative w-full min-h-[30vh] flex flex-col justify-center items-center px-6 text-center py-16 bg-cover bg-center bg-[#fafafa]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(239, 246, 255, 0.2) 0%, rgba(255, 255, 255, 1) 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-gray-400 font-poppins">
            Effective Date: June 01, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 w-full grow font-poppins text-gray-600 leading-relaxed text-sm sm:text-base space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-950 font-matter">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by <strong className="text-gray-950">GhayasTech Services</strong> (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), including our custom web development, automated booking systems, and pre-built CRM platforms, you agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">2. Services &amp; Scope of Work</h2>
          <p>
            We specialize in custom software development, automated booking engines, and CRM systems. All custom development projects are executed in according with the signed project contract and Scope of Work (SOW). Any additional features requested during active development cycles will be subject to our change-order process to maintain budget and timeline alignment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">3. Intellectual Property Ownership</h2>
          <p>
            Upon receipt of final, full contract payment, all custom-engineered source code, user interface files, database schemas, and graphic assets created explicitly for your project will be transferred to you with full intellectual property ownership. GhayasTech retains no proprietary claims or lock-in hooks on custom-built client software.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">4. Fees, Caching, &amp; Payment Rules</h2>
          <p>
            Payments are made according to the milestone schedules specified in your service contract. Prebuilt SaaS models require standard one-time upfront setup and deployment installation fees before active configuration onto client servers or edge networks starts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">5. Target Audience &amp; Global Availability</h2>
          <p>
            GhayasTech targets custom software and website deployments globally, focusing heavily on modern businesses, startups, and service providers in the United States and Canada. By using our platforms, you warrant that you possess the legal authority to enter into contract agreements in your local jurisdiction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">6. Contact Information</h2>
          <p>
            If you possess any questions or require support regarding our engineering policies, please contact us at:
          </p>
          <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6 space-y-1 text-sm font-poppins">
            <p className="font-semibold text-gray-950 font-matter">GhayasTech Services</p>
            <p>Email: helloghayastech@gmail.com</p>
            <p>WhatsApp Support: +17828242172</p>
          </div>
        </section>
      </main>
    </div>
  );
}
