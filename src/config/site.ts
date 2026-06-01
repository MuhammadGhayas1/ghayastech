export const siteConfig = {
  name: "GhayasTech",
  title: "GhayasTech - Turning Complex Ideas Into Digital Wonders",
  description: "Premium Web Development Agency. Turning Complex Ideas Into Digital Wonders.",
  url: "https://ghayastech.vercel.app",
  
  contact: {
    email: "helloghayastech@gmail.com",
    whatsapp: "+17828242172",
    instagram: "https://www.instagram.com/ghayastech/",
    linkedin: "https://linkedin.com/in/muhammad-ghayas",
  },

  // Navigation Items
  navItems: [
    { title: "Home", href: "/" },
    { title: "Prebuilt", href: "/prebuilt" },
    { title: "Customized", href: "/customized" },
    { title: "About Us", href: "/about-us" },
    { title: "Contact Us", href: "/contact" },
  ],

  // Specific Projects to replace FutureDesks portfolio
  projects: [
    {
      id: "project-1",
      title: "Woodacia",
      category: "Website",
      label: "Luxury Corporate Website",
      description: "A premium corporate identity built with Next.js, focusing on high-contrast luxury aesthetics.",
      image: "/woodacia_thumbnail.png",
      url: "https://ghayastech.vercel.app",
      bullets: [
        "A premium corporate identity built with Next.js, focusing on high-contrast luxury aesthetics.",
        "Immersive visual interfaces tailored for luxury buyers and design enthusiasts.",
        "Fluid layout with fast load speeds and modern SEO optimization.",
        "Fully responsive structure matching high-end brand guidelines."
      ]
    },
    {
      id: "project-2",
      title: "InternKar",
      category: "Application",
      label: "SaaS Engine",
      description: "A specialized CV optimization engine designed to streamline the job application process.",
      image: "/internkar_thumbnail.png",
      url: "https://ghayastech.vercel.app",
      bullets: [
        "A specialized CV optimization engine designed to streamline the job application process.",
        "Integrates AI analysis to highlight key skills and suggest profile improvements.",
        "Interactive resume dashboard supporting simple drag-and-drop file uploads.",
        "Designed to boost applicant callback rates through targeted search-term matches."
      ]
    },
    {
      id: "project-3",
      title: "Punjab Electric Bus App",
      category: "Application",
      label: "Mobile Application",
      description: "An offline-first mobile solution providing transit information for commuters in Punjab.",
      image: "/electricbus_thumbnail.png",
      url: "https://ghayastech.vercel.app",
      bullets: [
        "An offline-first mobile solution providing transit information for commuters in Punjab.",
        "Real-time updates on electric bus schedules, active routes, and main stops.",
        "Offline local database to search schedules without active internet connection.",
        "Extremely intuitive UI designed for commuters of all age groups."
      ]
    }
  ],

  team: [
    {
      name: "Muhammad Ghayas",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer and UI/UX strategist focused on building high-performance digital engines. Ghayas specializes in eliminating operational bottlenecks, engineering scalable automation, and creating precision-focused web systems for high-growth businesses.",
      image: "/founder_photo.png"
    },
    {
      name: "Rizwan Ali",
      role: "Co-Developer",
      bio: "Software engineer specializing in cross-platform mobile architecture and offline-first solutions. Rizwan focuses on building robust, resilient applications that ensure reliable performance and seamless user experiences across complex system environments.",
      image: "/cofounder_photo.png"
    }
  ],

  // Updated FAQ for a Development Agency
  faqs: [
    {
      question: "What makes GhayasTech different from generic agencies?",
      answer: "Unlike template-based builders, we engineer custom-coded, high-performance engines. We focus on solving business bottlenecks through automation and conversion-optimized design, ensuring your site works as a growth tool rather than just a digital brochure."
    },
    {
      question: "Do you provide full source code ownership?",
      answer: "Yes. Upon final delivery, all source code and intellectual property for your project are fully yours. We believe in complete transparency and ensuring you have total control over your digital assets."
    },
    {
      question: "What does your development process look like?",
      answer: "We follow an agile, phased approach. We start with a technical audit to identify your needs, move into a high-fidelity design phase, and finalize with rapid, iterative development and deployment to ensure your project goes live on time."
    },
    {
      question: "How do you ensure high-performance for my website?",
      answer: "We utilize the modern tech stack—Next.js, Tailwind CSS, and optimized edge-caching. This ensures your site loads instantly on any device, providing a smooth user experience that search engines favor and customers trust."
    },
    {
      question: "Do you offer post-launch maintenance and support?",
      answer: "Absolutely. We don't just 'launch and leave.' We offer tailored support packages to ensure your digital engine remains reliable, updated, and integrated with your changing business needs."
    },
    {
      question: "Can you integrate with my existing business tools?",
      answer: "Yes. Whether it’s CRM systems, payment gateways, or custom scheduling APIs, we specialize in bridging the gap between your web interface and your operational workflows."
    },
    {
      question: "How do you handle custom feature requests during development?",
      answer: "We define the project scope clearly at the start. However, we remain flexible; any additional features are managed through an iterative change-order process, ensuring your project goals remain clear and budget-aligned."
    }
  ],

  testimonials: [
    {
      name: "Haris Jamil",
      role: "Founder, Woodacia",
      content: "GhayasTech built our luxury showcase site. Their clean coding conventions, custom layouts, and responsive designs exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Ayesha Khan",
      role: "Product Lead, InternKar",
      content: "The CV optimization engine they developed is fast, reliable, and exceptionally well-designed. High-quality craftsmanship!",
      rating: 5,
    }
  ]
};
export type SiteConfig = typeof siteConfig;
