/**
 * Aurora Analytics - Dashboard (Homepage)
 * Demonstrates all 4 themes with a complete analytics interface
 */

'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { StatCard } from '@/components/StatCard';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { ActivityFeed } from '@/components/ActivityFeed';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Toggle } from '@/components/Toggle';
import { Slider } from '@/components/Slider';
import { metrics, activity } from '@/lib/sample-data';

export default function DashboardPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [volume, setVolume] = useState(70);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />

      <main className="container" style={{ padding: 'var(--space-xl) var(--space-lg)' }}>
        {/* Page Header */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h1
            style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-extrabold)',
              marginBottom: 'var(--space-sm)',
              background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Aurora Analytics Dashboard
          </h1>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
            }}
          >
            Experience seamless theme switching across 4 modern design systems
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-lg)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {metrics.map((metric, index) => (
            <StatCard key={index} {...metric} />
          ))}
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-xl)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {/* Activity Feed */}
          <div>
            <ActivityFeed items={activity} />
          </div>

          {/* Settings Form */}
          <Card elevation={2}>
            <CardHeader title="Quick Settings" subtitle="Configure your preferences" />
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <Input
                  label="Username"
                  placeholder="Enter username"
                  defaultValue="aurora_user"
                  fullWidth
                  leftIcon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="your.email@example.com"
                  defaultValue="aurora@example.com"
                  fullWidth
                  leftIcon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>
                  }
                />

                <Toggle
                  label="Email Notifications"
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />

                <Slider
                  label="Notification Volume"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                />

                <Textarea
                  label="Bio"
                  placeholder="Tell us about yourself..."
                  defaultValue="Design enthusiast exploring modern UI/UX patterns."
                  fullWidth
                  rows={3}
                />

                <div
                  style={{
                    display: 'flex',
                    gap: 'var(--space-sm)',
                    marginTop: 'var(--space-md)',
                  }}
                >
                  <Button variant="primary" fullWidth>
                    Save Changes
                  </Button>
                  <Button variant="outlined">Cancel</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Showcase */}
        <Card elevation={3} padding="xl">
          <CardHeader
            title="Multi-Theme Design System"
            subtitle="Switch between themes using the buttons in the navigation bar"
          />
          <CardContent>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-lg)',
              }}
            >
              {[
                {
                  icon: '✨',
                  title: 'Glassmorphism',
                  description: 'Frosted glass with blur',
                },
                {
                  icon: '📐',
                  title: 'Material Design',
                  description: "Google's design language",
                },
                {
                  icon: '⚡',
                  title: 'Minimalism',
                  description: 'Clean and spacious',
                },
                {
                  icon: '🎨',
                  title: 'Neumorphism',
                  description: 'Soft UI with shadows',
                },
              ].map((theme, index) => (
                <div
                  key={index}
                  style={{
                    padding: 'var(--space-lg)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    transition: 'all var(--transition-base)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-bg-surface-variant)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-sm)' }}>
                    {theme.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  >
                    {theme.title}
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                    {theme.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
