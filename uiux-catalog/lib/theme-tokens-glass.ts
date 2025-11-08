/**
 * Glassmorphism Theme Tokens
 * Frosted glass effect with backdrop blur and transparency
 */

import { DesignTokens } from './theme-tokens-types';

export const glassTokens: DesignTokens = {
  name: 'Glassmorphism',
  fontFamily: 'var(--font-inter)',

  colors: {
    // Backgrounds - translucent with blur
    bgBase: 'rgba(0, 0, 0, 1)',
    bgSurface: 'rgba(255, 255, 255, 0.08)',
    bgSurfaceVariant: 'rgba(255, 255, 255, 0.12)',

    // Text - high contrast on dark
    textPrimary: 'rgba(255, 255, 255, 0.95)',
    textSecondary: 'rgba(255, 255, 255, 0.70)',
    textTertiary: 'rgba(255, 255, 255, 0.45)',
    textDisabled: 'rgba(255, 255, 255, 0.30)',

    // Accents - vibrant blues and purples
    accentPrimary: '#5B9FFF',
    accentPrimaryHover: '#4A8FEF',
    accentSecondary: '#A78BFA',
    accentSuccess: '#34D399',
    accentWarning: '#FBBF24',
    accentDanger: '#F87171',
    accentInfo: '#5B9FFF',

    // Borders - subtle glass edges
    border: 'rgba(255, 255, 255, 0.18)',
    borderStrong: 'rgba(255, 255, 255, 0.25)',
    borderLight: 'rgba(255, 255, 255, 0.12)',
  },

  shadows: {
    none: 'none',
    elevation1: '0 4px 16px rgba(0, 0, 0, 0.1)',
    elevation2: '0 8px 32px rgba(0, 0, 0, 0.2)',
    elevation3: '0 12px 48px rgba(0, 0, 0, 0.3)',
    elevation4: '0 16px 64px rgba(0, 0, 0, 0.4)',
    elevation6: '0 20px 80px rgba(0, 0, 0, 0.5)',
    elevation8: '0 24px 96px rgba(0, 0, 0, 0.6)',
  },

  spacing: {
    xs: '6px',
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },

  radius: {
    none: '0',
    sm: '10px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    full: '9999px',
  },

  typography: {
    fontSizeXs: '12px',
    fontSizeSm: '14px',
    fontSizeBase: '16px',
    fontSizeLg: '18px',
    fontSizeXl: '24px',
    fontSize2xl: '32px',
    fontSize3xl: '48px',
    fontSize4xl: '64px',

    fontWeightLight: '300',
    fontWeightNormal: '400',
    fontWeightMedium: '500',
    fontWeightSemibold: '600',
    fontWeightBold: '700',
    fontWeightExtrabold: '800',

    lineHeightTight: '1.2',
    lineHeightNormal: '1.5',
    lineHeightRelaxed: '1.75',
    lineHeightLoose: '2',
  },

  effects: {
    blur: '60px',
    backdropFilter: 'blur(60px) saturate(180%)',
  },

  transitions: {
    fast: '150ms',
    base: '250ms',
    slow: '400ms',
    easingStandard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easingEmphasized: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};
