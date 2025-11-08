/**
 * Tokens Explorer Page
 * LOCATION: This file should be moved to app/tokens/page.tsx after running npm run setup
 */

'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Card, CardHeader, CardContent } from '@/components/Card';
import { useTheme } from '@/components/ThemeProvider';
import { themes, tokensToCssVars } from '@/lib/theme-tokens';

export default function TokensPage() {
  const { theme, themeName } = useTheme();
  const currentTokens = themes[theme];

  const tokenSections = [
    {
      title: 'Colors',
      tokens: Object.entries(currentTokens.colors).map(([key, value]) => ({
        name: key,
        value,
        cssVar: `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
      })),
    },
    {
      title: 'Spacing',
      tokens: Object.entries(currentTokens.spacing).map(([key, value]) => ({
        name: key,
        value,
        cssVar: `--space-${key}`,
      })),
    },
    {
      title: 'Border Radius',
      tokens: Object.entries(currentTokens.radius).map(([key, value]) => ({
        name: key,
        value,
        cssVar: `--radius-${key}`,
      })),
    },
    {
      title: 'Shadows',
      tokens: Object.entries(currentTokens.shadows).map(([key, value]) => ({
        name: key,
        value,
        cssVar: `--shadow-${key}`,
      })),
    },
    {
      title: 'Typography',
      tokens: Object.entries(currentTokens.typography).map(([key, value]) => ({
        name: key,
        value,
        cssVar: `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
      })),
    },
    {
      title: 'Transitions',
      tokens: Object.entries(currentTokens.transitions).map(([key, value]) => ({
        name: key,
        value,
        cssVar: `--transition-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
      })),
    },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />

      <main className="container" style={{ padding: 'var(--space-xl) var(--space-lg)' }}>
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h1
            style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-extrabold)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            Design Tokens
          </h1>
          <p
            style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
            }}
          >
            Currently viewing: <strong style={{ color: 'var(--color-accent-primary)' }}>{themeName}</strong>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {tokenSections.map((section) => (
            <Card key={section.title} elevation={2}>
              <CardHeader title={section.title} />
              <CardContent>
                <div style={{ overflowX: 'auto' }}>
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: 'var(--font-size-sm)',
                    }}
                  >
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                        <th style={{ padding: 'var(--space-md)', textAlign: 'left', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-secondary)' }}>
                          Token Name
                        </th>
                        <th style={{ padding: 'var(--space-md)', textAlign: 'left', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-secondary)' }}>
                          CSS Variable
                        </th>
                        <th style={{ padding: 'var(--space-md)', textAlign: 'left', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-secondary)' }}>
                          Value
                        </th>
                        {section.title === 'Colors' && (
                          <th style={{ padding: 'var(--space-md)', textAlign: 'left', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-secondary)' }}>
                            Preview
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {section.tokens.map((token) => (
                        <tr key={token.name} style={{ borderBottom: '1px solid var(--color-border)' }}>
                          <td style={{ padding: 'var(--space-md)', fontFamily: 'monospace', color: 'var(--color-text-primary)' }}>
                            {token.name}
                          </td>
                          <td style={{ padding: 'var(--space-md)', fontFamily: 'monospace', color: 'var(--color-accent-primary)', fontSize: 'var(--font-size-xs)' }}>
                            {token.cssVar}
                          </td>
                          <td style={{ padding: 'var(--space-md)', fontFamily: 'monospace', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-xs)' }}>
                            {token.value}
                          </td>
                          {section.title === 'Colors' && (
                            <td style={{ padding: 'var(--space-md)' }}>
                              <div
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  background: token.value,
                                  borderRadius: 'var(--radius-sm)',
                                  border: '2px solid var(--color-border)',
                                  boxShadow: 'var(--shadow-elevation1)',
                                }}
                                title={token.value}
                              />
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
