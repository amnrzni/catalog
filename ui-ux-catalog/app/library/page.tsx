"use client";

import Link from "next/link";
import Panel from "@/components/ui/Panel";

export default function LibraryPage() {
  const componentCategories = [
    {
      id: "navigation",
      title: "Navigation & Input",
      components: [
        { name: "Command palette", desc: "Spotlight with keyboard shortcuts and groups" },
        { name: "Breadcrumbs", desc: "Responsive truncation with ARIA" },
        { name: "Segmented control", desc: "Tabs-like control with selection ring" },
      ],
    },
    {
      id: "forms",
      title: "Forms & Inputs",
      components: [
        { name: "Combobox", desc: "Async search with typeahead" },
        { name: "Date range", desc: "Keyboard navigable calendars" },
        { name: "File uploader", desc: "Drag‑drop with image crop" },
      ],
    },
    {
      id: "data",
      title: "Data display & tables",
      components: [
        { name: "Data table", desc: "Pin/resize/sort/filter + virtualization" },
        { name: "Timeline", desc: "Chronological events with badges" },
        { name: "Tree view", desc: "Nested lists with keyboard support" },
      ],
    },
    {
      id: "overlays",
      title: "Overlays & feedback",
      components: [
        { name: "Drawer / Sheet", desc: "Edge anchored with focus trapping" },
        { name: "Popover / Menu", desc: "Alignment + collision handling" },
        { name: "Toast center", desc: "Stacked notifications with queue" },
      ],
    },
    {
      id: "rich",
      title: "Rich content",
      components: [
        { name: "Code block", desc: "Syntax highlighting + copy button" },
        { name: "Diff viewer", desc: "Side-by-side or unified" },
        { name: "Rich text editor", desc: "Markdown-based with toolbar" },
      ],
    },
  ];

  return (
    <main className="container" style={{ marginTop: "34px", paddingBottom: "80px" }}>
      {/* Header Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
        className="header-grid"
      >
        <div>
          <span
            className="badge"
            style={{
              display: "inline-block",
              padding: "0.35rem 0.55rem",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              fontSize: "12px",
              marginBottom: "10px",
            }}
          >
            Components
          </span>
          <h1
            style={{
              margin: "0 0 10px",
              fontWeight: 800,
              fontSize: "clamp(34px, 5.6vw, 54px)",
            }}
          >
            Production‑ready building blocks
          </h1>
          <p
            className="lead"
            style={{
              color: "var(--muted)",
              margin: "0 0 18px",
            }}
          >
            Curated components grouped by intent. Each comes with a11y notes, motion defaults, and clean APIs.
          </p>
          <div style={{ display: "flex", gap: "0.6rem" }}>
            <Link
              href="#navigation"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 1rem",
                borderRadius: "999px",
                background: "var(--accent)",
                border: "none",
                color: "var(--bg)",
                fontWeight: 600,
              }}
            >
              Browse categories
            </Link>
            <Link
              href="/patterns"
              className="btn-ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 1rem",
                borderRadius: "999px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "transparent",
                color: "var(--text)",
              }}
            >
              See patterns
            </Link>
          </div>
        </div>

        {/* Quick install panel */}
        <Panel>
          <h3 style={{ margin: "0 0 8px" }}>Quick install</h3>
          <div
            style={{
              fontFamily: "ui-monospace, Menlo, Consolas, monospace",
              background: "#0f1015",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "12px",
              fontSize: "13px",
            }}
          >
            $ npm install @catalog/ui
          </div>
          <div
            className="cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "12px",
              marginTop: "12px",
            }}
          >
            <div
              className="card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "14px",
                minHeight: "110px",
              }}
            >
              <div
                className="badge"
                style={{
                  display: "inline-block",
                  padding: "0.35rem 0.55rem",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                Buttons
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  style={{
                    padding: "0.5rem 0.8rem",
                    borderRadius: "999px",
                    background: "var(--accent)",
                    border: "none",
                    color: "var(--bg)",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Primary
                </button>
                <button
                  style={{
                    padding: "0.5rem 0.8rem",
                    borderRadius: "999px",
                    background: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "var(--text)",
                    fontSize: "13px",
                  }}
                >
                  Ghost
                </button>
              </div>
            </div>
            <div
              className="card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "14px",
                minHeight: "110px",
              }}
            >
              <div
                className="badge"
                style={{
                  display: "inline-block",
                  padding: "0.35rem 0.55rem",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                Inputs
              </div>
              <input
                placeholder="Search…"
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                  background: "#0f1015",
                  color: "var(--text)",
                  fontSize: "13px",
                }}
              />
            </div>
            <div
              className="card"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "14px",
                minHeight: "110px",
              }}
            >
              <div
                className="badge"
                style={{
                  display: "inline-block",
                  padding: "0.35rem 0.55rem",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                Tabs
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  style={{
                    padding: "0.5rem 0.8rem",
                    borderRadius: "999px",
                    background: "var(--accent)",
                    border: "none",
                    color: "var(--bg)",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Overview
                </button>
                <button
                  style={{
                    padding: "0.5rem 0.8rem",
                    borderRadius: "999px",
                    background: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "var(--text)",
                    fontSize: "13px",
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </Panel>
      </div>

      {/* Component Categories */}
      <div
        className="sections"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "24px",
          marginTop: "26px",
        }}
      >
        {componentCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <Panel>
              <h2 style={{ margin: "0 0 10px" }}>{category.title}</h2>
              <div
                className="cards"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "14px",
                }}
              >
                {category.components.map((comp, i) => (
                  <a
                    key={i}
                    href="#"
                    className="card"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "14px",
                      padding: "14px",
                      minHeight: "110px",
                      display: "block",
                      transition: "background 0.2s ease",
                    }}
                  >
                    <strong>{comp.name}</strong>
                    <p style={{ color: "var(--muted)", margin: "4px 0 0", fontSize: "14px" }}>
                      {comp.desc}
                    </p>
                  </a>
                ))}
              </div>
            </Panel>
          </section>
        ))}
      </div>

      <style jsx>{`
        .btn-primary:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }
        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        .card:hover {
          background: color-mix(in oklab, var(--surface) 95%, var(--accent)) !important;
        }
        @media (max-width: 1000px) {
          .header-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
