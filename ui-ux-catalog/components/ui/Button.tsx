'use client';

import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
export type ButtonSize = 'small' | 'default' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  loading = false,
  icon,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed shadow-lg';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary via-primary to-primary-dark text-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.6)] hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100',
    secondary: 'bg-background-secondary/80 backdrop-blur-sm text-text-primary border-2 border-primary/30 hover:border-primary hover:bg-background-secondary hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:-translate-y-1',
    ghost: 'text-text-primary hover:bg-background-secondary/50 hover:text-primary shadow-none',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-[0_8px_30px_rgba(239,68,68,0.6)] hover:-translate-y-1',
    success: 'bg-gradient-to-r from-accent-green to-emerald-600 text-white hover:shadow-[0_8px_30px_rgba(16,185,129,0.6)] hover:-translate-y-1',
  };

  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    default: 'px-7 py-3 text-base',
    large: 'px-10 py-4 text-lg',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        loading && 'cursor-wait',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
}
