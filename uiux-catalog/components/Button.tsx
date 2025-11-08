/**
 * Button Component - Theme-Agnostic
 * Uses CSS variables for complete theme flexibility
 */

'use client';

import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  disabled,
  className = '',
  style = {},
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'inherit',
    fontWeight: 'var(--font-weight-semibold)',
    borderRadius: 'var(--radius-md)',
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    transition: 'all var(--transition-base) var(--transition-easing-standard)',
    border: '2px solid transparent',
    opacity: disabled || isLoading ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    position: 'relative',
    ...style,
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: 'var(--space-sm) var(--space-md)',
      fontSize: 'var(--font-size-sm)',
      minHeight: '36px',
    },
    md: {
      padding: 'var(--space-sm) var(--space-lg)',
      fontSize: 'var(--font-size-base)',
      minHeight: '44px',
    },
    lg: {
      padding: 'var(--space-md) var(--space-xl)',
      fontSize: 'var(--font-size-lg)',
      minHeight: '52px',
    },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--color-accent-primary)',
      color: '#FFFFFF',
      boxShadow: 'var(--shadow-elevation2)',
    },
    secondary: {
      background: 'var(--color-bg-surface)',
      color: 'var(--color-text-primary)',
      boxShadow: 'var(--shadow-elevation1)',
      border: '2px solid var(--color-border)',
    },
    outlined: {
      background: 'transparent',
      color: 'var(--color-accent-primary)',
      border: '2px solid var(--color-accent-primary)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-primary)',
      boxShadow: 'none',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;
    e.currentTarget.style.transform = 'translateY(-2px)';
    if (variant === 'primary') {
      e.currentTarget.style.boxShadow = 'var(--shadow-elevation3)';
      e.currentTarget.style.background = 'var(--color-accent-primary-hover)';
    } else if (variant === 'secondary' || variant === 'outlined') {
      e.currentTarget.style.boxShadow = 'var(--shadow-elevation2)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = variantStyles[variant].boxShadow || 'none';
    e.currentTarget.style.background = variantStyles[variant].background || 'transparent';
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;
    e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;
    e.currentTarget.style.transform = 'translateY(-2px) scale(1)';
  };

  return (
    <button
      style={combinedStyles}
      disabled={disabled || isLoading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={className}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span
          style={{
            width: '16px',
            height: '16px',
            border: '2px solid currentColor',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 0.6s linear infinite',
          }}
          aria-label="Loading"
        />
      ) : (
        <>
          {leftIcon && <span style={{ display: 'flex' }}>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span style={{ display: 'flex' }}>{rightIcon}</span>}
        </>
      )}
    </button>
  );
}

// Add keyframes for spinner
if (typeof document !== 'undefined' && !document.getElementById('button-keyframes')) {
  const style = document.createElement('style');
  style.id = 'button-keyframes';
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
