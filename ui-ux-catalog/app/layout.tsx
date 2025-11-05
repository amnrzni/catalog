import type { Metadata } from "next";
import "./globals.css";
import "../styles/animations.css";
import "../styles/3d-effects.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "UI/UX Design Catalog - Modern Component Library",
    template: "%s | UI/UX Catalog",
  },
  description: "A comprehensive, elegant UI/UX design system catalog with dark theme aesthetic, featuring reusable components, design patterns, and complete templates built with Next.js, React, and Tailwind CSS.",
  keywords: [
    "UI components",
    "UX design",
    "design system",
    "component library",
    "React components",
    "Next.js",
    "Tailwind CSS",
    "dark theme",
    "glassmorphism",
    "accessibility",
    "WCAG"
  ],
  
  // Open Graph
  openGraph: {
    title: "UI/UX Design Catalog",
    description: "Modern component library with dark theme and glassmorphism effects",
    url: "https://catalog.vercel.app",
    siteName: "UI/UX Catalog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UI/UX Catalog - Modern Component Library Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Catalog",
    description: "Modern component library with dark theme and glassmorphism effects",
    images: ["/og-image.png"],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons (comprehensive set)
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Theme color
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0f1729' },
  ],
  
  // Additional metadata
  category: 'technology',
  authors: [{ name: 'UI/UX Catalog' }],
  creator: 'UI/UX Catalog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lucide-static@0.294.0/font/lucide.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "UI/UX Design Catalog",
              "description": "Modern component library and design system",
              "url": "https://catalog.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://catalog.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-xl focus:shadow-glow"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
