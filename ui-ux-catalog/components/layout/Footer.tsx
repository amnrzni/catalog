'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-background-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">UI/UX Catalog</h3>
            <p className="text-text-tertiary text-sm">
              A comprehensive design system catalog with elegant dark theme and modern components.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/components" className="text-text-tertiary hover:text-primary text-sm transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-text-tertiary hover:text-primary text-sm transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/design-tokens" className="text-text-tertiary hover:text-primary text-sm transition-colors">
                  Design Tokens
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search" className="text-text-tertiary hover:text-primary text-sm transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/collection" className="text-text-tertiary hover:text-primary text-sm transition-colors">
                  My Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">Connect</h3>
            <p className="text-text-tertiary text-sm mb-4">
              Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-text-quaternary text-sm">
            © {new Date().getFullYear()} UI/UX Catalog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
