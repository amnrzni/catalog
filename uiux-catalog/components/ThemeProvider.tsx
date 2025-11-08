/**
 * Enhanced Theme Provider with CSS Custom Properties
 * Manages theme state and injects CSS variables into the document
 */

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { themes, tokensToCssVars, ThemeName } from '@/lib/theme-tokens';

export interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  themeName: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeName;
}

export function ThemeProvider({ children, defaultTheme = 'glass' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('aurora-theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  // Update theme and persist to localStorage
  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem('aurora-theme', newTheme);
  };

  // Inject CSS variables whenever theme changes
  useEffect(() => {
    if (!mounted) return;

    const tokens = themes[theme];
    const cssVars = tokensToCssVars(tokens);

    // Set data-theme attribute on html element
    document.documentElement.setAttribute('data-theme', theme);

    // Inject CSS variables as inline styles on html element
    Object.entries(cssVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    // Set font family class based on theme
    const fontFamilies = {
      glass: 'font-inter',
      material: 'font-roboto',
      minimal: 'font-inter',
      neo: 'font-poppins',
    };

    // Remove all font classes
    Object.values(fontFamilies).forEach(fontClass => {
      document.documentElement.classList.remove(fontClass);
    });

    // Add current font class
    document.documentElement.classList.add(fontFamilies[theme]);
  }, [theme, mounted]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    themeName: themes[theme].name,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
