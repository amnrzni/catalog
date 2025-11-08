/**
 * Theme Switcher Component
 * Allows users to switch between the 4 available themes
 */

'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { ThemeName } from '@/lib/theme-tokens';

const themeOptions: { value: ThemeName; label: string; icon: string }[] = [
  { value: 'glass', label: 'Glassmorphism', icon: '✨' },
  { value: 'material', label: 'Material', icon: '📐' },
  { value: 'minimal', label: 'Minimalism', icon: '⚡' },
  { value: 'neo', label: 'Neumorphism', icon: '🎨' },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-sm)',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {themeOptions.map(option => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          aria-label={`Switch to ${option.label} theme`}
          aria-pressed={theme === option.value}
          style={{
            padding: 'var(--space-sm) var(--space-md)',
            background: theme === option.value 
              ? 'var(--color-accent-primary)' 
              : 'var(--color-bg-surface)',
            color: theme === option.value 
              ? '#FFFFFF' 
              : 'var(--color-text-primary)',
            border: theme === option.value 
              ? '2px solid var(--color-accent-primary)' 
              : '2px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: theme === option.value 
              ? 'var(--font-weight-semibold)' 
              : 'var(--font-weight-medium)',
            cursor: 'pointer',
            transition: 'all var(--transition-base) var(--transition-easing-standard)',
            boxShadow: theme === option.value 
              ? 'var(--shadow-elevation2)' 
              : 'var(--shadow-elevation1)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
          }}
          onMouseEnter={(e) => {
            if (theme !== option.value) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-elevation2)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            if (theme !== option.value) {
              e.currentTarget.style.boxShadow = 'var(--shadow-elevation1)';
            }
          }}
        >
          <span>{option.icon}</span>
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}

export function ThemeSwitcherCompact() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as ThemeName)}
      aria-label="Select theme"
      style={{
        padding: 'var(--space-sm) var(--space-md)',
        background: 'var(--color-bg-surface)',
        color: 'var(--color-text-primary)',
        border: '2px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
        boxShadow: 'var(--shadow-elevation1)',
      }}
    >
      {themeOptions.map(option => (
        <option key={option.value} value={option.value}>
          {option.icon} {option.label}
        </option>
      ))}
    </select>
  );
}
