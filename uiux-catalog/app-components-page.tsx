/**
 * Components Gallery Page
 * LOCATION: This file should be moved to app/components/page.tsx after running npm run setup
 */

'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Toggle } from '@/components/Toggle';
import { Slider } from '@/components/Slider';
import { StatCard } from '@/components/StatCard';
import { ActivityFeed, ActivityItem } from '@/components/ActivityFeed';

export default function ComponentsPage() {
  const [toggleState, setToggleState] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />

      <main className="container" style={{ padding: 'var(--space-xl) var(--space-lg)' }}>
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 'var(--font-weight-extrabold)', marginBottom: 'var(--space-sm)' }}>
            Component Gallery
          </h1>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)' }}>
            All components work seamlessly across all 4 themes using CSS custom properties
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>
          {/* Buttons */}
          <Card elevation={2}>
            <CardHeader title="Buttons" subtitle="Various button variants and sizes" />
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div>
                  <h4 style={{ marginBottom: 'var(--space-md)', fontWeight: 'var(--font-weight-semibold)' }}>Variants</h4>
                  <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--space-md)', fontWeight: 'var(--font-weight-semibold)' }}>Sizes</h4>
                  <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: 'var(--space-md)', fontWeight: 'var(--font-weight-semibold)' }}>States</h4>
                  <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                    <Button isLoading>Loading</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <Card elevation={2}>
            <CardHeader title="Cards" subtitle="Different elevations and styles" />
            <CardContent>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
                <Card elevation={1} hover>
                  <h4 style={{ marginBottom: 'var(--space-sm)' }}>Elevation 1</h4>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Subtle shadow</p>
                </Card>
                <Card elevation={2} hover>
                  <h4 style={{ marginBottom: 'var(--space-sm)' }}>Elevation 2</h4>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Medium shadow</p>
                </Card>
                <Card elevation={3} hover>
                  <h4 style={{ marginBottom: 'var(--space-sm)' }}>Elevation 3</h4>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Strong shadow</p>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Inputs */}
          <Card elevation={2}>
            <CardHeader title="Form Controls" subtitle="Inputs, textareas, and interactive elements" />
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', maxWidth: '500px' }}>
                <Input label="Email" type="email" placeholder="your.email@example.com" fullWidth />
                <Input label="Password" type="password" placeholder="••••••••" fullWidth />
                <Input label="With Error" error="This field is required" fullWidth />
                <Textarea label="Message" placeholder="Enter your message..." fullWidth rows={4} />
                <Toggle label="Enable notifications" checked={toggleState} onChange={(e) => setToggleState(e.target.checked)} />
                <Slider label="Volume" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
              </div>
            </CardContent>
          </Card>

          {/* Stat Cards */}
          <Card elevation={2}>
            <CardHeader title="Stat Cards" subtitle="Metrics display with trend indicators" />
            <CardContent>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-md)' }}>
                <StatCard label="Revenue" value="$45,231" delta="+12.5%" trend="up" icon="💰" />
                <StatCard label="Users" value="1,234" delta="+5.2%" trend="up" icon="👥" />
                <StatCard label="Conversion" value="2.4%" delta="-0.3%" trend="down" icon="📊" />
                <StatCard label="Engagement" value="67%" delta="+0%" trend="neutral" icon="✨" />
              </div>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <div>
            <ActivityFeed
              items={[
                { type: 'success', title: 'Payment received', description: 'Invoice #1234 paid', time: '2 mins ago', icon: '✅' },
                { type: 'primary', title: 'New user', description: 'john@example.com registered', time: '5 mins ago', icon: '👤' },
                { type: 'warning', title: 'Warning', description: 'High CPU usage detected', time: '10 mins ago', icon: '⚠️' },
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
