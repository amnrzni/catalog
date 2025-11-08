/**
 * Material Design Theme Tokens
 * Google's Material Design with elevation and motion
 */

import { DesignTokens } from './theme-tokens-types';

export const materialTokens: DesignTokens = {
  name: 'Material Design',
  fontFamily: 'var(--font-roboto)',

  colors: {
    // Backgrounds - solid surfaces on light base
    bgBase: '#FAFAFA',
    bgSurface: '#FFFFFF',
    bgSurfaceVariant: '#F5F5F5',

    // Text - dark on light
    textPrimary: 'rgba(0, 0, 0, 0.87)',
    textSecondary: 'rgba(0, 0, 0, 0.60)',
    textTertiary: 'rgba(0, 0, 0, 0.38)',
    textDisabled: 'rgba(0, 0, 0, 0.38)',

    // Accents - Material palette
    accentPrimary: '#1976D2',
    accentPrimaryHover: '#1565C0',
    accentSecondary: '#DC004E',
    accentSuccess: '#4CAF50',
    accentWarning: '#FF9800',
    accentDanger: '#F44336',
    accentInfo: '#2196F3',

    // Borders - subtle dividers
    border: 'rgba(0, 0, 0, 0.12)',
    borderStrong: 'rgba(0, 0, 0, 0.24)',
    borderLight: 'rgba(0, 0, 0, 0.06)',
  },

  shadows: {
    none: 'none',
    elevation1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    elevation2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    elevation3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    elevation4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    elevation6: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    elevation8: '0 24px 48px rgba(0,0,0,0.35), 0 20px 15px rgba(0,0,0,0.22)',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },

  radius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
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
    fontWeightExtrabold: '900',

    lineHeightTight: '1.2',
    lineHeightNormal: '1.5',
    lineHeightRelaxed: '1.75',
    lineHeightLoose: '2',
  },

  effects: {},

  transitions: {
    fast: '100ms',
    base: '200ms',
    slow: '300ms',
    easingStandard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easingEmphasized: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
};
