'use client';

import React, { useState } from 'react';
import { componentsData } from '@/lib/components-data';
import { ComponentCategory, ComponentComplexity } from '@/lib/types';
import ComponentCard from '@/components/catalog/ComponentCard';
import Badge from '@/components/ui/Badge';

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedComplexity, setSelectedComplexity] = useState<string | null>(null);

  const categories: ComponentCategory[] = [
    'Button',
    'Input',
    'Card',
    'Navigation',
    'Data Display',
    'Feedback',
    'Layout',
    '3D Objects',
    'Form',
    'Modal',
  ];

  const complexities: ComponentComplexity[] = ['Basic', 'Intermediate', 'Advanced'];

  const filteredComponents = componentsData.filter((component) => {
    if (selectedCategory && component.category !== selectedCategory) return false;
    if (selectedComplexity && component.complexity !== selectedComplexity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-bg-radial opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Component Library
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Browse our collection of {componentsData.length} beautiful, reusable UI components. 
            Filter by category and complexity to find exactly what you need.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="glass-strong rounded-2xl p-6 sticky top-24">
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === null
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-background-secondary hover:text-primary'
                    }`}
                  >
                    All Categories ({componentsData.length})
                  </button>
                  {categories.map((category) => {
                    const count = componentsData.filter((c) => c.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-white'
                            : 'text-text-secondary hover:bg-background-secondary hover:text-primary'
                        }`}
                      >
                        {category} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Complexity Filter */}
              <div>
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3">
                  Complexity
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedComplexity(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedComplexity === null
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-background-secondary hover:text-primary'
                    }`}
                  >
                    All Levels
                  </button>
                  {complexities.map((complexity) => {
                    const count = componentsData.filter((c) => c.complexity === complexity).length;
                    return (
                      <button
                        key={complexity}
                        onClick={() => setSelectedComplexity(complexity)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedComplexity === complexity
                            ? 'bg-primary text-white'
                            : 'text-text-secondary hover:bg-background-secondary hover:text-primary'
                        }`}
                      >
                        {complexity} ({count})
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Component Grid */}
          <main className="flex-1">
            {/* Active Filters */}
            {(selectedCategory || selectedComplexity) && (
              <div className="mb-6 flex flex-wrap gap-2 items-center">
                <span className="text-sm text-text-secondary">Active filters:</span>
                {selectedCategory && (
                  <Badge variant="primary" className="cursor-pointer" onClick={() => setSelectedCategory(null)}>
                    {selectedCategory} ✕
                  </Badge>
                )}
                {selectedComplexity && (
                  <Badge variant="primary" className="cursor-pointer" onClick={() => setSelectedComplexity(null)}>
                    {selectedComplexity} ✕
                  </Badge>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedComplexity(null);
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-text-secondary">
                Showing {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Component Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredComponents.map((component) => (
                <ComponentCard key={component.id} component={component} />
              ))}
            </div>

            {/* Empty State */}
            {filteredComponents.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No components found
                </h3>
                <p className="text-text-tertiary mb-6">
                  Try adjusting your filters to see more results.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedComplexity(null);
                  }}
                  className="text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
