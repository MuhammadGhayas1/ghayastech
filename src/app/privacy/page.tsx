import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GhayasTech",
  description: "Privacy Policy for GhayasTech. Read how we collect, protect, and handle client data across modern digital products.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full flex flex-col font-matter bg-white min-h-screen">
      {/* Header */}
      <section className="relative w-full min-h-[30vh] flex flex-col justify-center items-center px-6 text-center py-16 bg-cover bg-center bg-[#fafafa]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(239, 246, 255, 0.2) 0%, rgba(255, 255, 255, 1) 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400 font-poppins">
            Effective Date: June 01, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 w-full grow font-poppins text-gray-600 leading-relaxed text-sm sm:text-base space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us directly through contact forms, newsletter signup prompts, and project consultations. This includes name, phone number, email address, company details, and project requirements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">2. How We Use Your Data</h2>
          <p>
            Your information is used solely to provide and improve our development services:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Responding to inquiry submissions and providing project quotes.</li>
            <li>Configuring and deploying prebuilt SaaS modules on your infrastructure.</li>
            <li>Sending critical project milestones and maintenance notifications.</li>
            <li>Ensuring secure database authentication and access controls for custom booking engines.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">3. Information Sharing &amp; Disclosure</h2>
          <p>
            We hold your privacy in the absolute highest regard. GhayasTech **never** sells, rents, or trades your personal information or business database contents with third-party marketers or unauthorized entities under any circumstances.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">4. High-End Data Security Policies</h2>
          <p>
            We deploy secure sockets layer (SSL/TLS) encryption channels for all APIs, enforce bulletproof access key policies, and recommend AWS and edge CDN infrastructures with strict CORS rules to safeguard all deployed custom booking databases.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">5. Contact Information</h2>
          <p>
            If you have any questions or require modifications to your stored personal details, contact us:
          </p>
          <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6 space-y-1 text-sm font-poppins">
            <p className="font-semibold text-gray-955 font-matter">GhayasTech Services</p>
            <p>Email: helloghayastech@gmail.com</p>
            <p>WhatsApp Support: +17828242172</p>
          </div>
        </section>
      </main>
    </div>
  );
}
