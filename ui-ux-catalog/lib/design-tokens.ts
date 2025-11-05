import { DesignToken } from './types';

export const designTokens: Record<string, DesignToken[]> = {
  colors: [
    {
      name: 'Background Primary',
      value: '#0f1729',
      category: 'color',
      cssVariable: '--bg-primary',
      description: 'Main background color for the application',
    },
    {
      name: 'Background Secondary',
      value: '#1a1f35',
      category: 'color',
      cssVariable: '--bg-secondary',
      description: 'Secondary background for cards and sections',
    },
    {
      name: 'Background Tertiary',
      value: '#1e2537',
      category: 'color',
      cssVariable: '--bg-tertiary',
      description: 'Tertiary background for nested elements',
    },
    {
      name: 'Primary',
      value: '#8b5cf6',
      category: 'color',
      cssVariable: '--primary',
      description: 'Primary brand color - purple',
    },
    {
      name: 'Primary Light',
      value: '#a78bfa',
      category: 'color',
      cssVariable: '--primary-light',
      description: 'Light variant of primary color',
    },
    {
      name: 'Primary Dark',
      value: '#7c3aed',
      category: 'color',
      cssVariable: '--primary-dark',
      description: 'Dark variant of primary color',
    },
    {
      name: 'Accent Blue',
      value: '#3b82f6',
      category: 'color',
      cssVariable: '--accent-blue',
      description: 'Blue accent color',
    },
    {
      name: 'Accent Pink',
      value: '#ec4899',
      category: 'color',
      cssVariable: '--accent-pink',
      description: 'Pink accent color',
    },
    {
      name: 'Accent Orange',
      value: '#f97316',
      category: 'color',
      cssVariable: '--accent-orange',
      description: 'Orange accent color',
    },
    {
      name: 'Accent Green',
      value: '#10b981',
      category: 'color',
      cssVariable: '--accent-green',
      description: 'Green accent color',
    },
    {
      name: 'Text Primary',
      value: '#f1f5f9',
      category: 'color',
      cssVariable: '--text-primary',
      description: 'Primary text color',
    },
    {
      name: 'Text Secondary',
      value: '#cbd5e1',
      category: 'color',
      cssVariable: '--text-secondary',
      description: 'Secondary text color',
    },
    {
      name: 'Text Tertiary',
      value: '#94a3b8',
      category: 'color',
      cssVariable: '--text-tertiary',
      description: 'Tertiary text color',
    },
    {
      name: 'Text Quaternary',
      value: '#64748b',
      category: 'color',
      cssVariable: '--text-quaternary',
      description: 'Quaternary text color',
    },
  ],
  spacing: [
    {
      name: 'Extra Small',
      value: '0.25rem',
      category: 'spacing',
      cssVariable: '--spacing-xs',
      description: '4px spacing',
    },
    {
      name: 'Small',
      value: '0.5rem',
      category: 'spacing',
      cssVariable: '--spacing-sm',
      description: '8px spacing',
    },
    {
      name: 'Medium',
      value: '1rem',
      category: 'spacing',
      cssVariable: '--spacing-md',
      description: '16px spacing',
    },
    {
      name: 'Large',
      value: '1.5rem',
      category: 'spacing',
      cssVariable: '--spacing-lg',
      description: '24px spacing',
    },
    {
      name: 'Extra Large',
      value: '2rem',
      category: 'spacing',
      cssVariable: '--spacing-xl',
      description: '32px spacing',
    },
    {
      name: '2X Extra Large',
      value: '3rem',
      category: 'spacing',
      cssVariable: '--spacing-2xl',
      description: '48px spacing',
    },
  ],
  shadows: [
    {
      name: 'Small',
      value: '0 1px 3px rgba(0, 0, 0, 0.3)',
      category: 'shadow',
      cssVariable: '--shadow-sm',
      description: 'Small shadow for subtle depth',
    },
    {
      name: 'Medium',
      value: '0 4px 12px rgba(0, 0, 0, 0.4)',
      category: 'shadow',
      cssVariable: '--shadow-md',
      description: 'Medium shadow for cards',
    },
    {
      name: 'Large',
      value: '0 10px 30px rgba(0, 0, 0, 0.5)',
      category: 'shadow',
      cssVariable: '--shadow-lg',
      description: 'Large shadow for elevated elements',
    },
    {
      name: 'Extra Large',
      value: '0 20px 60px rgba(0, 0, 0, 0.6)',
      category: 'shadow',
      cssVariable: '--shadow-xl',
      description: 'Extra large shadow for deep depth',
    },
    {
      name: 'Glow',
      value: '0 0 20px rgba(139, 92, 246, 0.5)',
      category: 'shadow',
      cssVariable: '--shadow-glow',
      description: 'Purple glow effect',
    },
  ],
  animation: [
    {
      name: 'Fast',
      value: '150ms',
      category: 'animation',
      cssVariable: '--duration-fast',
      description: 'Fast animation duration',
    },
    {
      name: 'Normal',
      value: '300ms',
      category: 'animation',
      cssVariable: '--duration-normal',
      description: 'Normal animation duration',
    },
    {
      name: 'Slow',
      value: '500ms',
      category: 'animation',
      cssVariable: '--duration-slow',
      description: 'Slow animation duration',
    },
  ],
};

export const getAllTokens = (): DesignToken[] => {
  return Object.values(designTokens).flat();
};

export const getTokensByCategory = (category: string): DesignToken[] => {
  return designTokens[category] || [];
};
