"use client";

import { useEffect, useRef, ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: "left" | "right";
}

export default function Drawer({ isOpen, onClose, children, side = "right" }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Lock body scroll
      document.body.style.overflow = "hidden";
      
      // Focus the drawer
      setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 100);
    } else {
      // Unlock body scroll
      document.body.style.overflow = "";
      
      // Return focus to previous element
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !drawerRef.current) return;

      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="drawer-backdrop"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(4px)",
          zIndex: "var(--z-overlay)",
          animation: "fadeIn 0.2s var(--ease-out)",
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        className="drawer"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          [side]: 0,
          width: "min(400px, 85vw)",
          background: "var(--surface)",
          borderLeft: side === "right" ? "1px solid var(--border)" : "none",
          borderRight: side === "left" ? "1px solid var(--border)" : "none",
          zIndex: "var(--z-modal)",
          boxShadow: "var(--shadow-3)",
          display: "flex",
          flexDirection: "column",
          animation: `slideIn${side === "right" ? "Right" : "Left"} 0.25s var(--ease-out)`,
        }}
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        [data-motion="reduced"] .drawer-backdrop,
        [data-motion="reduced"] .drawer {
          animation: none;
        }
      `}</style>
    </>
  );
}
