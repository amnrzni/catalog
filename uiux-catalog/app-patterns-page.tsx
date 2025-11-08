/**
 * Patterns Page
 * LOCATION: Move to app/patterns/page.tsx after setup
 */

'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { StatCard } from '@/components/StatCard';
import { ActivityFeed } from '@/components/ActivityFeed';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { metrics, activity } from '@/lib/sample-data';

export default function PatternsPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />

      <main className="container" style={{ padding: 'var(--space-xl) var(--space-lg)' }}>
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-extrabold)', marginBottom: 'var(--space-sm)' }}>
            Design Patterns
          </h1>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)' }}>
            Common UI patterns and composed layouts
          </p>
        </div>

        {/* Metrics Dashboard Pattern */}
        <Card elevation={2} style={{ marginBottom: 'var(--space-2xl)' }}>
          <CardHeader title="Metrics Dashboard Pattern" subtitle="Grid of stat cards for analytics" />
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-md)' }}>
              {metrics.map((metric, i) => <StatCard key={i} {...metric} />)}
            </div>
          </CardContent>
        </Card>

        {/* Form + Activity Pattern */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-2xl)' }}>
          <Card elevation={2}>
            <CardHeader title="Form Pattern" subtitle="Input fields with validation" />
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <Input label="Email" type="email" placeholder="email@example.com" fullWidth />
                <Input label="Name" placeholder="Your name" fullWidth />
                <Button variant="primary" fullWidth>Submit</Button>
              </div>
            </CardContent>
          </Card>

          <ActivityFeed items={activity.slice(0, 3)} title="Activity Pattern" />
        </div>

        {/* Two-Column Content Pattern */}
        <Card elevation={2}>
          <CardHeader title="Two-Column Content" subtitle="Balanced layout for text and media" />
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)' }}>
              <div>
                <h3 style={{ marginBottom: 'var(--space-md)', fontWeight: 'var(--font-weight-bold)' }}>Column 1</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
                  This pattern demonstrates a two-column layout that adapts responsively. Perfect for feature comparisons, before/after showcases, or any content that benefits from side-by-side presentation.
                </p>
              </div>
              <div>
                <h3 style={{ marginBottom: 'var(--space-md)', fontWeight: 'var(--font-weight-bold)' }}>Column 2</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
                  On smaller screens, columns stack vertically for optimal readability. The pattern uses CSS Grid with auto-fit to handle responsiveness automatically without media queries.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
