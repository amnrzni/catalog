import type { Metadata } from "next";
import "./globals.css";
import "../styles/animations.css";
import "../styles/3d-effects.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "UI/UX Design Catalog - Modern Component Library",
  description: "A comprehensive, elegant UI/UX design system catalog with dark theme aesthetic, featuring reusable components, design patterns, and complete templates.",
  keywords: ["UI", "UX", "design system", "components", "React", "Next.js", "Tailwind CSS"],
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
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
