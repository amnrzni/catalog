'use client';

import React from 'react';
import '../../../styles/3d-effects.css';

interface Sphere3DProps {
  size?: number;
  className?: string;
}

export default function Sphere3D({ size = 300, className = '' }: Sphere3DProps) {
  return (
    <div
      className={`sphere-3d ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-hidden="true"
    />
  );
}
