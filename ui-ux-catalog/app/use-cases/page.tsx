"use client";

import { useState } from "react";
import Panel from "@/components/ui/Panel";

export default function UseCasesPage() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleDismiss = () => {
    setBannerVisible(false);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleRestore = () => {
    setBannerVisible(true);
    setToastVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage("✓ Account created successfully!");
  };

  return (
    <main className="container" style={{ paddingBottom: "80px" }}>
      <h1
        style={{
          margin: "34px 0 10px",
          fontWeight: 800,
          fontSize: "clamp(36px, 5.6vw, 54px)",
        }}
      >
        Use cases
      </h1>
      <p className="lead" style={{ color: "var(--muted)", margin: "0 0 20px" }}>
        Concrete scenarios that combine components, patterns, motion, and tokens.
      </p>

      {/* Announcements */}
      <section
        id="announcements"
        style={{
          padding: "36px 0",
          borderTop: "1px solid color-mix(in oklab, var(--border), transparent 30%)",
        }}
      >
        <h2 style={{ margin: "0 0 12px" }}>Announcements</h2>
        <Panel>
          {bannerVisible && (
            <div
              id="banner"
              style={{
                border: "1px dashed var(--border)",
                borderRadius: "12px",
                padding: "12px",
                background: "rgba(255, 255, 255, 0.03)",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div>
                <strong>New components!</strong> Data Table, Drawer, Spotlight.
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <a
                  href="/library"
                  className="btn"
                  style={{
                    padding: "0.6rem 0.9rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    background: "transparent",
                    color: "var(--text)",
                  }}
                >
                  View
                </a>
                <button
                  onClick={handleDismiss}
                  className="btn"
                  style={{
                    padding: "0.6rem 0.9rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    background: "transparent",
                    color: "var(--text)",
                    cursor: "pointer",
                  }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}
          <div
            id="toast"
            style={{
              opacity: toastVisible ? 1 : 0,
              transform: toastVisible ? "none" : "translateY(6px)",
              transition: "0.25s ease",
              marginTop: "10px",
              color: "var(--muted)",
              fontSize: "13px",
            }}
          >
            Dismissed. You can restore it.
          </div>
          <button
            onClick={handleRestore}
            className="btn"
            style={{
              marginTop: "8px",
              padding: "0.6rem 0.9rem",
              borderRadius: "999px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              background: "transparent",
              color: "var(--text)",
              cursor: "pointer",
            }}
          >
            Restore banner
          </button>
        </Panel>
      </section>

      {/* Forms */}
      <section id="forms" style={{ padding: "36px 0" }}>
        <h2 style={{ margin: "0 0 12px" }}>Forms</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
          }}
        >
          <Panel>
            <h3 style={{ margin: "0 0 10px" }}>Sign up</h3>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
              <input
                id="email"
                placeholder="Email"
                type="email"
                required
                style={{
                  width: "100%",
                  padding: "0.7rem 0.9rem",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  background: "#0f1117",
                  color: "var(--text)",
                }}
              />
              <div style={{ position: "relative" }}>
                <input
                  id="password"
                  placeholder="Password"
                  type={passwordVisible ? "text" : "password"}
                  required
                  style={{
                    width: "100%",
                    padding: "0.7rem 0.9rem",
                    borderRadius: "12px",
                    border: "1px solid var(--border)",
                    background: "#0f1117",
                    color: "var(--text)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="btn"
                  style={{
                    position: "absolute",
                    right: "6px",
                    top: "6px",
                    padding: "0.4rem 0.6rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    background: "transparent",
                    color: "var(--text)",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: "0.6rem 0.9rem",
                  borderRadius: "999px",
                  background: "var(--accent)",
                  border: "none",
                  color: "var(--bg)",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Create account
              </button>
              {formMessage && (
                <div style={{ color: "var(--muted)", fontSize: "13px" }}>{formMessage}</div>
              )}
            </form>
          </Panel>
          <Panel>
            <h3 style={{ margin: "0 0 10px" }}>Progress save</h3>
            <p style={{ color: "var(--muted)", fontSize: "13px" }}>No changes.</p>
          </Panel>
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" style={{ padding: "36px 0" }}>
        <h2 style={{ margin: "0 0 12px" }}>Dashboard</h2>
        <Panel>
          <div
            className="kpis"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              { label: "Revenue", value: "$32k" },
              { label: "Users", value: "8.1k" },
              { label: "Conversion", value: "3.2%" },
              { label: "NPS", value: "62" },
            ].map((kpi, i) => (
              <div
                key={i}
                className="kpi"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "12px",
                }}
              >
                <div style={{ color: "var(--muted)", fontSize: "13px" }}>{kpi.label}</div>
                <div style={{ fontWeight: 800, fontSize: "22px" }}>{kpi.value}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "20px" }}>
            <h4 style={{ margin: "0 0 8px" }}>Recent activity</h4>
            <div
              className="code"
              style={{
                fontFamily: "ui-monospace, Menlo, Consolas, monospace",
                background: "#0f1015",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "12px",
                fontSize: "13px",
                color: "var(--muted)",
              }}
            >
              <div>12:45 — User signed up</div>
              <div>12:40 — Export completed</div>
              <div>12:35 — Settings updated</div>
            </div>
          </div>
        </Panel>
      </section>

      {/* Docs */}
      <section id="docs" style={{ padding: "36px 0" }}>
        <h2 style={{ margin: "0 0 12px" }}>Docs</h2>
        <div className="grid" style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "18px" }}>
          <Panel>
            <h3 style={{ margin: "0 0 10px" }}>Getting started</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Install the package and import components. Each component is tree-shakeable and comes with TypeScript
              definitions.
            </p>
            <div
              className="code"
              style={{
                fontFamily: "ui-monospace, Menlo, Consolas, monospace",
                background: "#0f1015",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "12px",
                fontSize: "13px",
                marginTop: "12px",
              }}
            >
              npm install @catalog/ui
            </div>
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
              }}
            >
              <strong>💡 Tip:</strong> Use the accent switcher to preview different color schemes.
            </div>
          </Panel>
          <div style={{ position: "sticky", top: "70px" }}>
            <Panel>
              <h4 style={{ margin: "0 0 8px", fontSize: "14px" }}>On this page</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Installation", "Usage", "Examples", "API"].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "4px 0",
                      fontSize: "13px",
                      color: i === 0 ? "var(--accent)" : "var(--muted)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </section>

      <style jsx>{`
        .btn:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        .btn-primary:hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }
        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
