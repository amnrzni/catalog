"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info", duration: number = 3000) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: Toast = { id, message, type, duration };
    
    setToasts((prev) => [...prev, newToast]);
    
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="toast-container"
        style={{
          position: "fixed",
          bottom: "var(--space-6)",
          right: "var(--space-6)",
          zIndex: "var(--z-toast)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)",
          pointerEvents: "none",
        }}
      >
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {

  const getIcon = () => {
    switch (toast.type) {
      case "success": return "✓";
      case "error": return "✕";
      case "warning": return "⚠";
      default: return "ℹ";
    }
  };

  const getColor = () => {
    switch (toast.type) {
      case "success": return "#84cc16";
      case "error": return "#ef4444";
      case "warning": return "#ffd60a";
      default: return "var(--accent)";
    }
  };

  return (
    <div
      className="toast"
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-3) var(--space-4)",
        boxShadow: "var(--shadow-2)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        minWidth: "300px",
        maxWidth: "400px",
        pointerEvents: "auto",
        animation: "slideIn 0.2s var(--ease-out)",
      }}
      role="alert"
      aria-live="polite"
    >
      <span
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: getColor(),
          color: "var(--bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {getIcon()}
      </span>
      <span style={{ flex: 1, fontSize: "14px", lineHeight: 1.4 }}>{toast.message}</span>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "var(--muted)",
          cursor: "pointer",
          padding: "4px",
          fontSize: "16px",
          lineHeight: 1,
          transition: "color 0.15s ease",
        }}
        aria-label="Close notification"
      >
        ✕
      </button>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .toast button:hover {
          color: var(--text);
        }

        @media (max-width: 640px) {
          .toast {
            min-width: auto;
            max-width: calc(100vw - 32px);
          }
        }

        [data-motion="reduced"] .toast {
          animation: none;
        }
      `}</style>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
