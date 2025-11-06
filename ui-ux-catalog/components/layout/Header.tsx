"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "@/components/ui/Drawer";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/library", label: "Components" },
    { href: "/patterns", label: "Patterns" },
    { href: "/animations", label: "Animations" },
    { href: "/use-cases", label: "Use cases" },
    { href: "/tokens", label: "Tokens" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-20" style={{ 
      background: "rgba(11, 12, 16, 0.6)", 
      backdropFilter: "saturate(140%) blur(10px)",
      borderBottom: "1px solid var(--border)"
    }}>
      <div className="container">
        <nav className="flex items-center justify-between" style={{ padding: "0.8rem 0" }}>
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 font-extrabold" style={{ fontSize: "16px" }}>
            <span 
              className="dot" 
              style={{ 
                width: "20px", 
                height: "20px", 
                borderRadius: "6px", 
                background: "var(--accent)" 
              }}
            />
            Catalog
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4" style={{ color: "var(--muted)", fontSize: "14px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  color: isActive(link.href) ? "var(--accent)" : "var(--muted)",
                  position: "relative",
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-12px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "var(--accent)",
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "8px",
              color: "var(--text)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          </button>

          {/* Desktop Primary CTA */}
          <Link
            href="/library"
            className="btn-primary hidden md:inline-flex"
            style={{
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              borderRadius: "999px",
              border: "1px solid transparent",
              fontWeight: 600,
              background: "var(--accent)",
              color: "var(--bg)",
              transition: "all 0.2s ease"
            }}
          >
            Get started
          </Link>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <Drawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} side="left">
        <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700 }}>Menu</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "8px",
                color: "var(--text)",
                cursor: "pointer",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="5" x2="15" y2="15" />
                <line x1="15" y1="5" x2="5" y2="15" />
              </svg>
            </button>
          </div>
          
          <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                style={{
                  padding: "var(--space-3)",
                  borderRadius: "var(--radius-sm)",
                  color: isActive(link.href) ? "var(--accent)" : "var(--text)",
                  background: isActive(link.href) ? "rgba(255, 255, 255, 0.05)" : "transparent",
                  fontWeight: isActive(link.href) ? 600 : 400,
                  transition: "all 0.15s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/library"
            onClick={handleNavClick}
            className="btn-primary"
            style={{
              marginTop: "var(--space-4)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              borderRadius: "999px",
              border: "1px solid transparent",
              fontWeight: 600,
              background: "var(--accent)",
              color: "var(--bg)",
              transition: "all 0.2s ease",
            }}
          >
            Get started
          </Link>
        </div>
      </Drawer>

      <style jsx>{`
        .nav-link:hover {
          color: var(--text);
        }
        .btn-primary:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }
      `}</style>
    </header>
  );
}
