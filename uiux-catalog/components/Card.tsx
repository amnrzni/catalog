/**
 * Card/Panel Component - Theme-Agnostic
 * Flexible container using CSS variables
 */

'use client';

import React, { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 1 | 2 | 3 | 4;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  asGlass?: boolean;
}

export function Card({
  elevation = 1,
  padding = 'md',
  radius = 'lg',
  hover = false,
  asGlass = false,
  children,
  style = {},
  className = '',
  ...props
}: CardProps) {
  const paddingMap = {
    none: '0',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
  };

  const radiusMap = {
    none: 'var(--radius-none)',
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
  };

  const elevationMap = {
    1: 'var(--shadow-elevation1)',
    2: 'var(--shadow-elevation2)',
    3: 'var(--shadow-elevation3)',
    4: 'var(--shadow-elevation4)',
  };

  const cardStyles: React.CSSProperties = {
    background: 'var(--color-bg-surface)',
    padding: paddingMap[padding],
    borderRadius: radiusMap[radius],
    boxShadow: elevationMap[elevation],
    border: '1px solid var(--color-border)',
    transition: 'all var(--transition-base) var(--transition-easing-standard)',
    ...style,
  };

  // Apply glassmorphism effect if requested
  if (asGlass) {
    cardStyles.backdropFilter = 'var(--effect-backdrop-filter, blur(40px))';
    cardStyles.WebkitBackdropFilter = 'var(--effect-backdrop-filter, blur(40px))';
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover) {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = elevationMap[Math.min(elevation + 1, 4) as 1 | 2 | 3 | 4];
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hover) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = elevationMap[elevation];
    }
  };

  return (
    <div
      style={cardStyles}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function CardHeader({
  title,
  subtitle,
  action,
  children,
  style = {},
  ...props
}: CardHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 'var(--space-md)',
        ...style,
      }}
      {...props}
    >
      <div>
        {title && (
          <h3
            style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-text-primary)',
              marginBottom: subtitle ? 'var(--space-xs)' : '0',
            }}
          >
            {title}
          </h3>
        )}
        {subtitle && (
          <p
            style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)',
            }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ children, style = {}, ...props }: CardContentProps) {
  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ children, style = {}, ...props }: CardFooterProps) {
  return (
    <div
      style={{
        marginTop: 'var(--space-md)',
        paddingTop: 'var(--space-md)',
        borderTop: '1px solid var(--color-border)',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
