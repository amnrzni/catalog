"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import Pill from "./Pill";

const ACCENT_COLORS = [
  { name: "Purple", value: "purple" as const, color: "#a78bfa" },
  { name: "Blue", value: "blue" as const, color: "#60a5fa" },
  { name: "Teal", value: "teal" as const, color: "#22d3ee" },
  { name: "Pink", value: "pink" as const, color: "#fb5fb1" },
  { name: "Yellow", value: "yellow" as const, color: "#ffd60a" },
  { name: "Orange", value: "orange" as const, color: "#ff8c3a" },
  { name: "Lime", value: "lime" as const, color: "#84cc16" },
];

export default function AccentSwitcher() {
  const { accent, setAccent } = useTheme();

  return (
    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
      {ACCENT_COLORS.map((color) => (
        <Pill
          key={color.value}
          active={accent === color.value}
          onClick={() => setAccent(color.value)}
        >
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: color.color,
            }}
          />
          {color.name}
        </Pill>
      ))}
    </div>
  );
}
