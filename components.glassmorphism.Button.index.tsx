/**
 * Glassmorphism Button Component
 * Location: components/glassmorphism/Button/index.tsx
 * 
 * A production-ready button component with glassmorphism styling.
 * Supports multiple variants, sizes, states, and icons.
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from '@/types';
import { cn } from '@/lib/utils/cn';
import { buttonAnimation } from './animations';
import { useAnimation } from '@/contexts/AnimationContext';

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  leftIcon,
  rightIcon,
  children,
  className,
  onClick,
  ariaLabel,
  ...props
}: ButtonProps) {
  const { animationEnabled } = useAnimation();

  // Base styles
  const baseStyles = cn(
    'relative inline-flex items-center justify-center gap-2',
    'font-semibold tracking-wide',
    'rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-black',
    'disabled:cursor-not-allowed disabled:opacity-50',
    className
  );

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  // Variant styles (glassmorphism)
  const variantStyles = {
    primary: cn(
      'bg-gradient-to-r from-accent-primary to-accent-secondary',
      'text-white shadow-lg shadow-accent-primary/30',
      'hover:shadow-xl hover:shadow-accent-primary/50',
      'active:scale-95'
    ),
    secondary: cn(
      'glass-strong text-white',
      'hover:bg-white/15 hover:border-white/30',
      'active:scale-95'
    ),
    outlined: cn(
      'bg-transparent border-2 border-white/30 text-white',
      'hover:bg-white/10 hover:border-white/50',
      'active:scale-95'
    ),
    ghost: cn(
      'bg-transparent text-white',
      'hover:bg-white/10',
      'active:scale-95'
    ),
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <motion.div
      className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );

  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant]
      )}
      whileHover={animationEnabled && !disabled ? 'hover' : undefined}
      whileTap={animationEnabled && !disabled ? 'tap' : undefined}
      variants={buttonAnimation}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner />
          <span className="opacity-70">Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="inline-flex">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
}

// Export named variant helpers
export function PrimaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="primary" {...props} />;
}

export function SecondaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="secondary" {...props} />;
}

export function OutlinedButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="outlined" {...props} />;
}

export function GhostButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="ghost" {...props} />;
}
