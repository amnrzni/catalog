'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCollectionCount } from '@/lib/collection-storage';
import Badge from '@/components/ui/Badge';

export default function Header() {
  const [collectionCount, setCollectionCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after first render to prevent hydration mismatch
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Initialize collection count from localStorage
    setCollectionCount(getCollectionCount());

    const handleCollectionUpdate = () => {
      setCollectionCount(getCollectionCount());
    };

    window.addEventListener('collectionUpdate', handleCollectionUpdate);
    return () => window.removeEventListener('collectionUpdate', handleCollectionUpdate);
  }, [mounted]);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold gradient-text">UI/UX Catalog</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/components"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Components
            </Link>
            <Link
              href="/use-cases"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="/design-tokens"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Design Tokens
            </Link>
            <Link
              href="/search"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Search
            </Link>
          </nav>

          {/* Collection Badge */}
          <Link
            href="/collection"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-background-secondary transition-colors"
          >
            <svg
              className="w-5 h-5 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {collectionCount > 0 && (
              <Badge variant="primary">{collectionCount}</Badge>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
