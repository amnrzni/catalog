'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCollection, removeFromCollection, clearCollection } from '@/lib/collection-storage';
import { getComponentById } from '@/lib/components-data';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function CollectionPage() {
  const [collection, setCollection] = useState<string[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const loadCollection = React.useCallback(() => {
    const items = getCollection();
    setCollection(items.map((item) => item.id));
  }, []);

  useEffect(() => {
    loadCollection();

    const handleUpdate = () => {
      loadCollection();
    };

    window.addEventListener('collectionUpdate', handleUpdate);
    return () => window.removeEventListener('collectionUpdate', handleUpdate);
  }, [loadCollection]);

  const handleRemove = (id: string) => {
    removeFromCollection(id);
  };

  const handleClearAll = () => {
    clearCollection();
    setShowConfirm(false);
  };

  const handleExport = (format: 'json' | 'css' | 'html' | 'markdown') => {
    const components = collection.map((id) => getComponentById(id)).filter(Boolean);
    
    let content = '';
    let filename = '';
    let mimeType = '';

    switch (format) {
      case 'json':
        content = JSON.stringify(components, null, 2);
        filename = 'collection.json';
        mimeType = 'application/json';
        break;
      case 'css':
        content = `/* UI/UX Catalog - Exported Components */\n\n${components.map(c => `/* ${c?.name} */\n/* Category: ${c?.category} */\n/* Complexity: ${c?.complexity} */\n\n`).join('')}`;
        filename = 'collection.css';
        mimeType = 'text/css';
        break;
      case 'html':
        content = `<!DOCTYPE html>\n<html>\n<head>\n  <title>UI/UX Catalog Collection</title>\n</head>\n<body>\n  <h1>My Component Collection</h1>\n  ${components.map(c => `<section>\n    <h2>${c?.name}</h2>\n    <p>${c?.description}</p>\n  </section>`).join('\n  ')}\n</body>\n</html>`;
        filename = 'collection.html';
        mimeType = 'text/html';
        break;
      case 'markdown':
        content = `# UI/UX Catalog Collection\n\n${components.map(c => `## ${c?.name}\n\n${c?.description}\n\n- **Category:** ${c?.category}\n- **Complexity:** ${c?.complexity}\n- **Tags:** ${c?.tags.join(', ')}\n\n`).join('')}`;
        filename = 'collection.md';
        mimeType = 'text/markdown';
        break;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const components = collection.map((id) => getComponentById(id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            My Collection
          </h1>
          <p className="text-xl text-text-secondary">
            {collection.length} component{collection.length !== 1 ? 's' : ''} saved
          </p>
        </div>

        {collection.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📦</div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Your collection is empty
            </h2>
            <p className="text-text-tertiary mb-8 max-w-md mx-auto">
              Start adding components to your collection to save them for later and export them.
            </p>
            <Link href="/components">
              <Button variant="primary" size="large">
                Browse Components
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => handleExport('json')}
                >
                  Export JSON
                </Button>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => handleExport('css')}
                >
                  Export CSS
                </Button>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => handleExport('html')}
                >
                  Export HTML
                </Button>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => handleExport('markdown')}
                >
                  Export Markdown
                </Button>
              </div>
              <div className="sm:ml-auto">
                <Button
                  variant="danger"
                  size="small"
                  onClick={() => setShowConfirm(true)}
                >
                  Clear All
                </Button>
              </div>
            </div>

            {/* Confirmation Dialog */}
            {showConfirm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <Card glassmorphism padding="large" className="max-w-md w-full">
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    Clear Collection?
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Are you sure you want to remove all {collection.length} component
                    {collection.length !== 1 ? 's' : ''} from your collection? This action cannot be undone.
                  </p>
                  <div className="flex gap-3 justify-end">
                    <Button
                      variant="secondary"
                      onClick={() => setShowConfirm(false)}
                    >
                      Cancel
                    </Button>
                    <Button variant="danger" onClick={handleClearAll}>
                      Clear All
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Component Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component) => {
                if (!component) return null;
                return (
                  <Card key={component.id} hover glassmorphism>
                    <div className="flex flex-col h-full">
                      {/* Preview */}
                      <div className="h-32 rounded-lg bg-background-tertiary mb-4 flex items-center justify-center">
                        <div className="text-3xl text-text-quaternary opacity-50">
                          <i className={`lucide-${component.category.toLowerCase().replace(/ /g, '-')}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-text-primary">
                            {component.name}
                          </h3>
                          <Badge variant="primary">{component.complexity}</Badge>
                        </div>
                        <p className="text-sm text-text-tertiary mb-3 line-clamp-2">
                          {component.description}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 mt-4">
                        <Link href={`/components/${component.id}`} className="flex-1">
                          <Button variant="secondary" size="small" fullWidth>
                            View Details
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          size="small"
                          onClick={() => handleRemove(component.id)}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
