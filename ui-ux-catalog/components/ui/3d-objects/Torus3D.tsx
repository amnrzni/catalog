'use client';

import React from 'react';
import '../../../styles/3d-effects.css';

interface Torus3DProps {
  size?: number;
  className?: string;
}

export default function Torus3D({ size = 250, className = '' }: Torus3DProps) {
  return (
    <div
      className={`torus-3d ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-hidden="true"
    />
  );
}
