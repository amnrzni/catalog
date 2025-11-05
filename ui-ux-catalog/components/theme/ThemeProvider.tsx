"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type AccentColor = "purple" | "blue" | "teal" | "pink" | "yellow" | "orange" | "lime";
type FocusStyle = "ring" | "outline";
type MotionMode = "base" | "reduced";
type ContrastMode = "normal" | "high";

interface ThemeContextType {
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
  focus: FocusStyle;
  setFocus: (focus: FocusStyle) => void;
  motion: MotionMode;
  setMotion: (motion: MotionMode) => void;
  contrast: ContrastMode;
  setContrast: (contrast: ContrastMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ACCENT_MAP: Record<AccentColor, string> = {
  purple: "#a78bfa",
  blue: "#60a5fa",
  teal: "#22d3ee",
  pink: "#fb5fb1",
  yellow: "#ffd60a",
  orange: "#ff8c3a",
  lime: "#84cc16",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState<AccentColor>("purple");
  const [focus, setFocusState] = useState<FocusStyle>("ring");
  const [motion, setMotionState] = useState<MotionMode>("base");
  const [contrast, setContrastState] = useState<ContrastMode>("normal");
  const [mounted, setMounted] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    setMounted(true);
    
    if (typeof window === "undefined") return;
    
    const savedAccent = localStorage.getItem("catalog.accent");
    const savedFocus = localStorage.getItem("catalog.focus");
    const savedMotion = localStorage.getItem("catalog.motion");
    const savedContrast = localStorage.getItem("catalog.contrast");

    if (savedAccent && savedAccent in ACCENT_MAP) {
      setAccentState(savedAccent as AccentColor);
    }
    if (savedFocus === "ring" || savedFocus === "outline") {
      setFocusState(savedFocus);
    }
    if (savedMotion === "base" || savedMotion === "reduced") {
      setMotionState(savedMotion);
    }
    if (savedContrast === "normal" || savedContrast === "high") {
      setContrastState(savedContrast);
    }

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMotionState("reduced");
    }
  }, []);

  // Apply accent color to CSS variable
  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty("--accent", ACCENT_MAP[accent]);
    }
  }, [accent, mounted]);

  // Apply data attributes to body
  useEffect(() => {
    if (mounted) {
      document.body.setAttribute("data-focus", focus);
      document.body.setAttribute("data-motion", motion);
      document.body.setAttribute("data-contrast", contrast);
    }
  }, [focus, motion, contrast, mounted]);

  const setAccent = (newAccent: AccentColor) => {
    setAccentState(newAccent);
    localStorage.setItem("catalog.accent", newAccent);
  };

  const setFocus = (newFocus: FocusStyle) => {
    setFocusState(newFocus);
    localStorage.setItem("catalog.focus", newFocus);
  };

  const setMotion = (newMotion: MotionMode) => {
    setMotionState(newMotion);
    localStorage.setItem("catalog.motion", newMotion);
  };

  const setContrast = (newContrast: ContrastMode) => {
    setContrastState(newContrast);
    localStorage.setItem("catalog.contrast", newContrast);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider
      value={{
        accent,
        setAccent,
        focus,
        setFocus,
        motion,
        setMotion,
        contrast,
        setContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values if not in ThemeProvider (e.g., during SSR)
    return {
      accent: "purple" as const,
      setAccent: () => {},
      focus: "ring" as const,
      setFocus: () => {},
      motion: "base" as const,
      setMotion: () => {},
      contrast: "normal" as const,
      setContrast: () => {},
    };
  }
  return context;
}
