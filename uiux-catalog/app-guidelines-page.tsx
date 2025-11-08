/**
 * Guidelines Page
 * LOCATION: Move to app/guidelines/page.tsx after setup
 */

'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Card, CardHeader, CardContent } from '@/components/Card';

export default function GuidelinesPage() {
  const themes = [
    {
      name: 'Glassmorphism',
      icon: '✨',
      when: 'Modern SaaS, dashboards, data-heavy interfaces',
      avoid: 'Text-heavy content, accessibility-critical applications',
      characteristics: ['Frosted glass effect', 'Backdrop blur', 'Translucent surfaces', 'Dark backgrounds'],
    },
    {
      name: 'Material Design',
      icon: '📐',
      when: 'Android apps, enterprise software, productivity tools',
      avoid: 'Luxury brands, minimalist portfolios',
      characteristics: ['Elevation shadows', '8dp grid system', 'Bold colors', 'Paper metaphor'],
    },
    {
      name: 'Minimalism',
      icon: '⚡',
      when: 'Portfolios, editorial sites, luxury brands, landing pages',
      avoid: 'Data dashboards, feature-rich applications',
      characteristics: ['Maximum whitespace', 'No shadows', 'Monochrome palette', 'Typography-focused'],
    },
    {
      name: 'Neumorphism',
      icon: '🎨',
      when: 'Mobile apps, playful interfaces, creative tools',
      avoid: 'Accessibility-critical apps, high-information-density UIs',
      characteristics: ['Soft shadows', 'Subtle depth', 'Tactile feel', 'Pastel colors'],
    },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />

      <main className="container" style={{ padding: 'var(--space-xl) var(--space-lg)' }}>
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-extrabold)', marginBottom: 'var(--space-sm)' }}>
            Design Guidelines
          </h1>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)' }}>
            When to use each theme and best practices
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
          {themes.map((theme) => (
            <Card key={theme.name} elevation={2}>
              <CardHeader 
                title={
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <span style={{ fontSize: 'var(--font-size-2xl)' }}>{theme.icon}</span>
                    <span>{theme.name}</span>
                  </div>
                }
              />
              <CardContent>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)' }}>
                  <div>
                    <h4 style={{ color: 'var(--color-accent-success)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-sm)' }}>
                      ✓ When to Use
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                      {theme.when}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-accent-danger)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-sm)' }}>
                      ✗ When to Avoid
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                      {theme.avoid}
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: 'var(--space-lg)' }}>
                  <h4 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-sm)' }}>
                    Key Characteristics
                  </h4>
                  <ul style={{ paddingLeft: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                    {theme.characteristics.map((char, i) => (
                      <li key={i} style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card elevation={2} style={{ marginTop: 'var(--space-2xl)' }}>
          <CardHeader title="General Principles" subtitle="Universal design guidelines across all themes" />
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
              <div>
                <h4 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-sm)' }}>1. Consistency</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  Maintain consistent spacing, typography, and component usage throughout your application.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-sm)' }}>2. Hierarchy</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  Use size, color, and spacing to establish clear visual hierarchy and guide user attention.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-sm)' }}>3. Accessibility</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  Ensure sufficient color contrast, keyboard navigation, and semantic HTML in all themes.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-sm)' }}>4. Performance</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  Optimize animations, use CSS variables for theme switching, and minimize re-renders.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
