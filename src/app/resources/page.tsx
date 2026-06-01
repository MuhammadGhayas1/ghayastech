import React from "react";
import { Metadata } from "next";
import { Sparkles, Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Blogs | GhayasTech",
  description: "Insights on custom software development, high-converting booking engines, and performance-first web design for service-based businesses.",
};

const blogPosts = [
  {
    title: "Why Custom Software Outperforms Ready-Made SaaS for Service Businesses",
    date: "June 01, 2026",
    author: "Muhammad Ghayas",
    excerpt: "Generic software creates operational bottlenecks. Learn how bespoke engineering and custom booking engines can accelerate startup growth.",
    category: "Development Strategy"
  },
  {
    title: "How to Optimize Your Next.js App for AI Search Engines & LLMs (AI-SEO)",
    date: "May 24, 2026",
    author: "Muhammad Ghayas",
    excerpt: "LLMs crawl and evaluate your website differently than search engine bots. Learn how semantic HTML and JSON-LD structured schema drive AI citations.",
    category: "Search Optimization"
  },
  {
    title: "The Power of Offline-First Mobile Architectures in Modern Transit Apps",
    date: "May 18, 2026",
    author: "Rizwan Ali",
    excerpt: "Explore the engineering details behind resilient mobile applications that perform beautifully with local caching under high user loads.",
    category: "Mobile Architecture"
  }
];

export default function ResourcesPage() {
  return (
    <div className="w-full flex flex-col font-matter bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] flex flex-col justify-center items-center px-6 text-center py-20 bg-cover bg-center bg-[#fafafa]" style={{ backgroundImage: "linear-gradient(to bottom, rgba(239, 246, 255, 0.3) 0%, rgba(255, 255, 255, 1) 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={12} /> Tech &amp; Business Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-snug">
            Resources &amp; Blogs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl mx-auto font-poppins leading-relaxed">
            Expert strategies, software engineering tips, and architectural insights to help high-growth service businesses scale.
          </p>
        </div>
      </section>

      {/* Grid of Articles */}
      <main className="max-w-6xl mx-auto px-6 py-16 w-full grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group"
            >
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                
                <h2 className="text-xl font-bold text-gray-900 mt-5 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-poppins">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <span className="inline-flex items-center text-blue-600 font-semibold text-xs hover:underline gap-1 cursor-pointer">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
