"use client";

export default function PatternsPage() {
  const patterns = [
    { title: "Auth", desc: "Sign in/up, magic link, 2FA, reset password" },
    { title: "Onboarding", desc: "Checklist, progressive disclosure, coach marks" },
    { title: "Settings", desc: "Tabbed layout, account & billing, API keys" },
    { title: "Search", desc: "Facets, sort, saved views, URL params" },
    { title: "Table CRUD", desc: "Inline edit, optimistic updates, bulk actions" },
    { title: "Content editor", desc: "MDX with preview, file uploads, versioning" },
    { title: "Notifications", desc: "Inbox + toasts, read states, activity feed" },
    { title: "Payments", desc: "Checkout, subscriptions, invoices" },
    { title: "Docs layout", desc: "Sticky TOC, code switcher, next/prev" },
    { title: "Dashboard", desc: "KPI cards, filters, resizable panels" },
    { title: "File manager", desc: "Grid/list, selection, preview, rename" },
    { title: "Messaging", desc: "Chat composer, threads, presence" },
  ];

  return (
    <main className="container" style={{ paddingBottom: "80px" }}>
      <h1
        style={{
          margin: "34px 0 10px",
          fontWeight: 800,
          fontSize: "clamp(36px, 5.6vw, 54px)",
        }}
      >
        Patterns — All
      </h1>
      <p
        className="lead"
        style={{
          color: "var(--muted)",
          margin: "0 0 20px",
        }}
      >
        Composed flows built from components. Each card links to a detailed recipe with a11y and motion guidelines.
      </p>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {patterns.map((pattern, i) => (
          <a
            key={i}
            href="#"
            className="card"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "16px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              display: "block",
            }}
          >
            <h3 style={{ margin: "0 0 6px" }}>{pattern.title}</h3>
            <p style={{ margin: 0, color: "var(--muted)" }}>{pattern.desc}</p>
          </a>
        ))}
      </div>

      <style jsx>{`
        .card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-2);
        }
      `}</style>
    </main>
  );
}
