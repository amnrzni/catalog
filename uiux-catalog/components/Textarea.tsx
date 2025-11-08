/**
 * Textarea Component - Theme-Agnostic
 */

'use client';

import React, { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export function Textarea({
  label,
  error,
  hint,
  fullWidth = false,
  className = '',
  style = {},
  id,
  rows = 4,
  ...props
}: TextareaProps) {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const textareaStyles: React.CSSProperties = {
    width: fullWidth ? '100%' : 'auto',
    background: 'var(--color-bg-surface)',
    color: 'var(--color-text-primary)',
    border: `2px solid ${error ? 'var(--color-accent-danger)' : 'var(--color-border)'}`,
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-md)',
    fontSize: 'var(--font-size-base)',
    fontFamily: 'inherit',
    lineHeight: 'var(--line-height-relaxed)',
    transition: 'all var(--transition-base) var(--transition-easing-standard)',
    boxShadow: 'var(--shadow-elevation1)',
    resize: 'vertical',
    minHeight: '100px',
    ...style,
  };

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <label
          htmlFor={textareaId}
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
      <textarea
        id={textareaId}
        rows={rows}
        style={textareaStyles}
        className={className}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
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
      {error && (
        <p
          id={`${textareaId}-error`}
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
          id={`${textareaId}-hint`}
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
