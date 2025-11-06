"use client";

import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Pill({ children, active = false, onClick, className = "" }: PillProps) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    padding: "0.45rem 0.7rem",
    borderRadius: "999px",
    border: "1px solid var(--border)",
    background: active ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.04)",
    color: active ? "var(--text)" : "var(--muted)",
    fontSize: "13px",
    cursor: onClick ? "pointer" : "default",
    transition: "all 0.2s ease",
  };

  return (
    <span 
      style={baseStyle} 
      onClick={onClick}
      className={className}
      role={onClick ? "button" : undefined}
      aria-pressed={onClick ? active : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === "Enter") {
          onClick();
        } else if (e.key === " ") {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </span>
  );
}
