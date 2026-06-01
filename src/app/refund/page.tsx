import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | GhayasTech",
  description: "Refund Policy for GhayasTech. Clear information regarding milestones payments for custom developments and prebuilt CRM setups.",
};

export default function RefundPage() {
  return (
    <div className="w-full flex flex-col font-matter bg-white min-h-screen">
      {/* Header */}
      <section className="relative w-full min-h-[30vh] flex flex-col justify-center items-center px-6 text-center py-16 bg-cover bg-center bg-[#fafafa]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(239, 246, 255, 0.2) 0%, rgba(255, 255, 255, 1) 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400 font-poppins">
            Effective Date: June 01, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 w-full grow font-poppins text-gray-600 leading-relaxed text-sm sm:text-base space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">1. Prebuilt SaaS Deployment Canceleations</h2>
          <p>
            Due to the direct installation costs, immediate resource allocation, and instant codebase provisioning required for our prebuilt digital engines (like the Premium E-Commerce, SaaS CRM, and E-Learning portals), setup fees are non-refundable once active server deployment has commenced.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">2. Custom Software Project Milestones</h2>
          <p>
            For custom engineering agreements, work is structured around clearly defined sprint deliverables and milestones. Payments made for successfully delivered and approved milestones are non-refundable. If a contract is terminated by the client mid-project, you will only be responsible for paying for the active work completed up to the date of written cancellation.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">3. Our Guarantee of Performance</h2>
          <p>
            We take pride in delivering elite quality and zero-bloat code. During the post-launch support windows defined in your project agreement, GhayasTech will resolve any architectural bugs, load-speed issues, or performance bottlenecks identified under standard operating conditions at zero additional cost to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-955 font-matter">4. Dispute Resolution &amp; Contact</h2>
          <p>
            We strive to work collaboratively to resolve any technical or structural concerns. If you have questions about billing, invoice details, or milestone refunds, please contact us immediately:
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
