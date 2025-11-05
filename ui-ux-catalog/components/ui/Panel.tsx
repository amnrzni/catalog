import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  className?: string;
}

export default function Panel({ children, className = "" }: PanelProps) {
  return (
    <div 
      className={`panel-surface ${className}`}
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0) 40%)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "22px",
        boxShadow: "var(--shadow-1)",
      }}
    >
      {children}
    </div>
  );
}
