'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function TemplatesPage() {
  const templates = [
    {
      id: 'dashboard',
      name: 'Dashboard Layout',
      description: 'Modern dashboard with sidebar navigation, stats cards, and data visualizations.',
      tags: ['Layout', 'Data Display', 'Navigation'],
      complexity: 'Advanced',
    },
    {
      id: 'landing',
      name: 'Landing Page',
      description: 'Eye-catching landing page with hero section, features, and call-to-action areas.',
      tags: ['Marketing', 'Hero', 'Layout'],
      complexity: 'Intermediate',
    },
    {
      id: 'auth',
      name: 'Authentication Forms',
      description: 'Login and signup forms with validation and glassmorphic styling.',
      tags: ['Form', 'Auth', 'Validation'],
      complexity: 'Basic',
    },
    {
      id: 'profile',
      name: 'User Profile',
      description: 'Complete user profile page with editable fields and avatar upload.',
      tags: ['User', 'Form', 'Profile'],
      complexity: 'Intermediate',
    },
    {
      id: 'settings',
      name: 'Settings Page',
      description: 'Organized settings page with tabs, toggles, and form controls.',
      tags: ['Settings', 'Form', 'Navigation'],
      complexity: 'Intermediate',
    },
    {
      id: 'data-table',
      name: 'Data Table View',
      description: 'Advanced data table with sorting, filtering, and pagination.',
      tags: ['Table', 'Data Display', 'Pagination'],
      complexity: 'Advanced',
    },
  ];

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
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Template Examples
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Complete page templates built with our component library. 
            Use these as starting points for your projects.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} hover glassmorphism className="h-full">
              <div className="flex flex-col h-full">
                {/* Preview Placeholder */}
                <div className="h-48 rounded-lg bg-background-tertiary mb-4 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl text-text-quaternary opacity-30">
                    📄
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {template.name}
                    </h3>
                    <Badge variant={getComplexityVariant(template.complexity)}>
                      {template.complexity}
                    </Badge>
                  </div>

                  <p className="text-sm text-text-tertiary mb-4">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <Button variant="primary" size="small" fullWidth>
                    Preview
                  </Button>
                  <Button variant="secondary" size="small">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Getting Started Section */}
        <section className="mt-16">
          <Card glassmorphism padding="large">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Using Templates
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                These templates are built using components from our library. 
                To use a template in your project:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Click "Preview" to see the full template in action</li>
                <li>Review the component structure and code</li>
                <li>Copy the code to your project</li>
                <li>Customize the content and styling to match your needs</li>
                <li>Add your own functionality and integrations</li>
              </ol>
              <div className="mt-6 p-4 rounded-lg bg-background-tertiary/50">
                <p className="text-sm">
                  <strong className="text-text-primary">Note:</strong> Templates are provided as starting points. 
                  You'll need to adapt them to your specific requirements and integrate with your backend services.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
