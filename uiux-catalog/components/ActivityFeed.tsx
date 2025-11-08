/**
 * Activity Feed Components - Theme-Agnostic
 */

'use client';

import React from 'react';
import { Card } from './Card';
import { ActivityItem as ActivityItemType } from '@/lib/sample-data';

export interface ActivityFeedProps {
  items: ActivityItemType[];
  title?: string;
}

export function ActivityFeed({ items, title = 'Recent Activity' }: ActivityFeedProps) {
  return (
    <Card elevation={2}>
      <h3
        style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-bold)',
          marginBottom: 'var(--space-lg)',
        }}
      >
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {items.map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </div>
    </Card>
  );
}

export function ActivityItem({ type, title, description, time, icon }: ActivityItemType) {
  const typeColors: Record<string, string> = {
    success: 'var(--color-accent-success)',
    primary: 'var(--color-accent-primary)',
    secondary: 'var(--color-text-secondary)',
    warning: 'var(--color-accent-warning)',
    danger: 'var(--color-accent-danger)',
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-md)',
        padding: 'var(--space-sm)',
        borderRadius: 'var(--radius-md)',
        transition: 'background var(--transition-fast)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--color-bg-surface-variant)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
      }}
    >
      {icon && (
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: typeColors[type] + '20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'var(--font-size-lg)',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-primary)',
            marginBottom: description ? 'var(--space-xs)' : '0',
          }}
        >
          {title}
        </p>
        {description && (
          <p
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {description}
          </p>
        )}
      </div>
      <div
        style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-text-tertiary)',
          flexShrink: 0,
        }}
      >
        {time}
      </div>
    </div>
  );
}
