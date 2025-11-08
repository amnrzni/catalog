/**
 * Glassmorphism Card Component
 * Location: components/glassmorphism/Card/index.tsx
 * 
 * Versatile card component with multiple variants:
 * - basic: Simple glass container
 * - stat: Statistical card with icon, value, and trend
 * - image: Card with image header
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from '@/types';
import { cn } from '@/lib/utils/cn';
import { cardHover } from '@/lib/animations/variants';
import { useAnimation } from '@/contexts/AnimationContext';

export function Card({
  variant = 'primary',
  title,
  description,
  icon,
  image,
  value,
  trend,
  trendDirection,
  children,
  className,
  onClick,
  style: _style, // Destructure but don't use - prevents conflict with motion.div
  size: _size, // Not used in Card
  disabled: _disabled, // Not used in Card
  loading: _loading, // Not used in Card
  active: _active, // Not used in Card
  animate: _animate, // Not used in Card
  animationSpeed: _animationSpeed, // Not used in Card
  ariaLabel: _ariaLabel, // Not used in Card
  ariaDescribedBy: _ariaDescribedBy, // Not used in Card
  ...props
}: CardProps) {
  const { animationEnabled } = useAnimation();

  // Determine if this is a stat card
  const isStatCard = value !== undefined;
  const hasImage = image !== undefined;

  // Trend color based on direction
  const trendColor = {
    up: 'text-accent-success',
    down: 'text-accent-danger',
    neutral: 'text-text-secondary',
  }[trendDirection || 'neutral'];

  return (
    <motion.div
      className={cn(
        'glass rounded-xl p-6',
        'transition-all duration-200',
        onClick && 'cursor-pointer',
        className
      )}
      whileHover={animationEnabled ? 'hover' : undefined}
      variants={cardHover}
      onClick={onClick}
      {...props}
    >
      {/* Image Header (if provided) */}
      {hasImage && image && (
        <div className="mb-4 -mt-6 -mx-6 h-48 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title || 'Card image'}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* Stat Card Layout */}
      {isStatCard ? (
        <div className="flex items-start justify-between">
          {/* Left side: Icon and label */}
          <div className="flex-1">
            {icon && (
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-2xl">
                {icon}
              </div>
            )}
            {title && (
              <p className="text-sm font-medium text-text-secondary">
                {title}
              </p>
            )}
            <p className="mt-2 text-3xl font-bold">{value}</p>
            {trend && (
              <div className="mt-2 flex items-center gap-1">
                <span className={cn('text-sm font-semibold', trendColor)}>
                  {trend}
                </span>
                {description && (
                  <span className="text-xs text-text-tertiary">
                    {description}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Right side: Icon (alternative position) */}
          {!icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-2xl">
              📊
            </div>
          )}
        </div>
      ) : (
        /* Regular Card Layout */
        <div>
          {/* Header */}
          {(icon || title) && (
            <div className="mb-4 flex items-center gap-3">
              {icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                  {icon}
                </div>
              )}
              {title && (
                <h3 className="text-xl font-bold">{title}</h3>
              )}
            </div>
          )}

          {/* Description */}
          {description && (
            <p className="text-text-secondary">{description}</p>
          )}

          {/* Children */}
          {children && <div className="mt-4">{children}</div>}
        </div>
      )}
    </motion.div>
  );
}

// Variant helpers
export function StatCard(props: CardProps) {
  return <Card {...props} />;
}

export function ImageCard(props: CardProps) {
  return <Card {...props} />;
}

export function BasicCard(props: CardProps) {
  return <Card {...props} />;
}
