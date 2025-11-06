"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

interface ChartData {
  month: string;
  value: number;
}

interface RevenueChartProps {
  data: ChartData[];
}

// Dynamically import the chart component with SSR disabled
export const RevenueChart: ComponentType<RevenueChartProps> = dynamic(
  () => import("./RevenueChartInner"),
  { 
    ssr: false,
    loading: () => (
      <div style={{ 
        width: "100%", 
        height: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        color: "var(--muted)" 
      }}>
        Loading chart...
      </div>
    ),
  }
);


