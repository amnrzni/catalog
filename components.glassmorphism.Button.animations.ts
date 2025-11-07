/**
 * Button Animation Variants
 * Location: components/glassmorphism/Button/animations.ts
 * 
 * Framer Motion animation variants for the Button component
 */

import { Variants } from 'framer-motion';

export const buttonAnimation: Variants = {
  hover: {
    y: -2,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Loading spinner animation
export const spinnerAnimation: Variants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Icon animation on hover
export const iconHoverAnimation: Variants = {
  hover: {
    x: 2,
    transition: {
      duration: 0.2,
    },
  },
};
