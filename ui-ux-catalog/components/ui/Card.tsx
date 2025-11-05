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
  const baseStyles = 'rounded-3xl transition-all duration-500 ease-out';

  const glassStyles = glassmorphism
    ? 'glass shadow-xl'
    : 'bg-background-secondary shadow-lg';

  const hoverStyles = hover
    ? 'hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(139,92,246,0.3)] cursor-pointer hover:border-primary/30 hover:scale-[1.02]'
    : '';

  const paddingStyles = {
    none: 'p-0',
    small: 'p-5',
    default: 'p-7',
    large: 'p-10',
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
