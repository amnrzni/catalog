'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ThemeContextType {
  currentStyle: 'glassmorphism' | 'neumorphism' | 'material' | 'minimalism';
  setStyle: (style: ThemeContextType['currentStyle']) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentStyle, setCurrentStyle] = useState<ThemeContextType['currentStyle']>('glassmorphism');

  const setStyle = (style: ThemeContextType['currentStyle']) => {
    setCurrentStyle(style);
  };

  return (
    <ThemeContext.Provider value={{ currentStyle, setStyle }}>
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
