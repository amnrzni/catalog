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
    <div className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated opacity-50" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 floating-circle purple animate-float" />
      <div className="absolute bottom-40 right-20 w-40 h-40 floating-circle pink animate-float-delayed" />
      <div className="absolute top-1/2 right-10 w-24 h-24 floating-circle blue animate-float" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Beautiful UI</span>
              <br />
              <span className="text-text-primary">Design System</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl">
              A comprehensive, elegant design catalog featuring reusable components, 
              design patterns, and complete templates with modern dark theme aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/components">
                <Button size="large" variant="primary">
                  Explore Components
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
          <div className="flex-1 flex justify-center lg:justify-end">
            <Sphere3D size={350} />
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
          Explore the Catalog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {navigationCards.map((card) => (
            <Link key={card.href} href={card.href}>
              <Card hover glassmorphism className="h-full group">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <i className={`lucide-${card.icon} text-white text-xl`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {card.title}
                  </h3>
                  <p className="text-text-tertiary flex-1">
                    {card.description}
                  </p>
                  
                  {/* Arrow icon */}
                  <div className="mt-4 flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
