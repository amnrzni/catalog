"use client";

import { useState } from "react";
import Link from "next/link";
import Panel from "@/components/ui/Panel";
import CopyButton from "@/components/ui/CopyButton";
import SegmentedControl from "@/components/ui/SegmentedControl";
import Drawer from "@/components/ui/Drawer";
import { useToast } from "@/components/ui/ToastCenter";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LibraryPage() {
  const [inputValue, setInputValue] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { showToast } = useToast();
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <h3 style={{ margin: 0 }}>Quick install</h3>
            <CopyButton value="npm install @catalog/ui" />
          </div>
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
                  className="btn-press-demo"
                  onClick={() => showToast("Button clicked!", "success")}
                  style={{
                    padding: "0.5rem 0.8rem",
                    borderRadius: "999px",
                    background: "var(--accent)",
                    border: "none",
                    color: "var(--bg)",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "transform 0.08s ease, filter 0.15s ease",
                  }}
                >
                  Primary
                </button>
                <button
                  onClick={() => showToast("Ghost button clicked", "info")}
                  className="btn-ghost-demo"
                  style={{
                    padding: "0.5rem 0.8rem",
                    borderRadius: "999px",
                    background: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "var(--text)",
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
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
              <div style={{ position: "relative" }}>
                <input
                  placeholder="Type here…"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.7rem 0.9rem",
                    paddingRight: inputValue ? "35px" : "0.9rem",
                    borderRadius: "10px",
                    border: "1px solid var(--border)",
                    background: "#0f1015",
                    color: "var(--text)",
                    fontSize: "13px",
                  }}
                />
                {inputValue && (
                  <button
                    onClick={() => setInputValue("")}
                    style={{
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      color: "var(--muted)",
                      cursor: "pointer",
                      padding: "4px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    aria-label="Clear input"
                  >
                    ✕
                  </button>
                )}
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
                Tabs
              </div>
              <SegmentedControl
                tabs={[
                  { id: "overview", label: "Overview", content: <div style={{ fontSize: "13px", color: "var(--muted)" }}>Overview content</div> },
                  { id: "details", label: "Details", content: <div style={{ fontSize: "13px", color: "var(--muted)" }}>Details content</div> },
                ]}
              />
            </div>
          </div>
        </Panel>
      </div>

      {/* Live Interactive Demos */}
      <section style={{ marginTop: "40px" }}>
        <Panel>
          <h2 style={{ margin: "0 0 16px" }}>Live Interactive Demos</h2>
          
          <div style={{ display: "grid", gap: "24px" }}>
            {/* Drawer Demo */}
            <div>
              <h3 style={{ fontSize: "16px", margin: "0 0 12px" }}>Drawer / Sheet</h3>
              <button
                onClick={() => setDrawerOpen(true)}
                style={{
                  padding: "0.65rem 1rem",
                  borderRadius: "999px",
                  background: "var(--accent)",
                  border: "none",
                  color: "var(--bg)",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Open Drawer
              </button>
              <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <div style={{ padding: "var(--space-6)" }}>
                  <h2 style={{ margin: "0 0 16px" }}>Drawer Content</h2>
                  <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    This drawer has focus trapping, ESC key handling, and backdrop click to close.
                  </p>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    style={{
                      marginTop: "16px",
                      padding: "0.65rem 1rem",
                      borderRadius: "999px",
                      background: "var(--accent)",
                      border: "none",
                      color: "var(--bg)",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              </Drawer>
            </div>

            {/* Toast Demo */}
            <div>
              <h3 style={{ fontSize: "16px", margin: "0 0 12px" }}>Toast Center</h3>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <button
                  onClick={() => showToast("Success! Operation completed.", "success")}
                  style={{
                    padding: "0.65rem 1rem",
                    borderRadius: "999px",
                    background: "#84cc16",
                    border: "none",
                    color: "var(--bg)",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Success Toast
                </button>
                <button
                  onClick={() => showToast("Error! Something went wrong.", "error")}
                  style={{
                    padding: "0.65rem 1rem",
                    borderRadius: "999px",
                    background: "#ef4444",
                    border: "none",
                    color: "white",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Error Toast
                </button>
                <button
                  onClick={() => showToast("Warning! Please check your input.", "warning")}
                  style={{
                    padding: "0.65rem 1rem",
                    borderRadius: "999px",
                    background: "#ffd60a",
                    border: "none",
                    color: "var(--bg)",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Warning Toast
                </button>
                <button
                  onClick={() => showToast("Information: Press Cmd/Ctrl+K for command palette", "info")}
                  style={{
                    padding: "0.65rem 1rem",
                    borderRadius: "999px",
                    background: "var(--accent)",
                    border: "none",
                    color: "var(--bg)",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Info Toast
                </button>
              </div>
            </div>
          </div>
        </Panel>
      </section>

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
        
        .btn-press-demo:active {
          transform: scale(0.95);
        }
        
        .btn-press-demo:hover {
          filter: brightness(1.1);
        }
        
        .btn-ghost-demo:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
        }
        
        .card:hover {
          background: color-mix(in oklab, var(--surface) 95%, var(--accent)) !important;
        }
        
        @media (max-width: 1000px) {
          .header-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        [data-motion="reduced"] .btn-press-demo,
        [data-motion="reduced"] .btn-ghost-demo,
        [data-motion="reduced"] .btn-primary {
          transition: none !important;
          transform: none !important;
        }
      `}</style>
    </main>
  );
}
