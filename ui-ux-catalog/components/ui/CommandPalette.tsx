"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface CommandItem {
  id: string;
  label: string;
  path: string;
  category?: string;
}

const COMMAND_ITEMS: CommandItem[] = [
  { id: "home", label: "Home", path: "/", category: "Pages" },
  { id: "library", label: "Components", path: "/library", category: "Pages" },
  { id: "library-nav", label: "Components: Navigation & Input", path: "/library#navigation", category: "Library" },
  { id: "library-forms", label: "Components: Forms & Inputs", path: "/library#forms", category: "Library" },
  { id: "library-data", label: "Components: Data display & tables", path: "/library#data", category: "Library" },
  { id: "library-overlays", label: "Components: Overlays & feedback", path: "/library#overlays", category: "Library" },
  { id: "library-rich", label: "Components: Rich content", path: "/library#rich", category: "Library" },
  { id: "patterns", label: "Patterns (All)", path: "/patterns", category: "Pages" },
  { id: "animations", label: "Animations", path: "/animations", category: "Pages" },
  { id: "use-cases", label: "Use cases", path: "/use-cases", category: "Pages" },
  { id: "use-cases-announcements", label: "Use cases: Announcements", path: "/use-cases#announcements", category: "Use Cases" },
  { id: "use-cases-forms", label: "Use cases: Forms", path: "/use-cases#forms", category: "Use Cases" },
  { id: "use-cases-dashboard", label: "Use cases: Dashboard", path: "/use-cases#dashboard", category: "Use Cases" },
  { id: "use-cases-docs", label: "Use cases: Docs", path: "/use-cases#docs", category: "Use Cases" },
  { id: "tokens", label: "Tokens", path: "/tokens", category: "Pages" },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const filteredItems = search
    ? COMMAND_ITEMS.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      )
    : COMMAND_ITEMS;

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => {
        setSearch("");
        setSelectedIndex(0);
      }, 0);
      document.body.style.overflow = "";
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigate = React.useCallback((path: string) => {
    onClose();
    
    // Handle anchor links
    if (path.includes("#")) {
      const [route, anchor] = path.split("#");
      if (route && route !== window.location.pathname) {
        router.push(path);
      } else {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Set focus on the heading for accessibility
          const heading = element.querySelector("h1, h2, h3, h4, h5, h6") as HTMLElement;
          if (heading) {
            heading.tabIndex = -1;
            heading.focus();
          }
        }
      }
    } else {
      router.push(path);
    }
  }, [onClose, router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleNavigate(filteredItems[selectedIndex].path);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, handleNavigate]);

  // Reset selected index when search changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedIndex(0);
    }, 0);
    return () => clearTimeout(timer);
  }, [search]);

  if (!isOpen) return null;

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(6px)",
          zIndex: "var(--z-modal)",
          animation: "fadeIn 0.15s var(--ease-out)",
        }}
        aria-hidden="true"
      />

      {/* Command Palette Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        style={{
          position: "fixed",
          top: "15vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(600px, 90vw)",
          maxHeight: "70vh",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-3)",
          zIndex: "calc(var(--z-modal) + 1)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          animation: "scaleIn 0.2s var(--ease-out)",
        }}
      >
        {/* Search Input */}
        <div style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
            <svg width="20" height="20" fill="none" stroke="var(--muted)" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search pages..."
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--text)",
                fontSize: "16px",
                padding: 0,
              }}
            />
            <kbd
              style={{
                padding: "2px 8px",
                borderRadius: "4px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid var(--border)",
                fontSize: "12px",
                color: "var(--muted)",
              }}
            >
              ESC
            </kbd>
          </div>
        </div>

        {/* Results */}
        <div style={{ overflowY: "auto", padding: "var(--space-2)" }}>
          {filteredItems.length === 0 ? (
            <div
              style={{
                padding: "var(--space-8)",
                textAlign: "center",
                color: "var(--muted)",
              }}
            >
              No results found
            </div>
          ) : (
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} style={{ marginBottom: "var(--space-3)" }}>
                <div
                  style={{
                    padding: "var(--space-2) var(--space-3)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {category}
                </div>
                {items.map((item) => {
                  const globalIndex = filteredItems.indexOf(item);
                  const isSelected = globalIndex === selectedIndex;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigate(item.path)}
                      onMouseEnter={() => setSelectedIndex(globalIndex)}
                      style={{
                        width: "100%",
                        padding: "var(--space-3)",
                        borderRadius: "var(--radius-sm)",
                        background: isSelected ? "var(--accent)" : "transparent",
                        color: isSelected ? "var(--bg)" : "var(--text)",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: isSelected ? 600 : 400,
                        transition: "all 0.1s ease",
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div
          style={{
            padding: "var(--space-3) var(--space-4)",
            borderTop: "1px solid var(--border)",
            display: "flex",
            gap: "var(--space-4)",
            fontSize: "12px",
            color: "var(--muted)",
          }}
        >
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>ESC Close</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translateX(-50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        [data-motion="reduced"] div {
          animation: none !important;
        }
      `}</style>
    </>
  );
}
