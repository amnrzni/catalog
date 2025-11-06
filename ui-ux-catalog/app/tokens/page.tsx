"use client";

import AccentSwitcher from "@/components/ui/AccentSwitcher";
import A11yControls from "@/components/ui/A11yControls";
import CopyButton from "@/components/ui/CopyButton";

export const dynamic = "force-dynamic";

export default function TokensPage() {
  const colorTokens = [
    { name: "bg.primary", value: "#0b0c10", color: "#0b0c10" },
    { name: "bg.surface", value: "#101119", color: "#101119" },
    { name: "accent", value: "var(--accent)", color: "var(--accent)" },
    { name: "text", value: "#E6E7EC", color: "#E6E7EC" },
    { name: "muted", value: "#A1A4AD", color: "#A1A4AD" },
    { name: "border", value: "#232637", color: "#232637" },
  ];

  const spacingTokens = [
    { name: "space.1", value: "4px", width: "30%" },
    { name: "space.2", value: "8px", width: "50%" },
    { name: "space.3", value: "12px", width: "75%" },
    { name: "space.4", value: "16px", width: "100%" },
    { name: "space.6", value: "24px", width: "100%" },
    { name: "space.8", value: "32px", width: "100%" },
  ];

  const radiiTokens = [
    { name: "radius.1", value: "4px", radius: "4px" },
    { name: "radius.2", value: "10px", radius: "10px" },
    { name: "radius.3", value: "16px", radius: "16px" },
  ];

  const shadowTokens = [
    { name: "shadow.1", value: "0 8px 20px rgba(0,0,0,.35)", shadow: "0 8px 20px rgba(0,0,0,.35)" },
    { name: "shadow.2", value: "0 14px 40px rgba(0,0,0,.5)", shadow: "0 14px 40px rgba(0,0,0,.5)" },
    { name: "shadow.3", value: "inset + deep", shadow: "0 1px 0 rgba(255,255,255,.04) inset, 0 20px 60px rgba(0,0,0,.65)" },
  ];

  const borderTokens = [
    { name: "border.1", value: "1px" },
    { name: "border.2", value: "2px" },
    { name: "border.3", value: "3px" },
  ];

  const opacityTokens = [
    { name: "opacity.1", value: "0.08" },
    { name: "opacity.2", value: "0.14" },
    { name: "opacity.3", value: "0.22" },
  ];

  const zIndexTokens = [
    { name: "z.base", value: "0" },
    { name: "z.dropdown", value: "10" },
    { name: "z.sticky", value: "20" },
    { name: "z.overlay", value: "30" },
    { name: "z.modal", value: "40" },
    { name: "z.toast", value: "50" },
  ];

  const motionTokens = [
    { name: "duration.fast", value: "150ms" },
    { name: "duration.normal", value: "200ms" },
    { name: "duration.medium", value: "300ms" },
    { name: "duration.slow", value: "450ms" },
    { name: "ease.out", value: "cubic-bezier(0.22, 1, 0.36, 1)" },
    { name: "ease.in-out", value: "cubic-bezier(0.65, 0, 0.35, 1)" },
  ];

  return (
    <main className="container" style={{ paddingBottom: "80px" }}>
      <h1
        style={{
          margin: "36px 0 8px",
          fontSize: "clamp(34px, 5.4vw, 54px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        Design tokens
      </h1>
      <p className="lead" style={{ color: "var(--muted)", margin: "0 0 14px" }}>
        Expanded tokens with live accessibility presets. Switch accent, focus style, motion, and contrast to preview how
        the system adapts.
      </p>

      {/* Accent Palette */}
      <div style={{ margin: "8px 0 16px" }}>
        <AccentSwitcher />
      </div>

      {/* Accessibility Presets */}
      <div style={{ margin: "8px 0 16px" }}>
        <A11yControls />
      </div>

      {/* Colors */}
      <section style={{ padding: "24px 0" }}>
        <h2 style={{ fontSize: "20px", margin: "12px 0" }}>Colors</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {colorTokens.map((token, i) => (
            <div
              key={i}
              className="token"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
              }}
            >
              <div
                className="swatch"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: token.color,
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <strong>{token.name}</strong>
                <br />
                <small style={{ color: "var(--muted)" }}>{token.value}</small>
              </div>
              <CopyButton value={token.value} />
            </div>
          ))}
        </div>
      </section>

      {/* Spacing */}
      <section style={{ padding: "24px 0" }}>
        <h2 style={{ fontSize: "20px", margin: "12px 0" }}>Spacing</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {spacingTokens.map((token, i) => (
            <div
              key={i}
              className="token"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
              }}
            >
              <div
                className="swatch"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: `linear-gradient(90deg, var(--accent) ${token.width}, transparent 0)`,
                  backgroundSize: "100% 100%",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <strong>{token.name}</strong>
                <br />
                <small style={{ color: "var(--muted)" }}>{token.value}</small>
              </div>
              <CopyButton value={token.value} />
            </div>
          ))}
        </div>
      </section>

      {/* Radii */}
      <section style={{ padding: "24px 0" }}>
        <h2 style={{ fontSize: "20px", margin: "12px 0" }}>Radii</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {radiiTokens.map((token, i) => (
            <div
              key={i}
              className="token"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
              }}
            >
              <div
                className="swatch"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: token.radius,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "#0f1117",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <strong>{token.name}</strong>
                <br />
                <small style={{ color: "var(--muted)" }}>{token.value}</small>
              </div>
              <CopyButton value={token.value} />
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section style={{ padding: "24px 0" }}>
        <h2 style={{ fontSize: "20px", margin: "12px 0" }}>Shadows</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {shadowTokens.map((token, i) => (
            <div
              key={i}
              className="token"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
              }}
            >
              <div
                className="swatch"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "#0f1117",
                  boxShadow: token.shadow,
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <strong>{token.name}</strong>
                <br />
                <small style={{ color: "var(--muted)" }}>{token.value}</small>
              </div>
              <CopyButton value={token.value} />
            </div>
          ))}
        </div>
      </section>

      {/* Borders */}
      <section style={{ padding: "24px 0" }}>
        <h2 style={{ fontSize: "20px", margin: "12px 0" }}>Border Width</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {borderTokens.map((token, i) => (
            <div
              key={i}
              className="token"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
              }}
            >
              <div
                className="swatch"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: `${token.value} solid var(--accent)`,
                  background: "#0f1117",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <strong>{token.name}</strong>
                <br />
                <small style={{ color: "var(--muted)" }}>{token.value}</small>
              </div>
              <CopyButton value={token.value} />
            </div>
          ))}
        </div>
      </section>

      {/* Opacity */}
      <section style={{ padding: "24px 0" }}>
        <h2 style={{ fontSize: "20px", margin: "12px 0" }}>Opacity</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {opacityTokens.map((token, i) => (
            <div
              key={i}
              className="token"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
              }}
            >
              <div
                className="swatch"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "var(--accent)",
                  opacity: token.value,
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <strong>{token.name}</strong>
                <br />
                <small style={{ color: "var(--muted)" }}>{token.value}</small>
              </div>
              <CopyButton value={token.value} />
            </div>
          ))}
        </div>
      </section>

      {/* Z-index */}
      <section style={{ padding: "24px 0" }}>
        <h2 style={{ fontSize: "20px", margin: "12px 0" }}>Z-index</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {zIndexTokens.map((token, i) => (
            <div
              key={i}
              className="token"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
              }}
            >
              <div
                className="swatch"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "var(--surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {token.value}
              </div>
              <div style={{ flex: 1 }}>
                <strong>{token.name}</strong>
                <br />
                <small style={{ color: "var(--muted)" }}>{token.value}</small>
              </div>
              <CopyButton value={token.value} />
            </div>
          ))}
        </div>
      </section>

      {/* Motion */}
      <section style={{ padding: "24px 0" }}>
        <h2 style={{ fontSize: "20px", margin: "12px 0" }}>Motion</h2>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {motionTokens.map((token, i) => (
            <div
              key={i}
              className="token"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                border: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
              }}
            >
              <div
                className="swatch"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "var(--accent)",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <strong>{token.name}</strong>
                <br />
                <small style={{ color: "var(--muted)" }}>{token.value}</small>
              </div>
              <CopyButton value={token.value} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
