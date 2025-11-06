"use client";

import { useState } from "react";
import Pill from "@/components/ui/Pill";

type AnimationCategory = "all" | "micro" | "route" | "layout" | "scroll";

export default function AnimationsPage() {
  const [activeFilter, setActiveFilter] = useState<AnimationCategory>("all");
  const [toggleState, setToggleState] = useState(false);
  const [staggerKey, setStaggerKey] = useState(0);
  const [crossfadeState, setCrossfadeState] = useState(false);
  const [layoutState, setLayoutState] = useState(false);

  const animations = [
    {
      category: "micro",
      title: "Button press",
      desc: "Downscale on active",
      demo: (
        <button
          className="press-demo"
          style={{
            padding: "0.65rem 1rem",
            borderRadius: "999px",
            background: "var(--accent)",
            color: "var(--bg)",
            border: "none",
            fontWeight: 600,
            cursor: "pointer",
            transition: "transform 0.08s ease",
          }}
        >
          Tap me
        </button>
      ),
      action: null,
    },
    {
      category: "micro",
      title: "Toggle spring",
      desc: "",
      demo: (
        <div
          className="toggle"
          style={{
            width: "46px",
            height: "28px",
            borderRadius: "999px",
            background: "#2b2e3e",
            border: "1px solid var(--border)",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => setToggleState(!toggleState)}
        >
          <div
            className="knob"
            style={{
              position: "absolute",
              inset: "3px auto 3px 3px",
              width: "20px",
              borderRadius: "999px",
              background: "var(--accent)",
              transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: toggleState ? "translateX(18px)" : "none",
            }}
          />
        </div>
      ),
      action: { label: "Toggle", onClick: () => setToggleState(!toggleState) },
    },
    {
      category: "micro",
      title: "Staggered enter",
      desc: "",
      demo: (
        <div className="stagger" style={{ display: "flex", gap: "10px" }}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={`${staggerKey}-${i}`}
              className="stagger-box"
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                background: "var(--accent)",
                animation: `staggerIn 0.4s ease-out forwards`,
                animationDelay: `${i * 0.06}s`,
              }}
            />
          ))}
        </div>
      ),
      action: { label: "Replay", onClick: () => setStaggerKey((k) => k + 1) },
    },
    {
      category: "micro",
      title: "Pulse",
      desc: "",
      demo: (
        <div
          className="pulse-demo"
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            background: "var(--accent)",
            animation: "pulse 1.1s ease-in-out infinite",
          }}
        />
      ),
      action: null,
    },
    {
      category: "micro",
      title: "Snackbar in",
      desc: "Slide & fade",
      demo: (
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            left: "14px",
            right: "14px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            animation: "fadeUp 0.45s ease-out",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "var(--accent)",
            }}
          />
          <div
            style={{
              flex: 1,
              height: "10px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.12)",
            }}
          />
        </div>
      ),
      action: null,
    },
    {
      category: "route",
      title: "Crossfade",
      desc: "",
      demo: (
        <div className="crossfade" style={{ position: "relative", width: "70%", height: "70%" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.07)",
              opacity: crossfadeState ? 0 : 1,
              transition: "opacity 0.35s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "10px",
              background: "color-mix(in oklab, var(--accent) 20%, transparent)",
              opacity: crossfadeState ? 1 : 0,
              transition: "opacity 0.35s ease",
            }}
          />
        </div>
      ),
      action: { label: "Toggle", onClick: () => setCrossfadeState(!crossfadeState) },
    },
    {
      category: "route",
      title: "Parallax hero",
      desc: "Subtle depth",
      demo: (
        <div
          className="parallax"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(600px 400px at 70% 30%, rgba(255, 255, 255, 0.06), transparent 60%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "10% 15% 20% 15%",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          />
        </div>
      ),
      action: null,
    },
    {
      category: "layout",
      title: "Layout shift",
      desc: "",
      demo: (
        <div
          className="layout"
          style={{
            display: "grid",
            gridTemplateColumns: layoutState ? "1fr 2fr" : "repeat(2, 1fr)",
            gap: "8px",
            width: "80%",
            height: "80%",
            transition: "grid-template-columns 0.35s ease",
            cursor: "pointer",
          }}
          onClick={() => setLayoutState(!layoutState)}
        >
          <div style={{ borderRadius: "10px", background: "rgba(255, 255, 255, 0.06)" }} />
          <div style={{ borderRadius: "10px", background: "rgba(255, 255, 255, 0.06)" }} />
        </div>
      ),
      action: { label: "Toggle", onClick: () => setLayoutState(!layoutState) },
    },
    {
      category: "layout",
      title: "Card hover lift",
      desc: "",
      demo: (
        <div
          className="hover-lift-demo"
          style={{
            width: "70%",
            height: "60%",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "8px",
            transition: "transform 0.18s ease, box-shadow 0.18s ease",
          }}
        >
          <div style={{ background: "rgba(255, 255, 255, 0.06)", borderRadius: "10px" }} />
          <div style={{ background: "rgba(255, 255, 255, 0.06)", borderRadius: "10px" }} />
        </div>
      ),
      action: null,
    },
    {
      category: "scroll",
      title: "Soft scroll reveal",
      desc: "Fade up on view",
      demo: (
        <div
          className="fade-up-demo"
          style={{
            width: "60%",
            height: "50%",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.06)",
            animation: "fadeUp 0.45s ease-out",
          }}
        />
      ),
      action: null,
    },
  ];

  const filteredAnimations = animations.filter(
    (anim) => activeFilter === "all" || anim.category === activeFilter
  );

  return (
    <main className="container" style={{ paddingBottom: "80px" }}>
      <h1
        style={{
          margin: "34px 0 10px",
          fontWeight: 800,
          fontSize: "clamp(36px, 5.6vw, 54px)",
        }}
      >
        Animations catalog
      </h1>
      <p className="lead" style={{ color: "var(--muted)", margin: "0 0 18px" }}>
        Micro interactions, page & route transitions, layout & reflow, and scroll‑based motion. Always tasteful and
        a11y‑aware.
      </p>

      {/* Filters */}
      <div className="filters" style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", margin: "0 0 18px" }}>
        {(["all", "micro", "route", "layout", "scroll"] as AnimationCategory[]).map((filter) => (
          <Pill key={filter} active={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
            {filter === "all"
              ? "All"
              : filter === "micro"
              ? "Micro interactions"
              : filter === "route"
              ? "Page & route"
              : filter === "layout"
              ? "Layout & reflow"
              : "Scroll‑based"}
          </Pill>
        ))}
      </div>

      {/* Animation Grid */}
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {filteredAnimations.map((anim, i) => (
          <div
            key={i}
            className="card"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "14px",
            }}
          >
            <div
              className="demo"
              style={{
                height: "160px",
                borderRadius: "12px",
                background: "#0f1117",
                display: "grid",
                placeItems: "center",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              {anim.demo}
            </div>
            <div
              className="meta"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <div>
                <strong>{anim.title}</strong>
                {anim.desc && (
                  <>
                    <br />
                    <span style={{ color: "var(--muted)", fontSize: "13px" }}>{anim.desc}</span>
                  </>
                )}
              </div>
              {anim.action && (
                <button
                  onClick={anim.action.onClick}
                  style={{
                    padding: "0.45rem 0.7rem",
                    borderRadius: "999px",
                    border: "1px solid var(--border)",
                    background: "rgba(255, 255, 255, 0.04)",
                    color: "var(--muted)",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  {anim.action.label}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes staggerIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .press-demo:active {
          transform: scale(0.96);
        }
        .hover-lift-demo:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.5);
        }

        /* Reduced motion support */
        [data-motion="reduced"] .press-demo:active,
        [data-motion="reduced"] .press-demo {
          transform: none !important;
          transition: none !important;
        }
        
        [data-motion="reduced"] .toggle .knob,
        [data-motion="reduced"] .knob {
          transition: none !important;
        }
        
        [data-motion="reduced"] .stagger-box {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        
        [data-motion="reduced"] .pulse {
          animation: none !important;
        }
        
        [data-motion="reduced"] .fade-up-demo {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        
        [data-motion="reduced"] .hover-lift-demo:hover {
          transform: none !important;
        }
        
        [data-motion="reduced"] .layout {
          transition: none !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .press-demo,
          .press-demo:active,
          .toggle .knob,
          .knob,
          .stagger-box,
          .pulse,
          .fade-up-demo,
          .hover-lift-demo,
          .layout {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
