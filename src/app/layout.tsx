import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "GhayasTech - Premium Web Development & Custom Software Agency",
    template: "%s | GhayasTech"
  },
  description: "GhayasTech is a premium web development agency specializing in high-converting booking engines and custom SaaS solutions for service-based businesses in the US and Canada.",
  keywords: [
    "Custom software development for service businesses",
    "High-converting website design for US startups",
    "Automated booking engines for contractors",
    "Performance-first web development Canada",
    "Next.js web agency",
    "SaaS development USA"
  ],
  metadataBase: new URL("https://ghayastech.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ghayastech.vercel.app",
    siteName: "GhayasTech",
    title: "GhayasTech - Premium Web Development & Custom Software Agency",
    description: "Specializing in high-converting booking engines and custom SaaS solutions for service-based businesses in the US and Canada. Start a Project with us today.",
    images: [
      {
        url: "/avatar1.png",
        width: 1200,
        height: 630,
        alt: "GhayasTech"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GhayasTech - Premium Web Development & Custom Software Agency",
    description: "Specializing in high-converting booking engines and custom SaaS solutions for service-based businesses in the US and Canada.",
    images: ["/avatar1.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GhayasTech",
    "image": "https://ghayastech.vercel.app/avatar1.png",
    "url": "https://ghayastech.vercel.app",
    "telephone": siteConfig.contact.whatsapp,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Global Services",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.whatsapp,
        "contactType": "customer service",
        "areaServed": ["US", "CA"],
        "availableLanguage": "en"
      }
    ],
    "description": "GhayasTech is a premium web development agency specializing in high-converting booking engines and custom SaaS solutions for service-based businesses in the US and Canada."
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
