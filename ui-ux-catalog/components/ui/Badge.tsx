'use client';

import React from 'react';
import clsx from 'clsx';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  onClick?: () => void;
}

export default function Badge({ children, variant = 'default', className, onClick }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

  const variantStyles = {
    primary: 'bg-primary/20 text-primary-light border border-primary/30',
    success: 'bg-accent-green/20 text-accent-green border border-accent-green/30',
    warning: 'bg-accent-orange/20 text-accent-orange border border-accent-orange/30',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30',
    info: 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30',
    default: 'bg-background-tertiary text-text-secondary border border-text-quaternary/30',
  };

  const Component = onClick ? 'button' : 'span';

  return (
    <Component 
      className={clsx(baseStyles, variantStyles[variant], onClick && 'cursor-pointer hover:opacity-80 transition-opacity', className)}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
