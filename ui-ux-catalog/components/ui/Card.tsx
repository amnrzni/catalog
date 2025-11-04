'use client';

import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
  padding?: 'none' | 'small' | 'default' | 'large';
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  hover = false,
  glassmorphism = true,
  padding = 'default',
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';

  const glassStyles = glassmorphism
    ? 'glass shadow-lg'
    : 'bg-background-secondary shadow-md';

  const hoverStyles = hover
    ? 'hover:-translate-y-2 hover:shadow-deep cursor-pointer glow-hover'
    : '';

  const paddingStyles = {
    none: 'p-0',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8',
  };

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={clsx(
        baseStyles,
        glassStyles,
        hoverStyles,
        paddingStyles[padding],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
