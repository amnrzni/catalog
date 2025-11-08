/**
 * Design Token Type Definitions
 * Defines the complete structure for theming across all 4 design styles
 */

export interface DesignTokens {
  // Theme metadata
  name: string;
  fontFamily: string;

  // Color tokens
  colors: {
    // Backgrounds
    bgBase: string;
    bgSurface: string;
    bgSurfaceVariant: string;

    // Text
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textDisabled: string;

    // Accents
    accentPrimary: string;
    accentPrimaryHover: string;
    accentSecondary: string;
    accentSuccess: string;
    accentWarning: string;
    accentDanger: string;
    accentInfo: string;

    // Borders
    border: string;
    borderStrong: string;
    borderLight: string;
  };

  // Shadows
  shadows: {
    none: string;
    elevation1: string;
    elevation2: string;
    elevation3: string;
    elevation4: string;
    elevation6: string;
    elevation8: string;
  };

  // Spacing (consistent scale)
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };

  // Border radius
  radius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };

  // Typography
  typography: {
    fontSizeXs: string;
    fontSizeSm: string;
    fontSizeBase: string;
    fontSizeLg: string;
    fontSizeXl: string;
    fontSize2xl: string;
    fontSize3xl: string;
    fontSize4xl: string;

    fontWeightLight: string;
    fontWeightNormal: string;
    fontWeightMedium: string;
    fontWeightSemibold: string;
    fontWeightBold: string;
    fontWeightExtrabold: string;

    lineHeightTight: string;
    lineHeightNormal: string;
    lineHeightRelaxed: string;
    lineHeightLoose: string;
  };

  // Effects (theme-specific like blur)
  effects: {
    blur?: string;
    backdropFilter?: string;
  };

  // Transitions
  transitions: {
    fast: string;
    base: string;
    slow: string;
    easingStandard: string;
    easingEmphasized: string;
  };
}

export type ThemeName = 'glass' | 'material' | 'minimal' | 'neo';
