/**
 * Accessibility Guidelines Page
 * LOCATION: Move to app/accessibility/page.tsx after setup
 */

'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Card, CardHeader, CardContent } from '@/components/Card';

export default function AccessibilityPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />

      <main className="container" style={{ padding: 'var(--space-xl) var(--space-lg)' }}>
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-extrabold)', marginBottom: 'var(--space-sm)' }}>
            Accessibility Guidelines
          </h1>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)' }}>
            WCAG AA compliant components with full keyboard support
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          <Card elevation={2}>
            <CardHeader title="Keyboard Navigation" subtitle="All interactive elements are keyboard accessible" />
            <CardContent>
              <ul style={{ paddingLeft: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <li><strong>Tab</strong> - Navigate forward through focusable elements</li>
                <li><strong>Shift + Tab</strong> - Navigate backward</li>
                <li><strong>Enter/Space</strong> - Activate buttons and links</li>
                <li><strong>Esc</strong> - Close modals and dropdowns</li>
                <li><strong>Arrow Keys</strong> - Navigate within tabs and lists</li>
              </ul>
            </CardContent>
          </Card>

          <Card elevation={2}>
            <CardHeader title="Focus States" subtitle="Visible focus indicators on all interactive elements" />
            <CardContent>
              <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-secondary)' }}>
                All components include visible focus states using the theme's primary accent color with a 2px outline and 2px offset.
              </p>
              <div style={{ background: 'var(--color-bg-base)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)' }}>
                <code style={{ fontSize: 'var(--font-size-sm)', fontFamily: 'monospace', color: 'var(--color-accent-primary)' }}>
                  *:focus-visible {'{'}<br />
                  &nbsp;&nbsp;outline: 2px solid var(--color-accent-primary);<br />
                  &nbsp;&nbsp;outline-offset: 2px;<br />
                  {'}'}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card elevation={2}>
            <CardHeader title="ARIA Labels" subtitle="Proper semantic markup and ARIA attributes" />
            <CardContent>
              <ul style={{ paddingLeft: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
                <li>All buttons include <code>aria-label</code> or visible text</li>
                <li>Form inputs use <code>aria-describedby</code> for error messages</li>
                <li>Interactive states use <code>aria-pressed</code>, <code>aria-expanded</code>, etc.</li>
                <li>Loading states include <code>aria-busy="true"</code></li>
                <li>Invalid form fields use <code>aria-invalid="true"</code></li>
              </ul>
            </CardContent>
          </Card>

          <Card elevation={2}>
            <CardHeader title="Color Contrast" subtitle="WCAG AA minimum contrast ratios" />
            <CardContent>
              <p style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-secondary)' }}>
                All themes maintain at least 4.5:1 contrast ratio for normal text and 3:1 for large text and UI components.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
                <div style={{ padding: 'var(--space-md)', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <p style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-xs)' }}>Primary Text</p>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>4.5:1 minimum</p>
                </div>
                <div style={{ padding: 'var(--space-md)', background: 'var(--color-bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                  <p style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-xs)' }}>UI Components</p>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>3:1 minimum</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card elevation={2}>
            <CardHeader title="Reduced Motion" subtitle="Respects prefers-reduced-motion preference" />
            <CardContent>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                All animations are disabled or significantly reduced for users who have enabled the <code>prefers-reduced-motion</code> setting.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
