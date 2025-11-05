"use client";

import Link from "next/link";

export default function Header() {
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-4" style={{ color: "var(--muted)", fontSize: "14px" }}>
            <Link href="/" className="hover-text">
              Home
            </Link>
            <Link href="/library" className="hover-text">
              Components
            </Link>
            <Link href="/patterns" className="hover-text">
              Patterns
            </Link>
            <Link href="/animations" className="hover-text">
              Animations
            </Link>
            <Link href="/use-cases" className="hover-text">
              Use cases
            </Link>
            <Link href="/tokens" className="hover-text">
              Tokens
            </Link>
          </div>

          {/* Primary CTA */}
          <Link
            href="/library"
            className="btn-primary"
            style={{
              display: "inline-flex",
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

      <style jsx>{`
        .hover-text:hover {
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
