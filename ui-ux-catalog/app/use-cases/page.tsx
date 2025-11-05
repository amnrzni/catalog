"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Panel from "@/components/ui/Panel";
import CopyButton from "@/components/ui/CopyButton";
import { useToast } from "@/components/ui/ToastCenter";

// Dynamic import of Recharts with SSR disabled
const LineChart = dynamic(() => import("recharts").then((mod) => mod.LineChart), { ssr: false });
const Line = dynamic(() => import("recharts").then((mod) => mod.Line), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then((mod) => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), { ssr: false });

const STORAGE_KEY = "catalog.announceDismissed";

export default function UseCasesPage() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formSaved, setFormSaved] = useState("No changes");
  const [codeLanguage, setCodeLanguage] = useState<"js" | "ts">("js");
  const [activeSection, setActiveSection] = useState("");
  const { showToast } = useToast();

  // Load banner state from localStorage
  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed === "true") {
      setBannerVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setBannerVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
    showToast("Banner dismissed. You can restore it below.", "info");
  };

  const handleRestore = () => {
    setBannerVisible(true);
    localStorage.removeItem(STORAGE_KEY);
    showToast("Banner restored!", "success");
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (emailError || !email || !password) {
      showToast("Please fix the errors before submitting", "error");
      return;
    }

    setFormSaved("Saved at " + new Date().toLocaleTimeString());
    showToast("Account created successfully!", "success");
  };

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -50% 0px" }
    );

    const sections = ["announcements", "forms", "dashboard", "docs"].map((id) =>
      document.getElementById(id)
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Mock chart data
  const chartData = [
    { month: "Jan", value: 4000 },
    { month: "Feb", value: 3000 },
    { month: "Mar", value: 5000 },
    { month: "Apr", value: 4500 },
    { month: "May", value: 6000 },
    { month: "Jun", value: 5500 },
  ];

  // KPI count-up effect
  const KPICard = ({ label, targetValue }: { label: string; targetValue: number }) => {
    const [value, setValue] = useState(0);
    const motionReduced = typeof document !== "undefined" && 
      document.body.getAttribute("data-motion") === "reduced";

    useEffect(() => {
      if (motionReduced) {
        setValue(targetValue);
        return;
      }

      const duration = 1000;
      const steps = 30;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setValue(targetValue);
          clearInterval(timer);
        } else {
          setValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [targetValue, motionReduced]);

    return (
      <div
        className="kpi"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "12px",
        }}
      >
        <div style={{ color: "var(--muted)", fontSize: "13px" }}>{label}</div>
        <div style={{ fontWeight: 800, fontSize: "22px" }}>
          {label.includes("$") ? `$${(value / 1000).toFixed(1)}k` : 
           label.includes("%") ? `${value.toFixed(1)}%` : value}
        </div>
      </div>
    );
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
          {bannerVisible ? (
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
                <strong>New components!</strong> Data Table, Drawer, Spotlight, Command Palette.
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
          ) : (
            <div
              style={{
                padding: "12px",
                color: "var(--muted)",
                fontSize: "14px",
              }}
            >
              <p>Banner is dismissed. Persisted across page reloads.</p>
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
            </div>
          )}
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
              <div>
                <input
                  id="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.7rem 0.9rem",
                    borderRadius: "12px",
                    border: `1px solid ${emailError ? "#ef4444" : "var(--border)"}`,
                    background: "#0f1117",
                    color: "var(--text)",
                  }}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "email-error" : undefined}
                />
                {emailError && (
                  <div
                    id="email-error"
                    style={{
                      marginTop: "4px",
                      fontSize: "12px",
                      color: "#ef4444",
                    }}
                    role="alert"
                  >
                    {emailError}
                  </div>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <input
                  id="password"
                  placeholder="Password"
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  aria-pressed={passwordVisible}
                  aria-label={passwordVisible ? "Hide password" : "Show password"}
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
                disabled={!!emailError || !email || !password}
                style={{
                  padding: "0.6rem 0.9rem",
                  borderRadius: "999px",
                  background: "var(--accent)",
                  border: "none",
                  color: "var(--bg)",
                  cursor: "pointer",
                  fontWeight: 600,
                  opacity: (emailError || !email || !password) ? 0.5 : 1,
                }}
              >
                Create account
              </button>
            </form>
          </Panel>
          <Panel>
            <h3 style={{ margin: "0 0 10px" }}>Progress save</h3>
            <p style={{ color: "var(--muted)", fontSize: "13px" }}>{formSaved}</p>
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
              marginBottom: "20px",
            }}
          >
            <KPICard label="Revenue ($)" targetValue={32000} />
            <KPICard label="Users" targetValue={8100} />
            <KPICard label="Conversion (%)" targetValue={3.2} />
            <KPICard label="NPS" targetValue={62} />
          </div>
          
          {/* Chart */}
          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ margin: "0 0 12px" }}>Revenue Trend</h4>
            <div style={{ width: "100%", height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis 
                    dataKey="month" 
                    stroke="var(--muted)"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis 
                    stroke="var(--muted)"
                    style={{ fontSize: "12px" }}
                  />
                  <Tooltip 
                    contentStyle={{
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      color: "var(--text)",
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="var(--accent)" 
                    strokeWidth={2}
                    dot={{ fill: "var(--accent)", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
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
            
            {/* Code language switcher */}
            <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
              <button
                onClick={() => setCodeLanguage("js")}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: codeLanguage === "js" ? "var(--accent)" : "transparent",
                  color: codeLanguage === "js" ? "var(--bg)" : "var(--text)",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                JavaScript
              </button>
              <button
                onClick={() => setCodeLanguage("ts")}
                style={{
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: codeLanguage === "ts" ? "var(--accent)" : "transparent",
                  color: codeLanguage === "ts" ? "var(--bg)" : "var(--text)",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                TypeScript
              </button>
            </div>

            <div style={{ position: "relative", marginTop: "12px" }}>
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  zIndex: 1,
                }}
              >
                <CopyButton
                  value={
                    codeLanguage === "js"
                      ? "npm install @catalog/ui"
                      : "npm install @catalog/ui\n// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"types\": [\"@catalog/ui\"]\n  }\n}"
                  }
                />
              </div>
              <div
                className="code"
                style={{
                  fontFamily: "ui-monospace, Menlo, Consolas, monospace",
                  background: "#0f1015",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "12px",
                  fontSize: "13px",
                  whiteSpace: "pre-wrap",
                }}
              >
                {codeLanguage === "js"
                  ? "npm install @catalog/ui"
                  : "npm install @catalog/ui\n// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"types\": [\"@catalog/ui\"]\n  }\n}"}
              </div>
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
                {[
                  { id: "announcements", label: "Announcements" },
                  { id: "forms", label: "Forms" },
                  { id: "dashboard", label: "Dashboard" },
                  { id: "docs", label: "Docs" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      style={{
                        display: "block",
                        padding: "4px 0",
                        fontSize: "13px",
                        color: activeSection === item.id ? "var(--accent)" : "var(--muted)",
                        textDecoration: "none",
                        fontWeight: activeSection === item.id ? 600 : 400,
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                          const heading = element.querySelector("h2") as HTMLElement;
                          if (heading) {
                            heading.tabIndex = -1;
                            heading.focus();
                          }
                        }
                      }}
                    >
                      {item.label}
                    </a>
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
