'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function UseCasesPage() {
  const useCases = [
    {
      id: 'form-submission',
      title: 'Form Submission Flows',
      description: 'Complete patterns for handling user input, validation, and submission feedback.',
      components: ['Button', 'Text Input', 'Dropdown', 'Checkbox'],
      icon: 'file-edit',
      gradient: 'from-primary to-primary-dark',
    },
    {
      id: 'data-display',
      title: 'Data Display Patterns',
      description: 'Effective ways to present information, statistics, and data visualizations.',
      components: ['Card', 'Data Chart', 'Badge', 'Table'],
      icon: 'bar-chart-2',
      gradient: 'from-accent-blue to-blue-600',
    },
    {
      id: 'user-feedback',
      title: 'User Feedback Scenarios',
      description: 'Patterns for communicating success, errors, warnings, and loading states.',
      components: ['Modal', 'Loading Spinner', 'Badge', 'Button'],
      icon: 'message-circle',
      gradient: 'from-accent-green to-emerald-600',
    },
    {
      id: 'navigation',
      title: 'Navigation Patterns',
      description: 'Intuitive navigation structures for guiding users through your application.',
      components: ['Navigation Menu', 'Button', 'Badge'],
      icon: 'compass',
      gradient: 'from-accent-pink to-pink-600',
    },
    {
      id: 'onboarding',
      title: 'Onboarding Flows',
      description: 'Step-by-step patterns for introducing users to your product features.',
      components: ['Modal', 'Button', 'Card'],
      icon: 'user-plus',
      gradient: 'from-accent-orange to-orange-600',
    },
    {
      id: 'search-filter',
      title: 'Search & Filter',
      description: 'Patterns for helping users find and filter content efficiently.',
      components: ['Text Input', 'Dropdown', 'Badge', 'Button'],
      icon: 'filter',
      gradient: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-bg-radial opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Use Cases
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Discover real-world applications and implementation patterns for common design scenarios.
            Each use case shows recommended components and best practices.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <Card key={useCase.id} hover glassmorphism className="h-full">
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4`}>
                  <i className={`lucide-${useCase.icon} text-white text-2xl`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {useCase.title}
                </h3>
                <p className="text-text-tertiary mb-4 flex-1">
                  {useCase.description}
                </p>

                {/* Components */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-secondary mb-2">
                    Recommended Components:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.components.map((component) => (
                      <Badge key={component} variant="default">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <Button variant="secondary" size="small" fullWidth>
                  View Pattern
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Best Practices Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Implementation Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card glassmorphism padding="large">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Do's
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Use consistent patterns across similar use cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Provide clear feedback for user actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Test patterns with real users for usability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Consider accessibility in all implementations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Adapt patterns to your specific context</span>
                </li>
              </ul>
            </Card>

            <Card glassmorphism padding="large">
              <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Don'ts
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Don't use too many different patterns for similar tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Don't ignore mobile and responsive considerations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Don't overcomplicate simple interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Don't sacrifice accessibility for aesthetics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Don't copy patterns without understanding context</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
