/**
 * Additional Utility Components
 */

'use client';

import React from 'react';

// Divider Component
export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

export function Divider({ orientation = 'horizontal', style = {} }: DividerProps) {
  const styles: React.CSSProperties = {
    border: 'none',
    background: 'var(--color-border)',
    ...(orientation === 'horizontal'
      ? { height: '1px', width: '100%' }
      : { width: '1px', height: '100%' }),
    ...style,
  };

  return <div style={styles} role="separator" aria-orientation={orientation} />;
}

// Chip/Badge Component
export interface ChipProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  onRemove?: () => void;
}

export function Chip({ label, variant = 'default', size = 'md', onRemove }: ChipProps) {
  const variantColors: Record<string, string> = {
    default: 'var(--color-text-secondary)',
    success: 'var(--color-accent-success)',
    warning: 'var(--color-accent-warning)',
    danger: 'var(--color-accent-danger)',
    info: 'var(--color-accent-info)',
  };

  const sizeStyles = {
    sm: { padding: 'var(--space-xs) var(--space-sm)', fontSize: 'var(--font-size-xs)' },
    md: { padding: 'var(--space-sm) var(--space-md)', fontSize: 'var(--font-size-sm)' },
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
        background: `${variantColors[variant]}15`,
        color: variantColors[variant],
        borderRadius: 'var(--radius-full)',
        fontWeight: 'var(--font-weight-medium)',
        ...sizeStyles[size],
      }}
    >
      <span>{label}</span>
      {onRemove && (
        <button
          onClick={onRemove}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            fontSize: 'var(--font-size-lg)',
            lineHeight: '1',
          }}
          aria-label={`Remove ${label}`}
        >
          ×
        </button>
      )}
    </div>
  );
}

// Avatar Component
export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Avatar({ src, alt = 'Avatar', fallback = 'U', size = 'md' }: AvatarProps) {
  const sizeMap = {
    sm: '32px',
    md: '40px',
    lg: '56px',
  };

  const fontSizeMap = {
    sm: 'var(--font-size-sm)',
    md: 'var(--font-size-base)',
    lg: 'var(--font-size-xl)',
  };

  return (
    <div
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: src ? 'transparent' : 'var(--color-accent-primary)',
        color: '#FFFFFF',
        fontSize: fontSizeMap[size],
        fontWeight: 'var(--font-weight-semibold)',
        flexShrink: 0,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span>{fallback.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}

// NotificationBadge Component
export interface NotificationBadgeProps {
  count: number;
  max?: number;
  variant?: 'primary' | 'danger';
}

export function NotificationBadge({ count, max = 99, variant = 'danger' }: NotificationBadgeProps) {
  const displayCount = count > max ? `${max}+` : count;
  const bgColor = variant === 'danger' ? 'var(--color-accent-danger)' : 'var(--color-accent-primary)';

  if (count === 0) return null;

  return (
    <div
      style={{
        minWidth: '20px',
        height: '20px',
        padding: '0 var(--space-xs)',
        background: bgColor,
        color: '#FFFFFF',
        borderRadius: 'var(--radius-full)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-bold)',
      }}
      aria-label={`${count} notifications`}
    >
      {displayCount}
    </div>
  );
}

// MiniStat Component
export interface MiniStatProps {
  label: string;
  value: string | number;
}

export function MiniStat({ label, value }: MiniStatProps) {
  return (
    <div>
      <div
        style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--color-text-tertiary)',
          marginBottom: 'var(--space-xs)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
        }}
      >
        {value}
      </div>
    </div>
  );
}
