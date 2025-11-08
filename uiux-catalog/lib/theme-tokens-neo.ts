/**
 * Neumorphism Theme Tokens
 * Soft UI with dual shadows creating depth
 */

import { DesignTokens } from './theme-tokens-types';

export const neoTokens: DesignTokens = {
  name: 'Neumorphism',
  fontFamily: 'var(--font-poppins)',

  colors: {
    // Backgrounds - soft gray base
    bgBase: '#E6EBF0',
    bgSurface: '#E6EBF0',
    bgSurfaceVariant: '#D1D9E6',

    // Text - dark gray on light
    textPrimary: '#2D3748',
    textSecondary: '#4A5568',
    textTertiary: '#718096',
    textDisabled: '#A0AEC0',

    // Accents - soft pastels
    accentPrimary: '#5B9FFF',
    accentPrimaryHover: '#4A8FEF',
    accentSecondary: '#A78BFA',
    accentSuccess: '#34D399',
    accentWarning: '#FBBF24',
    accentDanger: '#F87171',
    accentInfo: '#22D3EE',

    // Borders - barely visible
    border: 'rgba(0, 0, 0, 0.05)',
    borderStrong: 'rgba(0, 0, 0, 0.10)',
    borderLight: 'rgba(0, 0, 0, 0.02)',
  },

  shadows: {
    none: 'none',
    elevation1: '4px 4px 8px rgba(163,177,198,0.4), -4px -4px 8px #FFFFFF',
    elevation2: '8px 8px 16px rgba(163,177,198,0.6), -8px -8px 16px #FFFFFF',
    elevation3: '12px 12px 24px rgba(163,177,198,0.6), -12px -12px 24px #FFFFFF',
    elevation4: '16px 16px 32px rgba(163,177,198,0.7), -16px -16px 32px #FFFFFF',
    elevation6: '20px 20px 40px rgba(163,177,198,0.8), -20px -20px 40px #FFFFFF',
    elevation8: '24px 24px 48px rgba(163,177,198,0.9), -24px -24px 48px #FFFFFF',
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
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    full: '50%',
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

  effects: {},

  transitions: {
    fast: '150ms',
    base: '250ms',
    slow: '400ms',
    easingStandard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easingEmphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};
