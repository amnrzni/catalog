"use client";

import { useState } from "react";

interface CopyButtonProps {
  value: string;
  label?: string;
}

export default function CopyButton({ value, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        marginLeft: "auto",
        border: "1px solid var(--border)",
        background: "transparent",
        borderRadius: "999px",
        color: "var(--muted)",
        padding: "0.35rem 0.6rem",
        fontWeight: 600,
        fontSize: "13px",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      className="copy-button"
      aria-label={`Copy ${value}`}
    >
      {copied ? "Copied!" : label}

      <style jsx>{`
        .copy-button:hover {
          background: rgba(255, 255, 255, 0.06);
          color: var(--text);
        }
      `}</style>
    </button>
  );
}
