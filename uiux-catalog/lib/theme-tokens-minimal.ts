/**
 * Minimalism Theme Tokens
 * Pure, clean, sparse design with maximum white space
 */

import { DesignTokens } from './theme-tokens-types';

export const minimalTokens: DesignTokens = {
  name: 'Minimalism',
  fontFamily: 'var(--font-inter)',

  colors: {
    // Backgrounds - pure white
    bgBase: '#FFFFFF',
    bgSurface: '#FFFFFF',
    bgSurfaceVariant: '#FAFAFA',

    // Text - pure black and grays
    textPrimary: '#000000',
    textSecondary: '#757575',
    textTertiary: '#9E9E9E',
    textDisabled: '#BDBDBD',

    // Accents - monochrome
    accentPrimary: '#000000',
    accentPrimaryHover: '#333333',
    accentSecondary: '#000000',
    accentSuccess: '#000000',
    accentWarning: '#000000',
    accentDanger: '#000000',
    accentInfo: '#000000',

    // Borders - subtle gray lines
    border: '#E0E0E0',
    borderStrong: '#BDBDBD',
    borderLight: '#F5F5F5',
  },

  shadows: {
    none: 'none',
    elevation1: 'none',
    elevation2: 'none',
    elevation3: 'none',
    elevation4: 'none',
    elevation6: 'none',
    elevation8: 'none',
  },

  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '48px',
    xl: '64px',
    '2xl': '96px',
    '3xl': '128px',
  },

  radius: {
    none: '0',
    sm: '0',
    md: '0',
    lg: '0',
    xl: '0',
    full: '0',
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
    fast: '100ms',
    base: '200ms',
    slow: '300ms',
    easingStandard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easingEmphasized: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
};
