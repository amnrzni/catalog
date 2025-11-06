"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  month: string;
  value: number;
}

interface RevenueChartProps {
  data: ChartData[];
}

export default function RevenueChartInner({ data }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis 
          dataKey="month" 
          stroke="var(--muted)"
          style={{ fontSize: "12px" }}
        />
        <YAxis 
          stroke="var(--muted)"
          style={{ fontSize: "12px" }}
        />
        <Tooltip 
          contentStyle={{
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            color: "var(--text)",
          }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="var(--accent)" 
          strokeWidth={2}
          dot={{ fill: "var(--accent)", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
