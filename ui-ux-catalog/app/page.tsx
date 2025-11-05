import Link from "next/link";
import Sphere3D from "@/components/ui/3d-objects/Sphere3D";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Home() {
  const navigationCards = [
    {
      title: "Components",
      description: "Browse our collection of beautiful, reusable UI components",
      icon: "box",
      href: "/components",
      gradient: "from-primary to-primary-dark",
    },
    {
      title: "Use Cases",
      description: "Discover real-world applications and implementation patterns",
      icon: "lightbulb",
      href: "/use-cases",
      gradient: "from-accent-blue to-blue-600",
    },
    {
      title: "Design Tokens",
      description: "Explore our comprehensive design system tokens and variables",
      icon: "palette",
      href: "/design-tokens",
      gradient: "from-accent-pink to-pink-600",
    },
    {
      title: "Search",
      description: "Find exactly what you need with powerful search and filters",
      icon: "search",
      href: "/search",
      gradient: "from-accent-orange to-orange-600",
    },
    {
      title: "My Collection",
      description: "View and export your saved components and patterns",
      icon: "bookmark",
      href: "/collection",
      gradient: "from-accent-green to-emerald-600",
    },
    {
      title: "Examples",
      description: "Complete templates and case studies for inspiration",
      icon: "layout-template",
      href: "/examples/templates",
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated opacity-40" aria-hidden="true" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 floating-circle purple animate-float" aria-hidden="true" />
      <div className="absolute bottom-40 right-20 w-48 h-48 floating-circle pink animate-float-delayed" aria-hidden="true" />
      <div className="absolute top-1/2 right-10 w-32 h-32 floating-circle blue animate-float" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 w-36 h-36 floating-circle purple animate-float-delayed" style={{ animationDelay: '1s' }} aria-hidden="true" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary-light text-sm font-medium">✨ Modern Design System</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="gradient-text bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent animate-glow">Beautiful UI</span>
              <br />
              <span className="text-text-primary drop-shadow-lg">Design System</span>
            </h1>
            <p className="text-xl sm:text-2xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
              A comprehensive, elegant design catalog featuring reusable components, 
              design patterns, and complete templates with <span className="text-primary-light font-semibold">modern dark theme</span> aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link href="/components">
                <Button size="large" variant="primary" className="group">
                  <span>Explore Components</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Link href="/design-tokens">
                <Button size="large" variant="secondary">
                  View Design Tokens
                </Button>
              </Link>
            </div>
          </div>

          {/* 3D Sphere */}
          <div className="flex-1 flex justify-center lg:justify-end z-10">
            <div className="relative">
              <Sphere3D size={400} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Explore the Catalog
          </h2>
          <p className="text-lg text-text-tertiary max-w-2xl mx-auto">
            Discover our comprehensive collection of components, patterns, and design resources
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {navigationCards.map((card) => (
            <Link key={card.href} href={card.href}>
              <Card hover glassmorphism className="h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col h-full relative z-10 p-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <i className={`lucide-${card.icon} text-white text-2xl`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary-light transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-text-tertiary flex-1 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Arrow icon */}
                  <div className="mt-6 flex items-center text-primary-light group-hover:translate-x-3 transition-all duration-300">
                    <span className="text-sm font-semibold tracking-wide">Explore</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Why Choose Our Catalog?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Fast & Modern</h3>
              <p className="text-text-tertiary">Built with Next.js 14+ and optimized for performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-pink to-pink-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Fully Accessible</h3>
              <p className="text-text-tertiary">WCAG 2.1 AA compliant with keyboard navigation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-blue to-blue-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Customizable</h3>
              <p className="text-text-tertiary">Easy to customize with design tokens and Tailwind</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
