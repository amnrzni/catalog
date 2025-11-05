"use client";

import Link from "next/link";
import AccentSwitcher from "@/components/ui/AccentSwitcher";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ position: "relative", isolation: "isolate" }}>
        {/* Radial background effect */}
        <div
          className="radial"
          style={{
            position: "absolute",
            inset: "-25% -10% auto -10%",
            height: "70vh",
            pointerEvents: "none",
            zIndex: -1,
            background: `radial-gradient(600px 600px at 50% 22%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%),
                        radial-gradient(1000px 600px at 80% 30%, rgba(255,255,255,0.05), transparent 60%)`,
            maskImage: "radial-gradient(1000px 600px at 50% 30%, #000 55%, transparent 72%)",
            opacity: 0.9,
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ padding: "clamp(72px, 9vw, 120px) 0 46px" }}>
          <span
            className="tag"
            style={{
              display: "inline-block",
              padding: "0.35rem 0.6rem",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Design System
          </span>
          <h1
            style={{
              margin: "12px 0 16px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: "clamp(40px, 6vw, 64px)",
              lineHeight: 1.07,
            }}
          >
            Beautiful UI, simplified.
          </h1>
          <p
            className="lead"
            style={{
              color: "var(--muted)",
              fontSize: "clamp(16px, 2.1vw, 19px)",
              lineHeight: 1.7,
              maxWidth: "60ch",
            }}
          >
            A focused catalog of components, patterns, tokens, and animations—production‑ready, accessible, and vibrant on a dark canvas.
          </p>
          <div
            className="cta"
            style={{
              display: "flex",
              gap: "0.8rem",
              flexWrap: "wrap",
              marginTop: "22px",
            }}
          >
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
                transition: "all 0.2s ease",
              }}
            >
              Explore components
            </Link>
            <Link
              href="/animations"
              className="btn-ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                borderRadius: "999px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                fontWeight: 600,
                background: "transparent",
                color: "var(--text)",
                transition: "all 0.2s ease",
              }}
            >
              View animations
            </Link>
            <Link
              href="/patterns"
              className="btn-ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                borderRadius: "999px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                fontWeight: 600,
                background: "transparent",
                color: "var(--text)",
                transition: "all 0.2s ease",
              }}
            >
              Browse patterns
            </Link>
          </div>
          <div style={{ marginTop: "12px" }}>
            <AccentSwitcher />
          </div>
        </div>
      </section>

      {/* Expanded Features */}
      <section style={{ padding: "70px 0", borderTop: "1px solid color-mix(in oklab, var(--border), transparent 30%)" }}>
        <div className="container">
          <div
            className="features"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { emoji: "🎨", title: "Expanded tokens", desc: "Colors, spacing, radii, shadows, motion, z‑index, opacity, borders." },
              { emoji: "♿", title: "Accessibility presets", desc: "High‑contrast, reduced motion, and focus ring styles." },
              { emoji: "🧭", title: "Navigation & input", desc: "Command palette, breadcrumbs, segmented control." },
              { emoji: "📝", title: "Forms & inputs", desc: "Combobox, date range, file upload, validation patterns." },
              { emoji: "📊", title: "Data display & tables", desc: "Virtualized table, pin/resize/sort/filter." },
              { emoji: "🧩", title: "Overlays & feedback", desc: "Drawer, popover/menu, stepper, toast center." },
            ].map((feature, i) => (
              <div
                key={i}
                className="feature"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 35%)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "18px 16px",
                  boxShadow: "var(--shadow-1)",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="chip"
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "10px",
                    background: "color-mix(in oklab, var(--accent) 22%, #000)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "18px",
                  }}
                >
                  {feature.emoji}
                </div>
                <div>
                  <h4 style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: 600 }}>
                    {feature.title}
                  </h4>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: "14px", lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Index cards for quick nav */}
      <section style={{ padding: "70px 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "18px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "30px", letterSpacing: "-0.01em" }}>
              Explore the catalog
            </h2>
            <Link
              href="/library"
              className="tag"
              style={{
                display: "inline-block",
                padding: "0.35rem 0.6rem",
                borderRadius: "999px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Browse all
            </Link>
          </div>
          <div
            className="modules"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "16px",
            }}
          >
            {[
              { title: "Navigation & Input", desc: "Spotlight, breadcrumbs, segmented control.", href: "/library#navigation", span: 4 },
              { title: "Forms & Inputs", desc: "Combobox, date range, file uploader.", href: "/library#forms", span: 4 },
              { title: "Data display & tables", desc: "Table, timeline, tree, KPI cards.", href: "/library#data", span: 4 },
              { title: "Overlays & feedback", desc: "Dialog, drawer, toasts, stepper.", href: "/library#overlays", span: 4 },
              { title: "Rich content", desc: "MDX blocks, code, diff, editor.", href: "/library#rich", span: 4 },
              { title: "Animations", desc: "Micro interactions, route transitions, layout, scroll.", href: "/animations", span: 12 },
              { title: "Patterns", desc: "All production flows in one place.", href: "/patterns", span: 6 },
              { title: "Use cases", desc: "Announcements, forms, dashboard, docs.", href: "/use-cases", span: 6 },
            ].map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="card"
                style={{
                  gridColumn: `span ${card.span}`,
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "22px",
                  boxShadow: "var(--shadow-1)",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
              >
                <h3 style={{ margin: "0 0 6px", fontSize: "20px" }}>{card.title}</h3>
                <p style={{ margin: 0, color: "var(--muted)" }}>{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .btn-primary:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }
        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-2);
        }
        @media (max-width: 900px) {
          .features {
            grid-template-columns: 1fr !important;
          }
          .modules {
            grid-template-columns: 1fr !important;
          }
          .modules .card {
            grid-column: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
