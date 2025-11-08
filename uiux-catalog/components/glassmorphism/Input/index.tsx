/**
 * Glassmorphism Input Component
 * Location: components/glassmorphism/Input/index.tsx
 * 
 * Flexible input component supporting multiple types:
 * - text, email, password, search, number, tel, url
 * - Floating label animation
 * - Error and success states
 * - Icons and clear button
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InputProps } from '@/types';
import { cn } from '@/lib/utils/cn';

export function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  name,
  error,
  success,
  disabled = false,
  required = false,
  maxLength,
  autoComplete,
  className,
  style: _style, // Destructure but don't use - prevents conflict with motion elements
  size: _size, // Destructure but don't use - conflicts with HTML input size attribute
  animate: _animate, // Not used in Input
  animationSpeed: _animationSpeed, // Not used in Input
  active: _active, // Not used in Input
  loading: _loading, // Not used in Input
  onClick: _onClick, // Not used in Input
  ariaLabel: _ariaLabel, // Not used in Input (we use aria-label directly)
  ariaDescribedBy: _ariaDescribedBy, // Not used in Input
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');

  const hasValue = value !== undefined ? value.length > 0 : internalValue.length > 0;
  const isPassword = type === 'password';
  const isSearch = type === 'search';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setInternalValue('');
    onChange?.('');
  };

  return (
    <div className={cn('relative', className)}>
      {/* Label */}
      {label && (
        <motion.label
          className={cn(
            'absolute left-4 cursor-text font-medium transition-all duration-200',
            isFocused || hasValue
              ? '-top-2 bg-black px-2 text-xs text-accent-primary'
              : 'top-3 text-base text-text-secondary',
            disabled && 'opacity-50'
          )}
          htmlFor={name}
          initial={false}
          animate={{
            y: isFocused || hasValue ? 0 : 0,
          }}
        >
          {label}
          {required && <span className="ml-1 text-accent-danger">*</span>}
        </motion.label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Search Icon */}
        {isSearch && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary">
            🔍
          </div>
        )}

        {/* Input Field */}
        <input
          type={isPassword && showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value !== undefined ? value : internalValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          autoComplete={autoComplete}
          placeholder={isFocused || !label ? placeholder : ''}
          className={cn(
            'glass-strong w-full rounded-lg px-4 py-3',
            'text-text-primary placeholder-text-tertiary',
            'transition-all duration-200',
            'focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50',
            error && 'border-accent-danger focus:border-accent-danger focus:ring-accent-danger/50',
            success && 'border-accent-success focus:border-accent-success focus:ring-accent-success/50',
            disabled && 'cursor-not-allowed opacity-50',
            isSearch && 'pl-11',
            (isPassword || (isSearch && hasValue)) && 'pr-11'
          )}
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary transition-colors hover:text-text-primary"
            tabIndex={-1}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}

        {/* Clear Button (Search) */}
        {isSearch && hasValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-tertiary transition-colors hover:text-text-primary"
            tabIndex={-1}
          >
            ✕
          </button>
        )}
      </div>

      {/* Error/Success Messages */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-sm text-accent-danger"
          >
            {error}
          </motion.p>
        )}
        {success && !error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-sm text-accent-success"
          >
            {success}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// Type-specific exports
export function TextInput(props: Omit<InputProps, 'type'>) {
  return <Input type="text" {...props} />;
}

export function EmailInput(props: Omit<InputProps, 'type'>) {
  return <Input type="email" {...props} />;
}

export function PasswordInput(props: Omit<InputProps, 'type'>) {
  return <Input type="password" {...props} />;
}

export function SearchInput(props: Omit<InputProps, 'type'>) {
  return <Input type="search" {...props} />;
}

export function NumberInput(props: Omit<InputProps, 'type'>) {
  return <Input type="number" {...props} />;
}
