/**
 * Glassmorphism Toggle Switch Component
 * Location: components/glassmorphism/Toggle/index.tsx
 * 
 * An elegant toggle switch with smooth animations.
 * Perfect for on/off settings and preferences.
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ToggleProps } from '@/types';
import { cn } from '@/lib/utils/cn';
import { useAnimation } from '@/contexts/AnimationContext';

export function Toggle({
  checked = false,
  onChange,
  label,
  name,
  disabled = false,
  size = 'md',
  className,
  ...props
}: ToggleProps) {
  const { animationEnabled } = useAnimation();

  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const sizeStyles = {
    sm: { track: 'w-10 h-6', thumb: 'h-5 w-5', translate: 'translate-x-4' },
    md: { track: 'w-12 h-7', thumb: 'h-6 w-6', translate: 'translate-x-5' },
    lg: { track: 'w-14 h-8', thumb: 'h-7 w-7', translate: 'translate-x-6' },
  };

  const styles = sizeStyles[size];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {/* Toggle Track */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label || name}
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          styles.track,
          'relative rounded-full transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-black',
          checked
            ? 'bg-gradient-to-r from-accent-primary to-accent-secondary'
            : 'bg-white/20',
          disabled && 'cursor-not-allowed opacity-50'
        )}
        {...props}
      >
        {/* Toggle Thumb */}
        <motion.div
          className={cn(
            styles.thumb,
            'absolute left-0.5 top-0.5 rounded-full bg-white shadow-lg'
          )}
          animate={{
            x: checked ? styles.translate : 0,
          }}
          transition={{
            type: animationEnabled ? 'spring' : 'tween',
            stiffness: 500,
            damping: 30,
            duration: animationEnabled ? undefined : 0.01,
          }}
        />
      </button>

      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className={cn(
            'cursor-pointer select-none text-sm font-medium text-text-primary',
            disabled && 'cursor-not-allowed opacity-50'
          )}
          onClick={handleToggle}
        >
          {label}
        </label>
      )}
    </div>
  );
}
