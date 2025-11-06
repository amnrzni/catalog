/**
 * Glassmorphism Range Slider Component
 * Location: components/glassmorphism/Slider/index.tsx
 * 
 * A beautiful range slider with gradient thumb and live value display.
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SliderProps } from '@/types';
import { cn } from '@/lib/utils/cn';

export function Slider({
  value = 50,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,
  disabled = false,
  className,
  ...props
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);

  const currentValue = value !== undefined ? value : internalValue;
  const percentage = ((currentValue - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Label and Value */}
      {(label || showValue) && (
        <div className="mb-3 flex items-center justify-between">
          {label && (
            <label className="text-sm font-medium text-text-secondary">
              {label}
            </label>
          )}
          {showValue && (
            <motion.span
              className="text-sm font-semibold text-accent-primary"
              animate={{ scale: isDragging ? 1.1 : 1 }}
            >
              {currentValue}
            </motion.span>
          )}
        </div>
      )}

      {/* Slider Container */}
      <div className="relative">
        {/* Progress Track */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"
          style={{ width: `${percentage}%` }}
        />

        {/* Base Track */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-white/10" />

        {/* Input Range */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          disabled={disabled}
          className={cn(
            'relative z-10 h-2 w-full cursor-pointer appearance-none bg-transparent',
            'focus:outline-none',
            disabled && 'cursor-not-allowed opacity-50',
            // Webkit (Chrome, Safari)
            '[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5',
            '[&::-webkit-slider-thumb]:appearance-none',
            '[&::-webkit-slider-thumb]:rounded-full',
            '[&::-webkit-slider-thumb]:bg-gradient-to-r',
            '[&::-webkit-slider-thumb]:from-accent-primary',
            '[&::-webkit-slider-thumb]:to-accent-secondary',
            '[&::-webkit-slider-thumb]:shadow-lg',
            '[&::-webkit-slider-thumb]:shadow-accent-primary/50',
            '[&::-webkit-slider-thumb]:transition-transform',
            '[&::-webkit-slider-thumb]:hover:scale-110',
            '[&::-webkit-slider-thumb]:active:scale-95',
            // Firefox
            '[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5',
            '[&::-moz-range-thumb]:appearance-none',
            '[&::-moz-range-thumb]:rounded-full',
            '[&::-moz-range-thumb]:border-0',
            '[&::-moz-range-thumb]:bg-gradient-to-r',
            '[&::-moz-range-thumb]:from-accent-primary',
            '[&::-moz-range-thumb]:to-accent-secondary',
            '[&::-moz-range-thumb]:shadow-lg',
            '[&::-moz-range-thumb]:shadow-accent-primary/50',
            '[&::-moz-range-thumb]:transition-transform',
            '[&::-moz-range-thumb]:hover:scale-110',
            '[&::-moz-range-thumb]:active:scale-95'
          )}
        />
      </div>

      {/* Min/Max Labels */}
      <div className="mt-2 flex justify-between text-xs text-text-tertiary">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
