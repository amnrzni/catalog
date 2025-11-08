/**
 * Toggle/Switch Component - Theme-Agnostic
 */

'use client';

import React, { InputHTMLAttributes } from 'react';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Toggle({
  label,
  size = 'md',
  id,
  className = '',
  style = {},
  ...props
}: ToggleProps) {
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  const sizeMap = {
    sm: { width: '36px', height: '20px', thumb: '16px' },
    md: { width: '48px', height: '24px', thumb: '20px' },
    lg: { width: '60px', height: '30px', thumb: '26px' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        ...style,
      }}
      className={className}
    >
      <input
        type="checkbox"
        id={toggleId}
        style={{
          position: 'absolute',
          opacity: 0,
          width: 0,
          height: 0,
        }}
        {...props}
      />
      <label
        htmlFor={toggleId}
        style={{
          position: 'relative',
          display: 'inline-block',
          width: currentSize.width,
          height: currentSize.height,
          background: props.checked
            ? 'var(--color-accent-primary)'
            : 'var(--color-border-strong)',
          borderRadius: 'var(--radius-full)',
          cursor: props.disabled ? 'not-allowed' : 'pointer',
          transition: 'background var(--transition-base) var(--transition-easing-standard)',
          opacity: props.disabled ? 0.5 : 1,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            left: props.checked
              ? `calc(${currentSize.width} - ${currentSize.thumb} - 2px)`
              : '2px',
            width: currentSize.thumb,
            height: currentSize.thumb,
            background: '#FFFFFF',
            borderRadius: '50%',
            transition: 'left var(--transition-base) var(--transition-easing-emphasized)',
            boxShadow: 'var(--shadow-elevation2)',
          }}
        />
      </label>
      {label && (
        <span
          style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-text-primary)',
            fontWeight: 'var(--font-weight-medium)',
            cursor: props.disabled ? 'not-allowed' : 'pointer',
          }}
          onClick={() => {
            if (!props.disabled) {
              document.getElementById(toggleId)?.click();
            }
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
