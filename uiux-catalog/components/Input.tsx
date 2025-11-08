/**
 * Input Component - Theme-Agnostic
 */

'use client';

import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
}

export function Input({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  fullWidth = false,
  inputSize = 'md',
  className = '',
  style = {},
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const sizeStyles = {
    sm: {
      padding: 'var(--space-sm) var(--space-md)',
      fontSize: 'var(--font-size-sm)',
      minHeight: '36px',
    },
    md: {
      padding: 'var(--space-sm) var(--space-md)',
      fontSize: 'var(--font-size-base)',
      minHeight: '44px',
    },
    lg: {
      padding: 'var(--space-md) var(--space-lg)',
      fontSize: 'var(--font-size-lg)',
      minHeight: '52px',
    },
  };

  const inputStyles: React.CSSProperties = {
    width: fullWidth ? '100%' : 'auto',
    background: 'var(--color-bg-surface)',
    color: 'var(--color-text-primary)',
    border: `2px solid ${error ? 'var(--color-accent-danger)' : 'var(--color-border)'}`,
    borderRadius: 'var(--radius-md)',
    fontFamily: 'inherit',
    transition: 'all var(--transition-base) var(--transition-easing-standard)',
    boxShadow: 'var(--shadow-elevation1)',
    ...sizeStyles[inputSize],
    ...(leftIcon ? { paddingLeft: 'calc(var(--space-lg) + var(--space-xl))' } : {}),
    ...(rightIcon ? { paddingRight: 'calc(var(--space-lg) + var(--space-xl))' } : {}),
    ...style,
  };

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: 'block',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: error ? 'var(--color-accent-danger)' : 'var(--color-text-primary)',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {label}
          {props.required && <span style={{ color: 'var(--color-accent-danger)' }}> *</span>}
        </label>
      )}
      <div style={{ position: 'relative', width: fullWidth ? '100%' : 'auto' }}>
        {leftIcon && (
          <div
            style={{
              position: 'absolute',
              left: 'var(--space-md)',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--color-text-secondary)',
              pointerEvents: 'none',
            }}
          >
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          style={inputStyles}
          className={className}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
            e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-accent-primary)33';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error
              ? 'var(--color-accent-danger)'
              : 'var(--color-border)';
            e.currentTarget.style.boxShadow = 'var(--shadow-elevation1)';
          }}
          {...props}
        />
        {rightIcon && (
          <div
            style={{
              position: 'absolute',
              right: 'var(--space-md)',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--color-text-secondary)',
              pointerEvents: 'none',
            }}
          >
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p
          id={`${inputId}-error`}
          style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-accent-danger)',
            marginTop: 'var(--space-xs)',
          }}
          role="alert"
        >
          {error}
        </p>
      )}
      {hint && !error && (
        <p
          id={`${inputId}-hint`}
          style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-tertiary)',
            marginTop: 'var(--space-xs)',
          }}
        >
          {hint}
        </p>
      )}
    </div>
  );
}
