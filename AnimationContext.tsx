'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface AnimationContextType {
  animationEnabled: boolean;
  toggleAnimation: () => void;
  animationSpeed: 'slow' | 'normal' | 'fast';
  setAnimationSpeed: (speed: AnimationContextType['animationSpeed']) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animationEnabled, setAnimationEnabled] = useState(true);
  const [animationSpeed, setSpeed] = useState<AnimationContextType['animationSpeed']>('normal');

  const toggleAnimation = () => {
    setAnimationEnabled(!animationEnabled);
  };

  const setAnimationSpeed = (speed: AnimationContextType['animationSpeed']) => {
    setSpeed(speed);
  };

  return (
    <AnimationContext.Provider value={{ animationEnabled, toggleAnimation, animationSpeed, setAnimationSpeed }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation(): AnimationContextType {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
