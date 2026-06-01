"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Prebuilt", href: "/prebuilt" },
    { name: "Customized", href: "/customized" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="relative flex justify-center items-center py-6 bg-transparent z-50 px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:grid grid-cols-3 items-center rounded-full px-12 py-4 border border-gray-200/80 min-w-[750px] bg-white/90 backdrop-blur-md shadow-lg shadow-black/[0.03]">
        <div className="flex justify-center space-x-12">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium tracking-wide text-sm transition-all duration-300 hover:text-blue-600 ${
                isActive(link.href) ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-1 group">
            <span className="font-extrabold text-2xl tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              Ghayas<span className="text-blue-600 group-hover:text-gray-900 transition-colors duration-300">Tech</span>
            </span>
          </Link>
        </div>

        <div className="flex justify-center space-x-12">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium tracking-wide text-sm transition-all duration-300 hover:text-blue-600 ${
                isActive(link.href) ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Header */}
      <div className="flex md:hidden w-full max-w-[90%] justify-between items-center px-6 py-3 border border-gray-200/80 rounded-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <Link href="/" className="flex items-center">
          <span className="font-extrabold text-xl tracking-tight text-gray-900">
            Ghayas<span className="text-blue-600">Tech</span>
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col items-center py-8 space-y-6 md:hidden z-40 animate-fadeInUp">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                isActive(link.href) ? "text-blue-600 font-semibold" : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
