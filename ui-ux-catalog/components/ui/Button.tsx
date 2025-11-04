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
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-background-secondary text-text-primary border border-text-quaternary hover:border-primary hover:shadow-md hover:-translate-y-0.5',
    ghost: 'text-text-primary hover:bg-background-secondary hover:text-primary',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:-translate-y-0.5',
    success: 'bg-gradient-to-r from-accent-green to-emerald-600 text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:-translate-y-0.5',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    default: 'px-6 py-2.5 text-base',
    large: 'px-8 py-3.5 text-lg',
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
