'use client';

import React, { useState, useEffect } from 'react';
import { searchComponents } from '@/lib/components-data';
import ComponentCard from '@/components/catalog/ComponentCard';
import Input from '@/components/ui/Input';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchComponents(''));

  useEffect(() => {
    const timer = setTimeout(() => {
      setResults(searchComponents(query));
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Search Components
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Find exactly what you need from our component library
          </p>

          {/* Search Input */}
          <div className="max-w-2xl">
            <Input
              type="search"
              placeholder="Search by name, description, or tags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              fullWidth
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              }
            />
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-text-secondary">
            {query ? (
              <>
                Found <strong className="text-text-primary">{results.length}</strong> result
                {results.length !== 1 ? 's' : ''} for "{query}"
              </>
            ) : (
              <>
                Showing <strong className="text-text-primary">{results.length}</strong> total components
              </>
            )}
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              No results found
            </h3>
            <p className="text-text-tertiary">
              Try searching with different keywords
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
