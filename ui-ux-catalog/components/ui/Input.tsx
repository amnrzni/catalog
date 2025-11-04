'use client';

import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Input({
  label,
  error,
  icon,
  fullWidth = false,
  className,
  ...props
}: InputProps) {
  return (
    <div className={clsx('flex flex-col gap-2', fullWidth && 'w-full')}>
      {label && (
        <label className="text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
            {icon}
          </div>
        )}
        <input
          className={clsx(
            'w-full px-4 py-2.5 rounded-lg',
            'bg-background-secondary/50 backdrop-blur-sm',
            'border border-text-quaternary/30',
            'text-text-primary placeholder:text-text-quaternary',
            'transition-all duration-300',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
            icon && 'pl-10',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
