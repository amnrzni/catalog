'use client';

import React, { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { getCollectionCount } from '@/lib/collection-storage';
import Badge from '@/components/ui/Badge';

// Subscribe function for collection updates
function subscribe(callback: () => void) {
  window.addEventListener('collectionUpdate', callback);
  return () => window.removeEventListener('collectionUpdate', callback);
}

// Get current collection count
function getSnapshot() {
  return typeof window !== 'undefined' ? getCollectionCount() : 0;
}

// Server-side snapshot (always 0)
function getServerSnapshot() {
  return 0;
}

export default function Header() {
  // Use useSyncExternalStore to sync with localStorage
  const collectionCount = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <header role="banner" className="sticky top-0 z-50 glass-strong border-b border-primary/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="UI/UX Catalog Home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl" aria-hidden="true">U</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">UI/UX Catalog</span>
          </Link>

          {/* Navigation */}
          <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-2">
            <Link
              href="/components"
              className="px-4 py-2 rounded-xl text-text-secondary hover:text-primary-light hover:bg-primary/10 transition-all font-medium"
            >
              Components
            </Link>
            <Link
              href="/use-cases"
              className="px-4 py-2 rounded-xl text-text-secondary hover:text-primary-light hover:bg-primary/10 transition-all font-medium"
            >
              Use Cases
            </Link>
            <Link
              href="/design-tokens"
              className="px-4 py-2 rounded-xl text-text-secondary hover:text-primary-light hover:bg-primary/10 transition-all font-medium"
            >
              Design Tokens
            </Link>
            <Link
              href="/search"
              className="px-4 py-2 rounded-xl text-text-secondary hover:text-primary-light hover:bg-primary/10 transition-all font-medium"
            >
              Search
            </Link>
          </nav>

          {/* Collection Badge */}
          <Link
            href="/collection"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl hover:bg-primary/10 transition-all border border-primary/20 hover:border-primary/40"
            aria-label={`View collection${collectionCount > 0 ? ` (${collectionCount} items)` : ''}`}
          >
            <svg
              className="w-5 h-5 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="sr-only">Collection</span>
            {collectionCount > 0 && (
              <Badge variant="primary" aria-label={`${collectionCount} items in collection`}>{collectionCount}</Badge>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
