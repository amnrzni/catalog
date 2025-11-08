/**
 * Slider Component - Theme-Agnostic
 */

'use client';

import React, { InputHTMLAttributes, useState } from 'react';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showValue?: boolean;
}

export function Slider({
  label,
  showValue = true,
  id,
  value: controlledValue,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  ...props
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(Number(newValue));
    onChange?.(e);
  };

  const percentage = ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;

  return (
    <div>
      {label && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-sm)',
          }}
        >
          <label
            htmlFor={sliderId}
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-text-primary)',
            }}
          >
            {label}
          </label>
          {showValue && (
            <span
              style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-accent-primary)',
              }}
            >
              {value}
            </span>
          )}
        </div>
      )}
      <div style={{ position: 'relative' }}>
        <input
          type="range"
          id={sliderId}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          style={{
            width: '100%',
            height: '6px',
            borderRadius: 'var(--radius-full)',
            background: `linear-gradient(to right, var(--color-accent-primary) 0%, var(--color-accent-primary) ${percentage}%, var(--color-border) ${percentage}%, var(--color-border) 100%)`,
            outline: 'none',
            transition: 'background var(--transition-fast)',
            cursor: 'pointer',
            WebkitAppearance: 'none',
            appearance: 'none',
          }}
          {...props}
        />
        <style jsx>{`
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--color-accent-primary);
            cursor: pointer;
            box-shadow: var(--shadow-elevation2);
            transition: all var(--transition-fast);
          }

          input[type='range']::-webkit-slider-thumb:hover {
            transform: scale(1.2);
            box-shadow: var(--shadow-elevation3);
          }

          input[type='range']::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--color-accent-primary);
            cursor: pointer;
            border: none;
            box-shadow: var(--shadow-elevation2);
            transition: all var(--transition-fast);
          }

          input[type='range']::-moz-range-thumb:hover {
            transform: scale(1.2);
            box-shadow: var(--shadow-elevation3);
          }
        `}</style>
      </div>
    </div>
  );
}
