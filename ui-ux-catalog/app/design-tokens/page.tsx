'use client';

import React, { useState } from 'react';
import { designTokens } from '@/lib/design-tokens';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function DesignTokensPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyAllTokens = () => {
    const allTokens = Object.values(designTokens)
      .flat()
      .map((token) => `${token.cssVariable}: ${token.value};`)
      .join('\n');
    
    const css = `:root {\n  ${allTokens.split('\n').join('\n  ')}\n}`;
    navigator.clipboard.writeText(css);
    setCopied('all');
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Design Tokens
          </h1>
          <p className="text-xl text-text-secondary mb-6">
            Our comprehensive design system tokens and variables
          </p>
          <Button variant="primary" onClick={copyAllTokens}>
            {copied === 'all' ? '✓ Copied!' : 'Copy All as CSS Variables'}
          </Button>
        </div>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTokens.colors.map((token) => (
              <Card key={token.name} glassmorphism padding="default">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-lg shadow-lg"
                    style={{ backgroundColor: token.value }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {token.name}
                    </h3>
                    <p className="text-sm text-text-tertiary">{token.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-quaternary">HEX</span>
                    <button
                      onClick={() => copyToClipboard(token.value, `${token.name}-hex`)}
                      className="flex items-center gap-2 px-2 py-1 rounded bg-background-tertiary hover:bg-background-secondary transition-colors"
                    >
                      <code className="text-xs text-text-primary">{token.value}</code>
                      {copied === `${token.name}-hex` ? (
                        <span className="text-xs text-accent-green">✓</span>
                      ) : (
                        <svg className="w-3 h-3 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-quaternary">CSS Var</span>
                    <button
                      onClick={() => copyToClipboard(`var(${token.cssVariable})`, `${token.name}-css`)}
                      className="flex items-center gap-2 px-2 py-1 rounded bg-background-tertiary hover:bg-background-secondary transition-colors"
                    >
                      <code className="text-xs text-text-primary">var({token.cssVariable})</code>
                      {copied === `${token.name}-css` ? (
                        <span className="text-xs text-accent-green">✓</span>
                      ) : (
                        <svg className="w-3 h-3 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Spacing</h2>
          <Card glassmorphism padding="large">
            <div className="space-y-4">
              {designTokens.spacing.map((token) => (
                <div key={token.name} className="flex items-center gap-6">
                  <div className="w-32">
                    <span className="text-sm font-medium text-text-primary">{token.name}</span>
                  </div>
                  <div
                    className="bg-primary rounded"
                    style={{
                      width: token.value,
                      height: '2rem',
                    }}
                  />
                  <div className="flex-1">
                    <code className="text-sm text-text-tertiary">{token.value}</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(token.value, token.name)}
                    className="px-3 py-1 rounded bg-background-tertiary hover:bg-background-secondary transition-colors text-sm text-text-secondary"
                  >
                    {copied === token.name ? '✓' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Shadows */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">Shadows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTokens.shadows.map((token) => (
              <Card key={token.name} glassmorphism padding="default">
                <div
                  className="h-24 rounded-lg bg-background-tertiary mb-4 flex items-center justify-center"
                  style={{ boxShadow: token.value }}
                >
                  <span className="text-sm text-text-tertiary">{token.name}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {token.name}
                </h3>
                <p className="text-sm text-text-tertiary mb-3">{token.description}</p>
                <button
                  onClick={() => copyToClipboard(token.value, token.name)}
                  className="w-full px-3 py-2 rounded-lg bg-background-tertiary hover:bg-background-secondary transition-colors text-sm text-text-secondary"
                >
                  {copied === token.name ? '✓ Copied!' : 'Copy Value'}
                </button>
              </Card>
            ))}
          </div>
        </section>

        {/* Animation Durations */}
        <section>
          <h2 className="text-3xl font-bold text-text-primary mb-6">Animation Durations</h2>
          <Card glassmorphism padding="large">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {designTokens.animation.map((token) => (
                <div key={token.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-text-primary">{token.name}</h3>
                    <Badge variant="primary">{token.value}</Badge>
                  </div>
                  <p className="text-sm text-text-tertiary">{token.description}</p>
                  <button
                    onClick={() => copyToClipboard(token.value, token.name)}
                    className="w-full px-3 py-2 rounded-lg bg-background-tertiary hover:bg-background-secondary transition-colors text-sm text-text-secondary"
                  >
                    {copied === token.name ? '✓ Copied!' : 'Copy Value'}
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
