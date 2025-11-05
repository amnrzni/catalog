"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import Pill from "./Pill";

export default function A11yControls() {
  const { focus, setFocus, motion, setMotion, contrast, setContrast } = useTheme();

  return (
    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
      {/* Focus Style */}
      <Pill
        active={focus === "ring"}
        onClick={() => setFocus("ring")}
      >
        Focus: Ring
      </Pill>
      <Pill
        active={focus === "outline"}
        onClick={() => setFocus("outline")}
      >
        Focus: Outline
      </Pill>

      {/* Motion */}
      <Pill
        active={motion === "base"}
        onClick={() => setMotion("base")}
      >
        Motion: Base
      </Pill>
      <Pill
        active={motion === "reduced"}
        onClick={() => setMotion("reduced")}
      >
        Motion: Reduced
      </Pill>

      {/* Contrast */}
      <Pill
        active={contrast === "normal"}
        onClick={() => setContrast("normal")}
      >
        Contrast: Normal
      </Pill>
      <Pill
        active={contrast === "high"}
        onClick={() => setContrast("high")}
      >
        Contrast: High
      </Pill>
    </div>
  );
}
