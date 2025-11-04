'use client';

import React from 'react';
import '../../../styles/3d-effects.css';

interface LayeredDisc3DProps {
  size?: number;
  className?: string;
}

export default function LayeredDisc3D({ size = 200, className = '' }: LayeredDisc3DProps) {
  return (
    <div
      className={`layered-disc-3d ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-hidden="true"
    >
      <div className="layer" />
      <div className="layer" />
      <div className="layer" />
    </div>
  );
}
