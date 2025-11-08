/**
 * StatCard Component - Theme-Agnostic
 * Displays metrics with trend indicators
 */

'use client';

import React from 'react';
import { Card } from './Card';

export interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}

export function StatCard({ label, value, delta, trend = 'neutral', icon }: StatCardProps) {
  const trendColors = {
    up: 'var(--color-accent-success)',
    down: 'var(--color-accent-danger)',
    neutral: 'var(--color-text-secondary)',
  };

  const trendIcons = {
    up: '↑',
    down: '↓',
    neutral: '→',
  };

  return (
    <Card elevation={2} hover>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)',
              fontWeight: 'var(--font-weight-medium)',
              marginBottom: 'var(--space-xs)',
            }}
          >
            {label}
          </p>
          <p
            style={{
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-text-primary)',
              marginBottom: delta ? 'var(--space-xs)' : '0',
            }}
          >
            {value}
          </p>
          {delta && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: trendColors[trend],
                }}
              >
                {trendIcons[trend]} {delta}
              </span>
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                vs last period
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div
            style={{
              fontSize: 'var(--font-size-2xl)',
              opacity: 0.6,
            }}
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
