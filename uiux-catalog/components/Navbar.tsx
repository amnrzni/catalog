/**
 * Navbar Component - Theme-Agnostic
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';

export interface NavbarProps {
  title?: string;
  showThemeSwitcher?: boolean;
}

export function Navbar({ title = 'Aurora Analytics', showThemeSwitcher = true }: NavbarProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Dashboard' },
    { href: '/components', label: 'Components' },
    { href: '/tokens', label: 'Tokens' },
    { href: '/patterns', label: 'Patterns' },
    { href: '/accessibility', label: 'Accessibility' },
    { href: '/guidelines', label: 'Guidelines' },
  ];

  return (
    <nav
      style={{
        background: 'var(--color-bg-surface)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-elevation2)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'var(--effect-backdrop-filter, none)',
        WebkitBackdropFilter: 'var(--effect-backdrop-filter, none)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-md) var(--space-lg)',
          gap: 'var(--space-lg)',
          flexWrap: 'wrap',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
          }}
        >
          {title}
        </Link>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-sm)',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: 'var(--space-sm) var(--space-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
                  color: isActive ? 'var(--color-accent-primary)' : 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all var(--transition-fast)',
                  background: isActive ? 'var(--color-accent-primary)15' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--color-text-primary)';
                    e.currentTarget.style.background = 'var(--color-bg-surface-variant)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {showThemeSwitcher && (
          <div style={{ marginLeft: 'auto' }}>
            <ThemeSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
}
