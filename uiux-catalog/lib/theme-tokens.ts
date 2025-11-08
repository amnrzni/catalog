/**
 * Theme Tokens - Main Export
 * Provides all theme definitions and utilities to convert tokens to CSS variables
 */

import { DesignTokens, ThemeName } from './theme-tokens-types';
import { glassTokens } from './theme-tokens-glass';
import { materialTokens } from './theme-tokens-material';
import { minimalTokens } from './theme-tokens-minimal';
import { neoTokens } from './theme-tokens-neo';

// Theme registry
export const themes: Record<ThemeName, DesignTokens> = {
  glass: glassTokens,
  material: materialTokens,
  minimal: minimalTokens,
  neo: neoTokens,
};

/**
 * Converts design tokens to CSS custom properties
 * @param tokens - Design tokens object
 * @returns Object with CSS variable names and values
 */
export function tokensToCssVars(tokens: DesignTokens): Record<string, string> {
  const cssVars: Record<string, string> = {};

  // Font family
  cssVars['--font-family'] = tokens.fontFamily;

  // Colors
  Object.entries(tokens.colors).forEach(([key, value]) => {
    const cssKey = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    cssVars[cssKey] = value;
  });

  // Shadows
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    cssVars[`--shadow-${key}`] = value;
  });

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars[`--space-${key}`] = value;
  });

  // Radius
  Object.entries(tokens.radius).forEach(([key, value]) => {
    cssVars[`--radius-${key}`] = value;
  });

  // Typography
  Object.entries(tokens.typography).forEach(([key, value]) => {
    const cssKey = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    cssVars[cssKey] = value;
  });

  // Effects
  if (tokens.effects) {
    Object.entries(tokens.effects).forEach(([key, value]) => {
      if (value) {
        const cssKey = `--effect-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        cssVars[cssKey] = value;
      }
    });
  }

  // Transitions
  Object.entries(tokens.transitions).forEach(([key, value]) => {
    const cssKey = `--transition-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    cssVars[cssKey] = value;
  });

  return cssVars;
}

/**
 * Generates a CSS string from tokens
 * @param tokens - Design tokens object
 * @returns CSS string with all custom properties
 */
export function tokensToCssString(tokens: DesignTokens): string {
  const vars = tokensToCssVars(tokens);
  return Object.entries(vars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');
}

// Re-export types and tokens
export type { DesignTokens, ThemeName };
export { glassTokens, materialTokens, minimalTokens, neoTokens };
