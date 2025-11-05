'use client';

import React from 'react';
import Link from 'next/link';
import { ComponentMetadata } from '@/lib/types';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { addToCollection, isInCollection } from '@/lib/collection-storage';

interface ComponentCardProps {
  component: ComponentMetadata;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const [inCollection, setInCollection] = React.useState(false);

  React.useEffect(() => {
    setInCollection(isInCollection(component.id));

    const handleUpdate = () => {
      setInCollection(isInCollection(component.id));
    };

    window.addEventListener('collectionUpdate', handleUpdate);
    return () => window.removeEventListener('collectionUpdate', handleUpdate);
  }, [component.id]);

  const handleAddToCollection = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCollection(component.id);
  };

  const getComplexityVariant = (complexity: string) => {
    switch (complexity) {
      case 'Basic':
        return 'success';
      case 'Intermediate':
        return 'warning';
      case 'Advanced':
        return 'danger';
      default:
        return 'default';
    }
  };

  return (
    <Link href={`/components/${component.id}`}>
      <Card hover glassmorphism className="h-full group">
        <div className="flex flex-col h-full">
          {/* Preview area - placeholder for now */}
          <div className="h-40 rounded-lg bg-background-tertiary mb-4 flex items-center justify-center overflow-hidden">
            <div className="text-4xl text-text-quaternary opacity-50">
              <i className={`lucide-${component.category.toLowerCase().replace(/ /g, '-')}`} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                {component.name}
              </h3>
              <Badge variant={getComplexityVariant(component.complexity)}>
                {component.complexity}
              </Badge>
            </div>

            <p className="text-sm text-text-tertiary mb-3 line-clamp-2">
              {component.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {component.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
              {component.tags.length > 3 && (
                <Badge variant="default">+{component.tags.length - 3}</Badge>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto">
            <Button
              variant="primary"
              size="small"
              className="flex-1"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              View Details
            </Button>
            <Button
              variant={inCollection ? 'success' : 'secondary'}
              size="small"
              onClick={handleAddToCollection}
              disabled={inCollection}
            >
              {inCollection ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
