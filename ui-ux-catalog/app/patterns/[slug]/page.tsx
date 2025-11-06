'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { getPatternById } from '@/lib/patterns-data';
import Panel from '@/components/ui/Panel';
import Badge from '@/components/ui/Badge';
import CopyButton from '@/components/ui/CopyButton';

export default function PatternDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const pattern = getPatternById(resolvedParams.slug);

  if (!pattern) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" style={{ padding: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Pattern Not Found</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
            The pattern you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/patterns"
            style={{
              display: 'inline-flex',
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Browse Patterns
          </Link>
        </div>
      </div>
    );
  }

  const exampleCode = `// Example implementation for ${pattern.name}
import React, { useState } from 'react';

export default function ${pattern.name.replace(/\s+/g, '')}Example() {
  const [state, setState] = useState(null);

  return (
    <div>
      <h1>${pattern.name}</h1>
      {/* Implementation details */}
    </div>
  );
}`;

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginBottom: '2rem' }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ color: 'var(--muted)' }}>/</span>
          <Link href="/patterns" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            Patterns
          </Link>
          <span style={{ color: 'var(--muted)' }}>/</span>
          <span style={{ color: 'var(--text)' }}>{pattern.name}</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: 0 }}>
              {pattern.name}
            </h1>
            <Badge variant="primary">{pattern.category}</Badge>
            <Badge variant={
              pattern.complexity === 'Basic' ? 'success' : 
              pattern.complexity === 'Intermediate' ? 'warning' : 
              'danger'
            }>
              {pattern.complexity}
            </Badge>
          </div>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.6 }}>
            {pattern.description}
          </p>
        </div>

        {/* Components Used */}
        <section style={{ marginBottom: '3rem' }}>
          <Panel>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Components Used
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {pattern.components.map((comp) => (
                <Badge key={comp} variant="default">
                  {comp}
                </Badge>
              ))}
            </div>
          </Panel>
        </section>

        {/* Implementation Steps */}
        <section style={{ marginBottom: '3rem' }}>
          <Panel>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Implementation Steps
            </h2>
            <ol style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'grid',
              gap: '1rem'
            }}>
              {pattern.steps.map((step, index) => (
                <li key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '999px',
                    background: 'var(--accent)',
                    color: 'var(--bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {index + 1}
                  </div>
                  <span style={{ color: 'var(--text)', paddingTop: '0.25rem' }}>{step}</span>
                </li>
              ))}
            </ol>
          </Panel>
        </section>

        {/* Use Cases */}
        <section style={{ marginBottom: '3rem' }}>
          <Panel>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Common Use Cases
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem' 
            }}>
              {pattern.useCases.map((useCase, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    background: 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <svg width="20" height="20" fill="var(--accent)" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <strong style={{ color: 'var(--text)' }}>{useCase}</strong>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        {/* Code Example */}
        <section style={{ marginBottom: '3rem' }}>
          <Panel>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                Example Code
              </h2>
              <CopyButton value={exampleCode} />
            </div>
            <div
              style={{
                fontFamily: 'ui-monospace, Menlo, Consolas, monospace',
                background: '#0f1015',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1rem',
                fontSize: '0.875rem',
                overflowX: 'auto',
                whiteSpace: 'pre',
                color: 'var(--text)',
              }}
            >
              {exampleCode}
            </div>
          </Panel>
        </section>

        {/* Accessibility */}
        <section style={{ marginBottom: '3rem' }}>
          <Panel>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              Accessibility Guidelines
            </h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>
                WCAG Compliance
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                {pattern.accessibility.wcag.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <svg width="20" height="20" fill="#84cc16" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ color: 'var(--muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>
                Keyboard Support
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                {pattern.accessibility.keyboardSupport.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <kbd style={{
                      padding: '0.25rem 0.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: 'var(--text)',
                      flexShrink: 0,
                    }}>
                      ⌨
                    </kbd>
                    <span style={{ color: 'var(--muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>
                Screen Reader
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.5rem' }}>
                {pattern.accessibility.screenReader.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <svg width="20" height="20" fill="var(--accent)" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span style={{ color: 'var(--muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </section>

        {/* Back to Patterns */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/patterns"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              border: '1px solid var(--border)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text)',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            ← Back to Patterns
          </Link>
        </div>
      </div>
    </div>
  );
}
