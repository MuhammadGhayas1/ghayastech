"use client";

import React from "react";
import { siteConfig } from "@/config/site";

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace("+", "")}`;
  const instagramUrl = siteConfig.contact.instagram;

  return (
    <>
      {/* Instagram Floating Icon - Bottom Left */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-6 z-50 sm:left-6 sm:bottom-7 md:left-8 md:bottom-9 transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:rotate-6 animate-floatingSmooth group"
        aria-label="Instagram Link"
      >
        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center p-2.5 sm:p-3 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/45 transition-all duration-300">
          <svg
            className="w-full h-full text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>

      {/* WhatsApp Floating Icon - Bottom Right */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-6 z-50 sm:right-6 sm:bottom-7 md:right-8 md:bottom-9 transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:-rotate-6 animate-floatingSmooth group"
        aria-label="WhatsApp Link"
      >
        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center p-2.5 sm:p-3 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/45 transition-all duration-300">
          <svg
            className="w-full h-full text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.452 4.821 1.453 5.485 0 9.948-4.468 9.95-9.96.002-2.66-1.026-5.161-2.895-7.03C16.654 1.748 14.156.72 11.5.719 6.012.719 1.55 5.187 1.548 10.68c-.001 1.761.47 3.48 1.364 5.014L1.936 21.39l5.882-1.543l.034.02c1.473.876 3.129 1.34 4.797 1.34zm10.963-3.963c-.27-.135-1.597-.788-1.845-.878-.247-.09-.427-.135-.607.135-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.067-.27-.135-1.14-.42-2.172-1.342-.803-.717-1.346-1.603-1.504-1.873-.158-.27-.017-.417.118-.552.122-.122.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.023-.473-.068-.135-.607-1.463-.833-2.003-.22-.53-.442-.457-.607-.466-.157-.008-.337-.01-.517-.01-.18 0-.472.067-.72.338-.247.27-.945.923-.945 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.609 4.073.644.278 1.147.444 1.54.569.647.205 1.236.176 1.701.107.518-.077 1.597-.653 1.822-1.283.225-.63.225-1.17.157-1.283-.067-.113-.247-.203-.517-.338z" />
          </svg>
        </div>
      </a>
    </>
  );
}
